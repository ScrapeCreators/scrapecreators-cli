// Public wire examples, not upstream payloads. Balances and handles are illustrative.
const uncharged = { success: false, credits_remaining: 100, credits_charged: 0 };
export const instagramProfileStateExamples = {
  ageRestricted: {
    ...uncharged, handle: "example_profile", userId: null, age_restricted: true,
    error: "forbidden", errorStatus: 403, message: "Profile is age restricted",
  },
  audienceRestricted: {
    ...uncharged, handle: "example_profile", userId: null,
    error: "not_found", errorStatus: 404, message: "Profile is restricted",
  },
  unavailable: {
    ...uncharged, error: "not_found", errorStatus: 404,
    message: "Profile is unavailable on Instagram",
  },
  privatePlaceholder: {
    success: true, credits_remaining: 99, credits_charged: 1,
    handle: "example_profile", userId: null,
    error: "not_found", errorStatus: 404, message: "Profile is private",
  },
  restrictedPlaceholder: {
    success: true, credits_remaining: 99, credits_charged: 1,
    handle: "example_profile", userId: null,
    error: "not_found", errorStatus: 404, message: "Profile is restricted",
  },
  missingPlaceholder: {
    success: true, credits_remaining: 99, credits_charged: 1,
    handle: "example_profile", userId: null,
    error: "not_found", errorStatus: 404, message: "Account doesn't exist",
  },
};

export const instagramPostsStateExamples = {
  ageRestricted: {
    ...uncharged, error: "forbidden", errorStatus: 403,
    message: "Profile is age restricted",
  },
  restricted: {
    ...uncharged, error: "not_found", errorStatus: 404,
    message: "Profile is private",
  },
  unavailable: { ...instagramProfileStateExamples.unavailable },
};

export const instagramProfileStateEntries = [
  { name: "Confirmed age gate", httpStatus: 403, description: "Branch on errorStatus === 403 && age_restricted === true. An explicit age-verification notice is required, not a generic login prompt. The flag does not identify region restrictions; omission is unknown, not false.", response: instagramProfileStateExamples.ageRestricted },
  { name: "Explicit audience restriction", httpStatus: 404, description: "No structured age/region reason field exists. Match error=not_found and the exact message together with the HTTP status. This does not prove age gating or deletion.", response: instagramProfileStateExamples.audienceRestricted },
  { name: "Confirmed unavailable page", httpStatus: 404, description: "The cause is unknown. This body does not include handle, userId, or age_restricted, and does not prove deletion.", response: instagramProfileStateExamples.unavailable },
  { name: "Legacy private placeholder", httpStatus: 200, description: "GET and trimmed GET: one credit, success=true, but no usable profile data. POST handle requests preserve success=false instead, with the same message and one-credit cost.", response: instagramProfileStateExamples.privatePlaceholder },
  { name: "Legacy restricted placeholder", httpStatus: 200, description: "Reported content with an empty public timeline. GET checks userId === null; POST checks data.user === null and preserves success=false. Both cost one credit. Neither confirms an age limit.", response: instagramProfileStateExamples.restrictedPlaceholder },
  { name: "Legacy missing-account placeholder", httpStatus: 200, description: "No matching account from a handle lookup, not confirmed deletion. GET preserves success=true; POST handle requests preserve success=false. Both cost one credit. The message was not globally renamed to the unavailable-page message.", response: instagramProfileStateExamples.missingPlaceholder },
];

export const instagramPostsStateEntries = [
  { name: "Confirmed age gate", httpStatus: 403, description: "Applies to v1 and v2 user-post handle resolution. Unlike the profile endpoint, this body has no age_restricted, handle, or userId. Zero credits.", response: instagramPostsStateExamples.ageRestricted },
  { name: "Explicit restricted-profile error", httpStatus: 404, description: "The exact message is Profile is private, not Profile is restricted. No reliable age/region reason field is exposed. Zero credits.", response: instagramPostsStateExamples.restricted },
  { name: "Confirmed unavailable profile", httpStatus: 404, description: "Unavailability does not prove deletion. Zero credits. These explicit success=false errors are separate from v2's retained legacy success=true HTTP-404 fallbacks: Posts not found, Account doesn't exist, and Profile is restricted.", response: instagramPostsStateExamples.unavailable },
];

