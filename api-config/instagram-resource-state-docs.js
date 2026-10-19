// Public wire examples, not upstream payloads. Balances and handles are illustrative.
const uncharged = { success: true, credits_remaining: 100, credits_charged: 0 };
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
    data: {
      user: {
        id: "12345",
        username: "example_profile",
        full_name: "Example Profile",
        biography: "An example profile. https://example.org/",
        bio_links: [{
          title: "Website", url: "https://example.org/",
          lynx_url: "https://example.org/linkshim", link_type: "external",
        }],
        fb_profile_biolink: null,
        biography_with_entities: {
          raw_text: "An example profile. https://example.org/", entities: [],
        },
        external_url: "https://example.org/",
        external_url_linkshimmed: "https://example.org/linkshim",
        profile_pic_url: "https://example.org/profile.jpg",
        profile_pic_url_hd: "https://example.org/profile-hd.jpg",
        is_verified: false,
        is_business_account: false,
        is_professional_account: false,
        category_name: null,
        business_category_name: null,
        overall_category_name: null,
        category_enum: null,
        business_address_json: {},
        business_contact_method: "UNKNOWN",
        business_email: null,
        business_phone_number: null,
        should_show_category: false,
        should_show_public_contacts: false,
        is_private: true,
        edge_followed_by: { count: 560 },
        edge_follow: { count: 4675 },
      },
    },
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
  { name: "Legacy private placeholder", httpStatus: 200, description: "Private profiles return available public profile metadata in the existing data.user shape, not private posts or raw Instagram internals. Full GET and POST handle requests use the complete public-profile user mapper; GET trim=true uses the existing public-profile trim field list. POST handle requests ignore trim and return the full mapped user. HTTP 200, one credit, GET success=true/POST success=false, userId=null, and the existing error/message stay unchanged. Unknown or unusable follower/following counts are null; real 0 is preserved.", response: instagramProfileStateExamples.privatePlaceholder },
  { name: "Legacy restricted placeholder", httpStatus: 200, description: "Historical restricted-result handler branch. The current metadata-first pipeline does not infer a restriction merely from an empty timeline: it retains matching metadata as a partial HTTP 200. GET checks userId === null; POST checks data.user === null and preserves success=false for that placeholder. Both placeholder branches cost one credit.", response: instagramProfileStateExamples.restrictedPlaceholder },
  { name: "Legacy missing-account placeholder", httpStatus: 200, description: "No matching account from a handle lookup, not confirmed deletion. GET preserves success=true; POST handle requests preserve success=false. Both cost one credit. The message was not globally renamed to the unavailable-page message.", response: instagramProfileStateExamples.missingPlaceholder },
];

export const instagramPostsStateEntries = [
  { name: "Confirmed age gate", httpStatus: 403, description: "Applies to v1 and v2 user-post handle resolution. Unlike the profile endpoint, this body has no age_restricted, handle, or userId. Zero credits.", response: instagramPostsStateExamples.ageRestricted },
  { name: "Explicit restricted-profile error", httpStatus: 404, description: "The exact message is Profile is private, not Profile is restricted. No reliable age/region reason field is exposed. Zero credits.", response: instagramPostsStateExamples.restricted },
  { name: "Confirmed unavailable profile", httpStatus: 404, description: "Unavailability does not prove deletion. Zero credits. These explicit confirmed-state responses are separate from v2's retained legacy HTTP-404 fallbacks: Posts not found, Account doesn't exist, and Profile is restricted.", response: instagramPostsStateExamples.unavailable },
];

const json = (value) => `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;

export const instagramProfileStateDocs = `### Profile access response contract

