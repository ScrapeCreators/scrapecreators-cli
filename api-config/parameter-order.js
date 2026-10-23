// Presentation only: do not rename params, infer pagination from an arbitrary
// token/ID suffix, or change query/body/header locations. Keep ties source-stable.
export const PRIMARY_PARAMS = new Set([
  "handle", "url", "id", "user_id", "userId", "channelId", "query", "hashtag",
  "room_id", "comment_id", "clipId", "product_id", "audio_id", "playlist_id",
  "pageId", "feedback_id", "expansion_token", "group_id", "companyName",
  "advertiser_name", "adv_biz_ids", "ad_id", "domain", "advertiser_id",
  "company", "keyword", "companyId", "subreddit",
]);

// Audited request-side aliases (paginationField can name a response field instead,
// e.g. collection/videos accepts cursor but returns max_cursor). page is a page
// position; count is a page-size filter, not a continuation. next_page_id and
// cursor are a companion pair on Facebook photos/reels: keep both, in source order.
export const PAGINATION_PARAMS = new Set([
  "cursor", "max_cursor", "min_time", "next_max_id", "max_id", "page",
  "continuationToken", "next_page_id", "paginationToken", "after", "pageToken",
]);

export const BEHAVIOR_PARAMS = new Set([
  "trim", "cache_max_age", "get_transcript", "download_media",
  "allow_long_transcription", "use_ai_as_fallback", "require_play_counts",
  "include_play_count", "include_replies", "allow_estimated", "includeExtras",
  "get_business_hours", "include_gated_profile", "get_ad_details",
]);

// Explicitly audited selectors, including boolean selection filters. New names
// default to this group, but the coverage test requires review of every new name.
export const FILTER_PARAMS = new Set([
  "sort_by", "region", "include_pinned", "language", "date_posted",
  "publish_time", "sortBy", "followerCount", "creatorCountry", "audienceCountry",
  "media_type", "sort", "is_paid_promotions", "original_audio", "uploadDate",
  "type", "duration", "order", "direction", "since", "until", "year",
  "spoken_language_code", "category_id", "lat", "lng", "radius_km", "min_price",
  "max_price", "delivery_method", "condition", "date_listed", "availability",
  "time", "search_type", "ad_type", "country", "status", "start_date", "end_date",
  "topic", "platform", "format", "countries", "startDate", "endDate", "timeframe",
  "filter", "filter_by", "count", "endpoint", "statusCode", "start_time", "end_time",
]);

export function parameterGroup(endpoint, param) {
  // paginationGroup is an author override for a future opaque request alias.
  // It is not serialized onto existing parameter objects by this policy.
  if (param.paginationGroup === true || PAGINATION_PARAMS.has(param.name) ||
      param.name === endpoint.paginationField) return 3;
  if (PRIMARY_PARAMS.has(param.name) || param.required) return 0;
  if (BEHAVIOR_PARAMS.has(param.name)) return 2;
  return 1;
}

export function orderEndpointParams(endpoint, params = endpoint.params || []) {
  return [...params].sort((a, b) => parameterGroup(endpoint, a) - parameterGroup(endpoint, b));
}
