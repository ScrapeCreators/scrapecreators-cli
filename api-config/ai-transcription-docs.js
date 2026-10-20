// Shared public contract for synchronous AI transcription and clip routes only.
// Twitch/Kick VOD behavior and pricing are unchanged.
export const AI_TRANSCRIPTION_PRICING =
  "By default, successful AI transcription of videos up to 120 seconds (two minutes, inclusive) costs a flat 1 credit per request. Over 120 seconds, videos cannot be AI-transcribed by default. Set allow_long_transcription=true to opt into paid AI with no fixed duration cap: ALL successful AI transcriptions in this mode cost 10 credits per started minute, including short videos: 10 * ceil(duration_seconds / 60). For example, 177 seconds costs 30 credits and an opted-in 60 seconds costs 10 credits. Empty AI results and errors cost 0 credits for AI transcription.";

export const AI_TRANSCRIPTION_RUNTIME =
  "These routes remain synchronous. Allow at least 30 seconds on your client. Paid long transcription can exceed resource limits or timeouts, so successful transcription of long videos is not guaranteed.";

export const AI_TRANSCRIPTION_CREDITS = {
  type: "variable",
  cost: 1,
  description: "AI up to 2 minutes: 1 credit. Paid mode: 10 credits/minute, rounded up, even for short videos. No transcript: 0 credits.",
  fullDescription: "By default, successful AI up to 120 seconds costs a flat 1 credit per request; over 120 seconds requires allow_long_transcription=true, which bills ALL successful AI at 10 credits per started minute, including short videos; empty AI results and errors cost 0 credits",
};

export const NATIVE_OR_AI_CREDITS = {
  ...AI_TRANSCRIPTION_CREDITS,
  description: "Native captions or AI up to 2 minutes: 1 credit. Paid AI mode: 10 credits/minute, rounded up, even for short videos. No transcript: 0 credits.",
  fullDescription: `Returned native captions cost 1 credit, even for long videos with the paid flag. ${AI_TRANSCRIPTION_CREDITS.fullDescription}; no transcript: 0 credits`,
};

export const ALLOW_LONG_TRANSCRIPTION_PARAM = {
  name: "allow_long_transcription",
  type: "boolean",
  required: false,
  default: false,
  placeholder: false,
  description: "Allow AI transcription over 2 minutes. Paid rates apply to short videos too. Enable transcription separately.",
  fullDescription: `Paid opt-in, enabled only by the literal query value 'true' (allow_long_transcription=true). Defaults to false when omitted; other values do not enable paid mode. ${AI_TRANSCRIPTION_PRICING} This flag does not force AI and does not enable transcription or AI fallback by itself. Keep get_transcript=true or use_ai_as_fallback=true where required by the endpoint. Returned native captions still cost 1 credit on dedicated transcript routes, even for long videos with this flag; on detail routes they leave the base price unchanged. ${AI_TRANSCRIPTION_RUNTIME}`,
  credits: {
    type: "variable",
    cost: 10,
    description: "10 credits/minute, rounded up. Added to the base cost on detail endpoints.",
    fullDescription: "Successful AI in paid mode: 10 credits per started minute. Dedicated transcript routes charge this instead of a native-caption fee; detail routes add this to the existing base cost.",
    note: "per started minute for successful AI in paid mode; dedicated routes charge this instead of a native-caption fee, detail routes add it to the base cost",
  },
};

export const DETAIL_TRANSCRIPTION_NOTICE =
  `Transcription is opt-in via get_transcript=true. Default short AI (up to 120 seconds, inclusive) is included in the existing base endpoint price, with no extra AI fee. ${AI_TRANSCRIPTION_PRICING} On detail routes, successful paid-mode AI costs are in addition to the existing base endpoint cost; media-download pricing is unchanged. Returned native captions leave the base endpoint price unchanged. Empty AI results and errors incur no AI fee; the base scrape fee still applies when the detail scrape succeeds. ${AI_TRANSCRIPTION_RUNTIME}`;

export const AI_DURATION_FIELDS = [
  {
    path: "duration_seconds",
    name: "duration_seconds",
    type: "number",
    description: "AI-transcribed duration in seconds. For carousels, the total duration of successfully transcribed videos.",
    fullDescription: "Present only when an AI transcript is returned: media duration in seconds. For Instagram carousels, this is the total (sum) duration of successfully transcribed videos. Only paid mode rounds each video's billable minutes separately; default carousel pricing stays flat at 1 credit per request.",
  },
  {
    path: "duration_minutes",
    name: "duration_minutes",
    type: "number",
    description: "AI-transcribed duration in minutes, to 2 decimal places. Not billable minutes; see credits_charged for the actual charge.",
    fullDescription: "Present only when an AI transcript is returned: duration_seconds / 60 rounded to two decimal places, not the rounded-up billable minutes in paid mode. Default successful short AI remains 1 credit per request. Use credits_charged for the actual charge.",
  },
];
