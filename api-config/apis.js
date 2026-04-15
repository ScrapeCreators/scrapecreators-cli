import { tiktokBaseApis } from "./tiktok-apis.js";
import { tiktokShopApis } from "./tiktok-shop-apis.js";
import { instagramBaseApis } from "./instagram-apis.js";

export const apis = [
  tiktokBaseApis,
  tiktokShopApis,
  instagramBaseApis,
  {
    id: "youtube",
    name: "YouTube",
    description: "Scrape YouTube channels, videos, and more",
    endpoints: [
      {
        name: "Channel Details",
        method: "GET",
        description:
          "Get comprehensive channel information including stats and metadata. Can pass channelId, handle, or url.",
        fullDescription:
          "Retrieves comprehensive YouTube channel profile data including name, avatar images, subscriber count (subscribers), total video and view counts, join date, tags, and linked social accounts like Twitter and Instagram. Accepts a channelId, handle, or full channel URL as input. Returns channel metadata such as country, email, and external store links when available.",
        path: "/v1/youtube/channel",
        sampleResponse: {
          channelId: "UCxcTeAKWJca6XyJ37_ZoKIQ",
          channel: "http://www.youtube.com/@ThePatMcAfeeShow",
          name: "The Pat McAfee Show",
          avatar: {
            image: {
              sources: [
                {
                  url: "https://yt3.googleusercontent.com/ytc/AIdro_nBgMGIxgHehCAlUUepEhd9Yooi1I55k6IF2WExl-v8Q-c=s72-c-k-c0x00ffffff-no-rj",
                  width: 72,
                  height: 72,
                },
                {
                  url: "https://yt3.googleusercontent.com/ytc/AIdro_nBgMGIxgHehCAlUUepEhd9Yooi1I55k6IF2WExl-v8Q-c=s120-c-k-c0x00ffffff-no-rj",
                  width: 120,
                  height: 120,
                },
                {
                  url: "https://yt3.googleusercontent.com/ytc/AIdro_nBgMGIxgHehCAlUUepEhd9Yooi1I55k6IF2WExl-v8Q-c=s160-c-k-c0x00ffffff-no-rj",
                  width: 160,
                  height: 160,
                },
              ],
              processor: {
                borderImageProcessor: {
                  circular: true,
                },
              },
            },
            avatarImageSize: "AVATAR_SIZE_XL",
            loggingDirectives: {
              trackingParams: "CC0Q6OENIhMIkInyhaSPiwMV9wfWAB3aoR9h",
              visibility: {
                types: "12",
              },
            },
          },
          description: "",
          subscriberCount: 2750000,
          subscriberCountText: "2.75M subscribers",
          videoCountText: "9,221 videos",
          viewCountText: "2,170,355,382 views",
          joinedDateText: "Joined Aug 23, 2017",
          tags: "pat mcafee, football, pat mcafee show, the pat mcafee show, pat mcafee podcast, pat mcafee clips, pat mcafee reacts, pat mcafee highlights, pat mcafee live, pat mcafee show live, pat mcafee podcast, nfl, nba, nhl, mlb, ufc, sports",
          email: null,
          store: "https://store.patmcafeeshow.com",
          twitter: "https://twitter.com/PatMcAfeeShow",
          instagram: "https://instagram.com/patmcafeeshow",
          links: [
            "https://store.patmcafeeshow.com",
            "https://twitter.com/PatMcAfeeShow",
            "https://instagram.com/patmcafeeshow",
          ],
          country: "United States",
        },
        params: [
          {
            name: "channelId",
            type: "string",
            description:
              "YouTube channel ID. Can pass a channelId, handle or url",
            placeholder: "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
          },
          {
            name: "handle",
            type: "string",
            description:
              "YouTube channel handle. Can pass a channelId, handle or url",
            placeholder: "ThePatMcAfeeShow",
          },
          {
            name: "url",
            type: "string",
            description:
              "YouTube channel URL. Can pass a channelId, handle or url",
            placeholder: "https://www.youtube.com/@ThePatMcAfeeShow",
          },
        ],
      },
      {
        name: "Channel Videos",
        method: "GET",
        description:
          "Get all videos from a channel with detailed information. Can pass channelId or handle.",
        fullDescription:
          "Fetches a paginated list of videos uploaded by a YouTube channel, including each video's title, URL, thumbnail, view count (views), publish date, duration, and description. Supports sorting by latest or popular, and use the continuationToken to page through all results. Optionally include extras like like count, comment count, and descriptions for each video.",
        path: "/v1/youtube/channel-videos",
        paginationField: "continuationToken",
        sampleResponse: {
          videos: [
            {
              type: "video",
              id: "5EWaxmWgQMI",
              url: "https://www.youtube.com/watch?v=5EWaxmWgQMI",
              title:
                "Russell Wilson Hopes To Finish Career As A Steeler, Reflects On NFL Career With Pat McAfee",
              description:
                "Welcome to The Pat McAfee Show LIVE from Noon-3PM EST Mon-Fri. You can also find us live on ESPN, ESPN+, & TikTok!\n\nBecome a #McAfeeMafia member! https://www.youtube.com/channel/UCxcTeAKWJca6XyJ37_...",
              thumbnail:
                "https://i.ytimg.com/vi/5EWaxmWgQMI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBZIBEJGcYDrduIZJpaSmYHcIHJ6g",
              channel: { title: "", thumbnail: null },
              viewCountText: "110,447 views",
              viewCountInt: 110447,
              publishedTimeText: "9 days ago",
              publishedTime: "2025-01-23T22:48:53.914Z",
              lengthText: "37:25",
              lengthSeconds: 2245,
              badges: [],
            },
          ],
          continuationToken: "4qmFsgLlFhIYV....",
        },
        youtubeId: "NyOtXBBmjLY",
        codeExample:
          "https://github.com/adrianhorning08/scrape-creators-examples/blob/master/youtubeTranscripts.js",
        params: [
          {
            name: "channelId",
            type: "string",
            description: "YouTube channel ID",
            placeholder: "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
          },
          {
            name: "handle",
            type: "string",
            description: "YouTube channel handle",
            placeholder: "ThePatMcAfeeShow",
          },
          {
            name: "sort",
            type: "select",
            description: "Sort by latest or popular",
            placeholder: "latest",
            options: ["latest", "popular"],
          },
          {
            name: "continuationToken",
            type: "string",
            required: false,
            description:
              "Continuation token to get more videos. Get 'continuationToken' from previous response.",
            placeholder: "4qmFsgKrCBIYVUNkRkpXVWE0M3NtUm00SXBIQnB",
          },
          {
            name: "includeExtras",
            type: "string",
            required: false,
            description:
              "This will get you the like + comment count and the description. To get the full details of the video, use the /v1/youtube/video endpoint. This will slow down the response slightly.",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Channel Shorts",
        method: "GET",
        description:
          "Get the shorts from a channel. If you need more details about the short like description, publish date, etc, you'll need to use the 'Video/Short Details' endpoint.",
        fullDescription:
          "Retrieves a paginated list of short-form videos (Shorts) from a YouTube channel, including each short's title, URL, view count (views), likes, comments, and description. Supports sorting by newest or popular, and use the continuationToken to page through all results. Returns data in the shorts array.",
        path: "/v1/youtube/channel/shorts",
        paginationField: "continuationToken",
        sampleResponse: {
          success: true,
          credits_remaining: 9998708,
          videos: [],
          channels: [],
          playlists: [],
          shorts: [
            {
              type: "short",
              id: "Rdr8357wIRA",
              url: "https://www.youtube.com/watch?v=Rdr8357wIRA",
              title: "My app failed, then I changed one thing, and made $80K",
              viewCountText: "8,035",
              viewCountInt: 8035,
              description:
                "Praneeth quit his $250K/year job to build an app that failed. Then, he changed one thing and made $80K",
              commentCountText: "12",
              commentCountInt: 12,
              likeCountInt: 253,
              likeCountText: "253",
            },
            {
              type: "short",
              id: "PJVxHvPPiOg",
              url: "https://www.youtube.com/watch?v=PJVxHvPPiOg",
              title: "I Built a $1M SaaS Using YouTube",
              viewCountText: "9,952",
              viewCountInt: 9952,
              description:
                "He went from 0 to $79K/month using this one strategy",
              commentCountText: "11",
              commentCountInt: 11,
              likeCountInt: 459,
              likeCountText: "459",
            },
            {
              type: "short",
              id: "lhfku00d9SE",
              url: "https://www.youtube.com/watch?v=lhfku00d9SE",
              title: "they built a $10k/month app thanks to this strategy",
              viewCountText: "13,330",
              viewCountInt: 13330,
              description:
                "These two guys met at a coworking space and now run an app making $10K/month",
              commentCountText: "3",
              commentCountInt: 3,
              likeCountInt: 490,
              likeCountText: "490",
            },
          ],
          shelves: [],
          lives: [],
          continuationToken: "4qmFsgK9DBIYVUNoaHc2RGxLS1.....",
        },
        params: [
          {
            name: "handle",
            type: "string",
            description: "Can pass channelId or handle",
            placeholder: "starterstory",
          },
          {
            name: "channelId",
            type: "string",
            description: "Can pass channelId or handle",
            placeholder: "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
          },
          {
            name: "sort",
            type: "select",
            description: "Sort by newest or popular",
            placeholder: "newest",
            options: ["newest", "popular"],
          },
          {
            name: "continuationToken",
            type: "string",
            required: false,
            description:
              "Continuation token to get more videos. Get 'continuationToken' from previous response.",
            placeholder: "4qmFsgKrCBIYVUNkRkpXVWE0M3NtUm00SXBIQnB",
          },
        ],
      },
      // {
      //   name: "Channel Shorts (we handle the pagination)",
      //   method: "GET",
      //   description:
      //     "Convenience endpoint to get the latest shorts from a channel. We handle the pagination for you. This will cost you more credits because under the hood we're using the 'Channel Shorts' endpoint, just like you would. But making it easier for you. If you need more details about the short like description, publish date, etc, you'll need to use the 'Video/Short Details' endpoint.",
      //   path: "/v1/youtube/channel/shorts/simple",
      //   credits: {
      //     type: "per_item",
      //     cost: 1,
      //     per: 48,
      //   },
      //   sampleResponse: [
      //     {
      //       type: "short",
      //       id: "01D3CgMZ29I",
      //       url: "https://www.youtube.com/watch?v=01D3CgMZ29I",
      //       title: "WHAT A MATCH",
      //       thumbnail:
      //         "https://i.ytimg.com/vi/01D3CgMZ29I/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBTI26rFmtMoUSzLVbr1Izv5pxfkQ",
      //       viewCountText: "13K",
      //       viewCountInt: 13000,
      //     },
      //     {
      //       type: "short",
      //       id: "zCgeCq9hKhY",
      //       url: "https://www.youtube.com/watch?v=zCgeCq9hKhY",
      //       title: "THE FINAL BOSS ALWAYS HAS A PLAN",
      //       thumbnail:
      //         "https://i.ytimg.com/vi/zCgeCq9hKhY/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLClaxJ3g_esWOslLUTBKseo6C2JUw",
      //       viewCountText: "37K",
      //       viewCountInt: 37000,
      //     },
      //     {
      //       type: "short",
      //       id: "95pq2gD-h3c",
      //       url: "https://www.youtube.com/watch?v=95pq2gD-h3c",
      //       title: "HOLY SHIT IT'S RapSheet 😂😂😂",
      //       thumbnail:
      //         "https://i.ytimg.com/vi/95pq2gD-h3c/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBu2MDEIFE42RwtnCrjeGbkpTHgoQ",
      //       viewCountText: "88K",
      //       viewCountInt: 88000,
      //     },
      //   ],
      //   params: [
      //     {
      //       name: "handle",
      //       type: "string",
      //       description: "Can pass channelId or handle",
      //       placeholder: "ThePatMcAfeeShow",
      //     },
      //     {
      //       name: "channelId",
      //       type: "string",
      //       description: "Can pass channelId or handle",
      //       placeholder: "UC-9-kyTW8ZkZNDHQJ6FgpwQ",
      //     },
      //     {
      //       name: "amount",
      //       type: "number",
      //       required: true,
      //       description: "The amount of shorts to return.",
      //       placeholder: 20,
      //     },
      //   ],
      // },
      {
        name: "Video/Short Details",
        method: "GET",
        description:
          "Get complete information about a video or short including the transcript! There is a 'transcript' field and a 'transcript_only_text' field.",
        fullDescription:
          "Fetches full details for a YouTube video or short, including title, description, thumbnail, view count (views), like count (likes), comment count, publish date, duration, genre, keywords, chapters, collaborators, and available caption tracks (subtitles/captions). Also returns related recommended videos in watchNextVideos and channel info for the uploader.",
        path: "/v1/youtube/video",
        sampleResponse: {
          success: true,
          credits_remaining: 33851527,
          id: "Y2Ah_DFr8cw",
          thumbnail: "https://img.youtube.com/vi/Y2Ah_DFr8cw/maxresdefault.jpg",
          url: "https://www.youtube.com/watch?v=Y2Ah_DFr8cw",
          publishDate: "2019-02-22T03:19:54-08:00",
          type: "video",
          title:
            'Inside the NBA: Chuck Trolls Jussie Smollett "Do not commit crimes with checks, use cash!"',
          description: null,
          descriptionLinks: [],
          commentCountText: "358",
          commentCountInt: 358,
          likeCountText: "4043",
          likeCountInt: 4043,
          viewCountText: "372,864",
          viewCountInt: 372864,
          publishDateText: "Feb 22, 2019",
          collaborators: [],
          channel: {
            id: "UCWH3hing1Qb4LnkRfQdxsxQ",
            url: "https://www.youtube.com/@afroballer8906",
            handle: "afroballer8906",
            title: "Afroballer",
          },
          chapters: [],
          watchNextVideos: [
            {
              id: "lzDTK5kEdkM",
              title: "Charles Barkley and Shaq FUNNIEST MOMENTS",
              thumbnail:
                "https://i.ytimg.com/vi/lzDTK5kEdkM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAq_osvQnsGV3A7uz4L1CPTaLqppg",
              channel: {
                title: "SkyHooked",
                url: "https://www.youtube.com/@SkyHooked",
                handle: "SkyHooked",
                id: "UCrX8GD5f_O-Cu5Y2vQuSSvw",
              },
              publishedTimeText: "11 months ago",
              publishedTime: "2025-02-16T19:25:39.493Z",
              publishDateText: "11 months ago",
              publishDate: "2025-02-16T19:25:39.493Z",
              viewCountText: "1.8M views",
              viewCountInt: 1800000,
              lengthText: "18:01",
              lengthInSeconds: 1081,
              videoUrl: "https://www.youtube.com/watch?v=lzDTK5kEdkM",
            },
            {
              id: "B8m_XUPtF9o",
              title: "15 NBA Legends Put An End To The GOAT Debate",
              thumbnail:
                "https://i.ytimg.com/vi/B8m_XUPtF9o/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCrPDrAu52ZX2dclLkaEvMwuZtacw",
              channel: {
                title: "YounGala",
                url: "https://www.youtube.com/@YounGala",
                handle: "YounGala",
                id: "UCNPl2SnE4FqafSjA7zmkN5w",
              },
              publishedTimeText: "2 months ago",
              publishedTime: "2025-11-16T19:25:39.493Z",
              publishDateText: "2 months ago",
              publishDate: "2025-11-16T19:25:39.493Z",
              viewCountText: "807K views",
              viewCountInt: 807000,
              lengthText: "21:21",
              lengthInSeconds: 1281,
              videoUrl: "https://www.youtube.com/watch?v=B8m_XUPtF9o",
            },
          ],
          keywords: [],
          genre: "People & Blogs",
          durationMs: 348000,
          durationFormatted: "00:05:48",
          captionTracks: [
            {
              baseUrl:
                "https://www.youtube.com/api/timedtext?v=Y2Ah_DFr8cw&ei=s5Bqab0gu8yS5w_pvOLIDw&caps=asr&opi=112496729&xoaf=5&xowf=1&hl=en&ip=0.0.0.0&ipbits=0&expire=1768616739&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=306A57ADE14FECC84B0DB13190761BCCC922AC9B.5C321C4FE7086F7AF851CA8463326E1869EE5255&key=yt8&kind=asr&lang=en",
              name: {
                simpleText: "English (auto-generated)",
              },
              vssId: "a.en",
              languageCode: "en",
              kind: "asr",
              isTranslatable: true,
              trackName: "",
            },
          ],
        },
        youtubeId: "NyOtXBBmjLY",
        codeExample:
          "https://github.com/adrianhorning08/scrape-creators-examples/blob/master/youtubeTranscripts.js",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "YouTube video or short URL",
            placeholder: "https://www.youtube.com/watch?v=Y2Ah_DFr8cw",
          },
        ],
      },
      {
        name: "Transcript",
        method: "GET",
        description: "Get transcript of a video or short",
        fullDescription:
          "Retrieves the captions, subtitles, or transcript of a YouTube video or short. Returns both a timestamped transcript array with start/end times and a plain-text version in transcript_only_text. Supports specifying a language code. Note: the video must be under 2 minutes for transcript extraction to work.",
        path: "/v1/youtube/video/transcript",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "YouTube video or short URL",
            placeholder: "https://www.youtube.com/watch?v=bjVIDXPP7Uk",
          },
          {
            name: "language",
            type: "string",
            required: false,
            description:
              "2 letter language code, ie 'en', 'es', 'fr' etc. If the transcript is not available in the language you specify, the transcript will be null.",
            placeholder: "en",
          },
        ],
        sampleResponse: {
          videoId: "bjVIDXPP7Uk",
          type: "video",
          url: "https://www.youtube.com/watch?v=bjVIDXPP7Uk",
          transcript: [
            {
              text: "welcome back to the hell farm and the",
              startMs: "160",
              endMs: "1920",
              startTimeText: "0:00",
            },
            {
              text: "backyard trails we built these jumps two",
              startMs: "1920",
              endMs: "3919",
              startTimeText: "0:01",
            },
          ],
          transcript_only_text:
            "welcome back to the hell farm and the backyard trails we built these jumps two years ago and last year we just kind of rebuilt them and this year......",
          language: "English",
        },
      },
      {
        name: "Search",
        method: "GET",
        description:
          "Search YouTube and get matching videos, channels, playlists, shorts, lives, etc. Video explaining the response format: https://www.tella.tv/video/explaining-youtube-search-results-payload-353a",
        fullDescription:
          "Searches YouTube by keyword query and returns matching videos, channels, playlists, shorts, shelves, and live streams. Each video result includes title, URL, thumbnail, view count (views), publish date, duration, channel info, and badges. Supports filtering by upload date, sorting by relevance or popularity, and paginating with continuationToken.",
        path: "/v1/youtube/search",
        paginationField: "continuationToken",
        sampleResponse: {
          videos: [
            {
              type: "video",
              id: "BzSzwqb-OEE",
              url: "https://www.youtube.com/watch?v=BzSzwqb-OEE",
              title: "NF - RUNNING (Audio)",
              thumbnail:
                "https://i.ytimg.com/vi/BzSzwqb-OEE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCasEKav1CLqeSSE2IYDqjGiIMBGw",
              channel: {
                id: "UCoRR6OLuIZ2-5VxtnQIaN2w",
                title: "NFrealmusic",
                handle: "channel/UCoRR6OLuIZ2-5VxtnQIaN2w",
                thumbnail:
                  "https://yt3.ggpht.com/J1_Si0TYNZ-991v09y8RpCh4_Z_ALwKmPgMYnJqjNhoglVtipf3oEN8LpzG1kS0qsv8Jptpmmg=s88-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "14,860,541 views",
              viewCountInt: 14860541,
              publishedTimeText: "2 years ago",
              publishedTime: "2023-05-28T17:08:46.499Z",
              lengthText: "4:14",
              lengthSeconds: 254,
              badges: [],
            },
            {
              type: "video",
              id: "-tLKoLN-dz4",
              url: "https://www.youtube.com/watch?v=-tLKoLN-dz4",
              title: "Not Alone, Racing the High Lonesome 100",
              thumbnail:
                "https://i.ytimg.com/vi/-tLKoLN-dz4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD1ziOa9dTFWSL6lyK6m6eO_uZkJg",
              channel: {
                id: "UCNKMpnM_Yvf6E-Hhf9btYqA",
                title: "Jeff Pelletier",
                handle: "JeffPelletier",
                thumbnail:
                  "https://yt3.ggpht.com/YLRllcd7Q0iPYDIkJjXGEiOiJStz4KK7iepwcfTVK0yveHKqFSaLVzTvvZ0anO-SeUlXs1jNCIE=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "119,308 views",
              viewCountInt: 119308,
              publishedTimeText: "3 months ago",
              publishedTime: "2025-02-28T18:08:46.499Z",
              lengthText: "53:18",
              lengthSeconds: 3198,
              badges: ["4K", "CC"],
            },
            {
              type: "video",
              id: "2LnqF4CziXY",
              url: "https://www.youtube.com/watch?v=2LnqF4CziXY",
              title:
                "Base running blunder you've never seen costs the Braves a comeback vs. the Padres, a breakdown",
              thumbnail:
                "https://i.ytimg.com/vi/2LnqF4CziXY/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKH3MD2Ehyuh7C0pK-RA_Whf0GAg",
              channel: {
                id: "UCl9E4Zxa8CVr2LBLD0_TaNg",
                title: "Jomboy Media",
                handle: "JomboyMedia",
                thumbnail:
                  "https://yt3.ggpht.com/ytc/AIdro_l3ee46SNWQDE3tpPXONvTIEN2ZFGF7DMRLSc4kPx1zhEQ=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "146,461 views",
              viewCountInt: 146461,
              publishedTimeText: "19 hours ago",
              publishedTime: "2025-05-28T17:08:46.499Z",
              lengthText: "4:56",
              lengthSeconds: 296,
              badges: ["New"],
            },
            {
              type: "video",
              id: "v5ePUS8sspo",
              url: "https://www.youtube.com/watch?v=v5ePUS8sspo",
              title: "Why We Run | Eric Floberg, Chapter 1",
              thumbnail:
                "https://i.ytimg.com/vi/v5ePUS8sspo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDcFW-Qb4HhP5NRcz4QQfx0-qzbVg",
              channel: {
                id: "UCN9LezrPgYqJ_FsuculbCew",
                title: "Path Projects",
                handle: "pathprojects",
                thumbnail:
                  "https://yt3.ggpht.com/2OgXxRXjngjCwkJvzxSP-LvTTHg8HZjcNvkyR50-owtvPJAS_8auaC2Swcy8OP_yweTh5kNM=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "38,271 views",
              viewCountInt: 38271,
              publishedTimeText: "2 weeks ago",
              publishedTime: "2025-05-14T17:08:46.499Z",
              lengthText: "7:09",
              lengthSeconds: 429,
              badges: ["4K"],
            },
            {
              type: "video",
              id: "BQm9bvIbHWg",
              url: "https://www.youtube.com/watch?v=BQm9bvIbHWg",
              title: "Shin Sonic - Running (official song)",
              thumbnail:
                "https://i.ytimg.com/vi/BQm9bvIbHWg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBCDQzMBzFlHO_MNmf_09RvctE1FA",
              channel: {
                id: "UC3KTMQwLhXp-e2PNHl4UqgQ",
                title: "Horror Skunx 2",
                handle: "HorrorSkunx2",
                thumbnail:
                  "https://yt3.ggpht.com/DZcKI4hN0NjmeZUDJ0p89GplMV9TvI5p4sc-g8sOmvIAEsOhk1rZgEImleTIX1lm1XcGSoFjibw=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "33,016,214 views",
              viewCountInt: 33016214,
              publishedTimeText: "8 months ago",
              publishedTime: "2024-09-28T17:08:46.499Z",
              lengthText: "2:27",
              lengthSeconds: 147,
              badges: ["4K"],
            },
            {
              type: "video",
              id: "ZzckdJQXTRw",
              url: "https://www.youtube.com/watch?v=ZzckdJQXTRw",
              title:
                "Nebraska Legislature running out of time with five days left in session",
              thumbnail:
                "https://i.ytimg.com/vi/ZzckdJQXTRw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDWSuGN6sKLL_0zi0qW6dq9KUJJXw",
              channel: {
                id: "UCczdiIilpYSmiF074WMCNiA",
                title: "KETV NewsWatch 7",
                handle: "KETV",
                thumbnail:
                  "https://yt3.ggpht.com/ytc/AIdro_nbSThKRi-Oy5f4MwrLasU8ZKjmPwWQICJWL7Qoi39XxhE=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "131 views",
              viewCountInt: 131,
              publishedTimeText: "1 day ago",
              publishedTime: "2025-05-27T17:08:46.499Z",
              lengthText: "2:55",
              lengthSeconds: 175,
              badges: ["New", "CC"],
            },
            {
              type: "video",
              id: "DQBCdbV2Enc",
              url: "https://www.youtube.com/watch?v=DQBCdbV2Enc",
              title:
                "Virtual Running Videos For Treadmill With Music | Virtual Run Mountain",
              thumbnail:
                "https://i.ytimg.com/vi/DQBCdbV2Enc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwizepUqaWsce-i6KKncGQ8gt4Mw",
              channel: {
                id: "UCY95zbGK0vlAZ8Gk8OZqa1g",
                title: "Virtual Running Videos",
                handle: "virtualrunningvideo",
                thumbnail:
                  "https://yt3.ggpht.com/ytc/AIdro_nSOB2OGNIDZ8-eSTUX-qGsioNIZQrIjzMhicCXxT_OWw4=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "1,549,036 views",
              viewCountInt: 1549036,
              publishedTimeText: "4 years ago",
              publishedTime: "2021-05-28T17:08:46.499Z",
              lengthText: "50:20",
              lengthSeconds: 3020,
              badges: ["4K"],
            },
            {
              type: "video",
              id: "8Z1N-wfKq8Q",
              url: "https://www.youtube.com/watch?v=8Z1N-wfKq8Q",
              title: "Long Run Home | Wesley Kiptoo Documentary",
              thumbnail:
                "https://i.ytimg.com/vi/8Z1N-wfKq8Q/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdSHUqQUGg3qfvcvmgSfsa2w76EQ",
              channel: {
                id: "UC1aUDqQeH_3lPoilfa--Eaw",
                title: "The Art of Documentary",
                handle: "theartofdocumentary",
                thumbnail:
                  "https://yt3.ggpht.com/Ihd0tsIyhuchHYwbva2RrqqgkWLdkxIRXBJT-TiXOUOo732C7kNAT77iIDy89uGjJOx_DKZcSA=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "733,315 views",
              viewCountInt: 733315,
              publishedTimeText: "1 year ago",
              publishedTime: "2024-05-28T17:08:46.500Z",
              lengthText: "22:22",
              lengthSeconds: 1342,
              badges: ["4K"],
            },
            {
              type: "video",
              id: "9DpejbEJ5Gs",
              url: "https://www.youtube.com/watch?v=9DpejbEJ5Gs",
              title: "Chiké & Simi – Running (To You) [Official Video]",
              thumbnail:
                "https://i.ytimg.com/vi/9DpejbEJ5Gs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdg5rjuERQWjbbFyTu6RXIyxdwXQ",
              channel: {
                id: "UCVXhwLsuNli6N8FElr7sNvQ",
                title: "Chike",
                handle: "channel/UCVXhwLsuNli6N8FElr7sNvQ",
                thumbnail:
                  "https://yt3.ggpht.com/ZapjSStUkuj7kGKoa-fNzhFMNFQsVCV6yF517qmp5VqQ6ozsVxsAEKiNa0dMfN3Vo-sGEuKj6oo=s88-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "85,803,087 views",
              viewCountInt: 85803087,
              publishedTimeText: "4 years ago",
              publishedTime: "2021-05-28T17:08:46.500Z",
              lengthText: "3:35",
              lengthSeconds: 215,
              badges: [],
            },
            {
              type: "video",
              id: "6l0Qp1GXY7w",
              url: "https://www.youtube.com/watch?v=6l0Qp1GXY7w",
              title: "NF - RUNNING (Lyrics)",
              thumbnail:
                "https://i.ytimg.com/vi/6l0Qp1GXY7w/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBWYszI_N1ezpehAw-Tv7BZDz5j8Q",
              channel: {
                id: "UCcJZ-w0N3-Z2jnJ8UgoBclQ",
                title: "SauceOnly",
                handle: "SauceOnly",
                thumbnail:
                  "https://yt3.ggpht.com/dy5MPezFhnDfpaf7loqoSTGAS9LuIo4EOs-ckW9FMGU15KlG7SFtvzFNVEcfH8DCBpHs8Hxe=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "2,117,140 views",
              viewCountInt: 2117140,
              publishedTimeText: "2 years ago",
              publishedTime: "2023-05-28T17:08:46.500Z",
              lengthText: "4:14",
              lengthSeconds: 254,
              badges: [],
            },
            {
              type: "video",
              id: "K1QDYuHGa_I",
              url: "https://www.youtube.com/watch?v=K1QDYuHGa_I",
              title: "David Goggins - How To Run Every Single Morning",
              thumbnail:
                "https://i.ytimg.com/vi/K1QDYuHGa_I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQQN7_MjBcgTLtPH3bi-5rvakK2g",
              channel: {
                id: "UCIaH-gZIVC432YRjNVvnyCA",
                title: "Chris Williamson",
                handle: "ChrisWillx",
                thumbnail:
                  "https://yt3.ggpht.com/ytc/AIdro_mmN30Y4ap7dtPfLw8Algolz_LGtHHpTJxa-qAw-MCQpdo=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "5,030,730 views",
              viewCountInt: 5030730,
              publishedTimeText: "2 years ago",
              publishedTime: "2023-05-28T17:08:46.500Z",
              lengthText: "11:23",
              lengthSeconds: 683,
              badges: ["4K"],
            },
          ],
          channels: [],
          playlists: [],
          shorts: [
            {
              type: "short",
              id: "uMNvF-lSCHg",
              url: "https://www.youtube.com/watch?v=uMNvF-lSCHg",
              title: "LONG RUN ROUTINE #run #runvlog #runner #shorts #morning",
              thumbnail:
                "https://i.ytimg.com/vi/uMNvF-lSCHg/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGADYAQHiAQoIGBACGAY4AUAB8AEB-AG2CIACgA-KAgwIABABGFsgXyhlMA8=&rs=AOn4CLA_P-5ExEn9EGLJDNeJedsxb3k1eQ",
              channel: {
                id: "UCGRdcRxpJWi5Q2oDCrMDUuQ",
                title: "Abby and Ryan",
                handle: "abbyandryan",
                thumbnail:
                  "https://yt3.ggpht.com/8UdUEesepx1Ry_rFUPJOJgndTCKno9VTkSysnuJpFjMj63N6av0pNwnqoiKh_7PN2dw7PGIp=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "462,705 views",
              viewCountInt: 462705,
              publishedTimeText: "10 months ago",
              publishedTime: "2024-07-28T17:08:46.498Z",
              lengthText: "0:44",
              lengthSeconds: 44,
              badges: [],
            },
          ],
          shelves: [
            {
              type: "shelf",
              title: "Shorts",
              items: [
                {
                  type: "short",
                  id: "LLBR5nO05tE",
                  url: "https://www.youtube.com/watch?v=LLBR5nO05tE",
                  title: "running through walls gone wrong",
                  thumbnail:
                    "https://i.ytimg.com/vi/LLBR5nO05tE/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCYYIIDmBllgkLP68AjVs25UpyevQ",
                  viewCountText: "750K",
                  viewCountInt: 750000,
                },
              ],
            },
          ],
          lives: [],
          continuationToken: "EooDEg...",
        },
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Search query",
          },
          {
            name: "uploadDate",
            type: "select",
            required: false,
            description: "Upload date",
            options: [
              "today",
              "this_week",
              "this_month",
              "this_year",
            ],
          },
          {
            name: "sortBy",
            type: "select",
            required: false,
            description: "Sort by",
            options: ["relevance", "popular"],
            placeholder: "relevance",
          },
          {
            name: "filter",
            type: "select",
            required: false,
            description:
              "Filter by these options. Note this doesn't work when you use either 'uploadDate' or 'sortBy'. It basically only works when you have a query.",
            options: ["shorts"],
            placeholder: "all",
          },
          {
            name: "continuationToken",
            type: "string",
            required: false,
            description:
              "Continuation token to get more videos. Get 'continuationToken' from previous response.",
            placeholder: "4qmFsgKrCBIYVUNkRkpXVWE0M3NtUm00SXBIQnB",
          },
          {
            name: "includeExtras",
            type: "string",
            required: false,
            description:
              "This will get you the like + comment count and the description. To get the full details of the video, use the /v1/youtube/video endpoint. *This will slow down the response slightly.*",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Search by Hashtag",
        method: "GET",
        description:
          "Search YouTube and get matching videos, channels, and playlists",
        fullDescription:
          "Searches YouTube for content matching a specific hashtag and returns matching videos with title, URL, thumbnail, view count (views), publish date, duration, and channel info. Supports pagination via continuationToken and filtering to return all content types or only shorts.",
        path: "/v1/youtube/search/hashtag",
        paginationField: "continuationToken",
        sampleResponse: {
          videos: [
            {
              type: "video",
              id: "jXMISgQq9MM",
              url: "https://www.youtube.com/watch?v=jXMISgQq9MM",
              title: "Epic fails 🤣🤣🤣 #shorts #funny #fails",
              description: "",
              thumbnail:
                "https://i.ytimg.com/vi/jXMISgQq9MM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGADYAQHiAQoIGBACGAY4AUAB8AEB-AG2CIACgA-KAgwIABABGGUgXyhVMA8=&rs=AOn4CLC1HXfxzLayoVBdicS5DIUQh9zGcQ",
              channel: {
                id: "UCvUzWu1Whyw1FWuLl9GOo_g",
                title: "ZZang Funny",
                thumbnail:
                  "https://yt3.ggpht.com/rcZKcfewHTzkauGknat3NeC53rGBofYDbL8AjFkwvsk2fXzM1clht7OTn9-1IIPnmbeZkrNGdxI=s68-c-k-c0x00ffffff-no-rj",
              },
              viewCountText: "22,668,056 views",
              viewCountInt: 22668056,
              publishedTimeText: "4 weeks ago",
              publishedTime: "2025-01-04T23:12:42.919Z",
              lengthText: "1:00",
              lengthSeconds: 60,
              badges: [],
            },
          ],
          continuationToken: "4qmFsgLtBRIJRkVoYX....",
        },
        params: [
          {
            name: "hashtag",
            type: "string",
            required: true,
            placeholder: "funny",
            description: "Hashtag to search for",
          },
          {
            name: "continuationToken",
            type: "string",
            required: false,
            description:
              "Continuation token to get more videos. Get 'continuationToken' from previous response.",
            placeholder: "4qmFsgKrCBIYVUNkRkpXVWE0M3NtUm00SXBIQnB",
          },
          {
            name: "type",
            type: "select",
            required: false,
            default: "all",
            description: "Search for all types of content or only shorts",
            options: ["all", "shorts"],
            placeholder: "all",
          },
        ],
      },
      {
        name: "Comments",
        method: "GET",
        description:
          "Get comments from a video. Can only get 1k top comments and about 7k new comments.",
        fullDescription:
          "Fetches comments and replies from a YouTube video, including each comment's text content, author details, like count, reply count, and publish date. Supports ordering by top or newest, and paginating with continuationToken. Limited to approximately 1,000 top comments or 7,000 newest comments.",
        path: "/v1/youtube/video/comments",
        paginationField: "continuationToken",
        sampleResponse: {
          comments: [
            {
              id: "UgwVfRopfS2F-WB3aF14AaABAg",
              content:
                'I love how in the middle he said "I\'ve been able to work with 2 great coaches... Pete and Coach Tomlin"... Side shade to Coach Sean Payton, love it :)',
              publishedTimeText: "9 days ago",
              publishedTime: "2025-01-23T23:14:02.948Z",
              replyLevel: 0,
              author: {
                name: "@SimonT80",
                channelId: "UC8JC3uSUmmXTCTKl-bgr1DA",
                isVerified: false,
                isCreator: false,
                avatarUrl:
                  "https://yt3.ggpht.com/ytc/AIdro_lQ_2v9lDqwRrmdvEBfDNyFOvgQICl68X6WFkwZ5KI=s88-c-k-c0x00ffffff-no-rj",
                channelUrl: "https://youtube.com/@SimonT80",
              },
              engagement: { likes: 110, replies: 5 },
            },
          ],
          continuationToken: "Eg0SCzVFV2F4bVd....",
        },
        params: [
          {
            name: "url",
            type: "string",
            placeholder: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            required: true,
            description: "YouTube video URL",
          },
          {
            name: "continuationToken",
            type: "string",
            required: false,
            description:
              "Continuation token to get more comments. Get 'continuationToken' from previous response.",
            placeholder: "4qmFsgKrCBIYVUNkRkpXVWE0M3NtUm00SXBIQnB",
          },
          {
            name: "order",
            type: "select",
            required: false,
            description: "Order of comments",
            options: ["top", "newest"],
            placeholder: "top",
          },
        ],
      },
      {
        name: "Trending Shorts",
        method: "GET",
        description:
          "Get about 48 trending shorts. Continue hitting this to get more shorts (get new ones with each call)",
        fullDescription:
          "Fetches approximately 48 currently trending YouTube Shorts (viral/popular short-form videos) per call, returning each short's title, URL, thumbnail, view count (views), like count (likes), comment count, publish date, channel info, keywords, and duration. Each subsequent call returns a fresh batch of different trending shorts.",
        path: "/v1/youtube/shorts/trending",
        params: [],
        sampleResponse: {
          success: true,
          shorts: [
            {
              id: "ou0nl5ET0HA",
              thumbnail:
                "https://img.youtube.com/vi/ou0nl5ET0HA/maxresdefault.jpg",
              url: "https://www.youtube.com/watch?v=ou0nl5ET0HA",
              title: "That hooper who says their just shoes",
              description: null,
              commentCountText: "168",
              commentCountInt: 168,
              likeCountText: "151957",
              likeCountInt: 151957,
              viewCountText: "13,798,774",
              viewCountInt: 13798774,
              publishDateText: "Aug 7, 2025",
              publishDate: "2025-08-07T13:00:22-07:00",
              channel: {
                id: "UC3iObCgKLKr9xquQw7fCang",
                url: "https://www.youtube.com/@dameuniverse",
                handle: "dameuniverse",
                title: "Dame Universe",
              },
              chapters: [],
              keywords: [
                "Kobe",
                "Sneaker heads",
                "Kobe Bryant",
                "House of highlights",
                "Funny memes",
                "Epic basketball",
                "High school hoops",
                "Relatable memes",
                "Basketball entertainment",
                "Basketball shoes",
              ],
              durationMs: 19000,
              durationFormatted: "00:00:19",
            },
            {
              id: "RHjn1eyPLgI",
              thumbnail:
                "https://img.youtube.com/vi/RHjn1eyPLgI/maxresdefault.jpg",
              url: "https://www.youtube.com/watch?v=RHjn1eyPLgI",
              title:
                "Save of the Century 🫡 Real Hero 💪 #discipline#success #mindset#ego#shorts#fyp#edit#motivation",
              description:
                "Save of the Century 🫡 Real Hero 💪 #discipline#success #mindset#ego#shorts#fyp#edit#motivation\n\nWork Smart 🧠#discipline#success #mindset#ego#shorts#fyp#edit#mentality#motivation\n\nThey won't appreciate you until you leave. Keep carrying them, and they'll think it's easy. Stop - and watch their world fall apart. Stay dangerous. Stay valuable.\nStay irreplaceable.\n\n#motivation #mindset #knowyourworth #staydangerous #selfrespect #discipline #successmindset #alphaenergy #viralshorts #motivationalshorts #valueyourself\n\nEgo is the part of us that shapes our self-identity and confidence, but it can also lead to pride or defensiveness.\nThis simple look at ego explores what it is, how it affects our thoughts and actions, and why balancing it matters in daily life.\nA quick guide to understanding yourself-and others-better.\n\nRelated:-Space, Universe, Space Edit, Astronomy, Cosmos,\nThose who know,\nScience, Ocean,\n#space #universe\nTags:\n#space #universe #stars #galaxy #blackhole #nasa #trendingshorts #solarsystem #nature #ocean #cosmos #science #planets #earth #moon #mars #jupiter #saturn #venus #mercury #uranus #neptune #pluto #astronomy #astrophysics #spacex #satellite #milkyway #comet #rocket #orbit #spacecraft #shorts #fyp #youtube #viralvideo #trending #reels #shortsvideo #viralshorts #astronomyfacts #spacescience #telescope #gravity #meteors #asteroid #nebula #supernova #exoplanet #bigbang #cosmology #spaceexploration #eclipse #hubble #jameswebb #aliens #extraterrestrial #life #multiverse #iss #facts #youtubeshort #knowledge #sciencefacts #trend #viralshort #spacefacts #sun #astronomy #scienceeducation #trendingshorts",
              commentCountText: "1.5K",
              commentCountInt: 1500,
              likeCountInt: null,
              viewCountText: "9,550,557",
              viewCountInt: 9550557,
              publishDateText: "Jul 18, 2025",
              publishDate: "2025-07-18T09:42:58-07:00",
              channel: {
                id: "UCj7yUpOuWpLhiiPjf2w15zg",
                url: "https://www.youtube.com/@MYVISIONshorts",
                handle: "MYVISIONshorts",
                title: "MY VISION",
              },
              chapters: [],
              keywords: [
                "motivation",
                "know your worth",
                "mindset shift",
                "stay dangerous",
                "alpha male energy",
                "success mindset",
                "viral shorts",
                "motivational shorts",
                "never settle",
                "grind mindset",
                "never give up",
                "ego boost",
                "viral motivation video",
                "life lessons",
                "viral tiktok",
                "shorts feed inspiration",
                "discipline over motivation",
                "stay valuable",
                "self worth motivation",
                "emotional motivation",
                "power",
                "value yourself",
                "dangerous",
                "Kids",
                "Near death experience",
                "Adrenaline",
                "Discipline",
                "Avengers",
                "Bike accident",
                "Help",
                "Hero",
                "Superhero",
              ],
              durationMs: 8000,
              durationFormatted: "00:00:08",
            },
            {
              id: "urisfWQu5bc",
              thumbnail:
                "https://img.youtube.com/vi/urisfWQu5bc/maxresdefault.jpg",
              url: "https://www.youtube.com/watch?v=urisfWQu5bc",
              title: "The Laser Grab Illusion Explained",
              description: null,
              commentCountText: "48",
              commentCountInt: 48,
              likeCountText: "65072",
              likeCountInt: 65072,
              viewCountText: "1,719,730",
              viewCountInt: 1719730,
              publishDateText: "Jul 25, 2025",
              publishDate: "2025-07-25T17:29:48-07:00",
              channel: {
                id: "UCoGcvX8WSTOpK52Y81OfVFg",
                url: "https://www.youtube.com/@FactasticFeed",
                handle: "FactasticFeed",
                title: "FactasticFeed",
              },
              chapters: [],
              keywords: ["shorts", "short"],
              durationMs: 20000,
              durationFormatted: "00:00:20",
            },
          ],
        },
      },
      {
        name: "Playlist",
        method: "GET",
        description: "Get the videos of a YouTube playlist",
        fullDescription:
          "Retrieves all videos in a YouTube playlist, including the playlist title, owner info, total video count, and each video's title, URL, thumbnail, duration, and channel. Accepts the playlist ID found in the 'list' URL parameter.",
        path: "/v1/youtube/playlist",
        params: [
          {
            name: "playlist_id",
            type: "string",
            description:
              "The ID of the YouTube playlist. In the YouTube URL it will be the 'list' parameter.",
            required: true,
            placeholder: "PLP32wGpgzmIlInfgKVFfCwVsxgGqZNIiS",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 99404,
          title:
            "Songs with Lyrics 2025 - New Songs 2025 - Music 2025 New Songs",
          owner: {
            id: "UC0-wiBH12UgtWqLjo-EvpOw",
            name: "Lovely Tunes",
            url: "https://www.youtube.com/@lovelytunes7622",
            handle: "lovelytunes7622",
          },
          totalVideos: 98,
          videos: [
            {
              id: "AdBzzpq3xV4",
              title: "Lady Gaga, Bruno Mars - Die With A Smile",
              thumbnail:
                "https://i.ytimg.com/vi/AdBzzpq3xV4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLABnTkQJmfW0s1BMl_qa0FGqIGGqw",
              url: "https://www.youtube.com/watch?v=AdBzzpq3xV4",
              lengthText: "4:15",
              lengthSeconds: 255,
              channel: {
                title: "LatinHype",
                url: "https://www.youtube.com/@LatinHype.",
              },
            },
            {
              id: "htk6MRjmcnQ",
              title: "Huntrix - Golden (Lyrics) KPop Demon Hunters",
              thumbnail:
                "https://i.ytimg.com/vi/htk6MRjmcnQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqLkrfMRzelIfhUBhy4UBbOgGI4g",
              url: "https://www.youtube.com/watch?v=htk6MRjmcnQ",
              lengthText: "3:13",
              lengthSeconds: 193,
              channel: {
                title: "7clouds",
                url: "https://www.youtube.com/@7clouds",
              },
            },
          ],
        },
      },
      {
        name: "Community Post Details",
        method: "GET",
        description: "Get the details of a community post",
        fullDescription:
          "Retrieves the full details of a YouTube community post, including its text content, attached images, like count, publish date, and associated channel info. Also returns a linked video if the post includes one.",
        path: "/v1/youtube/community-post",
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the YouTube community post to get",
            required: true,
            placeholder:
              "https://www.youtube.com/post/Ugkxvj2KoApYAXoqLWnKVr6zZe5JjeHrQeP8",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 9922899,
          id: "Ugkxvj2KoApYAXoqLWnKVr6zZe5JjeHrQeP8",
          channel: {
            id: "UChhw6DlKKTQ9mYSpTfXUYqA",
            title: "Starter Story",
            url: "https://www.youtube.com/@starterstory",
            handle: "starterstory",
          },
          content:
            "How to build something meaningful\n\n1. sit down\n2. set a timer for 2 hours\n3. work\n4. do that over and over and over\n\nNOTHING meaningful was built in a day, a week, or even a month\n\nyou should launch quickly, but the work can't end there\n\nsuccessful products have YEARS of craft behind them\n\nstart building yours today: http://starterstory.com/bsm",
          images: [
            "https://yt3.ggpht.com/uer4ij-RqnTqudtdT5VZNvEjzVXA3PGLHwNpjMfraB7mfbX_Bm0-fSpaFXkfw3EA4uZ7BY8YPa1gU08=s640-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
            "https://yt3.ggpht.com/va-8_8IWK7qI85YZLI66Z6hynbM1V8P2FnoC9piDh1YxdUW0Df5o-XPb0RGp9ePTIpdn7rxK_jrg7-0=s640-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
            "https://yt3.ggpht.com/s9KPa9gKfenu_CvipeYKAPV5ZyhpzwfS2YDoPv9QB3sZR_Z6RdSFpKecAkX5LElHzpcgujB5aKgJSQ=s640-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
            "https://yt3.ggpht.com/QGeo4ddYFARxBEL69nLGoafe_TAlfQ7aZlPSo0oY8Qbj9sx85Nh3YdzbfPdoofFrpHw4GTDEhmQs2w=s640-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
          ],
          likeCount: 759,
          publishedTimeText: "5 days ago",
          publishedTime: "2025-11-07T18:49:57.492Z",
          video: null,
        },
      },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Scrape LinkedIn",
    endpoints: [
      {
        name: "Person's Profile",
        method: "GET",
        description:
          "Get a person's public profile (including recent posts) *Note this is for a persons public profile. This only returns what's publicly available, ie what you see in an incognito browser. So unfortunately LinkedIn doesn't return work history or job title publicly anymore :(",
        fullDescription:
          "Retrieves a person's public LinkedIn profile data, including their name, photo, location, follower count (followers), about/bio summary, recent posts, work experience, education, articles, activity feed, publications, projects, recommendations, and similar profiles. Only returns publicly available information visible in an incognito browser.",
        path: "/v1/linkedin/profile",
        sampleResponse: {
          success: true,
          name: "Sam Parr",
          image:
            "https://media.licdn.com/dms/image/v2/C4E03AQH3Vz1qV_rNVQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1633389534107?e=2147483647&v=beta&t=8x4PIfTIYFOvpI1QRCDyAhNprZv0NY9kAp4EOdvUxLQ",
          location: "Westport, Connecticut, United States",
          followers: 64803,
          connections: "",
          about:
            "I founded The Hustle, a business news media company with $12 when I was around 25 years…",
          recentPosts: [
            {
              title:
                "Super excited to watch the success of a company built by a Gauntlet AI grad: One missed contract renewal can cost your company $100k, $250k or more.…",
              activityType: "Posted by Austen Allred",
              link: "https://www.linkedin.com/posts/austenallred_super-excited-to-watch-the-success-of-a-company-activity-7333305862695919617-zTPI",
              image:
                "https://static.licdn.com/aero-v1/sc/h/53n89ecoxpr1qrki1do3alazb",
            },
            {
              title:
                "Imagine if software engineers declared that programming doesn't work if their program didn't compile on the first try. That's basically the level of…",
              activityType: "Posted by Austen Allred",
              link: "https://www.linkedin.com/posts/austenallred_imagine-if-software-engineers-declared-that-activity-7325898973485879296-jTB4",
              image:
                "https://static.licdn.com/aero-v1/sc/h/53n89ecoxpr1qrki1do3alazb",
            },
          ],
          experience: [
            {
              "@type": "Organization",
              name: "Hampton",
              url: "https://www.linkedin.com/company/myhampton",
              location: "Austin, Texas Metropolitan Area",
              member: {
                "@type": "OrganizationRole",
                description:
                  "******* ** * ****** ****** ********** ********* *** *************, ******** *** ****. <**><**>**'** ** * *** ****, *** ***...* *****.<**><**>*****://***.***********.***/",
              },
            },
            {
              "@type": "Organization",
              name: "** ***** *******",
              member: {
                "@type": "OrganizationRole",
                description:
                  "** ***** ******* ** * ******* ***** ** *** ******. ***** **** *** * *** *** *****.<**><**>**** ***** **** ** **** *** ****** ** **** ****.<**><**>**'** *** *** ** *** **** ******** ** ******* ******** **** **** ** ******** ** *********.",
              },
            },
          ],
          articles: [
            {
              headline: "RANT: How to PROPERLY analyze risk",
              author: "Sam Parr",
              datePublished: "2017-09-17T13:08:55.000+00:00",
              image:
                "https://media.licdn.com/dms/image/v2/C5612AQG9YbLJodxr8g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520096757452?e=2147483647&v=beta&t=USPma8tkR65yot8_Ye0zDfH2llLpTrZdZGHtbzmPjQ0",
              articleBody:
                "I've been talking to a few people who want to leave....",
            },
          ],
          activity: [
            {
              title:
                "Othership is this cool suana place in NYC. The founder is hosting a bunch of Hampton members for a special session + a talk on how he built the…",
              activityType: "Shared by Sam Parr",
              link: "https://www.linkedin.com/posts/parrsam_exclusive-othership-session-qa-with-founder-activity-7328134812047704064-4NUL",
              image:
                "https://media.licdn.com/dms/image/sync/v2/D4D27AQGJaeiyu-gbrA/articleshare-shrink_1280_800/B4DZbLDrHUHsAU-/0/1747163460743?e=2147483647&v=beta&t=rZtGF2kjhFfLy-TZil0d_bakH4UfHnK-dcxEsrZSl5s",
            },
            {
              title:
                "If you live in SF, LA ...and want to lead a bunch of startup ceos/founders ...and want to have the best network ever then this is for you: I'm…",
              activityType: "Shared by Sam Parr",
              link: "https://www.linkedin.com/posts/parrsam_careers-activity-7328088180820193281-3j6g",
              image:
                "https://media.licdn.com/dms/image/sync/v2/D4E27AQFwp04bg9zFpg/articleshare-shrink_800/articleshare-shrink_800/0/1743914613899?e=2147483647&v=beta&t=PWPWBgbYTxLt6u53gLNzEO0laXD2AFd5LBPKId4Fm9Y",
            },
          ],
          education: [
            {
              "@type": "EducationalOrganization",
              name: "Belmont University",
              url: "https://www.linkedin.com/school/belmont-university/",
              member: {
                "@type": "OrganizationRole",
                startDate: 2008,
                endDate: 2012,
              },
            },
          ],
          publications: [
            {
              name: "How my partner and I created a unique company in tough times",
              url: "http://online.wsj.com/article/SB10001424127887324694904578602013087282582.html&urlhash=SvYD",
            },
            {
              name: "Our infographic and app get a shout out in the Huffington Post",
              url: "http://www.huffingtonpost.com/2013/08/09/roommates-app-la_n_3733587.html&urlhash=u66P",
            },
            {
              name: "Shout from the LA Times",
              url: "http://www.latimes.com/business/technology/la-fi-tn-roommate-finding-apps-20130816,0,595590.story&urlhash=yblh",
            },
          ],
          projects: [
            {
              name: "Hustle Con 2015",
              url: "https://www.linkedin.com/in/elizabethyin",
              dateRange: "2015",
              description: "",
              contributors: [
                {
                  name: "Elizabeth Yin",
                  link: "https://www.linkedin.com/in/elizabethyin",
                  image:
                    "https://media.licdn.com/dms/image/v2/C5603AQFFdhmfyyiZig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1581292451105?e=2147483647&v=beta&t=IwghMTQZZjJzIGbN6e1IYfWVBDAkgLP_kSJJPOkzQDg",
                },
              ],
            },
            {
              name: "The Roommates App",
              url: "http://roommate.apartmentlist.com/",
              dateRange: "Mar 2013 - Present",
              description:
                "Roommates is an easy and fun way to meet new potential roommates. It functions much like Tinder, in that you browse profiles one at a time and are only able to chat once you have mutual interest in each other.",
              contributors: [
                {
                  name: "Jake Moffatt",
                  link: "https://www.linkedin.com/in/jakeonrails",
                  image:
                    "https://media.licdn.com/dms/image/v2/D5603AQFi9y-GqH832w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719008688472?e=2147483647&v=beta&t=lelf--Z_vVdOKUfXM_LTKRgUgUTkpmdKS4fyOFJeYLc",
                },
                {
                  name: "John Havel",
                  link: "https://www.linkedin.com/in/jhavel",
                  image:
                    "https://media.licdn.com/dms/image/v2/C5603AQEKBX3RdWYlSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1588215318616?e=2147483647&v=beta&t=WiHWmfUczafX3mAYnS8ZBLGKFXISlV_FZkHW5oqyUJM",
                },
              ],
            },
          ],
          recommendations: [
            {
              name: "Jackie M.",
              link: "https://www.linkedin.com/in/jackiemooney",
              image:
                "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2",
              text: "“I got to know Sam over 2 years of working at The Hustle. We grew from a company of 4 to 15 in that time and there was never a dull moment- anyone who knows Sam knows that he adds tons of energy to the workplace. This guy figures out what he wants to accomplish and makes it happen. He remains wildly driven and goal-oriented while constantly focused on both his personal and professional growth.”",
            },
            {
              name: "Michael Cheung",
              link: "https://www.linkedin.com/in/themichaelcheung",
              image:
                "https://media.licdn.com/dms/image/v2/C5603AQGBj0wY-4ePhg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586460717915?e=2147483647&v=beta&t=uGi9GocopqdNH3aUPCv5hEvmnq24YR8VBbzBAz_Pmbw",
              text: '“Sam is a hustler that and serial entrepreneur. He just figures out how to get things done and "win". Mark my words, this kid is going places!”',
            },
          ],
          similarProfiles: [
            {
              link: "https://ca.linkedin.com/in/stevemcody",
              name: "Steve Cody",
              image:
                "https://media.licdn.com/dms/image/v2/D5603AQEl17hna0u1ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673387873184?e=2147483647&v=beta&t=pN-Y2CS1AQ8AOKbTo_2_B0AXjof4nGLKBdhNZTfFYJA",
            },
          ],
        },
        responseFields: [
          {
            path: "activity",
            description: "Persons latest posts, shares, likes, etc.",
          },
        ],
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the LinkedIn profile to get",
            required: true,
            placeholder: "https://www.linkedin.com/in/parrsam/",
          },
        ],
      },
      {
        name: "Company Page",
        method: "GET",
        description: "Get a LinkedIn company page",
        fullDescription:
          "Fetches a LinkedIn company page with details including name, description, logo, cover image, slogan, location, headquarters, employee count (headcount/staff size), website, industry, company type, founded year, specialties, funding rounds with investors, featured employees, recent posts, and similar company pages.",
        path: "/v1/linkedin/company",
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the LinkedIn company page to get",
            required: true,
            placeholder: "https://linkedin.com/company/shopify",
          },
        ],
        sampleResponse: {
          success: true,
          id: "784652",
          name: "Shopify",
          description:
            "Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size. Shopify makes commerce better for everyone with a platform and services that are engineered for reliability, while delivering a better shopping experience for consumers everywhere. Shopify powers millions of businesses in more than 175 countries and is trusted by brands such as Allbirds, Gymshark, PepsiCo, Staples, and many more.\n\nFind all our jobs here: www.shopify.com/careers",
          location: {
            city: "Ottawa",
            state: "ON",
            country: "CA",
          },
          employeeCount: 23591,
          website: "https://www.shopify.com",
          logo: "https://media.licdn.com/dms/image/v2/D560BAQG_KjTcNcrLVw/company-logo_200_200/B56ZZolTV.HUAU-/0/1745511331439/shopify_logo?e=2147483647&v=beta&t=D2saVg58cKnwEiDQgFgzvwL24mTRM_cPuU1ndv6kL2U",
          coverImage:
            "https://media.licdn.com/dms/image/v2/D563DAQGruQL8kvBvnw/image-scale_191_1128/B56ZanR4DSGoAs-/0/1746563203576/shopify_cover?e=2147483647&v=beta&t=rHubhVZZZSU_1V8tCeBpwL80OG3bNBjzBNEWFO24qa4",
          slogan: "Make commerce better for everyone",
          similarPages: [
            {
              link: "https://www.linkedin.com/company/airbnb",
              name: "Airbnb",
              image:
                "https://media.licdn.com/dms/image/v2/C560BAQFhfl32crIGIw/company-logo_100_100/company-logo_100_100/0/1630637496980/airbnb_logo?e=2147483647&v=beta&t=idNQqoBZi6dZq6iG78J5GTOsNV_ltJf7ITo7zYZ6VWg",
            },
            {
              link: "https://se.linkedin.com/company/spotify",
              name: "Spotify",
              image:
                "https://media.licdn.com/dms/image/v2/C560BAQFkDzx_7dqq3A/company-logo_100_100/company-logo_100_100/0/1631377935713?e=2147483647&v=beta&t=AiRi3YW2R5kYKHbxsjkdQ_d1RuH6Yk98ePBwANPPDhc",
            },
          ],
          industry: "Software Development",
          size: "10,001+ employees",
          founded: 2006,
          headquarters: "Ottawa, ON",
          type: "Public Company",
          specialties: [
            "ecommerce",
            "API",
            "applications",
            "customer service",
            "hardware",
            "marketplace",
            "AR/VR",
            "marketing automation",
            "User Experience",
            "Design",
            "Production Engineering",
            "POS",
            "Payments",
            "Software Engineering",
            "Finance",
            "Retail",
            "Mobile Apps",
            "Instagram",
            "Google Pay",
            "Dropshipping",
            "and Shipping",
          ],
          funding: {
            numberOfRounds: 4,
            lastRound: {
              type: "Series C",
              date: "2014-01-11T00:00:00.000Z",
              amount: "US$ 100.0M",
            },
            investors: [
              {
                name: "OMERS Ventures",
                crunchbaseUrl:
                  "https://www.crunchbase.com/organization/omers-ventures",
                image:
                  "https://media.licdn.com/dms/image/sync/v2/D4E38AQEnDf6SgPOjAQ/crunchbase_investor_logo_100/crunchbase_investor_logo_100/0/1748147400909?e=1749146400&v=beta&t=V974RcVsrtQI1mZcqXPoKT8kutQoYneu8pjbjm5Un8E",
              },
              {
                name: "Insight Partners",
                crunchbaseUrl:
                  "https://www.crunchbase.com/organization/insight-partners",
                image:
                  "https://media.licdn.com/dms/image/sync/v2/D4D38AQFO97oeFlJ74A/crunchbase_investor_logo_100/crunchbase_investor_logo_100/0/1748455429708?e=1749146400&v=beta&t=tRrAum9TLOKCquXN5bY65BaBsv_04RXSVKRzPt3BTcE",
              },
            ],
          },
          employees: [
            {
              name: "🇨🇦 Todd Jefferson",
              title: "Staff Software Developer at Shopify",
              link: "https://ca.linkedin.com/in/toddjefferson",
              image:
                "https://media.licdn.com/dms/image/v2/C4E03AQHg-rFtEf9qpw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1583259322606?e=2147483647&v=beta&t=uBFwlGCBbgFmwrP8f29P4nIDJCgZ1YEyyntBzpR9j30",
            },
            {
              name: "Joseph Smarr",
              title: "Principal Engineer @ Shopify",
              link: "https://www.linkedin.com/in/jsmarr",
              image:
                "https://media.licdn.com/dms/image/v2/C5603AQG6JPHHDSVF_g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1600306045236?e=2147483647&v=beta&t=SYwM63n268TcHjRQFbsz1EXXcGkXxKnYKNqNVUwDjA8",
            },
          ],
          posts: [
            {
              url: "https://www.linkedin.com/posts/shopify_shopifys-design-vision-brings-horizon-into-activity-7331699854873620480-R_N8",
              datePublished: "2025-05-23T15:17:41.770Z",
              text: "In the era of AI, design matters more than ever. And we’re not just keeping pace—we’re leading the way.\n\nDesigners at Shopify take an unconventional approach to the design process: embracing imperfection, doing the unorthodox, and obsessing over every detail. Roles are fluid and leads stay close to the craft.\n\nThe Summer ’25 Edition is so tactile you can practically feel it. It’s packed with interactive elements, fluid animations, and, as usual, a lot of Easter eggs. Horizon Drive is an homage to old driving games, straight out of an arcade. \n\nBut nothing this Edition captures our design vision more than Horizon. \n\nHorizon blends beautiful visuals with practical features that streamline the design process. No more scrolling and guessing. Just quick design choices and built-in AI to code the rest. \n\nShopify design leaders Maggie Fost, Kevin Clark, and Katarina﻿﻿ Batina﻿﻿ share how our design philosophy shaped the Summer ’25 Edition: https://lnkd.in/e-Q-DmCR",
            },
          ],
        },
      },
      {
        name: "Company Posts",
        method: "GET",
        description: "Get a LinkedIn company posts. Can only get 7 pages total (LinkedIn limitation)",
        fullDescription:
          "Retrieves paginated posts from a LinkedIn company page, including each post's URL, ID, publication date, and full text content. Supports page-based pagination up to a maximum of 7 pages due to a LinkedIn platform limitation.",
        path: "/v1/linkedin/company/posts",
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the LinkedIn company page to get",
            required: true,
            placeholder: "https://linkedin.com/company/shopify",
          },
          {
            name: "page",
            type: "number",
            description: "The page number to get",
            required: false,
            placeholder: "1",
          },
        ],
        sampleResponse: {
          "success": true,
          "credits_remaining": 49999951019,
          "posts": [
            {
              "url": "https://www.linkedin.com/posts/shopify_merchants-can-now-use-sidekick-voice-mode-activity-7429579034096726016-uX1e",
              "id": "7429579034096726016",
              "datePublished": "2026-02-17T17:34:36.617Z",
              "text": "Merchants can now use Sidekick voice mode in the Shopify mobile app.\n\nOne of the first to try it out: Jimmy Donaldson, aka MrBeast.\n\nVoice mode makes it even easier to tackle tasks and get business insights on the go. It’s like having an AI-powered Shopify expert right in your pocket."
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_last-year-we-asked-female-founded-wellness-activity-7426638899281600512-ipCA",
              "id": "7426638899281600512",
              "datePublished": "2026-02-09T14:51:33.849Z",
              "text": "Last year, we asked female-founded wellness brands to pitch us their businesses. 1,000 answered the call.\n\nThe idea started with Sonsie Skin Inc., and a shared belief: brands grow faster when founders support founders.\n\nThat’s why we co-created the Mindful Beauty Award, putting $100,000 in resources and mentorship behind entrepreneurs ready to take their next step.\n\nFrom the pitches, we selected 3 top prize winners: Yasmin I., founder of Daea, Marina Furstoss Winfield, founder of Embrace the Heat, and Michaela Phillips, founder of Iris Eyecare.\n\nThank you to every founder who shared their story. The future of wellness is here because of you."
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_last-month-more-people-started-businesses-activity-7425191925722275840-eUO6",
              "id": "7425191925722275840",
              "datePublished": "2026-02-05T15:01:48.470Z",
              "text": "Last month, more people started businesses than ever before. The driver? Uncertainty.\n\nThe record surge in people becoming entrepreneurs isn’t a fluke. It’s a rejection of the myth of stability.\n\nEntrepreneurship offers something rare: agency. The ability to build from your own vision instead of someone else’s.\n\nIn 2026, bet on yourself."
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_from-photography-and-baseball-accessories-activity-7424844208579969024-BrYC",
              "id": "7424844208579969024",
              "datePublished": "2026-02-04T16:00:06.243Z",
              "text": "From photography and baseball accessories to produce, January shopping was all over the place.\n\nWe analyzed month-over-month sales from thousands of Shopify merchants in the U.S. to identify what was trending in January. Here's what stood out:\n\n→ Sales for photography equipment increased, with lens caps up 203%, followed by film developers (+99%) and photographic chemicals (+84%).\n\n→ As spring training approaches, baseball gear is trending upward, led by batting helmets (+68%) and pitching mounds (+63%).\n\n→ Door push plates (+92%), bolt cutters (+91%), and door closers (+90%) all saw over 90% growth, indicating a surge in home hardware.\n\n→ Shoppers purchased fresh produce, including sweet potatoes (+118%), tomatoes (+73%), potatoes (+68%), and garlic (+59%).\n\nEntrepreneurs, what products drove your January sales?"
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_partners-dot-dev-is-back-for-2026-and-activity-7424478964783628290-Q034",
              "id": "7424478964783628290",
              "datePublished": "2026-02-03T15:48:45.336Z",
              "text": "Partners, dot dev is back for 2026.\n\nAnd this year, we’re doubling the fun. Our annual event for developers and builders is expanding to two full days.\n\nSave the date: July 21–22 in Toronto.\n\nThat’s twice the time to get hands-on with the latest Shopify tools, meet the product teams behind them, and connect with partners across the ecosystem.\n\nStay tuned for registration details → https://lnkd.in/gQnzdmiw"
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_creatively-blocked-spark-fresh-ideas-with-activity-7417233988022411264-X40N",
              "id": "7417233988022411264",
              "datePublished": "2026-01-14T15:59:48.269Z",
              "text": "Creatively blocked? Spark fresh ideas with our first-ever soap exclusive, Shower Thoughts.\n\nWe partnered with soap brand Wary Meyers, founded by Linda and John Meyers—a husband-and-wife team known for breaking the mold with vibrant, imaginative, retro-inspired design.\n\nTheir approach is refreshingly original, turning soap into usable art.\n\nThat’s why we teamed up to create Shower Thoughts—a soap that celebrates the ideas that surface when you unplug and reset, and a reminder that inspiration can strike anywhere, even in the shower.\n\nHere’s to bold ideas, wherever they bubble up.\n\nWhat brand should we partner with next? Let us know in the comments."
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_building-the-universal-commerce-protocol-activity-7416498015839911936-eEUA",
              "id": "7416498015839911936",
              "datePublished": "2026-01-12T15:15:18.823Z",
              "text": "Universal Commerce Protocol is the infrastructure agentic commerce runs on. It answers every question about the complexities of commerce:\n\nHow do agents discover what merchants offer? How do they negotiate payment methods, fulfillment options, loyalty programs? How do they hand off when a transaction needs human input?\n\nWe’ve been solving these problems at scale—and with UCP, we're opening the playbook.\n\nIlya Grigorik deep dives on how we built UCP, and how you can build it with us → https://lnkd.in/euu7FEas"
            },
            {
              "url": "https://www.linkedin.com/posts/shopify_shopify-merchants-youll-soon-be-able-to-activity-7416138877129990144-gAJ6",
              "id": "7416138877129990144",
              "datePublished": "2026-01-11T15:28:13.487Z",
              "text": "Shopify merchants, you’ll soon be able to sell directly in Google AI Mode and the Gemini app.\n\nAgentic commerce is the future. Today, we’re launching the Universal Commerce Protocol to accelerate that future.\n\nUCP is a new standard for bringing commerce into AI agents. It’s designed for all types of transactions and checkout flows, allowing customers to add discount codes, loyalty credentials, or subscription cadences right in the chat.\n\nWe built the protocol with Google, and it’ll power native shopping on Google surfaces. The best part? It’s an open standard, so as new AI platforms enable commerce, they can adopt UCP too.\n\nFor more: https://lnkd.in/eEJT4qXt"
            }
          ]
        },
      },
      {
        name: "Post",
        method: "GET",
        description: "Get a Linkedin post. This can be a post or an article.",
        fullDescription:
          "Fetches a single LinkedIn post or article, returning the title, headline, full description text, author info with follower count, publication date, like count (reactions), comment count, and individual comments. Also includes related articles from the same author in moreArticles.",
        path: "/v1/linkedin/post",
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the LinkedIn post to get",
            required: true,
            placeholder:
              "https://www.linkedin.com/pulse/being-father-has-made-me-better-leader-vice-versa-austen-allred/",
          },
        ],
        sampleResponse: {
          success: true,
          url: "https://www.linkedin.com/pulse/being-father-has-made-me-better-leader-vice-versa-austen-allred",
          name: "Being a Father Has Made me a Better Leader, and Vice Versa",
          headline:
            "It's not all that unique to be a 26-year-old founder in Silicon Valley. What was far more surprising to people in 2017 when I joined the S17 Y Combinator cohort is that I already had a family of my own.",
          commentCount: 17,
          likeCount: 210,
          datePublished: "2020-06-21T14:35:59.000+00:00",
          description:
            "It's not all that unique to be a 26-year-old founder in Silicon Valley. What was far more surprising to people in 2017 when I joined the S17 Y Combinator cohort is that I already had a family of my own. ....",
          author: {
            name: "Austen Allred",
            url: "https://www.linkedin.com/in/austenallred",
            followers: 30863,
          },
          comments: [
            {
              author: "Jeremy M.",
              text: "Austen, thanks for sharing!",
              linkedinUrl: "https://uk.linkedin.com/in/jeremymurray",
            },
          ],
          moreArticles: [
            {
              link: "https://www.linkedin.com/pulse/note-outcomes-data-lambda-school-austen-allred",
              title: "A Note About Outcomes Data at Lambda School",
              datePublished: "Feb 24, 2020",
              description:
                "Due to some recent online media, there’s been some confusion recently about student outcomes at Lambda School - which…",
              reactionCount: 168,
              commentCount: 15,
            },
          ],
        },
      },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    description: "Get public Facebook profiles and posts",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get public Facebook profile information",
        fullDescription:
          "Retrieves public Facebook page details including category, address, email, phone, website, services, priceRange, rating, likeCount, and followerCount. Also returns adLibrary status with the page's ad activity and pageId. Optionally includes businessHours when get_business_hours is set to true.",
        path: "/v1/facebook/profile",
        sampleResponse: {
          success: true,
          credits_remaining: 8999083,
          adLibrary: {
            adStatus: "This Page is currently running ads.",
            pageId: "104359362513119",
          },
          creationDate: "November 25, 2022",
          businessHours: [
            {
              monday: {
                open: null,
                close: null,
                intervals: [],
                fullText: "CLOSED",
              },
            },
            {
              tuesday: {
                open: "11:00",
                close: "21:30",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "21:30",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 21:30",
              },
            },
            {
              wednesday: {
                open: "11:00",
                close: "21:30",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "21:30",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 21:30",
              },
            },
            {
              thursday: {
                open: "11:00",
                close: "21:30",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "21:30",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 21:30",
              },
            },
            {
              friday: {
                open: "11:00",
                close: "22:00",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "22:00",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 22:00",
              },
            },
            {
              saturday: {
                open: "11:00",
                close: "22:00",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "22:00",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 22:00",
              },
            },
            {
              sunday: {
                open: "11:00",
                close: "21:30",
                intervals: [
                  {
                    open: "11:00",
                    close: "14:30",
                  },
                  {
                    open: "17:00",
                    close: "21:30",
                  },
                ],
                fullText: "11:00 - 14:30, 17:00 - 21:30",
              },
            },
          ],
          id: "100088017857524",
          name: "Mantraindian",
          url: "https://www.facebook.com/mantraindianfolsom",
          gender: "UNKNOWN",
          coverPhoto: {
            focus: {
              x: 0.5,
              y: 0,
            },
            photo: {
              id: "204402652503662",
              image: {
                uri: "https://scontent.fist7-1.fna.fbcdn.net/v/t39.30808-6/477575273_596577106619546_7712360987777031655_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hroqQOZECdYQ7kNvwHW0J5L&_nc_oc=Adk2HkBhLO3HlnqMEN512H6bOO8kWLs9n2qaiqPc4ZLz5-wi2uBfzqlepnfKhx2hhhM&_nc_zt=23&_nc_ht=scontent.fist7-1.fna&_nc_gid=-tZvZl1NES4sMXJo89jIig&oh=00_AflZ2sbTeyQC-owdG-cOBdq99WVZuYH0HKLsj13NJ_UOPw&oe=6934FD62",
                width: 960,
                height: 365,
              },
              viewer_image: {
                height: 780,
                width: 2050,
              },
              blurred_image: {
                uri: "https://scontent.fist7-1.fna.fbcdn.net/v/t39.30808-6/477575273_596577106619546_7712360987777031655_n.jpg?stp=dst-jpg_fb50_s320x320_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hroqQOZECdYQ7kNvwHW0J5L&_nc_oc=Adk2HkBhLO3HlnqMEN512H6bOO8kWLs9n2qaiqPc4ZLz5-wi2uBfzqlepnfKhx2hhhM&_nc_zt=23&_nc_ht=scontent.fist7-1.fna&_nc_gid=-tZvZl1NES4sMXJo89jIig&oh=00_Afn0vRutoAnfxCkPeQ0UNfSocrQwMLU8RATTjTchjbR90g&oe=6934FD62",
                width: 320,
                height: 122,
              },
              url: "https://www.facebook.com/photo/?fbid=204402652503662&set=a.113593838251211",
            },
          },
          isBusinessPageActive: false,
          profilePhoto: {
            url: "https://www.facebook.com/photo/?fbid=152234581053803&set=a.107432348867360",
            viewer_image: {
              height: 2000,
              width: 2000,
            },
            id: "152234581053803",
          },
          profilePicLarge:
            "https://scontent.fist20-2.fna.fbcdn.net/v/t39.30808-1/331711173_3408886226056104_241444658713195527_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=eQc1mF5YvQ8Q7kNvwFj3Nmh&_nc_oc=AdlpRt4MVt6MwM7loElnrHIChk-vaLz0fxxzMR70TNaQBST-bDibHAZNHPFldgXd1go&_nc_zt=24&_nc_ht=scontent.fist20-2.fna&_nc_gid=-tZvZl1NES4sMXJo89jIig&oh=00_AflOlRBe-OV2xNqafE-cb2i0qvJfJ1yB21EebLXS_LKbQw&oe=693512A2",
          profilePicMedium:
            "https://scontent.fist20-2.fna.fbcdn.net/v/t39.30808-1/331711173_3408886226056104_241444658713195527_n.jpg?stp=dst-jpg_s148x148_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=eQc1mF5YvQ8Q7kNvwFj3Nmh&_nc_oc=AdlpRt4MVt6MwM7loElnrHIChk-vaLz0fxxzMR70TNaQBST-bDibHAZNHPFldgXd1go&_nc_zt=24&_nc_ht=scontent.fist20-2.fna&_nc_gid=-tZvZl1NES4sMXJo89jIig&oh=00_Afl-VZWFU-_9jnKbqC0-2y--wYgnEAyFxIrSDSRl98Azkg&oe=693512A2",
          profilePicSmall:
            "https://scontent.fist20-2.fna.fbcdn.net/v/t39.30808-1/331711173_3408886226056104_241444658713195527_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=eQc1mF5YvQ8Q7kNvwFj3Nmh&_nc_oc=AdlpRt4MVt6MwM7loElnrHIChk-vaLz0fxxzMR70TNaQBST-bDibHAZNHPFldgXd1go&_nc_zt=24&_nc_ht=scontent.fist20-2.fna&_nc_gid=-tZvZl1NES4sMXJo89jIig&oh=00_AflavCQJIlrYTApZzkUMv1dDuld8v9j1ApqTtJkQrF32kQ&oe=693512A2",
          pageIntro: "Indian Vegan & Vegetarian Restaurant",
          category: "Restaurant",
          address:
            "1870 Prairie City Rd, Suite 500, Folsom, CA, United States, California",
          email: "contact@mantraindian.com",
          links: [],
          phone: "+1 916-999-1749",
          website: "https://www.mantraindian.com/",
          services: "Delivery · Takeaway · Dine in…",
          priceRange: "$$",
          rating: "Not yet rated (1 review)",
          ratingCount: null,
          likeCount: 3224,
          followerCount: 3200,
        },
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Facebook profile URL",
            placeholder: "https://www.facebook.com/mantraindianfolsom",
          },
          {
            name: "get_business_hours",
            type: "string",
            required: false,
            description: "Get the business's hours",
            placeholder: "true",
          },
        ],
      },
      {
        name: "Profile Reels",
        method: "GET",
        description:
          "Get a public Facebook page's reels. Returns 10 reels at a time. Need 'next_page_id' and 'cursor' to paginate.",
        fullDescription:
          "Fetches up to 10 reels per request from a public Facebook page. Each reel includes id, url, view_count, description, creation_time, video_url, thumbnail, play_time_in_ms, and music details. Pagination requires passing both next_page_id and cursor from the previous response.",
        path: "/v1/facebook/profile/reels",
        paginationField: "cursor",
        params: [
          {
            name: "url",
            type: "string",
            description: "Facebook page URL",
            required: true,
            placeholder: "https://www.facebook.com/pacemorby",
          },
          {
            name: "next_page_id",
            type: "string",
            required: false,
            placeholder: "YXBwX2NvbGxlY3Rpb2......",
            description: "To paginate through to the next page",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            placeholder: "AQHSFZtzkBauSDHgy8y......",
            description: "To paginate through to the next page",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 3393,
          reels: [
            {
              id: "UzpfSTEwMDA2NDAyNzI0Mjg0OTpWSzoxMTE0MjM1OTIwNjY0NDA4",
              post_id: "1203161005161463",
              creation_time: "2025-09-13T20:51:28.000Z",
              url: "https://www.facebook.com/reel/1114235920664408",
              view_count: 900,
              feedback_id: "ZmVlZGJhY2s6MTIwMzE2MTAwNTE2MTQ2Mw==",
              description:
                "#globetheatreregina #GrandOpeningGlobeTheatre #yqrfood",
              video_id: "1114235920664408",
              thumbnail:
                "https://scontent.fsjc1-3.fna.fbcdn.net/v/t15.5256-10/548161090_781902490913426_4425148471361535737_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=b5ba86&_nc_ohc=OSOOGTqjWBUQ7kNvwEELU_j&_nc_oc=AdlV3gLGZQ7yP7WZ71P40YFpkKZzQKTsoOwpia78XWC-552nlv0PaCzqp4JEN_eM8nw&_nc_zt=23&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_Afmww8iYxDtSamLiv7CnMMk5qN54iKlWRh3KGaQ9raX8sg&oe=6958CB0A",
              play_time_in_ms: 22035,
              video_url:
                "https://video.fsjc1-3.fna.fbcdn.net/o1/v/t2/f2/m366/AQOiS3S8KcKF2LNoPO0zOfAI3fDrZ4uUOgoNDGn6c7r8ABcujOm_egeBIp1UGt2C3T7bjmweRUAe6zZv183Qj3dpOTyUglIVsXGSEDb37A.mp4?_nc_cat=110&_nc_oc=AdlNlblWiTsxDyG87HyqrOExbMhSN5lMWCw0IbpBOlJvrHUyYOW84jgZapFBnh9ErN8&_nc_sid=8bf8fe&_nc_ht=video.fsjc1-3.fna.fbcdn.net&_nc_ohc=o6c-GAEZqSAQ7kNvwEDTAM6&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTE3MDg1MjU4ODIxOTYzMywiYXNzZXRfYWdlX2RheXMiOjEwNywidmlfdXNlY2FzZV9pZCI6MTAxMjAsImR1cmF0aW9uX3MiOjIyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&_nc_zt=28&oh=00_AfnqnDcmg0X9m2W775vmpbH2-IrJvzz6gKDg-nHx1bUNwA&oe=6958DB58&bitrate=379965&tag=sve_sd",
              music: {
                id: "1491450028648565",
                track_title: "The Copper Kettle Restaurant · Original audio",
              },
              author: {
                id: "100064027242849",
                name: "The Copper Kettle Restaurant",
                is_verified: false,
                url: "https://www.facebook.com/copperkettleyqr",
                image:
                  "https://scontent.fsjc1-3.fna.fbcdn.net/v/t39.30808-1/298528699_436705561807015_4191178501684731329_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=GrqhlAtcX98Q7kNvwFcfQYJ&_nc_oc=AdkVhSbfC7VUfqrXTTBHm1mAzqonpy9gE0aRcOV9-ddVxPsL4Nm-fnzbu7pTwhxuCuQ&_nc_zt=24&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_Aflr4kBQgljqP3wqJypUlzhoGQVCx4OyyBZW28kx1UDabw&oe=6958E99C",
              },
            },
            {
              id: "UzpfSTEwMDA2NDAyNzI0Mjg0OTpWSzoxMzM0ODczOTA4MjU2Nzgz",
              post_id: "1201508031993427",
              creation_time: "2025-09-11T21:21:58.000Z",
              url: "https://www.facebook.com/reel/1334873908256783",
              view_count: 576,
              feedback_id: "ZmVlZGJhY2s6MTIwMTUwODAzMTk5MzQyNw==",
              video_id: "1334873908256783",
              thumbnail:
                "https://scontent.fsjc1-3.fna.fbcdn.net/v/t15.5256-10/545577573_1526393572051504_6624822632487689661_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=b5ba86&_nc_ohc=u0irauX9fhUQ7kNvwG1AX56&_nc_oc=AdkfJ3nQbAk4i0VxKXMU07hCnX3__pCp9aELNkECOkA1Jt3a22O3rFye13jVl4bTXUo&_nc_zt=23&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_AfklLOZnLEo6vB61DfUH7zQC8ad2mg15TYQ3oeacloEJCQ&oe=6958F3E8",
              play_time_in_ms: 16192,
              video_url:
                "https://video.fsjc1-3.fna.fbcdn.net/o1/v/t2/f2/m366/AQOIf3b_2lwmNH0ux86fwOwQylIb3rPGoK_V5y7o96tAW-vmkssKj8oQ6NTAixJNdIq52fb0xwteK4uxSYTzziTzHKnGpi0I6GLA8CP9ig.mp4?_nc_cat=104&_nc_oc=Adm1wTNlSojXi2vHkATKJ8r-e_3zqb0C5weKGoJHycTXUG_vNbABV6UQcmxnPy8TW4c&_nc_sid=8bf8fe&_nc_ht=video.fsjc1-3.fna.fbcdn.net&_nc_ohc=UTmdgjAoXTgQ7kNvwFUCY8I&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTA0MDU3MDg4ODAxNzIxMywiYXNzZXRfYWdlX2RheXMiOjEwOSwidmlfdXNlY2FzZV9pZCI6MTAxMjAsImR1cmF0aW9uX3MiOjE2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&_nc_zt=28&oh=00_AfnrvUgRtJBxE8by28ebU7eEVJU7H089nxT0KvP0iEwtzw&oe=6958C3DA&bitrate=743839&tag=sve_sd",
              music: {
                id: "1370343134704314",
                track_title: "The Copper Kettle Restaurant · Original audio",
              },
              author: {
                id: "100064027242849",
                name: "The Copper Kettle Restaurant",
                is_verified: false,
                url: "https://www.facebook.com/copperkettleyqr",
                image:
                  "https://scontent.fsjc1-3.fna.fbcdn.net/v/t39.30808-1/298528699_436705561807015_4191178501684731329_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=GrqhlAtcX98Q7kNvwFcfQYJ&_nc_oc=AdkVhSbfC7VUfqrXTTBHm1mAzqonpy9gE0aRcOV9-ddVxPsL4Nm-fnzbu7pTwhxuCuQ&_nc_zt=24&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_Aflr4kBQgljqP3wqJypUlzhoGQVCx4OyyBZW28kx1UDabw&oe=6958E99C",
              },
            },
            {
              id: "UzpfSTEwMDA2NDAyNzI0Mjg0OTpWSzoxMTU4OTM1MzAyODY3ODc0",
              post_id: "1201500718660825",
              creation_time: "2025-09-11T21:07:08.000Z",
              url: "https://www.facebook.com/reel/1158935302867874",
              view_count: 326,
              feedback_id: "ZmVlZGJhY2s6MTIwMTUwMDcxODY2MDgyNQ==",
              description:
                "Colliers Cup 2025 Semi final Casino Regina vs MNP great vibes for great cause - Cdn Mental Health Assoc 3rd year running!",
              video_id: "1158935302867874",
              thumbnail:
                "https://scontent.fsjc1-3.fna.fbcdn.net/v/t15.5256-10/546107371_24533898936221206_3050564936251167933_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=b5ba86&_nc_ohc=5Dclq4Fi-HwQ7kNvwE1Kb2o&_nc_oc=AdnAh-kIIYpxAvJldrDyjik5HSZq_T2JmPRQ9vxqJJqHNa7TQamH2QNlT5YKUkgqDP0&_nc_zt=23&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_AflkZ4g75Sm5NMvnmoWz36XzKw6UO0ZIargojhKS3fTo3Q&oe=6958D020",
              play_time_in_ms: 42376,
              video_url:
                "https://video.fsjc1-3.fna.fbcdn.net/o1/v/t2/f2/m366/AQP5D5iRB9aucItkvlB05pJWrshvxg9BBPYKH9HbKFQ658Kt-_kUJkFwHmLRLzdF5OKf4H29Hsp7x_Ypb2eArEycBIJjoJyplYFXKoBPeQ.mp4?_nc_cat=101&_nc_oc=AdkCyxKtEpQUovYLGQ5Unu_wc4zIua94ywKyfEhIVdz3dKvlC4wpxkvWsOSq63lumVU&_nc_sid=8bf8fe&_nc_ht=video.fsjc1-3.fna.fbcdn.net&_nc_ohc=xtHEL6UJChoQ7kNvwHSN4VB&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6ODAxNTY1MDEyMzI0NDE5LCJhc3NldF9hZ2VfZGF5cyI6MTA5LCJ2aV91c2VjYXNlX2lkIjoxMDEyMCwiZHVyYXRpb25fcyI6NDIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&_nc_zt=28&oh=00_AfkoBV9g0y_caZUPPX_w2qduZ69ujbT7DbZ4o4DG9pt2sA&oe=6958EC2D&bitrate=745265&tag=sve_sd",
              music: {
                id: "1106073647808749",
                track_title: "The Copper Kettle Restaurant · Original audio",
              },
              author: {
                id: "100064027242849",
                name: "The Copper Kettle Restaurant",
                is_verified: false,
                url: "https://www.facebook.com/copperkettleyqr",
                image:
                  "https://scontent.fsjc1-3.fna.fbcdn.net/v/t39.30808-1/298528699_436705561807015_4191178501684731329_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=GrqhlAtcX98Q7kNvwFcfQYJ&_nc_oc=AdkVhSbfC7VUfqrXTTBHm1mAzqonpy9gE0aRcOV9-ddVxPsL4Nm-fnzbu7pTwhxuCuQ&_nc_zt=24&_nc_ht=scontent.fsjc1-3.fna&_nc_gid=RAC9UOMHIFPQvFPA49SzFw&oh=00_Aflr4kBQgljqP3wqJypUlzhoGQVCx4OyyBZW28kx1UDabw&oe=6958E99C",
              },
            },
          ],
          cursor: "AQHSiBn76EsmuU....",
          next_page_id: "YXBwX2NvbGxlY....",
        },
      },
      {
        name: "Profile Photos",
        method: "GET",
        description:
          "Get a public Facebook page's photos. Need 'next_page_id' and 'cursor' to paginate.",
        fullDescription:
          "Fetches photos from a public Facebook page with pagination support. Each photo includes photo_id, accessibility_caption, viewer_image with uri, height, and width, plus a thumbnail and direct url. Pagination requires passing both next_page_id and cursor from the previous response.",
        path: "/v1/facebook/profile/photos",
        paginationField: "cursor",
        params: [
          {
            name: "url",
            type: "string",
            description: "Facebook page URL",
            required: true,
            placeholder: "https://www.facebook.com/Spurs",
          },
          {
            name: "next_page_id",
            type: "string",
            required: false,
            placeholder: "YXBwX2NvbGxlY3Rpb2......",
            description: "To paginate through to the next page",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            placeholder: "AQHSRM68MZ-AJKGSgRb0......",
            description: "To paginate through to the next page",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 1000,
          photos: [
            {
              id: "YXBwX2l0ZW06MTAwMDQ0NjM0NDUwMjA4OjIzMDUyNzI3MzI6NTo6MTQyODEwNjQwMjAyMDQ5NQ==",
              photo_id: "1428106402020495",
              accessibility_caption: "May be an image of basketball and text",
              immersive_photo_encodings: [],
              viewer_image: {
                uri: "https://scontent-sea5-1.xx.fbcdn.net/v/t51.82787-15/622604539_18555344569004556_8789920462640292891_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YhJA3Uo9mQwQ7kNvwF-U78r&_nc_oc=Adm4IWUCvbO4XHlgboz-L3jH_eVz1YgGx2VzBA43PLBLHQabFu5ZQY1pPHbHaDxTVXE&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=PY1yocAkrH2nITkFquluVw&oh=00_Afp4G33teGwLcRX96N3ulxHe9t0JgFHgnqW7JC-uGyHbtw&oe=69808C5B",
                height: 1800,
                width: 1440,
              },
              photo_cix_screen: null,
              thumbnail:
                "https://scontent-sea5-1.xx.fbcdn.net/v/t51.82787-15/622604539_18555344569004556_8789920462640292891_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=YhJA3Uo9mQwQ7kNvwF-U78r&_nc_oc=Adm4IWUCvbO4XHlgboz-L3jH_eVz1YgGx2VzBA43PLBLHQabFu5ZQY1pPHbHaDxTVXE&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=PY1yocAkrH2nITkFquluVw&oh=00_AfrRI7jPhILPra-iRKDUh-R3lQV3fbc1507ZhmDlZU0b6Q&oe=69808C5B",
              url: "https://www.facebook.com/photo.php?fbid=1428106402020495&set=pb.100044634450208.-2207520000&type=3",
            },
            {
              id: "YXBwX2l0ZW06MTAwMDQ0NjM0NDUwMjA4OjIzMDUyNzI3MzI6NTo6MTQyODEwNjM5ODY4NzE2Mg==",
              photo_id: "1428106398687162",
              accessibility_caption:
                "May be an image of basketball, volleyball and text",
              immersive_photo_encodings: [],
              viewer_image: {
                uri: "https://scontent-sea1-1.xx.fbcdn.net/v/t51.82787-15/623476997_18555344551004556_3123630837701506482_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bhvj8L67w6kQ7kNvwEnkz1K&_nc_oc=AdlbZCptRBQI8rODZBTujtgozYE7rDvHDfnHHpu0WbaP6fS6zouaI3rFo3r8SItpuPI&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=PY1yocAkrH2nITkFquluVw&oh=00_AfptrM3kDTdqRyk878DBPBBa_gCR3fUchw1txCtfD3_Vxg&oe=698095B7",
                height: 1800,
                width: 1440,
              },
              photo_cix_screen: null,
              thumbnail:
                "https://scontent-sea1-1.xx.fbcdn.net/v/t51.82787-15/623476997_18555344551004556_3123630837701506482_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=1&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Bhvj8L67w6kQ7kNvwEnkz1K&_nc_oc=AdlbZCptRBQI8rODZBTujtgozYE7rDvHDfnHHpu0WbaP6fS6zouaI3rFo3r8SItpuPI&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=PY1yocAkrH2nITkFquluVw&oh=00_AfoskP7ozc8zKI1KzOHyhKL4nwSTD0c9xAqvzCt0wWAyoQ&oe=698095B7",
              url: "https://www.facebook.com/photo.php?fbid=1428106398687162&set=pb.100044634450208.-2207520000&type=3",
            },
          ],
          cursor: "AQHSRM68MZ-AJKGSgRb0....",
          next_page_id: "YXBwX2NvbGxlY3Rpb24....",
        },
      },
      {
        name: "Profile Posts",
        method: "GET",
        description:
          "Get public Facebook profile posts. This only returns the posts you would see from an incognito browser session. You can pass a url or a pageId. pageId is faster. pageId is the id of the profile page. Only returns 3 posts at a time.",
        fullDescription:
          "Returns publicly visible Facebook profile posts, limited to 3 posts per page due to API limitations. Each post includes id, text, url, reactionCount, commentCount, publishTime, videoDetails with sdUrl, hdUrl, and thumbnailUrl, plus topComments. Accepts either a url or pageId parameter, where pageId is faster.",
        path: "/v1/facebook/profile/posts",
        paginationField: "cursor",
        params: [
          {
            name: "url",
            type: "string",
            description: "Facebook profile URL",
            placeholder: "https://www.facebook.com/pacemorby",
          },
          {
            name: "pageId",
            type: "string",
            description: "Facebook profile page id",
            placeholder: "100063669491743",
          },
          {
            name: "cursor",
            type: "string",
            placeholder: "Cg8Ob3JnYW5pY19jdXJzb3IJA...",
            description: "To paginate through the posts",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              id: "1204545088344463",
              text: "I've had such a blast doing the No One Left Behind Challenge this year! Join me this Friday Dec 20 @ 5PM MST to learn about next month's challenge! https://subto.sjv.io/3Jk9Py",
              url: "https://www.facebook.com/reel/486651220706068/",
              permalink: "https://www.facebook.com/reel/486651220706068/",
              author: {
                __typename: "User",
                name: "Pace Morby",
                short_name: "Pace Morby",
                id: "100063669491743",
              },
              videoDetails: {
                sdUrl:
                  "https://video-atl3-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQM-5pP3onM9DT-mhIF1lsU_5QIoHD3ezSh_534fSvquBk1J89JZc5j6cQzDP7ksAp5LQGEiJSVYnPWJVYmbgj42.mp4?strext=1&_nc_cat=111&_nc_sid=8bf8fe&_nc_ht=video-atl3-2.xx.fbcdn.net&_nc_ohc=myLadhBf0ekQ7kNvgH7M8Js&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjM2MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjExMjIwMjE0NDI4NDEyMTYsInZpX3VzZWNhc2VfaWQiOjEwMTIwLCJkdXJhdGlvbl9zIjo0MSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYEC_emahkqbCvG8fdT8745B6NgR005IOXFslY3cbX8vVQ&oe=67DBF193",
                hdUrl:
                  "https://video-atl3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQPpb__shxY1O25oSbb2cYJJZdDS1uvPXNvL_wuUl3A5X4oczA14gCptufMdZIQ44Fa1nPHR7BJne11vQR0-kjxg.mp4?strext=1&_nc_cat=110&_nc_sid=5e9851&_nc_ht=video-atl3-1.xx.fbcdn.net&_nc_ohc=A8zHzpvkW7gQ7kNvgH7rC10&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjcxOC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxMTIyMDIxNDQyODQxMjE2LCJ2aV91c2VjYXNlX2lkIjoxMDEyMCwiZHVyYXRpb25fcyI6NDEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=55aa7ea7f63fa16a&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ0RxRHh4LTh0cUt3UFlEQUw2b0RSdTQ0dXQyYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKbUREeHpUY0l2OUotMERBRGd5RVFhbXo2OWZickZxQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJoCqv5ifnv4DFQIoA0MzZSwXQETe2RaHKwIYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHARAHUCAA&_nc_zt=28&oh=00_AYHZ0-S4uD1baiPZOqxXl42i74UuWxjyYp-k5Dr7yuQs8w&oe=67DBE6E0",
                thumbnailUrl:
                  "https://scontent-atl3-1.xx.fbcdn.net/v/t15.5256-10/470601406_1890766051448666_5960639905933280594_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=be8305&_nc_ohc=J2akzbIcN6YQ7kNvgG1IA8_&_nc_oc=AdjagDgUUwSzsa_e8vqInwXyyB57thjMdZ0w4daZ0kLaM1g4xZsv56Q-2REAPzOzDdesjbOxpKtxdUYKNQetO-u3&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=1q0R8aSRmKitPpFFDxvSfQ&oh=00_AYGj7VpqDzBwgIcAEKdSnqMq2IuwKqbNtTrpNKE6y5EsCQ&oe=67DBEC4D",
              },
              reactionCount: 133,
              commentCount: 12,
              videoViewCount: null,
              publishTime: 1734553170,
              topComments: [
                {
                  id: "Y29tbWVudDoxMjA0NTQ1MDg4MzQ0NDYzXzEzMDU4NDQ3ODM3NjA1ODk=",
                  text: "How can I sign up?",
                  publishTime: 1734569761,
                  author: {
                    id: "pfbid02uDNsa8qhySfhQJ83VUcVD5mmVShgxNrtepNZ2TwCsg22xMN3NhdNBQbxPjj2dyr9l",
                    name: "BeezMo Jenkins",
                    gender: "MALE",
                    url: null,
                  },
                },
              ],
            },
            {
              id: "1177973017668337",
              text: "Getting into real estate isn't easy. But you know what makes it easier? \n\nHaving a team of people working TOGETHER to get their deals!\n\nJoin the NOLB Challenge - Nov 17th-19th to see a full walkthrough on how to get your first deal!\n\nReserve your spot here: NOLBChallenge.com",
              url: "https://www.facebook.com/reel/1548769829113168/",
              permalink: "https://www.facebook.com/reel/1548769829113168/",
              author: {
                __typename: "User",
                name: "Pace Morby",
                short_name: "Pace Morby",
                id: "100063669491743",
              },
              reactionCount: 138,
              commentCount: 26,
              videoViewCount: null,
              publishTime: 1731616669,
              videoDetails: {
                sdUrl:
                  "https://video-atl3-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQMFIW3e9oV2zs9L0t7voV8Ki3fR8hTq-aaIH-l38BklHr5OnluDrnN5WZLk4szbPk-URXtJTQSCd8muXdfo0Zj0.mp4?strext=1&_nc_cat=105&_nc_sid=8bf8fe&_nc_ht=video-atl3-2.xx.fbcdn.net&_nc_ohc=BbdgXqRXB-MQ7kNvgFiNHS6&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjM2MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjE0NzA5ODkwMzA0MzA3NjksInZpX3VzZWNhc2VfaWQiOjEwMTIwLCJkdXJhdGlvbl9zIjo0NSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYEa1o37H0d2uYdaAtnlEVQD3wyIvQf3-L9AlCM7LsTVwA&oe=67DBE711",
                hdUrl:
                  "https://video-atl3-2.xx.fbcdn.net/o1/v/t2/f2/m69/AQO8YLkiCOyEYG0QEfHaxH2Ir1SwDgiSIn0DaNeo9FgWXucOCd795Hzvq2bVo4ZG0yxL5l0NNuzQTfJAT1uBfczY.mp4?strext=1&_nc_cat=111&_nc_sid=5e9851&_nc_ht=video-atl3-2.xx.fbcdn.net&_nc_ohc=56Pz5OYiUTYQ7kNvgFAqLpy&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjcyMC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxNDcwOTg5MDMwNDMwNzY5LCJ2aV91c2VjYXNlX2lkIjoxMDEyMCwiZHVyYXRpb25fcyI6NDUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=60f8b36f7319b883&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQUxrYXh5aEsxOHlxTUVFQU1yZUhROGFHLThQYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKOXcxQnNIQjRKdWozOEVBSGRHbVVxNVVaUWpidjRHQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJuLghKrq9pwFFQIoA0MzZSwXQEaSj1wo9cMYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHARAHUCAA&_nc_zt=28&oh=00_AYHkBwqncbOAkzlqRtuZ0eQ8QHog1WAQg3R82Q4drDl1Mg&oe=67DBDF5B",
                thumbnailUrl:
                  "https://scontent-atl3-2.xx.fbcdn.net/v/t15.5256-10/466866876_1271142887643537_2312089751444611039_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=be8305&_nc_ohc=JbZ1MpDcaTMQ7kNvgGZJGtJ&_nc_oc=AdguYBOJ5RZQRq5_rQzInbYxAjpzdP-_Qo-yTRIJBabw-26kNKGCII6-bChYEA__EMKp-hO9k216n7PmviYZfEM5&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=1q0R8aSRmKitPpFFDxvSfQ&oh=00_AYFT7RLoadj2r2vEgFDNURnmKe6MyX8WHO6PIpQ731AwNA&oe=67DBF3C6",
              },
              topComments: [
                {
                  id: "Y29tbWVudDoxMTc3OTczMDE3NjY4MzM3Xzk3MDAzMjYwNDk1NTg0Ng==",
                  text: "I'm in",
                  publishTime: 1732158216,
                  author: {
                    id: "pfbid0VvEMYiX5n4A4SpFMHp7yMAdtMRPV6vXZ9MtWY1Dsz4q8EPZdSrcB8JPiUEeUsZZtl",
                    name: "Ray Bales",
                    gender: "MALE",
                    url: "https://www.facebook.com/people/Ray-Bales/pfbid0VvEMYiX5n4A4SpFMHp7yMAdtMRPV6vXZ9MtWY1Dsz4q8EPZdSrcB8JPiUEeUsZZtl/",
                  },
                },
              ],
            },
            {
              id: "1866425187502168",
              text: "Pace Morby is joined Jared Morrison on this episode of Get Creative, a young entrepreneur in the SubTo community who has been learning the ropes from Pace and recently decided to make the leap into Real Estate full time.",
              url: "https://www.facebook.com/pacemorby/videos/1866425187502168/",
              permalink:
                "https://www.facebook.com/pacemorby/videos/1866425187502168/",
              author: {
                __typename: "User",
                name: "Pace Morby",
                short_name: "Pace Morby",
                id: "100063669491743",
              },
              reactionCount: 124,
              commentCount: 51,
              videoViewCount: 3209,
              publishTime: 1727319674,
              videoDetails: {
                sdUrl:
                  "https://video-atl3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQOzqRyree2mh4It52sA1YxVXzQqne_rX6qGJi4uojEmYneuKthdglmy8cuhg1iAuSbDIhUwHobq_CYVBPuzz1cA.mp4?strext=1&_nc_cat=110&_nc_sid=5e9851&_nc_ht=video-atl3-1.xx.fbcdn.net&_nc_ohc=UQ6UrNgEADUQ7kNvgFaZacJ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjY0MC5kYXNoX2xpdmVfbWRfZnJhZ18yX3ZpZGVvIiwieHB2X2Fzc2V0X2lkIjo1MTIwNDMyMjQ3NzM2MTcsInZpX3VzZWNhc2VfaWQiOjEwMTI1LCJkdXJhdGlvbl9zIjoyMDM2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=6712e7739b2a8e04&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFDcXVnQnI3cnNkQUVjaGdIVUlSelpBYnY0R0FBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQejlmaHZzdGpsTnlTZ0RBTUpzYUZwQVRUQnRidjRHQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJuLPrajr7OgBFQIoA0MzZSwXQJ_Td87ZFocYGWRhc2hfbGl2ZV9tZF9mcmFnXzJfdmlkZW8RAHUCAA&_nc_zt=28&oh=00_AYEuJStxX0QCSzj-UDimfF_YUKDSL2JnzRsxHGqlOmWPnQ&oe=67DBE308",
                hdUrl:
                  "https://video-atl3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQOzqRyree2mh4It52sA1YxVXzQqne_rX6qGJi4uojEmYneuKthdglmy8cuhg1iAuSbDIhUwHobq_CYVBPuzz1cA.mp4?strext=1&_nc_cat=110&_nc_sid=5e9851&_nc_ht=video-atl3-1.xx.fbcdn.net&_nc_ohc=UQ6UrNgEADUQ7kNvgFaZacJ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjY0MC5kYXNoX2xpdmVfbWRfZnJhZ18yX3ZpZGVvIiwieHB2X2Fzc2V0X2lkIjo1MTIwNDMyMjQ3NzM2MTcsInZpX3VzZWNhc2VfaWQiOjEwMTI1LCJkdXJhdGlvbl9zIjoyMDM2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=6712e7739b2a8e04&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFDcXVnQnI3cnNkQUVjaGdIVUlSelpBYnY0R0FBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQejlmaHZzdGpsTnlTZ0RBTUpzYUZwQVRUQnRidjRHQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJuLPrajr7OgBFQIoA0MzZSwXQJ_Td87ZFocYGWRhc2hfbGl2ZV9tZF9mcmFnXzJfdmlkZW8RAHUCAA&_nc_zt=28&oh=00_AYEuJStxX0QCSzj-UDimfF_YUKDSL2JnzRsxHGqlOmWPnQ&oe=67DBE308",
                thumbnailUrl:
                  "https://scontent-atl3-3.xx.fbcdn.net/v/t15.5256-10/461312532_1733514994134084_3133899825757197059_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ce42&_nc_ohc=xKIMJ6frN9kQ7kNvgHK8vTF&_nc_oc=AdhRFzUKkuQ0qae1BFbvvmYGaJ_plQD4RFn3z0xxfoFtc-ds-cxZwEN7dSj0Y4SR3lWORs-Gf8qv5TZQnFqVK4GM&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=1q0R8aSRmKitPpFFDxvSfQ&oh=00_AYGYyhxcf7jzJS-G8ptyiPCJP9Usw2jD7tGK7Xqrfnl3WA&oe=67DBCD47",
              },
              topComments: [
                {
                  id: "Y29tbWVudDoxODY2NDI1MTg3NTAyMTY4XzM4NzQxNDAzNjI4MDUzNDA=",
                  text: "YO EVERYONE!!!! Drop your Q's and we will try to get to them when we can",
                  publishTime: 1727319870,
                  author: {
                    id: "100063669491743",
                    name: "Pace Morby",
                    gender: "NEUTER",
                    url: "https://www.facebook.com/pacemorby",
                  },
                },
              ],
            },
          ],
          cursor:
            "Cg8Ob3JnYW5pY19jdXJzb3IJAAABxEFRSFI4N0N6eHZvYWlsRnJ3TlFMQTU4NUtmTzdSR2hQUzJpa25iTHlaMS1zbG1pTjZtTWFtN0JrNjB3UXVyUFFDOUJabC1JbjYwV2lhQmdqdTYzOXZTaHlMTGhIcGZXV21jRjVtZzBNY3dtSGlkLUNObnVFang4Ym1vYjVxSEZYYXBOZlVwSlVXVWpZbHF5X2xYODNGZzdNNmlIeUVCX1Yxb19ZLTEtanczRGJidm9XZDgxYlk0TmlaXzAtTm11T3dQZC1rY2FyVm44eERCYldjLTBEMXpxU1NCNG4wMjl1SHdaSmY2NjdURHJKUUxPcDRzZXFTZ3gzQk5JbTN5djRVNWQzMnFMMGp4Z3EtY1FWSFZMOWdKbUROQmR3TGx4c1dkWFpicnJlbUpsRVhqU0dodHNBS0tPcWZ2Q0U3QjFHbVhwbVluV3phMmdEMnBnVTZQTG5wMXhXMVAtQWQ2TVBCMXlMZGJlMUJGaHVYSWNpZEJnYUlwUXctSWgxZzhIVlBWZWhjbXJMTEVCVi1SSzRMQUJFZVcxcGR3Mm1YbzBiUjdWV1QyaDY0NmpYT1dHeDduSFZGWHdnM3pvZHpvNXEyTGxUDwlhZF9jdXJzb3IODw9nbG9iYWxfcG9zaXRpb24CAA8Gb2Zmc2V0AgAPEGxhc3RfYWRfcG9zaXRpb24C/wE=",
        },
      },
      {
        name: "Facebook Group Posts",
        method: "GET",
        description:
          "Get a public Facebook groups posts. Only can get 3 posts at a time :( (Facebook API limit)",
        fullDescription:
          "Fetches posts from a public Facebook group, limited to 3 posts per page due to API limitations. Each post includes id, text, url, reactionCount, commentCount, publishTime, videoDetails, and topComments. Supports sorting by TOP_POSTS, RECENT_ACTIVITY, CHRONOLOGICAL, or CHRONOLOGICAL_LISTINGS, with cursor-based pagination.",
        path: "/v1/facebook/group/posts",
        params: [
          {
            name: "url",
            type: "string",
            description: "The URL of the group",
            required: false,
            placeholder: "https://www.facebook.com/groups/1270525996445602/",
          },
          {
            name: "group_id",
            type: "string",
            description: "The ID of the group",
            required: false,
            placeholder: "742354120555345",
          },
          {
            name: "sort_by",
            type: "select",
            description: "How to sort the posts",
            required: false,
            placeholder: "TOP_POSTS",
            options: [
              "TOP_POSTS",
              "RECENT_ACTIVITY",
              "CHRONOLOGICAL",
              "CHRONOLOGICAL_LISTINGS",
            ],
          },
          {
            name: "cursor",
            type: "string",
            description: "The cursor to paginate to the next page",
            required: false,
            placeholder: "AQHRBjJCelNvdGRjH8s2j-6...",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              id: "1286289372828481",
              text: null,
              url: "https://www.facebook.com/groups/742354120555345/permalink/1286289372828481/",
              permalink:
                "https://www.facebook.com/sofiyati.942655/videos/996458202287759/?idorvanity=742354120555345",
              author: {
                __typename: "User",
                name: "Sofiyati",
                short_name: "Sofiyati",
                id: "61552766652796",
              },
              reactionCount: 198,
              commentCount: 100,
              videoViewCount: null,
              publishTime: 1748639389,
              videoDetails: {
                sdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQO0_B24bEmILx4bmOfr_cQA5BgXwF9DMHJYAkUfQJAmuMGLV9PAc9-TrNen27lHJjr45pVm0ufFCcTJBCeFIr_s.mp4?strext=1&_nc_cat=111&_nc_sid=8bf8fe&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=paW12HBCn0EQ7kNvwFwJnXg&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjY0MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjEwNjkzNDUwMjg0MTg4MjYsInZpX3VzZWNhc2VfaWQiOjEwMTIxLCJkdXJhdGlvbl9zIjoxNSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AfJNS34mvDAkIbtvP8o2nMuYrJ66ZeyCB1zQRlsD8sajow&oe=684150C7",
                hdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQM3UoTI5n6N2jVgKeUXSMPnqwAEQFHNGM9dejk3EV-MyBXNUcHlWtvYgUU2cD672EkWw5UAYZ3jJLXQiFdOvQh7.mp4?strext=1&_nc_cat=102&_nc_sid=5e9851&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=kSrgWXZVr9IQ7kNvwE16oSK&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjEyODAuZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcCIsInhwdl9hc3NldF9pZCI6MTA2OTM0NTAyODQxODgyNiwidmlfdXNlY2FzZV9pZCI6MTAxMjEsImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=67dd4c5fe90b11c5&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRUlZOHgwUVZ4azVjSHdIQUNGeU9XTzlQTzlXYm1kakFBQUYVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ1V3OFIySHNmZWZhbUVFQUNZbmdLUlBMSzU4YnJGcUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmlLT9qImk5gMVAigDQzNlLBdALkQYk3S8ahgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQJlkp4BAA&_nc_zt=28&oh=00_AfJKQedBwUVhnjLuJgGuJ7E1TXLk0vib17T3YkAmJUPb8w&oe=68414B6C",
                thumbnailUrl:
                  "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/502130835_1399930867890626_4491393707187246303_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ce42&_nc_ohc=l5JdWBSutswQ7kNvwFHAOSM&_nc_oc=Adm5GttPwjsWvVb_d8d7buJHGnqW6FNHHuRyi2n0UmFWsS7KDF2bg4bo_0uXYI8Uxh0&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=BIqW4GLH6GWa7rMa2JiKFA&oh=00_AfKO58NMsMKO_OXEVSw8A1BNbt0xSVognLfCBKxypc5etw&oe=684150FC",
              },
              topComments: [
                {
                  id: "Y29tbWVudDoxMjg2Mjg5MzcyODI4NDgxXzEyODY1MTY1MjYxMzkwOTk=",
                  text: "I can find thousands of videos with the same exact trend. And we all know what I’m referring to 🤭",
                  publishTime: 1748666375,
                  author: {
                    id: "pfbid0haqAQZCvs4cTVyfGwxCGPidvLYRNhFiboXkCH45LmPLAF1oQ7kJxaVig19KT8nZvl",
                    name: "Trent Slushy",
                    gender: "MALE",
                    url: null,
                  },
                },
                {
                  id: "Y29tbWVudDoxMjg2Mjg5MzcyODI4NDgxXzEyODYzMTY4NDYxNTkwNjc=",
                  text: "Nothing new when the brother gets knocked down another brother jumps in from behind.. very disrespectful",
                  publishTime: 1748642672,
                  author: {
                    id: "pfbid02fRnV4WmvHpX7sx48W2dmfetXpZHCLF5NhE3G4odMC8BniyRA3p4cQ3QYa4fzo57Sl",
                    name: "Paul Demeo",
                    gender: "MALE",
                    url: null,
                  },
                },
              ],
            },
            {
              id: "1280901910033894",
              text: null,
              url: "https://www.facebook.com/groups/742354120555345/permalink/1280901910033894/",
              permalink:
                "https://www.facebook.com/Eat.tohato/videos/1241112417643324/?idorvanity=742354120555345",
              author: {
                __typename: "User",
                name: "Eat Tohato",
                short_name: "Tohato",
                id: "100023215682191",
              },
              reactionCount: 1671,
              commentCount: 214,
              videoViewCount: null,
              publishTime: 1748056476,
              videoDetails: {
                sdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQMaX1dJhB4b1CM618GRKCI2JX0hcLhvoAzXy0L1g3Clmfk9WwFpsHBoYzVohilg9hArNQm5TnGKKphyJIgnVPlY.mp4?strext=1&_nc_cat=101&_nc_sid=8bf8fe&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=LkrGcvJpPFoQ7kNvwFc9J3f&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjM2MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjcyNjk2NzI2Mjk5NTIyNSwidmlfdXNlY2FzZV9pZCI6MTAxMjEsImR1cmF0aW9uX3MiOjQwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_zt=28&oh=00_AfLXJziRWwLTk7rhEEcA2FTnVPILkvjZ66O3oJcZvltnqw&oe=68415A81",
                hdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQPvvRXTfaIhu1IVF1-FaQtfZ_y6ZR7R998HF_Jg9m0OPHWROV0gVezcwfj2Sr9m_RkdNiKg53gt2LIqY3yR3yrO.mp4?strext=1&_nc_cat=101&_nc_sid=5e9851&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=K6sAwYQ8h7gQ7kNvwE2q_jX&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjcyMC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjo3MjY5NjcyNjI5OTUyMjUsInZpX3VzZWNhc2VfaWQiOjEwMTIxLCJkdXJhdGlvbl9zIjo0MCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=7f3ac1ad59381aa7&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTTQxelIxcS0wZjBQb2dDQU9qOXVDODN4aGwyYm1kakFBQUYVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSkxWMWgyOHJBaTRZd29DQUZTMWM2Yjd1Z2hSYnJGcUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmsozLl4jLygIVAigDQzNlLBdAQ8bpeNT99BgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQJlkp4BAA&_nc_zt=28&oh=00_AfJtKdCa7YflP7aWfCKIoLjvqelDtuzQR6ocEtzi-7bttQ&oe=684146E9",
                thumbnailUrl:
                  "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/500892329_1215071943593619_2690255710088955217_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ce42&_nc_ohc=QoHadvziHEEQ7kNvwE-PAX_&_nc_oc=Adn7q7inFPwItHI0N5_EwBcWRd7qi74ZyHC41ilu2xHNMujaVON5uWwStyC7yAGiEJU&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=BIqW4GLH6GWa7rMa2JiKFA&oh=00_AfJx4boMwltKuEqfKWHotxJIBcehG40n3TdIHSVj0JAwjg&oe=68412D7B",
              },
              topComments: [
                {
                  id: "Y29tbWVudDoxMjgwOTAxOTEwMDMzODk0XzEyODA5MDg1ODY2OTk4OTM=",
                  text: "Did a powerbomb... stole a bat and he coulda ended that dude great self control",
                  publishTime: 1748057315,
                  author: {
                    id: "pfbid0DheZGgjMQgRTz5MPPHnkxaEDerz1v7Eq6mNgac85wAShJdU6oHPXQ9feQSSLytiEl",
                    name: "Marcos Mendoza",
                    gender: "MALE",
                    url: "https://www.facebook.com/marcos.mendoza.560854",
                  },
                },
                {
                  id: "Y29tbWVudDoxMjgwOTAxOTEwMDMzODk0XzEyODA5MjI2MzY2OTg0ODg=",
                  text: "The ice cream truck jingle made this an instant classic.",
                  publishTime: 1748058655,
                  author: {
                    id: "pfbid02woauK7hrKXtXwq7BCnj6hiCKfaNMUYu7TueHA6DhZS4EYYaKRMTTX5FgH4y1gYn3l",
                    name: "Lewis Santana",
                    gender: "MALE",
                    url: "https://www.facebook.com/luissantana27",
                  },
                },
              ],
            },
            {
              id: "1286064029517682",
              text: null,
              url: "https://www.facebook.com/groups/742354120555345/permalink/1286064029517682/",
              permalink:
                "https://www.facebook.com/sofiyati.942655/videos/1390174998770652/?idorvanity=742354120555345",
              author: {
                __typename: "User",
                name: "Sofiyati",
                short_name: "Sofiyati",
                id: "61552766652796",
              },
              reactionCount: 2064,
              commentCount: 413,
              videoViewCount: null,
              publishTime: 1748615813,
              videoDetails: {
                sdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQPNp462YmKD9gM-CvGhQ1-_eLCyuIW2VjmEwBwPB8tUPQsa_U4BUvJaBc349BjbepGeUvf_7cCVZ_vlJew3hpJe.mp4?strext=1&_nc_cat=109&_nc_sid=8bf8fe&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=ae0VsnoLQtAQ7kNvwHqh95e&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjM2MC5zdmVfc2QiLCJ4cHZfYXNzZXRfaWQiOjEwNjUwNzY5ODIxOTkzNzgsInZpX3VzZWNhc2VfaWQiOjEwMTIxLCJkdXJhdGlvbl9zIjoyMSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AfIAHBuToUCT7sMnHhi0E_Jg1kXRmYGXvadcWq1fxD_agg&oe=684155D9",
                hdUrl:
                  "https://video-sea1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQM9JaJSrDs7LdwNhv0V3RX-rqeSQMAcEKZHxK8r7fJCSfBfjeoicAq5LzZc3MjdpGX3U53iRWH5g9IAl-uyIEWW.mp4?strext=1&_nc_cat=101&_nc_sid=5e9851&_nc_ht=video-sea1-1.xx.fbcdn.net&_nc_ohc=kF7D9uVefoUQ7kNvwFzu9xR&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzNlLjcyMC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxMDY1MDc2OTgyMTk5Mzc4LCJ2aV91c2VjYXNlX2lkIjoxMDEyMSwiZHVyYXRpb25fcyI6MjEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=31e1f90330ba51e1&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ2JpNGgyZEFQdDFTeFFGQUZXWUJwS0RTQlZnYm1kakFBQUYVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRE90OVIwejA2T0Z2eU1HQUN2R1lfWlJLZjFpYnJGcUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmpNH18tGr5AMVAigDQzNlLBdANTul41P3zxgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQJlkp4BAA&_nc_zt=28&oh=00_AfLW0M3B3nGgopfnkM6OonAjdBwGrIgmwroV3H9P3hg8sA&oe=68415E79",
                thumbnailUrl:
                  "https://scontent-sea1-1.xx.fbcdn.net/v/t15.5256-10/502754732_2110163772821086_4373511123704867007_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ce42&_nc_ohc=3jok6WCUqMcQ7kNvwFXeHG7&_nc_oc=Adkc4JwXklseK8HvROcz5T8GntPXCVjwA7GuYjtdu8nLY9wak-bHzCOqlQyDaY7aOng&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=BIqW4GLH6GWa7rMa2JiKFA&oh=00_AfJpq9CcAaqsZizy2ECTar1NdvELlq3LJ-WgXPgAZ8lmcw&oe=68413302",
              },
              topComments: [
                {
                  id: "Y29tbWVudDoxMjg2MDY0MDI5NTE3NjgyXzEyODYwOTMwMDI4NDgxMTg=",
                  text: "No fight to see here, just a chump",
                  publishTime: 1748618582,
                  author: {
                    id: "pfbid06cUKaQWnFynREjde2E8RDsiiwAN7aZxfNAzmM58wkyCGApd8wSaxRyPT7iBXrodal",
                    name: "Sky Parker",
                    gender: "MALE",
                    url: "https://www.facebook.com/OfficerWubWub",
                  },
                },
                {
                  id: "Y29tbWVudDoxMjg2MDY0MDI5NTE3NjgyXzEyODY1MTYwNTk0NzI0Nzk=",
                  text: "Idk how yall say that’s a sucker punch. Don’t get in another man’s face n not expect a punch",
                  publishTime: 1748666313,
                  author: {
                    id: "pfbid0mu2nQsJbm7YPPmXvaDY7HXVZHzgEY7V8w5GcxJMrh7EkwTFcLzYRufSp8c2GzBVvl",
                    name: "Joshua Griffith",
                    gender: "MALE",
                    url: "https://www.facebook.com/katakeepsit100",
                  },
                },
              ],
            },
          ],
          cursor: "AQHRBjJCelNvdGRjH8s2j-....",
        },
      },
      // {
      //   name: "Reel",
      //   method: "GET",
      //   description: "Get public reel details",
      //   path: "/v1/facebook/user/reel",
      //   sampleResponse: {
      //     description:
      //       "Hahahahhaa , okay wash yah hands 😂 #baby #couple #pregnancy #charlesandalyssaforever #charlesandalyssa #love #couples #couplegoals #funny #jokes",
      //     self_view_boost: null,
      //     video: {
      //       id: "433712053064866",
      //       first_frame_thumbnail:
      //         "https://scontent-sjc3-1.xx.fbcdn.net/v/t51.71878-15/476169677_1228890849239254_6232950371948354945_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=1bf86e&_nc_ohc=md4BBuJK1JMQ7kNvgFXhY0r&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYB_32sT57R-Cg8dhnWqGWy8nqHvoDFpopmnlKTVMoLAFQ&oe=67B3180F",
      //       __typename: "Video",
      //       playable_duration_in_ms: 30041,
      //       embeddable: true,
      //       owner: { __typename: "User", id: "100044216926934" },
      //       audio_availability: "AVAILABLE",
      //     },
      //     if_should_change_url_for_reels: null,
      //     shareable_url: "https://www.facebook.com/reel/433712053064866",
      //     playback_video: {
      //       height: 1920,
      //       width: 1080,
      //       length_in_second: 30.041,
      //       id: "433712053064866",
      //       thumbnailImage: {
      //         uri: "https://scontent-sjc3-1.xx.fbcdn.net/v/t51.29350-10/475909344_1337620183924143_3617672300260549753_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=c3bc4c&_nc_ohc=srUT4hzrVvcQ7kNvgG0nqEa&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBHyz5a9XByUAo2tq0ogr1Zp5ivEFW6Zztpj3NNCrr1-Q&oe=67B2F1B2",
      //       },
      //       animated_image_caption: null,
      //       broadcaster_origin: null,
      //       broadcast_id: null,
      //       broadcast_status: null,
      //       is_live_streaming: false,
      //       is_live_trace_enabled: false,
      //       is_looping: false,
      //       is_video_broadcast: false,
      //       is_podcast_video: false,
      //       loop_count: 0,
      //       is_spherical: false,
      //       is_spherical_enabled: true,
      //       unsupported_browser_message: null,
      //       pmv_metadata: null,
      //       latency_sensitive_config: null,
      //       live_playback_instrumentation_configs: null,
      //       is_ncsr: false,
      //       permalink_url: "https://www.facebook.com/reel/433712053064866/",
      //       captions_url:
      //         "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475891612_433712393064832_4787332594767228115_n.srt?_nc_cat=106&ccb=1-7&_nc_sid=c211c2&_nc_ohc=SHajVdG9leoQ7kNvgHL8Rts&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYDLUQPHuue0h1OCgCTqxgAoG6PmHsKE-0t9qI-F8ZA-8A&oe=67B312DF",
      //       seo_web_crawler_lookaside_url: null,
      //       dash_prefetch_experimental: [
      //         "645361181498376v",
      //         "507008122412623a",
      //       ],
      //       video_available_captions_locales: [
      //         {
      //           localized_creation_method: "अपने आप अनुवाद किया गया",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475815263_433728229729915_1987753356117961997_n.srt?_nc_cat=102&ccb=1-7&_nc_sid=c211c2&_nc_ohc=0VfjZ8Dvj8sQ7kNvgHoayJl&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBzUu81AP7POpTlPsU98UAAX-AUSLD0KNhPcyaOuMuQcg&oe=67B31B6D",
      //           locale: "hi_IN",
      //           localized_language: "हिन्दी",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "แปลอัตโนมัติ",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/476446332_433728253063246_3331318211020844080_n.srt?_nc_cat=110&ccb=1-7&_nc_sid=c211c2&_nc_ohc=IlYndk24EicQ7kNvgGX4hgO&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYChkIUUd9SUAtxePX8xA3KCXzkQSwuEul-KTDy27sZdIw&oe=67B30FA1",
      //           locale: "th_TH",
      //           localized_language: "ภาษาไทย",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "Traduzido automaticamente",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475970425_433728239729914_6512582137404629861_n.srt?_nc_cat=105&ccb=1-7&_nc_sid=c211c2&_nc_ohc=abtYqpCUevMQ7kNvgGnNcfh&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYAbR2-Q-Kq8YQ4DtBK8cwKZGBgxTreW_5v7dmcfHxOHmw&oe=67B2EFF8",
      //           locale: "pt_PT",
      //           localized_language: "Português",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "خودکار ترجمہ کردہ",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475797595_433728233063248_4822062209552998201_n.srt?_nc_cat=108&ccb=1-7&_nc_sid=c211c2&_nc_ohc=2Ci2pPhgWTsQ7kNvgGuIWku&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBtVb4kajq1PaBI6i1Jl-oo4g1mUUPOQt6W4qKU3Rjo-A&oe=67B3135D",
      //           locale: "ur_PK",
      //           localized_language: "اردو",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "அதுவாகவே மொழிபெயர்க்கப்பட்டது",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475831375_433728246396580_1395399978086097461_n.srt?_nc_cat=109&ccb=1-7&_nc_sid=c211c2&_nc_ohc=R5nVfuHHTHcQ7kNvgGL4sL-&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYAOZFHl7SH6nnMwIuXISoj4C3vq0Mc4lZzoZFxzVhmMpA&oe=67B2F19F",
      //           locale: "ta_IN",
      //           localized_language: "தமிழ்",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "ఆటోమేటిక్‌గా అనువదించబడింది",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475851805_433728256396579_4329930750698252558_n.srt?_nc_cat=105&ccb=1-7&_nc_sid=c211c2&_nc_ohc=NFgGidiqWpwQ7kNvgG51DA9&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBKizT8KzLTYOztTpUq3ardVXI8qsPK918BjD44Soxmfw&oe=67B30848",
      //           locale: "te_IN",
      //           localized_language: "తెలుగు",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "Traducido automáticamente",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475850882_433728236396581_5553808724238214293_n.srt?_nc_cat=104&ccb=1-7&_nc_sid=c211c2&_nc_ohc=VbPS9G68FxsQ7kNvgHsh_07&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYDT3m4GWgNr6WgDGNk6LmG8zZrgmAieD978Js4ezvrUMA&oe=67B3130D",
      //           locale: "es_LA",
      //           localized_language: "Español",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "Terjemahan otomatis",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475427256_433728243063247_5765022858539750412_n.srt?_nc_cat=105&ccb=1-7&_nc_sid=c211c2&_nc_ohc=x5mAu6MxbhEQ7kNvgGkqRQ3&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYAN3QIgG5rfJFD54czFJLhFO1sZ59kzicvYeyqvSRLdQQ&oe=67B31FF0",
      //           locale: "id_ID",
      //           localized_language: "Bahasa Indonesia",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "Dịch tự động",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/476191585_433728249729913_9064201330213805877_n.srt?_nc_cat=105&ccb=1-7&_nc_sid=c211c2&_nc_ohc=t3yLuTH5eR4Q7kNvgGuUZ3I&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYB6NOr3bfxybUoViHNomdusERU1MbvesyliE3Z_sRQurQ&oe=67B2F04D",
      //           locale: "vi_VN",
      //           localized_language: "Tiếng Việt",
      //           localized_country: null,
      //         },
      //         {
      //           localized_creation_method: "Auto-generated",
      //           captions_url:
      //             "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2093-6/475891612_433712393064832_4787332594767228115_n.srt?_nc_cat=106&ccb=1-7&_nc_sid=c211c2&_nc_ohc=SHajVdG9leoQ7kNvgHL8Rts&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYDLUQPHuue0h1OCgCTqxgAoG6PmHsKE-0t9qI-F8ZA-8A&oe=67B312DF",
      //           locale: "en_US",
      //           localized_language: "English",
      //           localized_country: null,
      //         },
      //       ],
      //       video_status_type: "OK",
      //       can_use_oz: true,
      //       min_quality_preference: null,
      //       audio_user_preferred_language: "en",
      //       spherical_video_fallback_urls: null,
      //       comet_video_player_nextgendash_availability:
      //         "UNAVAILABLE_NEXTGENDASH_GK",
      //       videoDeliveryLegacyFields: {
      //         dash_manifest_url:
      //           "https://www.facebook.com/dash_mpd_debug.mpd?v=433712053064866&dummy=.mpd",
      //         browser_native_sd_url:
      //           "https://video-sjc3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQMx6E_PbEBxrYnaOx1aqgf0JAT5kDE9sEAWqSjC4BEAjBPKAJGIRZGgEddG_pgOMy4x8bFz3yRUlOdLqrNp4o9J.mp4?strext=1&_nc_cat=106&_nc_sid=8bf8fe&_nc_ht=video-sjc3-1.xx.fbcdn.net&_nc_ohc=9Qv2mVHBW1sQ7kNvgG8ADh6&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl8zNjBwIiwieHB2X2Fzc2V0X2lkIjo2MjE2NDg2MDA1MTM5NzQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=9-4&_nc_zt=28&oh=00_AYCLraWNwGp2-K7azxPsGh3MKWWAiZmXJ5l6jX4Bb20sNg&oe=67B300D4",
      //         browser_native_hd_url:
      //           "https://video-sjc3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQOTKT0oKsgGu6vsWmhe7-noYJb16dEovA-MfH3jFbi2zYms_4w4VRE8tMy09mpLJZKnW1z-pDw6utNPrFgagrfe.mp4?strext=1&_nc_cat=110&_nc_sid=8bf8fe&_nc_ht=video-sjc3-1.xx.fbcdn.net&_nc_ohc=vj3sojPiF1EQ7kNvgFzIRzA&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNzIwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjo2MjE2NDg2MDA1MTM5NzQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=9-4&_nc_zt=28&oh=00_AYBumE_6wMKlZ8Q3mwpNbOAsGpyuEMcuMIsGy-uKT9hk9A&oe=67B2F220",
      //         id: "433712053064866",
      //       },
      //       videoDeliveryResponseFragment: null,
      //       is_gaming_video: false,
      //       is_latency_menu_enabled: false,
      //       fbls_tier: null,
      //       is_latency_sensitive_broadcast: false,
      //       video_player_shaka_performance_logger_init: {
      //         __typename: "VideoPlayerShakaPerformanceLoggerInit",
      //         __module_operation_useVideoPlayerShakaPerformanceLoggerRelayImpl_video:
      //           {
      //             __dr: "useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization.graphql",
      //           },
      //         __module_component_useVideoPlayerShakaPerformanceLoggerRelayImpl_video:
      //           { __dr: "VideoPlayerShakaPerformanceLogger" },
      //       },
      //       video_player_shaka_performance_logger_should_sample: false,
      //       video_player_shaka_performance_logger_init2: {
      //         __typename: "VideoPlayerShakaPerformanceLoggerInit",
      //         __module_operation_useVideoPlayerShakaPerformanceLoggerBuilder_video:
      //           {
      //             __dr: "useVideoPlayerShakaPerformanceLoggerBuilder_init$normalization.graphql",
      //           },
      //         __module_component_useVideoPlayerShakaPerformanceLoggerBuilder_video:
      //           { __dr: "VideoPlayerShakaPerformanceLoggerBuilder" },
      //         per_session_sampling_rate: null,
      //       },
      //       autoplay_gating_result: "all_page_organic_allowed",
      //       viewer_autoplay_setting: "default_autoplay",
      //       can_autoplay: true,
      //       drm_info:
      //         '{"video_license_uri_map":{},"graph_api_video_license_uri":null,"fairplay_cert":null,"widevine_cert":"CsECCAMSEBcFuRfMEgSGiwYzOi93KowYgrSCkgUijgIwggEKAoIBAQCZ7Vs7Mn2rXiTvw7YqlbWYUgrVvMs3UD4GRbgU2Ha430BRBEGtjOOtsRu4jE5yWl5KngeVKR1YWEAjp+GvDjipEnk5MAhhC28VjIeMfiG\\/+\\/7qd+EBnh5XgeikX0YmPRTmDoBYqGB63OBPrIRXsTeo1nzN6zNwXZg6IftO7L1KEMpHSQykfqpdQ4IY3brxyt4zkvE9b\\/tkQv0x4b9AsMYE0cS6TJUgpL+X7r1gkpr87vVbuvVk4tDnbNfFXHOggrmWEguDWe3OJHBwgmgNb2fG2CxKxfMTRJCnTuw3r0svAQxZ6ChD4lgvC2ufXbD8Xm7fZPvTCLRxG88SUAGcn1oJAgMBAAE6FGxpY2Vuc2Uud2lkZXZpbmUuY29tEoADrjRzFLWoNSl\\/JxOI+3u4y1J30kmCPN3R2jC5MzlRHrPMveoEuUS5J8EhNG79verJ1BORfm7BdqEEOEYKUDvBlSubpOTOD8S\\/wgqYCKqvS\\/zRnB3PzfV0zKwo0bQQQWz53ogEMBy9szTK\\/NDUCXhCOmQuVGE98K\\/PlspKkknYVeQrOnA+8XZ\\/apvTbWv4K+drvwy6T95Z0qvMdv62Qke4XEMfvKUiZrYZ\\/DaXlUP8qcu9u\\/r6DhpV51Wjx7zmVflkb1gquc9wqgi5efhn9joLK3\\/bNixbxOzVVdhbyqnFk8ODyFfUnaq3fkC3hR3f0kmYgI41sljnXXjqwMoW9wRzBMINk+3k6P8cbxfmJD4\\/Paj8FwmHDsRfuoI6Jj8M76H3CTsZCZKDJjM3BQQ6Kb2m+bQ0LMjfVDyxoRgvfF\\/\\/M\\/EEkPrKWyU2C3YBXpxaBquO4C8A0ujVmGEEqsxN1HX9lu6c5OMm8huDxwWFd7OHMs3avGpr7RP7DUnTikXrh6X0"}',
      //       p2p_settings: null,
      //       audio_settings: null,
      //       captions_settings: null,
      //       broadcast_low_latency_config: null,
      //       audio_availability: "AVAILABLE",
      //       muted_segments: [],
      //       spherical_video_renderer: null,
      //       preferred_thumbnail: {
      //         image: {
      //           uri: "https://scontent-sjc3-1.xx.fbcdn.net/v/t51.29350-10/475909344_1337620183924143_3617672300260549753_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cb5bf7&_nc_ohc=srUT4hzrVvcQ7kNvgG0nqEa&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBHyz5a9XByUAo2tq0ogr1Zp5ivEFW6Zztpj3NNCrr1-Q&oe=67B2F1B2",
      //         },
      //         image_preview_payload: null,
      //         id: "643375581595522",
      //       },
      //       video_imf_data: null,
      //       warning_screen_renderer: null,
      //       cix_screen: null,
      //     },
      //     video_owner: {
      //       __typename: "User",
      //       id: "100044216926934",
      //       __isActor: "User",
      //       name: "Tom Brady",
      //       enable_reels_tab_deeplink: true,
      //       is_verified: true,
      //       url: "https://www.facebook.com/TomBrady",
      //       displayPicture: {
      //         uri: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-1/106296873_4387231321317984_4259106234273322140_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=q40gxz2rbO8Q7kNvgHE69tg&_nc_zt=24&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYBNS3vDhKsFOjLDcjQd-aOkBNBWgdqJxDK_TfwP05TMKw&oe=67D4AA8E",
      //       },
      //       subscribe_status: "CANNOT_SUBSCRIBE",
      //       delegate_page: {
      //         id: "214003275307497",
      //         woodhenge_creator_info: null,
      //       },
      //     },
      //     is_passive_content: false,
      //     fb_shorts_reshare_context: {
      //       is_reshare: false,
      //       reshare_creator: {
      //         __typename: "User",
      //         __isActor: "User",
      //         id: "100044216926934",
      //         name: "Tom Brady",
      //         enable_reels_tab_deeplink: true,
      //         is_verified: true,
      //         url: "https://www.facebook.com/TomBrady",
      //       },
      //     },
      //     remix_info: { is_remixable: false, status: "ENABLED" },
      //     video_owner_type: "FACEBOOK_USER",
      //     soundtrack_info: null,
      //     track_title: null,
      //     music_album_art_uri:
      //       "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-1/106296873_4387231321317984_4259106234273322140_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0fc832&_nc_ohc=q40gxz2rbO8Q7kNvgHE69tg&_nc_zt=24&_nc_ht=scontent-sjc3-1.xx&_nc_gid=A4VHRgrjrkt8q-yHAzlaXTX&oh=00_AYCUyqvne4BeHW8MN5HPDgWXxRTX-hQHaek5d9pmvowPNQ&oe=67D4AA8E",
      //     is_original_audio_on_facebook: true,
      //     transcript:
      //       "1\n00:00:00,000 --> 00:00:05,921\nOh the late slide no flag how\nfast I get up I definitely slid\n\n2\n00:00:05,921 --> 00:00:08,561\nlate that would 100% be a\npenalty now in the NFL right\n\n3\n00:00:08,561 --> 00:00:12,001\neven though I slid late you\ndeserve that one yeah I mean it\n\n4\n00:00:12,001 --> 00:00:15,281\nwas was he supposed to do\nsupposed to knock the at me and\n\n5\n00:00:15,281 --> 00:00:17,201\ntry to knock the ball off me\nand say he knocked the helmet\n\n6\n00:00:17,201 --> 00:00:20,241\noff me Nate that was a good hit\nyou have the ability to protect\n\n7\n00:00:20,241 --> 00:00:23,201\nyourself on offense or defense\nif you want protection get rid\n\n8\n00:00:23,201 --> 00:00:26,001\nof the ball I'm trying to get\nthe first down yeah and they're\n\n9\n00:00:26,001 --> 00:00:28,001\ntrying to keep me from getting\nthe first down great defense\n\n10\n00:00:28,001 --> 00:00:31,601\nhas defended every blade of\ngrass",
      //     comments: [
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzExNDQzMjUxODA3MzM4ODk=",
      //         text: "The refs would called the game if mahomes got hit like that!",
      //         created_at: "2025-02-04T19:24:10.000Z",
      //         reply_count: 6,
      //         reaction_count: 17,
      //         author: {
      //           id: "pfbid02fwDd2qbV17y76EwjYd6uvvh54KRt9SAPXp8ZZEDakaW3Qe9mrfBHdmoMEEjJKGoyl",
      //           name: "Jason Copass",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-1/87531843_2449375245166686_2831586700331843584_n.jpg?stp=c6.14.1412.1412a_cp0_dst-jpg_s64x64_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=njqQ1N8ahw4Q7kNvwEHnirw&_nc_oc=AdlI08iyZcPQPzgBFLZQBH684CF5d63pryz8tJx_r3dhQrfr5ayuIzdGSKOcqmmJbS0&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfY51QF8bUOUirOPri90f91gBJ-SfEcoB8AY5VHoKKn95Q&oe=68E58873",
      //           short_name: "Jason",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzYyMjcxMTA2MzY0MTg1OA==",
      //         text: "Bradys 🔥 pliability like a rubber band jump right back up.",
      //         created_at: "2025-02-06T15:16:17.000Z",
      //         reply_count: 0,
      //         reaction_count: 4,
      //         author: {
      //           id: "pfbid02jnLN6tX3fV6L3ueAz62RVQnePrHXcC7aaGcQ39LGktZRwxiP5BTxNZh2YahrN1ZUl",
      //           name: "Barry Maynard",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-1/29186700_10211995064295307_8421895465422815232_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=rgGuOM6s-7oQ7kNvwG3-c7m&_nc_oc=AdmxjwbrlvqcEo3VM19TD7RRvTAvKt-NvKrvE-5N35diHwLM6ofzsNz2O7EECok3XbI&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfZ27TnqQ55iEugcqQu9YRjxBTAqjUaz6oMsccKsRxasqw&oe=68E5794C",
      //           short_name: "Barry",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzExODIyMDQyNjY4ODcyODg=",
      //         text: "I love the way he says 'oh, the late sliiide.' As he gets absolutely blasted, and takes time to acknowledge the great hit by Nate",
      //         created_at: "2025-02-05T19:19:57.000Z",
      //         reply_count: 4,
      //         reaction_count: 4,
      //         author: {
      //           id: "pfbid0LC3NyehoiHqADtdtYTzMPBH9tbae7MfAqWfszd8CBWDyLXJWMtPgaE19Ahy8h4iJl",
      //           name: "Luke Warner",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/317083995_10106385555966752_8697447475009059997_n.jpg?stp=c0.0.912.912a_cp0_dst-jpg_s64x64_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=GquNv6qv7mYQ7kNvwGSk8Ui&_nc_oc=AdmL15vE7fyepHjKnliPbKexS3gycKhsyIsYv7e5sv1xPFEEfbhS5QF7MUvs1PeKbnc&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfZDXO8f13P2QgD_lbXOfDuV7M-X93TMnJ6gpfb79AMrHA&oe=68C3FE0C",
      //           short_name: "Luke",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzY1MjQxNDk5NDAzMTU0Nw==",
      //         text: "Anybody hits mahome girl like that they'd be doing 25 to life.",
      //         created_at: "2025-02-04T19:57:44.000Z",
      //         reply_count: 1,
      //         reaction_count: 4,
      //         author: {
      //           id: "pfbid025V7KobKoiWiesrSZ98ABzv5s3M6p8suWtGcpDatdNxEW1Rk69vXEeedfeMdPLdytl",
      //           name: "JC BC",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/356388818_10168104259200694_3771253781844132713_n.jpg?stp=c0.0.933.933a_cp0_dst-jpg_s64x64_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=xAIYRpFk5jMQ7kNvwF3cLb6&_nc_oc=AdlD2peD9fb_0s7MphkxlGqZA3q4buAyb7VYswyweF5-N5oy3YOJBI8r2dlDnWRgTHI&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfaURFthdCUNg0yw9nZeH8XRILCfr-mun9xcZ6trrbeoIQ&oe=68C3F7B4",
      //           short_name: "JC",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzEwNjI2Mzg4Njg5NjQyODQ=",
      //         text: "I was never a Brady fan( mainly because I am a Peyton fan), but after hearing him speak on matters such as this, my whole attitude toward him has changed. I have to admit, he is tough, not just a QB, but he is a football player. I think i might actually miss seeing him play.",
      //         created_at: "2025-02-05T02:07:45.000Z",
      //         reply_count: 10,
      //         reaction_count: 8,
      //         author: {
      //           id: "pfbid0YsMTQDLNRZQfRi8Q3Qq1EQVsdJMvem3pq3k71Na5SLGNbSZtJZApy3S2YCDRwgj7l",
      //           name: "Eric Candice Moody",
      //           gender: "FEMALE",
      //           profile_picture:
      //             "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/411032554_10211161110780076_1169000605826443697_n.jpg?stp=c170.0.739.739a_cp0_dst-jpg_s64x64_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=84IQlG5vxi8Q7kNvwGbvTRk&_nc_oc=Adl4J6qRYVJiSM9qZIGRAoDNnV7hZ1gxHYMQpoZhhhN8tbmmt2RcSURA7xFYetMNwD8&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfadTj63PO_rms9xUTWsZlJR3xWmbEArWzgJjKXU2Dm46g&oe=68C3EB0D",
      //           short_name: "Eric",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzU0NDE2ODI3MTk3NDQ4Ng==",
      //         text: "The NFL should perhaps look at introducing a rule similar to a rugby rule: The defender must use his arms in the tackle. It might help prevent injuries caused by flying in with shoulders and helmets. Also, using the arms in the tackle might work just as effectively as the current method - meaning the game probably won’t change much",
      //         created_at: "2025-02-06T05:35:52.000Z",
      //         reply_count: 1,
      //         reaction_count: 3,
      //         author: {
      //           id: "pfbid0uwJfbs4fx7aYxU7RNXE3xsQgFtbqPmVLqomzWS5qhTZcLtTcMPDcenDTCkQ3ThEsl",
      //           name: "Jon Tyler",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/470176629_10232104737535670_2185568672962724881_n.jpg?stp=cp6_dst-jpg_s64x64_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=rF0u4tbKEb4Q7kNvwGVXDrX&_nc_oc=Adm-KuMh8hTkZ7z5XHAh7qlYdSU4iK1t_WVpICocryzNQoTXVYZ_xMnjM1sQ-_gwikc&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfZcquEiKvrjOxplfftOaoRSEpOk7e0fK1eIdpndDygxVQ&oe=68C3DEC5",
      //           short_name: "Jon",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzEzOTE1MTA0MDIyMjkxNDM=",
      //         text: '"look how fast I got up"... What a dip shh..  this dude cried more than a jersey housewife',
      //         created_at: "2025-02-06T13:14:09.000Z",
      //         reply_count: 3,
      //         reaction_count: 5,
      //         author: {
      //           id: "pfbid02z6zAH9Pm1495cWVaZNhgvEj5FdDVbPmbXBLkQHoNr83w9CrUAPWzvTLai3FpogEyl",
      //           name: "Max Albrecht",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/515916742_10229803263206734_7259887041951523539_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=S-Nu5kE3IxkQ7kNvwHSsBeU&_nc_oc=Adlow5MP4LtpxCwW_HuVY2W6WM-1dJbAVFqPU49fuW2Km-mfIJia31SmZDGzIR3A2-8&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfZoPWfk1fu4xbXtIOzH5IlbaQj1UJwnujVIXIZIGxZyYg&oe=68C40585",
      //           short_name: "Max",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzE0MjEyMTIyMzkyNjI5NTc=",
      //         text: "Tom… you didn’t even slide though… you just fell backward as you got hit.",
      //         created_at: "2025-02-06T12:55:56.000Z",
      //         reply_count: 2,
      //         reaction_count: 4,
      //         author: {
      //           id: "pfbid02TPfFMRupNGrAK826kDVxDCn3ExjBhd22fo8wsHZvKfBJDasNKTxr3roT9pgpKqLMl",
      //           name: "Mitchell McCroskey",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/328627805_566274358888140_850779858109762572_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tLb57m3FvdMQ7kNvwHjVE9z&_nc_oc=AdnUF1XpkHrRvkuR0uHETt2y9DFtgu7Kmf7QIpJU_8MTirnkMKFf4KF7YrzI82-aQ44&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfYFYXLBcuRYzgUYLQbUzq2gekB1oGdUAtCZThZFM8aAGA&oe=68C40EF9",
      //           short_name: "Mitchell",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzM4NjMzMTQ5NjczMTQyODY=",
      //         text: "Mahomes would never be a starting quarterback back then.  Biggest baby in the WWNFL!",
      //         created_at: "2025-02-06T21:31:36.000Z",
      //         reply_count: 0,
      //         reaction_count: 2,
      //         author: {
      //           id: "pfbid035xC9GdbkX9XepnGmKZu8XfC5iKDYz88w3ZYP3Rbot2wGi8kw2jUFgFruuiSdhf1Nl",
      //           name: "Chris Kerdock",
      //           gender: "MALE",
      //           profile_picture:
      //             "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/464376930_10237155322488969_2314864066295907498_n.jpg?stp=c185.27.337.338a_cp0_dst-jpg_s64x64_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=-1rWE1ubrEkQ7kNvwH9D9Lp&_nc_oc=AdlYdaWU9Nlgq1xislMmpIG145Wms0dznvWlPIvLxZgE2Zat0r2Ri8Ol2zpn-4r3fBI&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfZhW6fbcoiWvSOtNsu_JHauq7RZeu-wprh7ktW_vXug4w&oe=68C3F8F3",
      //           short_name: "Chris",
      //         },
      //       },
      //       {
      //         id: "Y29tbWVudDoxMTkyMDIzOTgyMjgxNDg4XzIzOTM1NjQ5NDc3MTAzMjk=",
      //         text: "Mahomes literally slid into a defender and got roughing the passer called. So, Brady isn't wrong. 🫠",
      //         created_at: "2025-02-05T04:48:17.000Z",
      //         reply_count: 8,
      //         reaction_count: 11,
      //         author: {
      //           id: "pfbid02sN1mqbSbSStfjvYKSchtHS9nW4dY3HtnZn8TrJ6FJjm6fHETkC4xBX6VHuTPquAAl",
      //           name: "Kelsey Reusch",
      //           gender: "FEMALE",
      //           profile_picture:
      //             "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/544632717_1289315706015926_7755962059777462629_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=8IaTPpaRVhAQ7kNvwGB1FGH&_nc_oc=AdmPvl3F-vCgPGvoHAI1D5lKjnXpadP80xNO6inMgCaAdFuy_Ex4AXakvgrAfFWVG1g&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=Npzr_GigKiDsRyLhA8Dkng&oh=00_AfYXioj54o8ulr07t7i8yOaITqVZn5FTpbE-85jqCqS2gQ&oe=68C40E76",
      //           short_name: "Kelsey",
      //         },
      //       },
      //     ],
      //   },
      //   params: [
      //     {
      //       name: "url",
      //       type: "string",
      //       required: true,
      //       description: "Facebook reel URL",
      //     },
      //     {
      //       name: "get_transcript",
      //       type: "boolean",
      //       required: false,
      //       description: "Get the transcript of the reel",
      //     },
      //   ],
      // },
      // {
      //   name: "Post",
      //   method: "GET",
      //   description:
      //     "Get the post details from Facebook. Not much on the response payload right now. Just let me know what you want to see added: adrian@thewebscrapinguy.com",
      //   path: "/v1/facebook/user/post",
      //   sampleResponse: {
      //     post_id: "1081090083789267",
      //     author: "Feel Good Foodie",
      //     description:
      //       "Turn my popular chicken shawarma recipe into a sheet pan meal – so easy and so good!\nINGREDIENTS\n2 pounds boneless, skinless chicken thighs, thinly sliced\n2 tablespoons olive oil\n2 tablespoons lemon juice\n4 garlic cloves, minced\n1 teaspoon paprika\n¾ teaspoon salt\n½ teaspoon cardamom\n½ teaspoon cumin\n¼ teaspoon cinnamon\n¼ teaspoon crushed red pepper\n1 red onion, chopped\n4 carrots, chopped\n1 green pepper, chopped\nToum, for serving\nArabic-style pita, for serving\nINSTRUCTIONS\n1. Preheat the oven to 425°F and line a baking sheet with parchment paper.\n2. Pat the chicken dry with paper towels. In a large bowl, whisk the oil, lemon juice, garlic, paprika, salt, cardamom, cumin, cinnamon, and crushed red pepper. Add the chicken and gently toss to coat.\n3. Transfer the chicken to the prepared sheet pan spread out. Nestle the onions, tomatoes and green peppers around the chicken. \n4. Bake for 18 minutes, then broil on the top rack for 2 minutes on high.\n5. Serve with pita and garlic sauce, if desired.",
      //     url: "https://www.facebook.com/feelgoodfoodie/videos/1081090083789267/",
      //     video_url:
      //       "https://video-mia3-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQMChsYBLOFDvPLI2oPNV_bvvV26P8Fmu86xzsPKBLeBdYk0Hdj4FoGIFiHuM1YOKITm-iKqzB2iii9ICpMLSXMF.mp4?strext=1&_nc_cat=101&_nc_sid=8bf8fe&_nc_ht=video-mia3-1.xx.fbcdn.net&_nc_ohc=9l4rOWTDz0YQ7kNvwElPBRZ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6Mjk2MDIyNTUwMDc5OTAyNCwidmlfdXNlY2FzZV9pZCI6MTAxMjIsImR1cmF0aW9uX3MiOjI0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_zt=28&oh=00_AfFlQcTI7az2nG16Tta-ZtVDzEAX4KlfLN6Vz7Xl7-3rUg&oe=68076F3D",
      //     captions_url:
      //       "https://scontent-mia3-3.xx.fbcdn.net/v/t39.2093-6/476643449_1081091467122462_3259078018386035387_n.srt?_nc_cat=108&ccb=1-7&_nc_sid=c211c2&_nc_ohc=FvSjN2j6Z0YQ7kNvwFvkDGO&_nc_oc=Adkg_7gotOjlVZg9yisD4AWIqT06VAql7vwIe24IWbm_vdtLrIzSh7fTxukAaNGK9Aw&_nc_zt=14&_nc_ht=scontent-mia3-3.xx&_nc_gid=ZiKbbLgh9jN23mxaKISbJA&oh=00_AfGE-uKTrFtJOgBxAuLvomuCfzH3gwD-v2KI9SJDU8Sk6g&oe=680742F6",
      //     comments: [
      //       {
      //         author: {
      //           __typename: "User",
      //           id: "pfbid0tUFzYjyz18s68VX6efeZa1gKFw6JbBnAzwHRyRvw9ykmVAyx4mkDeLn5URu7zpXZl",
      //           name: "Helene Cyr",
      //           __isActor: "User",
      //           profile_picture_depth_0: {
      //             uri: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-1/475276949_9550995771630714_4496313640018141065_n.jpg?stp=cp0_dst-jpg_s32x32_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Vq9hOOhsOHQQ7kNvwHD0peg&_nc_oc=AdlEf2T3apSethfrK-B3YvO86iog_AANLTrmP6DAs592lzRaIbhP2s4sqXIAKdzLuhw&_nc_zt=24&_nc_ht=scontent-mia3-2.xx&_nc_gid=ZiKbbLgh9jN23mxaKISbJA&oh=00_AfHMxIXTiYnwS2hWjB43g2OYyIGt-Y3HSYVfX86Sfoe1LA&oe=68076657",
      //           },
      //           profile_picture_depth_1: {
      //             uri: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-1/475276949_9550995771630714_4496313640018141065_n.jpg?stp=cp0_dst-jpg_s24x24_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Vq9hOOhsOHQQ7kNvwHD0peg&_nc_oc=AdlEf2T3apSethfrK-B3YvO86iog_AANLTrmP6DAs592lzRaIbhP2s4sqXIAKdzLuhw&_nc_zt=24&_nc_ht=scontent-mia3-2.xx&_nc_gid=ZiKbbLgh9jN23mxaKISbJA&oh=00_AfEdr2AvLtPdBrSak87kxJ7ZhcLymf_KY27URXmuLsqetw&oe=68076657",
      //           },
      //           gender: "FEMALE",
      //           __isEntity: "User",
      //           url: null,
      //           work_info: null,
      //           is_verified: false,
      //           short_name: "Helene",
      //           subscribe_status: "CANNOT_SUBSCRIBE",
      //         },
      //         text: "Recipe please",
      //       },
      //     ],
      //     view_count: 33821,
      //     reactions_count: 174,
      //     transcript:
      //       "A few thinly sliced chicken\nthighs and combine them with a few spices, garlic, olive oil,\nand lemon juice you'll have a recipe for my popular chicken\nshawarma. To turn it into a sheet pan meal just add it to a\nsheet pan with onions, peppers and tomatoes and bake it for\njust 20 minutes. The chicken gets so tender and the veggies\nget all the flavor from the chicken marinade. You can eat\nit in a bowl by itself but I can't resist putting it on a\npita with some homemade garlic. So good.",
      //   },
      //   params: [
      //     {
      //       name: "url",
      //       type: "string",
      //       required: true,
      //       description: "Facebook post URL",
      //     },
      //   ],
      // },
      {
        name: "Post",
        method: "GET",
        description: "Get a public Facebook post or reel by url.",
        fullDescription:
          "Retrieves a single public Facebook post or reel by URL. Returns post_id, like_count, comment_count, share_count, view_count, description, creation_time, and author details. For video posts, includes video sd_url, hd_url, thumbnail, and length_in_second. Optionally fetches comments and transcript via get_comments and get_transcript parameters.",
        path: "/v1/facebook/post",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "The URL of the post to get",
            placeholder: "https://www.facebook.com/reel/1535656380759655",
          },
          {
            name: "get_comments",
            type: "boolean",
            required: false,
            description:
              "Whether you want to get the first several comments of the post",
            placeholder: "false",
          },
          {
            name: "get_transcript",
            type: "boolean",
            required: false,
            description: "Whether you want to get the transcript of the post",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 48026,
          post_id: "25118307061088489",
          like_count: 2095,
          comment_count: 48,
          share_count: 133,
          view_count: 133000,
          description:
            "Air Fryer Chocolate Cake \n\n100% f*cks, super simple and comes out gooey in the middle. 🍆 \n\n👨‍🍳 Ingredients:\n✅ 1 large banana – 100 g (3.5 oz)\n✅ 80 g vanilla YoPro yogurt (2.8 oz / ⅓ cup)\n✅ 15 g Cadbury Bournville cocoa (0.5 oz / 1 tbsp)\n✅ 80 ml egg whites (2.7 fl oz / ⅓ cup)\n✅ 50 g oat flour (1.75 oz / ½ cup)\n✅ 1 tsp vanilla extract (5 ml)\n✅ ½ tsp baking powder (2.5 g)\n👉 Optional: 1 square dark chocolate (10 g / 0.35 oz, ~55 cals)\n\n🔥 Method:\n 1. Mix banana, egg whites, yogurt, cocoa and vanilla until smooth\n 2. Stir in oat flour and baking powder\n 3. Pour into a ramekin or muffin tin\n 4. Add chocolate square to the centre if using\n 5. Air fry at 160°C / 320°F for 20 minutes\n\n📊 Macros (whole recipe):\nWithout choc: 378 cals | 27 g protein | 61.9 g carbs | 6 g fat\nWith choc: 433 cals | 27 g protein | 61.9 g carbs | 11.5 g fat\n\n📊 Macros (per serve — 2 serves):\nWithout choc: 189 cals | 13.5g protein | 31 g carbs | 3 g fat\nWith choc: 217 cals | 13.5 g protein | 31 g carbs | 5.8 g fat\n\nI also added low-calorie Peters ice cream and a small drizzle of Biscoff, but it honestly doesn’t need it. Tastes great on its own!\n\nIf you would like to make changes to this recipe yourself please do, but I like this EXACTLY the way it is. 🤝🫡",
          creation_time: "2025-09-18T06:30:18.000Z",
          feedback_id: "ZmVlZGJhY2s6MjUxMDIxMDY3OTkzNzUxODI=",
          url: "https://www.facebook.com/reel/1535656380759655",
          image_url: null,
          video: {
            id: "1535656380759655",
            sd_url:
              "https://video-fml1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQPmP0-_mHv5cFqZShaBXjVeIgFmk-_1-6fll0qvoiw3O_StvDRD1FPZafKE0Mri9p94smEKiXpdPjrMnIk2qesQ.mp4?strext=1&_nc_cat=106&_nc_sid=8bf8fe&_nc_ht=video-fml1-1.xx.fbcdn.net&_nc_ohc=l9xG1fq_DpcQ7kNvwHsNBKh&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl8zNjBwIiwieHB2X2Fzc2V0X2lkIjo4MTEzOTQ4MTQ3NDY5NjAsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyMywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=pXV0rbdIO2qXvelwzem88A&_nc_zt=28&oh=00_AfYY-br7Wa1JiPzs7_0vVr6SEV6zDf7qREmd6IV2xBGYMA&oe=68D239F0&bitrate=313736&tag=progressive_h264-basic-gen2_360p",
            hd_url:
              "https://video-fml1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQPvY-B_jtS_HwdB--AaOLTiMpw_euZ4QZoJbbh4iBl-faYyL6mYoumXJPqDF8qAnvZk8_SN5QOUds3tDfP0Bfa0.mp4?strext=1&_nc_cat=109&_nc_sid=8bf8fe&_nc_ht=video-fml1-1.xx.fbcdn.net&_nc_ohc=Z4s5wsMtW5wQ7kNvwFE0mwo&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNzIwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjo4MTEzOTQ4MTQ3NDY5NjAsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyMywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=pXV0rbdIO2qXvelwzem88A&_nc_zt=28&oh=00_AfZJDoPCKtq3WW2VumFViHPpmIkGGqG34j9MWd9FmGrCVg&oe=68D25899&bitrate=1088662&tag=progressive_h264-basic-gen2_720p",
            height: 1920,
            width: 1080,
            length_in_second: 23.36,
            thumbnail:
              "https://scontent-fml1-1.xx.fbcdn.net/v/t51.82787-10/549761436_18521992156021539_7633323777597918486_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=282d23&_nc_ohc=1LkTvLqxMhAQ7kNvwF2uUb7&_nc_oc=AdlKRAdNOj6ZDiga-3Zfj5bcwvfc68Lc39nsYJQ0hSPWGsRtUZJZ_sPCk25DrZJ2N98&_nc_zt=23&_nc_ht=scontent-fml1-1.xx&_nc_gid=pXV0rbdIO2qXvelwzem88A&oh=00_AfZy5UXtBdlEMJc6E6uLLiTvR15d344Nn4PO-wNA0cldQQ&oe=68D25528",
            captions_url:
              "https://scontent-fml1-1.xx.fbcdn.net/v/t39.2093-6/548496336_1535656704092956_4849526113470105591_n.srt?_nc_cat=105&ccb=1-7&_nc_sid=c211c2&_nc_ohc=IiEVsW2fSK0Q7kNvwEeCqpW&_nc_oc=AdmC4PNaIEGYuNZo_Qk6Qha6U8-ynQip-CKdvOrtQBRqTCrO8nOb6C5kABxPkLO4Vdc&_nc_zt=14&_nc_ht=scontent-fml1-1.xx&_nc_gid=pXV0rbdIO2qXvelwzem88A&oh=00_AfaJjBR2lJhhXTUO5hl0FWPGIlLxjVfuGMmTKUWSEtf6xA&oe=68D23D9F",
          },
          author: {
            id: "100000076236457",
            name: "Matt West",
            is_verified: true,
            url: "https://www.facebook.com/matt.west.184",
            image:
              "https://scontent-fml1-1.xx.fbcdn.net/v/t39.30808-1/485744182_9938984382780671_4072259528431711152_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_ohc=zu8xeHB9r5gQ7kNvwGWw84m&_nc_oc=AdkZ2Ef1ReB34aXLnnIpd4KHQ95nC0wAYS1GptVwcltvxMBjKXEU_D-mebY8WPwkhGI&_nc_zt=24&_nc_ht=scontent-fml1-1.xx&_nc_gid=pXV0rbdIO2qXvelwzem88A&oh=00_AfbFDYlovggVMiDAQp2_r7Ou-o0RG4T0VPbLMxVTfPlW7g&oe=68D250E6",
          },
          music: {
            id: "1506592770696336",
            type: "CUSTOM_AUDIO",
            track_title: "Matt West · Original audio",
            music_album_art:
              "https://scontent-fml1-1.xx.fbcdn.net/v/t39.30808-1/485744182_9938984382780671_4072259528431711152_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=1&ccb=1-7&_nc_sid=1d2534&_nc_ohc=zu8xeHB9r5gQ7kNvwGWw84m&_nc_oc=AdkZ2Ef1ReB34aXLnnIpd4KHQ95nC0wAYS1GptVwcltvxMBjKXEU_D-mebY8WPwkhGI&_nc_zt=24&_nc_ht=scontent-fml1-1.xx&_nc_gid=pXV0rbdIO2qXvelwzem88A&oh=00_AfZEGmsJmX51XXJTwXi90sPYazNybtjik0KhIFczr3jqIg&oe=68D250E6",
          },
        },
      },
      {
        name: "Transcript",
        method: "GET",
        description:
          "Get the transcript of a Facebook post. Can be a post or reel. You can only get a transcript if the video is under 2 minutes.",
        fullDescription:
          "Extracts the transcript text from a Facebook video post or reel. Returns the transcript as a single text string with line breaks. Only works on videos under 2 minutes in length.",
        path: "/v1/facebook/post/transcript",
        sampleResponse: {
          "success": true,
          "credits_remaining": 49999939403,
          "transcript": "We're fishing\nbite x2\nBest bait\non this pole\nsomething else\nThere's a chance\ncan get a\nmythic pistol\nYou have to\nall game\nstill won't\nNuh uh\nliterally\nthe spawn\non it\n1 in 1000\nlike that\nWell watch\nright here\nGonna do it\nstream\nto finding\npistol\nto still lose with it\nThat was very\nvery much\nhoney\nthank you very much"
        },
        placeholder: "https://www.facebook.com/reel/810660362052380q",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Facebook post URL",
          },
        ],
      },
      {
        name: "Comments",
        method: "GET",
        description: "Get the comments of a Facebook post (or reel)",
        fullDescription:
          "Fetches comments from a Facebook post or reel with cursor-based pagination. Each comment includes id, text, created_at, reply_count, reaction_count, and author details with name and profile_picture. Passing a feedback_id instead of a url significantly speeds up the request.",
        path: "/v1/facebook/post/comments",
        params: [
          {
            name: "url",
            type: "string",
            required: false,
            description: "Facebook post URL (or reel URL)",
            placeholder: "https://www.facebook.com/reel/753347914167361",
          },
          {
            name: "feedback_id",
            type: "string",
            required: false,
            description: "Using feedback_id (instead of url) will *really* speed up the request. You can get the feedback_id when you make a request to /v1/facebook/post.",
            placeholder: "ZmVlZGJhY2s6MTQ0NzY1NjMyMzM4Mzg0OA==",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description:
              "Cursor to get more comments. Get 'cursor' from previous response.",
            placeholder: "MToxNzU3MTA2NzYyOgF1P1VkxpkA9Ds4...",
          },
        ],
        sampleResponse: {
          success: true,
          comments: [
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzc4NzQ2NjY0NzI2NTk4Mw==",
              text: "How are you not 300lbs?",
              created_at: "2025-09-01T00:38:58.000Z",
              reply_count: 16,
              reaction_count: 76,
              author: {
                id: "pfbid0Ay28K5Lc7QpQLD8wZEHrq4ertocvWcZApjZjDoRqfkYQSzSxaPBS7qFt53v95rERl",
                name: "George Bergerac",
                gender: "MALE",
                profile_picture:
                  "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/505842751_10236156984095460_2868572328330516064_n.jpg?stp=cp0_dst-jpg_p64x64_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=g-I4H6KKM6MQ7kNvwFuygDF&_nc_oc=AdnwxxAwIfIChiaCwfglGjg0KQPGmQ1OGj63ApE0s61cGAfuYk3N_GRergiUg3NRJdE&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfZaDkoSLpJpbQieLDeGB_yykXQsr1Nv8hM_VfkUA1BcdA&oe=68C11D0D",
                short_name: "George",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzEzMjc3MzczMjIyMDEyOTg=",
              text: "Do these bits have cheese in the middle?",
              created_at: "2025-09-01T00:52:22.000Z",
              reply_count: 21,
              reaction_count: 32,
              author: {
                id: "1527964450",
                name: "Jill Carney Strother",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-1/69940743_10220991568328747_1326971802987003904_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=Ex_xJaIlN60Q7kNvwH3XZuy&_nc_oc=AdlV8aBJ-0JD1br2NBT6_F6TEKnp3IEP2FivOZws94atyClBXTkQ1MLRzdcxwDvAwi0&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfaNoY1bJKBk5dSVEY5L8n65TthSPqdoQSa7aq3oKvYlTg&oe=68E2BBBF",
                short_name: "Jill",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzE0ODE0MTIwNTYzNTA1NDk=",
              text: "I can’t even with some of you…this is not meant for dogs🤦🏻‍♀️",
              created_at: "2025-09-01T01:46:44.000Z",
              reply_count: 3,
              reaction_count: 57,
              author: {
                id: "pfbid0R6rs2W8jPF2sCcAKvZZJmGxsi3yvf49YpXdfxumjuwapfuAYgEEHaW2A9NQDcvMvl",
                name: "September Martinez",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/538790834_4189629641268107_6434583406373058543_n.jpg?stp=cp6_dst-jpg_s64x64_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Y3De0imXXHsQ7kNvwGizq6K&_nc_oc=AdmIxgyhswYXE3xoo3QLGrnLv7ekWDjT_LHvn4PWMehDk5Mf4xuilzaxZW6rOZ8jY_4&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfZLhxZ_XTPsABN6RzTw88FBfMHEQzO5tuLBD8MIlti2Uw&oe=68C12E18",
                short_name: "September",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzgwNjQwOTc4NTE0OTc4OQ==",
              text: "I thought dogs weren’t supposed to have chocolate.",
              created_at: "2025-08-31T23:54:14.000Z",
              reply_count: 17,
              reaction_count: 65,
              author: {
                id: "pfbid02s73v688AjeBDBkE9fZhHueosTBQcbBeVnXaCsdZkbtC3q6ZYUyutsjer8bWsR9P7l",
                name: "Jerry Mickel",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/406419031_217990624668899_9106419728628593815_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=o67dVhsiim0Q7kNvwEwaMOr&_nc_oc=Adm03sBUKi96OlsCVJgbAIYqsHY-5Ck2uJ_nNYbftqE9jdRx8A1KVEN0P43mcGcZETk&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfaRwhQ-hMmtEviACASXHbBEybQVpeGL-8u-IKx9I5PwKQ&oe=68C13D27",
                short_name: "Jerry",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzEzNTU1Mjc1NjI2MDYwNzk=",
              text: "Peanut butter Ritz bitz?",
              created_at: "2025-09-01T00:27:01.000Z",
              reply_count: 10,
              reaction_count: 35,
              author: {
                id: "pfbid0yr2MztyVjE36n2T2MSC1dxZNFN7kKHa2hQs8wrNAP81u2WdhRLFrzcGGbwuUALJzl",
                name: "Julie Henry",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/539869738_25395292103393389_6583639586888007033_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=glF31K6uPakQ7kNvwHIFd7E&_nc_oc=AdmyA6pevUHcAPtFd3RYSoxYvi6_XO_UtM4lLVIV5MyKpymcfRcAd0cBd6LOmOcYPmw&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfbrSLnkULZeUo3oSOx_MMMzL4Hcs1d_940O2iR_cbnTXg&oe=68C11822",
                short_name: "Julie",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzEyODEyNTE3NjM3NTEwODM=",
              text: "Sabrina Cox Jasmin Cox okay but hear me out, dark chocolate chips 👀",
              created_at: "2025-09-01T01:31:04.000Z",
              reply_count: 2,
              reaction_count: 28,
              author: {
                id: "pfbid02RCvNxqoKAfwwveRr4TbntoTP5wAcMXNCR3PAtnmPsiW67ZwtVuRyA4KMLDc4xUrl",
                name: "Brittani Crosby",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/542759259_10163010487289709_8829316704747256796_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tA57sz8ZmxoQ7kNvwEZLb1t&_nc_oc=AdnXhSmRCT-KZRj_ssbz9tGzvkSJ2CGogkQGE17MMsYzLqt6RNSrSTCOts6pWdLx3J8&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfZSI9nuRBpgI4u6jA5bTYE_lAMBQLKn8CPk8hvk4JxAJA&oe=68C11144",
                short_name: "Brittani",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzI1MDM5OTI2NjMzMTMxNzU=",
              text: "Don’t call it puppy chow!",
              created_at: "2025-09-01T17:23:19.000Z",
              reply_count: 2,
              reaction_count: 6,
              author: {
                id: "pfbid0366GoHvXmhVpW1Pmn1FqREnMdwM7drTzZDmKfBBJ4h9ZCwbqAayPWSwd9R3xsi68ql",
                name: "Susan Chapluk",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/465816038_10230475387701068_4549914005394301143_n.jpg?stp=cp6_dst-jpg_s64x64_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WX1tylQLsXwQ7kNvwGPxsoF&_nc_oc=Adm5wgy1WCzd3Py2OAhE2cKbMNvfk5GJKsZ8QHi6lyXR3RUWjaB29IvKu8lNtGalm44&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfZPQaGi3i9CaaY6h6LhvHNaq2lFwmEJvI2TTnohLWbBgw&oe=68C13F88",
                short_name: "Susan",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzc3OTIzNDI4MTE0NjkzNQ==",
              text: "Do 1/2 mini Oreos and 1/2 peanut butter ritz Bitz, otherwise the same recipe. It’s the BEST",
              created_at: "2025-09-01T01:10:40.000Z",
              reply_count: 0,
              reaction_count: 65,
              author: {
                id: "pfbid02SVEnjgMo57xpqySrw7QsVRC7TAoYQTzMQ4XJtssQPqvEW9w1hhxAtDWVmsMfWjHbl",
                name: "Robin Bergsagel",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/541010933_10106323684125112_9066040164311826134_n.jpg?stp=cp6_dst-jpg_s64x64_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3o6GoniJWEAQ7kNvwGDVvdr&_nc_oc=AdlY9HcfH2Zs3q7F6uvcQNNVuhaxsYnuVcICeJxcTAMGaoUXeSxcC0eOFS20I3DV0v0&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_AfZGcCUwIeJdH-TI6OaMILaUvssicIXMsiOMZCHPMAS3_A&oe=68C13C44",
                short_name: "Robin",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzE2OTIxMjYzNzgxNjQyMjc=",
              text: "Can you swap the butter w coconut oil 🤔",
              created_at: "2025-09-01T05:56:59.000Z",
              reply_count: 1,
              reaction_count: 9,
              author: {
                id: "pfbid0djswr3Z8SToef7Wj9Fzupd8rGYUe1xsx13erS8yhQFuJfBz8F6eEQCGCCyHcvuhvl",
                name: "Brittany Roberts",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/484048746_1481399372776555_7033620469332753416_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tQZJudJs3sUQ7kNvwEI-yN7&_nc_oc=AdkQQvnVMQPRscT0MkO3Z-qG7X2RtIUFS0a6PPmh6b81fM1eUMHyRrrZyE5vYmXVW0Y&_nc_zt=24&_nc_ht=scontent-iad3-1.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_Afa8xGdV8OgCo8_fZe8_9hp1R5gjtX7rBdIKy-QPxULvHQ&oe=68C12BA7",
                short_name: "Brittany",
              },
            },
            {
              id: "Y29tbWVudDoxMjA2OTAzNjAxNDgzOTYwXzc4NTg0MjQxMDQ3NDE5OQ==",
              text: "That's some expensive puppy chow",
              created_at: "2025-09-01T00:31:02.000Z",
              reply_count: 8,
              reaction_count: 11,
              author: {
                id: "552156286",
                name: "Megan Schmid",
                gender: "FEMALE",
                profile_picture:
                  "https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-1/541491024_10163240473996287_3428775103018790013_n.jpg?stp=cp0_dst-jpg_s64x64_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=mvOBkfCxKYYQ7kNvwFaA8lw&_nc_oc=AdmdDWenldlwcV1MQrdBrzrzcrVATtsMEBuuCeOLNWHOpSy_3WGOI1BKOo8JU_uGIl8&_nc_zt=24&_nc_ht=scontent-iad3-2.xx&_nc_gid=bSL3vZeoZ5ZB38ahoYqBtg&oh=00_Afa-20XWiaBHWN07x04cxx6eA3k3FNUuB8GBsNmZBFvbqw&oe=68C13C4E",
                short_name: "Megan",
              },
            },
          ],
          cursor: "MToxNzU3MTA2NzYyOg....",
          has_next_page: true,
        },
      },
    ],
  },
  {
    id: "facebookAdLibrary",
    name: "Facebook Ad Library",
    description: "Scrapes the Facebook (Meta) Ad Library",
    endpoints: [
      {
        name: "Ad Details",
        method: "GET",
        description:
          "Pass the Ad ID and get back details about the ad. Be careful that if an ad has multiple versions, you're actually going to want to get the title from the 'cards' object. If you ask for the transcipt, we will only transcribe the video if it's under 2 minutes.",
        fullDescription:
          "Retrieves detailed information about a specific Facebook ad by its ID or URL. Returns adArchiveID, pageName, isActive, startDate, endDate, and a snapshot containing body, images, videos, display_format, link_url, and cta_text. For ads with multiple versions, the ad creative is found in the snapshot.cards array rather than snapshot.body.",
        path: "/v1/facebook/adLibrary/ad",
        sampleResponse: {
          adid: 0,
          adArchiveID: 702369045530963,
          archiveTypes: [],
          categories: [0],
          containsDigitallyCreatedMedia: false,
          containsSensitiveContent: false,
          collationCount: null,
          collationID: null,
          currency: "",
          endDate: 1747983600,
          entityType: "person_profile",
          fevInfo: null,
          finServAdData: {
            is_deemed_finserv: false,
            is_limited_delivery: false,
          },
          gatedType: "eligible",
          hasUserReported: false,
          hiddenSafetyData: false,
          hideDataStatus: "NONE",
          impressionsWithIndex: {
            impressionsText: null,
            impressionsIndex: -1,
          },
          isAAAEligible: true,
          isAdAccountActioned: false,
          isActive: false,
          isProfilePage: false,
          pageID: 166258896830103,
          pageInfo: null,
          pageIsDeleted: false,
          pageName: "Porto Montenegro",
          politicalCountries: [],
          reachEstimate: null,
          regionalRegulationData: {
            finserv: {
              is_deemed_finserv: false,
              is_limited_delivery: false,
            },
            tw_anti_scam: {
              is_limited_delivery: false,
            },
          },
          reportCount: null,
          snapshot: {
            ad_creative_id: 1066536401993375,
            cards: [],
            body_translations: {},
            byline: null,
            caption: "www.portomontenegro.com",
            cta_text: "Learn more",
            dynamic_item_flags: {},
            dynamic_versions: null,
            edited_snapshots: [],
            effective_authorization_category: "NONE",
            event: [],
            extra_images: [],
            extra_links: [],
            extra_texts: [],
            extra_videos: [],
            instagram_shopping_products: [],
            display_format: "video",
            title: null,
            link_description: null,
            link_url:
              "https://www.portomontenegro.com/attractions-events/boka-place-grand-opening/",
            page_welcome_message: null,
            images: [],
            videos: [
              {
                video_hd_url:
                  "https://video-lga3-1.xx.fbcdn.net/v/t42.1790-2/491479560_702369072197627_5775200790449116407_n.?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=hwX4c3kvwLsQ7kNvwFl2d_Q&_nc_oc=AdlG8xo51B_VLh8mOjXqjG0Mad3sb7Q-j-8ZZzP-s_j3sHdDkDUJwrrmYd7R9UyfaOA&_nc_zt=28&_nc_ht=video-lga3-1.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfKBmgSKPootHiGNb9xgL2zB15Omax_hVTaa2bzRsjzn_w&oe=6843812F",
                video_sd_url:
                  "https://video-lga3-1.xx.fbcdn.net/v/t42.1790-2/499448662_702369075530960_5981246750517589666_n.?_nc_cat=103&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=cg4ziP_jjpkQ7kNvwEd7Ymr&_nc_oc=AdlMwa_AeLm6TknZdG_S5L26DNIi_LeoUM_iw58qxM3z4hkKIeJOinIjGuvP4T1zl8I&_nc_zt=28&_nc_ht=video-lga3-1.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfK-DFpMEBShiZb3JUsjv_0EAC7saMqut0dI5fJGTAK8hQ&oe=6843A9D6",
                watermarked_video_sd_url: "",
                watermarked_video_hd_url: "",
                video_preview_image_url:
                  "https://scontent-lga3-1.xx.fbcdn.net/v/t39.35426-6/499149696_1837810423819060_5242520759436861939_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=h-Gc3OVWRsQQ7kNvwENP9GF&_nc_oc=AdnHZtuO7JE08Yptly2LO3_sk-XEiw2Dx_ZHE2FyzV8AY1Y-zm24L3Na7ap1rdpO-f8&_nc_zt=14&_nc_ht=scontent-lga3-1.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfKr3Go0i5YNKCoOfapvk0fO7DxfBFYazfPdNnjbBHnnEA&oe=684381BA",
              },
            ],
            creation_time: 1747908203,
            page_id: 598631456674530,
            page_name: "Porto Montenegro Experience",
            page_profile_picture_url:
              "https://scontent-lga3-3.xx.fbcdn.net/v/t39.35426-6/498588182_739875508369121_8639482247199838788_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=110&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=CL4JqnVkRzgQ7kNvwEVYWpq&_nc_oc=AdkdPEIQctV4dKggCb8YIFBwzdb5ghgYdYUDAEqQ8mcGtCVOr3QZZ_-kg9lil60EMOg&_nc_zt=14&_nc_ht=scontent-lga3-3.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfIJsuOZfJyoWeHNlOp18Nn7Y1xmM79egJLCXKItT0-qjQ&oe=68439344",
            page_categories: {
              197251360301109: "Marina",
            },
            page_entity_type: "person_profile",
            page_is_profile_page: false,
            instagram_actor_name: "Porto Montenegro Experience",
            instagram_profile_pic_url:
              "https://scontent-lga3-2.xx.fbcdn.net/v/t39.35426-6/499922917_1078294804160843_5583552140592065526_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=EWHzIxDAk20Q7kNvwFgPQrS&_nc_oc=AdmbvB4ypz9F2BrlQ7FcUMcvfR5JvoCggHJ1a4Ntu3ZXQ8KoiUCOTCYzvZ1z6gYiIJo&_nc_zt=14&_nc_ht=scontent-lga3-2.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfJd0SOIGy12aEqb4GS4Kz86YOdg3NpQ5OL9W-RRnBHPBQ&oe=6843A343",
            instagram_url: "",
            instagram_handle: "",
            is_reshared: false,
            version: 3,
            body: "Reflections ripple, light gathers,<br /> and tomorrow brings a new rhythm to the square. <br /> <br /> One day until the Grand Opening of Boka Place.",
            brazil_tax_id: null,
            branded_content: {
              page_id: 166258896830103,
              page_name: "Porto Montenegro",
              page_profile_picture_url:
                "https://scontent-lga3-1.xx.fbcdn.net/v/t39.35426-6/499920502_2382687582132053_334434608727983440_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=zJEq2b_i4xwQ7kNvwEhuat_&_nc_oc=AdnryrPnSzR5YCB7wO-EVqpswUJ2l8xDDXiCjJN6b4rhZJ2c8809t5QTDa7OwUq9ueU&_nc_zt=14&_nc_ht=scontent-lga3-1.xx&_nc_gid=PBbgsjxhy8iorGrJjaavZw&oh=00_AfLZibsXYNxUNvp9LT4tOJWbf-3uFIkWN4e5ke-s5FqGdw&oe=68438B15",
              page_categories: {
                197251360301109: "Marina",
              },
              current_page_name: "Porto Montenegro",
              page_profile_uri:
                "https://www.facebook.com/portomontenegrotivat/",
              page_is_deleted: false,
            },
            current_page_name: "Porto Montenegro Experience",
            disclaimer_label: null,
            page_like_count: 1,
            page_profile_uri: "https://www.facebook.com/61575286107814/",
            page_is_deleted: false,
            root_reshared_post: null,
            cta_type: "LEARN_MORE",
            additional_info: null,
            ec_certificates: null,
            country_iso_code: null,
            instagram_branded_content: {
              instagram_bc_sponsor_id: "17841400741682419",
              instagram_bc_sponsor_name: "porto_montenegro",
            },
          },
          spend: null,
          startDate: 1747897200,
          stateMediaRunLabel: null,
          publisherPlatform: ["facebook", "instagram", "audience_network"],
          menuItems: [],
          targetedOrReachedCountries: [],
          totalActiveTime: 41782,
          url: "https://www.facebook.com/ads/library?id=702369045530963",
          startDateString: "2025-05-22T07:00:00.000Z",
          endDateString: "2025-05-23T07:00:00.000Z",
          aaa_info: {
            targets_eu: true,
            location_audience: [
              {
                name: "Dubrovnik, Croatia",
                num_obfuscated: 0,
                type: "CITY",
                excluded: false,
              },
            ],
            gender_audience: "All",
            age_audience: {
              min: 18,
              max: 65,
            },
            eu_total_reach: 1657,
            age_country_gender_reach_breakdown: [
              {
                country: "HR",
                age_gender_breakdowns: [
                  {
                    age_range: "45-54",
                    male: 101,
                    female: 77,
                    unknown: 4,
                  },
                  {
                    age_range: "55-64",
                    male: 55,
                    female: 55,
                    unknown: 1,
                  },
                  {
                    age_range: "65+",
                    male: 37,
                    female: 29,
                    unknown: null,
                  },
                  {
                    age_range: "18-24",
                    male: 161,
                    female: 152,
                    unknown: 7,
                  },
                  {
                    age_range: "25-34",
                    male: 374,
                    female: 238,
                    unknown: 8,
                  },
                  {
                    age_range: "35-44",
                    male: 196,
                    female: 133,
                    unknown: 5,
                  },
                ],
              },
            ],
            payer_beneficiary_data: [
              {
                payer: "Porto Montenegro",
                beneficiary: "Porto Montenegro",
              },
            ],
            has_violating_payer_beneficiary: false,
            is_ad_taken_down: false,
          },
        },
        trimmedResponse: {
          adArchiveID: 1185617869915074,
          endDate: 1750316400,
          isAAAEligible: false,
          isActive: true,
          pageID: 15087023444,
          pageName: "Nike",
          politicalCountries: [],
          reachEstimate: null,
          snapshot: {
            ad_creative_id: 1809449763118705,
            cards: [],
            body_translations: {},
            byline: null,
            caption: "fb.com",
            cta_text: "Learn more",
            dynamic_item_flags: {},
            dynamic_versions: null,
            edited_snapshots: [],
            effective_authorization_category: "NONE",
            event: [],
            extra_images: [
              {
                original_image_handle:
                  "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/508997149_744746594672572_3057533797808431470_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=eKgqs7-b06UQ7kNvwGSYm41&_nc_oc=AdnV_v1Anh3aqBBXDa3xwDrMtLJUCvE8yKIgP5ODbX3xsSMCtTv2ucMTy36I8Bq20HU&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfNfDJHp6d0Ie9tIXLBIXFQiMgWHVl1i48DahYYOgANgHg&oe=685A4B4A",
                resized_image_handle:
                  "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/508997149_744746594672572_3057533797808431470_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=eKgqs7-b06UQ7kNvwGSYm41&_nc_oc=AdnV_v1Anh3aqBBXDa3xwDrMtLJUCvE8yKIgP5ODbX3xsSMCtTv2ucMTy36I8Bq20HU&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfMe107fPkaznD6Pw8_wDaon3p-31ZXLHIeglHU_P3NYNw&oe=685A4B4A",
              },
              {
                original_image_handle:
                  "https://scontent-ord5-3.xx.fbcdn.net/v/t39.35426-6/502522483_10008336109213344_339428863599245121_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=VJJZwRcVMI0Q7kNvwH-ykPe&_nc_oc=Adkw-CG_72HA1dn-J1Dajg0AdUi4O-dHwJuarWLQ6pyqIxB88UN0NnMZ5SjOxy_gbzg&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfM-uzpTp8WPgiazru4PAjqKt1mWc40-QWt_Lajxw5SXLw&oe=685A6450",
                resized_image_handle:
                  "https://scontent-ord5-3.xx.fbcdn.net/v/t39.35426-6/502522483_10008336109213344_339428863599245121_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=VJJZwRcVMI0Q7kNvwH-ykPe&_nc_oc=Adkw-CG_72HA1dn-J1Dajg0AdUi4O-dHwJuarWLQ6pyqIxB88UN0NnMZ5SjOxy_gbzg&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfMkyFRROAMUh32ByaK8cZvNKNGbbtEm7Q6T3Sffn5ElKQ&oe=685A6450",
              },
            ],
            extra_links: ["https://www.nike.com.ar/"],
            extra_texts: [],
            extra_videos: [],
            instagram_shopping_products: [],
            display_format: "image",
            title: "6 cuotas sin interés",
            link_description: null,
            link_url: "https://fb.com/canvas_doc/1952657995267951",
            page_welcome_message: null,
            images: [
              {
                original_image_url:
                  "https://scontent-ord5-2.xx.fbcdn.net/v/t39.35426-6/499542231_3815578848587795_5060085138610262269_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=yk26_frcPLkQ7kNvwF5EWnq&_nc_oc=Adk8Xjt1SjUg-mBxkm6iUuDfXpyGXD5G5g6PBae8g0WWsJT-MfnhNGII7JL-KM5MJBE&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfP6zfVuLkcD2Zts0gItXp801QK1k0lhEfqwwdqfNAU9gw&oe=685A3E80",
                resized_image_url:
                  "https://scontent-ord5-3.xx.fbcdn.net/v/t39.35426-6/509090139_3448752085259208_8196922920009954562_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=tV3v2Y_NIh0Q7kNvwEMM-Vk&_nc_oc=AdnpccGMqNlM0k9O87VmMBIp9pGtj3l1dkO5HaKRCti2V4X6AKUn8BR08SXOc_Y-8TY&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfPXGzKezcPJSpAq8Ql2Xgx6Rn0a3Poit-iTirfhAwuiHA&oe=685A5634",
                watermarked_resized_image_url: "",
                image_crops: {},
              },
            ],
            videos: [],
            creation_time: 1750344986,
            page_id: 15087023444,
            page_name: "Nike",
            page_profile_picture_url:
              "https://scontent-ord5-2.xx.fbcdn.net/v/t39.35426-6/508670148_9776464209142246_4487234065380829819_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=105&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=Q0UJas7Kz2wQ7kNvwGKBRCa&_nc_oc=AdnobFr6ScYQJzp_Za4UEgMY34n373z6WuZwOA3h-ixlpbii4wA8lxcgAsbtBpCE3t4&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfMlwCCMXN-4KPAZac9pYLWrHGZpld9SoTX1r9S9xRHB8Q&oe=685A5861",
            page_categories: {
              1713352298924731: "Sportswear",
            },
            page_entity_type: "person_profile",
            page_is_profile_page: false,
            instagram_actor_name: "Nike",
            instagram_profile_pic_url:
              "https://scontent-ord5-3.xx.fbcdn.net/v/t39.35426-6/499229861_3519049748228633_8442052921006945421_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=eJcuzztd8e4Q7kNvwEpFLbr&_nc_oc=AdlI7WAi5QRhAOZCLwHcU3ZgxpxWSTzJr9PjPiwtUN9U2mkMB49Surq8HsQcDWfnTVc&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=ocFZ2kPWmNZ0nKyk5HCtkQ&oh=00_AfNnIjlMGopiAeVY7yEOxCT0sEvrij87SMrpkGJHs1lT-w&oe=685A55E2",
            instagram_url: "",
            instagram_handle: "",
            is_reshared: false,
            version: 3,
            body: "Aprovechá 6 cuotas sin interés con todos los bancos. ¿Te lo vas a perder? Comprá ahora.",
            brazil_tax_id: null,
            branded_content: null,
            current_page_name: "Nike",
            disclaimer_label: null,
            page_like_count: 37497720,
            page_profile_uri: "https://www.facebook.com/nike/",
            page_is_deleted: false,
            root_reshared_post: null,
            cta_type: "LEARN_MORE",
            additional_info: null,
            ec_certificates: null,
            country_iso_code: null,
            instagram_branded_content: null,
          },
          totalActiveTime: 23488,
          spend: null,
          startDate: 1750316400,
          publisherPlatform: [
            "facebook",
            "instagram",
            "audience_network",
            "messenger",
          ],
          url: "https://www.facebook.com/ads/library?id=1185617869915074",
          startDateString: "2025-06-19T07:00:00.000Z",
          endDateString: "2025-06-19T07:00:00.000Z",
          aaa_info: null,
        },
        params: [
          {
            name: "id",
            type: "string",
            required: false,
            description: "Facebook Ad Id",
            placeholder: "702369045530963",
          },
          {
            name: "url",
            type: "string",
            required: false,
            description: "Facebook Ad URL",
            placeholder:
              "https://www.facebook.com/ads/library?id=1185617869915074",
          },
          {
            name: "get_transcript",
            type: "boolean",
            required: false,
            description:
              "Get the transcript of the ad. Only works if the video is under 2 minutes.",
            placeholder: "false",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        responseFields: [
          {
            path: "adArchiveID",
            description:
              "This is the ad id. You'd think it'd be 'adid', but facebook decided to make it confusing 🤦‍♂️",
          },
        ],
      },
      {
        name: "Search",
        method: "GET",
        description:
          "Search the Facebook (Meta) Ad Library By Keyword. This endpoint will tap out around 1,500 results, beacuse the cursor becomes too big for a GET request. If you need more results, call this endpoint as a POST, and pass the query params in the body.",
        fullDescription:
          "Searches the Meta Ad Library by keyword and returns matching ads. Each result includes ad_archive_id, page_name, is_active, publisher_platform, and a snapshot with body text, images, videos, and cta_text. Results cap around 1,500 via GET due to cursor size limits; switch to POST method with body params for larger result sets.",
        path: "/v1/facebook/adLibrary/search/ads",
        sampleResponse: {
          searchResults: [
            {
              ad_archive_id: "615470338018648",
              ad_id: null,
              archive_types: [],
              categories: ["UNKNOWN"],
              collation_count: 1,
              collation_id: "888075953335279",
              contains_digital_created_media: false,
              contains_sensitive_content: false,
              currency: "",
              end_date: 1740729600,
              entity_type: "PERSON_PROFILE",
              fev_info: null,
              finserv_ad_data: {
                is_deemed_finserv: false,
                is_limited_delivery: false,
              },
              gated_type: "ELIGIBLE",
              has_user_reported: false,
              hidden_safety_data: false,
              hide_data_status: "NONE",
              impressions_with_index: {
                impressions_text: null,
                impressions_index: -1,
              },
              is_aaa_eligible: false,
              is_active: true,
              is_profile_page: false,
              menu_items: [],
              page_id: "115531458627129",
              page_is_deleted: false,
              page_name: "JNB Stables Labradoodles",
              political_countries: [],
              publisher_platform: ["FACEBOOK", "INSTAGRAM"],
              reach_estimate: null,
              regional_regulation_data: {
                finserv: {
                  is_deemed_finserv: false,
                  is_limited_delivery: false,
                },
                tw_anti_scam: { is_limited_delivery: false },
              },
              report_count: null,
              snapshot: {
                body: {
                  text: "Discover the unmatched joy of having Cedar in your life—a playful and intelligent labradoodle who’s eager to please and full of enthusiasm! Cedar boasts a confident demeanor and a moderate energy level, making him the perfect companion for any active household. His inquisitive nature and exceptional problem-solving skills will keep you entertained as he explores the world around him, ensuring that there’s never a dull moment.\n\nCedar’s independent spirit also presents a fantastic opportunity for bonding through obedience training. This experience not only strengthens your connection but also enhances his impressive skills—after all, with evaluation scores mostly in the 4's, Cedar shows remarkable potential for dog sports, hiking, running, and any stimulating activity you can think of!\n\nIdeal for an experienced dog family ready to embrace an active lifestyle, Cedar is more than just a pet; he’s a loyal companion waiting to share exciting adventures with you. Don’t let the chance to welcome this incredible pup into your home slip away. By choosing Cedar, you’re opening the door to a lifetime of joy, love, and unforgettable experiences. Make Cedar a cherished member of your family today!",
                },
                branded_content: null,
                brazil_tax_id: null,
                byline: null,
                caption: null,
                cards: [],
                cta_text: "No button",
                cta_type: "NO_BUTTON",
                country_iso_code: null,
                current_page_name: "JNB Stables Labradoodles",
                disclaimer_label: null,
                display_format: "MULTI_IMAGES",
                event: null,
                images: [
                  {
                    original_image_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/481661162_990940825757018_8913176685534608816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeFh8i-Z5kuJ16lqUxcUXs-ZDyrJuz4iKPUPKsm7PiIo9dMNkqCaPt8liPPGabEi8-gibi-WZTylOSlQQNRnxjTT&_nc_ohc=J_6SeTivTasQ7kNvgGEJ5D5&_nc_oc=AdiVcqOuQdywnrpvb75866Udx7xPfkUDT6ikNbmuIxTvcXWDy5hLn81fSf4M1zJD54w&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AZxpM4HubQsLPUC0gB46zAp&oh=00_AYD2APYZJejn4srpHfr9dWiivmYDVF3BBE4GZ39fhKpe_w&oe=67C83B69",
                    resized_image_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/480837265_659371736650913_3605385323286208049_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeHtmv91qbrhP_gBGdhH1sIeg9xKoAkcVGWD3EqgCRxUZel-aAIRonjSGXPj6LnUtMqdlcaX06Jz1tg8m_xMxpYD&_nc_ohc=tlfzH5L3yjgQ7kNvgFePtMF&_nc_oc=AdgiUmZhlwcNdDCj2UOoaF5i-kcJMbSk27A3C50uA6moXJvGdAk5AWivF7jBFDan8PE&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AZxpM4HubQsLPUC0gB46zAp&oh=00_AYB0_2vXVBDY6wjCOSCYm9xKKAIIzPW8lPuhHTUwpBCsXg&oe=67C84C71",
                    watermarked_resized_image_url: "",
                    image_crops: [],
                  },
                  {
                    original_image_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/481038231_1533584647309311_8225992803054299716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeEk48U-ggbJVecRRom9upWrbwPaFVVtxVJvA9oVVW3FUkZoTmosNIlqCws7ikIwxTLzWzuguBE-lGwUTA0wSQhv&_nc_ohc=Q4yuGm3oU_sQ7kNvgEs7U_8&_nc_oc=Adita4blTpdRVqMULeWXTutl0t48b9P7rQLYt-rEkODOUoI8tGrOx5SG_4Od8hl6gBE&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AZxpM4HubQsLPUC0gB46zAp&oh=00_AYA2SZef7jhVsb0ftzLe8IslP8JXBaBWIz--B7mBAGUXXw&oe=67C8468F",
                    resized_image_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/480984651_1901120184038676_3525416492527391090_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeF6cqWvjNfWWNYRnrnXRJ1jlw7pErdLc0qXDukSt0tzSuZIrJlUX9rpiLo4GbrlQt1ELeeMA-4V2-nX9spVJk0z&_nc_ohc=bJrX5LjtSX4Q7kNvgFFZe7h&_nc_oc=AdjlZHoW7ejFM_Q8wH2GVy4LXh2tC6M1p93Y0RcICzZmhA-ptrWxFoWha6sluCwcyDw&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AZxpM4HubQsLPUC0gB46zAp&oh=00_AYBn9-TIlzBweSWTynunrOqusbSXVTnHpq_Q59emD_bRpg&oe=67C82ED3",
                    watermarked_resized_image_url: "",
                    image_crops: [],
                  },
                ],
                is_reshared: false,
                link_description: null,
                link_url: null,
                page_categories: ["Pet Service"],
                page_entity_type: "PERSON_PROFILE",
                page_id: "115531458627129",
                page_is_deleted: false,
                page_is_profile_page: false,
                page_like_count: 3823,
                page_name: "JNB Stables Labradoodles",
                page_profile_picture_url:
                  "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/481168271_2343627956022656_4475842746106730961_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeE5xuNZ8fz9pPPsJ7v7aD7en3tT5Wuv_kWfe1Pla6_-RXLb66aiQh3AfhlYqBQFisu5C4F-3Qy-BGnOVz1LzY-y&_nc_ohc=GDBS2WaBig8Q7kNvgFfDxKG&_nc_oc=AdiQjedPz36I9ZxzwBa-EwmwZ-KsV2YjJQGq3LDBYAJCg4BIeweEFvOL6nb_LS8rhKo&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AZxpM4HubQsLPUC0gB46zAp&oh=00_AYB_cfoKnM_tT8JJQpLyNCTlP0af4KDJlXp6_zJb88ZC_A&oe=67C83A50",
                page_profile_uri: "https://www.facebook.com/JNBStables/",
                root_reshared_post: null,
                title: null,
                videos: [],
                additional_info: null,
                ec_certificates: [],
                extra_images: [],
                extra_links: [],
                extra_texts: [],
                extra_videos: [],
              },
              spend: null,
              start_date: 1740729600,
              state_media_run_label: null,
              targeted_or_reached_countries: [],
              total_active_time: 5519,
            },
          ],
          searchResultsCount: 50001,
          cursor:
            "AQHRYLVDkoMkvGv7yK1rcce-vJmKiKv330R4v3j9KHSOaYvmF1bq1QkotG0rgW8Fkrj-",
        },
        trimmedResponse: {
          searchResults: [
            {
              ad_archive_id: "1378176106734781",
              end_date: 1747638000,
              is_aaa_eligible: false,
              is_active: true,
              page_id: "119749581219299",
              page_name: "Makhumalo",
              political_countries: [],
              reach_estimate: null,
              snapshot: {
                branded_content: null,
                page_id: "119749581219299",
                page_is_deleted: false,
                page_profile_uri: "https://www.facebook.com/61550737114480/",
                root_reshared_post: null,
                byline: null,
                disclaimer_label: null,
                page_name: "Makhumalo",
                page_profile_picture_url:
                  "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/499107970_2293645317822147_4932735414928456888_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=DBNo3Z6ft4AQ7kNvwESjMWN&_nc_oc=AdnZGvglABgVlSJ6UIGIbWgFeUL2LnoBSuMbBvti20zRjb_UUDRzhGxAZ0ip3ye1EQI&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=49D7P4N6a4mVqUW8WdOxag&oh=00_AfMEXcKVf3KYJpFehTTToe8MXUZslTHE9P-xS2eyVCeGKA&oe=685A4903",
                body: {
                  text: "This is my second pair. I only take them off to go to sleep. I put them on first thing in the morning. I am 59 and have neuropathy in my feet, they bring me comfort every day.” -Lydia P.👍👍👍\n❤️These orthopedic shoes provide great comfort and ease foot and knee pain! 😍\n✅ Ideal for wide feet \n✅ comfortable \n✅ they are ideal for everyday life.\nGet Yours Now : https://www.ghemshop.com/products/buckled-square",
                },
                is_reshared: false,
                brazil_tax_id: null,
                caption: "ghemshop.com",
                cards: [],
                cta_text: "Shop now",
                cta_type: "SHOP_NOW",
                country_iso_code: null,
                current_page_name: "Makhumalo",
                display_format: "IMAGE",
                event: null,
                images: [
                  {
                    original_image_url:
                      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/499507599_4016645891948767_4341363175504946673_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=3EJ6TbZR3GEQ7kNvwErfuF4&_nc_oc=AdkQPpJ9OYN_J3P5xTetGSb9FDCFZzfoLSj59Bbp6s-g5HGg-zTECrgOm8mjkJfk5JE&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=49D7P4N6a4mVqUW8WdOxag&oh=00_AfMTuIozb2-VJgGP7NCIx0pG91b48CzMgm_1eT7STgBvew&oe=685A6906",
                    resized_image_url:
                      "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.35426-6/499504336_1222720305887055_488411876974522066_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=DYkDYH-EJrQQ7kNvwF-b_ov&_nc_oc=Adn2l2fDwHaN4h6W-OxxgoYkb0IUAeCpYH5bociuO_oxVL9L0wLg5vqnNfJa0ehQwqY&_nc_zt=14&_nc_ht=scontent-sjc3-1.xx&_nc_gid=49D7P4N6a4mVqUW8WdOxag&oh=00_AfNkQcMpUNFcM7tF1M5tAHmVwABzLx5QKUU8CFo69NP3Rg&oe=685A4518",
                    watermarked_resized_image_url: "",
                    image_crops: [],
                  },
                ],
                link_description:
                  "🔥Best Seller-Last Day Sale 60% OFF🔥 Buckled Square Heel Sandals for Women",
                link_url: "https://www.ghemshop.com/products/buckled-square",
                page_categories: ["Musician"],
                page_entity_type: "PERSON_PROFILE",
                page_is_profile_page: false,
                page_like_count: 7,
                title:
                  "🔥Best Seller-Last Day Sale 60% OFF🔥 Buckled Square Heel Sandals for Women",
                videos: [],
                additional_info: null,
                ec_certificates: [],
                extra_images: [],
                extra_links: [],
                extra_texts: [],
                extra_videos: [],
              },
              total_active_time: null,
              spend: null,
              start_date: 1747638000,
              publisher_platform: [
                "FACEBOOK",
                "INSTAGRAM",
                "AUDIENCE_NETWORK",
                "MESSENGER",
                "THREADS",
              ],
              url: "https://www.facebook.com/ads/library?id=1378176106734781",
              start_date_string: "2025-05-19T07:00:00.000Z",
              end_date_string: "2025-05-19T07:00:00.000Z",
            },
          ],
          searchResultsCount: 50001,
          cursor:
            "AQHRLKHyzb3ZNTn1O3qr6lG7ncS9gfboI0HWGSDETVUnipTSXVY8E4Wb-568JBicOvYS",
        },
        paginationField: "cursor",
        responseFields: [
          {
            path: "collation_id",
            description:
              "This is Facebook's internal ID for related ads in a campaign",
          },
          {
            path: "collation_count",
            description: "The number of ads in the campaign",
          },
          {
            path: "is_active",
            description: "Whether the ad is currently running",
          },
          {
            path: "ad_archive_id",
            description: "The *actual* ad id",
          },
        ],
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Keyword to search for",
            placeholder: "running",
          },
          {
            name: "sort_by",
            type: "select",
            required: false,
            description: "Sort by impressions (high to low), or Most Recent (relevancy_monthly_grouped). Defaults to impressions.",
            placeholder: "total_impressions",
            options: ["total_impressions", "relevancy_monthly_grouped"],
          },
          {
            name: "search_type",
            type: "select",
            required: false,
            description: "If you want to search by exact phrase or not",
            options: ["keyword_unordered", "keyword_exact_phrase"],
            placeholder: "keyword_unordered",
          },
          {
            name: "ad_type",
            type: "select",
            required: false,
            description: "Search for all ads or only political and issue ads",
            placeholder: "all",
            options: ["all", "political_and_issue_ads"],
          },
          {
            name: "country",
            type: "string",
            required: false,
            description:
              "This can only be one country. It has to be the 2 letter code for the country. It defaults to ALL.",
            placeholder: "ALL",
          },
          {
            name: "status",
            type: "select",
            required: false,
            description: "Status of the ad. Defaults to ACTIVE.",
            placeholder: "ACTIVE",
            options: ["ALL", "ACTIVE", "INACTIVE"],
          },
          {
            name: "media_type",
            type: "select",
            required: false,
            description:
              "Media type of the ad. Defaults to ALL. Meme just means the ad has text and an image. No clue why they call it meme.",
            placeholder: "ALL",
            options: [
              "ALL",
              "IMAGE",
              "VIDEO",
              "MEME",
              "IMAGE_AND_MEME",
              "NONE",
            ],
          },
          {
            name: "start_date",
            type: "string",
            required: false,
            description:
              "Impressions start date. Needs to be in YYYY-MM-DD format.",
            placeholder: "2025-01-05",
          },
          {
            name: "end_date",
            type: "string",
            required: false,
            description:
              "Impressions end date. Needs to be in YYYY-MM-DD format.",
            placeholder: "2025-02-16",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "Cursor to paginate through results",
            placeholder:
              "AQHRYLVDkoMkvGv7yK1rcce-vJmKiKv330R4v3j9KHSOaYvmF1bq1QkotG0rgW8Fkrj-",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Company Ads",
        method: "GET",
        paginationField: "cursor",
        description:
          "Get all the ads a company has running. If params become too large, make this a POST request and pass the params in the body.",
        fullDescription:
          "Fetches all ads currently running for a specific company from the Meta Ad Library. Each ad includes ad_archive_id, page_name, is_active, publisher_platform, and a snapshot with body, images, videos, and display_format. Supports filtering by country, media_type, date range, and language with cursor-based pagination.",
        path: "/v1/facebook/adLibrary/company/ads",
        youtubeId: "M_wgqCtznjM",
        codeExample:
          "https://github.com/adrianhorning08/scrape-creators-examples/blob/master/fbAds.js",
        sampleResponse: {
          results: [
            {
              ad_archive_id: "1162496978867592",
              ad_id: null,
              archive_types: [],
              categories: ["UNKNOWN"],
              collation_count: 3,
              collation_id: "596215693307098",
              contains_digital_created_media: false,
              contains_sensitive_content: false,
              currency: "",
              end_date: 1740902400,
              entity_type: "PERSON_PROFILE",
              fev_info: null,
              finserv_ad_data: {
                is_deemed_finserv: false,
                is_limited_delivery: false,
              },
              gated_type: "ELIGIBLE",
              has_user_reported: false,
              hidden_safety_data: false,
              hide_data_status: "NONE",
              impressions_with_index: {
                impressions_text: null,
                impressions_index: -1,
              },
              is_aaa_eligible: false,
              is_active: true,
              is_profile_page: false,
              menu_items: [],
              page_id: "367152833370567",
              page_is_deleted: false,
              page_name: "Instagram",
              political_countries: [],
              publisher_platform: ["INSTAGRAM"],
              reach_estimate: null,
              regional_regulation_data: {
                finserv: {
                  is_deemed_finserv: false,
                  is_limited_delivery: false,
                },
                tw_anti_scam: { is_limited_delivery: false },
              },
              report_count: null,
              snapshot: {
                body: {
                  text: "Bendito el día que seguí a mi compa en Insta que se la pasa viajando a Japón :) \n\n#SigueParaConectarMás",
                },
                branded_content: {
                  current_page_name: "Instagram",
                  page_categories: ["App page"],
                  page_id: "367152833370567",
                  page_is_deleted: false,
                  page_name: "Instagram",
                  page_profile_pic_url:
                    "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/476964481_941793684729034_2496972419565164102_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeGVpQiwQpJ6NjZ_r0QRPnRnsuTPvj6vGu2y5M--Pq8a7SAmDJh_-ME6w2hYzLCRUn3LT7Xk_VjtQJJAtf8gTdOz&_nc_ohc=009FNKlR1YYQ7kNvgE4OQoA&_nc_oc=AdjGoiWjyE6GoQ0YBz1it-zYD9Ya-U6JCX3QtXqhWOdDYBx3smRXKKxnS3G2j5h-deg&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AGD5XOOPTiOPhHk7r8BEiFX&oh=00_AYAXW-aXA8Z7HCplfCUjigGwUf-JGvvU4dNdNhvBtD3SUA&oe=67CAD8E6",
                  page_profile_uri: "https://www.facebook.com/instagram/",
                },
                brazil_tax_id: null,
                byline: null,
                caption: "fb.me",
                cards: [],
                cta_text: "Learn more",
                cta_type: "LEARN_MORE",
                country_iso_code: null,
                current_page_name: "Lalobri",
                disclaimer_label: null,
                display_format: "VIDEO",
                event: null,
                images: [],
                is_reshared: false,
                link_description: null,
                link_url: "http://fb.me/1171219090745394",
                page_categories: ["Digital Creator"],
                page_entity_type: "PERSON_PROFILE",
                page_id: "378515988682204",
                page_is_deleted: false,
                page_is_profile_page: false,
                page_like_count: 841,
                page_name: "Lalobri",
                page_profile_picture_url:
                  "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/476964663_1271062517296994_6188561291427920134_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeHBDvekE5dmCbTMmrY_8dllpDaWWI2JTnykNpZYjYlOfEjNaSaXKVDSg6FoNna0hGRx8p2upelFdTWN2SrOSK_L&_nc_ohc=XXqHzPd3JDgQ7kNvgElJgXd&_nc_oc=Adhe-d488a4U2q_HQFh-j0BuIQ_dlf3bdGYta_SGr4qW9EIAX4VPYU4ZXdVzTv9ivhw&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AGD5XOOPTiOPhHk7r8BEiFX&oh=00_AYDeX8vv11c8n7ix8wy2hYeDFey5jFN4xai6yhTBVyODkg&oe=67CAB11D",
                page_profile_uri: "https://www.facebook.com/61564084618363/",
                root_reshared_post: null,
                title: null,
                videos: [
                  {
                    video_hd_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t42.1790-2/476756415_1627858374528588_2478648308751007555_n.?_nc_cat=103&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeGFMIZfO0nNUHrrpAL4MMzqfhQq5C78fIN-FCrkLvx8gyr-aQF3bhoax7jXSFnJnkAa1X2f8uP1cV86_ByXwtX-&_nc_ohc=5qsq6dJhb7MQ7kNvgEeqawf&_nc_oc=AdjFJYrqg7Ya7UtWHXJTesrcEKaeowoTpYRkxFm9axiczKD5h6mVJMIkrEMEipBTD4k&_nc_zt=28&_nc_ht=scontent.ford4-1.fna&_nc_gid=AGD5XOOPTiOPhHk7r8BEiFX&oh=00_AYC6J64vXFCTqKTPwk1P1-D768j9CaYhyGLRUjTfxfai7g&oe=67CAD6A9",
                    video_preview_image_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t39.35426-6/476771066_477630302068939_2551497936913391127_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeExU4fio3Vf0ebVdjAtnPMzkaPcEcZlo92Ro9wRxmWj3T3ipJseK8TTUisJMBn7XLwZPk51OuZPXETva7XYzJCw&_nc_ohc=1SXHcM6R6xsQ7kNvgF5AeKN&_nc_oc=AdiucCHMlY13qIvmCrBNLJ21VNKQFS0bpDmUDmYxIZDPdYeGDz_N-tLCcHSn2_D5JFk&_nc_zt=14&_nc_ht=scontent.ford4-1.fna&_nc_gid=AGD5XOOPTiOPhHk7r8BEiFX&oh=00_AYBIMeMGBjh3OZlsPD_qkBmLnft-dbpu266dYyaBe4cmIQ&oe=67CAAC25",
                    video_sd_url:
                      "https://scontent.ford4-1.fna.fbcdn.net/v/t42.1790-2/477158098_1295450461504411_8736217373119550609_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=c53f8f&_nc_eui2=AeGUQi87HBCOGRBlXIbI8Gv3a5wRn_rBGxVrnBGf-sEbFQ-PtvJoxaduBFa8IBqQr56VwCqO4zdvDGY8BpRuHIJX&_nc_ohc=A2mk0kLNTI4Q7kNvgEDHJfQ&_nc_oc=Adh5t_fnpyBDEzOprcnzBjAb6O8k1sBtjf2yDF0dXgmRNN1N8c8_ZTLZFHyVA8-K4z0&_nc_zt=28&_nc_ht=scontent.ford4-1.fna&_nc_gid=AGD5XOOPTiOPhHk7r8BEiFX&oh=00_AYCP-i5pWooCrOJpA0fdjwBGUbihKLtlBXf5MnKt3dRMKg&oe=67CAAB26",
                    watermarked_video_hd_url: "",
                    watermarked_video_sd_url: "",
                  },
                ],
                additional_info: null,
                ec_certificates: [],
                extra_images: [],
                extra_links: [],
                extra_texts: [],
                extra_videos: [],
              },
              spend: null,
              start_date: 1740643200,
              state_media_run_label: null,
              targeted_or_reached_countries: [],
              total_active_time: null,
            },
          ],
          cursor:
            "AQHRBUAxNmFlxBVMFL6uTb1ICFsV65O4SqmPbcVZJhiveBpPS1hFHAmL6yCJcF760cXP",
        },
        trimmedResponse: {
          results: [
            {
              ad_archive_id: "1212560900568826",
              end_date: 1750230000,
              is_aaa_eligible: false,
              is_active: true,
              page_id: "15087023444",
              page_name: "Nike",
              political_countries: [],
              reach_estimate: null,
              snapshot: {
                body: {
                  text: "Que el frío no te detenga. Explora la colección de invierno con estilo y actitud Nike. 🧥",
                },
                branded_content: null,
                brazil_tax_id: null,
                byline: null,
                caption: "fb.com",
                cards: [],
                cta_text: "Learn more",
                cta_type: "LEARN_MORE",
                country_iso_code: null,
                current_page_name: "Nike",
                disclaimer_label: null,
                display_format: "VIDEO",
                event: null,
                images: [],
                is_reshared: false,
                link_description: null,
                link_url: "https://fb.com/canvas_doc/569658969305127",
                page_categories: ["Ropa deportiva"],
                page_entity_type: "PERSON_PROFILE",
                page_id: "15087023444",
                page_is_deleted: false,
                page_is_profile_page: false,
                page_like_count: 37497718,
                page_name: "Nike",
                page_profile_picture_url:
                  "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/508742493_1906025190144374_200543536673957484_n.jpg?stp=dst-jpg_s60x60_tt6&_nc_cat=108&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=GUPolKbhQA4Q7kNvwH8Woql&_nc_oc=AdnsaYY9-9p8kkFm594f86VsMEc2Wias8yMQ69ZC2VOv642bjUgMRJNtfihFM4vr62o&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfO73iYbuEFgc4yfmi6pUnjLAd0I1W5ac9hmHZqjq2KP3g&oe=685A4C47",
                page_profile_uri: "https://facebook.com/nike",
                root_reshared_post: null,
                title: "Look de invierno activado",
                videos: [
                  {
                    video_hd_url:
                      "https://video-ord5-2.xx.fbcdn.net/v/t42.1790-2/508345466_4710910465802253_4502560017294477681_n.?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=_z9ndrNSqU4Q7kNvwErNTOY&_nc_oc=AdlSb3GVLWTjl3iI6uvIsrEya2ZR-1ex8t8yXOr3e9u13u3xboXylCxrkWzfLsvDQcU&_nc_zt=28&_nc_ht=video-ord5-2.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfNNOrS6GBT-R_RV15FpphRv-mUwyGoqJClQpP-LCOcqfQ&oe=685A6586",
                    video_preview_image_url:
                      "https://scontent-ord5-3.xx.fbcdn.net/v/t39.35426-6/508472131_2706791729511119_7655112167724018421_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=-GGzon31Wl4Q7kNvwHpWdG2&_nc_oc=AdnRHcWzvX05mBu9KrhDjKgOuCYLKjNg_hm8eKY2dNaFg-4tpYznNPJvbLl7CAnB-2A&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfMijP4k74e949uFas1PkfzzwiYWH_G49J4W-EYJa31VEQ&oe=685A3DDC",
                    video_sd_url:
                      "https://video-ord5-3.xx.fbcdn.net/v/t42.1790-2/503830433_1272051757688626_4613408767025280545_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=zKD6ziOmKVgQ7kNvwFGCx5N&_nc_oc=AdkdTw235NDuAczGAvCTLl5TnQ8rUcWjy1QBEj8CC4Id8hVQPMexxPtU3froQOYk1OE&_nc_zt=28&_nc_ht=video-ord5-3.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfNqJDVyyTMYnf7xs5te87vB3A0v3IGy41tdxT1ZvrAAlQ&oe=685A4FC3",
                    watermarked_video_hd_url: "",
                    watermarked_video_sd_url: "",
                  },
                ],
                additional_info: null,
                ec_certificates: [],
                extra_images: [],
                extra_links: [
                  "https://www.nike.com.pe/productos/ropa/casacas-y-chalecos_conjunto_pantalones_poleras?utm_source=facebook&utm_medium=paid&utm_campaign=junio_invierno_transacciones&utm_content=intereses2_invierno_collection2",
                ],
                extra_texts: [],
                extra_videos: [
                  {
                    video_hd_handle:
                      "https://video-ord5-3.xx.fbcdn.net/v/t42.1790-2/508262243_4710910432468923_4352661581573318069_n.?_nc_cat=107&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=bQXAtOCS-PMQ7kNvwEbVbC_&_nc_oc=AdnZ87pJ-oeIb5L7fizjaxNmRp0qkvq2SP_ADcnPFzMPca1L8gvUkpmF_c5vrAYmetw&_nc_zt=28&_nc_ht=video-ord5-3.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfM8Q_xyap9vnoEn5T7FqI9yfO1ySPPKyJVGXPmaim5tCw&oe=685A58CD",
                    video_sd_handle:
                      "https://video-ord5-3.xx.fbcdn.net/v/t42.1790-2/503830433_1272051757688626_4613408767025280545_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=zKD6ziOmKVgQ7kNvwFGCx5N&_nc_oc=AdkdTw235NDuAczGAvCTLl5TnQ8rUcWjy1QBEj8CC4Id8hVQPMexxPtU3froQOYk1OE&_nc_zt=28&_nc_ht=video-ord5-3.xx&_nc_gid=mmzWe0H6RNHM_tNirxejrQ&oh=00_AfNqJDVyyTMYnf7xs5te87vB3A0v3IGy41tdxT1ZvrAAlQ&oe=685A4FC3",
                    watermarked_video_hd_url: null,
                    watermarked_video_sd_url: null,
                  },
                ],
              },
              total_active_time: null,
              spend: null,
              start_date: 1750143600,
              publisher_platform: [
                "FACEBOOK",
                "INSTAGRAM",
                "AUDIENCE_NETWORK",
                "MESSENGER",
                "THREADS",
              ],
              url: "https://www.facebook.com/ads/library?id=1212560900568826",
              start_date_string: "2025-06-17T07:00:00.000Z",
              end_date_string: "2025-06-18T07:00:00.000Z",
            },
          ],
          cursor:
            "AQHR2LpCDWOZyAGp-ZKr8rUsapAXh8rWjYuNxVvuU7L0kte18hxkxnaXM3e5jEZNgdcU",
        },
        responseFields: [
          {
            path: "collation_id",
            description:
              "This is Facebook's internal ID for related ads in a campaign",
          },
          {
            path: "collation_count",
            description: "The number of ads in the campaign",
          },
          {
            path: "is_active",
            description: "Whether the ad is currently running",
          },
          {
            path: "ad_archive_id",
            description: "The *actual* ad id",
          },
        ],
        params: [
          {
            name: "pageId",
            type: "string",
            required: false,
            description:
              "The companies ad library page id. You can get this with my Search For Companies Endpoint. Can either use this or companyName",
            placeholder: "367152833370567",
          },
          {
            name: "companyName",
            type: "string",
            required: false,
            description:
              "The name of the company. Can either use this or pageId",
            placeholder: "Lululemon",
          },
          {
            name: "country",
            type: "string",
            required: false,
            description:
              "This can only be one country. It has to be the 2 letter code for the country. It defaults to ALL.",
            placeholder: "ALL",
          },
          {
            name: "status",
            type: "select",
            required: false,
            description: "Status of the ad. Defaults to ACTIVE.",
            placeholder: "ACTIVE",
            options: ["ALL", "ACTIVE", "INACTIVE"],
          },
          {
            name: "media_type",
            type: "select",
            required: false,
            description:
              "Media type of the ad. Defaults to ALL. Meme refers to ads with image and text. Not sure why they call it meme.",
            placeholder: "ALL",
            options: [
              "ALL",
              "IMAGE",
              "VIDEO",
              "MEME",
              "IMAGE_AND_MEME",
              "NONE",
            ],
          },
          {
            name: "language",
            type: "string",
            required: false,
            description:
              "Language to filter ads on. Needs to be 2 letter language code, ie EN, ES, FR, etc",
            placeholder: "EN",
          },
          {
            name: "sort_by",
            type: "select",
            required: false,
            description: "Sort by impressions (high to low), or Most Recent (relevancy_monthly_grouped). Defaults to impressions.",
            placeholder: "total_impressions",
            options: ["total_impressions", "relevancy_monthly_grouped"],
          },
          {
            name: "start_date",
            type: "string",
            required: false,
            description: "Start date to search for. Format: YYYY-MM-DD",
            placeholder: "2025-01-01",
          },
          {
            name: "end_date",
            type: "string",
            required: false,
            description: "End date to search for. Format: YYYY-MM-DD",
            placeholder: "2025-12-31",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "Cursor to paginate through results",
            placeholder:
              "AQHRBUAxNmFlxBVMFL6uTb1ICFsV65O4SqmPbcVZJhiveBpPS1hFHAmL6yCJcF760cXP",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Search for Companies",
        method: "GET",
        description:
          "Search for companies by name and get their ad library page id",
        fullDescription:
          "Searches for companies by name in the Meta Ad Library and returns their page IDs for use with other ad library endpoints. Each result includes page_id, name, category, likes, verification status, and Instagram details like ig_username and ig_followers.",
        path: "/v1/facebook/adLibrary/search/companies",
        youtubeId: "M_wgqCtznjM",
        codeExample:
          "https://github.com/adrianhorning08/scrape-creators-examples/blob/master/fbAds.js",
        sampleResponse: {
          searchResults: [
            {
              page_id: "51212153078",
              category: "Product/service",
              image_uri:
                "https://scontent.ford4-1.fna.fbcdn.net/v/t39.30808-1/387181570_863325755161415_3589774989337788111_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=418b77&_nc_ohc=SzL6LoxpjrMQ7kNvgF5Uyy3&_nc_oc=AdgIflwSC-gA-77yFJHPKOC1dEGUI7YqvKYkmll9n5n8BcvLzRKToufpLG-068BnjE4&_nc_zt=24&_nc_ht=scontent.ford4-1.fna&_nc_gid=AYuU655BQ_HFcmz-fz9agWZ&oh=00_AYDD0ELO2MQikn7TBtxiTe7n64HX6iKiI5ofiI86BQ_jYw&oe=67CAC605",
              likes: 41136495,
              verification: "BLUE_VERIFIED",
              name: "Nike Football",
              country: null,
              entity_type: "PERSON_PROFILE",
              ig_username: "nikefootball",
              ig_followers: 46451228,
              ig_verification: true,
              page_alias: "nikefootball",
              page_is_deleted: false,
            },
            {
              page_id: "15087023444",
              category: "Sportswear Store",
              image_uri:
                "https://scontent.ford4-1.fna.fbcdn.net/v/t39.30808-1/284964043_10159903868513445_7696353984967674128_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=418b77&_nc_ohc=l1RJ-Y9Bh4MQ7kNvgG1Fqgh&_nc_oc=AdhM6BdAoFG_uC3uI-N3cL2cb2TSEcDwhCVDFMMTMSrDke_5A363AoBbqLNdrEGfaCw&_nc_zt=24&_nc_ht=scontent.ford4-1.fna&_nc_gid=AYuU655BQ_HFcmz-fz9agWZ&oh=00_AYB89Wf6WuPQGTnLFNWzkJT9hGFRKvD4qMbVlM6NulSUrQ&oe=67CABE30",
              likes: 39558683,
              verification: "BLUE_VERIFIED",
              name: "Nike",
              country: null,
              entity_type: "PERSON_PROFILE",
              ig_username: "nike",
              ig_followers: 302060936,
              ig_verification: true,
              page_alias: "nike",
              page_is_deleted: false,
            },
          ],
        },
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Keyword to search for",
            placeholder: "nike",
          },
        ],
      },
    ],
  },
  {
    id: "googleAdLibrary",
    name: "Google Ad Library",
    description:
      "Scrape the Google Ad Transparency Library. *This only gets the public ads. Some ads you need to log in for and sadly we can't get those. Also, since there are so many variations, the return types might not all be 100% the same. Email me for suggestions. Also this endpoint is pretty new, if you find any errors or irregularities, please email me: support@scrapecreators.com",
    endpoints: [
      {
        name: "Company Ads",
        method: "GET",
        description:
          "Get the ads for a company. *This only gets the public ads. Some ads you need to log in for and sadly we can't get those. Starting November 10th 2025, you will need to add get_ad_details=true to get the ad details (and will cost 25 credits). If you don't add that, only the advertiserId and creativeId from each ad will be returned (and will continue to cost just 1 credit)",
        fullDescription:
          "Fetches public ads for a company from the Google Ad Transparency Library by domain or advertiser_id. Each ad includes advertiserId, creativeId, format, adUrl, advertiserName, domain, firstShown, and lastShown. Costs 25 credits per request when get_ad_details=true; without it, only advertiserId and creativeId are returned at 1 credit.",
        path: "/v1/google/company/ads",
        paginationField: "cursor",
        params: [
          {
            name: "domain",
            type: "string",
            required: false,
            description: "The domain of the company",
            placeholder: "lululemon.com",
          },
          {
            name: "advertiser_id",
            type: "string",
            required: false,
            description: "The advertiser id of the company",
            placeholder: "AR01614014350098432001",
          },
          {
            name: "topic",
            type: "select",
            required: false,
            description:
              "The topic to search for. If you search for 'political', you will also need to pass a 'region', like 'US' or 'AU'",
            options: ["all", "political"],
            placeholder: "all",
          },
          {
            name: "region",
            type: "string",
            required: false,
            description: "The region to search for. Defaults to anywhere",
            placeholder: "US",
          },
          {
            name: "start_date",
            type: "string",
            required: false,
            description: "Start date to search for. Format: YYYY-MM-DD",
            placeholder: "2025-08-01",
          },
          {
            name: "end_date",
            type: "string",
            required: false,
            description: "End date to search for. Format: YYYY-MM-DD",
            placeholder: "2025-08-11",
          },
          {
            name: "get_ad_details",
            type: "string",
            required: false,
            description:
              "Set to true to get the ad details. Will cost 25 credits.",
            placeholder: "false",
            credits: 25,
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "Cursor to paginate through results",
            placeholder:
              "CgoAP7znOo9RPjf%2FEhD5utgx8m75NrTTbU0AAAAAGgn8%2BJyW%2BJQK40A%3D",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 9926561,
          ads: [
            {
              advertiserId: "AR09628680369637163009",
              creativeId: "CR15036700036807262209",
              format: "text",
              adUrl:
                "https://adstransparency.google.com/advertiser/AR09628680369637163009/creative/CR15036700036807262209",
              advertiserName: "Foreplay Ventures Inc",
              domain: "foreplay.co",
              imageUrl: null,
              firstShown: "2024-08-02T12:33:35.000Z",
              lastShown: "2025-11-10T19:31:13.000Z",
            },
            {
              advertiserId: "AR09628680369637163009",
              creativeId: "CR04077090219323555841",
              format: "video",
              adUrl:
                "https://adstransparency.google.com/advertiser/AR09628680369637163009/creative/CR04077090219323555841",
              advertiserName: "Foreplay Ventures Inc",
              domain: "foreplay.co",
              imageUrl: null,
              firstShown: "2024-06-22T06:45:18.000Z",
              lastShown: "2025-11-10T17:56:32.000Z",
            },
            {
              advertiserId: "AR09628680369637163009",
              creativeId: "CR09593715710895325185",
              format: "video",
              adUrl:
                "https://adstransparency.google.com/advertiser/AR09628680369637163009/creative/CR09593715710895325185",
              advertiserName: "Foreplay Ventures Inc",
              domain: "foreplay.co",
              imageUrl: null,
              firstShown: "2025-08-27T14:17:12.000Z",
              lastShown: "2025-11-10T17:17:46.000Z",
            },
            {
              advertiserId: "AR09628680369637163009",
              creativeId: "CR10027703979854528513",
              format: "text",
              adUrl:
                "https://adstransparency.google.com/advertiser/AR09628680369637163009/creative/CR10027703979854528513",
              advertiserName: "Foreplay Ventures Inc",
              domain: "foreplay.co",
              imageUrl: null,
              firstShown: "2025-01-12T03:38:24.000Z",
              lastShown: "2025-11-10T16:36:38.000Z",
            },
            {
              advertiserId: "AR09628680369637163009",
              creativeId: "CR15742167484830056449",
              format: "image",
              adUrl:
                "https://adstransparency.google.com/advertiser/AR09628680369637163009/creative/CR15742167484830056449",
              advertiserName: "Foreplay Ventures Inc",
              domain: "foreplay.co",
              imageUrl: null,
              firstShown: "2025-08-09T14:24:28.000Z",
              lastShown: "2025-11-10T06:47:43.000Z",
            },
          ],
          cursor:
            "CgoAP7zm82Y5sMRjEhBwPifBwIMxRttsqvUAAAAAGgn8%2BIdd%2BDICr8g%3D",
        },
      },
      {
        name: "Ad Details",
        method: "GET",
        description:
          "Get the details for an ad. I'm using an OCR to get the text from the ad, so it might not be 100% accurate. If you find any errors or irregularities, please email me: support@scrapecreators.com",
        fullDescription:
          "Retrieves detailed information about a specific Google ad including advertiserId, creativeId, format, firstShown, lastShown, and overallImpressions. Returns creativeRegions, regionStats with per-region impression data, and variations with destinationUrl, headline, description, and imageUrl. Text extraction uses OCR, so accuracy may vary.",
        path: "/v1/google/ad",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "The url of the ad",
            placeholder:
              "https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217",
          },
        ],
        sampleResponse: {
          success: true,
          advertiserId: "AR01614014350098432001",
          creativeId: "CR07443539616616939521",
          firstShown: null,
          lastShown: "2025-06-18T18:09:00.000Z",
          format: "text",
          overallImpressions: {
            min: null,
            max: null,
          },
          creativeRegions: [
            {
              regionCode: "US",
              regionName: "United States",
            },
          ],
          regionStats: [
            {
              regionCode: "US",
              regionName: "United States",
              firstShown: null,
              lastShown: "2025-06-18T05:00:00.000Z",
              impressions: {},
              platformImpressions: [],
            },
          ],
          variations: [
            {
              destinationUrl: "shop.lululemon.com/gifts-for-all",
              headline: "lululemonⓇ Official Site - Best Birthday Gifts",
              description:
                "Find The Perfect Gifts At lululemon . We Have You Covered . Shop Online For Your Gifts . Birthday Gifts For Everyone ...",
              allText:
                "Sponsored Ω lululemon shop.lululemon.com/gifts-for-all lululemonⓇ Official Site - Best Birthday Gifts Find The Perfect Gifts At lululemon . We Have You Covered . Shop Online For Your Gifts . Birthday Gifts For Everyone ...",
              imageUrl:
                "https://tpc.googlesyndication.com/archive/simgad/2201045439314643090",
            },
            {
              destinationUrl: "shop.lululemon.com",
              headline: "Work Pants, But Stretchy",
              description:
                "Move In Lightweight, Comfortable Work Pants That Take Your Day In New Directions.",
            },
          ],
        },
      },
      {
        name: "Advertiser Search",
        method: "GET",
        description:
          "Search the Google Ad Transparency Library for advertisers to get their advertiser id",
        fullDescription:
          "Searches the Google Ad Transparency Library for advertisers by name. Returns a list of matching advertisers with their name, advertiser_id, and region, plus a list of associated website domains. Use the returned advertiser_id to look up a company's ads.",
        path: "/v1/google/adLibrary/advertisers/search",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "The query to search for",
            placeholder: "nike",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 9994695,
          advertisers: [
            {
              name: "Nike Lee",
              advertiser_id: "AR18100938063227125761",
              region: "US",
            },
            {
              name: "NIKE SRL",
              advertiser_id: "AR17365672681860497409",
              region: "IT",
            },
            {
              name: "Nike Kola",
              advertiser_id: "AR05316777725531258881",
              region: "US",
            },
            {
              name: "Nike, Inc.",
              advertiser_id: "AR16735076323512287233",
              region: "US",
            },
            {
              name: "Nike Klara",
              advertiser_id: "AR17567291692413878273",
              region: "US",
            },
            {
              name: "NIKE, Inc.",
              advertiser_id: "AR00269480696421023745",
              region: "US",
            },
            {
              name: "Nikel Kola",
              advertiser_id: "AR04767743191271079937",
              region: "US",
            },
            {
              name: "Nikeson AB",
              advertiser_id: "AR00386048032979812353",
              region: "SE",
            },
            {
              name: "VIXEN NIKE",
              advertiser_id: "AR10253711652960600065",
              region: "TN",
            },
            {
              name: "VIXEN NIKE",
              advertiser_id: "AR04171037406243323905",
              region: "TN",
            },
          ],
          websites: [
            {
              domain: "nike.ae",
            },
            {
              domain: "nike.cl",
            },
            {
              domain: "nike.sa",
            },
            {
              domain: "nike.com",
            },
            {
              domain: "kannike.eu",
            },
            {
              domain: "uniker.com",
            },
            {
              domain: "nike.com.ar",
            },
            {
              domain: "nike.com.br",
            },
            {
              domain: "nike.com.kw",
            },
            {
              domain: "nike.com.co",
            },
          ],
        },
      },
    ],
  },
  {
    id: "linkedinAdLibrary",
    name: "LinkedIn Ad Library",
    description: "Search the LinkedIn Ad Library",
    paginationField: "paginationToken",
    endpoints: [
      {
        name: "Search Ads",
        method: "GET",
        description: "Search the LinkedIn Ad Library",
        fullDescription:
          "Searches the LinkedIn Ad Library by company name, keyword, or companyId with optional country and date filters. Each ad includes id, description, headline, adType, advertiser, targeting details, image or video URLs, totalImpressions, and impressionsByCountry. Supports pagination via paginationToken.",
        path: "/v1/linkedin/ads/search",
        sampleResponse: {
          success: true,
          ads: [
            {
              id: "823975056",
              description:
                "The countdown has begun – grab your discounted tickets now for #FabConEurope in Vienna!\nJoin us for an unforgettable experience filled with deep learning, expert insights, and top-tier networking opportunities.\n\nRegister today and be part of the future of innovation: http://msft.it/6043sMFt3 \n\n#MicrosoftFabric",
              headline: null,
              poster: "Microsoft",
              posterTitle: "Promoted",
              promotedBy: null,
              targeting: {
                language: "Targeting includes English",
                location: "Targeting includes Netherlands",
                company: "Exclusion targeting applied",
              },
              image:
                "https://media.licdn.com/dms/image/v2/D5610AQH8f223ANJdoQ/image-shrink_1280/B56ZiDa0MFHkAQ-/0/1754551502346?e=2147483647&v=beta&t=ZuZ0zUs1KInS8ysVO7FxzmlzxHP9B_JX2b6kdMU8GT4",
              video: null,
              carouselImages: [],
              adType: "Single Image Ad",
              advertiser: "Microsoft",
              advertiserLinkedinPage: "https://www.linkedin.com/company/1035",
              cta: null,
              destinationUrl:
                "http://msft.it/6043sMFt3?trk=ad_library_ad_preview_headline_content",
              adDuration: "Ran from Aug 10, 2025 to Aug 10, 2025",
              startDate: "2025-08-10T05:00:00.000Z",
              endDate: "2025-08-10T05:00:00.000Z",
              totalImpressions: "< 1k",
              impressionsByCountry: [],
            },
            {
              id: "756473943",
              description:
                "Tailor your language with Microsoft 365 Copilot Chat so your message connects with any audience.",
              headline:
                "Speak to your audience with Microsoft 365 Copilot Chat.",
              poster: "Microsoft 365",
              posterTitle: "Promoted",
              promotedBy: null,
              targeting: {},
              image: null,
              video:
                "https://dms.licdn.com/playlist/vid/v2/D4D10AQFRXuUWwLFasQ/mp4-720p-30fp-crf28/B4DZiFJPraHYCQ-/0/1754580468019/SRTs_Copilot_Linkedin-Theme2-15s_USA_1080x1080_VIP_SubTheme2E_COMM-EN_NA_Standard_SQV_TCN_NA_1mp4?e=2147483647&v=beta&t=O5kDsmtaT10Gp-tWI_-_gDmBXZyN02Qd2BJR_j5f5tY",
              carouselImages: [],
              adType: "Video Ad",
              advertiser: "Microsoft 365",
              advertiserLinkedinPage:
                "https://www.linkedin.com/company/3509299",
              cta: "Learn more",
              destinationUrl:
                "https://ad.doubleclick.net/ddm/trackclk/N572608.271051LINKEDIN/B33660529.424033181;dc_trk_aid=616963828;dc_trk_cid=237340786;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$%7BGDPR%7D;gdpr_consent=$%7BGDPR_CONSENT_755%7D;gpp=$%7BGPP_STRING_755%7D;gpp_sid=$%7BGPP_SID%7D;ltd=;dc_tdv=1?trk=ad_library_ad_preview_headline_content",
              adDuration: "",
              startDate: null,
              endDate: null,
              totalImpressions: null,
              impressionsByCountry: [],
            },
          ],
          paginationToken: "756412693-1754569518292",
          isLastPage: false,
        },
        params: [
          {
            name: "company",
            type: "string",
            required: false,
            description:
              "The company name to search for. 'Microsoft' for example",
            placeholder: "microsoft",
          },
          {
            name: "keyword",
            type: "string",
            required: false,
            description: "The keyword to search for",
            placeholder: "scraping",
          },
          {
            name: "companyId",
            type: "string",
            required: false,
            description: "The company id to search for",
            placeholder: "157238",
          },
          {
            name: "countries",
            type: "string",
            required: false,
            description: "Comma separated list of countries. Example: US,CA,MX",
            placeholder: "US,CA,MX",
          },
          {
            name: "startDate",
            type: "string",
            required: false,
            description: "Start date to search for. Format: YYYY-MM-DD",
            placeholder: "2024-01-01",
          },
          {
            name: "endDate",
            type: "string",
            required: false,
            description: "End date to search for. Format: YYYY-MM-DD",
            placeholder: "2024-01-10",
          },
          {
            name: "paginationToken",
            type: "string",
            required: false,
            description: "Pagination token to paginate through results",
            placeholder: "640547184-1743616612000",
          },
        ],
      },
      {
        name: "Ad Details",
        method: "GET",
        description: "Get the details for an ad",
        fullDescription:
          "Retrieves detailed information about a specific LinkedIn ad by URL. Returns id, description, headline, adType, advertiser, and targeting with language, location, and audience criteria. Also includes totalImpressions, impressionsByCountry, adDuration, startDate, and endDate.",
        path: "/v1/linkedin/ad",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "The url of the ad",
            placeholder: "https://www.linkedin.com/ad-library/detail/666281156",
          },
        ],
        sampleResponse: {
          success: true,
          id: "664291126",
          description:
            "Learn to start building an AI strategy that helps your small business automate routine tasks and keep teams focused on high-value activities.",
          headline: "Read “The Guide to AI for Small Businesses”",
          poster: "Salesforce",
          posterTitle: "Promoted",
          promotedBy: null,
          targeting: {
            language: "Targeting includes English",
            location: "Targeting includes Portugal",
            audience: "Inclusion and exclusion targeting applied",
          },
          image:
            "https://media.licdn.com/dms/image/v2/D5610AQHEjQAydHWLaw/image-shrink_1280/image-shrink_1280/0/1736950502005/Ai-guide-for-smbs?e=2147483647&v=beta&t=dC-iPz1fr8piN6YutdDgKIOmRPJvFaj4Hr0g_raHZ70",
          adType: "Single Image Ad",
          advertiser: "Salesforce",
          advertiserLinkedinPage: "https://www.linkedin.com/company/3185",
          cta: null,
          destinationUrl:
            "https://www.salesforce.com/eu/form/small-business/ai-guide-for-smbs/?d=701ed00000CX0GfAAL&nc=701ed000007UYTMAA4&utm_source=linkedin&utm_medium=paid_social&utm_campaign=emea_pt_einsteinai_allindustries&utm_content=enterprisesmallbusiness_pp-dm-all-crx-multi-tal-linkedin-prospect-tals-esmb_701ed00000CX0GfAAL_english_ai-guide-for-smbs&trk=ad_library_ad_preview_headline_content",
          adDuration: "Ran from Apr 1, 2025 to Apr 3, 2025",
          startDate: "2025-04-01T00:00:00.000Z",
          endDate: "2025-04-03T00:00:00.000Z",
          totalImpressions: "5k-10k",
          impressionsByCountry: [
            {
              country: "Portugal",
              impressions: "100%",
            },
            {
              country: "Angola",
              impressions: "less than 1%",
            },
            {
              country: "Latvia",
              impressions: "less than 1%",
            },
            {
              country: "Ukraine",
              impressions: "less than 1%",
            },
          ],
        },
      },
    ],
  },
  {
    id: "twitter",
    name: "Twitter",
    description: "Get Twitter profiles, tweets, followers and more",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description:
          "Get Twitter profile information including stats and metadata",
        fullDescription:
          "Retrieves a Twitter user's profile by handle, including account metadata and statistics. Returns name, screen_name, description, followers_count, friends_count, statuses_count, favourites_count, location, profile_image_url_https, and is_blue_verified. Also includes verification_info, tipjar_settings, highlights_info, and creator_subscriptions_count.",
        path: "/v1/twitter/profile",
        sampleResponse: {
          __typename: "User",
          id: "VXNlcjoyMjE4MzgzNDk=",
          rest_id: "221838349",
          affiliates_highlighted_label: {
            label: {
              url: {
                url: "https://twitter.com/bloomtech",
                urlType: "DeepLink",
              },
              badge: {
                url: "https://pbs.twimg.com/profile_images/1542996246477938688/PR4UFtE6_bigger.jpg",
              },
              description: "Bloom Institute of Technology",
              userLabelType: "BusinessLabel",
              userLabelDisplayType: "Badge",
            },
          },
          is_blue_verified: true,
          profile_image_shape: "Circle",
          legacy: {
            created_at: "Wed Dec 01 19:13:23 +0000 2010",
            default_profile: false,
            default_profile_image: false,
            description:
              "CEO https://t.co/m6TigM5azr & https://t.co/NuPTghEZ1I (part of @bloomtech). We help teams maximize productivity using AI. Will tweet as I wish and suffer the consequences.",
            entities: {
              description: {
                urls: [
                  {
                    display_url: "GauntletAI.com",
                    expanded_url: "http://GauntletAI.com",
                    url: "https://t.co/m6TigM5azr",
                    indices: [4, 27],
                  },
                  {
                    display_url: "Aitra.com",
                    expanded_url: "http://Aitra.com",
                    url: "https://t.co/NuPTghEZ1I",
                    indices: [30, 53],
                  },
                ],
              },
              url: {
                urls: [
                  {
                    display_url: "gauntletai.com",
                    expanded_url: "http://gauntletai.com",
                    url: "https://t.co/nCe0AdT8D4",
                    indices: [0, 23],
                  },
                ],
              },
            },
            fast_followers_count: 0,
            favourites_count: 80812,
            followers_count: 377608,
            friends_count: 1051,
            has_custom_timelines: true,
            is_translator: false,
            listed_count: 3959,
            location: "Austin, TX",
            media_count: 3843,
            name: "Austen Allred",
            normal_followers_count: 377608,
            pinned_tweet_ids_str: ["1882816395400073367"],
            possibly_sensitive: false,
            profile_banner_url:
              "https://pbs.twimg.com/profile_banners/221838349/1622098809",
            profile_image_url_https:
              "https://pbs.twimg.com/profile_images/1608281295918096385/D2kh-M28_normal.jpg",
            profile_interstitial_type: "",
            screen_name: "Austen",
            statuses_count: 46114,
            translator_type: "regular",
            url: "https://t.co/nCe0AdT8D4",
            verified: false,
            withheld_in_countries: [],
          },
          tipjar_settings: {
            is_enabled: false,
            bandcamp_handle: "",
            bitcoin_handle: "",
            cash_app_handle: "",
            ethereum_handle: "",
            gofundme_handle: "",
            patreon_handle: "",
            pay_pal_handle: "",
            venmo_handle: "",
          },
          legacy_extended_profile: {},
          is_profile_translatable: false,
          has_hidden_subscriptions_on_profile: false,
          verification_info: {
            is_identity_verified: false,
            reason: {
              description: {
                text: "This account is verified because it's an affiliate of @bloomtech on X. Learn more",
                entities: [
                  {
                    from_index: 54,
                    to_index: 64,
                    ref: {
                      url: "https://twitter.com/bloomtech",
                      url_type: "ExternalUrl",
                    },
                  },
                  {
                    from_index: 71,
                    to_index: 81,
                    ref: {
                      url: "https://help.twitter.com/en/rules-and-policies/profile-labels",
                      url_type: "ExternalUrl",
                    },
                  },
                ],
              },
              verified_since_msec: "1473330227634",
            },
          },
          highlights_info: {
            can_highlight_tweets: true,
            highlighted_tweets: "482",
          },
          user_seed_tweet_count: 0,
          business_account: {},
          creator_subscriptions_count: 3,
        },
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Twitter handle",
            placeholder: "Austen",
          },
        ],
      },
      {
        name: "User Tweets",
        method: "GET",
        description:
          "Get tweets from a user's profile. *These aren't the users latest tweets. Sadly, Twitter publicly only returns 100 of the users most popular tweets.",
        fullDescription:
          "Fetches tweets from a Twitter user's profile by handle. Note: Twitter publicly returns only ~100 of the user's most popular tweets, not chronological or latest. Each tweet includes rest_id, full_text, views count, favorite_count, retweet_count, reply_count, bookmark_count, quote_count, created_at, media entities, and url. Supports a trim parameter for a lighter response.",
        path: "/v1/twitter/user-tweets",
        sampleResponse: {
          tweets: [
            {
              __typename: "Tweet",
              rest_id: "1828402665845322123",
              core: {
                user_results: {
                  result: {
                    __typename: "User",
                    id: "VXNlcjo0NTIwMjQxMjA5",
                    rest_id: "4520241209",
                    affiliates_highlighted_label: {},
                    is_blue_verified: true,
                    profile_image_shape: "Circle",
                    legacy: {
                      created_at: "Fri Dec 18 02:48:59 +0000 2015",
                      default_profile: false,
                      default_profile_image: false,
                      description:
                        "Social Media Scraping API's: https://t.co/eSvJcfOZwF\n\nWeb Scraping Course: https://t.co/aTGlgWnvD7",
                      entities: {
                        description: {
                          urls: [
                            {
                              display_url: "scrapecreators.com",
                              expanded_url: "https://scrapecreators.com/",
                              url: "https://t.co/eSvJcfOZwF",
                              indices: [29, 52],
                            },
                            {
                              display_url: "theultimatewebscrapingcourse.com",
                              expanded_url:
                                "https://theultimatewebscrapingcourse.com/",
                              url: "https://t.co/aTGlgWnvD7",
                              indices: [75, 98],
                            },
                          ],
                        },
                        url: {
                          urls: [
                            {
                              display_url: "thewebscrapingguy.com",
                              expanded_url: "https://thewebscrapingguy.com/",
                              url: "https://t.co/gNUelkV9LA",
                              indices: [0, 23],
                            },
                          ],
                        },
                      },
                      fast_followers_count: 0,
                      favourites_count: 87301,
                      followers_count: 17297,
                      friends_count: 1139,
                      has_custom_timelines: true,
                      is_translator: false,
                      listed_count: 162,
                      location: "Austin, TX",
                      media_count: 1152,
                      name: "Adrian | The Web Scraping Guy",
                      normal_followers_count: 17297,
                      pinned_tweet_ids_str: ["1628769691547074562"],
                      possibly_sensitive: false,
                      profile_banner_url:
                        "https://pbs.twimg.com/profile_banners/4520241209/1710267319",
                      profile_image_url_https:
                        "https://pbs.twimg.com/profile_images/1413647704161275904/1tTdl4v9_normal.jpg",
                      profile_interstitial_type: "",
                      screen_name: "adrian_horning_",
                      statuses_count: 17751,
                      translator_type: "none",
                      url: "https://t.co/gNUelkV9LA",
                      verified: false,
                      withheld_in_countries: [],
                    },
                    professional: {
                      rest_id: "1554172330263339015",
                      professional_type: "Business",
                      category: [],
                    },
                    tipjar_settings: {
                      is_enabled: false,
                      bandcamp_handle: "",
                      bitcoin_handle: "",
                      cash_app_handle: "",
                      ethereum_handle: "",
                      gofundme_handle: "",
                      patreon_handle: "",
                      pay_pal_handle: "",
                      venmo_handle: "",
                    },
                  },
                },
              },
              unmention_data: {},
              edit_control: {
                edit_tweet_ids: ["1828402665845322123"],
                editable_until_msecs: "1724763740000",
                is_edit_eligible: false,
                edits_remaining: "5",
              },
              is_translatable: false,
              views: { count: "493762", state: "EnabledWithCount" },
              source:
                '<a href="https://tweethunter.io" rel="nofollow">Tweet Hunter Pro</a>',
              legacy: {
                bookmark_count: 1030,
                bookmarked: false,
                created_at: "Tue Aug 27 12:02:20 +0000 2024",
                conversation_id_str: "1828402665845322123",
                display_text_range: [0, 216],
                entities: {
                  hashtags: [],
                  media: [
                    {
                      display_url: "pic.x.com/fh8xBzkrKI",
                      expanded_url:
                        "https://x.com/adrian_horning_/status/1828402665845322123/photo/1",
                      id_str: "1828402662682841089",
                      indices: [217, 240],
                      media_key: "3_1828402662682841089",
                      media_url_https:
                        "https://pbs.twimg.com/media/GV_KiM-W0AEa31c.png",
                      type: "photo",
                      url: "https://t.co/fh8xBzkrKI",
                      ext_media_availability: { status: "Available" },
                      features: {
                        large: { faces: [] },
                        medium: { faces: [] },
                        small: { faces: [] },
                        orig: { faces: [] },
                      },
                      sizes: {
                        large: { h: 117, w: 182, resize: "fit" },
                        medium: { h: 117, w: 182, resize: "fit" },
                        small: { h: 117, w: 182, resize: "fit" },
                        thumb: { h: 117, w: 117, resize: "crop" },
                      },
                      original_info: {
                        height: 117,
                        width: 182,
                        focus_rects: [
                          { x: 0, y: 0, w: 182, h: 102 },
                          { x: 28, y: 0, w: 117, h: 117 },
                          { x: 35, y: 0, w: 103, h: 117 },
                          { x: 57, y: 0, w: 59, h: 117 },
                          { x: 0, y: 0, w: 182, h: 117 },
                        ],
                      },
                      media_results: {
                        result: { media_key: "3_1828402662682841089" },
                      },
                    },
                  ],
                  symbols: [],
                  timestamps: [],
                  urls: [],
                  user_mentions: [],
                },
                extended_entities: {
                  media: [
                    {
                      display_url: "pic.x.com/fh8xBzkrKI",
                      expanded_url:
                        "https://x.com/adrian_horning_/status/1828402665845322123/photo/1",
                      id_str: "1828402662682841089",
                      indices: [217, 240],
                      media_key: "3_1828402662682841089",
                      media_url_https:
                        "https://pbs.twimg.com/media/GV_KiM-W0AEa31c.png",
                      type: "photo",
                      url: "https://t.co/fh8xBzkrKI",
                      ext_media_availability: { status: "Available" },
                      features: {
                        large: { faces: [] },
                        medium: { faces: [] },
                        small: { faces: [] },
                        orig: { faces: [] },
                      },
                      sizes: {
                        large: { h: 117, w: 182, resize: "fit" },
                        medium: { h: 117, w: 182, resize: "fit" },
                        small: { h: 117, w: 182, resize: "fit" },
                        thumb: { h: 117, w: 117, resize: "crop" },
                      },
                      original_info: {
                        height: 117,
                        width: 182,
                        focus_rects: [
                          { x: 0, y: 0, w: 182, h: 102 },
                          { x: 28, y: 0, w: 117, h: 117 },
                          { x: 35, y: 0, w: 103, h: 117 },
                          { x: 57, y: 0, w: 59, h: 117 },
                          { x: 0, y: 0, w: 182, h: 117 },
                        ],
                      },
                      media_results: {
                        result: { media_key: "3_1828402662682841089" },
                      },
                    },
                  ],
                },
                favorite_count: 1722,
                favorited: false,
                full_text:
                  "I just scraped 2.8 million companies from crunchbase 🤯\n\nName, website, semrush stats, etc.\n\nI'm giving the entire thing away in the next 24 hours\n\nComment \"crunchbase\" and I'll send it to you. Make sure DM's are open https://t.co/fh8xBzkrKI",
                is_quote_status: false,
                lang: "en",
                possibly_sensitive: false,
                possibly_sensitive_editable: true,
                quote_count: 12,
                reply_count: 3186,
                retweet_count: 64,
                retweeted: false,
                user_id_str: "4520241209",
                id_str: "1828402665845322123",
              },
              quick_promote_eligibility: {
                eligibility: "IneligibleUserUnauthorized",
              },
              url: "https://x.com/Austen/status/1935730646267158797",
            },
          ],
        },
        trimmedResponse: {
          tweets: [
            {
              rest_id: "1834021269559501236",
              views: {
                count: "4710824",
                state: "EnabledWithCount",
              },
              source:
                '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
              legacy: {
                bookmark_count: 2634,
                bookmarked: false,
                created_at: "Thu Sep 12 00:08:39 +0000 2024",
                conversation_id_str: "1834021269559501236",
                display_text_range: [0, 134],
                entities: {
                  hashtags: [],
                  symbols: [],
                  timestamps: [],
                  urls: [],
                  user_mentions: [],
                },
                favorite_count: 129276,
                favorited: false,
                full_text:
                  "Wife: “What did your teacher remember about September 11th?”\n\nNine-year-old: “She was only four then, she doesn’t remember it at all.”",
                is_quote_status: false,
                lang: "en",
                quote_count: 674,
                reply_count: 388,
                retweet_count: 2901,
                retweeted: false,
                user_id_str: "221838349",
                id_str: "1834021269559501236",
              },
              url: "https://x.com/Austen/status/1935730646267158797",
            },
          ],
        },
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Twitter handle",
            placeholder: "levelsio",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Tweet Details",
        method: "GET",
        description:
          "Get detailed information about a specific tweet including engagement",
        fullDescription:
          "Retrieves detailed information about a specific tweet by URL, including the author's profile and engagement metrics. Returns rest_id, full_text, views count, favorite_count, retweet_count, reply_count, bookmark_count, quote_count, created_at, source, and media entities. Supports a trim parameter for a lighter response.",
        path: "/v1/twitter/tweet",
        sampleResponse: {
          __typename: "Tweet",
          rest_id: "1628769691547074562",
          core: {
            user_results: {
              result: {
                __typename: "User",
                id: "VXNlcjo0NTIwMjQxMjA5",
                rest_id: "4520241209",
                affiliates_highlighted_label: {},
                is_blue_verified: true,
                profile_image_shape: "Circle",
                legacy: {
                  created_at: "Fri Dec 18 02:48:59 +0000 2015",
                  default_profile: false,
                  default_profile_image: false,
                  description:
                    "Social Media Scraping API's: https://t.co/eSvJcfOZwF\n\nWeb Scraping Course: https://t.co/Sh9N0rAxXk",
                  entities: {
                    description: {
                      urls: [
                        {
                          display_url: "scrapecreators.com",
                          expanded_url: "https://scrapecreators.com/",
                          url: "https://t.co/eSvJcfOZwF",
                          indices: [29, 52],
                        },
                        {
                          display_url:
                            "adrianhorning.gumroad.com/l/the-ultimate…",
                          expanded_url:
                            "https://adrianhorning.gumroad.com/l/the-ultimate-web-scraping-course",
                          url: "https://t.co/Sh9N0rAxXk",
                          indices: [75, 98],
                        },
                      ],
                    },
                    url: {
                      urls: [
                        {
                          display_url: "thewebscrapingguy.com",
                          expanded_url: "https://thewebscrapingguy.com/",
                          url: "https://t.co/gNUelkV9LA",
                          indices: [0, 23],
                        },
                      ],
                    },
                  },
                  fast_followers_count: 0,
                  favourites_count: 85211,
                  followers_count: 16488,
                  friends_count: 1129,
                  has_custom_timelines: true,
                  is_translator: false,
                  listed_count: 151,
                  location: "Austin, TX",
                  media_count: 1133,
                  name: "Adrian | The Web Scraping Guy",
                  normal_followers_count: 16488,
                  pinned_tweet_ids_str: ["1628769691547074562"],
                  possibly_sensitive: false,
                  profile_banner_url:
                    "https://pbs.twimg.com/profile_banners/4520241209/1710267319",
                  profile_image_url_https:
                    "https://pbs.twimg.com/profile_images/1413647704161275904/1tTdl4v9_normal.jpg",
                  profile_interstitial_type: "",
                  screen_name: "adrian_horning_",
                  statuses_count: 17305,
                  translator_type: "none",
                  url: "https://t.co/gNUelkV9LA",
                  verified: false,
                  withheld_in_countries: [],
                },
                professional: {
                  rest_id: "1554172330263339015",
                  professional_type: "Business",
                  category: [],
                },
                tipjar_settings: {
                  is_enabled: false,
                  bandcamp_handle: "",
                  bitcoin_handle: "",
                  cash_app_handle: "",
                  ethereum_handle: "",
                  gofundme_handle: "",
                  patreon_handle: "",
                  pay_pal_handle: "",
                  venmo_handle: "",
                },
              },
            },
          },
          unmention_data: {},
          edit_control: {
            edit_tweet_ids: ["1628769691547074562"],
            editable_until_msecs: "1677165730000",
            is_edit_eligible: false,
            edits_remaining: "5",
          },
          is_translatable: false,
          views: {
            count: "101132",
            state: "EnabledWithCount",
          },
          source:
            '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
          legacy: {
            bookmark_count: 1159,
            bookmarked: false,
            created_at: "Thu Feb 23 14:52:10 +0000 2023",
            conversation_id_str: "1628769691547074562",
            display_text_range: [0, 176],
            entities: {
              hashtags: [],
              symbols: [],
              timestamps: [],
              urls: [
                {
                  display_url: "lemondrops.io",
                  expanded_url: "http://lemondrops.io",
                  url: "https://t.co/Fv4phrfgen",
                  indices: [74, 97],
                },
              ],
              user_mentions: [],
            },
            favorite_count: 402,
            favorited: false,
            full_text:
              "I’ve scraped huge retailers, real estate sites, county websites, and sold https://t.co/Fv4phrfgen, which scraped lululemon. \n\nAnd here is EVERYTHING I know about web scraping 👇",
            is_quote_status: false,
            lang: "en",
            possibly_sensitive: false,
            possibly_sensitive_editable: true,
            quote_count: 7,
            reply_count: 41,
            retweet_count: 30,
            retweeted: false,
            user_id_str: "4520241209",
            id_str: "1628769691547074562",
          },
        },
        trimmedResponse: {
          rest_id: "1935730646267158797",
          views: {
            count: "27539",
            state: "EnabledWithCount",
          },
          source:
            '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
          legacy: {
            bookmark_count: 95,
            bookmarked: false,
            created_at: "Thu Jun 19 16:05:24 +0000 2025",
            conversation_id_str: "1935730646267158797",
            display_text_range: [0, 148],
            entities: {
              hashtags: [],
              media: [
                {
                  display_url: "pic.x.com/YywdjQZde8",
                  expanded_url:
                    "https://x.com/Austen/status/1935730646267158797/photo/1",
                  id_str: "1935730260303069184",
                  indices: [149, 172],
                  media_key: "3_1935730260303069184",
                  media_url_https:
                    "https://pbs.twimg.com/media/Gt0YanJWwAA6B80.jpg",
                  type: "photo",
                  url: "https://t.co/YywdjQZde8",
                  ext_media_availability: {
                    status: "Available",
                  },
                  allow_download_status: {
                    allow_download: true,
                  },
                  media_results: {
                    result: {
                      media_key: "3_1935730260303069184",
                    },
                  },
                },
              ],
              symbols: [],
              timestamps: [],
              urls: [],
              user_mentions: [],
            },
            extended_entities: {
              media: [
                {
                  display_url: "pic.x.com/YywdjQZde8",
                  expanded_url:
                    "https://x.com/Austen/status/1935730646267158797/photo/1",
                  id_str: "1935730260303069184",
                  indices: [149, 172],
                  media_key: "3_1935730260303069184",
                  media_url_https:
                    "https://pbs.twimg.com/media/Gt0YanJWwAA6B80.jpg",
                  type: "photo",
                  url: "https://t.co/YywdjQZde8",
                  ext_media_availability: {
                    status: "Available",
                  },
                  allow_download_status: {
                    allow_download: true,
                  },
                  media_results: {
                    result: {
                      media_key: "3_1935730260303069184",
                    },
                  },
                },
              ],
            },
            favorite_count: 80,
            favorited: false,
            full_text:
              "This was created by a Gauntlet AI grad based on a whole lot of experimentation.\n\nOne of the most important things an AI dev can begin to understand. https://t.co/YywdjQZde8",
            is_quote_status: false,
            lang: "en",
            possibly_sensitive: false,
            possibly_sensitive_editable: true,
            quote_count: 3,
            reply_count: 6,
            retweet_count: 5,
            retweeted: false,
            user_id_str: "221838349",
            id_str: "1935730646267158797",
          },
        },
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Tweet URL",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Transcript",
        method: "GET",
        description:
          "Get the transcript of a video tweet. Unfortunately this is a little slow because I'm using AI to get the transcript",
        fullDescription:
          "Extracts the transcript from a Twitter video tweet using AI-powered transcription. The video must be under 2 minutes long. Returns a success flag and the full transcript text. This endpoint is slower than others due to the AI processing step.",
        path: "/v1/twitter/tweet/transcript",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Tweet URL",
            placeholder: "https://x.com/TheoVon/status/1916982720317821050",
          },
        ],
        sampleResponse: {
          success: true,
          transcript:
            "Since you're kind of like a leader in innovation and technology in our world, you know, um do you how do you know that what your convictions are, how do you gauge if what your convictions are are the best for everybody kind of? Like how do you kind of figure that out, you know? It seems like such a challenge. I mean, look at the end of the day, um there are still a lot of options of things that people can do. Just because I build something doesn't mean that people are going to use it. Actually a lot of the things that I build like some of some of them work, some of them don't. And like I think part of the reason why the company has been successful is because, you know, maybe we have a slightly higher hit rate of things working than others. But if we do something that doesn't work, then in general people aren't going to use it. And then the future doesn't go in that direction. So I see. So you're saying it's up to the user more. Yeah, I mean look, it's always served me well to generally have faith in people and believe that people are smart and can make good decisions for themselves. And whenever we try to like adopt some sort of like attitude of oh we must know better than them. It's like we're like we're the people building technology. That's when you lose. So I I I tend to just think that at the end of the day, yeah, I mean I think people are smarter than than a lot of people think and I think ultimately drive the direction that society goes in.",
        },
      },
      {
        name: "Community",
        method: "GET",
        description: "Get the details of a Twitter(X) Community",
        fullDescription:
          "Retrieves details about a Twitter/X Community by URL. Returns the community name, description, rest_id, join_policy, created_at, member_count, rules, and creator_results with the creator's profile. Also includes members_facepile_results with avatar images of recent members.",
        path: "/v1/twitter/community",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Community URL",
            placeholder: "https://x.com/i/communities/1926186499399139650",
          },
        ],
        sampleResponse: {
          success: true,
          __typename: "Community",
          is_member: false,
          name: "The First Thousand",
          role: "NonMember",
          rest_id: "1926186499399139650",
          actions: {
            join_action_result: {
              __typename: "CommunityJoinActionUnavailable",
            },
            id: "Q29tbXVuaXR5QWN0aW9uczoxOTI2MTg2NDk5Mzk5MTM5NjUw",
          },
          description:
            "This community is for creators and builders who are growing to their first 1,000 followers. Give insights, build your brand, and grow a loyal audience.",
          creator_results: {
            result: {
              __typename: "User",
              id: "VXNlcjoxOTIxMzY4NDU0NDQ5MjAxMTUy",
              is_blue_verified: true,
              core: {
                screen_name: "CanaCarson",
              },
              verification: {
                verified: false,
              },
            },
            id: "VXNlclJlc3VsdHM6MTkyMTM2ODQ1NDQ0OTIwMTE1Mg==",
          },
          join_policy: "Open",
          created_at: 1748073622931,
          rules: [
            {
              rest_id: "1926189963793609186",
              description:
                "This isn’t the space to drop ChatGPT engineered empty platitudes",
              name: "No Empty Platitudes",
              id: "Q29tbXVuaXR5UnVsZToxOTI2MTg5OTYzNzkzNjA5MTg2",
            },
            {
              rest_id: "1926190339016048686",
              description: "Show how you’re cracking the algorithm",
              name: "Post What’s Working",
              id: "Q29tbXVuaXR5UnVsZToxOTI2MTkwMzM5MDE2MDQ4Njg2",
            },
            {
              rest_id: "1926190261610135711",
              description:
                "Post your analytics. Let’s compete to see who is going the hardest",
              name: "Share Your Stats",
              id: "Q29tbXVuaXR5UnVsZToxOTI2MTkwMjYxNjEwMTM1NzEx",
            },
            {
              rest_id: "1941739813725467051",
              description:
                "That’s not the point of this community. It’s to share wins of how you grow, and growing the right audience. If someone interests you, follow them.",
              name: "No F4F posts",
              id: "Q29tbXVuaXR5UnVsZToxOTQxNzM5ODEzNzI1NDY3MDUx",
            },
            {
              rest_id: "1941742414554603805",
              name: "No fake accounts",
              id: "Q29tbXVuaXR5UnVsZToxOTQxNzQyNDE0NTU0NjAzODA1",
            },
          ],
          members_facepile_results: [
            {
              result: {
                __typename: "User",
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1944871269775601664/Ho7tiGd2_normal.jpg",
                },
                id: "VXNlcjoxOTIxMzY4NDU0NDQ5MjAxMTUy",
              },
              id: "VXNlclJlc3VsdHM6MTkyMTM2ODQ1NDQ0OTIwMTE1Mg==",
            },
            {
              result: {
                __typename: "User",
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1905068543885864961/lsxmrv8l_normal.jpg",
                },
                id: "VXNlcjo0MDA2ODgyNzYx",
              },
              id: "VXNlclJlc3VsdHM6NDAwNjg4Mjc2MQ==",
            },
            {
              result: {
                __typename: "User",
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1932171291362279424/7z8KirkZ_normal.jpg",
                },
                id: "VXNlcjoxOTI0NTI2MDM1NTUyNjMyODMy",
              },
              id: "VXNlclJlc3VsdHM6MTkyNDUyNjAzNTU1MjYzMjgzMg==",
            },
            {
              result: {
                __typename: "User",
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1936175360355246080/ut_hvG-K_normal.jpg",
                },
                id: "VXNlcjoxMDExNjE5NTY4NTA5NTA5NjMy",
              },
              id: "VXNlclJlc3VsdHM6MTAxMTYxOTU2ODUwOTUwOTYzMg==",
            },
            {
              result: {
                __typename: "User",
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1790570742247043072/uyEKz7o__normal.jpg",
                },
                id: "VXNlcjoxMTkyNTYxNzY4NTc0NDcyMTky",
              },
              id: "VXNlclJlc3VsdHM6MTE5MjU2MTc2ODU3NDQ3MjE5Mg==",
            },
          ],
          member_count: 1896,
          id: "Q29tbXVuaXR5OjE5MjYxODY0OTkzOTkxMzk2NTA=",
        },
      },
      {
        name: "Community Tweets",
        method: "GET",
        description: "Get the tweets from a Twitter(X) Community",
        fullDescription:
          "Fetches tweets posted within a Twitter/X Community by URL. Returns an array of tweets, each with id, full_text, view_count, favorite_count, retweet_count, reply_count, bookmark_count, quote_count, created_at, and source. Each tweet includes a user object with the author's name, screen_name, avatar, followers_count, and is_blue_verified status.",
        path: "/v1/twitter/community/tweets",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Community URL",
            placeholder: "https://x.com/i/communities/1926186499399139650",
          },
        ],
        sampleResponse: {
          success: true,
          tweets: [
            {
              id: "1940874916771123735",
              source:
                '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
              view_count: "8660",
              bookmark_count: 10,
              bookmarked: false,
              created_at: "Thu Jul 03 20:46:54 +0000 2025",
              conversation_id_str: "1940874916771123735",
              display_text_range: [0, 27],
              favorite_count: 173,
              favorited: false,
              full_text: "You just need 1 viral tweet https://t.co/Z4Q5jtsxAp",
              is_quote_status: false,
              lang: "en",
              possibly_sensitive: false,
              possibly_sensitive_editable: true,
              quote_count: 2,
              reply_count: 55,
              retweet_count: 3,
              retweeted: false,
              user_id_str: "73647967",
              id_str: "1940874916771123735",
              user: {
                __typename: "User",
                id: "VXNlcjo3MzY0Nzk2Nw==",
                rest_id: "73647967",
                affiliates_highlighted_label: {},
                avatar: {
                  image_url:
                    "https://pbs.twimg.com/profile_images/1590652776719286274/eeualJ2p_normal.jpg",
                },
                core: {
                  created_at: "Sat Sep 12 14:00:05 +0000 2009",
                  name: "Mike in’ Software",
                  screen_name: "mikeinsoftware",
                },
                dm_permissions: {},
                is_blue_verified: true,
                legacy: {
                  default_profile: true,
                  default_profile_image: false,
                  description:
                    "Senior SWE👨‍💻 Indie hacking my way to financial freedom 👀 Follow for free early access to next project",
                  entities: {
                    description: {
                      urls: [],
                    },
                  },
                  fast_followers_count: 0,
                  favourites_count: 7532,
                  followers_count: 1173,
                  friends_count: 990,
                  has_custom_timelines: true,
                  is_translator: false,
                  listed_count: 8,
                  media_count: 518,
                  normal_followers_count: 1173,
                  pinned_tweet_ids_str: ["1945599110876176561"],
                  possibly_sensitive: false,
                  profile_interstitial_type: "",
                  statuses_count: 2931,
                  translator_type: "none",
                  withheld_in_countries: [],
                },
                location: {
                  location: "",
                },
                media_permissions: {},
                parody_commentary_fan_label: "None",
                profile_image_shape: "Circle",
                professional: {
                  rest_id: "1928057904189559014",
                  professional_type: "Creator",
                  category: [
                    {
                      id: 1055,
                      name: "Software developer/Programmer/Software engineer",
                      icon_name: "IconBriefcaseStroke",
                    },
                  ],
                },
                privacy: {
                  protected: false,
                },
                relationship_perspectives: {},
                tipjar_settings: {
                  is_enabled: false,
                  bandcamp_handle: "",
                  bitcoin_handle: "",
                  cash_app_handle: "",
                  ethereum_handle: "",
                  gofundme_handle: "",
                  patreon_handle: "",
                  pay_pal_handle: "",
                  venmo_handle: "",
                },
                verification: {
                  verified: false,
                },
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "reddit",
    name: "Reddit",
    description: "Scrape Reddit posts and comments",
    endpoints: [
      {
        name: "Subreddit Details",
        method: "GET",
        description:
          "Get details about a subreddit. Pass a subreddit name or URL to the subreddit.",
        fullDescription:
          "Retrieves metadata about a subreddit by name or URL. The subreddit name must be case-sensitive. Returns display_name, description, subscribers, weekly_active_users, weekly_contributions, rules, icon_img, header_img, advertiser_category, submit_text, and created_at.",
        path: "/v1/reddit/subreddit/details",
        params: [
          {
            name: "subreddit",
            type: "string",
            required: false,
            description:
              "Subreddit name. MUST be case sensitive. So 'AskReddit' not 'askreddit'.",
            placeholder: "AskReddit",
          },
          {
            name: "url",
            type: "string",
            required: false,
            description: "Subreddit URL",
            placeholder: "https://www.reddit.com/r/AbsoluteUnits/",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 33950256,
          subreddit_id: "t5_a7wuv",
          display_name: "AbsoluteUnits",
          weekly_active_users: 1428398,
          weekly_contributions: 8923,
          rules:
            "#ABSOLUTE UNITS\n\n---\n\n    Be in awe at the size of these lads\n\n---\n\n###[Check out our deep, well-reflected definitions of an absolute unit.](https://www.reddit.com/r/AbsoluteUnits/wiki/index)  ",
          description:
            "Absolute Unit : an Animal or Public Figure, who is larger than we should normally expect.",
          header_img: null,
          icon_img:
            "https://styles.redditmedia.com/t5_a7wuv/styles/communityIcon_t3cspt08bl681.png?width=128&frame=1&auto=webp&s=6f7e59ccf1724bd6c8b3e0d2840c9b21297102c3",
          subscribers: 1923642,
          advertiser_category: "",
          created_at: "2018-01-05T10:35:24.000Z",
          submit_text: "",
        },
      },
      {
        name: "Subreddit Posts",
        method: "GET",
        description:
          "Get recent posts from a subreddit with engagement metrics",
        fullDescription:
          "Fetches posts from a subreddit with sorting and filtering options. Each post includes title, author, selftext, score, ups, upvote_ratio, num_comments, created_utc, url, permalink, subreddit_subscribers, and is_video. Supports sort (best, hot, new, top, rising), timeframe filtering, pagination via the after token, and a trim parameter for lighter responses.",
        path: "/v1/reddit/subreddit",
        paginationField: "after",
        sampleResponse: {
          posts: [
            {
              approved_at_utc: null,
              subreddit: "AskReddit",
              selftext: "",
              author_fullname: "t2_aelahp9al",
              saved: false,
              mod_reason_title: null,
              gilded: 0,
              clicked: false,
              title:
                "What are your thoughts on California’s bill that would ban most law enforcement officers from wearing face masks while on duty?",
              link_flair_richtext: [],
              subreddit_name_prefixed: "r/AskReddit",
              hidden: false,
              pwls: 6,
              link_flair_css_class: null,
              downs: 0,
              top_awarded_type: null,
              hide_score: false,
              name: "t3_1ldr6b9",
              quarantine: false,
              link_flair_text_color: "dark",
              upvote_ratio: 0.93,
              author_flair_background_color: null,
              subreddit_type: "public",
              ups: 12606,
              total_awards_received: 0,
              media_embed: {},
              author_flair_template_id: null,
              is_original_content: false,
              user_reports: [],
              secure_media: null,
              is_reddit_media_domain: false,
              is_meta: false,
              category: null,
              secure_media_embed: {},
              link_flair_text: null,
              can_mod_post: false,
              score: 12606,
              approved_by: null,
              is_created_from_ads_ui: false,
              author_premium: false,
              thumbnail: "",
              edited: false,
              author_flair_css_class: null,
              author_flair_richtext: [],
              gildings: {},
              content_categories: null,
              is_self: true,
              mod_note: null,
              created: 1750176516,
              link_flair_type: "text",
              wls: 6,
              removed_by_category: null,
              banned_by: null,
              author_flair_type: "text",
              domain: "self.AskReddit",
              allow_live_comments: false,
              selftext_html: null,
              likes: null,
              suggested_sort: null,
              banned_at_utc: null,
              view_count: null,
              archived: false,
              no_follow: false,
              is_crosspostable: false,
              pinned: false,
              over_18: false,
              all_awardings: [],
              awarders: [],
              media_only: false,
              can_gild: false,
              spoiler: false,
              locked: false,
              author_flair_text: null,
              treatment_tags: [],
              visited: false,
              removed_by: null,
              num_reports: null,
              distinguished: null,
              subreddit_id: "t5_2qh1i",
              author_is_blocked: false,
              mod_reason_by: null,
              removal_reason: null,
              link_flair_background_color: "",
              id: "1ldr6b9",
              is_robot_indexable: true,
              report_reasons: null,
              author: "Ecstatic-Medium-6320",
              discussion_type: null,
              num_comments: 1921,
              send_replies: false,
              contest_mode: false,
              mod_reports: [],
              author_patreon_flair: false,
              author_flair_text_color: null,
              permalink:
                "/r/AskReddit/comments/1ldr6b9/what_are_your_thoughts_on_californias_bill_that/",
              stickied: false,
              url: "https://www.reddit.com/r/AskReddit/comments/1ldr6b9/what_are_your_thoughts_on_californias_bill_that/",
              subreddit_subscribers: 56098571,
              created_utc: 1750176516,
              num_crossposts: 1,
              media: null,
              is_video: false,
            },
          ],
          after: "t3_1ld8q7h",
        },
        trimmedResponse: {
          posts: [
            {
              id: "1lfbo7u",
              author: "Vetro_Nodulare2",
              author_fullname: "t2_16syu27ar1",
              subreddit: "AskReddit",
              title: "What is a thing you love that lots of people hate?",
              downs: 0,
              name: "t3_1lfbo7u",
              upvote_ratio: 0.9,
              ups: 45,
              total_awards_received: 0,
              score: 45,
              created: 1750341959,
              num_comments: 349,
              url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/",
              subreddit_subscribers: 56146328,
              is_video: false,
              created_utc: 1750341959,
            },
            {
              id: "1leoazg",
              author: "iamsomaiyya",
              author_fullname: "t2_1kqcp3s2yw",
              subreddit: "AskReddit",
              title:
                "What's the best physical pleasure you have ever experienced?",
              downs: 0,
              name: "t3_1leoazg",
              upvote_ratio: 0.91,
              ups: 1853,
              total_awards_received: 0,
              score: 1853,
              created: 1750270453,
              num_comments: 3028,
              url: "https://www.reddit.com/r/AskReddit/comments/1leoazg/whats_the_best_physical_pleasure_you_have_ever/",
              subreddit_subscribers: 56146328,
              is_video: false,
              created_utc: 1750270453,
            },
          ],
          after: "t3_1lfogps",
        },
        params: [
          {
            name: "subreddit",
            type: "string",
            required: true,
            description: "Subreddit name",
          },
          {
            name: "timeframe",
            type: "select",
            required: false,
            description: "Timeframe to get posts from",
            options: ["all", "day", "week", "month", "year"],
          },
          {
            name: "sort",
            type: "select",
            required: false,
            description: "Sort order",
            options: ["best", "hot", "new", "top", "rising"],
          },
          {
            name: "after",
            type: "string",
            required: false,
            description:
              "After to get more posts. Get 'after' from previous response.",
            placeholder: "t3_1234567890",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
      },
      {
        name: "Subreddit Search",
        method: "GET",
        description:
          "Search within a subreddit for posts, comments, or media matching a query",
        fullDescription:
          "Searches within a specific subreddit for posts, comments, and media matching a query. Returns posts with title, votes, num_comments, url, and created_at; comments with author, body, votes, and parent post info; and media with title, media_type, image dimensions, and gallery_count. Supports sort, timeframe filtering, and cursor-based pagination.",
        path: "/v1/reddit/subreddit/search",
        paginationField: "cursor",
        params: [
          {
            name: "subreddit",
            type: "string",
            required: true,
            description: "Subreddit name (e.g. 'Fitness', not 'r/Fitness' or a full URL)",
          },
          {
            name: "query",
            type: "string",
            required: false,
            description: "Search query to find matching content",
            placeholder: "push ups",
          },
          {
            name: "sort",
            type: "select",
            required: false,
            description:
              "Sort order. For posts/media: relevance, hot, top, new, comments. For comments: relevance, top, new",
            options: ["relevance", "hot", "top", "new", "comments"],
          },
          {
            name: "timeframe",
            type: "select",
            required: false,
            description: "Timeframe to filter results",
            options: ["all", "year", "month", "week", "day", "hour"],
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description:
              "Cursor to get more results. Get 'cursor' from previous response.",
            placeholder: "eyJjYW5kaWRhdGVzX3JldHVybmVkIjoi...",
          },
        ],
        sampleResponse: {
          posts: [
            {
              id: "t3_8gmjrb",
              post_id: "t3_8gmjrb",
              title: "Is doing 50-100 pushups a day doing anything?",
              url: "https://www.reddit.com/r/Fitness/comments/8gmjrb/is_doing_50100_pushups_a_day_doing_anything/",
              permalink:
                "/r/Fitness/comments/8gmjrb/is_doing_50100_pushups_a_day_doing_anything/",
              nsfw: false,
              spoiler: false,
              is_crosspost: false,
              subreddit: {
                id: "t5_2qhx4",
                name: "Fitness",
                nsfw: false,
                quarantined: false,
                icon: "https://b.thumbs.redditmedia.com/Ted4KOMuRbaCYlDS55cTqjpVVZ2ENHKtYFbBFjI1i2o.png",
                banner: null,
                description:
                  "A place for the pursuit of physical fitness goals.\n\nPlease see the r/Fitness Wiki and FAQ at https://thefitness.wiki for help with common questions.",
                weekly_visitors: 898726,
                weekly_contributions: 1827,
              },
              votes: 1414,
              num_comments: 582,
              created_at: "2018-05-03T01:09:17.620000+0000",
              created_at_iso: "2018-05-03T01:09:17.620Z",
              thumbnail: null,
              thumbnail_blurred: false,
              position: 0,
              relative_position: 0,
            },
          ],
          comments: [
            {
              id: "t1_nxf7p27",
              post_id: "t3_1q2p898",
              parent_comment_id: null,
              is_reply_to_comment: false,
              author: "Philser23",
              author_avatar: null,
              author_nsfw: false,
              body: "On the 30th my girlfriend out of the blue decided her new year's resolution would be to start going to the gym. I was so excited since none of my partners ever shared the fitness hobby with me.",
              body_html:
                '<p>On the 30th my girlfriend out of the blue decided her new year\'s resolution would be to start going to the gym...</p>',
              images: [],
              votes: 123,
              url: "https://www.reddit.com/r/Fitness/comments/1q2p898/gym_story_saturday/nxf7p27/",
              permalink: "/r/Fitness/comments/1q2p898/gym_story_saturday/nxf7p27/",
              created_at: "2026-01-03T11:26:02.434000+0000",
              created_at_iso: "2026-01-03T11:26:02.434Z",
              post: {
                id: "t3_1q2p898",
                title: "Gym Story Saturday",
                url: "https://www.reddit.com/r/Fitness/comments/1q2p898/gym_story_saturday/",
                permalink: "/r/Fitness/comments/1q2p898/gym_story_saturday/",
                nsfw: false,
                spoiler: false,
                votes: 67,
                num_comments: 80,
                created_at: "2026-01-03T08:15:49.709000+0000",
                created_at_iso: "2026-01-03T08:15:49.709Z",
              },
              subreddit: {
                id: "t5_2qhx4",
                name: "Fitness",
                nsfw: false,
                quarantined: false,
                icon: "https://b.thumbs.redditmedia.com/Ted4KOMuRbaCYlDS55cTqjpVVZ2ENHKtYFbBFjI1i2o.png",
              },
              position: 0,
            },
          ],
          media: [
            {
              id: "t3_geo4x",
              title:
                "Bodyweight training for really strong people. See on you're own what I mean with strong. (Not me)",
              url: "https://www.reddit.com/r/Fitness/comments/geo4x/bodyweight_training_for_really_strong_people_see/",
              permalink:
                "/r/Fitness/comments/geo4x/bodyweight_training_for_really_strong_people_see/",
              media_type: "image",
              video: null,
              image: {
                src: "https://external-preview.redd.it/X6lz5yGIzqVA5LcI9w-FsQJJHhXoCugDhsXgWW3I404.jpg?format=pjpg&auto=webp&s=46814b0a707a532e39e6c20851ddc1fefb0a111f",
                width: 480,
                height: 360,
                resolutions: [
                  {
                    url: "https://external-preview.redd.it/X6lz5yGIzqVA5LcI9w-FsQJJHhXoCugDhsXgWW3I404.jpg?width=320&crop=smart&format=pjpg&auto=webp&s=144ac4171a1862e5d91d8dd90d44271e22a8273d",
                    width: 320,
                  },
                  {
                    url: "https://external-preview.redd.it/X6lz5yGIzqVA5LcI9w-FsQJJHhXoCugDhsXgWW3I404.jpg?format=pjpg&auto=webp&s=46814b0a707a532e39e6c20851ddc1fefb0a111f",
                    width: 480,
                  },
                ],
              },
              gallery_count: null,
              aspect_ratio: 1.3333333333333333,
              nsfw: false,
              spoiler: false,
              is_blurred: false,
              subreddit: {
                id: "t5_2qhx4",
                name: "Fitness",
                nsfw: false,
                quarantined: false,
              },
              position: 0,
              safe_search: "UNAVAILABLE",
            },
          ],
          cursor:
            "eyJjYW5kaWRhdGVzX3JldHVybmVkIjoie1wic2VjdGlvbl8xX3BpcGVsaW5lXzBfZ2xvYmFsX21vZGlmaWVyc1wiOlwiM1wiLFwic2VjdGlvbl8xX3BpcGVsaW5lXzFfbG9jYWxfbW9kaWZpZXJzXCI6XCIzXCIsXCJzZWN0aW9uXzJfcGlwZWxpbmVfNl9zY29wZV9zd2l0Y2hlclwiOlwiMFwiLFwic2VjdGlvbl8yX3BpcGVsaW5lXzdfcG9zdF9zZWFyY2hcIjpcIjdcIn0ifQ==",
        },
      },
      {
        name: "Post Comments",
        method: "GET",
        description: "Get comments + post information from a Reddit post",
        fullDescription:
          "Retrieves comments and post details from a Reddit post by URL. Returns the post with title, author, score, ups, upvote_ratio, num_comments, and created_utc, plus a comments array where each comment includes author, body, body_html, score, created_utc, parent_id, permalink, and nested replies. Supports cursor-based pagination for loading more comments and a trim parameter for lighter responses.",
        path: "/v1/reddit/post/comments",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Reddit post URL",
            placeholder:
              "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "Cursor to get more comments, or replies.",
            placeholder: "ed1lvsa,ed3fnpq,ed25l2w",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        trimmedResponse: {
          comments: [
            {
              id: "mymupxb",
              author: "Background-Emu-2890",
              author_fullname: "t2_efdlposp6",
              body: "Black cat i have one and i love her so much !",
              name: "t1_mymupxb",
              created_utc: 1750342221,
              created_at_iso: "2025-06-19T14:10:21.000Z",
              parent_id: "t3_1lfbo7u",
              url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymupxb/",
              replies: {
                items: [
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymxwde/",
                    created_utc: 1750343166,
                    created_at_iso: "2025-06-19T14:26:06.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [],
                      more: {
                        has_more: false,
                        next_cursor: null,
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "mymxwde",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "doublestitch",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 19,
                    author_fullname: "t2_10py0g",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "House panthers for the win",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_mymxwde",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;House panthers for the win&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymxwde/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750343166,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 19,
                  },
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myn2di4/",
                    created_utc: 1750344488,
                    created_at_iso: "2025-06-19T14:48:08.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [
                        {
                          url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myofr71/",
                          created_utc: 1750359225,
                          created_at_iso: "2025-06-19T18:53:45.000Z",
                          subreddit_id: "t5_2qh1i",
                          approved_at_utc: null,
                          author_is_blocked: false,
                          comment_type: null,
                          awarders: [],
                          mod_reason_by: null,
                          banned_by: null,
                          author_flair_type: "text",
                          total_awards_received: 0,
                          subreddit: "AskReddit",
                          author_flair_template_id: null,
                          likes: null,
                          replies: {
                            items: [],
                            more: {
                              has_more: false,
                              next_cursor: null,
                            },
                          },
                          user_reports: [],
                          saved: false,
                          id: "myofr71",
                          banned_at_utc: null,
                          mod_reason_title: null,
                          gilded: 0,
                          archived: false,
                          collapsed_reason_code: null,
                          no_follow: true,
                          author: "KatNanshin",
                          can_mod_post: false,
                          send_replies: true,
                          parent_id: "t1_myn2di4",
                          score: 3,
                          author_fullname: "t2_1l1jbxffgt",
                          removal_reason: null,
                          approved_by: null,
                          mod_note: null,
                          all_awardings: [],
                          body: "I have one of each plus a grey tabby … who’s actually more affectionate (how is this even possible? 🤷🏼‍♀️) than my orange and my black guy.  And they’re affection in their own different ways… 😻❤️😻",
                          edited: false,
                          top_awarded_type: null,
                          downs: 0,
                          author_flair_css_class: null,
                          name: "t1_myofr71",
                          is_submitter: false,
                          collapsed: false,
                          author_flair_richtext: [],
                          author_patreon_flair: false,
                          body_html:
                            '&lt;div class="md"&gt;&lt;p&gt;I have one of each plus a grey tabby … who’s actually more affectionate (how is this even possible? 🤷🏼‍♀️) than my orange and my black guy.  And they’re affection in their own different ways… 😻❤️😻&lt;/p&gt;\n&lt;/div&gt;',
                          gildings: {},
                          collapsed_reason: null,
                          distinguished: null,
                          associated_award: null,
                          stickied: false,
                          author_premium: false,
                          can_gild: false,
                          link_id: "t3_1lfbo7u",
                          unrepliable_reason: null,
                          author_flair_text_color: null,
                          score_hidden: false,
                          permalink:
                            "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myofr71/",
                          subreddit_type: "public",
                          locked: false,
                          report_reasons: null,
                          created: 1750359225,
                          author_flair_text: null,
                          treatment_tags: [],
                          subreddit_name_prefixed: "r/AskReddit",
                          controversiality: 0,
                          depth: 2,
                          author_flair_background_color: null,
                          collapsed_because_crowd_control: null,
                          mod_reports: [],
                          num_reports: null,
                          ups: 3,
                        },
                      ],
                      more: {
                        has_more: false,
                        next_cursor: null,
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "myn2di4",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "Revolutionary_Buy943",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 15,
                    author_fullname: "t2_7m7oqhn9",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "Black cats and male orange cats are the most affectionate, in my experience.  😍",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_myn2di4",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;Black cats and male orange cats are the most affectionate, in my experience.  😍&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myn2di4/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750344488,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 15,
                  },
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymvwx9/",
                    created_utc: 1750342579,
                    created_at_iso: "2025-06-19T14:16:19.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [],
                      more: {
                        has_more: false,
                        next_cursor: null,
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "mymvwx9",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "GoshlynnGacha3004",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 10,
                    author_fullname: "t2_e5n3rxaj",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "We had a black cat named Bear for fourteen years. He purred loudly, and my parents say that he looked like a bear cub as a kitten. 🐻 😸",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_mymvwx9",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;We had a black cat named Bear for fourteen years. He purred loudly, and my parents say that he looked like a bear cub as a kitten. 🐻 😸&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymvwx9/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750342579,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 10,
                  },
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymw9qz/",
                    created_utc: 1750342686,
                    created_at_iso: "2025-06-19T14:18:06.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [
                        {
                          url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myof3y2/",
                          created_utc: 1750359014,
                          created_at_iso: "2025-06-19T18:50:14.000Z",
                          subreddit_id: "t5_2qh1i",
                          approved_at_utc: null,
                          author_is_blocked: false,
                          comment_type: null,
                          awarders: [],
                          mod_reason_by: null,
                          banned_by: null,
                          author_flair_type: "text",
                          total_awards_received: 0,
                          subreddit: "AskReddit",
                          author_flair_template_id: null,
                          likes: null,
                          replies: {
                            items: [],
                            more: {
                              has_more: false,
                              next_cursor: null,
                            },
                          },
                          user_reports: [],
                          saved: false,
                          id: "myof3y2",
                          banned_at_utc: null,
                          mod_reason_title: null,
                          gilded: 0,
                          archived: false,
                          collapsed_reason_code: null,
                          no_follow: false,
                          author: "Several-Cook-2062",
                          can_mod_post: false,
                          send_replies: true,
                          parent_id: "t1_mymw9qz",
                          score: 5,
                          author_fullname: "t2_b8330uoq",
                          removal_reason: null,
                          approved_by: null,
                          mod_note: null,
                          all_awardings: [],
                          body: "Yes, in my small town village in the Philippines.  The old people very superstitious.  They blame black for every misfortune happen in their lives.  If their kids got minor fever, they blame the black cat.  If their kids got cold they blame the black cat. If they lost in gambling they blame the cat.  What a annoying people. Then they say are devout Christian. What a contradiction 🤦",
                          edited: false,
                          top_awarded_type: null,
                          downs: 0,
                          author_flair_css_class: null,
                          name: "t1_myof3y2",
                          is_submitter: false,
                          collapsed: false,
                          author_flair_richtext: [],
                          author_patreon_flair: false,
                          body_html:
                            '&lt;div class="md"&gt;&lt;p&gt;Yes, in my small town village in the Philippines.  The old people very superstitious.  They blame black for every misfortune happen in their lives.  If their kids got minor fever, they blame the black cat.  If their kids got cold they blame the black cat. If they lost in gambling they blame the cat.  What a annoying people. Then they say are devout Christian. What a contradiction 🤦&lt;/p&gt;\n&lt;/div&gt;',
                          gildings: {},
                          collapsed_reason: null,
                          distinguished: null,
                          associated_award: null,
                          stickied: false,
                          author_premium: false,
                          can_gild: false,
                          link_id: "t3_1lfbo7u",
                          unrepliable_reason: null,
                          author_flair_text_color: null,
                          score_hidden: false,
                          permalink:
                            "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myof3y2/",
                          subreddit_type: "public",
                          locked: false,
                          report_reasons: null,
                          created: 1750359014,
                          author_flair_text: null,
                          treatment_tags: [],
                          subreddit_name_prefixed: "r/AskReddit",
                          controversiality: 0,
                          depth: 2,
                          author_flair_background_color: null,
                          collapsed_because_crowd_control: null,
                          mod_reports: [],
                          num_reports: null,
                          ups: 5,
                        },
                      ],
                      more: {
                        has_more: true,
                        cursor: "mymy0y4",
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "mymw9qz",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "Subject-Plastic745",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 7,
                    author_fullname: "t2_1jvyt3bsnp",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "Do people hate black cats? Is it because of the bad luck bullshit?",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_mymw9qz",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;Do people hate black cats? Is it because of the bad luck bullshit?&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymw9qz/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750342686,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 7,
                  },
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myobcqk/",
                    created_utc: 1750357795,
                    created_at_iso: "2025-06-19T18:29:55.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [],
                      more: {
                        has_more: false,
                        next_cursor: null,
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "myobcqk",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "summerloverrrr",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 3,
                    author_fullname: "t2_1kgokkf80r",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "I love your cat too",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_myobcqk",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;I love your cat too&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myobcqk/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750357795,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 3,
                  },
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myp38ix/",
                    created_utc: 1750366207,
                    created_at_iso: "2025-06-19T20:50:07.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [],
                      more: {
                        has_more: true,
                        cursor: "myp3krc",
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "myp38ix",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: false,
                    collapsed_reason_code: null,
                    no_follow: true,
                    author: "bigbootyfairygirl",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_mymupxb",
                    score: 2,
                    author_fullname: "t2_1rt2aecqfs",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "Black cats have the BIGGEST personalities!!",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_myp38ix",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;Black cats have the BIGGEST personalities!!&lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_1lfbo7u",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/myp38ix/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1750366207,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: true,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 2,
                  },
                ],
                more: {
                  has_more: true,
                  cursor: "myn970w",
                },
              },
              ups: 75,
              downs: 0,
              score: 75,
            },
          ],
          post: {
            id: "1lfbo7u",
            author: "Vetro_Nodulare2",
            author_fullname: "t2_16syu27ar1",
            subreddit: "AskReddit",
            title: "What is a thing you love that lots of people hate?",
            downs: 0,
            name: "t3_1lfbo7u",
            upvote_ratio: 0.91,
            ups: 47,
            total_awards_received: 0,
            score: 47,
            created: 1750341959,
            num_comments: 353,
            url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/",
            subreddit_subscribers: 56146601,
            is_video: false,
            created_utc: 1750341959,
          },
          more: {
            has_more: true,
            cursor: "myoaw2m,myob40l,myoeo9h",
          },
        },
        sampleResponse: {
          post: {
            approved_at_utc: null,
            subreddit: "AskReddit",
            selftext: "",
            user_reports: [],
            saved: false,
            mod_reason_title: null,
            gilded: 13,
            clicked: false,
            title:
              "People who haven't pooped in 2019 yet, why are you still holding on to last years shit?",
            link_flair_richtext: [],
            subreddit_name_prefixed: "r/AskReddit",
            hidden: false,
            pwls: 6,
            link_flair_css_class: null,
            downs: 0,
            top_awarded_type: null,
            hide_score: false,
            name: "t3_ablzuq",
            quarantine: false,
            link_flair_text_color: "dark",
            upvote_ratio: 0.91,
            author_flair_background_color: null,
            subreddit_type: "public",
            ups: 221995,
            total_awards_received: 0,
            media_embed: {},
            author_flair_template_id: null,
            is_original_content: false,
            author_fullname: "t2_2uhed5z4",
            secure_media: null,
            is_reddit_media_domain: false,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: null,
            can_mod_post: false,
            score: 221995,
            approved_by: null,
            is_created_from_ads_ui: false,
            author_premium: false,
            thumbnail: "",
            edited: 1546379983,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {},
            content_categories: null,
            is_self: true,
            mod_note: null,
            created: 1546376787,
            link_flair_type: "text",
            wls: 6,
            removed_by_category: null,
            banned_by: null,
            author_flair_type: "text",
            domain: "self.AskReddit",
            allow_live_comments: true,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: true,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            all_awardings: [],
            awarders: [],
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            treatment_tags: [],
            visited: false,
            removed_by: null,
            num_reports: null,
            distinguished: null,
            subreddit_id: "t5_2qh1i",
            author_is_blocked: false,
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: "",
            id: "ablzuq",
            is_robot_indexable: true,
            num_duplicates: 33,
            report_reasons: null,
            author: "ShoddySubstance",
            discussion_type: null,
            num_comments: 7925,
            send_replies: true,
            media: null,
            contest_mode: false,
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink:
              "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/",
            stickied: false,
            url: "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/",
            subreddit_subscribers: 54408093,
            created_utc: 1546376787,
            num_crossposts: 73,
            mod_reports: [],
            is_video: false,
          },
          comments: [
            {
              url: "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1czme/",
              created_utc: 1546378524,
              created_at_iso: "2019-01-01T21:35:24.000Z",
              subreddit_id: "t5_2qh1i",
              approved_at_utc: null,
              author_is_blocked: false,
              comment_type: null,
              awarders: [],
              mod_reason_by: null,
              banned_by: null,
              author_flair_type: "text",
              total_awards_received: 0,
              subreddit: "AskReddit",
              author_flair_template_id: null,
              likes: null,
              replies: {
                items: [
                  {
                    url: "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1su6t/",
                    created_utc: 1546391589,
                    created_at_iso: "2019-01-02T01:13:09.000Z",
                    subreddit_id: "t5_2qh1i",
                    approved_at_utc: null,
                    author_is_blocked: false,
                    comment_type: null,
                    awarders: [],
                    mod_reason_by: null,
                    banned_by: null,
                    author_flair_type: "text",
                    total_awards_received: 0,
                    subreddit: "AskReddit",
                    author_flair_template_id: null,
                    likes: null,
                    replies: {
                      items: [
                        {
                          url: "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1ye8p/",
                          created_utc: 1546396468,
                          created_at_iso: "2019-01-02T02:34:28.000Z",
                          total_awards_received: 0,
                          approved_at_utc: null,
                          author_is_blocked: false,
                          comment_type: null,
                          awarders: [],
                          mod_reason_by: null,
                          banned_by: null,
                          ups: 780,
                          removal_reason: null,
                          link_id: "t3_ablzuq",
                          author_flair_template_id: null,
                          likes: null,
                          replies: {
                            items: [
                              {
                                url: "https://www.reddit.com/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed2xsuk/",
                                created_utc: 1546442379,
                                created_at_iso: "2019-01-02T15:19:39.000Z",
                                subreddit_id: "t5_2qh1i",
                                approved_at_utc: null,
                                author_is_blocked: false,
                                comment_type: null,
                                awarders: [],
                                mod_reason_by: null,
                                banned_by: null,
                                author_flair_type: "text",
                                total_awards_received: 0,
                                subreddit: "AskReddit",
                                author_flair_template_id: null,
                                likes: null,
                                replies: {
                                  items: [],
                                  more: {
                                    has_more: false,
                                    next_cursor: null,
                                  },
                                },
                                user_reports: [],
                                saved: false,
                                id: "ed2xsuk",
                                banned_at_utc: null,
                                mod_reason_title: null,
                                gilded: 0,
                                archived: true,
                                collapsed_reason_code: null,
                                no_follow: false,
                                author: "minjabinja",
                                can_mod_post: false,
                                send_replies: true,
                                parent_id: "t1_ed1ye8p",
                                score: 332,
                                author_fullname: "t2_nqzim",
                                removal_reason: null,
                                approved_by: null,
                                mod_note: null,
                                all_awardings: [],
                                collapsed: false,
                                body: "goals",
                                edited: false,
                                top_awarded_type: null,
                                author_flair_css_class: null,
                                name: "t1_ed2xsuk",
                                is_submitter: false,
                                downs: 0,
                                author_flair_richtext: [],
                                author_patreon_flair: false,
                                body_html:
                                  '&lt;div class="md"&gt;&lt;p&gt;goals&lt;/p&gt;\n&lt;/div&gt;',
                                gildings: {},
                                collapsed_reason: null,
                                distinguished: null,
                                associated_award: null,
                                stickied: false,
                                author_premium: false,
                                can_gild: false,
                                link_id: "t3_ablzuq",
                                unrepliable_reason: null,
                                author_flair_text_color: null,
                                score_hidden: false,
                                permalink:
                                  "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed2xsuk/",
                                subreddit_type: "public",
                                locked: false,
                                report_reasons: null,
                                created: 1546442379,
                                author_flair_text: null,
                                treatment_tags: [],
                                subreddit_name_prefixed: "r/AskReddit",
                                controversiality: 0,
                                depth: 3,
                                author_flair_background_color: null,
                                collapsed_because_crowd_control: null,
                                mod_reports: [],
                                num_reports: null,
                                ups: 332,
                              },
                            ],
                            more: {
                              has_more: true,
                              cursor:
                                "eduy6f3,ejxami8,eegd7xa,ef29a32,ehq4puw,eqb5cnr,edhhwh5,ei3p2wr,ej851tk,el4yhl2,epc5qyk",
                            },
                          },
                          user_reports: [],
                          saved: false,
                          id: "ed1ye8p",
                          banned_at_utc: null,
                          mod_reason_title: null,
                          gilded: 0,
                          archived: true,
                          collapsed_reason_code: null,
                          no_follow: false,
                          author: "[deleted]",
                          can_mod_post: false,
                          send_replies: true,
                          parent_id: "t1_ed1su6t",
                          score: 780,
                          approved_by: null,
                          report_reasons: null,
                          all_awardings: [],
                          subreddit_id: "t5_2qh1i",
                          body: "I made my biggest poop of last year right in between Christmas and New year's- first time I could say that I filled the bowl to the waterline",
                          edited: false,
                          author_flair_css_class: null,
                          downs: 0,
                          is_submitter: false,
                          body_html:
                            '&lt;div class="md"&gt;&lt;p&gt;I made my biggest poop of last year right in between Christmas and New year&amp;#39;s- first time I could say that I filled the bowl to the waterline&lt;/p&gt;\n&lt;/div&gt;',
                          gildings: {},
                          collapsed_reason: null,
                          associated_award: null,
                          stickied: false,
                          subreddit_type: "public",
                          can_gild: false,
                          top_awarded_type: null,
                          unrepliable_reason: null,
                          author_flair_text_color: "dark",
                          score_hidden: false,
                          permalink:
                            "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1ye8p/",
                          num_reports: null,
                          locked: false,
                          name: "t1_ed1ye8p",
                          created: 1546396468,
                          subreddit: "AskReddit",
                          author_flair_text: null,
                          treatment_tags: [],
                          collapsed: false,
                          subreddit_name_prefixed: "r/AskReddit",
                          controversiality: 0,
                          depth: 2,
                          author_flair_background_color: "",
                          collapsed_because_crowd_control: null,
                          mod_reports: [],
                          mod_note: null,
                          distinguished: null,
                        },
                      ],
                      more: {
                        has_more: true,
                        cursor: "egos1bd,ef1lv5d,el1tr5b",
                      },
                    },
                    user_reports: [],
                    saved: false,
                    id: "ed1su6t",
                    banned_at_utc: null,
                    mod_reason_title: null,
                    gilded: 0,
                    archived: true,
                    collapsed_reason_code: null,
                    no_follow: false,
                    author: "jofwu",
                    can_mod_post: false,
                    send_replies: true,
                    parent_id: "t1_ed1czme",
                    score: 2415,
                    author_fullname: "t2_6ckuh",
                    removal_reason: null,
                    approved_by: null,
                    mod_note: null,
                    all_awardings: [],
                    body: "Somewhere out there, somebody has made the biggest poop of the year. And they don't even know it. ",
                    edited: false,
                    top_awarded_type: null,
                    author_flair_css_class: null,
                    name: "t1_ed1su6t",
                    is_submitter: false,
                    downs: 0,
                    author_flair_richtext: [],
                    author_patreon_flair: false,
                    body_html:
                      '&lt;div class="md"&gt;&lt;p&gt;Somewhere out there, somebody has made the biggest poop of the year. And they don&amp;#39;t even know it. &lt;/p&gt;\n&lt;/div&gt;',
                    gildings: {},
                    collapsed_reason: null,
                    distinguished: null,
                    associated_award: null,
                    stickied: false,
                    author_premium: false,
                    can_gild: false,
                    link_id: "t3_ablzuq",
                    unrepliable_reason: null,
                    author_flair_text_color: null,
                    score_hidden: false,
                    permalink:
                      "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1su6t/",
                    subreddit_type: "public",
                    locked: false,
                    report_reasons: null,
                    created: 1546391589,
                    author_flair_text: null,
                    treatment_tags: [],
                    collapsed: false,
                    subreddit_name_prefixed: "r/AskReddit",
                    controversiality: 0,
                    depth: 1,
                    author_flair_background_color: null,
                    collapsed_because_crowd_control: null,
                    mod_reports: [],
                    num_reports: null,
                    ups: 2415,
                  },
                ],
                more: {
                  has_more: true,
                  cursor:
                    "ed1lvsa,ed3fnpq,ed25l2w,ed2bzid,ed2do8g,eda7sqp,es4scjk,edjv4rx,efp5ww0,eh8q0ke,em7lhme,epkr3k2,epu6jcz,er6c3si,errghbq,ef687ye",
                },
              },
              user_reports: [],
              saved: false,
              id: "ed1czme",
              banned_at_utc: null,
              mod_reason_title: null,
              gilded: 2,
              archived: true,
              collapsed_reason_code: null,
              no_follow: false,
              author: "sweatybeard",
              can_mod_post: false,
              send_replies: true,
              parent_id: "t3_ablzuq",
              score: 12211,
              author_fullname: "t2_cep2k",
              approved_by: null,
              mod_note: null,
              all_awardings: [],
              collapsed: false,
              body: "But when I finally do, it'll be the years biggest shit ^^^^^so ^^^^^far",
              edited: false,
              top_awarded_type: null,
              author_flair_css_class: null,
              name: "t1_ed1czme",
              is_submitter: false,
              downs: 0,
              author_flair_richtext: [],
              author_patreon_flair: false,
              body_html:
                '&lt;div class="md"&gt;&lt;p&gt;But when I finally do, it&amp;#39;ll be the years biggest shit &lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;so&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt; &lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;far&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/p&gt;\n&lt;/div&gt;',
              removal_reason: null,
              collapsed_reason: null,
              distinguished: null,
              associated_award: null,
              stickied: false,
              author_premium: false,
              can_gild: false,
              gildings: {},
              unrepliable_reason: null,
              author_flair_text_color: null,
              score_hidden: false,
              permalink:
                "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1czme/",
              subreddit_type: "public",
              locked: false,
              report_reasons: null,
              created: 1546378524,
              author_flair_text: null,
              treatment_tags: [],
              link_id: "t3_ablzuq",
              subreddit_name_prefixed: "r/AskReddit",
              controversiality: 0,
              depth: 0,
              author_flair_background_color: null,
              collapsed_because_crowd_control: null,
              mod_reports: [],
              num_reports: null,
              ups: 12211,
            },
          ],
          more: {
            has_more: true,
            cursor: "ed1jhoi,ed1f3kw,ed1qgjh,ed1e4vd,ed1benx",
          },
        },
      },
      // {
      //   name: "Simple Comments",
      //   method: "GET",
      //   description:
      //     "Convenience API to get the number of comments you want from a Reddit post.",
      //   path: "/v1/reddit/post/comments/simple",
      //   credits: {
      //     type: "per_item",
      //     cost: 1,
      //     per: 48,
      //   },
      //   sampleResponse: [
      //     {
      //       subreddit_id: "t5_2qh1i",
      //       approved_at_utc: null,
      //       author_is_blocked: false,
      //       comment_type: null,
      //       awarders: [],
      //       mod_reason_by: null,
      //       banned_by: null,
      //       author_flair_type: "text",
      //       total_awards_received: 0,
      //       subreddit: "AskReddit",
      //       author_flair_template_id: null,
      //       likes: null,
      //       user_reports: [],
      //       saved: false,
      //       id: "ed1czme",
      //       banned_at_utc: null,
      //       mod_reason_title: null,
      //       gilded: 2,
      //       archived: true,
      //       collapsed_reason_code: null,
      //       no_follow: false,
      //       author: "sweatybeard",
      //       can_mod_post: false,
      //       created_utc: 1546378524,
      //       send_replies: true,
      //       parent_id: "t3_ablzuq",
      //       score: 12207,
      //       author_fullname: "t2_cep2k",
      //       approved_by: null,
      //       mod_note: null,
      //       all_awardings: [],
      //       collapsed: false,
      //       body: "But when I finally do, it'll be the years biggest shit ^^^^^so ^^^^^far",
      //       edited: false,
      //       top_awarded_type: null,
      //       author_flair_css_class: null,
      //       name: "t1_ed1czme",
      //       is_submitter: false,
      //       downs: 0,
      //       author_flair_richtext: [],
      //       author_patreon_flair: false,
      //       body_html:
      //         '&lt;div class="md"&gt;&lt;p&gt;But when I finally do, it&amp;#39;ll be the years biggest shit &lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;so&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt; &lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;&lt;sup&gt;far&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/sup&gt;&lt;/p&gt;\n&lt;/div&gt;',
      //       removal_reason: null,
      //       collapsed_reason: null,
      //       distinguished: null,
      //       associated_award: null,
      //       stickied: false,
      //       author_premium: false,
      //       can_gild: false,
      //       gildings: {},
      //       unrepliable_reason: null,
      //       author_flair_text_color: null,
      //       score_hidden: false,
      //       permalink:
      //         "/r/AskReddit/comments/ablzuq/people_who_havent_pooped_in_2019_yet_why_are_you/ed1czme/",
      //       subreddit_type: "public",
      //       locked: false,
      //       report_reasons: null,
      //       created: 1546378524,
      //       author_flair_text: null,
      //       treatment_tags: [],
      //       link_id: "t3_ablzuq",
      //       subreddit_name_prefixed: "r/AskReddit",
      //       controversiality: 0,
      //       depth: 0,
      //       author_flair_background_color: null,
      //       collapsed_because_crowd_control: null,
      //       mod_reports: [],
      //       num_reports: null,
      //       ups: 12207,
      //     },
      //   ],
      //   trimmedResponse: [
      //     {
      //       id: "mymupxb",
      //       author: "Background-Emu-2890",
      //       author_fullname: "t2_efdlposp6",
      //       body: "Black cat i have one and i love her so much !",
      //       name: "t1_mymupxb",
      //       created_utc: 1750342221,
      //       created_at_iso: "2025-06-19T14:10:21.000Z",
      //       parent_id: "t3_1lfbo7u",
      //       url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymupxb/",
      //       ups: 73,
      //       downs: 0,
      //       score: 73,
      //     },
      //     {
      //       id: "mymxwde",
      //       author: "doublestitch",
      //       author_fullname: "t2_10py0g",
      //       body: "House panthers for the win",
      //       name: "t1_mymxwde",
      //       created_utc: 1750343166,
      //       created_at_iso: "2025-06-19T14:26:06.000Z",
      //       parent_id: "t1_mymupxb",
      //       url: "https://www.reddit.com/r/AskReddit/comments/1lfbo7u/what_is_a_thing_you_love_that_lots_of_people_hate/mymxwde/",
      //       ups: 19,
      //       downs: 0,
      //       score: 19,
      //     },
      //   ],
      //   params: [
      //     {
      //       name: "url",
      //       type: "string",
      //       required: true,
      //       description: "Reddit post URL",
      //     },
      //     {
      //       name: "amount",
      //       type: "number",
      //       required: false,
      //       description: "Number of comments to return",
      //       placeholder: 10,
      //     },
      //     {
      //       name: "trim",
      //       type: "boolean",
      //       required: false,
      //       description:
      //         "Set to true for a trimmed down version of the response",
      //       placeholder: "false",
      //     },
      //   ],
      // },
      {
        name: "Search",
        method: "GET",
        description: "Search Reddit for posts",
        fullDescription:
          "Searches across all of Reddit for posts matching a query. Each post includes title, author, selftext, subreddit, score, ups, upvote_ratio, num_comments, created_utc, url, permalink, and is_video. Supports sort (relevance, new, top, comment_count), timeframe filtering, pagination via the after token, and a trim parameter for lighter responses.",
        path: "/v1/reddit/search",
        paginationField: "after",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Search query",
          },
          {
            name: "sort",
            type: "select",
            required: false,
            description: "Sort by",
            placeholder: "relevance",
            options: ["relevance", "new", "top", "comment_count"],
          },
          {
            name: "timeframe",
            type: "select",
            required: false,
            description: "Timeframe",
            placeholder: "all",
            options: ["all", "day", "week", "month", "year"],
          },
          {
            name: "after",
            type: "string",
            required: false,
            description: "Used to paginate to next page",
            placeholder: "t3_1i8z28z",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              approved_at_utc: null,
              subreddit: "webscraping",
              selftext: "1. Don't try putting scraping tools in Lambda.",
              author_fullname: "t2_b88jvxe1",
              saved: false,
              mod_reason_title: null,
              gilded: 0,
              clicked: false,
              title:
                "After 2 months learning scraping, I'm sharing what I learned!",
              link_flair_richtext: [],
              subreddit_name_prefixed: "r/webscraping",
              hidden: false,
              pwls: 6,
              link_flair_css_class: null,
              downs: 0,
              thumbnail_height: null,
              top_awarded_type: null,
              hide_score: false,
              name: "t3_1flgwup",
              quarantine: false,
              link_flair_text_color: "dark",
              upvote_ratio: 0.99,
              author_flair_background_color: null,
              subreddit_type: "public",
              ups: 361,
              total_awards_received: 0,
              media_embed: {},
              thumbnail_width: null,
              author_flair_template_id: null,
              is_original_content: false,
              user_reports: [],
              secure_media: null,
              is_reddit_media_domain: false,
              is_meta: false,
              category: null,
              secure_media_embed: {},
              link_flair_text: null,
              can_mod_post: false,
              score: 361,
              approved_by: null,
              is_created_from_ads_ui: false,
              author_premium: false,
              thumbnail: "self",
              edited: 1726964065,
              author_flair_css_class: null,
              author_flair_richtext: [],
              gildings: {},
              content_categories: null,
              is_self: true,
              mod_note: null,
              created: 1726851591,
              link_flair_type: "text",
              wls: 6,
              removed_by_category: null,
              banned_by: null,
              author_flair_type: "text",
              domain: "self.webscraping",
              allow_live_comments: false,
              selftext_html:
                '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;ol&gt;\n&lt;li&gt;Don&amp;#39;t try putting scraping tools in Lambda.',
              likes: null,
              suggested_sort: null,
              banned_at_utc: null,
              view_count: null,
              archived: true,
              no_follow: false,
              is_crosspostable: false,
              pinned: false,
              over_18: false,
              all_awardings: [],
              awarders: [],
              media_only: false,
              can_gild: false,
              spoiler: false,
              locked: false,
              author_flair_text: null,
              treatment_tags: [],
              visited: false,
              removed_by: null,
              num_reports: null,
              distinguished: null,
              subreddit_id: "t5_318ly",
              author_is_blocked: false,
              mod_reason_by: null,
              removal_reason: null,
              link_flair_background_color: "",
              id: "1flgwup",
              is_robot_indexable: true,
              report_reasons: null,
              author: "Sea_Cardiologist_212",
              discussion_type: null,
              num_comments: 102,
              send_replies: true,
              contest_mode: false,
              mod_reports: [],
              author_patreon_flair: false,
              author_flair_text_color: null,
              permalink:
                "/r/webscraping/comments/1flgwup/after_2_months_learning_scraping_im_sharing_what/",
              stickied: false,
              url: "https://www.reddit.com/r/webscraping/comments/1flgwup/after_2_months_learning_scraping_im_sharing_what/",
              subreddit_subscribers: 58838,
              created_utc: 1726851591,
              num_crossposts: 0,
              media: null,
              is_video: false,
              created_at_iso: "2024-09-20T16:59:51.000Z",
            },
          ],
          after: "t3_1ihh437",
        },
        trimmedResponse: {
          success: true,
          posts: [
            {
              id: "w63dgy",
              author: "Morgentau7",
              author_fullname: "t2_2hy2xjit",
              subreddit: "MadeMeSmile",
              title: "Player realizes that he nearly stole the dogs job",
              downs: 0,
              name: "t3_w63dgy",
              upvote_ratio: 0.97,
              ups: 220403,
              total_awards_received: 0,
              score: 220403,
              created: 1658580900,
              num_comments: 1246,
              url: "https://www.reddit.com/r/MadeMeSmile/comments/w63dgy/player_realizes_that_he_nearly_stole_the_dogs_job/",
              subreddit_subscribers: 11605207,
              is_video: true,
              created_utc: 1658580900,
            },
            {
              id: "1fu8hix",
              author: "donnygel",
              author_fullname: "t2_3j0vvghm",
              subreddit: "MadeMeSmile",
              title: "Dogs reaction to arrival of new puppy",
              downs: 0,
              name: "t3_1fu8hix",
              upvote_ratio: 0.79,
              ups: 45240,
              total_awards_received: 0,
              score: 45240,
              created: 1727845148,
              num_comments: 595,
              url: "https://www.reddit.com/r/MadeMeSmile/comments/1fu8hix/dogs_reaction_to_arrival_of_new_puppy/",
              subreddit_subscribers: 11605207,
              is_video: true,
              created_utc: 1727845148,
            },
          ],
          after: "t3_1izmcgx",
        },
      },
      {
        name: "Search Ads",
        method: "GET",
        description:
          "Search the Reddit Ad Library. Can only get a max of 30 ads.",
        fullDescription:
          "Searches the Reddit Ad Library for ads matching a query, returning a maximum of 30 results. Each ad includes id, budget_category, industry, placements, objective, and a creative object with headline, body, thumbnail_url, type, created_at, and post_url. Also includes profile_info with the advertiser's name. Supports filtering by industries, budgets, formats, placements, and objectives.",
        path: "/v1/reddit/ads/search",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Search query",
            placeholder: "Scraping",
          },
          {
            name: "industries",
            type: "select",
            required: false,
            description: "Industries to filter by",
            options: [
              "RETAIL_AND_ECOMMERCE",
              "TECH_B2B",
              "TECH_B2C",
              "EDUCATION",
              "ENTERTAINMENT",
              "GAMING",
              "FINANCIAL_SERVICES",
              "HEALTH_AND_BEAUTY",
              "CONSUMER_PACKAGED_GOODS",
              "EMPLOYMENT",
              "AUTO",
              "TRAVEL",
              "REAL_ESTATE",
              "GAMBLING_AND_FANTASY_SPORTS",
              "POLITICS_AND_GOVERNMENT",
              "OTHER",
            ],
          },
          {
            name: "budgets",
            type: "select",
            required: false,
            description: "Budgets to filter by",
            options: ["LOW", "MEDIUM", "HIGH"],
          },
          {
            name: "formats",
            type: "select",
            required: false,
            description: "Formats to filter by",
            options: ["IMAGE", "VIDEO", "CAROUSEL", "FREE_FORM"],
          },
          {
            name: "placements",
            type: "select",
            required: false,
            description: "Placements to filter by",
            options: ["FEED", "COMMENTS_PAGE"],
          },
          {
            name: "objectives",
            type: "select",
            required: false,
            description: "Objectives to filter by",
            options: [
              "IMPRESSIONS",
              "CLICKS",
              "CONVERSIONS",
              "VIDEO_VIEWABLE_IMPRESSIONS",
              "APP_INSTALLS",
            ],
          },
        ],
        sampleResponse: {
          success: true,
          ads: [
            {
              id: "79e005f1e09ec72245e904d87d2a0869",
              budget_category: "HIGH",
              industry: "OTHER",
              placements: ["FEED", "COMMENTS_PAGE"],
              objective: "CONVERSIONS",
              creative: {
                id: "t3_1cdt7o6",
                type: "TEXT",
                content: [
                  {
                    destination_url: null,
                    display_url: "self.thepennyhoarder",
                    call_to_action: null,
                    media_url: null,
                  },
                ],
                headline:
                  "What is a rich person’s money tip you wish you knew sooner?",
                body: "Life would be a whole lot easier if someone would just Venmo us $1 million, but unfortunately the chance of that happening is, well, probably zero. (Venmo doesn’t allow transactions that large anyway.)\n\nBut even though our chances of becoming a millionaire are slim, we can still manage our money like one. No, we’re not going to tell you how to buy hundreds of shares of Apple stock. Or how to pick out the perfect yacht.\n\nThese are simple money moves any normal, non-millionaire person can make *today*. Each tip can get you closer to achieving your big goals.\n\nTake a look:\n\n# 1. Cancel Your Car Insurance\n\nYou might not even realize it, but your car insurance company is probably overcharging you. In fact, they’re kind of counting on you not noticing. Luckily, this problem is easy to fix. \n\nDon’t waste your time browsing insurance sites for a better deal. A company called[ **Insurify**](https://t.thepennyhoarder.com/aff_ad?campaign_id=319&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) shows you all your options at once — people who do this save up to $996 per year. \n\nIf you tell them a bit about yourself and your vehicle, they’ll send you personalized quotes so you can compare them and find the best one for you.\n\nTired of overpaying for car insurance? It takes just five minutes to compare your options with Insurify and[ **see how much you could save on car insurance.**](https://t.thepennyhoarder.com/aff_ad?campaign_id=319&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit)\n\n# 2. Stop Paying Your Credit Card Company\n\nIf you have credit card debt, *you know*. The anxiety, the interest rates, the fear you’re never going to escape…\n\nAnd the truth is, your credit card company doesn’t really care. It’s just getting rich by ripping you off with high interest rates — some up to 36%. But a website called[ **AmOne**](https://t.thepennyhoarder.com/aff_c?offer_id=6370&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) wants to help.\n\nIf you owe your credit card companies $100,000 or less, AmOne will match you with a low-interest loan you can use to pay off every single one of your balances.\n\nThe benefit? You’ll be left with one bill to pay each month. And because personal loans have lower interest rates (AmOne rates start at 6.40% APR), you’ll get out of debt *that* much faster. Plus: No credit card payment this month.\n\nYou don’t need a perfect credit score to get a loan — and comparing your options won’t affect your score at all. Plus, AmOne keeps your information confidential and secure, which is probably why after 20 years in business, it still has an A+ rating with the Better Business Bureau.\n\nIt takes less than a minute and just 10 questions to[ **see what loans you qualify for**](https://t.thepennyhoarder.com/aff_c?offer_id=6370&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) — you don’t even need to enter your Social Security number. You do need to give AmOne a real phone number in order to qualify, but don’t worry — they won’t spam you with phone calls.\n\n# 3. You Can Become a Real Estate Investor for as Little as $10\n\nTake a look at some of the world’s wealthiest people. What do they have in common? Many invest in large private real estate deals. And here’s the thing: There’s no reason you can’t, too — for as little as $10. \n\n[**An investment called the Fundrise Flagship Fund**](https://t.thepennyhoarder.com/aff_c?offer_id=7384&aff_id=152&source=millionaires-sdyn-prt&aff_sub3=money-secrets-reddit) lets you get started in the world of real estate by giving you access to a low-cost, diversified portfolio of private real estate. The best part? You don’t have to be the landlord. The Flagship Fund does all the heavy lifting.\n\nWith an initial investment as low as $10, your money will be invested in the Fund, which already owns more than $1 billion worth of real estate around the country, from apartment complexes to the thriving housing rental market to larger last-mile e-commerce logistics centers.\n\nWant to invest more? Many investors choose to invest $1,000 or more. This is a Fund that can fit any type of investor’s needs. Once invested, you can track your performance from your phone and watch as properties are acquired, improved, and operated. As properties generate cash flow, you could earn money through quarterly dividend payments. And over time, you could earn money off the potential appreciation of the properties. \n\nSo if you want to get started in the world of real-estate investing, it takes just a few minutes to [**sign up and create an account with the Fundrise Flagship Fund**](http://t.thepennyhoarder.com/aff_c?offer_id=7384&aff_id=152&source=millionaires-sdyn-prt&aff_sub3=money-secrets-reddit).\n\n# 4. Get One Month of Free High-Speed Internet (and Pay as Little as $40/Month After That)\n\nThere are some bills you just can’t avoid. For most of us, that includes our internet bill. Your provider knows it’s pretty hard to go without it these days — that’s why so many of us are overpaying. \n\nBut with[ Metro by T-Mobile](https://t.thepennyhoarder.com/aff_c?offer_id=7522&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit), you can get high-speed, 5G home internet for as little as \\*$40 a month. No credit check, no deposit, and they won’t lock you into a contract that hikes up your price after your first year, either. \n\nYou’re probably thinking there’s some catch, but they’ll let you try it out for 14 days to see if you like it. If not, you’ll get your money back. You don’t even have to worry about breaking up with your current provider — T-Mobile will pay up to $750 in termination fees.\n\nEven better? When you switch now, get one month free after the rebate and purchase your equipment for just $24.99 (usually $49.99).\n\nSwitch to Metro by T-Mobile and get 5G Home Internet from Metro for $40/mo with AutoPay. Just[ enter your address and phone number here](https://t.thepennyhoarder.com/aff_c?offer_id=7522&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) to see if you qualify.\n\n# 5. Get Paid $225/Month While Watching Movie Previews\n\n# If we told you that you could get paid while watching videos on your computer, you’d probably laugh.\n\nIt’s too good to be true, right?\n\nBut we’re serious. By signing up for a free account with[ **InboxDollars**](https://t.thepennyhoarder.com/aff_c?offer_id=3421&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit), you could add up to $225 a month to your pocket. They’ll send you short surveys every day, which you can fill out while you watch someone bake brownies or catch up on the latest Kardashian drama.\n\nNo, InboxDollars won’t replace your full-time job, but it’s something easy you can do while you’re already on the couch tonight, wasting time on your phone.\n\nUnlike other sites, InboxDollars pays you in cash — no points or gift cards. It’s already paid its users more than $56 million.\n\nSigning up takes about one minute, and you’ll immediately receive[ **a $5 bonus**](https://t.thepennyhoarder.com/aff_c?offer_id=3421&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) to get you started.\n\n# 6. Killing Time? Earn up to $107 Per Win Playing Solitaire on Your Phone\n\nThere’s nothing wrong with killing a little free time on your phone. A lot of us pull up a mobile game on our break, on the couch or on long drives. But we found a game that will actually pay you to do it.\n\n[**A free iPhone app called Solitaire Smash**](https://t.thepennyhoarder.com/aff_ad?campaign_id=304&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit) will pay you up to $107 per win just for playing Solitaire online. Right now, when you add $10 to your account, Solitaire Smash will give you a $5 bonus to use in cash tournaments plus 1,000 gems.\n\nIt works just like the card game you already know, but it adds a timer to mix, and you’ll play against other players at your same skill level. The top three players win a prize. You can play casually for gems or compete for real money prize pools — up to $107 per win. Plus, they have a 4.9 star rating on the App Store.\n\nWant to see if you can turn $10 to $107 in your free time? Just download Solitaire Smash to get [**start playing and see how much money you can win**](https://t.thepennyhoarder.com/aff_ad?campaign_id=304&aff_id=152&source=money-secrets-prt-reddit&aff_sub3=money-secrets-reddit).",
                thumbnail_url:
                  "https://b.thumbs.redditmedia.com/9gzdjvf9fDu1vN2zxxVrvGqOJizhLf80W701zzkml2k.jpg",
                allow_comments: false,
                created_at: "2024-04-26T18:47:57+00:00",
                profile_id: "t2_3usby",
                post_url:
                  "https://www.reddit.com/r/u_thepennyhoarder/comments/1cdt7o6/what_is_a_rich_persons_money_tip_you_wish_you/",
              },
              profile_info: {
                name: "u_thepennyhoarder",
                snoovatar_icon_url:
                  "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png",
              },
            },
          ],
        },
      },
      {
        name: "Get Ad",
        method: "GET",
        description: "Get a specific ad by id",
        fullDescription:
          "Retrieves detailed information about a specific Reddit ad by its id. Returns an analysis_summary with headline and media insights, plus the full inspiration_creative object containing id, budget_category, industry, placements, objective, and creative details (headline, body, type, thumbnail_url, created_at, post_url). Also includes profile_info with the advertiser's name.",
        path: "/v1/reddit/ad",
        params: [
          {
            name: "id",
            type: "string",
            required: true,
            description: "Ad id",
            placeholder: "79e005f1e09ec72245e904d87d2a0869",
          },
        ],
        sampleResponse: {
          success: true,
          data: {
            analysis_summary: {
              headline: [
                "Direct Question/Engagement: The headline poses a direct question to the reader. This is highly effective on Reddit as it immediately invites user participation and sparks curiosity. It encourages users to think about the topic and potentially share their own experiences or insights in the comments, aligning with Reddit's interactive and discussion-focused nature. This direct engagement fosters a sense of community and encourages users to click to find out more or participate in the conversation.",
                'Intrigue/Curiosity Gap: The headline uses the phrase "rich person’s money tip" creating a sense of mystery. This builds intrigue and taps into the user\'s desire to gain insider knowledge or learn something valuable. This resonates with Redditors who are often interested in learning new things, self-improvement, and financial literacy. The "wish you knew sooner" component further amplifies this curiosity, implying that the answer could save time or money.',
                'Relatability/Aspiration: The headline addresses a common desire: financial success. The phrase "rich person’s money tip" is aspirational, appealing to the audience\'s aspirations and goals. This creates a relatable hook that makes the ad relevant to a broad range of users, especially in subreddits related to finance, personal development, or career advice. It speaks to a universal desire for financial security and knowledge, positioning the ad as potentially offering valuable information.',
              ],
              media: [],
            },
            inspiration_creative: {
              id: "79e005f1e09ec72245e904d87d2a0869",
              budget_category: "HIGH",
              industry: "OTHER",
              placements: ["FEED", "COMMENTS_PAGE"],
              objective: "CONVERSIONS",
              creative: {
                id: "t3_1cdt7o6",
                type: "TEXT",
                content: [
                  {
                    destination_url: null,
                    display_url: "self.thepennyhoarder",
                    call_to_action: null,
                    media_url: null,
                  },
                ],
                headline:
                  "What is a rich person’s money tip you wish you knew sooner?",
                body: "Life would be a whole lot easier if someone would just Venmo us $1 million, but unfortunately the chance of that happening is, well, probably zero.",
                thumbnail_url:
                  "https://b.thumbs.redditmedia.com/9gzdjvf9fDu1vN2zxxVrvGqOJizhLf80W701zzkml2k.jpg",
                allow_comments: false,
                created_at: "2024-04-26T18:47:57+00:00",
                profile_id: "t2_3usby",
                post_url:
                  "https://www.reddit.com/r/u_thepennyhoarder/comments/1cdt7o6/what_is_a_rich_persons_money_tip_you_wish_you/",
              },
              profile_info: {
                name: "u_thepennyhoarder",
                snoovatar_icon_url:
                  "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png",
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "truthsocial",
    name: "Truth Social",
    description:
      "As of 8/27/2025, Truth Social is only letting you view the public profile/posts of prominent users (like Trump and Vance), but requiring auth for everyone else. So sadly most other accounts will not work :(",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get Truth Social profile info",
        fullDescription:
          "Retrieves a Truth Social user's public profile including display_name, username, avatar, header, followers_count, following_count, statuses_count, verified status, website, and created_at. Only prominent public figures (e.g., Trump, Vance) are accessible without authentication; most other accounts will not work.",
        path: "/v1/truthsocial/profile",
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Truth Social username",
            placeholder: "realDonaldTrump",
          },
        ],
        sampleResponse: {
          success: true,
          id: "107780257626128497",
          username: "realDonaldTrump",
          acct: "realDonaldTrump",
          display_name: "Donald J. Trump",
          locked: false,
          bot: false,
          discoverable: null,
          group: false,
          created_at: "2022-02-11T16:16:57.705Z",
          note: "<p></p>",
          url: "https://truthsocial.com/@realDonaldTrump",
          avatar:
            "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
          avatar_static:
            "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
          header:
            "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
          header_static:
            "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
          followers_count: 9528475,
          following_count: 72,
          statuses_count: 26249,
          last_status_at: "2025-04-10",
          verified: true,
          location: "",
          website: "www.DonaldJTrump.com",
          accepting_messages: false,
          chats_onboarded: true,
          feeds_onboarded: true,
          tv_onboarded: false,
          bookmarks_onboarded: false,
          show_nonmember_group_statuses: false,
          pleroma: { accepts_chat_messages: false },
          tv_account: false,
          receive_only_follow_mentions: false,
          emojis: [],
          fields: [],
        },
      },
      {
        name: "User Posts",
        method: "GET",
        description:
          "As of 8/27/2025, Truth Social is only letting you view the public profile/posts of prominent users (like Trump and Vance), but requiring auth for everyone else. So sadly most other accounts will not work :(",
        fullDescription:
          "Fetches a paginated list of posts from a Truth Social user, returning text, id, created_at, url, content, account info, media_attachments, card link previews, replies_count, reblogs_count, and favourites_count. Supports pagination via next_max_id and a trim option for lighter responses. Only prominent public figures (e.g., Trump, Vance) are accessible without authentication.",
        path: "/v1/truthsocial/user/posts",
        paginationField: "next_max_id",
        params: [
          {
            name: "handle",
            type: "string",
            required: false,
            description: "Truth Social username",
            placeholder: "realDonaldTrump",
          },
          {
            name: "user_id",
            type: "string",
            required: false,
            description:
              "Truth Social user id. Use this for faster response times. Trumps is 107780257626128497. It is the 'id' field in the profile endpoint.",
            placeholder: "107780257626128497",
          },
          {
            name: "next_max_id",
            type: "string",
            required: false,
            description: "Used to paginate to next page",
            placeholder: "107780257626128497",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              text: "https://www.youtube.com/live/BK2YxPPRqlg?si=LvQtR-YoCJQd059_",
              id: "114315232218538121",
              created_at: "2025-04-10T19:06:55.053Z",
              in_reply_to_id: null,
              quote_id: null,
              in_reply_to_account_id: null,
              sensitive: false,
              spoiler_text: "",
              visibility: "public",
              language: null,
              uri: "https://truthsocial.com/@realDonaldTrump/114315232218538121",
              url: "https://truthsocial.com/@realDonaldTrump/114315232218538121",
              content:
                '<p><a href="https://www.youtube.com/live/BK2YxPPRqlg?si=LvQtR-YoCJQd059_" rel="nofollow noopener noreferrer" target="_blank"><span class="invisible">https://www.</span><span class="ellipsis">youtube.com/live/BK2YxPPRqlg?s</span><span class="invisible">i=LvQtR-YoCJQd059_</span></a></p>',
              account: {
                id: "107780257626128497",
                username: "realDonaldTrump",
                acct: "realDonaldTrump",
                display_name: "Donald J. Trump",
                locked: false,
                bot: false,
                discoverable: false,
                group: false,
                created_at: "2022-02-11T16:16:57.705Z",
                note: "<p></p>",
                url: "https://truthsocial.com/@realDonaldTrump",
                avatar:
                  "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
                avatar_static:
                  "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
                header:
                  "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
                header_static:
                  "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
                followers_count: 9528800,
                following_count: 72,
                statuses_count: 26249,
                last_status_at: "2025-04-10",
                verified: true,
                location: "",
                website: "www.DonaldJTrump.com",
                unauth_visibility: true,
                chats_onboarded: true,
                feeds_onboarded: true,
                accepting_messages: false,
                show_nonmember_group_statuses: null,
                emojis: [],
                fields: [],
                tv_onboarded: false,
                tv_account: false,
              },
              media_attachments: [],
              mentions: [],
              tags: [],
              card: {
                id: null,
                url: "https://www.youtube.com/live/BK2YxPPRqlg?si=LvQtR-YoCJQd059_",
                title:
                  "Trump holds Cabinet meeting after House passes budget bill",
                description:
                  "President Donald Trump holds a Cabinet meeting after Republicans narrowly passed his 'big, beautiful' budget bill. #politics #trump #foxnews Subscribe to Fox...",
                type: "video",
                author_name: "",
                author_url: "",
                provider_name: "www.youtube.com",
                provider_url: "",
                html: '<iframe src="https://www.youtube.com/embed/BK2YxPPRqlg" width="1280" height="720" allowtransparency="true" scrolling="no" frameborder="0"></iframe>',
                width: 1280,
                height: 720,
                image:
                  "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/cache/preview_cards/images/052/070/680/original/04aa67804597eebe.jpg",
                embed_url: "",
                blurhash: "UECr=-~VXmWAiaROIUS1^jxuaJRjI=kWx]xu",
                links: null,
                group: null,
              },
              group: null,
              quote: null,
              in_reply_to: null,
              reblog: null,
              sponsored: false,
              replies_count: 601,
              reblogs_count: 1607,
              favourites_count: 6282,
              favourited: false,
              reblogged: false,
              muted: false,
              pinned: false,
              bookmarked: false,
              poll: null,
              emojis: [],
            },
          ],
          next_max_id: "114308258545250117",
        },
        trimmedResponse: {
          success: true,
          posts: [
            {
              id: "114712957163880045",
              text: "",
              created_at: "2025-06-20T00:53:36.183Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114712957163880045",
              replies_count: 58,
              reblogs_count: 165,
              favourites_count: 630,
              upvotes_count: 630,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114712956416948688",
                  type: "video",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/956/416/948/688/original/3f067916e3c0c704.mp4",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/thumbnails/114/712/956/416/948/688/original/6e823189e7100622.jpg",
                  external_video_id: "v6surln",
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    colors: {
                      accent: "#e4e1ec",
                      background: "#1d1c22",
                      foreground: "#e4e1ec",
                    },
                    original: {
                      bitrate: 1682510,
                      duration: 138.176,
                      frame_rate: "25/1",
                      height: 720,
                      width: 1280,
                    },
                    small: {
                      aspect: 1.7783333333333333,
                      height: 600,
                      size: "1067x600",
                      width: 1067,
                    },
                  },
                  description: null,
                  blurhash: "UE9%rEt9%ObH_4RibIRjtQWBjbjaNFoft7WB",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114712955851152888",
              text: "",
              created_at: "2025-06-20T00:53:16.148Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114712955851152888",
              replies_count: 38,
              reblogs_count: 143,
              favourites_count: 572,
              upvotes_count: 572,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114712955428045443",
                  type: "video",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/955/428/045/443/original/0d75d2498c1847e0.mp4",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/thumbnails/114/712/955/428/045/443/original/40883a4217def8c5.jpg",
                  external_video_id: "v6surlh",
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    colors: {
                      accent: "#ae9070",
                      background: "#1a151b",
                      foreground: "#cbc0b9",
                    },
                    original: {
                      bitrate: 3893707,
                      duration: 11.981497,
                      frame_rate: "60/1",
                      height: 1920,
                      width: 1080,
                    },
                    small: {
                      aspect: 0.5625,
                      height: 480,
                      size: "270x480",
                      width: 270,
                    },
                  },
                  description: null,
                  blurhash: "UGELT:L1#mtR.8$*IosV0LRQxYELI[-AS}w|",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114712741765922456",
              text: "“Lowest Inflation In 4 Years.” Kevin Hassett",
              created_at: "2025-06-19T23:58:49.433Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712741765922456",
              replies_count: 618,
              reblogs_count: 1426,
              favourites_count: 6723,
              upvotes_count: 6723,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712684243270785",
              text: "@IStandWithTrump47 Depart of Treasury just announced the largest BLUE COLLAR WAGE GROWTH IN OVER 60 YEARS. WOW!",
              created_at: "2025-06-19T23:44:11.704Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712684243270785",
              replies_count: 457,
              reblogs_count: 1843,
              favourites_count: 8468,
              upvotes_count: 8468,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712677345450404",
              text: "https://truthsocial.com/@IStandWithTrump47/114712545280392185",
              created_at: "2025-06-19T23:42:26.454Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114712677345450404",
              replies_count: 363,
              reblogs_count: 1662,
              favourites_count: 6804,
              upvotes_count: 6804,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712560416441760",
              text: "https://truthsocial.com/@IStandWithTrump47/114712550508860920Thank you!!! DJT",
              created_at: "2025-06-19T23:12:42.261Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712560416441760",
              replies_count: 295,
              reblogs_count: 1050,
              favourites_count: 5170,
              upvotes_count: 5170,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712540442241175",
              text: "https://truthsocial.com/users/IStandWithTrump47/statuses/114702951355454133Thanks you so much, but the Republicans have a GREAT Party. They are working hard to Make America Great Again!",
              created_at: "2025-06-19T23:07:37.476Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712540442241175",
              replies_count: 333,
              reblogs_count: 1244,
              favourites_count: 6334,
              upvotes_count: 6334,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712528194867476",
              text: "https://truthsocial.com/users/IStandWithTrump47/statuses/114704185977774129",
              created_at: "2025-06-19T23:04:30.597Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114712528194867476",
              replies_count: 572,
              reblogs_count: 2472,
              favourites_count: 7978,
              upvotes_count: 7978,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712526244120651",
              text: "https://truthsocial.com/users/ChrisMartineauAuthor/statuses/114704308722829409",
              created_at: "2025-06-19T23:04:00.834Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114712526244120651",
              replies_count: 330,
              reblogs_count: 1585,
              favourites_count: 7838,
              upvotes_count: 7838,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712523496772999",
              text: "Too many non-working holidays in America. It is costing our Country $BILLIONS OF DOLLARS to keep all of these businesses closed. The workers don’t want it either! Soon we’ll end up having a holiday for every once working day of the year. It must change if we are going to, MAKE AMERICA GREAT AGAIN!",
              created_at: "2025-06-19T23:03:18.910Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712523496772999",
              replies_count: 1823,
              reblogs_count: 2452,
              favourites_count: 10481,
              upvotes_count: 10481,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712424314242751",
              text: "Just approved storm damage money for the Great State of Tennessee. Alabama, Arkansas, and North Carolina among the other states that were previously approved. My honor to do so! DJT",
              created_at: "2025-06-19T22:38:05.506Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712424314242751",
              replies_count: 551,
              reblogs_count: 2520,
              favourites_count: 11480,
              upvotes_count: 11480,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114712258815748546",
              text: "Congratulations to Mya Lesnar on the WIN — Great Genetics!",
              created_at: "2025-06-19T21:56:00.154Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114712258815748546",
              replies_count: 469,
              reblogs_count: 1371,
              favourites_count: 7269,
              upvotes_count: 7269,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114712079754339789",
                  type: "image",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/079/754/339/789/original/b3837654ae2ca05e.jpg",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/079/754/339/789/small/b3837654ae2ca05e.jpg",
                  external_video_id: null,
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    original: {
                      aspect: 0.7910447761194029,
                      height: 1139,
                      size: "901x1139",
                      width: 901,
                    },
                    small: {
                      aspect: 0.7908787541713015,
                      height: 899,
                      size: "711x899",
                      width: 711,
                    },
                  },
                  description: null,
                  blurhash: "UVKAvhR6e.x[~WV[ayWUxvo}ofnhEktRf6WV",
                  processing: "complete",
                },
                {
                  id: "114712079754339788",
                  type: "image",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/079/754/339/788/original/94bb0384d0fba436.png",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/712/079/754/339/788/small/94bb0384d0fba436.png",
                  external_video_id: null,
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    original: {
                      aspect: 0.9988358556461001,
                      height: 859,
                      size: "858x859",
                      width: 858,
                    },
                    small: {
                      aspect: 0.99875,
                      height: 800,
                      size: "799x800",
                      width: 799,
                    },
                  },
                  description: null,
                  blurhash: "UbGI=ZX8XlRj~WnPRks:o#oIbbf*tlkBt7ae",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114711949674671760",
              text: "“Trump Admin Moves To Bulldoze Biden-Era Mining Rule” https://dailycaller.com/2025/06/13/trump-admin-moves-to-bulldoze-biden-era-mining-rule/",
              created_at: "2025-06-19T20:37:23.080Z",
              language: "gl",
              url: "https://truthsocial.com/@realDonaldTrump/114711949674671760",
              replies_count: 607,
              reblogs_count: 2661,
              favourites_count: 11501,
              upvotes_count: 11501,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114711899645287088",
              text: "“NAVY RECRUITMENT ‘SKYROCKETS’ UNDER TRUMP’S LEADERSHIP”“The U.S. Navy has achieved its fiscal year 2025 recruiting goal three months ahead of schedule, positioning the maritime service branch to send more than 40,000 future Sailors to basic training by the end of the summer…” https://www.foxnews.com/us/navy-recruitment-skyrockets-under-trumps-leadership-official-says",
              created_at: "2025-06-19T20:24:39.695Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114711899645287088",
              replies_count: 614,
              reblogs_count: 2998,
              favourites_count: 13391,
              upvotes_count: 13391,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114711860495264455",
              text: "Vice President JD Vance: “I'm proud to announce with HHS Secretary Robert F. Kennedy Jr. and NIH Director Jay Bhattacharya that the Trump Administration is launching a program to study long-term health effects of the chemical spill in East Palestine, OH and help residents access the care they need. East Palestine, we will never forget you.”",
              created_at: "2025-06-19T20:14:42.346Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114711860495264455",
              replies_count: 807,
              reblogs_count: 4320,
              favourites_count: 17466,
              upvotes_count: 17466,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114711858960241198",
                  type: "video",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/858/960/241/198/original/62082a4ff1c8e485.mp4",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/thumbnails/114/711/858/960/241/198/original/e945a965f405ac5a.jpg",
                  external_video_id: "v6suem9",
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    colors: {
                      accent: "#cdccbd",
                      background: "#0c0c12",
                      foreground: "#cdccbd",
                    },
                    original: {
                      bitrate: 181088,
                      duration: 283.492426,
                      frame_rate: "24000/1001",
                      height: 336,
                      width: 640,
                    },
                    small: {
                      aspect: 1.9047619047619047,
                      height: 252,
                      size: "480x252",
                      width: 480,
                    },
                  },
                  description: null,
                  blurhash: "U87nB,aK0Loy_2WDD*t3IoR-ofxZ9aWC$*t7",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114711841928660368",
              text: "“A union representing nearly 20,000 Border Patrol agents declared its support for President Donald Trump’s ‘big, beautiful bill,’ hailing the legislation as an ‘investment’ in America’s border security…” https://www.dailywire.com/news/exclusive-border-patrol-union-praises-big-beautiful-bill-for-border-security-investments",
              created_at: "2025-06-19T20:09:59.010Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114711841928660368",
              replies_count: 363,
              reblogs_count: 2807,
              favourites_count: 12309,
              upvotes_count: 12309,
              downvotes_count: 0,
              media_attachments: [],
            },
            {
              id: "114711408841746658",
              text: "",
              created_at: "2025-06-19T18:19:50.652Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114711408841746658",
              replies_count: 1928,
              reblogs_count: 3822,
              favourites_count: 16560,
              upvotes_count: 16560,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114711408498533932",
                  type: "video",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/408/498/533/932/original/6345d203e0e6c60b.mp4",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/thumbnails/114/711/408/498/533/932/original/8fd8bccfe87ccbdb.jpg",
                  external_video_id: "v6su8pd",
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    colors: {
                      accent: "#f1f5f8",
                      background: "#0a1123",
                      foreground: "#f1f5f8",
                    },
                    original: {
                      bitrate: 655496,
                      duration: 107.748333,
                      frame_rate: "32310000/1077817",
                      height: 720,
                      width: 1280,
                    },
                    small: {
                      aspect: 1.7783333333333333,
                      height: 600,
                      size: "1067x600",
                      width: 1067,
                    },
                  },
                  description: null,
                  blurhash: "UEDl.{kPrBTf8xl8-nT0~X%#={NGMdX-=|kW",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114711204952191010",
              text: "YOU EARNED IT, YOU KEEP IT—NO TAX ON TIPS! https://www.whitehouse.gov/past-events/president-trump-gives-speech-on-no-tax-on-tips-policy-in-las-vegas/",
              created_at: "2025-06-19T17:27:59.549Z",
              language: "en",
              url: "https://truthsocial.com/@realDonaldTrump/114711204952191010",
              replies_count: 1329,
              reblogs_count: 4198,
              favourites_count: 19024,
              upvotes_count: 19024,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114711194782667892",
                  type: "video",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/194/782/667/892/original/d2bbc15baa5fdc92.mp4",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/thumbnails/114/711/194/782/667/892/original/4ba1fc9c5804f3c8.jpg",
                  external_video_id: "v6su5rd",
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    colors: {
                      accent: "#cbcfd0",
                      background: "#616761",
                      foreground: "#cbcfd0",
                    },
                    original: {
                      bitrate: 375314,
                      duration: 21.972042,
                      frame_rate: "30/1",
                      height: 720,
                      width: 1280,
                    },
                    small: {
                      aspect: 1.7783333333333333,
                      height: 600,
                      size: "1067x600",
                      width: 1067,
                    },
                  },
                  description: null,
                  blurhash: "UCFPW%kD00Mx%MaeWBt7D$xuM|xu?bkCRjad",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114711191075769627",
              text: "",
              created_at: "2025-06-19T17:24:27.814Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114711191075769627",
              replies_count: 1242,
              reblogs_count: 3328,
              favourites_count: 17356,
              upvotes_count: 17356,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114711190769000473",
                  type: "image",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/190/769/000/473/original/55c9ca84bd9b0cdc.jpg",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/190/769/000/473/small/55c9ca84bd9b0cdc.jpg",
                  external_video_id: null,
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    original: {
                      aspect: 0.7996469549867609,
                      height: 1133,
                      size: "906x1133",
                      width: 906,
                    },
                    small: {
                      aspect: 0.7997762863534675,
                      height: 894,
                      size: "715x894",
                      width: 715,
                    },
                  },
                  description: null,
                  blurhash: "UKECwao200tR_3M{Rjxu4nM{?bof-.WCW?bF",
                  processing: "complete",
                },
              ],
            },
            {
              id: "114711182786951532",
              text: "",
              created_at: "2025-06-19T17:22:21.339Z",
              language: null,
              url: "https://truthsocial.com/@realDonaldTrump/114711182786951532",
              replies_count: 585,
              reblogs_count: 3742,
              favourites_count: 16753,
              upvotes_count: 16753,
              downvotes_count: 0,
              media_attachments: [
                {
                  id: "114711182366782719",
                  type: "image",
                  url: "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/182/366/782/719/original/d3233e6a26b70958.jpg",
                  preview_url:
                    "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/media_attachments/files/114/711/182/366/782/719/small/d3233e6a26b70958.jpg",
                  external_video_id: null,
                  remote_url: null,
                  preview_remote_url: null,
                  text_url: null,
                  meta: {
                    original: {
                      aspect: 0.9114043355325165,
                      height: 1061,
                      size: "967x1061",
                      width: 967,
                    },
                    small: {
                      aspect: 0.9116945107398569,
                      height: 838,
                      size: "764x838",
                      width: 764,
                    },
                  },
                  description: null,
                  blurhash: "UAExeM4o0|6_9d?FX6m-^*oeRkxuz=EMOqrs",
                  processing: "complete",
                },
              ],
            },
          ],
          next_max_id: "114711182786951532",
        },
      },
      {
        name: "Post",
        method: "GET",
        description: "Get Truth Social post",
        fullDescription:
          "Fetches a single Truth Social post by URL, returning text, id, created_at, url, content, account details, media_attachments, card link previews, replies_count, reblogs_count, and favourites_count. Only posts from prominent public figures (e.g., Trump, Vance) are accessible without authentication.",
        path: "/v1/truthsocial/post",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Truth Social post URL",
            placeholder:
              "https://truthsocial.com/@realDonaldTrump/posts/114315219437063160",
          },
        ],
        sampleResponse: {
          success: true,
          text: "It’s so hard to watch as Highly Qualified and Respected Ambassadors, who we desperately need representing our Country in Faraway Lands, are purposefully meant to wait as the Democrat Senators take maximum time for every single one of them, even though they were confirmed with Bipartisan Support, also at maximum time, and only done to hurt our Country. A process that should take a matter of minutes is forced into taking months, making it very hard on the new Ambassadors’ families, and not good, at all, for the Good Ole’ U.S.A. In a true sense, in numerous cases, what they do is actually a Threat to National Security. John Thune and the Republicans are doing a great job, but nothing much can be done when the Democrats make everyone sit, day after day, pushing the limits. The level of hostility is not to be believed!",
          id: "114315219437063160",
          created_at: "2025-04-10T19:03:40.023Z",
          in_reply_to_id: null,
          quote_id: null,
          in_reply_to_account_id: null,
          sensitive: false,
          spoiler_text: "",
          visibility: "public",
          language: "en",
          uri: "https://truthsocial.com/@realDonaldTrump/114315219437063160",
          url: "https://truthsocial.com/@realDonaldTrump/114315219437063160",
          content:
            "<p>It’s so hard to watch as Highly Qualified and Respected Ambassadors, who we desperately need representing our Country in Faraway Lands, are purposefully meant to wait as the Democrat Senators take maximum time for every single one of them, even though they were confirmed with Bipartisan Support, also at maximum time, and only done to hurt our Country. A process that should take a matter of minutes is forced into taking months, making it very hard on the new Ambassadors’ families, and not good, at all, for the Good Ole’ U.S.A. In a true sense, in numerous cases, what they do is actually a Threat to National Security. John Thune and the Republicans are doing a great job, but nothing much can be done when the Democrats make everyone sit, day after day, pushing the limits. The level of hostility is not to be believed!</p>",
          account: {
            id: "107780257626128497",
            username: "realDonaldTrump",
            acct: "realDonaldTrump",
            display_name: "Donald J. Trump",
            locked: false,
            bot: false,
            discoverable: false,
            group: false,
            created_at: "2022-02-11T16:16:57.705Z",
            note: "<p></p>",
            url: "https://truthsocial.com/@realDonaldTrump",
            avatar:
              "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
            avatar_static:
              "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
            header:
              "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
            header_static:
              "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
            followers_count: 9528704,
            following_count: 72,
            statuses_count: 26249,
            last_status_at: "2025-04-10",
            verified: true,
            location: "",
            website: "www.DonaldJTrump.com",
            unauth_visibility: true,
            chats_onboarded: true,
            feeds_onboarded: true,
            accepting_messages: false,
            show_nonmember_group_statuses: null,
            emojis: [],
            fields: [],
            tv_onboarded: false,
            tv_account: false,
          },
          media_attachments: [],
          mentions: [],
          tags: [],
          card: null,
          group: null,
          quote: null,
          in_reply_to: null,
          reblog: null,
          sponsored: false,
          replies_count: 797,
          reblogs_count: 2423,
          favourites_count: 8552,
          favourited: false,
          reblogged: false,
          muted: false,
          pinned: false,
          bookmarked: false,
          poll: null,
          emojis: [],
        },
      },
      // {
      //   name: "Webhook",
      //   method: "POST",
      //   description:
      //     "Webhook to immediately get notified when Trump posts something. Costs $500/month. Email me to get this setup: support@scrapecreators.com. The sample response is the response we'll send to your webhook_url. Make sure your webhook accepts a POST request.",
      //   path: "/v1/truthsocial/webhook",
      //   params: [],
      //   bodyParams: [
      //     {
      //       name: "webhook_url",
      //       type: "string",
      //       required: true,
      //       description: "The URL we will send the post notifications to",
      //     },
      //   ],
      //   sampleResponse: {
      //     success: true,
      //     message: "New post found",
      //     post: {
      //       text: "As per letters sent to various countries yesterday, in addition to letters that will be sent today, tomorrow, and for the next short period of time, TARIFFS WILL START BEING PAID ON AUGUST 1, 2025. There has been no change to this date, and there will be no change. In other words, all money will be due and payable starting AUGUST 1, 2025 - No extensions will be granted. Thank you for your attention to this matter!",
      //       id: "114818149310161097",
      //       created_at: "2025-07-08T14:45:20.916Z",
      //       in_reply_to_id: null,
      //       quote_id: null,
      //       in_reply_to_account_id: null,
      //       sensitive: false,
      //       spoiler_text: "",
      //       visibility: "public",
      //       language: "en",
      //       uri: "https://truthsocial.com/@realDonaldTrump/114818149310161097",
      //       url: "https://truthsocial.com/@realDonaldTrump/114818149310161097",
      //       content:
      //         "<p>As per letters sent to various countries yesterday, in addition to letters that will be sent today, tomorrow, and for the next short period of time, TARIFFS WILL START BEING PAID ON AUGUST 1, 2025. There has been no change to this date, and there will be no change. In other words, all money will be due and payable starting AUGUST 1, 2025 - No extensions will be granted. Thank you for your attention to this matter!</p>",
      //       account: {
      //         id: "107780257626128497",
      //         username: "realDonaldTrump",
      //         acct: "realDonaldTrump",
      //         display_name: "Donald J. Trump",
      //         locked: false,
      //         bot: false,
      //         discoverable: false,
      //         group: false,
      //         created_at: "2022-02-11T16:16:57.705Z",
      //         note: "<p></p>",
      //         url: "https://truthsocial.com/@realDonaldTrump",
      //         avatar:
      //           "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
      //         avatar_static:
      //           "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/avatars/107/780/257/626/128/497/original/454286ac07a6f6e6.jpeg",
      //         header:
      //           "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
      //         header_static:
      //           "https://static-assets-1.truthsocial.com/tmtg:prime-ts-assets/accounts/headers/107/780/257/626/128/497/original/ba3b910ba387bf4e.jpeg",
      //         followers_count: 10331063,
      //         following_count: 72,
      //         statuses_count: 27697,
      //         last_status_at: "2025-07-08",
      //         verified: true,
      //         location: "",
      //         website: "www.DonaldJTrump.com",
      //         unauth_visibility: true,
      //         chats_onboarded: true,
      //         feeds_onboarded: true,
      //         accepting_messages: false,
      //         show_nonmember_group_statuses: false,
      //         emojis: [],
      //         fields: [],
      //         tv_onboarded: false,
      //         tv_account: false,
      //         premium: true,
      //       },
      //       media_attachments: [],
      //       mentions: [],
      //       tags: [],
      //       card: null,
      //       group: null,
      //       quote: null,
      //       in_reply_to: null,
      //       reblog: null,
      //       sponsored: false,
      //       replies_count: 1899,
      //       reblogs_count: 4145,
      //       favourites_count: 19208,
      //       reaction: null,
      //       upvotes_count: 19208,
      //       downvotes_count: 0,
      //       favourited: false,
      //       reblogged: false,
      //       muted: false,
      //       pinned: false,
      //       bookmarked: false,
      //       poll: null,
      //       emojis: [],
      //       votable: false,
      //     },
      //   },
      // },
      // {
      //   name: "Test Webhook",
      //   method: "GET",
      //   description:
      //     "Send this simple GET request to test your webhook. It will return a sample response to your webhook_url to verify your integration works as expected.",
      //   path: "/v1/truthsocial/webhook/test",
      //   params: [],
      //   sampleResponse: {
      //     success: true,
      //     message: "Test webhook sent successfully",
      //   },
      // },
    ],
  },
  {
    id: "threads",
    name: "Threads",
    description: "Get Threads posts",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get Threads profile info",
        fullDescription:
          "Retrieves a Threads user's public profile including username, full_name, biography, profile_pic_url, follower_count, is_verified, bio_links, and hd_profile_pic_versions. Also indicates whether the account is a threads-only user via is_threads_only_user.",
        path: "/v1/threads/profile",
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Threads username",
            placeholder: "trendspider",
          },
        ],
        sampleResponse: {
          success: true,
          pk: "63496592589",
          text_post_app_is_private: false,
          has_onboarded_to_text_post_app: true,
          friendship_status: null,
          profile_pic_url:
            "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/483433564_655589117415062_7541542786235693538_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHDtD3999Ou4pcMMH7DERwg7b_8MUH39VGHj-ZYaqdB2I3m-ESqs1jnoXQnYBB1LuxmAKVJiGexqr1KcbyKld_3&_nc_ohc=jnD03vDTtYoQ7kNvwH8q9Xl&_nc_gid=El4dvFdafrjTWXuQgkba9Q&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfGGVFQMzxW19jgaoPNQhfTiZt4Hrkmgq1cnt5iWpEGqxA&oe=67FFAFC8&_nc_sid=10d13b",
          username: "sportsillustrated",
          text_post_app_remove_mention_entrypoint: null,
          show_text_post_app_replies_tab: true,
          text_app_custom_feeds: null,
          gating: null,
          follower_count: 551296,
          profile_context_facepile_users: null,
          hd_profile_pic_versions: [
            {
              height: 320,
              url: "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/483433564_655589117415062_7541542786235693538_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHDtD3999Ou4pcMMH7DERwg7b_8MUH39VGHj-ZYaqdB2I3m-ESqs1jnoXQnYBB1LuxmAKVJiGexqr1KcbyKld_3&_nc_ohc=jnD03vDTtYoQ7kNvwH8q9Xl&_nc_gid=El4dvFdafrjTWXuQgkba9Q&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfFikDi79lRI5uOb6TB0xYEkQwPWwZ1haHqpW4B-uDFVMw&oe=67FFAFC8&_nc_sid=10d13b",
              width: 320,
            },
            {
              height: 640,
              url: "https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/483433564_655589117415062_7541542786235693538_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHDtD3999Ou4pcMMH7DERwg7b_8MUH39VGHj-ZYaqdB2I3m-ESqs1jnoXQnYBB1LuxmAKVJiGexqr1KcbyKld_3&_nc_ohc=jnD03vDTtYoQ7kNvwH8q9Xl&_nc_gid=El4dvFdafrjTWXuQgkba9Q&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfHaea-juiWKmF1ZQ8jqLChn2I7DFahePe61ubiHiQDNqw&oe=67FFAFC8&_nc_sid=10d13b",
              width: 640,
            },
          ],
          is_verified: true,
          biography: "Sports, sports and more sports.",
          text_app_biography: {
            text_fragments: {
              fragments: [
                {
                  fragment_type: "plaintext",
                  link_fragment: null,
                  mention_fragment: null,
                  plaintext: "Sports, sports and more sports.",
                  tag_fragment: null,
                  linkified_web_url: null,
                },
              ],
            },
          },
          full_name: "Sports Illustrated",
          bio_links: [
            {
              url: "https://lnk.bio/sportsillustrated",
              is_verified: false,
              link_id: "17882982429146262",
            },
          ],
          transparency_label: null,
          is_threads_only_user: false,
          show_text_post_app_badge: true,
          id: "63496592589",
        },
      },
      {
        name: "Posts",
        method: "GET",
        description:
          "Get Threads posts by user. Sadly, Threads only allows you to see the last 20-30ish posts of the user :(",
        fullDescription:
          "Fetches the most recent posts from a Threads user, returning id, caption text, code, like_count, reshare_count, direct_reply_count, repost_count, image_versions2, video_versions, and taken_at. Only the last 20-30 posts are publicly visible. Supports a trim option for lighter responses.",
        path: "/v1/threads/user/posts",
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Threads username",
            placeholder: "trendspider",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              id: "3536667222372268882_63496592589",
              pk: "3536667222372268882",
              user: {
                friendship_status: null,
                pk: "63496592589",
                profile_pic_url:
                  "https://instagram.fagc3-1.fna.fbcdn.net/v/t51.2885-19/483433564_655589117415062_7541542786235693538_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fagc3-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=jnD03vDTtYoQ7kNvwELzAK_&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&oh=00_AfHbOosqbZWxE3XoJdHxywj7ag_Lv3O1ugoM-wCEDhN7Vw&oe=67FFAFC8&_nc_sid=d92198",
                username: "sportsillustrated",
                id: "63496592589",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              text_post_app_info: {
                show_header_follow: false,
                is_markup: false,
                custom_feed_preview_info: null,
                link_preview_attachment: null,
                linked_inline_media: null,
                special_effects_enabled_str: "",
                text_fragments: {
                  fragments: [
                    {
                      fragment_type: "plaintext",
                      link_fragment: null,
                      mention_fragment: null,
                      plaintext:
                        "Simone Biles is SI's 2024 Sportsperson of the Year ⭐️ \n\n(Link in bio for the full story)\n\n📸: Shaniqwa Jarvis",
                      tag_fragment: null,
                      linkified_web_url: null,
                    },
                  ],
                },
                reshare_count: 68,
                direct_reply_count: 159,
                repost_count: 217,
                quote_count: 34,
                share_info: {
                  quoted_attachment_author_attribution_allowed: true,
                  quoted_attachment_post_unavailable: false,
                  quoted_attachment_post: null,
                  quoted_post: null,
                  reposted_post: null,
                },
                reply_to_author: null,
                reply_control: "everyone",
                private_reply_partner: null,
                self_thread_count: 0,
                tag_header: null,
                root_post_author: null,
                pinned_post_info: {
                  is_pinned_to_parent_post: false,
                  is_pinned_to_profile: true,
                },
                related_trends_info: null,
                is_reply: false,
                is_post_unavailable: false,
                post_unavailable_reason: null,
                hush_info: null,
              },
              is_paid_partnership: null,
              audio: null,
              caption: {
                text: "Simone Biles is SI's 2024 Sportsperson of the Year ⭐️ \n\n(Link in bio for the full story)\n\n📸: Shaniqwa Jarvis",
                pk: "18298876294239445",
                has_translation: null,
              },
              caption_is_edited: false,
              transcription_data: null,
              carousel_media: null,
              code: "DEUxBnGRDtS",
              image_versions2: {
                candidates: [
                  {
                    height: 1800,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfH8y4BdfKeEf01rX_Yhg3JNUYFuj49LU39YhNR9OlmUpg&oe=67FFAE26&_nc_sid=d92198",
                    width: 1440,
                  },
                  {
                    height: 1350,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfGDbphjy7bP551bsVPif5IVwTWLiE39ZuwS1FaP5oCaDQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 1080,
                  },
                  {
                    height: 900,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfEaXVRSG22n69ChE6JbT112-ZqDXwAQkgwqe7NPxejspg&oe=67FFAE26&_nc_sid=d92198",
                    width: 720,
                  },
                  {
                    height: 800,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfFgKXHnlqrPNUPO4WAXBn2uO9cK7eRu-mQCmbpnLNibfQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 640,
                  },
                  {
                    height: 600,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfEeYjaHGffUKb2MrHil6p7hlpICBxQIz1yxEnGqr_KlBQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 480,
                  },
                  {
                    height: 400,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfFnGNySg0tNZ-bGbp9FnQKzrF0FB85MOmInU3H_yAt3Xg&oe=67FFAE26&_nc_sid=d92198",
                    width: 320,
                  },
                  {
                    height: 300,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=dst-jpg_e35_p240x240_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfF4gRtB_0xrz1VQmYzraCelxqiE0QedQSYoIwRSRacoqQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 240,
                  },
                  {
                    height: 864,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfGCJmlOfcd4XIc4DHWG7BxNXayvOy4Jm79WBu0GiyJaYQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 864,
                  },
                  {
                    height: 600,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s750x750_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfGFGcPqPRgao3rAdS9tQMGL_ajm565U3BD8fwGJG8EuRg&oe=67FFAE26&_nc_sid=d92198",
                    width: 600,
                  },
                  {
                    height: 512,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfELeGv-YRvHW-15tdI-n9pekWDzUw6BW83FQdgqyBWcYg&oe=67FFAE26&_nc_sid=d92198",
                    width: 512,
                  },
                  {
                    height: 384,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfHWfOo9wW9sTgLehBWufjuHLcCEvR74uA8-1m_JtikzuQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 384,
                  },
                  {
                    height: 256,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfEdRLb5P5CdEi7QPOHsFtYRTRcwMmvIQqxQJp_FD7rKjQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 256,
                  },
                  {
                    height: 192,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s240x240_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfEChIkAF4izYJF89EqLLiAJ_mUJ63fjmsjYjgA7AYq5Rg&oe=67FFAE26&_nc_sid=d92198",
                    width: 192,
                  },
                  {
                    height: 120,
                    url: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/472489066_2077627656087388_7846806389795963931_n.heic?stp=c0.180.1440.1440a_dst-jpg_e35_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTQ0MHgxODAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHcczHlv29K5xU0LBifeewOrJvAKx7W63Jfcjf_TENrX8HjPcD8l2s2qnW12RTYxF8&_nc_ohc=A0u782EyAUUQ7kNvwECMUd6&_nc_gid=-7dksam693JUhZyL3E138g&edm=AA3DLpEBAAAA&ccb=7-5&ig_cache_key=MzUzNjY2NzIyMjM3MjI2ODg4Mg%3D%3D.3-ccb7-5&oh=00_AfEo2Cls0moG6Ha4qZk4u-ZE6WDV0AUydAq8VTdJIWAmMQ&oe=67FFAE26&_nc_sid=d92198",
                    width: 120,
                  },
                ],
              },
              original_height: 1800,
              original_width: 1440,
              accessibility_caption: "No photo description available.",
              video_versions: null,
              has_audio: null,
              media_type: 1,
              caption_add_on: null,
              giphy_media_info: null,
              media_overlay_info: null,
              sharing_friction_info: {
                should_have_sharing_friction: false,
                sharing_friction_payload: null,
              },
              like_count: 6545,
              metaPlace: null,
              meta_place: null,
              gen_ai_detection_method: null,
              taken_at: 1735823609,
              organic_tracking_token:
                "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNjY3YTNlMzgxN2QwNGMwNmEzMDEzZmZiMzhjMTE1M2UzNTM2NjY3MjIyMzcyMjY4ODgyIn0sInNpZ25hdHVyZSI6IiJ9",
              logging_info_token: null,
              like_and_view_counts_disabled: false,
              url: "https://www.threads.com/@zuck/post/DNQtqzGRWA7",
            },
          ],
        },
        trimmedResponse: {
          success: true,
          posts: [
            {
              id: "3656367813102434565_63055343223",
              pk: "3656367813102434565",
              caption: {
                text: "Spoiler alert: We're testing a way for you to hide spoilers in your Threads posts.",
                pk: "17978979272714446",
                has_translation: null,
              },
              code: "DK-BydcJHkF",
              like_count: 96434,
              taken_at: 1750093031,
              user: {
                friendship_status: null,
                pk: "63055343223",
                profile_pic_url:
                  "https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/452737457_1313286386312102_744138929735022550_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QFGyGWANff-XHjZgOOWs_xNC29qmUTVstyb7y0tS-ajYvJSDJTf5fJ3qHVk4igARGY&_nc_ohc=4jx-dLM0V7UQ7kNvwEKpQFP&_nc_gid=butCRrRE5aFQP4QL-mwt9A&edm=AA3DLpEBAAAA&ccb=7-5&oh=00_AfMVigSXFw6UnanNMOzkIu2vA31TUJ_4uOlpGTH6q3dqTw&oe=685A71CE&_nc_sid=d92198",
                username: "zuck",
                id: "63055343223",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              url: "https://www.threads.com/@zuck/post/DK-BydcJHkF",
            },
            {
              id: "3651986238866779682_63055343223",
              pk: "3651986238866779682",
              caption: {
                text: "We're starting to test DMs on Threads. If you get access to this -- slide through!",
                pk: "18295942969219569",
                has_translation: null,
              },
              code: "DKudiKcRO4i",
              like_count: 11117,
              taken_at: 1749571064,
              user: {
                friendship_status: null,
                pk: "63055343223",
                profile_pic_url:
                  "https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/452737457_1313286386312102_744138929735022550_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QFGyGWANff-XHjZgOOWs_xNC29qmUTVstyb7y0tS-ajYvJSDJTf5fJ3qHVk4igARGY&_nc_ohc=4jx-dLM0V7UQ7kNvwEKpQFP&_nc_gid=butCRrRE5aFQP4QL-mwt9A&edm=AA3DLpEBAAAA&ccb=7-5&oh=00_AfMVigSXFw6UnanNMOzkIu2vA31TUJ_4uOlpGTH6q3dqTw&oe=685A71CE&_nc_sid=d92198",
                username: "zuck",
                id: "63055343223",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              url: "https://www.threads.com/@zuck/post/DKudiKcRO4i",
            },
          ],
        },
      },
      {
        name: "Post",
        method: "GET",
        description:
          "Get a post by url. Also returns comments and related posts.",
        fullDescription:
          "Fetches a single Threads post by URL, returning the post's caption, like_count, view_counts, reshare_count, direct_reply_count, image_versions2, and taken_at. Also includes comments and related_posts arrays. Supports a trim option for lighter responses.",
        path: "/v1/threads/post",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "The URL of the post to get",
            placeholder:
              "https://www.threads.com/@trendspider/post/DIU8naHS6q_",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          post: {
            id: "3608775792320555711_63069450921",
            pk: "3608775792320555711",
            user: {
              friendship_status: null,
              pk: "63069450921",
              profile_pic_url:
                "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/358000025_988841669212235_3183384987691331022_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHENKKl6jQlD4P2ykD1kdjgJzgIifGHZXsUsCgsnHpH1p2-XeWT1cLGjrqVGxoPbnE&_nc_ohc=WkOBPuV5vCQQ7kNvwFgz1og&_nc_gid=szsnblWVDT9LOMmPYXt2zQ&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfEaCFBnIBaZajCxvXpwUmetqErk-ja5mM8XavcDkiYudA&oe=67FFBF55&_nc_sid=10d13b",
              username: "trendspider",
              id: "63069450921",
              transparency_label: null,
              transparency_product: null,
              transparency_product_enabled: false,
              is_verified: false,
              text_post_app_is_private: false,
              has_onboarded_to_text_post_app: true,
            },
            text_post_app_info: {
              show_header_follow: false,
              is_markup: false,
              custom_feed_preview_info: null,
              link_preview_attachment: null,
              linked_inline_media: null,
              special_effects_enabled_str: "",
              text_fragments: {
                fragments: [
                  {
                    fragment_type: "plaintext",
                    link_fragment: null,
                    mention_fragment: null,
                    plaintext:
                      "NVDA 🟢 = 36x P/E\n\nNvidia at $110 today carries the same premium as Nvidia at $15 in 2022.",
                    tag_fragment: null,
                    linkified_web_url: null,
                  },
                ],
              },
              reshare_count: 1,
              direct_reply_count: 6,
              repost_count: 1,
              quote_count: 0,
              share_info: {
                quoted_attachment_author_attribution_allowed: true,
                quoted_attachment_post_unavailable: false,
                quoted_attachment_post: null,
                quoted_post: null,
                reposted_post: null,
              },
              reply_to_author: null,
              reply_control: "everyone",
              private_reply_partner: null,
              self_thread_count: null,
              tag_header: {
                display_name: "NVDA",
                id: "18402789505032695",
              },
              root_post_author: null,
              pinned_post_info: {
                is_pinned_to_parent_post: false,
                is_pinned_to_profile: false,
              },
              related_trends_info: null,
              is_reply: false,
              is_post_unavailable: false,
              post_unavailable_reason: null,
              hush_info: null,
              can_private_reply: false,
              can_reply: false,
            },
            is_paid_partnership: null,
            audio: null,
            caption: {
              text: "NVDA 🟢 = 36x P/E\n\nNvidia at $110 today carries the same premium as Nvidia at $15 in 2022.",
              pk: "18109768954486098",
              has_translation: null,
            },
            caption_is_edited: false,
            transcription_data: null,
            carousel_media: null,
            code: "DIU8naHS6q_",
            image_versions2: {
              candidates: [
                {
                  height: 790,
                  url: "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/489773269_18495263140062925_1435854593842334866_n.jpg?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InRocmVhZHMuRkVFRC5pbWFnZV91cmxnZW4uMTA3OXg3OTAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2QHENKKl6jQlD4P2ykD1kdjgJzgIifGHZXsUsCgsnHpH1p2-XeWT1cLGjrqVGxoPbnE&_nc_ohc=DWmq_LhK8ooQ7kNvwH3FuBe&_nc_gid=szsnblWVDT9LOMmPYXt2zQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzYwODc3NTc5MjMyMDU1NTcxMQ%3D%3D.3-ccb7-5&oh=00_AfGt93ejDNUbdHZMQ3yRJis7UnkYXfc4BQxHGvRH5flHEg&oe=67FFB4BA&_nc_sid=10d13b",
                  width: 1079,
                },
              ],
            },
            original_height: 790,
            original_width: 1079,
            accessibility_caption:
              "May be an image of ‎text that says '‎TrendSpider Spider NVDA, Daily, Candles WVDA,Daily,Candleschart chart nVIDIA @ NVDADAILYCHART NVDA DAILY CHART 110.56 P/ERatio(Trailing),Daily Ratio Ratio(Trailing),Da (Trailing) Daily 153xP/E P/E 153x ب 96x 96xP/E P/E 91xP/E 79xP/E 71xP/E 67xP/E 57xP/E hwn ยุรันม-- سي 36P/E 36. 6.952 952‎'‎",
            video_versions: null,
            has_audio: null,
            media_type: 1,
            caption_add_on: null,
            giphy_media_info: null,
            media_overlay_info: null,
            sharing_friction_info: {
              should_have_sharing_friction: false,
              sharing_friction_payload: null,
            },
            like_count: 28,
            metaPlace: null,
            meta_place: null,
            gen_ai_detection_method: null,
            taken_at: 1744419624,
            organic_tracking_token:
              "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiZjg1MDQ3MWU2ZWQzNDgxMTg2M2ZiMmUyYTIyNzE0YTIzNjA4Nzc1NzkyMzIwNTU1NzExIn0sInNpZ25hdHVyZSI6IiJ9",
            logging_info_token: null,
            like_and_view_counts_disabled: false,
            view_counts: 52438
          },
          comments: [
            {
              id: "3623864305260810977_63153846014",
              pk: "3623864305260810977",
              user: {
                friendship_status: null,
                pk: "63153846014",
                profile_pic_url:
                  "https://scontent-det1-1.cdninstagram.com/v/t51.2885-19/487938413_586751564386772_308932070682954511_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-det1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QFYEfpxZTcQhZTyV95qWqHgk3p4LEFPLr8l8yaZwOGP5hqqDb0Kyz_sN3iJJzb40oQ&_nc_ohc=akb7Cbt_r9UQ7kNvwGU6P3C&_nc_gid=OfmrVcoHB4ICHVuWQqHDcA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfEj8UU9jnyu2kQZeNPqt7e5bOORgAc6kgxv1zrDh8L_Ng&oe=681B44F9&_nc_sid=10d13b",
                username: "gringo.ronin",
                id: "63153846014",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: false,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              text_post_app_info: {
                show_header_follow: false,
                is_markup: false,
                custom_feed_preview_info: null,
                link_preview_attachment: null,
                linked_inline_media: null,
                special_effects_enabled_str: "",
                text_fragments: {
                  fragments: [
                    {
                      fragment_type: "plaintext",
                      link_fragment: null,
                      mention_fragment: null,
                      plaintext: "UNLIMITED FIREPOWAHHH",
                      tag_fragment: null,
                      linkified_web_url: null,
                      styling_info: null,
                    },
                  ],
                },
                reshare_count: null,
                direct_reply_count: 0,
                repost_count: 0,
                quote_count: 0,
                share_info: {
                  quoted_attachment_author_attribution_allowed: true,
                  quoted_attachment_post_unavailable: false,
                  quoted_attachment_post: null,
                  quoted_post: null,
                  reposted_post: null,
                },
                reply_to_author: {
                  username: "culturecrave",
                  id: "63097619970",
                },
                reply_control: "everyone",
                private_reply_partner: null,
                self_thread_count: null,
                tag_header: null,
                root_post_author: {
                  pk: "63097619970",
                  id: "63097619970",
                },
                pinned_post_info: {
                  is_pinned_to_parent_post: false,
                  is_pinned_to_profile: false,
                },
                related_trends_info: null,
                is_reply: true,
                is_post_unavailable: false,
                post_unavailable_reason: null,
                hush_info: null,
                can_private_reply: false,
                can_reply: false,
              },
              is_paid_partnership: null,
              audio: null,
              caption: {
                text: "UNLIMITED FIREPOWAHHH",
                pk: "18094020853595608",
                has_translation: null,
              },
              caption_is_edited: false,
              transcription_data: null,
              carousel_media: null,
              code: "DJKjWK1SdLh",
              image_versions2: {
                candidates: [],
              },
              original_height: 612,
              original_width: 612,
              accessibility_caption: null,
              video_versions: null,
              has_audio: null,
              media_type: 19,
              caption_add_on: null,
              giphy_media_info: null,
              media_overlay_info: null,
              sharing_friction_info: {
                should_have_sharing_friction: false,
                sharing_friction_payload: null,
              },
              like_count: 11,
              metaPlace: null,
              meta_place: null,
              gen_ai_detection_method: null,
              taken_at: 1746218310,
              organic_tracking_token:
                "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiM2M1ZDI4NWNmZDg4NDM1MWJhM2JjMGZkNzRhNDlhY2QzNjIzODY0MzA1MjYwODEwOTc3In0sInNpZ25hdHVyZSI6IiJ9",
              logging_info_token: null,
              like_and_view_counts_disabled: false,
            },
          ],
          relatedPosts: [
            {
              id: "3608818157045893190_63438622220",
              pk: "3608818157045893190",
              user: {
                friendship_status: null,
                pk: "63438622220",
                profile_pic_url:
                  "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/90841686_1704287249714138_8421203722285088768_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QGKmxHCQeEziyqUxwpwsUM42533onLy6ChINs5Zae8ofWiiSfVzZ8pxcN9tOv6C_Kw&_nc_ohc=T22RbvNM4mMQ7kNvwHskFAE&_nc_gid=szsnblWVDT9LOMmPYXt2zQ&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfG9PqzPXDCvZ46dcLMI8NU6iFMaUrbt23yOEBSctT0XCQ&oe=67FF9BC0&_nc_sid=10d13b",
                username: "jim.chuong",
                id: "63438622220",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              text_post_app_info: {
                show_header_follow: false,
                is_markup: false,
                custom_feed_preview_info: null,
                link_preview_attachment: null,
                linked_inline_media: null,
                special_effects_enabled_str: "",
                text_fragments: {
                  fragments: [
                    {
                      fragment_type: "plaintext",
                      link_fragment: null,
                      mention_fragment: null,
                      plaintext:
                        "There is no reason to fear a market collapse.\n\nIn the End nobody leaves with anything anyway.\n\nEnjoy the process.",
                      tag_fragment: null,
                      linkified_web_url: null,
                    },
                  ],
                },
                reshare_count: null,
                direct_reply_count: 0,
                repost_count: 0,
                quote_count: 0,
                share_info: {
                  quoted_attachment_author_attribution_allowed: true,
                  quoted_attachment_post_unavailable: false,
                  quoted_attachment_post: null,
                  quoted_post: null,
                  reposted_post: null,
                },
                reply_to_author: null,
                reply_control: "everyone",
                private_reply_partner: null,
                self_thread_count: null,
                tag_header: null,
                root_post_author: null,
                pinned_post_info: {
                  is_pinned_to_parent_post: false,
                  is_pinned_to_profile: false,
                },
                related_trends_info: null,
                is_reply: false,
                is_post_unavailable: false,
                post_unavailable_reason: null,
                hush_info: null,
              },
              is_paid_partnership: null,
              audio: null,
              caption: {
                text: "There is no reason to fear a market collapse.\n\nIn the End nobody leaves with anything anyway.\n\nEnjoy the process.",
                pk: "18051538439260564",
                has_translation: null,
              },
              caption_is_edited: false,
              transcription_data: null,
              carousel_media: null,
              code: "DIVGP5Vs0hG",
              image_versions2: {
                candidates: [],
              },
              original_height: 612,
              original_width: 612,
              accessibility_caption: null,
              video_versions: null,
              has_audio: null,
              media_type: 19,
              caption_add_on: null,
              giphy_media_info: null,
              media_overlay_info: null,
              sharing_friction_info: {
                should_have_sharing_friction: false,
                sharing_friction_payload: null,
              },
              like_count: 3,
              metaPlace: null,
              meta_place: null,
              gen_ai_detection_method: null,
              taken_at: 1744424670,
              organic_tracking_token:
                "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiMTE2OTU0YmU4MGI5NGU4NGJkYjg5N2RlNzBlMDI4NjUzNjA4ODE4MTU3MDQ1ODkzMTkwIn0sInNpZ25hdHVyZSI6IiJ9",
              logging_info_token: null,
              like_and_view_counts_disabled: false,
            },
          ],
        },
        trimmedResponse: {
          success: true,
          post: {
            id: "3656367813102434565_63055343223",
            pk: "3656367813102434565",
            caption: {
              text: "Spoiler alert: We're testing a way for you to hide spoilers in your Threads posts.",
              pk: "17978979272714446",
              has_translation: null,
            },
            code: "DK-BydcJHkF",
            like_count: 96439,
            taken_at: 1750093031,
            user: {
              pk: "63055343223",
              friendship_status: null,
              profile_pic_url:
                "https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/452737457_1313286386312102_744138929735022550_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QEI0Na315cY5sOYUkhVVibfgPAW-ui7qHsdVtzXBXEOhzW7Bng-EMYZTcNDR7NhzDw&_nc_ohc=4jx-dLM0V7UQ7kNvwF5pEvj&_nc_gid=08CADhHYLnZPoVapLCtXQw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfMJZBcCbhMdKKqnrXmtnhF3bwCCjEU85Z3Ih0GWNi5t6A&oe=685A71CE&_nc_sid=10d13b",
              username: "zuck",
              id: "63055343223",
              full_name: "Mark Zuckerberg",
              transparency_label: null,
              transparency_product: null,
              transparency_product_enabled: false,
              is_verified: true,
              text_post_app_is_private: false,
              has_onboarded_to_text_post_app: true,
            },
          },
          comments: [
            {
              id: "3658534918151603488_74973899807",
              pk: "3658534918151603488",
              caption: {
                text: "意味分からない",
                pk: "18306832783208063",
                has_translation: true,
              },
              code: "DLFuh_SygUg",
              like_count: 0,
              taken_at: 1750351370,
              user: {
                pk: "74973899807",
                friendship_status: null,
                profile_pic_url:
                  "https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/491446152_17850244230449803_8764028655689505242_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QEI0Na315cY5sOYUkhVVibfgPAW-ui7qHsdVtzXBXEOhzW7Bng-EMYZTcNDR7NhzDw&_nc_ohc=04OF9jMRuJoQ7kNvwF4M8X7&_nc_gid=08CADhHYLnZPoVapLCtXQw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfOd6QqjNHAV2HNKm-I63jqf58-6kNsVTzATgKyd-iN3zw&oe=685A9A82&_nc_sid=10d13b",
                username: "emimimi_0917",
                id: "74973899807",
                full_name: "青木恵美",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
            },
          ],
          relatedPosts: [
            {
              id: "3658572865166656590_63453315755",
              pk: "3658572865166656590",
              caption: {
                text: "Initial findings of investigation into overnight ground explosion of SpaceX Starship rocket in Texas point to failure of a Composite Overwrapped Pressure Vessel (COPV), a lightweight storage tank containing nitrogen under high pressure. 🖥️ X/Elon Musk",
                pk: "18345028147091883",
                has_translation: null,
              },
              code: "DLF3KMNJERO",
              like_count: 15,
              taken_at: 1750355893,
              user: {
                pk: "63453315755",
                friendship_status: null,
                profile_pic_url:
                  "https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/402757276_161160320414682_3222955945465557227_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QGJAk0S-TOHB3ZWl6ci1q6t2XxgndYS-k6upqywpT-gXu8dlcxmH69UxCueQ9PIqQw&_nc_ohc=J3L5lDaaNDIQ7kNvwGO73Uq&_nc_gid=08CADhHYLnZPoVapLCtXQw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfMkWFXtSlvnwHnBZKBb9eFnleArkHhYt6m32PRKXpKNPA&oe=685AA3CD&_nc_sid=10d13b",
                username: "jonathanserrie",
                id: "63453315755",
                full_name: "Jonathan Serrie",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
            },
          ],
        },
      },
      {
        name: "Search by Keyword",
        method: "GET",
        description:
          "Search for posts by keyword. Sadly Threads only publicly returns only 10 results at a time :( We can only scrape public data, so sadly this is all we can get at once. Run multiple times per day to get more results.",
        fullDescription:
          "Searches Threads for posts matching a keyword, returning up to 10 results with caption text, like_count, reshare_count, direct_reply_count, user info, and image_versions2. Supports optional start_date and end_date filters plus a trim option. Only 10 results are returned per request due to public API limitations.",
        path: "/v1/threads/search",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Keyword to search for",
            placeholder: "basketball",
          },
          {
            name: "start_date",
            type: "string",
            required: false,
            description: "Start date to search for",
            placeholder: "2026-01-01",
          },
          {
            name: "end_date",
            type: "string",
            required: false,
            description: "End date to search for",
            placeholder: "2026-01-01",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          posts: [
            {
              id: "3623717915788120086_63263616227",
              pk: "3623717915788120086",
              user: {
                friendship_status: null,
                pk: "63263616227",
                profile_pic_url:
                  "https://instagram.fcae1-1.fna.fbcdn.net/v/t51.2885-19/482795192_3376548399146227_6340123271493467395_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcae1-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFfhhbPZWsd0GfT28z5WO_4qqp0J0TZeg_2rJ1msbR_DS_f6Lu6JdkORdUt7DIkVes&_nc_ohc=SCH32yXVc04Q7kNvwHfg6hS&_nc_gid=DuGtmKyvvrTkwZuS-75tqg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfEGgKt7JWHgrAUYwyj3koqHwPnipcqDXEiz-YsAN4c3Fg&oe=681B5320&_nc_sid=10d13b",
                username: "shams",
                id: "63263616227",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: true,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
              text_post_app_info: {
                show_header_follow: null,
                is_markup: null,
                custom_feed_preview_info: null,
                link_preview_attachment: null,
                linked_inline_media: null,
                special_effects_enabled_str: "",
                text_fragments: {
                  fragments: [
                    {
                      fragment_type: "plaintext",
                      link_fragment: null,
                      mention_fragment: null,
                      plaintext:
                        "BREAKING: Gregg Popovich will no longer be Head Coach of the San Antonio Spurs and is transitioning full-time to Team President, sources told ESPN. The iconic Popovich is a Basketball Hall of Famer, the NBA’s all-time winningest coach, and led the Spurs to five championships.",
                      tag_fragment: null,
                      linkified_web_url: null,
                      styling_info: null,
                    },
                  ],
                },
                reshare_count: 260,
                direct_reply_count: 75,
                repost_count: 200,
                quote_count: 59,
                share_info: {
                  quoted_attachment_author_attribution_allowed: true,
                  quoted_attachment_post_unavailable: false,
                  quoted_attachment_post: null,
                  quoted_post: null,
                  reposted_post: null,
                },
                reply_to_author: null,
                reply_control: "everyone",
                private_reply_partner: null,
                self_thread_count: null,
                tag_header: null,
                root_post_author: null,
                pinned_post_info: null,
                related_trends_info: null,
                is_reply: false,
                is_post_unavailable: false,
                post_unavailable_reason: null,
                hush_info: null,
              },
              is_paid_partnership: null,
              audio: null,
              caption: {
                text: "BREAKING: Gregg Popovich will no longer be Head Coach of the San Antonio Spurs and is transitioning full-time to Team President, sources told ESPN. The iconic Popovich is a Basketball Hall of Famer, the NBA’s all-time winningest coach, and led the Spurs to five championships.",
                pk: "17901829044168955",
                has_translation: null,
              },
              caption_is_edited: false,
              transcription_data: null,
              carousel_media: null,
              code: "DJKCD7AxRAW",
              image_versions2: {
                candidates: [],
              },
              original_height: 612,
              original_width: 612,
              accessibility_caption: null,
              video_versions: null,
              has_audio: null,
              media_type: 19,
              caption_add_on: null,
              giphy_media_info: null,
              media_overlay_info: null,
              sharing_friction_info: {
                should_have_sharing_friction: false,
                sharing_friction_payload: null,
              },
              like_count: 4093,
              metaPlace: null,
              meta_place: null,
              gen_ai_detection_method: null,
              taken_at: 1746200860,
              organic_tracking_token:
                "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiYjgzMzc1NDA2MzU4NDg2OGIyMTFlZDc0NDZkYjdiNDUzNjIzNzE3OTE1Nzg4MTIwMDg2In0sInNpZ25hdHVyZSI6IiJ9",
              logging_info_token: null,
              like_and_view_counts_disabled: false,
            },
          ],
        },
        trimmedResponse: {
          success: true,
          posts: [
            {
              id: "3658605407757558624_71259204903",
              pk: "3658605407757558624",
              caption: {
                text: "This woman selling mini umbrellas shows love to stray cats & dogs & introduces them. She may not have money but is richer than many.🥹🥹",
                pk: "18077403781726333",
                has_translation: null,
              },
              code: "DLF-jv2tmNg",
              like_count: 5419,
              taken_at: 1750359780,
              user: {
                pk: "71259204903",
                friendship_status: null,
                profile_pic_url:
                  "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-19/501402907_17869607802372904_1939177145792832486_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHQ6tqymzxxWWnD3Y69dUStiwPULqhvwrOx1_1jXHmGEOp8LBdxfOkihhVQW0v5NsY&_nc_ohc=FICE0ht7dSAQ7kNvwEXdDzp&_nc_gid=C_fAfqKQ2OEy746wTYa0sw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfPyuWIMTTIwpoiGW4059hDGkyKRW8eVZbUH1Zfzd2xxRw&oe=685AA184&_nc_sid=10d13b",
                username: "mahtabuddinit",
                id: "71259204903",
                full_name: "Mahtab Uddin",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: false,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
            },
            {
              id: "3658620429170515719_73362155129",
              pk: "3658620429170515719",
              caption: {
                text: "Are you a dog lover or a cat lover?\nPersonally i love both\nDOGS OR CATS?",
                pk: "18065623148118808",
                has_translation: null,
              },
              code: "DLGB-Vosh8H",
              like_count: 53,
              taken_at: 1750361563,
              user: {
                pk: "73362155129",
                friendship_status: null,
                profile_pic_url:
                  "https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-19/487344284_1018731380219067_7461786811198236347_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QHQ6tqymzxxWWnD3Y69dUStiwPULqhvwrOx1_1jXHmGEOp8LBdxfOkihhVQW0v5NsY&_nc_ohc=k2R-PjUq_SoQ7kNvwGggBYz&_nc_gid=C_fAfqKQ2OEy746wTYa0sw&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfO3uZE6D7z0-2ZAYtkLBVhsHW8e5S9rhji9n0un3yl94A&oe=685AA8A4&_nc_sid=10d13b",
                username: "elonreevemusk_1950",
                id: "73362155129",
                full_name: "CEO Elon Musk",
                transparency_label: null,
                transparency_product: null,
                transparency_product_enabled: false,
                is_verified: false,
                text_post_app_is_private: false,
                has_onboarded_to_text_post_app: true,
              },
            },
          ],
        },
      },
      {
        name: "Search Users",
        method: "GET",
        description: "Search for users by username",
        fullDescription:
          "Searches for Threads users by username, returning matching profiles with username, full_name, profile_pic_url, is_verified, and pk. Useful for finding user accounts before fetching their profile or posts.",
        path: "/v1/threads/search/users",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Username to search for",
            placeholder: "shams",
          },
        ],
        sampleResponse: {
          success: true,
          users: [
            {
              username: "shams",
              pk: "5951152863",
              is_active_on_text_post_app: true,
              full_name: "Shams Charania",
              profile_pic_url:
                "https://instagram.flas1-2.fna.fbcdn.net/v/t51.2885-19/482795192_3376548399146227_6340123271493467395_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.flas1-2.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QGGqXP9vnbg6p9G1kF4lrIwvuvWx0OeJ6C8nPcAyo-_4m8XC-91nKJBOJb8u0utyuiAJMdjpjH1-dv5DBfEeQFp&_nc_ohc=SCH32yXVc04Q7kNvwEaKg6u&_nc_gid=7vwZl0t6h0jZxQ23lXCMVw&edm=AHhEZX8BAAAA&ccb=7-5&oh=00_AfEIzDlsXrO-ShRXs19ZmpyYb_9IbJC9dWAUyvar-NvZ_A&oe=681B5320&_nc_sid=e8efdc",
              is_verified: true,
              has_onboarded_to_text_post_app: true,
              id: "5951152863",
            },
          ],
        },
      },
    ],
  },
  {
    id: "bluesky",
    name: "Bluesky",
    description: "Get Bluesky posts and profile info",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get Bluesky profile info",
        fullDescription:
          "Retrieves a Bluesky user's public profile including handle, displayName, avatar, description, followersCount, followsCount, postsCount, createdAt, and verification status. The associated field shows counts for lists, feed generators, and starter packs.",
        path: "/v1/bluesky/profile",
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Bluesky handle",
            placeholder: "espn.com",
          },
        ],
        sampleResponse: {
          success: true,
          did: "did:plc:x7d6j54pm22ufehkes6jo4jf",
          handle: "espn.com",
          displayName: "ESPN",
          avatar:
            "https://cdn.bsky.app/img/avatar/plain/did:plc:x7d6j54pm22ufehkes6jo4jf/bafkreie4oxawqqsfzvk47ysr3unsnmviedzpylxmwxnpa534to2bzas4ie@jpeg",
          associated: {
            lists: 0,
            feedgens: 0,
            starterPacks: 0,
            labeler: false,
          },
          labels: [],
          createdAt: "2024-11-25T21:49:49.345Z",
          verification: {
            verifications: [
              {
                issuer: "did:plc:z72i7hdynmk6r22z27h6tvur",
                uri: "at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.graph.verification/3lndppjqgb72f",
                isValid: true,
                createdAt: "2025-04-21T10:44:20.398Z",
              },
            ],
            verifiedStatus: "valid",
            trustedVerifierStatus: "none",
          },
          description: "Serving sports fans. Anytime. Anywhere.",
          indexedAt: "2024-12-19T20:49:48.843Z",
          followersCount: 198477,
          followsCount: 32,
          postsCount: 659,
        },
      },
      {
        name: "Posts",
        method: "GET",
        description:
          "Get Bluesky user posts. Use user_id for faster response times.",
        fullDescription:
          "Fetches a paginated feed of posts from a Bluesky user, returning each post's uri, record text, author info, embed content, replyCount, repostCount, likeCount, quoteCount, and indexedAt. Supports pagination via cursor. Use user_id (the 'did') instead of handle for faster response times.",
        path: "/v1/bluesky/user/posts",
        paginationField: "cursor",
        params: [
          {
            name: "handle",
            type: "string",
            required: false,
            description: "Bluesky handle",
            placeholder: "espn.com",
          },
          {
            name: "user_id",
            type: "string",
            required: false,
            description:
              "Bluesky 'did'. (For some reason Bluesky calls their user ids, 'did' for whatever reason)",
            placeholder: "did:plc:x7d6j54pm22ufehkes6jo4jf",
          },
        ],
        sampleResponse: {
          success: true,
          feed: [
            {
              uri: "at://did:plc:x7d6j54pm22ufehkes6jo4jf/app.bsky.feed.post/3lqdfq7fkvm2g",
              cid: "bafyreibams5wyqdpg2cmmks7lhf5ccxu7hbu24sfatgc53jmb2nun5k5dm",
              author: {
                did: "did:plc:x7d6j54pm22ufehkes6jo4jf",
                handle: "espn.com",
                displayName: "ESPN",
                avatar:
                  "https://cdn.bsky.app/img/avatar/plain/did:plc:x7d6j54pm22ufehkes6jo4jf/bafkreie4oxawqqsfzvk47ysr3unsnmviedzpylxmwxnpa534to2bzas4ie@jpeg",
                labels: [],
                createdAt: "2024-11-25T21:49:49.345Z",
                verification: {
                  verifications: [
                    {
                      issuer: "did:plc:z72i7hdynmk6r22z27h6tvur",
                      uri: "at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.graph.verification/3lndppjqgb72f",
                      isValid: true,
                      createdAt: "2025-04-21T10:44:20.398Z",
                    },
                  ],
                  verifiedStatus: "valid",
                  trustedVerifierStatus: "none",
                },
              },
              record: {
                $type: "app.bsky.feed.post",
                createdAt: "2025-05-29T19:01:20.743Z",
                embed: {
                  $type: "app.bsky.embed.external",
                  card: {
                    description:
                      "The Oilers apparently will have defenseman Mattias Ekholm back in their lineup for Game 5 of the Western Conference finals against the Stars.",
                    thumb: {
                      $type: "blob",
                      ref: {
                        $link:
                          "bafkreihhffgngv4thcnw7sh7o43qnwwyjvfemdlccwalu76r3vnhlbssle",
                      },
                      mimeType: "image/jpeg",
                      size: 158648,
                    },
                    title: "Oilers' Ekholm set for return in Game 5 vs. Stars",
                    uri: "http://spr.ly/63320N4OEy",
                  },
                  external: {
                    description:
                      "The Oilers apparently will have defenseman Mattias Ekholm back in their lineup for Game 5 of the Western Conference finals against the Stars.",
                    thumb: {
                      $type: "blob",
                      ref: {
                        $link:
                          "bafkreihhffgngv4thcnw7sh7o43qnwwyjvfemdlccwalu76r3vnhlbssle",
                      },
                      mimeType: "image/jpeg",
                      size: 158648,
                    },
                    title: "Oilers' Ekholm set for return in Game 5 vs. Stars",
                    uri: "http://spr.ly/63320N4OEy",
                  },
                },
                facets: [],
                text: "Oilers' defenseman Mattias Ekholm is set to return to action Thursday for Game 5 of the Western Conference finals against the Stars.\n\nEkholm has been out of the Oilers' lineup since April 11 with an undisclosed injury.",
              },
              embed: {},
              replyCount: 1,
              repostCount: 0,
              likeCount: 24,
              quoteCount: 1,
              indexedAt: "2025-05-29T19:01:21.645Z",
              labels: [],
            },
          ],
          cursor: "2025-05-22T17:02:02.847Z",
        },
      },
      {
        name: "Post",
        method: "GET",
        description: "Get Bluesky post",
        fullDescription:
          "Fetches a single Bluesky post by URL, returning the post's record text, author info, embed content, replyCount, repostCount, likeCount, and quoteCount. Also includes a replies array with threaded reply posts.",
        path: "/v1/bluesky/post",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Bluesky post URL",
            placeholder: "https://bsky.app/profile/espn.com/post/3lqdfq7fkvm2g",
          },
        ],
        sampleResponse: {
          success: true,
          post: {
            uri: "at://did:plc:x7d6j54pm22ufehkes6jo4jf/app.bsky.feed.post/3lqdfq7fkvm2g",
            cid: "bafyreibams5wyqdpg2cmmks7lhf5ccxu7hbu24sfatgc53jmb2nun5k5dm",
            author: {
              did: "did:plc:x7d6j54pm22ufehkes6jo4jf",
              handle: "espn.com",
              displayName: "ESPN",
              avatar:
                "https://cdn.bsky.app/img/avatar/plain/did:plc:x7d6j54pm22ufehkes6jo4jf/bafkreie4oxawqqsfzvk47ysr3unsnmviedzpylxmwxnpa534to2bzas4ie@jpeg",
              labels: [],
              createdAt: "2024-11-25T21:49:49.345Z",
              verification: {
                verifications: [
                  {
                    issuer: "did:plc:z72i7hdynmk6r22z27h6tvur",
                    uri: "at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.graph.verification/3lndppjqgb72f",
                    isValid: true,
                    createdAt: "2025-04-21T10:44:20.398Z",
                  },
                ],
                verifiedStatus: "valid",
                trustedVerifierStatus: "none",
              },
            },
            record: {
              $type: "app.bsky.feed.post",
              createdAt: "2025-05-29T19:01:20.743Z",
              embed: {
                $type: "app.bsky.embed.external",
                card: {
                  description:
                    "The Oilers apparently will have defenseman Mattias Ekholm back in their lineup for Game 5 of the Western Conference finals against the Stars.",
                  thumb: {
                    $type: "blob",
                    ref: {
                      $link:
                        "bafkreihhffgngv4thcnw7sh7o43qnwwyjvfemdlccwalu76r3vnhlbssle",
                    },
                    mimeType: "image/jpeg",
                    size: 158648,
                  },
                  title: "Oilers' Ekholm set for return in Game 5 vs. Stars",
                  uri: "http://spr.ly/63320N4OEy",
                },
                external: {
                  description:
                    "The Oilers apparently will have defenseman Mattias Ekholm back in their lineup for Game 5 of the Western Conference finals against the Stars.",
                  thumb: {
                    $type: "blob",
                    ref: {
                      $link:
                        "bafkreihhffgngv4thcnw7sh7o43qnwwyjvfemdlccwalu76r3vnhlbssle",
                    },
                    mimeType: "image/jpeg",
                    size: 158648,
                  },
                  title: "Oilers' Ekholm set for return in Game 5 vs. Stars",
                  uri: "http://spr.ly/63320N4OEy",
                },
              },
              facets: [],
              text: "Oilers' defenseman Mattias Ekholm is set to return to action Thursday for Game 5 of the Western Conference finals against the Stars.\n\nEkholm has been out of the Oilers' lineup since April 11 with an undisclosed injury.",
            },
            embed: {
              $type: "app.bsky.embed.external#view",
              external: {
                uri: "http://spr.ly/63320N4OEy",
                title: "Oilers' Ekholm set for return in Game 5 vs. Stars",
                description:
                  "The Oilers apparently will have defenseman Mattias Ekholm back in their lineup for Game 5 of the Western Conference finals against the Stars.",
                thumb:
                  "https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:x7d6j54pm22ufehkes6jo4jf/bafkreihhffgngv4thcnw7sh7o43qnwwyjvfemdlccwalu76r3vnhlbssle@jpeg",
              },
            },
            replyCount: 1,
            repostCount: 0,
            likeCount: 24,
            quoteCount: 1,
            indexedAt: "2025-05-29T19:01:21.645Z",
            labels: [],
          },
          replies: [
            {
              $type: "app.bsky.feed.defs#threadViewPost",
              post: {
                uri: "at://did:plc:dzsbhwnnvblrpyy2fpnmaih3/app.bsky.feed.post/3lqdii5jmmc2p",
                cid: "bafyreicrfgr5rge655xy6wsgmdiexanr2vhwib7fkjbgu4kku3gzjzwowu",
                author: {
                  did: "did:plc:dzsbhwnnvblrpyy2fpnmaih3",
                  handle: "thinkasaurus.bsky.social",
                  displayName: "Doris the Thinkasaurus",
                  avatar:
                    "https://cdn.bsky.app/img/avatar/plain/did:plc:dzsbhwnnvblrpyy2fpnmaih3/bafkreielkwohfe37wdka5336fl2sxijxur242dhovdb2edkk56yuzl4fyu@jpeg",
                  labels: [
                    {
                      src: "did:plc:dzsbhwnnvblrpyy2fpnmaih3",
                      uri: "at://did:plc:dzsbhwnnvblrpyy2fpnmaih3/app.bsky.actor.profile/self",
                      cid: "bafyreihy26aqt7z6pn7uhqhoyh6ge5novekumdcsd3cxxz72nkc5bnozam",
                      val: "!no-unauthenticated",
                      cts: "2024-10-21T17:22:26.564Z",
                    },
                  ],
                  createdAt: "2024-10-21T17:22:27.408Z",
                },
                record: {
                  $type: "app.bsky.feed.post",
                  createdAt: "2025-05-29T19:50:31.613Z",
                  langs: ["en"],
                  reply: {
                    parent: {
                      cid: "bafyreibams5wyqdpg2cmmks7lhf5ccxu7hbu24sfatgc53jmb2nun5k5dm",
                      uri: "at://did:plc:x7d6j54pm22ufehkes6jo4jf/app.bsky.feed.post/3lqdfq7fkvm2g",
                    },
                    root: {
                      cid: "bafyreibams5wyqdpg2cmmks7lhf5ccxu7hbu24sfatgc53jmb2nun5k5dm",
                      uri: "at://did:plc:x7d6j54pm22ufehkes6jo4jf/app.bsky.feed.post/3lqdfq7fkvm2g",
                    },
                  },
                  text: "Alright! Now I have a reason to root for Edmonton aside from my burning hatred of Dallas!",
                },
                replyCount: 0,
                repostCount: 0,
                likeCount: 0,
                quoteCount: 0,
                indexedAt: "2025-05-29T19:50:32.451Z",
                labels: [],
              },
              replies: [],
              threadContext: {},
            },
          ],
        },
      },
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    description: "Scrape Pinterest pins",
    responseFields: [
      {
        path: "pins[0].story_pin_data.pages_preview[0].blocks[0].video.video_list.V_EXP7",
        description: "Video URL",
      },
    ],
    endpoints: [
      {
        name: "Search",
        method: "GET",
        description: "Search Pinterest",
        fullDescription:
          "Searches Pinterest for pins matching a query, returning results with id, url, title, description, images, link, domain, board info, and pinner details. Supports pagination via cursor and a trim option for lighter responses.",
        path: "/v1/pinterest/search",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Search query",
            placeholder: "Italian Pot Roast",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "Cursor",
            placeholder: "Y2JVSG81V2sxcmNHRlpWM1J...",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          pins: [
            {
              node_id: "UGluOjM3Mjk2MTIyNTY2MDUxNDQ=",
              url: "https://www.pinterest.com/pin/3729612256605144/",
              auto_alt_text: "a close up of a plate of food with meat",
              id: "3729612256605144",
              is_promoted: false,
              description: "Italian Pot Roast: A Hearty and Flavorful Recipe",
              title: "",
              images: {
                orig: {
                  width: 1024,
                  height: 1024,
                  url: "https://i.pinimg.com/originals/c0/ad/f4/c0adf44a87470e7287219893efa5df75.webp",
                },
              },
              link: "https://myauntyrecipes.com/2024/10/23/italian-pot-roast/?tp_image_id=7421",
              domain: "myauntyrecipes.com",
              seo_alt_text: "a close up of a plate of food with meat",
              board: {
                node_id: "Qm9hcmQ6MzcyOTY4MDg4MDQyNzg2OA==",
                name: "Food",
                cover_images: {
                  "222x": {
                    url: "https://i.pinimg.com/222x/fb/a4/05/fba405834dc4bb6cceefe63c7d2f566c.jpg",
                    width: 222,
                    height: null,
                  },
                },
                owner: {
                  node_id: "VXNlcjozNzI5NzQ5NTk5ODUyNTc1",
                  verified_identity: {},
                  follower_count: 85,
                  full_name: "Courtney Elizabeth",
                  image_large_url:
                    "https://i.pinimg.com/140x140_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                  is_ads_only_profile: false,
                  id: "3729749599852575",
                  image_small_url:
                    "https://i.pinimg.com/30x30_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                  image_medium_url:
                    "https://i.pinimg.com/75x75_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                  ads_only_profile_site: null,
                  is_primary_website_verified: false,
                  is_verified_merchant: false,
                  username: "csadak",
                },
                id: "3729680880427868",
                url: "/csadak/food/",
                collaborating_users: [],
                images: {
                  "170x": [
                    {
                      url: "https://i.pinimg.com/170x/8c/80/93/8c80939c8ed0349262b9bb32a8e0192f.jpg",
                      width: 170,
                      height: 339,
                      dominant_color: "#E1B342",
                    },
                  ],
                },
                pin_count: 423,
                is_collaborative: false,
                section_count: 10,
                board_order_modified_at: "Sat, 19 Apr 2025 17:05:53 +0000",
                type: "board",
                collaborator_count: 0,
              },
              grid_title: "Savory Italian Pot Roast",
              native_creator: null,
              created_at: "Tue, 07 Jan 2025 18:23:09 +0000",
              pinner: {
                node_id: "VXNlcjozNzI5NzQ5NTk5ODUyNTc1",
                verified_identity: {},
                follower_count: 85,
                full_name: "Courtney Elizabeth",
                image_large_url:
                  "https://i.pinimg.com/140x140_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                is_ads_only_profile: false,
                id: "3729749599852575",
                image_small_url:
                  "https://i.pinimg.com/30x30_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/71/b7/c7/71b7c71b452076af02217324c26b3f08.jpg",
                ads_only_profile_site: null,
                is_primary_website_verified: false,
                is_verified_merchant: false,
                username: "csadak",
              },
              videos: null,
              story_pin_data: null,
            },
          ],
          cursor: "Y2JVSG81V2...",
        },
        trimmedResponse: {
          success: true,
          pins: [
            {
              id: "643874078015272259",
              url: "https://www.pinterest.com/pin/643874078015272259",
              description:
                "#cute #animal #dog #puppy #pfp #icon #dogpfp #silly #cutepuppy #bordercollie #fyp #trend",
              created_at: "Tue, 10 Jun 2025 21:45:32 +0000",
              pinner: {
                node_id: "VXNlcjo2NDM4NzQyMTUzODQxMzkwMTg=",
                full_name: "Annika Strøm",
                is_ads_only_profile: false,
                username: "annikastrom2",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/60/d5/a8/60d5a8405ec70c5c46b677186c626587.jpg",
                is_primary_website_verified: false,
                follower_count: 2,
                ads_only_profile_site: null,
                id: "643874215384139018",
                is_verified_merchant: false,
                image_large_url:
                  "https://i.pinimg.com/140x140_RS/60/d5/a8/60d5a8405ec70c5c46b677186c626587.jpg",
                verified_identity: {},
                image_small_url:
                  "https://i.pinimg.com/30x30_RS/60/d5/a8/60d5a8405ec70c5c46b677186c626587.jpg",
              },
              images: {
                "170x": {
                  width: 236,
                  height: 312,
                  url: "https://i.pinimg.com/236x/a7/d6/dc/a7d6dced1ee95c11a150dcf2f1c6e05f.jpg",
                },
                "236x": {
                  width: 236,
                  height: 312,
                  url: "https://i.pinimg.com/236x/a7/d6/dc/a7d6dced1ee95c11a150dcf2f1c6e05f.jpg",
                },
                "474x": {
                  width: 474,
                  height: 626,
                  url: "https://i.pinimg.com/474x/a7/d6/dc/a7d6dced1ee95c11a150dcf2f1c6e05f.jpg",
                },
                "736x": {
                  width: 736,
                  height: 973,
                  url: "https://i.pinimg.com/736x/a7/d6/dc/a7d6dced1ee95c11a150dcf2f1c6e05f.jpg",
                },
                orig: {
                  width: 946,
                  height: 1251,
                  url: "https://i.pinimg.com/originals/a7/d6/dc/a7d6dced1ee95c11a150dcf2f1c6e05f.jpg",
                },
              },
            },
            {
              id: "154811305938232870",
              url: "https://www.pinterest.com/pin/154811305938232870",
              description: "Always be happy",
              created_at: "Tue, 03 Jun 2025 16:19:22 +0000",
              pinner: {
                node_id: "VXNlcjoxNTQ4MTE0NDMzNDkyOTI0NTU=",
                full_name: "Rebecca Smith",
                is_ads_only_profile: false,
                username: "becbakes",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/49/a9/d5/49a9d50cb9b809b4e5576e1e73b2627f.jpg",
                is_primary_website_verified: false,
                follower_count: 1771,
                ads_only_profile_site: null,
                id: "154811443349292455",
                is_verified_merchant: false,
                image_large_url:
                  "https://i.pinimg.com/140x140_RS/49/a9/d5/49a9d50cb9b809b4e5576e1e73b2627f.jpg",
                verified_identity: {},
                image_small_url:
                  "https://i.pinimg.com/30x30_RS/49/a9/d5/49a9d50cb9b809b4e5576e1e73b2627f.jpg",
              },
              images: {
                "170x": {
                  width: 236,
                  height: 419,
                  url: "https://i.pinimg.com/236x/6b/6a/b4/6b6ab4444a6aeb4ac621fe097e8a1cac.jpg",
                },
                "236x": {
                  width: 236,
                  height: 419,
                  url: "https://i.pinimg.com/236x/6b/6a/b4/6b6ab4444a6aeb4ac621fe097e8a1cac.jpg",
                },
                "474x": {
                  width: 474,
                  height: 842,
                  url: "https://i.pinimg.com/474x/6b/6a/b4/6b6ab4444a6aeb4ac621fe097e8a1cac.jpg",
                },
                "736x": {
                  width: 675,
                  height: 1200,
                  url: "https://i.pinimg.com/736x/6b/6a/b4/6b6ab4444a6aeb4ac621fe097e8a1cac.jpg",
                },
                orig: {
                  width: 675,
                  height: 1200,
                  url: "https://i.pinimg.com/originals/6b/6a/b4/6b6ab4444a6aeb4ac621fe097e8a1cac.jpg",
                },
              },
            },
          ],
          cursor: "Y2JVSG81V2sxcmNHRlpWM1J5VFVad1ZsWl...",
        },
      },
      {
        name: "Pin",
        method: "GET",
        description: "Get Pinterest pin",
        fullDescription:
          "Fetches detailed information about a single Pinterest pin by URL, returning title, description, link, dominantColor, originPinner, pinner, images at multiple resolutions (imageSpec_236x through imageSpec_orig), and pinJoin with visual annotations. Supports a trim option for lighter responses.",
        path: "/v1/pinterest/pin",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Pinterest pin URL",
            placeholder: "https://www.pinterest.com/pin/1124351863225567517/",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          altText: null,
          autoAltText:
            "a white bowl filled with meat and tomato sauce on top of a wooden cutting board",
          closeupUnifiedDescription: "Italian Pot Roast (Straccato)",
          description: "Italian Pot Roast (Straccato)",
          descriptionHtml: "Italian Pot Roast (Straccato)",
          dominantColor: "#714426",
          originPinner: {
            entityId: "91268467356860596",
            id: "VXNlcjo5MTI2ODQ2NzM1Njg2MDU5Ng==",
            username: "ClosetCooking",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            blockedByMe: false,
            explicitlyFollowedByMe: false,
            followerCount: 780870,
            fullName: "Closet Cooking",
            imageLargeUrl:
              "https://i.pinimg.com/140x140_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            imageSmallUrl:
              "https://i.pinimg.com/30x30_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            isVerifiedMerchant: false,
            verifiedIdentity: {
              verified: null,
            },
          },
          embed: null,
          gridTitle: "Italian Pot Roast (Straccato)",
          imageSignature: "d9cbac6b643a03c096f7fd0566cecaf1",
          isGoLinkless: false,
          digitalMediaSourceType: null,
          link: "https://www.closetcooking.com/italian-pot-roast-straccato/",
          mobileLink: null,
          pinner: {
            blockedByMe: false,
            id: "VXNlcjoyMDYxNTg0MzUxNTI=",
            entityId: "206158435152",
            __typename: "User",
            fullName: "Adrienne James",
            imageSmallUrl:
              "https://i.pinimg.com/30x30_RS/00/60/87/0060871118d040a1ad20ace0148923da.jpg",
            imageLargeUrl:
              "https://i.pinimg.com/140x140_RS/00/60/87/0060871118d040a1ad20ace0148923da.jpg",
            isVerifiedMerchant: false,
            verifiedIdentity: {
              verified: null,
            },
            username: "fluffduckie",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/00/60/87/0060871118d040a1ad20ace0148923da.jpg",
            explicitlyFollowedByMe: false,
            firstName: "Adrienne",
            followerCount: 4756,
          },
          pinJoin: {
            visualAnnotation: [
              "Over The Top Recipes",
              "Recipes Using Rump Roast",
              "Italian Family Style Dinner",
              "Homestyle Dinner Recipes",
              "Italian Beef Stew Recipes",
              "Pot Roast Meals Sides",
              "Northern Italian Recipes Authentic",
              "Entree Ideas Dinner",
              "Best Meat Recipes",
            ],
            shoppingKlpUrls: [
              "/shopping/adjustable-wide-brim-panama-hat-for-kentucky-derby/913981925800/",
              "/shopping/elegant-striped-three-piece-suit-with-notch-lapel/902902772938/",
              "/shopping/multicolor-chiffon-maxi-dress/897845141143/",
              "/shopping/white-satin-mini-dress-with-ruffles/895422652344/",
              "/shopping/eco-friendly-hobo-bag-for-everyday/949685205137/",
            ],
            annotationsWithLinksArray: [
              {
                name: "Over The Top Recipes",
                url: "/ideas/over-the-top-recipes/917228502841/",
              },
              {
                name: "Recipes Using Rump Roast",
                url: "/ideas/recipes-using-rump-roast/955866965314/",
              },
              {
                name: "Italian Family Style Dinner",
                url: "/ideas/italian-family-style-dinner/955779003567/",
              },
              {
                name: "Homestyle Dinner Recipes",
                url: "/ideas/homestyle-dinner-recipes/945901661526/",
              },
              {
                name: "Italian Beef Stew Recipes",
                url: "/ideas/italian-beef-stew-recipes/961055923557/",
              },
              {
                name: "Pot Roast Meals Sides",
                url: "/ideas/pot-roast-meals-sides/930943813796/",
              },
              {
                name: "Northern Italian Recipes Authentic",
                url: "/ideas/northern-italian-recipes-authentic/895147656575/",
              },
              {
                name: "Entree Ideas Dinner",
                url: "/ideas/entree-ideas-dinner/940188623529/",
              },
              {
                name: "Best Meat Recipes",
                url: "/ideas/best-meat-recipes/906911513114/",
              },
            ],
            seoCanonicalDomain: "www.pinterest.com",
            seoCanonicalUrl:
              "/pin/italian-pot-roast-stracotto--79657487154121436/",
          },
          title: "Italian Pot Roast (Straccato)",
          trackedLink:
            "https://www.closetcooking.com/italian-pot-roast-straccato/",
          trackingParams:
            "CwABAAAAEDYxMjQ3MjU5OTAwMjI0OTQLAAcAAAAPdW5rbm93bi91bmtub3duAA",
          isViewedByOwnerOrEmployeeOrPartnerOfBusiness: null,
          videos: null,
          imageSpec_236x: {
            height: 354,
            width: 236,
            url: "https://i.pinimg.com/236x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
          },
          imageSpec_136x136: {
            height: 136,
            width: 136,
            url: "https://i.pinimg.com/136x136/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
          },
          imageSpec_60x60: {
            url: "https://i.pinimg.com/60x60/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
          },
          imageSpec_170x: {
            url: "https://i.pinimg.com/236x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
          },
          imageSpec_474x: {
            url: "https://i.pinimg.com/474x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            height: 711,
            width: 474,
          },
          imageSpec_564x: {
            url: "https://i.pinimg.com/564x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            height: 846,
            width: 564,
          },
          imageSpec_736x: {
            url: "https://i.pinimg.com/736x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            height: 1104,
            width: 736,
          },
          imageSpec_600x315: {
            url: "https://i.pinimg.com/600x315/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
          },
          imageSpec_orig: {
            url: "https://i.pinimg.com/originals/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            height: 1200,
            width: 800,
          },
          entityId: "68747564459",
          isDownstreamPromotion: false,
          category: "",
          domain: "closetcooking.com",
          isPromoted: false,
          linkDomain: {
            officialUser: {
              imageMediumUrl:
                "https://i.pinimg.com/75x75_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
              id: "VXNlcjo5MTI2ODQ2NzM1Njg2MDU5Ng==",
              entityId: "91268467356860596",
              fullName: "Closet Cooking",
              imageSmallUrl:
                "https://i.pinimg.com/30x30_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
              isPrimaryWebsiteVerified: true,
              username: "ClosetCooking",
              blockedByMe: false,
              explicitlyFollowedByMe: false,
              followerCount: 780870,
              imageLargeUrl:
                "https://i.pinimg.com/140x140_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
              isVerifiedMerchant: false,
              verifiedIdentity: {
                verified: null,
              },
            },
            id: "RG9tYWluOjMxMDk1OTgyNDExODQ4MTM1Ng==",
          },
          promoter: null,
          isEligibleForPdp: false,
          isOosProduct: false,
          isStaleProduct: false,
          shoppingFlags: [],
          aggregatedPinData: {
            entityId: "5359304635312036251",
            id: "QWdncmVnYXRlZFBpbkRhdGE6NTM1OTMwNDYzNTMxMjAzNjI1MQ==",
            aggregatedStats: {
              saves: 49054,
            },
            commentCount: 55,
            didItData: {
              imagesCount: 3,
            },
          },
          isEligibleForAggregatedComments: true,
          richMetadata: {
            recipe: {
              name: "Italian Pot Roast (Stracotto)",
              fromAggregatedData: false,
              categorizedIngredients: [
                {
                  __typename: "CategorizedIngredientsMetadata",
                  category: "Meat",
                  ingredients: [
                    {
                      amt: "4 oz",
                      name: "Bacon",
                    },
                    {
                      amt: "3 lbs",
                      name: "Beef",
                    },
                  ],
                },
                {
                  __typename: "CategorizedIngredientsMetadata",
                  category: "Produce",
                  ingredients: [
                    {
                      amt: "2",
                      name: "Bay leaves",
                    },
                    {
                      amt: "1 cup",
                      name: "Carrot",
                    },
                    {
                      amt: "1 cup",
                      name: "Celery",
                    },
                    {
                      amt: "1 tbsp",
                      name: "Garlic",
                    },
                    {
                      amt: "1 cup",
                      name: "Onion",
                    },
                    {
                      amt: "1 tsp",
                      name: "Rosemary",
                    },
                    {
                      amt: "1 tsp",
                      name: "Thyme",
                    },
                    {
                      amt: "1 (14.5 ounce) can",
                      name: "Tomatoes",
                    },
                  ],
                },
                {
                  __typename: "CategorizedIngredientsMetadata",
                  category: "Canned Goods",
                  ingredients: [
                    {
                      amt: "2 cups",
                      name: "Beef broth",
                    },
                  ],
                },
                {
                  __typename: "CategorizedIngredientsMetadata",
                  category: "Baking & Spices",
                  ingredients: [
                    {
                      amt: "1 tsp",
                      name: "Italian seasoning",
                    },
                    {
                      amt: "1/2 tsp",
                      name: "Red pepper flakes",
                    },
                    {
                      amt: "2",
                      name: "Salt and pepper",
                    },
                  ],
                },
              ],
              displayCookTime: 13500,
              servingsSummary: {
                __typename: "ServingsSummary",
                serves: "6",
                summary: "Serves 6",
              },
              aggregateRating: null,
              diets: ["Gluten free", "Paleo"],
              cookTimes: {
                total: {
                  h: 3,
                  m: 45,
                },
                cook: {
                  h: 3,
                  m: 30,
                },
                prep: {
                  h: null,
                  m: 15,
                },
              },
            },
            article: {
              __typename: "ArticleMetadata",
              datePublished: "Thu, 28 Mar 2024 00:00:00 +0000",
            },
            description:
              "A slow braised Italian style pot roast in a tasty tomato sauce.",
            title: "Italian Pot Roast (Stracotto)",
            products: null,
            aggregateRating: null,
            tutorial: null,
            siteName: "Closet Cooking",
            url: "https://www.closetcooking.com/italian-pot-roast-straccato/",
          },
          totalReactionCount: 694,
          board: {
            privacy: "public",
            url: "/fluffduckie/food-fun/",
            name: "Food & Fun",
            id: "Qm9hcmQ6MTM3NDM4OTk5MjE1",
            entityId: "137438999215",
            pinCount: 1880,
            sectionCount: 18,
            boardOrderModifiedAt: "Sun, 20 Apr 2025 06:32:24 +0000",
            coverImageSpec_222x: {
              url: "https://i.pinimg.com/222x/a2/23/15/a2231567335d0aa839f478c0d8934afd.jpg",
            },
            coverImageSpec_400x300: {
              url: "https://i.pinimg.com/400x300/a2/23/15/a2231567335d0aa839f478c0d8934afd.jpg",
            },
            coverImageSpec_216x146: {
              url: "https://i.pinimg.com/216x146/a2/23/15/a2231567335d0aa839f478c0d8934afd.jpg",
            },
            imageCoverHdUrl:
              "https://i.pinimg.com/474x/a2/23/15/a2231567335d0aa839f478c0d8934afd.jpg",
            imageCoverUrl:
              "https://i.pinimg.com/200x150/a2/23/15/a2231567335d0aa839f478c0d8934afd.jpg",
            imageThumbnailUrl:
              "https://i.pinimg.com/upload/137438999215_board_thumbnail_2025-04-19-23-07-19_18756_60.jpg",
            collaboratedByMe: false,
            isCollaborative: false,
            owner: {
              entityId: "206158435152",
              id: "VXNlcjoyMDYxNTg0MzUxNTI=",
            },
          },
          richSummary: {
            displayName: "Italian Pot Roast (Stracotto)",
            products: [],
          },
          storyPinDataId: null,
          storyPinData: null,
          nativeCreator: {
            isVerifiedMerchant: false,
            verifiedIdentity: {
              verified: null,
            },
            id: "VXNlcjo5MTI2ODQ2NzM1Njg2MDU5Ng==",
            entityId: "91268467356860596",
            fullName: "Closet Cooking",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            imageSmallUrl:
              "https://i.pinimg.com/30x30_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            username: "ClosetCooking",
            blockedByMe: false,
            explicitlyFollowedByMe: false,
            followerCount: 780870,
            imageLargeUrl:
              "https://i.pinimg.com/140x140_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            profileUrl: "https://www.pinterest.com/ClosetCooking/",
          },
          shareCount: 162,
          reactionCountsData: [
            {
              reactionCount: 690,
              reactionType: 1,
            },
            {
              reactionCount: 2,
              reactionType: 13,
            },
          ],
          sponsorship: null,
          closeupDescription:
            "A slow braised Italian style pot roast in a tasty tomato sauce.",
          genAiTopics: null,
          recommendationReason: null,
          seeMoreUserFeedback: null,
          adData: null,
          adMatchReason: 0,
          sourceInterest: null,
          adTargetingAttribution: null,
          promotedPartnershipAdvertiserName: null,
          promotedPartnershipAttributionName: null,
          isEligibleForPromotedPartnership: false,
          isThirdPartyAd: false,
          commentsDisabled: false,
          doneByMe: false,
          closeupAttribution: {
            entityId: "91268467356860596",
            username: "ClosetCooking",
            id: "VXNlcjo5MTI2ODQ2NzM1Njg2MDU5Ng==",
            __typename: "User",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/71/1a/ce/711ace70f2f6f846692993a7ec3da426.jpg",
            followerCount: 780870,
            followedByMe: false,
            isAdsOnlyProfile: false,
            adsOnlyProfileSite: null,
            verifiedIdentity: {
              verified: null,
            },
            isVerifiedMerchant: false,
            fullName: "Closet Cooking",
          },
          isHidden: false,
          isUnsafe: false,
          carouselData: null,
          image236x: {
            height: 354,
            url: "https://i.pinimg.com/236x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            width: 236,
          },
          image474x: {
            height: 711,
            url: "https://i.pinimg.com/474x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            width: 474,
          },
          image564x: {
            height: 846,
            url: "https://i.pinimg.com/564x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            width: 564,
          },
          image736x: {
            height: 1104,
            url: "https://i.pinimg.com/736x/d9/cb/ac/d9cbac6b643a03c096f7fd0566cecaf1.jpg",
            width: 736,
          },
          visualObjects: [
            {
              isStela: true,
              h: 0.8126794695854187,
              w: 1,
              x: 0,
              y: 0.09865649044513702,
              label: "Decorative bowls",
            },
          ],
          affiliateLink: null,
          shipsToUserCountry: false,
          relatedArticle: {
            _id: null,
            mainImageUrl: null,
            title: null,
            urlPath: null,
          },
          isRepin: true,
          favoriteUserCount: 0,
          favoritedByMe: false,
          createdAt: "Thu, 06 Jun 2024 02:33:19 +0000",
          attribution: null,
          mediaAttribution: null,
          seoDescription:
            "Jun 12, 2024 - A slow braised Italian style pot roast in a tasty tomato sauce.",
          seoNoindexReason: null,
          seoTitle:
            "Italian Pot Roast (Stracotto) | Recipe | Roast beef recipes, Italian pot roast, Beef recipes easy",
          repinCount: 2208,
          seoUrl: "/pin/68747564459/",
          priceCurrency: "USD",
          id: "UGluOjY4NzQ3NTY0NDU5",
        },
        trimmedResponse: {
          success: true,
          entityId: "36662184461578355",
          seoAltText:
            "a small brown dog sitting in the back seat of a car with its head hanging out",
          originPinner: {
            entityId: "1144125617743372495",
            id: "VXNlcjoxMTQ0MTI1NjE3NzQzMzcyNDk1",
            username: "Chloe_hi15",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/90/99/6f/90996f6eac9c9fd4836fba948699fd28.jpg",
            blockedByMe: false,
            explicitlyFollowedByMe: false,
            followerCount: 55,
            fullName: "Chloe Marie Monroe",
            imageLargeUrl:
              "https://i.pinimg.com/140x140_RS/90/99/6f/90996f6eac9c9fd4836fba948699fd28.jpg",
            imageSmallUrl:
              "https://i.pinimg.com/30x30_RS/90/99/6f/90996f6eac9c9fd4836fba948699fd28.jpg",
            isVerifiedMerchant: false,
            verifiedIdentity: {
              verified: null,
            },
          },
          pinner: {
            blockedByMe: false,
            id: "VXNlcjozNjY2MjMyMTg3NDk5NjcxNQ==",
            entityId: "36662321874996715",
            __typename: "User",
            fullName: "Crystal Catlett",
            imageSmallUrl:
              "https://i.pinimg.com/30x30_RS/51/76/82/5176824c31aaeec633f0f09bf1ca12e4.jpg",
            imageLargeUrl:
              "https://i.pinimg.com/140x140_RS/51/76/82/5176824c31aaeec633f0f09bf1ca12e4.jpg",
            explicitlyFollowedByMe: false,
            username: "cc1025",
            imageMediumUrl:
              "https://i.pinimg.com/75x75_RS/51/76/82/5176824c31aaeec633f0f09bf1ca12e4.jpg",
            firstName: "Crystal",
            followerCount: 347,
            isVerifiedMerchant: false,
            verifiedIdentity: {
              verified: null,
            },
          },
          imageSpec_orig: {
            url: "https://i.pinimg.com/originals/71/5c/5d/715c5d48feb038e16f48a28e6f8ca1f3.jpg",
          },
          description: " ",
          shareCount: 0,
          nativeCreator: null,
          createdAt: "Mon, 09 Jun 2025 04:04:22 +0000",
          repinCount: 88,
          totalReactionCount: 88,
        },
      },
      {
        name: "User Boards",
        method: "GET",
        description: "Get a user's boards",
        fullDescription:
          "Fetches a paginated list of boards for a Pinterest user, returning each board's name, url, description, pin_count, follower_count, owner info, cover_images, and created_at. Supports pagination via cursor and a trim option for lighter responses.",
        path: "/v1/pinterest/user/boards",
        paginationField: "cursor",
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description:
              "The username of the user to get boards for. (e.g. broadstbullycom from https://www.pinterest.com/broadstbullycom/)",
            placeholder: "broadstbullycom",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          boards: [
            {
              node_id: "Qm9hcmQ6MjgyODEyMTIwMjg5NDIzMDQ0",
              collaborating_users: [],
              name: "Anthony Edwards",
              owner: {
                node_id: "VXNlcjoyODI4MTIxODkwMDg0NzU1NDk=",
                is_private_profile: false,
                ads_only_profile_site: null,
                type: "user",
                is_default_image: false,
                explicitly_followed_by_me: false,
                is_verified_merchant: false,
                verified_identity: {},
                full_name: "🚨BSB🚨",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/1c/82/f7/1c82f745249221256c71b8c04decb2c7.jpg",
                id: "282812189008475549",
                domain_verified: true,
                is_partner: true,
                username: "BroadStBullycom",
                is_ads_only_profile: false,
              },
              board_order_modified_at: "Wed, 21 May 2025 11:18:38 +0000",
              description: "The best Anthony Edwards pins by 🚨 BSB 🚨",
              collaborated_by_me: false,
              created_at: "Thu, 18 Apr 2024 22:56:33 +0000",
              url: "https://www.pinterest.com/broadstbullycom/anthony-edwards/",
              allow_homefeed_recommendations: true,
              collaborator_requests_enabled: false,
              followed_by_me: false,
              collaborator_count: 0,
              is_ads_only: false,
              pin_count: 317,
              images: {
                "170x": [
                  {
                    url: "https://i.pinimg.com/170x/6e/96/6e/6e966ea74419baf110176439f6a412ad.jpg",
                    width: 170,
                    height: 301,
                    dominant_color: "#5A7978",
                  },
                ],
                "236x": [
                  {
                    url: "https://i.pinimg.com/236x/6e/96/6e/6e966ea74419baf110176439f6a412ad.jpg",
                    width: 236,
                    height: 419,
                    dominant_color: "#5A7978",
                  },
                ],
              },
              id: "282812120289423044",
              should_show_more_ideas: false,
              type: "board",
              access: [],
              cover_pin: {
                pin_id: "282812051593911893",
                image_signature: "3fc9ffd3ef48d11f2cea9f4cffc8ece9",
                timestamp: 1713483568,
              },
              has_custom_cover: false,
              viewer_collaborator_join_requested: false,
              section_count: 0,
              privacy: "public",
              follower_count: 1833,
              should_show_board_collaborators: true,
              image_cover_url:
                "https://i.pinimg.com/200x150/3f/c9/ff/3fc9ffd3ef48d11f2cea9f4cffc8ece9.jpg",
              image_cover_hd_url:
                "https://i.pinimg.com/474x/3f/c9/ff/3fc9ffd3ef48d11f2cea9f4cffc8ece9.jpg",
              event_date: null,
              event_start_date: null,
              cover_images: {
                "200x150": {
                  url: "https://i.pinimg.com/200x150/3f/c9/ff/3fc9ffd3ef48d11f2cea9f4cffc8ece9.jpg",
                  width: 200,
                  height: 150,
                },
                "222x": {
                  url: "https://i.pinimg.com/222x/3f/c9/ff/3fc9ffd3ef48d11f2cea9f4cffc8ece9.jpg",
                  width: 222,
                  height: null,
                },
              },
              place_saves_count: 0,
              archived_by_me_at: null,
              tracking_params: "CwABAAAAEDEyNzQ2MDIyMDAzNjE4NzQGAAMAggA",
              should_show_shop_feed: false,
              is_temporarily_disabled: false,
              is_collaborative: false,
            },
          ],
          cursor: "LT4yODI4MTIxMjAyODk0M....",
        },
        trimmedResponse: {
          success: true,
          boards: [
            {
              id: "549580029467577434",
              url: "https://www.pinterest.com/sharat24k/turkey-recipes/",
              description: "",
              follower_count: 292,
              pin_count: 545,
              name: "Turkey Recipes",
              image_cover_hd_url:
                "https://i.pinimg.com/474x/45/00/df/4500dfc5bc8bbc15137ff9d9abf04cc1.jpg",
              created_at: "Mon, 17 Feb 2025 02:19:26 +0000",
            },
            {
              id: "549580029467574726",
              url: "https://www.pinterest.com/sharat24k/sauce/",
              description: "",
              follower_count: 292,
              pin_count: 238,
              name: "Sauce",
              image_cover_hd_url:
                "https://i.pinimg.com/474x/68/26/60/682660c1303b4bb3ba51d468493d457f.jpg",
              created_at: "Sun, 26 Jan 2025 06:50:38 +0000",
            },
          ],
          cursor: "LT41NDk1ODAwMjk0Njc1Njc1O....",
        },
      },
      {
        name: "Board",
        method: "GET",
        description: "Get the pins of a pinterest board",
        fullDescription:
          "Fetches a paginated list of pins from a Pinterest board by URL, returning each pin's id, description, title, images, board info, pin_join annotations, and aggregated_pin_data. Supports pagination via cursor and a trim option for lighter responses.",
        path: "/v1/pinterest/board",
        paginationField: "cursor",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "The URL of the board to get",
            placeholder: "https://www.pinterest.com/lizmrodgers/moms-night/",
          },
          {
            name: "cursor",
            type: "string",
            required: false,
            description: "The cursor to get the next page of results",
            placeholder: "Y2JURlEwTWsxNlp6Vk9SR2MwV....",
          },
          {
            name: "trim",
            type: "boolean",
            required: false,
            description:
              "Set to true for a trimmed down version of the response",
            placeholder: "false",
          },
        ],
        sampleResponse: {
          success: true,
          pins: [
            {
              node_id: "UGluOjYzODk0ODg4NDcxNzM5NzAw",
              is_stale_product: false,
              image_signature: "d6927d71dd2f7584453beb1e1f4052fd",
              is_eligible_for_related_products: true,
              description: "Love the bun",
              images: {
                orig: {
                  width: 1080,
                  height: 1920,
                  url: "https://i.pinimg.com/originals/d6/92/7d/d6927d71dd2f7584453beb1e1f4052fd.jpg",
                },
              },
              promoted_is_removable: false,
              is_promoted: false,
              promoter: null,
              id: "63894888471739700",
              pin_join: {
                shopping_klp_urls: null,
                canonical_pin: {
                  id: "1137721924607554352",
                },
                visual_annotation: [
                  "Easter Brunch Outfit",
                  "Cute Middle School Outfits",
                  "Cute Everyday Outfits",
                  "Brunch Outfit",
                  "Polyvore Outfits",
                  "Casual Style Outfits",
                  "Teen Fashion Outfits",
                  "Boho Chic Fashion",
                  "Cute Casual Outfits",
                ],
                annotations_with_links: {
                  "Easter Brunch Outfit": {
                    url: "/ideas/easter-brunch-outfit/894163040141/",
                    name: "Easter Brunch Outfit",
                  },
                },
              },
              favorited_by_me: false,
              is_repin: true,
              board: {
                node_id: "Qm9hcmQ6NjM4OTQ5NTcxNTI3MTg1MTk=",
                type: "board",
                owner: {
                  node_id: "VXNlcjo2Mzg5NTAyNTg3MTc0OTM3NA==",
                  is_primary_website_verified: false,
                  verified_identity: {},
                  image_small_url:
                    "https://i.pinimg.com/30x30_RS/c2/0e/62/c20e628451b24267c68924d01e42c997.jpg",
                  image_medium_url:
                    "https://i.pinimg.com/75x75_RS/c2/0e/62/c20e628451b24267c68924d01e42c997.jpg",
                  username: "lizmrodgers",
                  full_name: "Liz Rodgers - DIY | Home Decor",
                  id: "63895025871749374",
                  is_verified_merchant: false,
                },
                collaborated_by_me: false,
                privacy: "public",
                is_collaborative: false,
                url: "/lizmrodgers/moms-night/",
                id: "63894957152718519",
                followed_by_me: false,
                layout: "default",
                name: "Moms night",
              },
              shopping_flags: [],
              creator_analytics: null,
              title: "",
              call_to_action_text: null,
              grid_title: "",
              rich_summary: null,
              image_crop: {
                min_y: 0,
                max_y: 1,
              },
              type: "pin",
              sponsorship: null,
              story_pin_data_id: null,
              insertion_id: null,
              collection_pin: null,
              should_open_in_stream: false,
              campaign_id: null,
              access: [],
              debug_info_html: null,
              utm_link: null,
              reaction_counts: {},
              embed: null,
              unified_user_note: "",
              auto_alt_text: null,
              product_pin_data: null,
              videos: null,
              aggregated_pin_data: {
                node_id: "QWdncmVnYXRlZFBpbkRhdGE6NTM3NjQ4OTA4NTA1OTc5MDMyOQ==",
                is_shop_the_look: false,
                has_xy_tags: false,
                aggregated_stats: {
                  saves: 149,
                  done: 0,
                },
                id: "5376489085059790329",
                did_it_data: {
                  type: "aggregateddiditdata",
                  videos_count: 0,
                  user_count: 0,
                  recommend_scores: [
                    {
                      score: 1,
                      count: 0,
                    },
                    {
                      score: 0.5,
                      count: 0,
                    },
                    {
                      score: 0,
                      count: 0,
                    },
                  ],
                  tags: [],
                  images_count: 0,
                  responses_count: 0,
                  rating: -1,
                  details_count: 0,
                  recommended_count: 0,
                },
                creator_analytics: null,
              },
              link_domain: null,
              is_go_linkless: false,
              category: "",
              tracking_params:
                "CwABAAAAEDI0MTY2MTYwODIxODcyMDAGAAMAAQsABwAAAApuZ2FwaS9wcm9kAA",
              product_metadata: null,
              is_downstream_promotion: false,
              seo_alt_text: "Love the bun ",
              video_status_message: null,
              is_eligible_for_pdp: false,
              story_pin_data: null,
              promoted_lead_form: null,
              native_creator: {
                node_id: "VXNlcjo5MzY5NjAwMzQ4ODQyMTgwOTQ=",
                is_primary_website_verified: false,
                verified_identity: {},
                image_small_url:
                  "https://i.pinimg.com/30x30_RS/a3/0d/b1/a30db144e67d53257f20e534a922a01e.jpg",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/a3/0d/b1/a30db144e67d53257f20e534a922a01e.jpg",
                username: "mayajsanchez10",
                full_name: "Maya Jade",
                id: "936960034884218094",
                is_verified_merchant: false,
              },
              is_oos_product: false,
              alt_text: null,
              promoted_is_lead_ad: false,
              is_native: true,
              link_utm_applicable_and_replaced: 0,
              domain: "Uploaded by user",
              digital_media_source_type: null,
              carousel_data: null,
              repin_count: 3,
              done_by_me: false,
              pinner: {
                node_id: "VXNlcjo2Mzg5NTAyNTg3MTc0OTM3NA==",
                is_primary_website_verified: false,
                verified_identity: {},
                image_small_url:
                  "https://i.pinimg.com/30x30_RS/c2/0e/62/c20e628451b24267c68924d01e42c997.jpg",
                image_medium_url:
                  "https://i.pinimg.com/75x75_RS/c2/0e/62/c20e628451b24267c68924d01e42c997.jpg",
                username: "lizmrodgers",
                full_name: "Liz Rodgers - DIY | Home Decor",
                id: "63895025871749374",
                is_verified_merchant: false,
              },
              video_status: null,
              is_quick_promotable: false,
              favorite_user_count: 0,
              is_shoppable: true,
              link: "https://www.shffls.com/shuffles/5371250648050349525",
              dominant_color: "#ffffff",
              attribution: null,
              has_required_attribution_provider: false,
            },
          ],
          cursor: "Y2JURlEwTWsxNlp6Vk....",
        },
        trimmedResponse: {
          success: true,
          pins: [
            {
              id: "549579960798399243",
              link: "https://gekbuzz.com/crispy-air-fryer-pizza-rolls-recipe/",
              title: "Crispy Air Fryer Pizza Rolls Recipe -",
              board: {
                node_id: "Qm9hcmQ6NTQ5NTgwMDI5NDY3NTc3NDM2",
                followed_by_me: false,
                owner: {
                  node_id: "VXNlcjo1NDk1ODAwOTgxODYwMzM3MzU=",
                  image_small_url:
                    "https://s.pinimg.com/images/user/default_30.png",
                  is_primary_website_verified: true,
                  is_verified_merchant: false,
                  full_name: "Gekbuzz",
                  username: "sharat24k",
                  image_medium_url:
                    "https://s.pinimg.com/images/user/default_75.png",
                  id: "549580098186033735",
                  verified_identity: {},
                },
                privacy: "public",
                is_collaborative: false,
                url: "/sharat24k/pizza-recipes/",
                layout: "default",
                type: "board",
                name: "Pizza Recipes",
                id: "549580029467577436",
                collaborated_by_me: false,
              },
              unified_user_note:
                "Craving a quick snack that combines cheesy goodness and crispy texture? These air fryer pizza rolls are the answer! Perfect for movie nights, parties, or just a casual treat, they pack all the flavor of your favorite pizza into a bite-sized delight. Imagine biting into a perfectly golden roll where melty cheese and zesty sauce meld together. The air fryer gives these pizza rolls a satisfying crunch without the extra oil, making them a healthier option that doesn’t skimp on taste.",
              alt_text:
                "Crispy air fryer pizza rolls served with marinara sauce for dipping on a plate.",
              rich_summary: {
                actions: [],
                products: [],
                apple_touch_icon_link: null,
                type_name: "article",
                type: "richpingriddata",
                id: "5aa12f54bef882f6f3cdd77234027e25",
                favicon_link:
                  "https://s.pinimg.com/images/default_rich_pin_favicon.png",
                url: "https://gekbuzz.com/crispy-air-fryer-pizza-rolls-recipe/",
                display_name: "Crispy Air Fryer Pizza Rolls Recipe -",
                favicon_images: {
                  orig: "https://s.pinimg.com/images/default_rich_pin_favicon.png",
                },
                display_description:
                  "Craving a quick snack that combines cheesy goodness and crispy texture? These air fryer pizza rolls are the answer! Perfect for movie nights, parties, or just a casual treat, they pack all the flavor of your favorite pizza into a bite-sized delight. Imagine biting into a perfectly golden roll where melty cheese and zesty sauce […]",
                apple_touch_icon_images: null,
                site_name: "gekbuzz.com",
              },
              reaction_counts: {},
              pinner: {
                node_id: "VXNlcjo1NDk1ODAwOTgxODYwMzM3MzU=",
                image_small_url:
                  "https://s.pinimg.com/images/user/default_30.png",
                is_primary_website_verified: true,
                is_verified_merchant: false,
                full_name: "Gekbuzz",
                username: "sharat24k",
                image_medium_url:
                  "https://s.pinimg.com/images/user/default_75.png",
                id: "549580098186033735",
                verified_identity: {},
              },
              description:
                "Craving a quick snack that combines cheesy goodness and crispy texture? These air fryer pizza rolls are the answer! Perfect for movie nights, parties, or just a casual treat, they pack all the flavor of your favorite pizza into a bite-sized delight. Imagine biting into a perfectly golden roll where melty cheese and zesty sauce meld together. The air fryer gives these pizza rolls a satisfying crunch without the extra oil, making them a healthier option that doesn’t skimp on taste.",
              domain: "gekbuzz.com",
            },
          ],
          cursor: "Y2JURlEwTVU1RWF6Rk9lbXMxV....",
        },
      },
    ],
  },
  {
    id: "google",
    name: "Google",
    description: "Scrape Google search results",
    endpoints: [
      {
        name: "Search",
        method: "GET",
        description: "Search Google",
        fullDescription:
          "Performs a Google search and returns organic results with url, title, and description for each result. Supports an optional region parameter (2-letter country code) to get localized results from a specific country.",
        path: "/v1/google/search",
        params: [
          {
            name: "query",
            type: "string",
            required: true,
            description: "Search query",
            placeholder: "austen allred",
          },
          {
            name: "region",
            type: "string",
            required: false,
            description:
              "2 letter country code, ie US, UK, CA, etc This will show results from that country",
            placeholder: "US",
          },
        ],
        sampleResponse: {
          success: true,
          results: [
            {
              url: "https://x.com/Austen",
              title: "Austen Allred ✓",
              description:
                "Among the dumbest assertions people make online is, “Remote work was better but companies brought everyone back in office to justify the rent they were paying and keep property values high.”  As if companies are incapable of subleasing or selling buildings.    22 hours ago",
            },
            {
              url: "https://www.linkedin.com/in/austenallred",
              title: "Austen Allred - Gauntlet AI - LinkedIn",
              description:
                "Austen is a visionary CEO that I jumped at the chance to work with. His tenacity, grit, empathy, and deep drive to unlock everyone's potential set him apart.",
            },
            {
              url: "https://www.reddit.com/r/codingbootcamp/comments/1hie7h5/austen_allred_ceo_of_bloomtech_and_founder_of/",
              title:
                "Austen Allred (CEO of Bloomtech and founder of Gauntlet AI ... - Reddit",
              description:
                "Dec 20, 2024   �   Austen Allred is an absolute con artist and proven liar when it comes to outcomes but he's a promotion maestro as well. I have no doubt that�...",
            },
            {
              url: "https://consumerfinance.gov/about-us/newsroom/cfpb-takes-action-against-coding-boot-camp-bloomtech-and-ceo-austen-allred-for-deceiving-students-and-hiding-loan-costs/",
              title: "CFPB Takes Action Against Coding Boot Camp BloomTech",
              description: "",
            },
            {
              url: "https://www.safegraph.com/podcasts/austen-allred",
              title:
                "Austen Allred, CEO of BloomTech: Aligning Education Incentives",
              description:
                "Austen Allred is the founder and CEO of the Bloom Institute of Technology (formerly known as Lambda School), a coding bootcamp that's helped thousands of students get a job in tech.",
            },
            {
              url: "https://www.sandofsky.com/lambda-school/",
              title: "Fast Crimes at Lambda School - Sandofsky",
              description:
                "Jun 18, 2024   �   The Fall of Austen Allred. The journalist who exposed Lambda School wasn't a journalist by trade. Vincent Woo was a successful entrepreneur best�...",
            },
            {
              url: "https://www.austenallred.com/",
              title: "Austen Allred",
              description:
                "Feb 9, 2023   �   I'm the co-founder and CEO of Bloom Institute of Technology. I'm @austen on Twitter. I read a lot. I invest in early-stage tech startups out of�...",
            },
            {
              url: "https://www.instagram.com/austenall/",
              title: "Austen Allred (@austenall) • Instagram photos and videos",
              description:
                '30K Followers, 1828 Following, 60 Posts - Austen Allred (@austenall) on Instagram: "Co-founder and CEO of Bloom Institute of Technology"',
            },
            {
              url: "https://venture.angellist.com/v/back/austen-access-fund",
              title: "Austen Access Fund - AngelList",
              description:
                "I'm Austen Allred - the CEO of BloomTech (formerly Lambda School), a company backed by Y Combinator, Stripe, and other top-tier Silicon Valley venture firms�...",
            },
            {
              url: "https://www.bloomtech.com/blog-topic/austen-allred",
              title: "Austen Allred - Bloom Institute of Technology",
              description:
                "Graduates will be prepared with the skills necessary to land an entry-level software engineering role at companies of all sizes.",
            },
            {
              url: "https://news.ycombinator.com/item",
              title:
                "CFPB Takes Action Against Coding Boot Camp BloomTech and ...",
              description:
                "Apr 17, 2024   �   Austen Allred quote-tweeted me to his gazillion followers and caused a big pile-on about how awful and wrong and anti-progress I was. Couldn�...",
            },
            {
              url: "https://www.founderspledge.com/members/765",
              title: "Co-Founder and CEO of LambdaSchool | Founders Pledge",
              description:
                "Austen Allred is the Co-Founder and CEO of Lambda School. A native of Springville, Utah, Austen's start-up journey began in 2017.",
            },
            {
              url: "https://www.linkedin.com/today/author/austenallred",
              title: "Austen Allred - LinkedIn",
              description:
                "Austen Allred. Founder @ Gauntlet AI. View articles by Austen Allred. Being a Father Has Made me a Better Leader, and Vice Versa. Being a Father�...",
            },
            {
              url: "https://perell.com/podcast/austen-allred/",
              title: "Austen Allred: The Future of Education - David Perell",
              description:
                "David Perell interviews Austen Allred, the founder of Lambda School. Listen now.",
            },
            {
              url: "https://www.youtube.com/watch",
              title:
                "Austen Allred's SHOCKING Solution to Fix Higher Education Forever ...",
              description:
                "Sep 11, 2024   �   Austin Allred, founder of BloomTech, discusses the concept of income share agreements and how his company is revolutionizing education.",
            },
            {
              url: "https://podcasts.apple.com/us/podcast/the-austen-allred-podcast/id1694396684",
              title: "The Austen Allred Podcast",
              description:
                "#1: Sahil Lavingia of Gumroad (with Austen Allred). Sahil. Lavingia is the CEO of Gumroad. We talked about dividends at VC-backed startups, fractional hiring�...",
            },
            {
              url: "https://www.austenallred.com/about/",
              title: "About - Austen Allred",
              description:
                "I'm the co-founder and CEO of Bloom Institute of Technology. Email: austen@bloomtech.com. Twitter: @austen. Subscribe to Austen Allred.",
            },
            {
              url: "https://thefutur.com/content/austen-allred",
              title: "A New School - The Futur",
              description:
                "Our guest on the podcast today is Austen Allred, the man with a plan to make computer science education even more accessible. A software engineer himself,�...",
            },
            {
              url: "https://www.businessinsider.com/bloomtech-lambda-school-austen-allred-deceived-students-cfbp-says-2024-4",
              title:
                "BloomTech and CEO Austen Allred Deceived Students, US Agency ...",
              description:
                "Apr 17, 2024   �   Coding bootcamp BloomTech and CEO Austen Allred misrepresented income-share agreements and inflated job placement statistics, CFPB says.",
            },
            {
              url: "https://www.thetwentyminutevc.com/austenallred",
              title: "Lambda School Founder, Austen Allred on Why ... - 20VC",
              description:
                "Austen Allred is the Founder & CEO @ Lambda School, a 9 month, immersive program that gives you the tools and training you need to launch your new career�...",
            },
            {
              url: "https://www.crunchbase.com/person/austen-allred",
              title:
                "Austen Allred - Co-Founder & CEO @ Lambda School - Crunchbase",
              description:
                "Austen Allred has 2 current jobs as Co-Founder & CEO at BloomTech and Co-Founder & CEO at Lambda School . Additionally, Austen Allred has had 2 past jobs�...",
            },
            {
              url: "https://www.workspaces.xyz/p/148-austen-allred",
              title: "148 - Austen Allred - Workspaces.xyz",
              description:
                "Austen Allred is the co-founder and CEO of BloomTech (Bloom Institute of Technology), formerly known as Lambda School. BloomTech is an online coding school�...",
            },
            {
              url: "https://bigthink.com/people/austen-allred/",
              title: "Austen Allred - Big Think",
              description:
                "Austen Allred is the Co-Founder and CEO of Lambda School (now known as Bloom Institute of Technology). A native of Springville, Utah, Austen's start-up�...",
            },
            {
              url: "https://foundercontent.com/founders/all/austen-allred",
              title: "Austen Allred CEO @ Lambda School - Founder Content",
              description:
                "Austen Allred. Austen is CEO @ Lambda School. 2 resources from Austen. Companies founded: Lambda School. Austen's Founder Content.",
            },
            {
              url: "https://theorg.com/org/bloomtech/org-chart/austen-allred",
              title: "Austen Allred - Co-Founder & CEO at BloomTech - The Org",
              description:
                "Austen Allred is the co-founder and CEO of BloomTech. A native of Springville, Utah, Austen's start-up journey began in 2017.",
            },
            {
              url: "https://www.sfgate.com/tech/article/bloomtech-coding-school-fined-cfpb-19410802.php",
              title:
                "SF school, founder fined $164,000 for allegedly tricking students",
              description:
                "Apr 18, 2024   �   Federal agency fines SF school, founder $164,000, alleging they tricked students. BloomTech CEO Austen Allred agreed to the order but admitted�...",
            },
            {
              url: "https://mentorstudents.org/q/austenallred",
              title: "Austen Allred's interview - Mentor Students",
              description:
                "Co-Founder & CEO, Lambda School. Career story & Training institute inspiration. Courses offered & duration. Course Creation & Updation.",
            },
            {
              url: "https://homebase.ai/podcasts/pioneering-new-paths-for-higher-education-with-austen-allred/",
              title:
                "Pioneering New Paths for Higher Education with Austen Allred",
              description:
                "Allred is a prolific author, speaker, and YCombinator S17 alum. Prior to co-founding Lambda School he oversaw growth at LendUp, co-founded Grasswire, and lead�...",
            },
            {
              url: "https://medium.com/@austenallred/about",
              title: "About – Austen Allred - Medium",
              description:
                "Read writing from Austen Allred on Medium. Co-founder of Lambda School — a CS education that's free until you're hired https://lambdaschool.com.",
            },
            {
              url: "https://soundcloud.com/vwoo/interview-with-austen-allred",
              title: "Interview with Austen Allred - Vincent Woo - SoundCloud",
              description:
                "Feb 14, 2020   �   My interview with Austen Allred of Lambda School, which took place on January 22nd, 2020. Music by @listentoapril,",
            },
            {
              url: "https://www.vitalize.vc/podcast/austen-allred-podcast/",
              title:
                "Austen Allred, Co-Founder & CEO at Lambda School | Episode #010",
              description:
                "Jul 8, 2021   �   Austen Allred is the Co-Founder & CEO of the Lambda School, an online coding school that invests in the students by offering free tuition.",
            },
            {
              url: "https://www.tweet-rewind.com/AustenAllred.html",
              title: "Austen Allred - Tweet Rewind (18)",
              description:
                "Austen Allred's top 50 tweets in 2018. I find it hard to believe people are using Siri and are still convinced AI will take away all of our jobs.",
            },
            {
              url: "https://www.zayzoon.com/blog/the-iceberg-principle-4-blooming-in-tech-with-austen-allred",
              title:
                "The Iceberg Principle #4: Blooming in tech with Austen Allred",
              description:
                "Feb 16, 2024   �   From missionary work in the middle of the 2008 financial crisis to CEO of a thriving tech company, Austen was a perfect subject for our Iceberg Principle�...",
            },
            {
              url: "https://jessli.medium.com/a-conversation-with-austen-allred-co-founder-and-ceo-of-lambda-school-ea91e5146163",
              title:
                "A conversation with Austen Allred, co-founder and CEO of Lambda ...",
              description:
                "Aug 31, 2020   �   Prior to founding Lambda School, Austen was a senior manager of growth at LendUp, co-founder of Grasswire, and social team lead at Stryde. At�...",
            },
            {
              url: "https://breakingintostartups.com/austen-allred-lambda-school/",
              title: "Austen Allred - CEO and Co-Founder of Lambda School",
              description:
                "Oct 10, 2018   �   Austen Allred is the CEO and Co-Founder of Lambda School. Recently coming out of Y Combinator, Lambda now has thousands of students.",
            },
            {
              url: "https://www.zayzoon.com/the-iceberg-principle-austen-allred",
              title: "The Iceberg Principle - Austen Allred - ZayZoon",
              description:
                "Austen Allred is the Co-founder and CEO of BloomTech, the company who is disrupting the future of the educational system. This all started from Austen moving to�...",
            },
            {
              url: "https://www.instagram.com/reel/C8IvqebP_af/",
              title:
                "Austin Allred | Sharing our Family's #regenerativefarming story with ...",
              description:
                "Jun 12, 2024   �   154 likes, 4 comments - royalfamilyfarming on June 12, 2024: \"Sharing our Family's #regenerativefarming story with the @seahawks #royalranch�...",
            },
            {
              url: "https://podcasts.apple.com/kh/podcast/e2-austen-allred-on-bloomtechs-saga-and/id1691530886",
              title:
                'E2: Austen Allred on BloomTech…–"In The Arena" - Apple Podcasts',
              description:
                "Jun 28, 2023   �   Austen is the CEO and founder of BloomTech, an education platform famous for pioneering income sharing agreements instead of charging�...",
            },
            {
              url: "https://www.sothisismywhy.com/austen-allred-lambda-school-coding-developer-y-combinator-isa/",
              title: "Ep 61: Austen Allred (Co-Founder & CEO, Lambda School)",
              description:
                "Oct 25, 2021   �   Austen grew up in Utah in a closeknit, Mormon family that greatly valued education. He shares how this experience shaped him as well as the�...",
            },
            {
              url: "https://www.ycombinator.com/blog/a-cs-education-thats-free-until-you-get-a-job-austen-allred-of-lambda-school/",
              title:
                "A CS Education That's Free Until You Get a Job - Austen Allred of ...",
              description:
                "Apr 2, 2019   �   Austen Allred is the CEO and cofounder of Lambda School. Lambda School provides a CS education that's free until you get a job.",
            },
            {
              url: "https://neo.com/investor/austen-allred",
              title: "Austen Allred | endorsed at Neo",
              description:
                "Jan 18, 2024   �   Neo community members endorse Austen Allred as a startup investor.",
            },
            {
              url: "https://alejandrocremades.com/austen-allred/",
              title:
                "Austen Allred On Raising $100 Million To Create A Proven Path To ...",
              description:
                "Austen Allred is the co-founder and CEO of BloomTech. A native of Springville, Utah, Austen's start-up journey began in 2017 with him living in his two-door�...",
            },
            {
              url: "https://www.portfoliocareerpodcast.com/austen-allred",
              title: "Austen Allred - Portfolio Career Podcast",
              description:
                "Sep 21, 2018   �   Austen Allred. Teaching Students to Code and Grow�...",
            },
            {
              url: "https://www.instagram.com/reel/C-vC1jvCtiJ/",
              title:
                "Meet Austin Allred, the owner of Royal Family Dairy and a leader in ...",
              description:
                "Aug 16, 2024   �   We're excited to introduce our grass-fed beef tallow, made from our very own, raised 100% carbon neutral cattle. Get yours today.",
            },
            {
              url: "http://www.modus73.com/learn/austen-allred-scalping-tickets-lambda-school/",
              title:
                "A crazy story of scalping tickets to keep his startup dream alive ...",
              description:
                "Jun 3, 2020   �   You may have heard of Austen Allred, the founder of Lambda School. But have you heard his story about scalping tickets so he could fix his�...",
            },
            {
              url: "https://www.applieddivinitystudies.com/lambda-lies/",
              title:
                "Austen Allred is Consistently Deceptive | Applied Divinity Studies",
              description:
                "Nov 18, 2020   �   Founder/CEO Austen Allred frequently takes to Twitter, defending his bootcamp against allegations of fraud, and rebutting critics with case after case of�...",
            },
            {
              url: "https://www.outskill.com/",
              title: "Outskill: AI Upskilling for Modern Careers",
              description:
                "Austen Allred. Founder at Gauntlet AI. Shaan Puri. Sold his company to Twitch. Varun Mayya. Founder at Aeos of Largest AI�...",
            },
            {
              url: "https://www.theinformation.com/briefings/coding-bootcamp-ceo-austen-allred-fined-by-federal-watchdog",
              title:
                "Coding Bootcamp CEO Austen Allred Fined by Federal Watchdog",
              description:
                "Apr 18, 2024   �   Coding Bootcamp CEO Austen Allred Fined by Federal Watchdog ... A federal agency that oversees consumer finance activities said Thursday it had�...",
            },
            {
              url: "https://www.instagram.com/reel/DAcOrAgyKlx/",
              title:
                "Instagram video by Austin Allred • Sep 27, 2024 at 5:41 PM",
              description:
                "Sep 27, 2024   �   Farmers, Ranchers, & Dairy Farmers are environmentally friendly! more. View all 18 comments. April 21, 2021.",
            },
            {
              url: "https://www.finra.org/rules-guidance/oversight-enforcement/individuals-barred-finra",
              title: "Individuals Barred by FINRA | FINRA.org",
              description:
                "EMILY MAUREEN ALLRED. 5092387, BRANDON C ALLSUP. 3141791, LAURIE SUE ALMACK ... David Austin. 5803618, PHILLIP K AUSTIN. 5262341, TODD AUSTIN. 2089448, OPIE�...",
            },
            {
              url: "https://www.ibtimes.com/profile/austen-allred",
              title: "Austen Allred - International Business Times",
              description:
                "Austen Allred is the co-founder and CEO of Bloom Institute of Technology (BloomTech), formerly Lambda School. A native of Springville, Utah,�...",
            },
            {
              url: "https://www.instagram.com/reel/DGXBCKTpL2P/",
              title:
                "Austin Allred | The American food system is broken. It's a ... - Instagram",
              description:
                "Feb 22, 2025   �   The American food system is broken. It's a system that favors large corporations over farmers, that prioritizes profit over people and the�...",
            },
            {
              url: "https://blog.producthunt.com/product-hunt-radio-the-future-of-education-with-lambda-schools-austen-allred-832bd2faa1c4",
              title:
                "The future of education with Lambda School's Austen Allred",
              description:
                "Mar 13, 2019   �   In this episode, Abadesi talks to Austen Allred, co-founder and CEO of Lambda School. Lambda School is a pioneer in the income-sharing�...",
            },
            {
              url: "https://www.2centdad.com/austen-allred/",
              title:
                "Higher Education Disruption with Austen Allred - 2 Cent Dad",
              description:
                "Aug 11, 2020   �   Austen Allred joins the podcast to talk about why school isn't a one size fits all and how you can be a dad in the ever changing education�...",
            },
            {
              url: "https://www.uhsaa.org/btrack/BoysStateRecords.pdf",
              title: "[PDF] UHSAA Track & Field State Records",
              description:
                "5 days ago   �   Lorin Allred. Sorenson. Landen Stice. Mark Higbee. Riley Stringham ... Austen Jorgensen. Bo Hickman. Austin Kafentzis. Ethan Ecker. Green River.",
            },
            {
              url: "https://www.ibtimes.com/austen-allred-will-pay-you-hire-his-graduates-3184124",
              title:
                "Austen Allred Will Pay You To Hire His Graduates! | IBTimes",
              description:
                "Apr 22, 2021   �   The visionary founder and CEO of Lambda School wants to blow up conventional, restrictive hiring practices that he says just plain don't�...",
            },
            {
              url: "https://www.tiktok.com/discover/little-mermaid-show-passholder-preview",
              title: "Little Mermaid Show Passholder Preview | TikTok",
              description:
                "6 days ago   �   There are still a few weeks until Jane Austen's EMMA opens - but in the meanwhile... ... I must say    @Zack Allred",
            },
            {
              url: "https://www.netizen.page/search",
              title: "Wednesday, May 14, 2025 - Netizen",
              description:
                "... Austin connect robotics and software to construction equipment you get Terrafirma pic.twitter.com/dKuzLPg5nr. — Austen Allred (@Austen) May 13, 2025. And of�...",
            },
            {
              url: "https://www.theguardian.com/index/contributors/a",
              title: "A | Contributors | The Guardian",
              description:
                "Kat Austen � Daryl Austin � Ian Austin � Rod Austin � Sissy Eileen Austin � Bryan ... Ammon Allred � Amos Guiora � Amos Harel � Amos Oz � Amos Roberts � Amos Toh�...",
            },
            {
              url: "https://www.tiktok.com/discover/landon-anderson-coach-utah",
              title: "Landon Anderson Coach Utah | TikTok",
              description:
                "May 5, 2025   �   KSL NewsRadio's Aimee Cobabe has more. Listen more at KSLPodcasts.com Spenser Heaps, Jeffret D. Allred ... original sound - Austen Alexander.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "twitch",
    name: "Twitch",
    description: "Scrape Twitch clips",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get Twitch profile",
        fullDescription:
          "Retrieves a Twitch user's public profile by handle, including identity, social links, and content. Returns id, handle, displayName, description, followers count, and linked social accounts (instagram, x, tiktok). Also includes allVideos with game info, duration, and view counts, featuredClips with clip metadata and thumbnails, and similarStreamers.",
        path: "/v1/twitch/profile",
        params: [
          {
            name: "handle",
            type: "string",
            description: "Twitch handle",
            required: true,
            placeholder: "ninja",
          },
        ],
        sampleResponse: {
          success: true,
          id: "19571641",
          handle: "ninja",
          displayName: "Ninja",
          description:
            "Just want to make people happy. Co-Founder @DrinkNutcase. ",
          followers: 19235206,
          instagram: "https://www.instagram.com/ninja",
          x: "https://x.com/ninja",
          tiktok: "https://www.tiktok.com/@ninja",
          bit: "http://bit.ly/SubscribeNinja",
          allVideos: [
            {
              animatedPreviewURL:
                "https://d1m7jfoe9zdc1j.cloudfront.net/98b2604eb65520876fc3_ninja_331071920125_1754658335/storyboards/2534457664-strip-0.jpg",
              game: {
                boxArtURL:
                  "https://static-cdn.jtvnw.net/ttv-boxart/33214-40x56.jpg",
                id: "33214",
                slug: "fortnite",
                displayName: "Fortnite",
                name: "Fortnite",
                __typename: "Game",
              },
              id: "2534457664",
              lengthSeconds: 35910,
              owner: {
                displayName: "Ninja",
                id: "19571641",
                login: "ninja",
                profileImageURL:
                  "https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-50x50.png",
                primaryColorHex: "1F69FF",
                roles: {
                  isPartner: true,
                  __typename: "UserRoles",
                },
                __typename: "User",
              },
              previewThumbnailURL:
                "https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/98b2604eb65520876fc3_ninja_331071920125_1754658335//thumb/thumb0-320x180.jpg",
              publishedAt: "2025-08-08T13:05:39Z",
              self: {
                isRestricted: false,
                viewingHistory: null,
                __typename: "VideoSelfEdge",
              },
              title:
                "USE CODE NINJA #EPICPARTNER | DAY 2 OF NEW SEASON AND ITS A BLAST | God is good! | Marvel rivals later and SPORTS SHOW AT 2 CENTRAL AFC WEST",
              viewCount: 278659,
              resourceRestriction: null,
              contentTags: [],
              __typename: "Video",
            },
          ],
          featuredClips: [
            {
              id: "3724988753",
              slug: "AthleticKindJayEleGiggle-BcNDJkcggMoP5HCa",
              clipTitle: "andre the bus driver",
              clipViewCount: 1799,
              curator: {
                id: "407947222",
                login: "grumbaelive",
                displayName: "GrumbaeLIVE",
                __typename: "User",
              },
              clipGame: {
                id: "33214",
                slug: "fortnite",
                name: "Fortnite",
                displayName: "Fortnite",
                boxArtURL:
                  "https://static-cdn.jtvnw.net/ttv-boxart/33214-52x72.jpg",
                __typename: "Game",
              },
              broadcaster: {
                id: "19571641",
                login: "ninja",
                displayName: "Ninja",
                profileImageURL:
                  "https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-50x50.png",
                primaryColorHex: "1F69FF",
                roles: {
                  isPartner: true,
                  __typename: "UserRoles",
                },
                __typename: "User",
              },
              thumbnailURL:
                "https://static-cdn.jtvnw.net/twitch-clips-thumbnails-prod/AthleticKindJayEleGiggle-BcNDJkcggMoP5HCa/7eb7fa38-6e54-4aa1-a6d4-d65f46870161/preview.jpg",
              createdAt: "2025-08-08T16:08:23Z",
              durationSeconds: 30,
              isFeatured: true,
              guestStarParticipants: {
                host: {
                  id: "19571641",
                  login: "ninja",
                  displayName: "Ninja",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-300x300.png",
                  primaryColorHex: "1F69FF",
                  description:
                    "Just want to make people happy. Co-Founder @DrinkNutcase. ",
                  __typename: "User",
                },
                guests: [
                  {
                    id: "100462683",
                    login: "beardedblevins",
                    displayName: "BeardedBlevins",
                    profileImageURL:
                      "https://static-cdn.jtvnw.net/jtv_user_pictures/bb440d87-e3eb-4fc3-adb4-ad5b8500ee85-profile_image-300x300.png",
                    primaryColorHex: "00C7FB",
                    description:
                      "Husband. Father. Catholic. Detroit Sports fan. Bearded. ",
                    __typename: "User",
                  },
                ],
                sessionIdentifier: "310dXNdDIbjlo9gQiPXJtZ6cdir",
                __typename: "GuestStarParticipants",
              },
              __typename: "Clip",
            },
          ],
          similarStreamers: [
            {
              id: "964426424",
              displayName: "ninjasologames",
              login: "ninjasologames",
              primaryColorHex: "1F69FF",
              profileImageURL:
                "https://static-cdn.jtvnw.net/jtv_user_pictures/020b2022-5276-4f1b-af73-6eaa6f9d847c-profile_image-300x300.png",
              stream: null,
              __typename: "User",
            },
          ],
        },
      },
      {
        name: "Clip",
        method: "GET",
        description: "Get Twitch clip",
        fullDescription:
          "Fetches detailed data for a Twitch clip by URL, including metadata and direct video URLs. Returns clip id, slug, url, embedURL, title, viewCount, language, durationSeconds, game info, broadcaster details with follower count, thumbnailURL, and videoQualities at multiple resolutions with a signed videoURL for playback. Also includes additional clips from the same broadcaster.",
        path: "/v1/twitch/clip",
        sampleResponse: [
          {
            data: {
              clip: {
                id: "387484507",
                slug: "CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                url: "https://clips.twitch.tv/CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                embedURL:
                  "https://clips.twitch.tv/embed?clip=CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                title: "un grande el mesero",
                viewCount: 52441,
                language: "ES",
                isFeatured: true,
                assets: [
                  {
                    id: "AT-cm|W4NkMPhK87GGxO1Fr4AjEA",
                    aspectRatio: 1.7777777777777777,
                    type: "SOURCE",
                    createdAt: "2024-03-30T21:52:12.134391826Z",
                    creationState: "CREATED",
                    curator: {
                      id: "192477639",
                      login: "satagul_sy",
                      displayName: "Satagul_SY",
                      profileImageURL:
                        "https://static-cdn.jtvnw.net/jtv_user_pictures/a7d1cf0c-6482-475c-a7ba-9fedf75f0149-profile_image-50x50.png",
                      __typename: "User",
                    },
                    thumbnailURL:
                      "https://clips-media-assets2.twitch.tv/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-preview-480x272.jpg",
                    videoQualities: [
                      {
                        frameRate: 60.01382974851694,
                        quality: "1080",
                        sourceURL:
                          "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA.mp4",
                        __typename: "ClipVideoQuality",
                      },
                      {
                        frameRate: 60.01382974851694,
                        quality: "720",
                        sourceURL:
                          "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-720.mp4",
                        __typename: "ClipVideoQuality",
                      },
                      {
                        frameRate: 30.025111911780762,
                        quality: "480",
                        sourceURL:
                          "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-480.mp4",
                        __typename: "ClipVideoQuality",
                      },
                      {
                        frameRate: 30.025111911780762,
                        quality: "360",
                        sourceURL:
                          "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-360.mp4",
                        __typename: "ClipVideoQuality",
                      },
                    ],
                    portraitMetadata: null,
                    __typename: "ClipAsset",
                  },
                ],
                curator: {
                  id: "192477639",
                  login: "satagul_sy",
                  displayName: "Satagul_SY",
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/a7d1cf0c-6482-475c-a7ba-9fedf75f0149-profile_image-70x70.png",
                  __typename: "User",
                },
                game: {
                  id: "509672",
                  name: "IRL",
                  boxArtURL:
                    "https://static-cdn.jtvnw.net/ttv-boxart/509672-52x72.jpg",
                  displayName: "IRL",
                  slug: "irl",
                  __typename: "Game",
                },
                broadcast: {
                  id: "43930529883",
                  title: null,
                  __typename: "Broadcast",
                },
                broadcaster: {
                  id: "167189231",
                  login: "staryuuki",
                  displayName: "Staryuuki",
                  primaryColorHex: "689AFF",
                  isPartner: true,
                  profileImageURL:
                    "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-70x70.png",
                  followers: {
                    totalCount: 3450065,
                    __typename: "FollowerConnection",
                  },
                  stream: null,
                  lastBroadcast: {
                    id: "314597248121",
                    startedAt: "2025-01-23T06:52:10.179125Z",
                    __typename: "Broadcast",
                  },
                  self: null,
                  __typename: "User",
                },
                thumbnailURL:
                  "https://clips-media-assets2.twitch.tv/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-preview-260x147.jpg",
                createdAt: "2024-03-30T21:52:12Z",
                isPublished: true,
                durationSeconds: 27,
                champBadge: null,
                playbackAccessToken: {
                  signature: "43c84d015eddd8ebc145f914824caa1c37ff6559",
                  value:
                    '{"authorization":{"forbidden":false,"reason":""},"clip_uri":"https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA.mp4","clip_slug":"CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ","device_id":"gtd1TXg9937g0Ra59d6tJBe2f2vWobM7","expires":1737831991,"user_id":"","version":2}',
                  __typename: "PlaybackAccessToken",
                },
                video: null,
                videoOffsetSeconds: null,
                videoQualities: [
                  {
                    sourceURL:
                      "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA.mp4",
                    __typename: "ClipVideoQuality",
                  },
                  {
                    sourceURL:
                      "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-720.mp4",
                    __typename: "ClipVideoQuality",
                  },
                  {
                    sourceURL:
                      "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-480.mp4",
                    __typename: "ClipVideoQuality",
                  },
                  {
                    sourceURL:
                      "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-360.mp4",
                    __typename: "ClipVideoQuality",
                  },
                ],
                isViewerEditRestricted: true,
                suggestedCropping: null,
                __typename: "Clip",
                videoURL:
                  "https://production.assets.clips.twitchcdn.net/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA.mp4?sig=43c84d015eddd8ebc145f914824caa1c37ff6559&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22https%3A%2F%2Fproduction.assets.clips.twitchcdn.net%2FW4NkMPhK87GGxO1Fr4AjEA%2FAT-cm%257CW4NkMPhK87GGxO1Fr4AjEA.mp4%22%2C%22clip_slug%22%3A%22CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ%22%2C%22device_id%22%3A%22gtd1TXg9937g0Ra59d6tJBe2f2vWobM7%22%2C%22expires%22%3A1737831991%2C%22user_id%22%3A%22%22%2C%22version%22%3A2%7D",
              },
            },
            extensions: {
              durationMilliseconds: 87,
              operationName: "ShareClipRenderStatus",
              requestID: "01JJD92A0J3G5ND9PWV2SSXCPC",
            },
          },
          {
            data: {
              user: {
                id: "167189231",
                clips: {
                  pageInfo: {
                    hasNextPage: true,
                    __typename: "PageInfo",
                  },
                  edges: [
                    {
                      cursor: null,
                      node: {
                        id: "2068359287",
                        slug: "AmusedDiligentDelicataJKanStyle",
                        url: "https://clips.twitch.tv/AmusedDiligentDelicataJKanStyle",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=AmusedDiligentDelicataJKanStyle",
                        title: "uff",
                        viewCount: 134949,
                        language: "ES",
                        curator: {
                          id: "106798576",
                          login: "000pk",
                          displayName: "000pk",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/31012586624-offset-134-preview-260x147.jpg",
                        createdAt: "2018-10-30T16:52:07Z",
                        durationSeconds: 30,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3014081212",
                        slug: "LuckyTardyChinchillaCopyThis",
                        url: "https://clips.twitch.tv/LuckyTardyChinchillaCopyThis",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=LuckyTardyChinchillaCopyThis",
                        title: ".",
                        viewCount: 105199,
                        language: "ES",
                        curator: {
                          id: "46575366",
                          login: "acegickmo",
                          displayName: "Acegickmo",
                          __typename: "User",
                        },
                        game: {
                          id: "512927",
                          slug: "just-dance-2020",
                          name: "Just Dance 2020",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/512927_IGDB-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C923940524-preview-260x147.jpg",
                        createdAt: "2020-11-08T02:30:27Z",
                        durationSeconds: 39,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "4256707722",
                        slug: "PiliableAbstemiousElkYouWHY-msArgXHf2VklQRR6",
                        url: "https://clips.twitch.tv/PiliableAbstemiousElkYouWHY-msArgXHf2VklQRR6",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=PiliableAbstemiousElkYouWHY-msArgXHf2VklQRR6",
                        title: "rompió la maquina xdd",
                        viewCount: 81131,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509671",
                          slug: "fitness-and-health",
                          name: "Fitness & Health",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509671-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/OkjzuprAK4Fx39lZJUEUeg/AT-cm%7COkjzuprAK4Fx39lZJUEUeg-preview-260x147.jpg",
                        createdAt: "2024-02-19T23:31:56Z",
                        durationSeconds: 19,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "2209460644",
                        slug: "ThoughtfulPeacefulLlamaPanicVis",
                        url: "https://clips.twitch.tv/ThoughtfulPeacefulLlamaPanicVis",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=ThoughtfulPeacefulLlamaPanicVis",
                        title: "pero que",
                        viewCount: 69120,
                        language: "ES",
                        curator: {
                          id: "471714921",
                          login: "sephtis25",
                          displayName: "sephtis25",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/40472010718-offset-10240-preview-260x147.jpg",
                        createdAt: "2020-11-14T02:38:55Z",
                        durationSeconds: 28,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "2292904553",
                        slug: "FuriousJazzyGoblinCurseLit",
                        url: "https://clips.twitch.tv/FuriousJazzyGoblinCurseLit",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=FuriousJazzyGoblinCurseLit",
                        title: "jajaja se me fue el cochinito...!!!!",
                        viewCount: 55643,
                        language: "ES",
                        curator: {
                          id: "246588214",
                          login: "darkmoux",
                          displayName: "DarkMoux",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C948684283-preview-260x147.jpg",
                        createdAt: "2020-11-29T04:34:30Z",
                        durationSeconds: 4,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "1591728456",
                        slug: "DeadSecretiveDeerWutFace-3WsIhVfQTHpuRBOP",
                        url: "https://clips.twitch.tv/DeadSecretiveDeerWutFace-3WsIhVfQTHpuRBOP",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=DeadSecretiveDeerWutFace-3WsIhVfQTHpuRBOP",
                        title: "se cayó en just dance xd",
                        viewCount: 52502,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/UARiUN1rCIVX0Ex6bkQTjw/AT-cm%7CUARiUN1rCIVX0Ex6bkQTjw-preview-260x147.jpg",
                        createdAt: "2023-09-03T04:48:23Z",
                        durationSeconds: 11,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "387484507",
                        slug: "CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                        url: "https://clips.twitch.tv/CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ",
                        title: "un grande el mesero",
                        viewCount: 52441,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509672",
                          slug: "irl",
                          name: "IRL",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509672-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/W4NkMPhK87GGxO1Fr4AjEA/AT-cm%7CW4NkMPhK87GGxO1Fr4AjEA-preview-260x147.jpg",
                        createdAt: "2024-03-30T21:52:12Z",
                        durationSeconds: 27,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3175923537",
                        slug: "WonderfulEnchantingBeefNotLikeThis-HApoD6jPpOVCW2eB",
                        url: "https://clips.twitch.tv/WonderfulEnchantingBeefNotLikeThis-HApoD6jPpOVCW2eB",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=WonderfulEnchantingBeefNotLikeThis-HApoD6jPpOVCW2eB",
                        title: "perfecto equilibrio",
                        viewCount: 51455,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/D1kjFBwKaA-oz6TlQltngQ/AT-cm%7CD1kjFBwKaA-oz6TlQltngQ-preview-260x147.jpg",
                        createdAt: "2024-04-19T00:01:30Z",
                        durationSeconds: 17,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: {
                          guests: [],
                          sessionIdentifier: "",
                          __typename: "GuestStarParticipants",
                        },
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3676936393",
                        slug: "ColdNurturingCroissantVoteNay",
                        url: "https://clips.twitch.tv/ColdNurturingCroissantVoteNay",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=ColdNurturingCroissantVoteNay",
                        title: "mmm que puede hacer xD",
                        viewCount: 46272,
                        language: "ES",
                        curator: {
                          id: "47307721",
                          login: "6alucard9",
                          displayName: "6Alucard9",
                          __typename: "User",
                        },
                        game: {
                          id: "512927",
                          slug: "just-dance-2020",
                          name: "Just Dance 2020",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/512927_IGDB-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C746191447-preview-260x147.jpg",
                        createdAt: "2020-06-11T01:48:09Z",
                        durationSeconds: 11,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "1408734293",
                        slug: "PlayfulPhilanthropicBaboonPRChase-LXqIzErAZRhhmYIm",
                        url: "https://clips.twitch.tv/PlayfulPhilanthropicBaboonPRChase-LXqIzErAZRhhmYIm",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=PlayfulPhilanthropicBaboonPRChase-LXqIzErAZRhhmYIm",
                        title: "cual es el verdadero?",
                        viewCount: 42105,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509667",
                          slug: "food-and-drink",
                          name: "Food & Drink",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509667-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/3GrinS16iMxKwGUYYZmCJg/AT-cm%7C3GrinS16iMxKwGUYYZmCJg-preview-260x147.jpg",
                        createdAt: "2024-09-19T01:52:29Z",
                        durationSeconds: 7,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: {
                          guests: [],
                          sessionIdentifier: "",
                          __typename: "GuestStarParticipants",
                        },
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "4114267322",
                        slug: "PricklyMildSparrowBCWarrior-HROznIBydNqYgkL-",
                        url: "https://clips.twitch.tv/PricklyMildSparrowBCWarrior-HROznIBydNqYgkL-",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=PricklyMildSparrowBCWarrior-HROznIBydNqYgkL-",
                        title: "modelando crocs",
                        viewCount: 41829,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509672",
                          slug: "irl",
                          name: "IRL",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509672-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/fSGuvR0Ts5yAcnTamIJC_g/AT-cm%7CfSGuvR0Ts5yAcnTamIJC_g-preview-260x147.jpg",
                        createdAt: "2024-10-10T18:35:24Z",
                        durationSeconds: 9,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: {
                          guests: [],
                          sessionIdentifier: "",
                          __typename: "GuestStarParticipants",
                        },
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "2236306000",
                        slug: "BlindingDelightfulDurianBloodTrail-K5hg3bGH94H_Xv2b",
                        url: "https://clips.twitch.tv/BlindingDelightfulDurianBloodTrail-K5hg3bGH94H_Xv2b",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=BlindingDelightfulDurianBloodTrail-K5hg3bGH94H_Xv2b",
                        title: "Ahegao deforme o estornudo tímido jajaja",
                        viewCount: 40635,
                        language: "ES",
                        curator: null,
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C1112919636-preview-260x147.jpg",
                        createdAt: "2021-03-30T03:37:26Z",
                        durationSeconds: 7,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3579719350",
                        slug: "CallousHonestMouseMVGame",
                        url: "https://clips.twitch.tv/CallousHonestMouseMVGame",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=CallousHonestMouseMVGame",
                        title: "zfd",
                        viewCount: 40447,
                        language: "ES",
                        curator: null,
                        game: {
                          id: "512927",
                          slug: "just-dance-2020",
                          name: "Just Dance 2020",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/512927_IGDB-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C867121828-preview-260x147.jpg",
                        createdAt: "2020-09-22T01:22:52Z",
                        durationSeconds: 29,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3898454989",
                        slug: "ConfidentBigMushroomAliens",
                        url: "https://clips.twitch.tv/ConfidentBigMushroomAliens",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=ConfidentBigMushroomAliens",
                        title: "Mirando a coscu sale mal xd",
                        viewCount: 39318,
                        language: "EN",
                        curator: {
                          id: "193115944",
                          login: "yuwa_",
                          displayName: "Yuwa_",
                          __typename: "User",
                        },
                        game: {
                          id: "509672",
                          slug: "irl",
                          name: "IRL",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509672-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/28747232144-offset-16894-preview-260x147.jpg",
                        createdAt: "2018-05-19T05:28:15Z",
                        durationSeconds: 32,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "2374813344",
                        slug: "CoweringPrettiestCakeCopyThis-WRNpT04oyqLVGY5H",
                        url: "https://clips.twitch.tv/CoweringPrettiestCakeCopyThis-WRNpT04oyqLVGY5H",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=CoweringPrettiestCakeCopyThis-WRNpT04oyqLVGY5H",
                        title: "saltando en la cama",
                        viewCount: 33939,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509672",
                          slug: "irl",
                          name: "IRL",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509672-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/5qV-I1kTaU9OKMqi1RmORw/AT-cm%7C5qV-I1kTaU9OKMqi1RmORw-preview-260x147.jpg",
                        createdAt: "2024-05-10T15:16:29Z",
                        durationSeconds: 18,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: {
                          guests: [],
                          sessionIdentifier: "",
                          __typename: "GuestStarParticipants",
                        },
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3174101964",
                        slug: "TransparentWittyRhinocerosFrankerZ",
                        url: "https://clips.twitch.tv/TransparentWittyRhinocerosFrankerZ",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=TransparentWittyRhinocerosFrankerZ",
                        title:
                          "Esta noche película con subs !discord !cofres | CARTAS ON",
                        viewCount: 33458,
                        language: "ES",
                        curator: {
                          id: "78073552",
                          login: "el_penud0",
                          displayName: "El_Penud0",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/36404054512-offset-5484-preview-260x147.jpg",
                        createdAt: "2019-12-13T01:05:47Z",
                        durationSeconds: 26,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "2151493414",
                        slug: "FurtiveAuspiciousTireFloof-Pw_xt7OJ_L4dIo_t",
                        url: "https://clips.twitch.tv/FurtiveAuspiciousTireFloof-Pw_xt7OJ_L4dIo_t",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=FurtiveAuspiciousTireFloof-Pw_xt7OJ_L4dIo_t",
                        title: "se quema xd",
                        viewCount: 31601,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509667",
                          slug: "food-and-drink",
                          name: "Food & Drink",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509667-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/8Jy_aT8P8bezify-HSKP7Q/AT-cm%7C8Jy_aT8P8bezify-HSKP7Q-preview-260x147.jpg",
                        createdAt: "2023-09-08T05:21:25Z",
                        durationSeconds: 26,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "863173673",
                        slug: "TallSourPlumageKappaWealth-cYPgjmIKpKEtO2nM",
                        url: "https://clips.twitch.tv/TallSourPlumageKappaWealth-cYPgjmIKpKEtO2nM",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=TallSourPlumageKappaWealth-cYPgjmIKpKEtO2nM",
                        title: "leche de que",
                        viewCount: 30095,
                        language: "ES",
                        curator: {
                          id: "192477639",
                          login: "satagul_sy",
                          displayName: "Satagul_SY",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/eyD6mHGD4I5iCqShLTtpzA/AT-cm%7CeyD6mHGD4I5iCqShLTtpzA-preview-260x147.jpg",
                        createdAt: "2023-08-26T02:24:31Z",
                        durationSeconds: 20,
                        champBadge: null,
                        isFeatured: true,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: null,
                      node: {
                        id: "3580660760",
                        slug: "PuzzledMotionlessRatBrokeBack",
                        url: "https://clips.twitch.tv/PuzzledMotionlessRatBrokeBack",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=PuzzledMotionlessRatBrokeBack",
                        title: "Cara jentai osiosi",
                        viewCount: 29295,
                        language: "ES",
                        curator: {
                          id: "146446878",
                          login: "yayomostacho23",
                          displayName: "yayomostacho23",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/AT-cm%7C920126991-preview-260x147.jpg",
                        createdAt: "2020-11-05T00:58:35Z",
                        durationSeconds: 4,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                    {
                      cursor: "MjA=",
                      node: {
                        id: "140346618",
                        slug: "AlertCrispyWalrusTBTacoRight",
                        url: "https://clips.twitch.tv/AlertCrispyWalrusTBTacoRight",
                        embedURL:
                          "https://clips.twitch.tv/embed?clip=AlertCrispyWalrusTBTacoRight",
                        title: "Cuando es tu primera vez en la cama xd",
                        viewCount: 29214,
                        language: "ES",
                        curator: {
                          id: "463913453",
                          login: "briefer331",
                          displayName: "Briefer331",
                          __typename: "User",
                        },
                        game: {
                          id: "509658",
                          slug: "just-chatting",
                          name: "Just Chatting",
                          boxArtURL:
                            "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg",
                          __typename: "Game",
                        },
                        broadcaster: {
                          id: "167189231",
                          login: "staryuuki",
                          displayName: "Staryuuki",
                          profileImageURL:
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/b45a3305-bc42-41cc-a754-e6679a2d9ef0-profile_image-50x50.png",
                          primaryColorHex: "689AFF",
                          roles: {
                            isPartner: true,
                            __typename: "UserRoles",
                          },
                          __typename: "User",
                        },
                        thumbnailURL:
                          "https://clips-media-assets2.twitch.tv/40414694078-offset-5986-preview-260x147.jpg",
                        createdAt: "2020-11-10T01:44:34Z",
                        durationSeconds: 30,
                        champBadge: null,
                        isFeatured: false,
                        guestStarParticipants: null,
                        __typename: "Clip",
                      },
                      __typename: "ClipEdge",
                    },
                  ],
                  __typename: "ClipConnection",
                },
                __typename: "User",
              },
            },
            extensions: {
              durationMilliseconds: 76,
              operationName: "ClipsCards__User",
              requestID: "01JJD92A0J3G5ND9PWV2SSXCPC",
            },
          },
          {
            data: {
              user: null,
            },
            extensions: {
              durationMilliseconds: 2,
              operationName: "GetDisplayName",
              requestID: "01JJD92A0J3G5ND9PWV2SSXCPC",
            },
          },
        ],
        params: [
          {
            name: "url",
            placeholder:
              "https://www.twitch.tv/staryuuki/clip/CloudySavageMarjoramRuleFive--ErzsYbE7UWvgCMQ?filter=clips&range=all&sort=time",
            type: "string",
            required: true,
            description: "Twitch clip URL",
          },
        ],
      },
    ],
  },
  {
    id: "kick",
    name: "Kick",
    description: "Scrape Kick clips",
    endpoints: [
      {
        name: "Clip",
        method: "GET",
        description: "Get Kick clip",
        fullDescription:
          "Fetches detailed data for a Kick clip by URL, including video, metadata, and channel info. Returns clip id, title, clip_url, thumbnail_url, video_url, view_count, likes_count, duration, privacy status, and is_mature flag. Also includes category details (name, slug), creator info (username), and channel info (username, profile_picture).",
        path: "/v1/kick/clip",
        sampleResponse: {
          clip: {
            id: "clip_01JGJHB6CEVFCQRYTVPM8DW892",
            livestream_id: "45013036",
            category_id: "15",
            channel_id: 668,
            user_id: 13035177,
            title: "MonkaW",
            clip_url:
              "https://clips.kick.com/clips/7a/clip_01JGJHB6CEVFCQRYTVPM8DW892/playlist.m3u8",
            thumbnail_url:
              "https://clips.kick.com/clips/7a/clip_01JGJHB6CEVFCQRYTVPM8DW892/thumbnail.webp",
            privacy: "CLIP_PRIVACY_PUBLIC",
            likes: 0,
            liked: false,
            views: 11793,
            duration: 50,
            started_at: "2025-01-02T03:34:51.825Z",
            created_at: "2025-01-02T03:37:13.559618Z",
            is_mature: false,
            video_url:
              "https://clips.kick.com/clips/7a/clip_01JGJHB6CEVFCQRYTVPM8DW892/playlist.m3u8",
            view_count: 11793,
            likes_count: 0,
            vod: {
              id: "2ba60535-342e-4397-b16a-fb739ca96b21",
            },
            category: {
              id: 15,
              name: "Just Chatting",
              slug: "just-chatting",
              responsive:
                "https://files.kick.com/images/subcategories/15/banner/b697a8a3-62db-4779-aa76-e4e47662af97",
              banner:
                "https://files.kick.com/images/subcategories/15/banner/b697a8a3-62db-4779-aa76-e4e47662af97",
              parent_category: "irl",
            },
            creator: {
              id: 13035177,
              username: "cskorm",
              slug: "cskorm",
              profile_picture: null,
            },
            channel: {
              id: 668,
              username: "xQc",
              slug: "xqc",
              profile_picture:
                "https://files.kick.com/images/user/676/profile_image/conversion/931b4e8f-5445-427c-bd82-b473530390cc-thumb.webp",
            },
          },
        },
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Kick clip URL",
            placeholder:
              "https://kick.com/xqc/clips/clip_01JGJHB6CEVFCQRYTVPM8DW892",
          },
        ],
      },
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    description: "Scrape Snapchat user profiles and thier stories",
    endpoints: [
      {
        name: "User Profile",
        method: "GET",
        description: "Get Snapchat user profile",
        fullDescription:
          "Retrieves a Snapchat user's public profile by handle, including identity, stories, and spotlight content. Returns userProfile with username, title, snapcodeImageUrl, subscriberCount, bio, and profilePictureUrl. Also includes highlightStoryMetadata with individual story snaps (mediaUrl, mediaType, thumbnailUrl) and spotlightStoryMetadata with video details and engagement stats (viewCount, shareCount, commentCount).",
        path: "/v1/snapchat/profile",
        sampleResponse: {
          success: true,
          userProfile: {
            username: "zane",
            title: "Zane",
            snapcodeImageUrl:
              "https://app.snapchat.com/web/deeplink/snapcode?username=zane&type=SVG&bitmoji=enable",
            badge: 1,
            categoryStringId: "",
            subcategoryStringId: "",
            subscriberCount: "1535700",
            bio: "Time to get buck wild baby",
            websiteUrl: "",
            profilePictureUrl:
              "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvSG5jNU4zNFh5MWNacFlPR0Y2T3pxP2JvPUVnMGFBQm9BTWdFRVNBSlFHV0FCJnVjPTI1._RS0,90_FMjpeg",
            address: "",
            bitmoji3d: null,
            hasCuratedHighlights: true,
            hasSpotlightHighlights: true,
            mutableName: "",
            publisherType: "",
            squareHeroImageUrl:
              "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvZnl5TndBTlZVU1IzckVGWWpuQlZnP2JvPUVnMGFBQm9BTWdFRVNBSlFHV0FCJnVjPTI1._RS0,1080_FMjpeg",
            primaryColor: "",
            hasStory: false,
            relatedAccountsInfo: [
              {
                publicProfileInfo: {
                  username: "imnotscottysire",
                  title: "Scotty Sire",
                  snapcodeImageUrl: "",
                  badge: 1,
                  categoryStringId: "",
                  subcategoryStringId: "",
                  subscriberCount: "0",
                  bio: "",
                  websiteUrl: "",
                  profilePictureUrl:
                    "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvZUhZSzNoRVRGcEhLeHFaVEtKOEQwP2JvPUVna3lBUVJJQWxBWllBRSUzRCZ1Yz0yNQ._RS0,640_FMjpeg",
                  address: "",
                  bitmoji3d: null,
                  hasCuratedHighlights: false,
                  hasSpotlightHighlights: false,
                  mutableName: "",
                  publisherType: "",
                  squareHeroImageUrl: "",
                  primaryColor: "",
                  hasStory: true,
                  relatedAccountsInfo: [],
                  creationTimestampMs: null,
                  lastUpdateTimestampMs: null,
                  businessProfileId: "ebc366e6-3058-4c94-8e85-35a4e50c6737",
                },
                subscribeLink: {
                  oneLinkBaseUrl: "https://click.snapchat.com/aVHG",
                  pidKeys: ["af_pid", "utm_source"],
                  pidFallbackValue: "consumer_web",
                  campaignKeys: ["af_c", "utm_campaign"],
                  campaignFallbackValue: "add_user",
                  googleClickIdParam: "af_sub1",
                  deepLinkUrl:
                    "https://www.snapchat.com/add/imnotscottysire?sc_referrer=web",
                  iosAppStoreUrl:
                    "https://apps.apple.com/app/apple-store/id447188370?pt=614006&ct=add_user&mt=8",
                  desktopPageUrl:
                    "https://snapchat.com/download?purpose=web_stories&sp=add_user",
                },
              },
              {
                publicProfileInfo: {
                  username: "toddysmithy",
                  title: "toddysmithy",
                  snapcodeImageUrl: "",
                  badge: 1,
                  categoryStringId: "",
                  subcategoryStringId: "",
                  subscriberCount: "0",
                  bio: "",
                  websiteUrl: "",
                  profilePictureUrl:
                    "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvRU0yNWJseUVVaTJWVFNNUk9vNkJvP2JvPUVnMGFBQm9BTWdFRVNBSlFHV0FCJnVjPTI1._RS0,640_FMjpeg",
                  address: "",
                  bitmoji3d: null,
                  hasCuratedHighlights: false,
                  hasSpotlightHighlights: false,
                  mutableName: "",
                  publisherType: "",
                  squareHeroImageUrl: "",
                  primaryColor: "",
                  hasStory: true,
                  relatedAccountsInfo: [],
                  creationTimestampMs: null,
                  lastUpdateTimestampMs: null,
                  businessProfileId: "98af2236-b98c-48f6-81c1-b788b6216624",
                },
                subscribeLink: {
                  oneLinkBaseUrl: "https://click.snapchat.com/aVHG",
                  pidKeys: ["af_pid", "utm_source"],
                  pidFallbackValue: "consumer_web",
                  campaignKeys: ["af_c", "utm_campaign"],
                  campaignFallbackValue: "add_user",
                  googleClickIdParam: "af_sub1",
                  deepLinkUrl:
                    "https://www.snapchat.com/add/toddysmithy?sc_referrer=web",
                  iosAppStoreUrl:
                    "https://apps.apple.com/app/apple-store/id447188370?pt=614006&ct=add_user&mt=8",
                  desktopPageUrl:
                    "https://snapchat.com/download?purpose=web_stories&sp=add_user",
                },
              },
              {
                publicProfileInfo: {
                  username: "jason23nash",
                  title: "Jason Nash",
                  snapcodeImageUrl: "",
                  badge: 1,
                  categoryStringId: "",
                  subcategoryStringId: "",
                  subscriberCount: "0",
                  bio: "",
                  websiteUrl: "",
                  profilePictureUrl:
                    "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvY1JVOFlWTDlXSGc1VEY3U1ZYUmZoP2JvPUVnMGFBQm9BTWdFRVNBSlFHV0FCJnVjPTI1._RS0,640_FMjpeg",
                  address: "",
                  bitmoji3d: null,
                  hasCuratedHighlights: false,
                  hasSpotlightHighlights: false,
                  mutableName: "",
                  publisherType: "",
                  squareHeroImageUrl: "",
                  primaryColor: "",
                  hasStory: true,
                  relatedAccountsInfo: [],
                  creationTimestampMs: null,
                  lastUpdateTimestampMs: null,
                  businessProfileId: "57bb8cac-662d-460f-9dc2-1aac606264ec",
                },
                subscribeLink: {
                  oneLinkBaseUrl: "https://click.snapchat.com/aVHG",
                  pidKeys: ["af_pid", "utm_source"],
                  pidFallbackValue: "consumer_web",
                  campaignKeys: ["af_c", "utm_campaign"],
                  campaignFallbackValue: "add_user",
                  googleClickIdParam: "af_sub1",
                  deepLinkUrl:
                    "https://www.snapchat.com/add/jason23nash?sc_referrer=web",
                  iosAppStoreUrl:
                    "https://apps.apple.com/app/apple-store/id447188370?pt=614006&ct=add_user&mt=8",
                  desktopPageUrl:
                    "https://snapchat.com/download?purpose=web_stories&sp=add_user",
                },
              },
            ],
            creationTimestampMs: { value: "1584846804362" },
            lastUpdateTimestampMs: { value: "1741518441231" },
            businessProfileId: "e123b268-312b-41d6-8088-b51c12c6f2c6",
          },
          story: null,
          curatedHighlights: [
            {
              storyType: 3,
              snapList: [
                {
                  snapIndex: 0,
                  snapId: { value: "" },
                  snapMediaType: 0,
                  snapUrls: {
                    mediaUrl:
                      "https://cf-st.sc-cdn.net/d/21JGtXabuZ1AfXw5L5vjB.400.IRZXSOY?mo=GlQaGhoAGgAyAQQ6AX1CBgjusM6eBkgDUF5gAXABWhBQdWJsaWNJbWFnZVN0b3J5ogEQCJADIgsSACoHSVJaWFNPWaIBEAjnByILEgAqB0lSWlhTT1k%3D&uc=94",
                    mediaPreviewUrl: {
                      value:
                        "https://cf-st.sc-cdn.net/d/21JGtXabuZ1AfXw5L5vjB.410.IRZXSOY?mo=GkEaGhoAGgAyAQQ6AX1CBgjusM6eBkgDUF5gAXABWhBEZkxhcmdlVGh1bWJuYWlsogEQCJoDIgsSACoHSVJaWFNPWQ%3D%3D&uc=94",
                    },
                    overlayUrl: null,
                    attachmentUrl: null,
                  },
                  isSponsored: null,
                  timestampInSec: { value: "1670431570" },
                  snapTitle: null,
                  snapSubtitles: null,
                  lat: null,
                  lng: null,
                  hasAttachment: null,
                  intervalStartTimeMs: null,
                  audioTranscriptionObjectUrl: null,
                },
              ],
              storyId: { value: "" },
              storyTitle: { value: "FULL HAIR TRANSFORMATION (PART 1)" },
              thumbnailUrl: {
                value:
                  "https://cf-st.sc-cdn.net/d/bNrrl36C71xV5GeTS13qP.410.IRZXSOY?mo=GkEaGhoAGgAyAQQ6AX1CBgjxsM6eBkgDUF5gAXABWhBEZkxhcmdlVGh1bWJuYWlsogEQCJoDIgsSACoHSVJaWFNPWQ%3D%3D&uc=94",
              },
              storySubtitle: null,
              storyShareId: null,
              canonicalUrlSuffix: null,
              emoji: null,
              storyTapId: "0",
              videoTrackUrl: null,
              highlightId: { value: "39f6379c-1787-4f79-859c-8cee75a8076e" },
              isAttributed: null,
            },
          ],
          spotlightHighlights: [
            {
              storyType: 3,
              snapList: [
                {
                  snapIndex: 0,
                  snapId: {
                    value:
                      "W7_EDlXWTBiXAEEniNoMPwAAYZGJ6d3NyYWdiAYdiSHKKAYdiSG6AAAAAAQ",
                  },
                  snapMediaType: 1,
                  snapUrls: {
                    mediaUrl:
                      "https://cf-st.sc-cdn.net/d/QV9a3I5ISW0cgJwjHW0BS.1034.IRZXSOY?mo=GkAaDRoAGgAyAQRIA1AuYAGiAS4IiggSHAoaIAFKEQoMY0Y9R0RFR0M5OU8uEPQDWgMQsz8iCxIAKgdJUlpYU09Z&uc=46",
                    mediaPreviewUrl: {
                      value:
                        "https://cf-st.sc-cdn.net/d/QV9a3I5ISW0cgJwjHW0BS.256.IRZXSOY?mo=GkcaDRoAGgAyAQRIAlAuYAFaEERmTGFyZ2VUaHVtYm5haWyiARAIgAIiCxIAKgdJUlpYU09ZogEQCJoKIgsSACoHSVJaWFNPWQ%3D%3D&uc=46",
                    },
                    overlayUrl: null,
                    attachmentUrl: null,
                  },
                  isSponsored: null,
                  timestampInSec: { value: "1680981126" },
                  snapTitle: null,
                  snapSubtitles: null,
                  lat: null,
                  lng: null,
                  hasAttachment: null,
                  intervalStartTimeMs: null,
                  audioTranscriptionObjectUrl: null,
                },
              ],
              storyId: {
                value:
                  "W7_EDlXWTBiXAEEniNoMPwAAYZGJ6d3NyYWdiAYdiSHKKAYdiSG6AAAAAAQ",
              },
              storyTitle: { value: "" },
              thumbnailUrl: {
                value:
                  "https://cf-st.sc-cdn.net/d/QV9a3I5ISW0cgJwjHW0BS.256.IRZXSOY?mo=GkcaDRoAGgAyAQRIAlAuYAFaEERmTGFyZ2VUaHVtYm5haWyiARAIgAIiCxIAKgdJUlpYU09ZogEQCJoKIgsSACoHSVJaWFNPWQ%3D%3D&uc=46",
              },
              storySubtitle: null,
              storyShareId: null,
              canonicalUrlSuffix: null,
              emoji: null,
              storyTapId: "0",
              videoTrackUrl: null,
              highlightId: {
                value:
                  "W7_EDlXWTBiXAEEniNoMPwAAYZGJ6d3NyYWdiAYdiSHKKAYdiSG6AAAAAAQ",
              },
              isAttributed: null,
            },
          ],
          spotlightStoryMetadata: [
            {
              videoMetadata: {
                name: "Turn around sir",
                description:
                  "Another Spotlight Snap brought to you by Snapchat",
                thumbnailUrl:
                  "https://cf-st.sc-cdn.net/d/QV9a3I5ISW0cgJwjHW0BS.256.IRZXSOY?mo=GkcaDRoAGgAyAQRIAlAuYAFaEERmTGFyZ2VUaHVtYm5haWyiARAIgAIiCxIAKgdJUlpYU09ZogEQCJoKIgsSACoHSVJaWFNPWQ%3D%3D&uc=46",
                uploadDateMs: "1680981126784",
                viewCount: "11937",
                contentUrl:
                  "https://cf-st.sc-cdn.net/d/QV9a3I5ISW0cgJwjHW0BS.27.IRZXSOY?mo=GlIaDRoAGgAyAQRIAlAuYAFaEFNwb3RsaWdodFNoYXJpbmeiAS4IGxIdChsgAUoSCg2AAWRTY2VgX21QTXA9EPQDWgMQmT8iCxIAKgdJUlpYU09Z&uc=46",
                creator: {
                  $case: "personCreator",
                  personCreator: {
                    username: "zane",
                    url: "https://www.snapchat.com/add/zane",
                    name: "Zane",
                    followerCount: "0",
                    websiteUrl: "",
                  },
                },
                durationMs: "6200",
                width: 540,
                height: 960,
                keywords: [],
                shareCount: "0",
                embeddedTextCaption: "Turn around sir",
              },
              userMetadata: null,
              lensMetadata: null,
              hashtags: [],
              contextCards: [
                {
                  contextType: 2,
                  title: "@zane's Sound",
                  subtitle: "",
                  url: "",
                  thumbnailUrl:
                    "https://cf-st.sc-cdn.net/d/6YKRUxipwtyh6YMgtaJbK?bo=Eg0aABoAMgEESAJQCGAB&uc=8",
                  snapcodeUrl: "",
                  thumbnailType: 2,
                  hasBadge: false,
                },
                {
                  contextType: 3,
                  title: "Zane",
                  subtitle: "zane",
                  url: "https://www.snapchat.com/add/zane",
                  thumbnailUrl:
                    "https://cf-st.sc-cdn.net/aps/bolt/aHR0cHM6Ly9jZi1zdC5zYy1jZG4ubmV0L2QvSG5jNU4zNFh5MWNacFlPR0Y2T3pxP2JvPUVnMGFBQm9BTWdFRVNBSlFHV0FCJnVjPTI1._RS0,640_FMjpeg",
                  snapcodeUrl:
                    "https://app.snapchat.com/web/deeplink/snapcode?username=zane&type=SVG&bitmoji=enable",
                  thumbnailType: 0,
                  hasBadge: true,
                },
              ],
              engagementStats: {
                viewCount: "11937",
                shareCount: "6",
                commentCount: "10",
              },
              deeplink:
                "https://click.snapchat.com/aVHG?pid=snapchat_download_page&af_dp=https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYZGJ6d3NyYWdiAYdiSHKKAYdiSG6AAAAAAQ?sc_referrer%3Dweb&af_web_dp=https://snapchat.com/download?purpose%3Dweb_stories%26sp%3Dspotlight&af_ios_url=https://apps.apple.com/app/apple-store/id447188370?pt%3D614006%26ct%3Dspotlight%26mt%3D8",
              oneLinkParams: {
                oneLinkBaseUrl: "https://click.snapchat.com/aVHG",
                pidKeys: ["af_pid", "utm_source"],
                pidFallbackValue: "consumer_web",
                campaignKeys: ["af_c", "utm_campaign"],
                campaignFallbackValue: "spotlight",
                googleClickIdParam: "af_sub1",
                deepLinkUrl:
                  "https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYZGJ6d3NyYWdiAYdiSHKKAYdiSG6AAAAAAQ?sc_referrer=web",
                iosAppStoreUrl:
                  "https://apps.apple.com/app/apple-store/id447188370?pt=614006&ct=spotlight&mt=8",
                desktopPageUrl:
                  "https://snapchat.com/download?purpose=web_stories&sp=spotlight",
              },
              description: "",
            },
          ],
        },
        params: [
          {
            name: "handle",
            type: "string",
            required: true,
            description: "Snapchat username",
            placeholder: "zane",
          },
        ],
      },
    ],
  },
  {
    id: "linktree",
    name: "Linktree",
    description: "Scrape Linktree pages",
    endpoints: [
      {
        name: "Linktree page",
        method: "GET",
        description: "Linktree page",
        fullDescription:
          "Scrapes a Linktree page by URL, extracting the creator's profile and all their links. Returns id, username, profilePictureUrl, description, verticals, timezone, and links — an array of link objects each with id, type, title, and url. Also includes detected social accounts (instagram, tiktok, spotify, youtube, soundcloud, apple_music) and email_address.",
        path: "/v1/linktree",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to Linktree page",
            placeholder: "https://linktr.ee/miguelangeles",
          },
        ],
        sampleResponse: {
          success: true,
          id: 15278008,
          username: "miguelangeles",
          profilePictureUrl:
            "https://ugc.production.linktr.ee/d3141538-f586-4f3f-bc9a-a82fbebab798_DEATHRATTLE-slowed-COVER.jpeg",
          description: "☆☆☆☆ IRL ANGEL ☆☆☆☆\nψ EMBRACE CHAOS ψ",
          verticals: ["music", "creative", "arts-entertainment"],
          linkPlatforms: ["Instagram", "TikTok"],
          timezone: "America/New_York",
          links: [
            {
              id: 463416775,
              type: "SPOTIFY_ALBUM",
              title: 'new project "BEFORE THE SUN RISES & WINTERR ENDS"',
              url: "https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG?si=Zub7J4I3RySAaM9WVX3Okg",
            },
            {
              id: 460281204,
              type: "SPOTIFY_SONG",
              title: 'stream "NOVEMBERR"',
              url: "https://open.spotify.com/track/62HnBMEdZjeFCd2T8g37T8?si=7bd35dd0e9f24d65",
            },
            {
              id: 460285424,
              type: "YOUTUBE_VIDEO",
              title: 'watch "INNOCENCE" video',
              url: "https://www.youtube.com/watch?v=JINmh9O-sjU",
            },
            {
              id: 460281376,
              type: "SPOTIFY_SONG",
              title: 'stream "OBSESSED"',
              url: "https://open.spotify.com/track/0ipHYEQf07qoReAWhVC3zO?si=8fbaee843716443f",
            },
            {
              id: 233892723,
              type: "PRODUCT",
              title: "MERCH",
              url: "",
            },
            {
              id: 233894119,
              type: "CLASSIC",
              title: "ALL STREAMING LINKS",
              url: "https://songwhip.com/miguelangeles",
            },
            {
              id: 80367589,
              type: "CLASSIC",
              title: "SPOTIFY PLAYLIST",
              url: "https://open.spotify.com/playlist/1m0U7ud6CCPzMO8oLTMi3B?si=d7cb7f6e6bc94d3b",
            },
            {
              id: 102824974,
              type: "SOUNDCLOUD_PLAYLIST",
              title: "SOUNDCLOUD PLAYLIST",
              url: "https://soundcloud.com/miguelangeles/sets/irl-angel-vibes",
            },
          ],
          instagram: "https://instagram.com/miguelangeles",
          tiktok: "https://tiktok.com/@irlangel",
          spotify:
            "https://open.spotify.com/artist/14xRX3JR8H4RWh8R7V3fvZ?si=EgRxWIPiRcaEHtSnqk5PAQ",
          youtube: "https://www.youtube.com/watch?v=xiFUzOJaiC4",
          soundcloud: "https://soundcloud.com/miguelangeles",
          apple_music:
            "https://music.apple.com/ca/artist/miguel-angeles/1209423162",
          email_address: "miguel@irlangel.com",
        },
      },
    ],
  },
  {
    id: "komi",
    name: "Komi",
    description: "Scrape Komi pages",
    endpoints: [
      {
        name: "Komi page",
        method: "GET",
        description: "Komi page",
        fullDescription:
          "Scrapes a Komi page by URL, extracting the creator's profile, social links, and featured content. Returns id, username, avatar, displayName, bio, and social accounts (instagram, tiktok, youtube, twitter, facebook, snapchat). Also includes links, an array of link and product objects each with id, url, title, type, thumbnail, and optional price and currency for products.",
        path: "/v1/komi",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to Komi page",
            placeholder: "https://kimkardashian.komi.io/",
          },
        ],
        sampleResponse: {
          success: true,
          id: "64d82830-59aa-4488-bfb0-93426971d139",
          username: "kimkardashian",
          avatar:
            "https://komi-production-assets.s3.amazonaws.com/photos/4Nd69ODJHs61_iNYPlqos.jpg",
          bio: "",
          firstName: "Kim",
          lastName: "Kardashian",
          displayName: "Kim Kardashian",
          displayNameImage: null,
          instagram: "https://www.instagram.com/kimkardashian/",
          tiktok: "https://www.tiktok.com/@kimkardashian",
          youtube: "https://www.youtube.com/@KUWTK",
          twitter: "https://twitter.com/KimKardashian",
          facebook: "https://www.facebook.com/KimKardashian",
          snapchat: "https://www.snapchat.com/add/kimkardashian?locale=en-GB",
          website: null,
          links: [
            {
              id: "6d7086df-ede4-4f8a-85e5-0fa410e60bc2",
              url: "https://skims.social/shop-skims",
              order: 0,
              title: "Visit SKIMS",
              visible: true,
              moduleId: "e6ce39d2-e3df-4040-a5cc-ce016cacbc34",
              thumbnail:
                "https://komi-production-assets.s3-accelerate.amazonaws.com/photos/x_LQCBYzoWiel0-yrAnrF.jpg",
              versionId: "944094bf-f124-4b13-866a-3498c492736d",
              type: "LINK",
            },
            {
              id: "f43e198b-2fd5-45f4-80d1-389906c5c840",
              url: "https://skims.com/products/signature-swim-triangle-bikini-top-dune-crocodile-print",
              order: 0,
              price: 44,
              title: " TRIANGLE BIKINI TOP | DUNE CROCODILE ",
              visible: false,
              currency: "USD",
              moduleId: "5c8bc46c-2d6b-4731-baf3-2f40aec1465c",
              thumbnail:
                "https://komi-production-assets.s3-accelerate.amazonaws.com/photos/dzDiYZjZFXPE4E8-ZwnSn.png",
              versionId: "944094bf-f124-4b13-866a-3498c492736d",
              type: "PRODUCT",
            },
          ],
        },
      },
    ],
  },
  {
    id: "pillar",
    name: "Pillar",
    description: "Scrape Pillar pages",
    endpoints: [
      {
        name: "Pillar page",
        method: "GET",
        description: "Pillar page",
        fullDescription:
          "Scrapes a Pillar page by URL, extracting the creator's profile, social links, and products. Returns id, first_name, last_name, email, location, and social accounts (tiktok, spotify, twitter, youtube, facebook, linkedin, instagram, and more). Also includes links with click counts and products with title, price, description, and image.",
        path: "/v1/pillar",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to Pillar page",
            placeholder: "https://pillar.io/angelstrife",
          },
        ],
        sampleResponse: {
          success: true,
          id: "d8a5cbb4-a64d-44f2-830d-27a489bbc608",
          first_name: "Angel",
          last_name: "Blanco",
          email_primary: "angelrafaelcovablanco@gmail.com",
          location: "México",
          email: "angelrafaelcovablanco@gmail.com",
          amazon: "",
          medium: "",
          tiktok: "https://tiktok.com/@angelstrifeoficial",
          twitch: "",
          discord: "",
          patreon: "",
          spotify:
            "https://open.spotify.com/artist/3Lse4fAlOchY8msotsYMA6?si=4nKqeTSRRsSDoNj1tfvNtA",
          twitter: "https://twitter.com/SoyAngelStrife",
          youtube: "https://www.youtube.com/channel/UCgZSHuBjHSFADbFQOCN1ifg",
          facebook: "https://www.facebook.com/AngelStrifeOficial",
          linkedin: "https://mx.linkedin.com/in/angelcovablanco",
          snapchat: "",
          instagram: "https://www.instagram.com/angelstrifeoficial",
          soundcloud: "https://soundcloud.com/contienda-records",
          apple_app_store: "",
          google_app_store: "",
          links: [
            {
              id: "66472110-1ba7-11ee-b33b-e5396daf72e9",
              type: "twitter",
              title: "twitter",
              url: "https://twitter.com/SoyAngelStrife",
              clicks: 2,
              order: null,
            },
            {
              id: "669fef70-1ba7-11ee-b33b-e5396daf72e9",
              type: "30 mil pies de altura para morir de amor",
              title: "30 mil pies de altura para morir de amor",
              url: "https://open.spotify.com/album/14jqUYFbuBs0HcftvQ7jC3?si=bX_bInR7R9Wu-mC9_77Fvw&context=spotify%3Aalbum%3A14jqUYFbuBs0HcftvQ7jC3",
              clicks: 0,
              order: 2,
            },
          ],
          products: [
            {
              id: "254c8681-1d52-11ee-b065-850167411bb1",
              title: '"30 Mil Pies De Altura Para Morir de Amor" - LP',
              price: 0,
              url: "https://angel-strife.ueniweb.com/products/merchandise/30-mil-pies-de-altura-para-morir-de-amor-lp-especial-edition-vynil-deluxe-53106871",
              name: '"30 Mil Pies De Altura Para Morir de Amor" - LP',
              description: "Especial Edition Vynil Deluxe",
              image:
                "https://athlane-file-management-prod.s3.amazonaws.com/a925f7b5-77ba-4095-b755-27b2bc221baa",
            },
          ],
        },
      },
    ],
  },
  {
    id: "linkbio",
    name: "Linkbio",
    description: "Scrape Linkbio (lnk.bio) pages",
    endpoints: [
      {
        name: "Linkbio page",
        method: "GET",
        description: "Linkbio (lnk.bio) page",
        fullDescription:
          "Scrapes a Linkbio (lnk.bio) page by URL, extracting the creator's profile and all their links. Returns handle, id, social accounts (instagram, tiktok, youtube, twitter, whatsapp), email, website, and links — an array of link objects each with url and text.",
        path: "/v1/linkbio",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to Linkbio (lnk.bio) page",
            placeholder: "https://lnk.bio/msjennafischer",
          },
        ],
        sampleResponse: {
          success: true,
          handle: "msjennafischer",
          id: "-1154992",
          instagram: null,
          email: null,
          tiktok: null,
          youtube: null,
          twitter: null,
          whatsapp: null,
          website: null,
          links: [
            {
              url: "https://www.instagram.com/msjennafischer",
              text: "@msjennafischer",
            },
            {
              url: "https://www.GoodmanTheatre.org/Ashland ",
              text: "Ashland Avenue at The Goodman Theater",
            },
            {
              url: "https://www.futureofpersonalhealth.com/campaign/cancer-care/",
              text: "From “The Office” to Cancer Survivor and Advocate",
            },
            {
              url: "https://bit.ly/3STi9jN",
              text: "Future of Cancer Care Website",
            },
            {
              url: "https://workingwithcancerpledge.com",
              text: "Screening Time Off Initiative",
            },
            {
              url: "https://magview.com/ibis-risk-calculator/",
              text: "Breast Cancer Risk Assessment",
            },
            {
              url: "https://officeladies.com/episodes",
              text: "Office Ladies Podcast",
            },
            {
              url: "https://variety.com/2024/tv/news/jenna-fischer-angela-kinsey-office-podcast-office-ladies-6-0-second-drink-rewatch-1236207967/",
              text: "Office Ladies Variety Article",
            },
            {
              url: "https://www.podswag.com/collections/office-ladies?gad_source=1&gbraid=0AAAAAB7BH0Edcsw45RAt_38Qq4s4OW2zJ&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoO-lU8QzjvqE1hPwJPDwSX4LL-bp_o1r6qxSgQBnl3CGSVwfLWZaZBoCb_YQAvD_BwE",
              text: "Office Ladies Merch",
            },
            {
              url: "https://bestfriends.org/adopt-and-foster/foster-kittens?utm_source=vanity&utm_medium=redirect&utm_campaign=kittens",
              text: "Kitten Fostering",
            },
            {
              url: "https://www.youtube.com/playlist?list=PLD7nPL1U-R5rmvJo2L49IK-vKu2qB-fvx",
              text: "Office Ladies Animated",
            },
            {
              url: "https://miryslist.org/lists",
              text: "Miry's List Family Wishlists",
            },
          ],
        },
      },
    ],
  },
  {
    id: "amazon-shop",
    name: "Amazon Shop",
    description: "Scrape Amazon Shop pages",
    endpoints: [
      {
        name: "Amazon Shop page",
        method: "GET",
        description:
          "Get products and other details from a creator's Amazon Shop page",
        fullDescription:
          "Scrapes a creator's Amazon Shop page by URL, returning their storefront profile and product collections. Returns avatar, name, description, socials, and lists with title and itemCount. Also includes trendingPicks with price and discount, curations with title and postCount, and a pageToken for pagination.",
        path: "/v1/amazon/shop",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to Amazon Shop page",
            placeholder: "https://www.amazon.com/shop/sydneydelrey",
          },
        ],
        sampleResponse: {
          success: true,
          avatar:
            "https://m.media-amazon.com/images/I/A1rW00V-tHL._CR0%2C0%2C2560%2C2560_._US500_SCLZZZZZZZ_.jpg",
          name: "sydney del rey",
          description:
            "sharing all of my favorite Amazon finds ᥫ᭡ click the icons below to follow me on socials! all photo & video content is also shoppable x",
          socials: [
            "https://vm.tiktok.com/ZTFrowSpg/",
            "https://www.youtube.com/channel/UCWvW1JOQ-nsAinO1jLFgrVA",
          ],
          lists: [
            {
              title: "fall transition fits",
              itemCount: 72,
              image:
                "https://m.media-amazon.com/images/G/01/Influencer/full_bleed_pin_2x.png",
              url: "https://www.amazon.com/shop/sydneydelrey/list/3QCPC18WETJFQ",
            },
            {
              title: "fall shoes",
              itemCount: 116,
              image:
                "https://m.media-amazon.com/images/G/01/Influencer/full_bleed_pin_2x.png",
              url: "https://www.amazon.com/shop/sydneydelrey/list/1OX9UQ28GC2HG",
            },
            {
              title: "fall fashion",
              itemCount: 156,
              image:
                "https://m.media-amazon.com/images/G/01/Influencer/full_bleed_pin_2x.png",
              url: "https://www.amazon.com/shop/sydneydelrey/list/3PDR5YVGLMWCO",
            },
          ],
          trendingPicks: [
            {
              url: "https://www.amazon.com/shop/sydneydelrey/getProductDetails/B0DDJFFCB5?showRelatedPost=true",
              image: "https://m.media-amazon.com/images/I/41xvQcQoEnL._AC_.jpg",
              price: 9.99,
              discount: 29,
            },
            {
              url: "https://www.amazon.com/shop/sydneydelrey/getProductDetails/B0DK1K4ZWS?showRelatedPost=true",
              image: "https://m.media-amazon.com/images/I/41IUfXRQSdL._AC_.jpg",
              price: 12.74,
              discount: 42,
            },
            {
              url: "https://www.amazon.com/shop/sydneydelrey/getProductDetails/B0DJT3TRVY?showRelatedPost=true",
              image: "https://m.media-amazon.com/images/I/31ZI2vGNq-L._AC_.jpg",
              price: 23.98,
              discount: 40,
            },
            {
              url: "https://www.amazon.com/shop/sydneydelrey/getProductDetails/B0F7WYS82C?showRelatedPost=true",
              image: "https://m.media-amazon.com/images/I/31EWj-NfVML._AC_.jpg",
              price: 31.99,
              discount: 20,
            },
            {
              url: "https://www.amazon.com/shop/sydneydelrey/getProductDetails/B0DP5JNLQR?showRelatedPost=true",
              image: "https://m.media-amazon.com/images/I/41JJiYz9kVL._AC_.jpg",
              price: 139.99,
              discount: 26,
            },
          ],
          curations: [
            {
              title: "Fall fashion 🍂",
              postCount: 93,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/039230ec-2e77-4287-beca-ecba4b03ca46/8cdde-e153-4e81-b404-a1ebd6c65._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/c7bb2f3d-07a2-42f5-85f8-02adbb937961",
            },
            {
              title: "summer fits - AS SEEN ON SOCIALS",
              postCount: 254,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/b97c7bda-c7b5-413c-a56b-eafa8af6178f/f2c70-8360-4f82-b9ac-e4fc43b66._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/94a14bea-11ab-49c9-b1eb-d14c8892ac4c",
            },
            {
              title: "Gym outfits",
              postCount: 100,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/047e02b7-0e8d-4c73-9a42-6d8adfd9cdf8/e6d57-8dfe-4d36-9eed-d376838e7._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/7d2a59d2-d2d5-459a-a664-90ae837c2fec",
            },
            {
              title: "home goods",
              postCount: 39,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/0f9f8616-7b9e-446e-8fb6-7163c03d4bbb/9a9c4-1bad-4ed3-b2e3-3c27f27f0._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/83cfdc54-e837-44c2-89ab-5eb9299828e9",
            },
            {
              title: "My jewelry 💎",
              postCount: 32,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/48f67417-062f-456b-a254-dbfa2f0e2da7/f314f-8c6a-4eae-9501-e3c284b23._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/1060e92a-7bbe-4581-8cf8-888a6a4ded70",
            },
            {
              title: "Holiday outfits (xmas, nye, vday, st pats)",
              postCount: 113,
              image:
                "https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/d90c0fad-8ba5-427c-8dd5-b14cc25eae30/9bd34-ca64-4477-993d-94598e4ea._SX225_SCLZZZZZZZ_.jpeg",
              url: "https://www.amazon.com/shop/sydneydelrey/curation/b74328f3-11ce-4a55-a844-40f6aff6e467",
            },
          ],
          pageToken: "amzn1.ideas.1S28M0V6I8FUU_0_2025-09-03T01:17:37.837Z",
        },
      },
    ],
  },
  {
    id: "age-and-gender",
    name: "Age and Gender",
    description: "Get age and gender of creator",
    endpoints: [
      {
        name: "Get Age and Gender",
        method: "GET",
        description:
          "Get age and gender of creator. This uses AI to analyze the profile image. *The profile photo must have a clear face to get an accurate result.*",
        fullDescription:
          "Uses AI to analyze a creator's profile photo and estimate their age and gender. Returns ageRange with low and high bounds, gender, and a confidence score for the gender prediction. The profile photo must contain a clear, visible face for accurate results.",
        path: "/v1/detect-age-gender",
        sampleResponse: {
          ageRange: { low: 23, high: 29 },
          gender: "Male",
          confidence: { gender: 82.51082611083984 },
        },
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "URL to users social profile",
            placeholder: "https://twitter.com/levelsio",
          },
        ],
      },
    ],
  },
  {
    id: "scrape-creators",
    name: "Scrape Creators",
    description: "For Scrape Creators customers",
    endpoints: [
      {
        name: "Get credit balance",
        method: "GET",
        description: "How many credits you have left",
        fullDescription:
          "Returns the number of API credits remaining on your Scrape Creators account. The response contains a single creditCount field with your current balance.",
        path: "/v1/credit-balance",
        params: [],
        sampleResponse: {
          creditCount: 333,
        },
      },
    ],
  },
  {
    id: "linkme",
    name: "Linkme",
    description: "Get Linkme profile info",
    endpoints: [
      {
        name: "Profile",
        method: "GET",
        description: "Get Linkme profile info by URL",
        fullDescription:
          "Retrieves a Linkme profile by URL, including identity, social links, and contact details. Returns profile with id, firstName, username, bio, profileVisitCount, profileImage, verifiedAccount, and isAmbassador flag. Also includes infoLinks (email addresses) and webLinks, an array of categorized social platform links (Spotify, Instagram, YouTube, Twitter, Facebook, and more) each with linkValue and faceValue.",
        path: "/v1/linkme",
        params: [
          {
            name: "url",
            type: "string",
            required: true,
            description: "Linkme profile URL",
            placeholder: "https://link.me/danucd",
          },
        ],
        sampleResponse: {
          success: true,
          credits_remaining: 1000,
          profile: {
            id: "1bf3efbf94cc4f55d3650ddc61094ac3",
            firstName: "Dana",
            lastName: "",
            username: "danucd",
            verifiedAccount: 0,
            bio: "ALL MY LINKS👇",
            isAmbassador: 1,
            friendStatus: 0,
            profileVisitCount: "15.9k",
            isDefaultProfilePicture: false,
            profileImage: "user-profile/1169288/tmp-2541-1763300314455.png",
            profileImageWebp:
              "webp-images/user-profile/1169288/tmp-2541-1763300314455.webp",
            isPrivate: 0,
            referralLink: "https://meglobalapp.page.link/TFZgPYaJGeqm3mXt5",
            deeplink: "https://meglobalapp.page.link/14GsZs1EQ2KMqxjH7",
            logo: "",
            logoMetaData: "",
            QRCode: "qrCode/v2/danucd",
            webTheme: "",
            linkmeCustomIcon: "style/icons/v5.1/LinkMe-1.png",
            cover: "",
            createdAt: "2024-11-01 12:37:51",
            updatedAt: "2025-11-16 13:43:17",
            stripeStatus: {
              tipsEnabled: 0,
              stripeAccountId: "",
              stripeEnabled: false,
            },
            killer: 0,
            hideBottomButtons: 0,
            customMailForm: 0,
            hideAddToContacts: 0,
            subscriptionFeature: "",
            showForm: false,
            subscriptionType: 0,
            displayNameOption: "user_name",
            trackingPixels: [],
            isMuteEnable: 0,
            totalLinks: 7,
            chatID: "LinkMe-1169288",
            infoLinks: [
              {
                title: "Email",
                linkId: 1,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450947,
                    linkImage: "",
                    linkValue: "dana.danucd@gmail.com",
                    faceValue: "dana.danucdgmail.com",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
            ],
            businessInfo: null,
            webLinks: [
              {
                title: "Apple-music",
                linkId: 9,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450958,
                    linkImage: "style/icons/v5.0/Apple-Music-1.png",
                    linkValue:
                      "https://music.apple.com/ng/artist/danucd/1562315189",
                    faceValue: "1562315189",
                    baseUrl: "https://music.apple.com/profile/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Spotify",
                linkId: 10,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450956,
                    linkImage: "style/icons/v5.0/Spotify-1.png",
                    linkValue:
                      "https://open.spotify.com/artist/0A8XmfCL2yangEtvot3peD?autoplay=true&source_application=google_assistant",
                    faceValue: "0A8XmfCL2yangEtvot3peD",
                    baseUrl: "https://open.spotify.com/user/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Instagram",
                linkId: 4,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450950,
                    linkImage: "style/icons/v5.0/Instagram-1.png",
                    linkValue: "https://www.instagram.com/danucd/",
                    faceValue: "danucd",
                    baseUrl: "https://www.instagram.com/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Facebook",
                linkId: 6,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450955,
                    linkImage: "style/icons/v5.0/Facebook-1.png",
                    linkValue: "https://www.facebook.com/Danucd",
                    faceValue: "Danucd",
                    baseUrl: "https://www.facebook.com/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Twitter",
                linkId: 7,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450952,
                    linkImage: "static/icons/v5.1/twitter-light-1-2-dark-1.png",
                    linkValue: "https://www.twitter.com/Danucd1",
                    faceValue: "Danucd1",
                    baseUrl: "https://www.twitter.com/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Youtube",
                linkId: 12,
                isCustom: false,
                links: [
                  {
                    webLinkId: 2049085,
                    linkImage: "style/icons/v5.0/YouTube-1.png",
                    linkValue: "https://www.youtube.com/@DanucD2",
                    faceValue: "DanucD2",
                    baseUrl: "https://youtube.com/user/",
                    isCustom: false,
                    isAdult: false,
                  },
                  {
                    webLinkId: 2049084,
                    linkImage: "style/icons/v5.0/YouTube-1.png",
                    linkValue: "https://www.youtube.com/@DanucD2",
                    faceValue: "DanucD2",
                    baseUrl: "https://youtube.com/user/",
                    isCustom: false,
                    isAdult: false,
                  },
                  {
                    webLinkId: 1450949,
                    linkImage: "style/icons/v5.0/YouTube-1.png",
                    linkValue: "https://www.youtube.com/danucd",
                    faceValue: "danucd",
                    baseUrl: "https://youtube.com/user/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Youtube-music",
                linkId: 41,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450957,
                    linkImage: "style/icons/v5.0/Youtube-Music-1.png",
                    linkValue:
                      "https://music.youtube.com/channel/UCANQ8GbiyqTgL_YMwqVgSjg?feature=gws_kp_artist&feature=gws_kp_artist",
                    faceValue: "UCANQ8GbiyqTgL_YMwqVgSjg",
                    baseUrl: "https://music.youtube.com/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Deezer",
                linkId: 46,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450959,
                    linkImage: "style/icons/v5.1/Deezer-1.png",
                    linkValue:
                      "https://www.deezer.com/artist/129733822/radio?autoplay=true",
                    faceValue: "radio",
                    baseUrl: "https://deezer.page.link/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Tiktok",
                linkId: 21,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450951,
                    linkImage: "style/icons/v5.0/TikTok-1.png",
                    linkValue: "https://www.tiktok.com/@danucd_",
                    faceValue: "danucd_",
                    baseUrl: "https://www.tiktok.com/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Twitch",
                linkId: 22,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450948,
                    linkImage: "style/icons/v5.0/Twitch-1.png",
                    linkValue:
                      "https://m.twitch.tv/danucd?fbclid=PAZXh0bgNhZW0CMTEAAaaw5KxeIr47f2JnvCWttLnzIFG35Q8vQ6dK_H4Pv7bQKefUMmqYXvRPm90_aem_qRBQ5McX7dnSwaw8aHxqaA&desktop-redirect=true",
                    faceValue: "danucd",
                    baseUrl: "https://www.twitch.tv/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
              {
                title: "Threads",
                linkId: 57,
                isCustom: false,
                links: [
                  {
                    webLinkId: 1450960,
                    linkImage: "style/icons/v5.0/Threads-1.png",
                    linkValue: "https://www.threads.net/@danucd?hl=en",
                    faceValue: "danucd",
                    baseUrl: "https://www.threads.net/",
                    isCustom: false,
                    isAdult: false,
                  },
                ],
              },
            ],
            customisedTheme: {
              verifiedIcon: "blue",
              backgroundColor: "",
              backgroundImage: "",
              mainTextColor: "",
              level1TextColor: "",
              level2TextColor: "",
              featuredLinkTitles: null,
              bioBackground: "",
              profilePicture: "",
              customFont: "",
            },
            totalFollowers: null,
            sectionSettings: {
              shouts: {
                enabled: true,
                position: null,
              },
            },
            sectionVisibility: [
              {
                section: "bio",
                order: 1,
                enabled: 1,
              },
              {
                section: "featured_links",
                order: 2,
                enabled: 1,
              },
              {
                section: "email_form",
                order: 3,
                enabled: 0,
              },
              {
                section: "forms",
                order: 4,
                enabled: 0,
              },
              {
                section: "gallery",
                order: 4,
                enabled: 1,
              },
              {
                section: "fbl_products",
                order: 5,
                enabled: 1,
              },
              {
                section: "contact_info",
                order: 5,
                enabled: 1,
              },
              {
                section: "business_info",
                order: 6,
                enabled: 1,
              },
              {
                section: "shop",
                order: 7,
                enabled: 1,
              },
              {
                section: "bandsintown",
                order: 7,
                enabled: 0,
              },
              {
                section: "custom_events",
                order: 8,
                enabled: 0,
              },
              {
                section: "instagram_videos",
                order: 12,
                enabled: 0,
              },
              {
                section: "tiktok_videos",
                order: 13,
                enabled: 0,
              },
              {
                section: "google_reviews",
                order: 14,
                enabled: 0,
              },
              {
                section: "shouts",
                order: 15,
                enabled: 1,
              },
            ],
          },
        },
      },
    ],
  },
];
