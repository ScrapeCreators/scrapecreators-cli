export const kwaiApis = {
  id: "kwai",
  name: "Kwai",
  description: "Scrape Kwai profiles, posts, and user feeds",
  endpoints: [
    {
      name: "Profile",
      method: "GET",
      description: "Get public Kwai profile info from a handle or profile URL.",
      fullDescription:
        "Fetches public Kwai profile data including username, bio, avatar, verification status, gender, and public counts. Uses Kwai's public web API endpoint, not HTML scraping.",
      path: "/v1/kwai/profile",
      sampleResponse: {
        success: true,
        credits_remaining: 100,
        data: {
          id: 558843093,
          eid: "3xyutri4afq3qks",
          handle: "KwaiBrasilOficial",
          username: "Kwai Brasil Oficial",
          bio: "Aqui, Geral Brilha ✨",
          url: "https://www.kwai.com/@KwaiBrasilOficial",
          avatar_url:
            "https://ak-br-pic.kwai.net/bs2/overseaHead/20260430040305_BNTU4ODQzMDkz_s.jpg",
          verified: true,
          verified_description: "Conta Oficial",
          verified_number: null,
          gender: null,
          follower_count: 1,
          following_count: 1,
          like_count: 17467236,
          public_post_count: 3261,
          private_post_count: 0,
          is_private: false,
        },
      },
      params: [
        {
          name: "handle",
          type: "string",
          description: "Kwai profile handle. Use this or url.",
          placeholder: "KwaiBrasilOficial",
        },
        {
          name: "url",
          type: "string",
          description: "Kwai profile URL. Use this or handle.",
          placeholder: "https://www.kwai.com/@KwaiBrasilOficial",
        },
      ],
    },
    {
      name: "User Posts",
      method: "GET",
      description: "Get public posts from a Kwai handle or profile URL.",
      fullDescription:
        "Fetches a paginated list of public Kwai posts for a user, including captions, media URLs, covers, counts, author info, and the next cursor when more results are available. Uses Kwai's public web API endpoint, not HTML scraping.",
      path: "/v1/kwai/user/posts",
      paginationField: "cursor",
      sampleResponse: {
        success: true,
        credits_remaining: 100,
        data: {
          posts: [
            {
              id: "5193363430624671876",
              photo_id: 5193363430624672000,
              url: "https://www.kwai.com/@KwaiBrasilOficial/photo/5193363430624671876",
              caption:
                "O Marquinhos entrou em campo e realizou o maior sonho da vida da sua avó...",
              created_at: "2026-06-07T03:00:00.028Z",
              created_at_text: "2026-06-07 03:00:00",
              video_url: "https://ak-br-cdn.kwai.net/upic/example.mp4",
              cover_url: "https://ak-br-pic.kwai.net/upic/example.webp",
              view_count: 12345,
              like_count: 678,
              comment_count: 9,
              forward_count: 10,
              author: {
                id: 558843093,
                handle: "KwaiBrasilOficial",
                username: "Kwai Brasil Oficial",
                avatar_url:
                  "https://ak-br-pic.kwai.net/bs2/overseaHead/20260430040305_BNTU4ODQzMDkz_s.jpg",
                verified: true,
                verified_description: "Conta Oficial",
              },
              music: {
                id: 13337080415,
                name: "",
                artist: "Kwai Brasil Oficial",
                url: "https://ak-br-pic.kwai.net/bs2/ost/example.m4a",
              },
              tags: [],
            },
          ],
          albums: [],
          cursor: "1780704000032",
          has_more: true,
        },
      },
      params: [
        {
          name: "handle",
          type: "string",
          description: "Kwai profile handle. Use this or url.",
          placeholder: "KwaiBrasilOficial",
        },
        {
          name: "url",
          type: "string",
          description: "Kwai profile URL. Use this or handle.",
          placeholder: "https://www.kwai.com/@KwaiBrasilOficial",
        },
        {
          name: "cursor",
          type: "string",
          description: "Cursor from the previous response for the next page",
          placeholder: "1780704000032",
        },
        {
          name: "count",
          type: "number",
          description: "Number of posts to return, max 50",
          placeholder: "20",
        },
      ],
    },
    {
      name: "Post",
      method: "GET",
      description: "Get public Kwai post details from a post URL.",
      fullDescription:
        "Fetches public Kwai post details including caption, media URLs, cover images, counts, author info, and music metadata. Uses Kwai's public web API endpoint, not HTML scraping.",
      path: "/v1/kwai/post",
      sampleResponse: {
        success: true,
        credits_remaining: 100,
        data: {
          id: "5193363430624671876",
          photo_id: 5193363430624672000,
          url: "https://www.kwai.com/@KwaiBrasilOficial/photo/5193363430624671876",
          caption:
            "O Marquinhos entrou em campo e realizou o maior sonho da vida da sua avó...",
          created_at: "2026-06-07T03:00:00.028Z",
          created_at_text: "2026-06-07 03:00:00",
          video_url: "https://ak-br-cdn.kwai.net/upic/example.mp4",
          cover_url: "https://ak-br-pic.kwai.net/upic/example.webp",
          view_count: 12345,
          like_count: 678,
          comment_count: 9,
          forward_count: 10,
          author: {
            id: 558843093,
            handle: "KwaiBrasilOficial",
            username: "Kwai Brasil Oficial",
            avatar_url:
              "https://ak-br-pic.kwai.net/bs2/overseaHead/20260430040305_BNTU4ODQzMDkz_s.jpg",
            verified: true,
            verified_description: "Conta Oficial",
          },
          music: {
            id: 13337080415,
            name: "",
            artist: "Kwai Brasil Oficial",
            url: "https://ak-br-pic.kwai.net/bs2/ost/example.m4a",
          },
          tags: [],
        },
      },
      params: [
        {
          name: "url",
          type: "string",
          description: "Kwai post URL",
          placeholder:
            "https://www.kwai.com/@KwaiBrasilOficial/photo/5193363430624671876",
        },
      ],
    },
  ],
};
