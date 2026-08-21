const sampleTelegramPost = {
  id: "543",
  channel_handle: "durov",
  url: "https://t.me/durov/543",
  author_name: "Pavel Durov",
  author_url: "https://t.me/durov",
  text: "Telegram has applied for the .gram domain zone. If approved, Telegram users could get their own second-level domains.",
  published_at: "2026-08-18T17:37:31+00:00",
  view_count: 1210000,
  view_count_text: "1.21M",
  reactions: [
    {
      emoji: "⭐",
      emoji_id: null,
      count: 16300,
      count_text: "16.3K",
    },
    {
      emoji: null,
      emoji_id: "5373223594484587136",
      count: 44700,
      count_text: "44.7K",
    },
  ],
  reaction_count: 89300,
  forwarded_from: null,
  media: [],
  link_preview: null,
};

const sampleTelegramChannel = {
  handle: "telegram",
  name: "Telegram News",
  description: "The official Telegram on Telegram. Much recursion. Very Telegram. Wow.",
  url: "https://t.me/telegram",
  avatar_url: "https://cdn1.telesco.pe/file/...",
  is_verified: true,
  subscriber_count: 9780000,
  subscriber_count_text: "9.78M",
  member_count: null,
  member_count_text: null,
  photo_count: 14,
  video_count: 225,
  file_count: null,
  link_count: 372,
};

export const telegramApis = {
  id: "telegram",
  name: "Telegram",
  description: "Scrape public Telegram channels, groups, and posts",
  endpoints: [
    {
      name: "Channel Details",
      method: "GET",
      description: "Get public Telegram channel or group details from its web preview.",
      fullDescription:
        "Retrieves public Telegram channel or group metadata including its name, description, avatar, verification status, subscriber or member count, and public media counters. This endpoint uses Telegram's public web preview and does not use a logged-in Telegram account. Private channels, invite-only groups, numeric IDs, and channels with no public web preview are not supported.",
      path: "/v1/telegram/channel",
      sampleResponse: sampleTelegramChannel,
      params: [
        {
          name: "handle",
          type: "string",
          required: true,
          placeholder: "telegram",
          description:
            "Public Telegram handle, @handle, or t.me channel URL.",
        },
      ],
    },
    {
      name: "Channel Posts",
      method: "GET",
      description: "Get one page of recent public posts from a Telegram channel or group.",
      fullDescription:
        "Retrieves one public web-preview page of Telegram posts with text, publish date, views, reactions when exposed, forwards, media previews, and link previews. Pass the returned cursor to fetch the previous page. Empty and terminal pages are not charged. Telegram does not expose every field on every public post, so reactions and downloadable media URLs can be absent. This endpoint does not support private or invite-only channels and groups.",
      path: "/v1/telegram/channel/posts",
      paginationField: "cursor",
      sampleResponse: {
        channel: {
          ...sampleTelegramChannel,
          handle: "durov",
          name: "Pavel Durov",
          description: "Founder of Telegram.",
          url: "https://t.me/durov",
          subscriber_count: 11100000,
          subscriber_count_text: "11.1M",
        },
        posts: [sampleTelegramPost],
        cursor: "523",
        has_more: true,
      },
      params: [
        {
          name: "handle",
          type: "string",
          required: true,
          placeholder: "durov",
          description:
            "Public Telegram handle, @handle, or t.me channel URL.",
        },
        {
          name: "cursor",
          type: "string",
          required: false,
          placeholder: "523",
          description:
            "Numeric cursor returned by the previous page. Omit it for the latest posts.",
        },
      ],
    },
    {
      name: "Post Details",
      method: "GET",
      description: "Get one public Telegram post by URL.",
      fullDescription:
        "Retrieves one public Telegram post with its text, publish date, views, reactions when exposed, forward source, media previews, and link preview. This endpoint uses Telegram's public post widget without a logged-in account. Private and invite-only posts are not supported.",
      path: "/v1/telegram/post",
      sampleResponse: sampleTelegramPost,
      params: [
        {
          name: "url",
          type: "string",
          required: true,
          placeholder: "https://t.me/durov/543",
          description: "Public Telegram post URL.",
        },
      ],
    },
  ],
};