const json = (value) => `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;

export const instagramProfileStateDocs = `### Profile access response contract

These are existing response contracts, not new API behavior. HTTP status, JSON field names/types, error values, message values, and credit behavior are compatibility-sensitive. We preserve them on existing endpoint versions; incompatible changes require an explicitly versioned contract and advance notice. See the [response-contract changelog](/#response-contract-changelog).

**Confirmed age gate — HTTP 403, zero credits.** For this profile endpoint, branch on errorStatus === 403 && age_restricted === true. The flag means Instagram explicitly rendered an age-verification gate, not a generic login prompt. It is omitted otherwise; omission does not mean false. It does not identify country/region restrictions.
${json(instagramProfileStateExamples.ageRestricted)}
**Explicit audience restriction — HTTP 404, zero credits.** This is different from an age gate and from an unavailable profile. There is currently no structured age/region reason field for this case: use HTTP 404, error=not_found, and the exact message below. Do not invent a reason or treat every 404 as a deleted account.
${json(instagramProfileStateExamples.audienceRestricted)}
**Confirmed unavailable page — HTTP 404, zero credits.** Instagram reports the profile as unavailable. This does not establish whether it was deleted, renamed, suspended, or hidden. This response intentionally has no handle, userId, or age_restricted field.
${json(instagramProfileStateExamples.unavailable)}
**Legacy GET placeholders — HTTP 200, one credit.** These still exist. A JSON errorStatus of 404 is not the HTTP status. HTTP 200 and success=true alone do not prove usable profile data. The three legacy messages are preserved exactly:

Private profile:
${json(instagramProfileStateExamples.privatePlaceholder)}
Reported content with an empty public timeline:
${json(instagramProfileStateExamples.restrictedPlaceholder)}
No matching account from the handle lookup (not proof of deletion):
${json(instagramProfileStateExamples.missingPlaceholder)}
GET trim=true retains these state envelopes. POST handle requests retain a historical difference: these HTTP-200 placeholders have success=false instead of true; they still cost one credit. The POST restricted-placeholder condition is data.user === null, while GET uses userId === null. The explicit 403/404 responses above apply to both methods. Legacy POST userId requests use a separate compatibility path and are not covered by the handle contract.

**Endpoint scope.** /v1/instagram/user/posts and /v2/instagram/user/posts also return the uncharged 403 forbidden age-gate message, but do not include age_restricted, handle, or userId in that error body. Their explicit restricted-profile 404 says Profile is private, not Profile is restricted. Do not copy this profile endpoint's envelope to /v1/instagram/post or /v1/tiktok/profile; those contracts are separate. Ambiguous upstream failures are not evidence of a missing or restricted account.`;

export const instagramPostsStateDocs = `### Profile access errors

This describes existing handle-resolution errors on /v1/instagram/user/posts and /v2/instagram/user/posts, not a new response change. Preserve each endpoint's response contract; see the [response-contract changelog](/#response-contract-changelog).

A confirmed age gate returns HTTP 403 and zero credits. Unlike /v1/instagram/profile, these routes do not include age_restricted, handle, or userId in this error response:
${json(instagramPostsStateExamples.ageRestricted)}
An explicit restricted-profile error returns HTTP 404 and zero credits, with the exact message Profile is private:
${json(instagramPostsStateExamples.restricted)}
An explicitly confirmed unavailable profile returns HTTP 404 and zero credits:
${json(instagramPostsStateExamples.unavailable)}
These are the explicit handle-resolution error branches, not a blanket description of every historical 404 fallback. The v2 route also retains legacy success=true HTTP-404 bodies (Posts not found, Account doesn't exist, or Profile is restricted). Do not confuse those with the explicit success=false responses above. No age-vs-region reason field is exposed. A generic login prompt does not establish age gating, and unavailability does not prove deletion. /v1/instagram/post and /v1/tiktok/profile have separate error contracts.`;
