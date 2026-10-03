export const cosmosApis = {
  "id": "cosmos",
  "name": "Cosmos",
  "description": "Scrape public Cosmos profiles, posts, and collections",
  "endpoints": [
    {
      "name": "Profile",
      "method": "GET",
      "path": "/v1/cosmos/profile",
      "description": "Get a public Cosmos profile with bio, links, and follower counts.",
      "fullDescription": "Get a public Cosmos profile with bio, links, and follower counts. Public data only. One credit per successful request, including successful empty results.",
      "credits": 1,
      "params": [
        {
          "name": "handle",
          "type": "string",
          "required": true,
          "description": "Cosmos username without a profile URL.",
          "placeholder": "design"
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "id": 234172146,
        "username": "design",
        "full_name": "Design",
        "url": "https://www.cosmos.so/design",
        "bio": "where systems learn to speak to people",
        "avatar_url": "https://cdn.cosmos.so/e39a4934-53ae-4536-95a3-18ccd4d052a0",
        "website_url": null,
        "is_premium": true,
        "is_verified": false,
        "follower_count": 744,
        "following_count": 1,
        "public_post_count": 25,
        "instagram_url": null,
        "twitter_url": null,
        "tiktok_url": null
      }
    },
    {
      "name": "User Posts",
      "method": "GET",
      "path": "/v1/cosmos/user/posts",
      "description": "Get the public posts saved to a Cosmos user profile.",
      "fullDescription": "Get the public posts saved to a Cosmos user profile. Public data only. One credit per successful request, including successful empty results. Keep the cursor unchanged and stop when has_more is false. Sending cursor=null returns end_of_pagination: true and costs zero credits.",
      "credits": 1,
      "params": [
        {
          "name": "handle",
          "type": "string",
          "required": true,
          "description": "Cosmos username without a profile URL.",
          "placeholder": "design"
        },
        {
          "name": "cursor",
          "type": "string",
          "required": false,
          "description": "Pass the previous response cursor unchanged. Stop when it is null; sending the literal string \"null\" returns an empty terminal page without fetching or charging."
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "items": [
          {
            "id": 1307496415,
            "url": "https://www.cosmos.so/e/1307496415",
            "created_at": "2026-04-01T15:24:45.897845Z",
            "caption": null,
            "text": null,
            "title": null,
            "description": null,
            "owner": {
              "id": 14413015,
              "username": "esther.yang"
            },
            "source_url": null,
            "source_author": null,
            "media": [
              {
                "id": "34647529-5d71-4c17-83c1-876e5500317c",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/34647529-5d71-4c17-83c1-876e5500317c",
                "width": 1440,
                "height": 1920,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              }
            ],
            "price": null,
            "brand": null
          },
          {
            "id": 231368414,
            "url": "https://www.cosmos.so/e/231368414",
            "created_at": "2026-07-22T04:24:41.491306Z",
            "caption": "Ad for Halston colognes with bottles designed by Elsa Peretti.",
            "text": null,
            "title": null,
            "description": null,
            "owner": {
              "id": 234172146,
              "username": "design"
            },
            "source_url": "https://www.pinterest.com/pin/65443000829576944/",
            "source_author": null,
            "media": [
              {
                "id": "1d0d58e8-19b8-4ebf-b773-dc7da702df1e",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/1d0d58e8-19b8-4ebf-b773-dc7da702df1e",
                "width": 564,
                "height": 799,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              }
            ],
            "price": null,
            "brand": null
          }
        ],
        "total_count": 25,
        "cursor": null,
        "has_more": false
      }
    },
    {
      "name": "User Collections",
      "method": "GET",
      "path": "/v1/cosmos/user/clusters",
      "description": "Get the public collections owned by a Cosmos user.",
      "fullDescription": "Get the public collections owned by a Cosmos user. Public data only. One credit per successful request, including successful empty results. Keep the cursor unchanged and stop when has_more is false. Sending cursor=null returns end_of_pagination: true and costs zero credits.",
      "credits": 1,
      "params": [
        {
          "name": "handle",
          "type": "string",
          "required": true,
          "description": "Cosmos username without a profile URL.",
          "placeholder": "design"
        },
        {
          "name": "cursor",
          "type": "string",
          "required": false,
          "description": "Pass the previous response cursor unchanged. Stop when it is null; sending the literal string \"null\" returns an empty terminal page without fetching or charging."
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "items": [
          {
            "id": 957563841,
            "name": "the best weather apps",
            "slug": "the-best-weather-apps",
            "description": "some of the smartest data design on your phone",
            "url": "https://www.cosmos.so/design/the-best-weather-apps",
            "cover_image_url": "https://cdn.cosmos.so/fcebb83d-f089-4e17-9550-274d11c5ebd9",
            "post_count": 42,
            "follower_count": null,
            "owner": {
              "id": 234172146,
              "username": "design",
              "full_name": "Design",
              "avatar_url": "https://cdn.cosmos.so/e39a4934-53ae-4536-95a3-18ccd4d052a0"
            }
          },
          {
            "id": 1192228289,
            "name": "words on cakes",
            "slug": "words-on-cakes",
            "description": "letters you can't command z.",
            "url": "https://www.cosmos.so/design/words-on-cakes",
            "cover_image_url": "https://cdn.cosmos.so/0ed33fe8-e35a-41e9-8240-84bc7cc1f8d2",
            "post_count": 42,
            "follower_count": null,
            "owner": {
              "id": 234172146,
              "username": "design",
              "full_name": "Design",
              "avatar_url": "https://cdn.cosmos.so/e39a4934-53ae-4536-95a3-18ccd4d052a0"
            }
          }
        ],
        "total_count": 58,
        "cursor": "eyJ2MSI6IjE5NzAtMDEtMDFUMDA6MDA6MDBaIiwidjIiOiIyMDI2LTA4LTI4VDE4OjM4OjMxLjc0NjM1OFoiLCJ2MyI6MTQyMTE1OTN9",
        "has_more": true
      }
    },
    {
      "name": "Post",
      "method": "GET",
      "path": "/v1/cosmos/post",
      "description": "Get a public Cosmos post with media URLs, captions, source links, and save count.",
      "fullDescription": "Get a public Cosmos post with media URLs, captions, source links, and save count. Uses public Cosmos data. Private or login-restricted content is not available. Costs 1 credit per successful request, including native empty results. Scraper failures are not charged.",
      "credits": 1,
      "params": [
        {
          "name": "url",
          "type": "string",
          "required": true,
          "description": "Public Cosmos post URL.",
          "placeholder": "https://www.cosmos.so/e/2107587668"
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "credits_charged": 1,
        "id": 2107587668,
        "url": "https://www.cosmos.so/e/2107587668",
        "created_at": "2026-01-24T17:23:49.338775Z",
        "caption": "Japanese movie poster for A Hard Day's Night (1964) featuring The Beatles.",
        "text": null,
        "title": null,
        "description": null,
        "owner": {
          "id": 2074596056,
          "username": "audreyelli"
        },
        "source_url": "https://www.pinterest.com/pin/7177680652369084/",
        "source_author": {
          "username": "telliott1817",
          "full_name": "Tom Elliott",
          "profile_url": "https://www.pinterest.com/telliott1817",
          "avatar_url": null
        },
        "media": [
          {
            "id": "8d612bfd-2b7b-458c-ac99-af7c406eef97",
            "type": "StaticImage",
            "url": "https://cdn.cosmos.so/8d612bfd-2b7b-458c-ac99-af7c406eef97",
            "width": 1080,
            "height": 1671,
            "ai_generated": false,
            "duration": null,
            "thumbnail_url": null,
            "video_url": null,
            "playback_url": null
          }
        ],
        "price": null,
        "brand": null,
        "save_count": 73
      }
    },
    {
      "name": "Collection",
      "method": "GET",
      "path": "/v1/cosmos/cluster",
      "description": "Get a public Cosmos collection with its owner, description, cover, counts, and public subcollections.",
      "fullDescription": "Get a public Cosmos collection with its owner, description, cover, counts, and public subcollections. Uses public Cosmos data. Private or login-restricted content is not available. Costs 1 credit per successful request, including native empty results. Scraper failures are not charged.",
      "credits": 1,
      "params": [
        {
          "name": "url",
          "type": "string",
          "required": true,
          "description": "Public Cosmos collection URL.",
          "placeholder": "https://www.cosmos.so/design/the-best-band-posters"
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "credits_charged": 1,
        "id": 1632840802,
        "name": "the best band posters",
        "slug": "the-best-band-posters",
        "description": "have you seen one of these in a room before?",
        "url": "https://www.cosmos.so/design/the-best-band-posters",
        "cover_image_url": "https://cdn.cosmos.so/images/b3964bde-a6d7-418d-91a6-09b1b7b6b9aa?rect=0,0,736,736",
        "post_count": 46,
        "follower_count": 746,
        "owner": {
          "id": 234172146,
          "username": "design",
          "full_name": "Design",
          "avatar_url": "https://cdn.cosmos.so/e39a4934-53ae-4536-95a3-18ccd4d052a0"
        },
        "subcollections": []
      }
    },
    {
      "name": "Collection Posts",
      "method": "GET",
      "path": "/v1/cosmos/cluster/posts",
      "description": "Get public posts saved to a Cosmos collection. Supports cursor pagination.",
      "fullDescription": "Get public posts saved to a Cosmos collection. Supports cursor pagination. Uses public Cosmos data. Private or login-restricted content is not available. Costs 1 credit per successful request, including native empty results. Scraper failures are not charged. Sending cursor=null returns end_of_pagination: true and costs zero credits.",
      "credits": 1,
      "params": [
        {
          "name": "url",
          "type": "string",
          "required": true,
          "description": "Public Cosmos collection URL.",
          "placeholder": "https://www.cosmos.so/design/the-best-band-posters"
        },
        {
          "name": "cursor",
          "type": "string",
          "description": "Pass the previous response cursor unchanged. Stop when it is null; sending the literal string \"null\" returns an empty terminal page without fetching or charging.",
          "placeholder": ""
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "credits_charged": 1,
        "items": [
          {
            "id": 2107587668,
            "url": "https://www.cosmos.so/e/2107587668",
            "created_at": "2026-01-24T17:23:49.338775Z",
            "caption": "Japanese movie poster for A Hard Day's Night (1964) featuring The Beatles.",
            "text": null,
            "title": null,
            "description": null,
            "owner": {
              "id": 2074596056,
              "username": "audreyelli"
            },
            "source_url": "https://www.pinterest.com/pin/7177680652369084/",
            "source_author": {
              "username": "telliott1817",
              "full_name": "Tom Elliott",
              "profile_url": "https://www.pinterest.com/telliott1817",
              "avatar_url": null
            },
            "media": [
              {
                "id": "8d612bfd-2b7b-458c-ac99-af7c406eef97",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/8d612bfd-2b7b-458c-ac99-af7c406eef97",
                "width": 1080,
                "height": 1671,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              }
            ],
            "price": null,
            "brand": null,
            "saved_at": "2026-10-03T02:00:48.395167Z"
          }
        ],
        "total_count": 46,
        "cursor": "eyJ2MSI6MTAuMCwidjIiOjE0NDU4Mzc5fQ==",
        "has_more": true
      },
      "paginationField": "cursor"
    },
    {
      "name": "Search",
      "method": "GET",
      "path": "/v1/cosmos/search",
      "description": "Search public Cosmos posts by keyword. Cosmos may return related posts even when there is no exact keyword match.",
      "fullDescription": "Search public Cosmos posts by keyword. Cosmos may return related posts even when there is no exact keyword match. Public data only. One credit per successful request, including successful empty results. Keep the cursor unchanged and stop when has_more is false. result_count is Cosmos’s search retrieval-window count, not the total number of matching posts. Sending cursor=null returns end_of_pagination: true and costs zero credits.",
      "credits": 1,
      "params": [
        {
          "name": "query",
          "type": "string",
          "required": true,
          "description": "Search text.",
          "placeholder": "architecture"
        },
        {
          "name": "cursor",
          "type": "string",
          "required": false,
          "description": "Pass the previous response cursor unchanged. Stop when it is null; sending the literal string \"null\" returns an empty terminal page without fetching or charging."
        }
      ],
      "sampleResponse": {
        "success": true,
        "credits_remaining": 100,
        "items": [
          {
            "id": 547956585,
            "url": "https://www.cosmos.so/e/547956585",
            "created_at": "2025-06-19T12:57:19.994842Z",
            "caption": "An architectural poster created using Midjourney v7.",
            "text": null,
            "title": null,
            "description": null,
            "owner": {
              "id": 2059029120,
              "username": "joris.kahl"
            },
            "source_url": "https://www.instagram.com/p/DK2wZxvMsbf/?igsh=MW9ubmc3NzRucHBkNg==",
            "source_author": {
              "username": "ai_architecture_awards",
              "full_name": "AI Architecture",
              "profile_url": "https://www.instagram.com/ai_architecture_awards",
              "avatar_url": null
            },
            "media": [
              {
                "id": "589cdf02-9abf-4d94-88ef-809734ca5444",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/e00a12d4-1e19-45de-9649-b42e9c9f724a",
                "width": 928,
                "height": 1232,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              },
              {
                "id": "0e2ebb91-84fc-4700-b076-7c772289b9c7",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/4c815d2f-c297-4bee-89f3-bdc8e952440f",
                "width": 928,
                "height": 1232,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              },
              {
                "id": "e496cd28-ebe1-4b31-b699-ad97c94c66ed",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/6399cf64-a4ee-4388-b9f9-6622bbc6d743",
                "width": 928,
                "height": 1232,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              },
              {
                "id": "7158acc9-3506-4724-a9e9-c1decc5ea56e",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/6b72b8d6-2774-4d6c-be5c-0922cc8b5422",
                "width": 928,
                "height": 1232,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              },
              {
                "id": "97f0e563-1b25-487e-af2e-768bfc95dd68",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/e0025cd8-bb42-4578-8b2b-0b2ec086e96d",
                "width": 928,
                "height": 1232,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              }
            ],
            "price": null,
            "brand": null
          },
          {
            "id": 590444993,
            "url": "https://www.cosmos.so/e/590444993",
            "created_at": "2024-12-14T20:41:53.06599Z",
            "caption": "A Beaux-Arts building facade in Budapest, Hungary.",
            "text": null,
            "title": null,
            "description": null,
            "owner": {
              "id": 215653290,
              "username": "d.kin"
            },
            "source_url": "https://www.instagram.com/p/C90QZS2JSa-/?img_index=1&igsh=MTdteDg3dTluZDIzZQ==",
            "source_author": {
              "username": "elluxella",
              "full_name": "ELLUXELLA | Architecture • Interiors • Travel",
              "profile_url": "https://www.instagram.com/elluxella",
              "avatar_url": null
            },
            "media": [
              {
                "id": "6c789336-d4e9-4a28-b401-cec1f0650487",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/7f350490-121f-43e4-8828-8f59bdd2c18b",
                "width": 1080,
                "height": 1335,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              },
              {
                "id": "d35c97fa-c8fe-4112-97ad-781ad13c44d9",
                "type": "StaticImage",
                "url": "https://cdn.cosmos.so/11c90d3d-d862-45e1-8aa7-5ce8ccbe5342",
                "width": 1080,
                "height": 1335,
                "ai_generated": false,
                "duration": null,
                "thumbnail_url": null,
                "video_url": null,
                "playback_url": null
              }
            ],
            "price": null,
            "brand": null
          }
        ],
        "cursor": "cursor://recsys/search?user_id=0&profile=search__match_jina_dual70_recql&query=architecture&last=39&count=500",
        "has_more": true,
        "result_count": 500
      }
    }
  ]
};
