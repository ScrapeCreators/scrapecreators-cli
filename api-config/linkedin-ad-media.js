export const LINKEDIN_AD_MEDIA_DESCRIPTION =
  "The existing image, video, organicVideo, preRollVideo, and carouselImages fields keep their previous values. imageSources and thumbnailSources list the creative-image and video-poster URLs LinkedIn supplies. videoSources lists native video renditions as { src, type, bitrate }; preRollVideoSources uses the same structure but contains only pre-roll ad video. type and bitrate are null when absent; bitrate is in bits per second. Choose the lowest positive bitrate for a smaller video download, rather than assuming source order ranks quality. All four source fields are arrays and are empty when unavailable. Document-cover previews are included in imageSources where available, including search fallback results. LinkedIn may expose only one image or thumbnail resolution; URLs are signed and should not be rewritten to guess smaller sizes. Search detail hydration is best-effort, so blocked or timed-out detail fetches can leave videoSources empty even for a video ad. No extra parameter or credit charge is required. adDuration is the ad availability date-range text, not video playback duration; it is an empty string with null startDate/endDate when LinkedIn does not publish the availability block.";

export const linkedinAdMediaResponseFields = (prefix = "") => [
  {
    path: `${prefix}imageSources`,
    description: "Array of unique creative-image URLs, including available carousel images and document-cover previews. Does not guarantee multiple sizes of the same image. Empty when unavailable.",
  },
  {
    path: `${prefix}videoSources`,
    description: "Array of native video rendition objects. Source order is preserved, not sorted by quality. Empty when unavailable, including when optional detail hydration fails.",
  },
  {
    path: `${prefix}videoSources[].src`,
    description: "Complete signed download URL for the rendition. Use it unchanged.",
  },
  {
    path: `${prefix}videoSources[].type`,
    description: "Native MIME type, for example video/mp4, or null when absent.",
  },
  {
    path: `${prefix}videoSources[].bitrate`,
    description: "Native bitrate in bits per second, or null when absent. Choose the lowest positive value to prefer a smaller download.",
  },
  {
    path: `${prefix}thumbnailSources`,
    description: "Array of unique video poster/thumbnail URLs. LinkedIn may supply only one resolution. Search-card thumbnails are retained even if detail hydration fails.",
  },
  {
    path: `${prefix}preRollVideoSources`,
    description: "Array of pre-roll ad rendition objects with src, type, and bitrate. Separate from the organic video's videoSources. Empty when unavailable.",
  },
  {
    path: `${prefix}adDuration`,
    description: "Public ad availability date-range text, not video playback duration. Empty string when unavailable; startDate and endDate are then null.",
  },
];