The confirmed-state success flag is intentionally restored to true: success means we determined the profile state, not that the profile exists or its content is publicly retrievable. HTTP 403/404 and zero-credit billing remain unchanged. Actual retrieval failures remain success=false. HTTP status, JSON field names/types, error values, message values, and credit behavior are compatibility-sensitive. We preserve them on existing endpoint versions; incompatible changes require an explicitly versioned contract and advance notice. See the [response-contract changelog](/#response-contract-changelog).

**Confirmed age gate — HTTP 403, zero credits.** For this profile endpoint, branch on errorStatus === 403 && age_restricted === true. The flag means Instagram explicitly rendered an age-verification gate, not a generic login prompt. It is omitted otherwise; omission does not mean false. It does not identify country/region restrictions.
${json(instagramProfileStateExamples.ageRestricted)}
**Explicit audience restriction — HTTP 404, zero credits.** This is different from an age gate and from an unavailable profile. There is currently no structured age/region reason field for this case: use HTTP 404, error=not_found, and the exact message below. Do not invent a reason or treat every 404 as a deleted account.
${json(instagramProfileStateExamples.audienceRestricted)}
**Confirmed unavailable page — HTTP 404, zero credits.** Instagram reports the profile as unavailable. This does not establish whether it was deleted, renamed, suspended, or hidden. This response intentionally has no handle, userId, or age_restricted field.
${json(instagramProfileStateExamples.unavailable)}
**Legacy GET placeholders — HTTP 200, one credit.** These still exist. A JSON errorStatus of 404 is not the HTTP status. HTTP 200 and success=true alone do not prove usable profile data. The three legacy messages are preserved exactly:

**Private profile public metadata.** Private profiles return all available public profile metadata through the existing data.user shape: ID, username, full name, biography, bio links/entities, external website/linkshim, standard/HD profile photos, verification, privacy, business/professional/category information, public contact fields when Instagram returns them, and counts. Full GET and POST handle requests use the complete existing public-profile user mapper; its fields and defaults remain unchanged except that unknown or unusable private follower/following counts are null, while a real 0 is preserved. The count paths remain data.user.edge_followed_by.count (followers) and data.user.edge_follow.count (following).

GET trim=true uses the existing public-profile trim field list, retaining name, biography, bio links/entities, external_url, profile photos, privacy/verification, business/professional flags, category_name, business_address_json, and counts. Full-only fields such as external_url_linkshimmed, business_email, and business_phone_number are omitted from trimmed GET. POST handle requests ignore trim and return the full mapped user, as before.

Full metadata means all mapped profile fields, not raw Instagram internals, private posts, or an age-gate bypass. Public contact information is not guaranteed; unavailable values keep the public mapper's existing defaults. Age-restricted responses are unchanged. Every preexisting top-level field is retained: HTTP 200, userId=null, error=not_found, errorStatus=404, message=Profile is private, and the one-credit charge stay unchanged. POST handle requests keep success=false instead of GET's success=true. The example below shows representative metadata fields, not the exhaustive full mapper output or the trimmed field set. The ID, name, links, photos, handle, and credit balance are synthetic; the counts 560 and 4675 are illustrative and can change.

Private GET response (representative full-response metadata):
${json(instagramProfileStateExamples.privatePlaceholder)}
Historical restricted-result compatibility branch (not the current empty-timeline policy):
${json(instagramProfileStateExamples.restrictedPlaceholder)}
No matching account from the handle lookup (not proof of deletion):
${json(instagramProfileStateExamples.missingPlaceholder)}
These legacy handler branches are retained, but the active metadata-first pipeline no longer emits the heuristic restricted result merely because the timeline is empty; it returns useful matching metadata as a partial HTTP 200 instead. GET trim=true retains the same state-envelope rules. POST handle requests retain a historical difference: these HTTP-200 placeholders have success=false instead of true; they still cost one credit. The POST restricted-placeholder condition is data.user === null, while GET uses userId === null. The explicit 403/404 responses above apply to both methods. A flag-only legacy restricted scraper result is different again: POST can pass through success=true, handle, userId=null, message=Profile is restricted, and isRestricted=true without error/errorStatus. Legacy POST userId requests use a separate compatibility path and are not covered by the handle contract.

**Endpoint scope.** /v1/instagram/user/posts and /v2/instagram/user/posts also return the uncharged 403 forbidden age-gate message, but do not include age_restricted, handle, or userId in that error body. Their explicit restricted-profile 404 says Profile is private, not Profile is restricted. Do not copy this profile endpoint's envelope to /v1/instagram/post or /v1/tiktok/profile; those contracts are separate. Ambiguous upstream failures are not evidence of a missing or restricted account.`;

export const instagramPostsStateDocs = `### Profile access errors

These confirmed handle-resolution states on /v1/instagram/user/posts and /v2/instagram/user/posts return success=true even with HTTP 403/404. A confirmed state is a completed lookup, not a scraper failure. This approved boolean correction does not change status codes, messages, fields, or zero-credit billing. Actual retrieval failures remain success=false. Preserve each endpoint's response contract; see the [response-contract changelog](/#response-contract-changelog).

A confirmed age gate returns HTTP 403 and zero credits. Unlike /v1/instagram/profile, these routes do not include age_restricted, handle, or userId in this error response:
${json(instagramPostsStateExamples.ageRestricted)}
An explicit restricted-profile error returns HTTP 404 and zero credits, with the exact message Profile is private:
${json(instagramPostsStateExamples.restricted)}
An explicitly confirmed unavailable profile returns HTTP 404 and zero credits:
${json(instagramPostsStateExamples.unavailable)}
These are the explicit handle-resolution error branches, not a blanket description of every historical 404 fallback. The v2 route also retains legacy success=true HTTP-404 bodies (Posts not found, Account doesn't exist, or Profile is restricted). They differ in fields and legacy behavior from the explicit confirmed-state responses above; success=true alone does not distinguish them. No age-vs-region reason field is exposed. A generic login prompt does not establish age gating, and unavailability does not prove deletion. /v1/instagram/post and /v1/tiktok/profile have separate error contracts.`;
