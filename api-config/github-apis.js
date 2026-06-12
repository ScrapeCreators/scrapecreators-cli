export const githubApis = {
  id: "github",
  name: "GitHub",
  description: "Scrape GitHub profiles, repositories, and public activity",
  endpoints: [
    {
      name: "User",
      method: "GET",
      description:
        "Get public GitHub user details for a user. Pass username, handle, or url.",
      fullDescription:
        "Retrieves public GitHub user details including name, bio, avatar, company, location, blog, follower counts, public repo counts, and account timestamps. Pass username, handle, or a full GitHub user url.",
      path: "/v1/github/user",
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997685116,
        "id": 1024025,
        "node_id": "MDQ6VXNlcjEwMjQwMjU=",
        "login": "torvalds",
        "name": "Linus Torvalds",
        "company": "Linux Foundation",
        "blog": "",
        "location": "Portland, OR",
        "email": null,
        "bio": null,
        "twitter_username": null,
        "avatar_url": "https://avatars.githubusercontent.com/u/1024025?v=4",
        "url": "https://github.com/torvalds",
        "type": "User",
        "site_admin": false,
        "public_repos": 11,
        "public_gists": 1,
        "followers": 303973,
        "following": 0,
        "created_at": "2011-09-03T15:26:22Z",
        "updated_at": "2026-01-13T07:10:05Z"
      },
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          placeholder: "torvalds",
          description: "GitHub username/handle of the user you want the details for",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub user URL, e.g. https://github.com/torvalds.",
          placeholder: "https://github.com/torvalds",
        },
      ],
    },
    {
      name: "Repositories",
      method: "GET",
      description:
        "Get public repositories for a GitHub user. Supports pagination and GitHub's repo sorting options.",
      fullDescription:
        "Retrieves a user's public repositories with repo metadata like description, language, stars, forks, topics, license, visibility, default branch, and timestamps. Pass username, handle, or url. Supports pagination with cursor, plus GitHub's type, sort, and direction parameters.",
      path: "/v1/github/user/repositories",
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          placeholder: "torvalds",
          description: "GitHub username/handle of the user you want the repositories for",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub user URL, e.g. https://github.com/kentcdodds.",
          placeholder: "https://github.com/kentcdodds",
        },
        {
          name: "type",
          type: "select",
          required: false,
          description: "Repository type. Defaults to owner. GitHub also supports all and member.",
          placeholder: "owner",
          options: ["owner", "all", "member"],
        },
        {
          name: "sort",
          type: "select",
          required: false,
          description: "Sort by created, updated, pushed, or full_name. Defaults to updated.",
          placeholder: "updated",
          options: ["created", "updated", "pushed", "full_name"],
        },
        {
          name: "direction",
          type: "select",
          required: false,
          description: "Sort direction: ascending or descending.",
          placeholder: "desc",
          options: ["asc", "desc"],
        },
        {
          name: "cursor",
          type: "number",
          required: false,
          description: "Cursor from the previous response. Defaults to 1.",
          placeholder: 1,
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684739,
        "repositories": [
          {
            "id": 320393623,
            "node_id": "MDEwOlJlcG9zaXRvcnkzMjAzOTM2MjM=",
            "name": "kentcdodds.com",
            "full_name": "kentcdodds/kentcdodds.com",
            "owner": {
              "id": 1500684,
              "login": "kentcdodds",
              "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
              "url": "https://github.com/kentcdodds",
              "type": "User"
            },
            "private": false,
            "url": "https://github.com/kentcdodds/kentcdodds.com",
            "description": "My personal website",
            "fork": false,
            "homepage": "https://kentcdodds.com",
            "language": "MDX",
            "forks_count": 654,
            "stars_count": 2485,
            "watchers_count": 2485,
            "size": 53677,
            "default_branch": "main",
            "open_issues_count": 4,
            "topics": [
              "kentcdodds",
              "oss",
              "prisma",
              "react",
              "remix",
              "sqlite",
              "typescript",
              "website"
            ],
            "license": {
              "key": "other",
              "name": "Other",
              "spdx_id": "NOASSERTION"
            },
            "archived": false,
            "disabled": false,
            "visibility": "public",
            "pushed_at": "2026-05-20T20:16:24Z",
            "created_at": "2020-12-10T21:24:32Z",
            "updated_at": "2026-05-21T16:43:37Z"
          },
          {
            "id": 1185768353,
            "node_id": "R_kgDORq1joQ",
            "name": "kody",
            "full_name": "kentcdodds/kody",
            "owner": {
              "id": 1500684,
              "login": "kentcdodds",
              "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
              "url": "https://github.com/kentcdodds",
              "type": "User"
            },
            "private": false,
            "url": "https://github.com/kentcdodds/kody",
            "description": "An experimental personal assistant platform built on Cloudflare Workers and MCP",
            "fork": false,
            "homepage": "",
            "language": "TypeScript",
            "forks_count": 10,
            "stars_count": 88,
            "watchers_count": 88,
            "size": 16663,
            "default_branch": "main",
            "open_issues_count": 2,
            "topics": [],
            "license": null,
            "archived": false,
            "disabled": false,
            "visibility": "public",
            "pushed_at": "2026-05-21T12:37:15Z",
            "created_at": "2026-03-18T23:30:18Z",
            "updated_at": "2026-05-21T12:36:07Z"
          },
        ],
        "cursor": 2
      },
    },
    {
      name: "Pull Requests",
      method: "GET",
      description:
        "Get public pull requests authored by a GitHub user. Filter by created date with since and until.",
      fullDescription:
        "Searches public GitHub pull requests authored by a user using GitHub's public search index. Pass username, handle, or url. Optional since and until filters use YYYY-MM-DD created dates. Results include the PR title, repo, state, created_at, and url, sorted by newest created first.",
      path: "/v1/github/user/pull-requests",
      params: [
        {
          name: "handle",
          type: "string",
          required: true,
          placeholder: "torvalds",
          description: "GitHub username/handle of the user you want pull requests for",
        },
        {
          name: "since",
          type: "string",
          required: false,
          description: "Only return pull requests created on or after this date. Use YYYY-MM-DD.",
          placeholder: "2024-01-01",
        },
        {
          name: "until",
          type: "string",
          required: false,
          description: "Only return pull requests created on or before this date. Use YYYY-MM-DD.",
          placeholder: "2024-12-31",
        },
        {
          name: "cursor",
          type: "number",
          required: false,
          description: "Cursor from the previous response. Defaults to 1.",
          placeholder: 1,
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 100,
        "pull_requests": [
          {
            "title": "Garmin: Report correct local time offset",
            "repo": "subsurface/libdc",
            "state": "closed",
            "created_at": "2024-12-26T20:13:25Z",
            "url": "https://github.com/subsurface/libdc/pull/69"
          },
          {
            "title": "Add support for odd-sized SHA256 objects",
            "repo": "git/git",
            "state": "closed",
            "created_at": "2024-08-12T17:05:24Z",
            "url": "https://github.com/git/git/pull/1772"
          }
        ],
        "cursor": 2,
        "has_more": false
      },
    },
    {
      name: "Activity",
      method: "GET",
      description:
        "Get public GitHub profile contribution activity for a user. Defaults to the current year and returns one month at a time.",
      fullDescription:
        "Retrieves GitHub profile contribution activity for a user from the public profile activity timeline. Defaults to the current year when year is not provided. Results come back one month at a time in the activity array. Pass cursor from the previous response to page backward through the year.",
      path: "/v1/github/user/activity",
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          description: "GitHub handle",
          placeholder: "kentcdodds",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub user URL, e.g. https://github.com/kentcdodds.",
          placeholder: "https://github.com/torvalds",
        },
        {
          name: "year",
          type: "number",
          required: false,
          description: "When provided, returns profile contribution activity for that year. Defaults to the current year.",
          placeholder: "2026",
        },
        {
          name: "cursor",
          type: "number",
          required: false,
          description: "Cursor from the previous response. Pages backward by month through the selected year.",
          placeholder: 1,
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684632,
        "username": "kentcdodds",
        "year": 2026,
        "month": "May 2026",
        "activity": [
          {
            "summary": "Created 186 commits in 13 repositories",
            "details": [
              {
                "text": "kentcdodds/kody 144 commits",
                "repository": {
                  "text": "kentcdodds/kody",
                  "url": "https://github.com/kentcdodds/kody"
                },
                "links": [
                  {
                    "text": "kentcdodds/kody",
                    "url": "https://github.com/kentcdodds/kody"
                  },
                  {
                    "text": "144 commits",
                    "url": "https://github.com/kentcdodds/kody/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kody-bot/connector-kit 9 commits",
                "repository": {
                  "text": "kody-bot/connector-kit",
                  "url": "https://github.com/kody-bot/connector-kit"
                },
                "links": [
                  {
                    "text": "kody-bot/connector-kit",
                    "url": "https://github.com/kody-bot/connector-kit"
                  },
                  {
                    "text": "9 commits",
                    "url": "https://github.com/kody-bot/connector-kit/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kentcdodds/kentcdodds.com 8 commits",
                "repository": {
                  "text": "kentcdodds/kentcdodds.com",
                  "url": "https://github.com/kentcdodds/kentcdodds.com"
                },
                "links": [
                  {
                    "text": "kentcdodds/kentcdodds.com",
                    "url": "https://github.com/kentcdodds/kentcdodds.com"
                  },
                  {
                    "text": "8 commits",
                    "url": "https://github.com/kentcdodds/kentcdodds.com/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kentcdodds/stream-systems-visual 8 commits",
                "repository": {
                  "text": "kentcdodds/stream-systems-visual",
                  "url": "https://github.com/kentcdodds/stream-systems-visual"
                },
                "links": [
                  {
                    "text": "kentcdodds/stream-systems-visual",
                    "url": "https://github.com/kentcdodds/stream-systems-visual"
                  },
                  {
                    "text": "8 commits",
                    "url": "https://github.com/kentcdodds/stream-systems-visual/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kentcdodds/kody-home-connector 6 commits",
                "repository": {
                  "text": "kentcdodds/kody-home-connector",
                  "url": "https://github.com/kentcdodds/kody-home-connector"
                },
                "links": [
                  {
                    "text": "kentcdodds/kody-home-connector",
                    "url": "https://github.com/kentcdodds/kody-home-connector"
                  },
                  {
                    "text": "6 commits",
                    "url": "https://github.com/kentcdodds/kody-home-connector/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kentcdodds/kids-ledger 3 commits",
                "repository": {
                  "text": "kentcdodds/kids-ledger",
                  "url": "https://github.com/kentcdodds/kids-ledger"
                },
                "links": [
                  {
                    "text": "kentcdodds/kids-ledger",
                    "url": "https://github.com/kentcdodds/kids-ledger"
                  },
                  {
                    "text": "3 commits",
                    "url": "https://github.com/kentcdodds/kids-ledger/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/epicshop 2 commits",
                "repository": {
                  "text": "epicweb-dev/epicshop",
                  "url": "https://github.com/epicweb-dev/epicshop"
                },
                "links": [
                  {
                    "text": "epicweb-dev/epicshop",
                    "url": "https://github.com/epicweb-dev/epicshop"
                  },
                  {
                    "text": "2 commits",
                    "url": "https://github.com/epicweb-dev/epicshop/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/eprec 1 commit",
                "repository": {
                  "text": "epicweb-dev/eprec",
                  "url": "https://github.com/epicweb-dev/eprec"
                },
                "links": [
                  {
                    "text": "epicweb-dev/eprec",
                    "url": "https://github.com/epicweb-dev/eprec"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/epicweb-dev/eprec/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/epicli 1 commit",
                "repository": {
                  "text": "epicweb-dev/epicli",
                  "url": "https://github.com/epicweb-dev/epicli"
                },
                "links": [
                  {
                    "text": "epicweb-dev/epicli",
                    "url": "https://github.com/epicweb-dev/epicli"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/epicweb-dev/epicli/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/remember 1 commit",
                "repository": {
                  "text": "epicweb-dev/remember",
                  "url": "https://github.com/epicweb-dev/remember"
                },
                "links": [
                  {
                    "text": "epicweb-dev/remember",
                    "url": "https://github.com/epicweb-dev/remember"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/epicweb-dev/remember/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/cachified 1 commit",
                "repository": {
                  "text": "epicweb-dev/cachified",
                  "url": "https://github.com/epicweb-dev/cachified"
                },
                "links": [
                  {
                    "text": "epicweb-dev/cachified",
                    "url": "https://github.com/epicweb-dev/cachified"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/epicweb-dev/cachified/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "epicweb-dev/react-e2e-testing-with-pl... 1 commit",
                "repository": {
                  "text": "epicweb-dev/react-e2e-testing-with-pl...",
                  "url": "https://github.com/epicweb-dev/react-e2e-testing-with-playwright"
                },
                "links": [
                  {
                    "text": "epicweb-dev/react-e2e-testing-with-pl...",
                    "url": "https://github.com/epicweb-dev/react-e2e-testing-with-playwright"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/epicweb-dev/react-e2e-testing-with-playwright/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              },
              {
                "text": "kentcdodds/mediarss 1 commit",
                "repository": {
                  "text": "kentcdodds/mediarss",
                  "url": "https://github.com/kentcdodds/mediarss"
                },
                "links": [
                  {
                    "text": "kentcdodds/mediarss",
                    "url": "https://github.com/kentcdodds/mediarss"
                  },
                  {
                    "text": "1 commit",
                    "url": "https://github.com/kentcdodds/mediarss/commits?author=kentcdodds&since=2026-05-01&until=2026-05-22"
                  }
                ],
                "language": null,
                "date_text": null,
                "date_description": null
              }
            ]
          },
          {
            "summary": "Created 2 repositories",
            "details": [
              {
                "text": "kentcdodds/stream-systems-visual TypeScript • Built by This contribution was made on May 19 May 19",
                "repository": {
                  "text": "kentcdodds/stream-systems-visual",
                  "url": "https://github.com/kentcdodds/stream-systems-visual"
                },
                "links": [
                  {
                    "text": "kentcdodds/stream-systems-visual",
                    "url": "https://github.com/kentcdodds/stream-systems-visual"
                  }
                ],
                "language": "TypeScript",
                "date_text": "May 19",
                "date_description": "This contribution was made on May 19"
              },
              {
                "text": "kentcdodds/kody-home-connector TypeScript • Built by This contribution was made on May 7 May 7",
                "repository": {
                  "text": "kentcdodds/kody-home-connector",
                  "url": "https://github.com/kentcdodds/kody-home-connector"
                },
                "links": [
                  {
                    "text": "kentcdodds/kody-home-connector",
                    "url": "https://github.com/kentcdodds/kody-home-connector"
                  }
                ],
                "language": "TypeScript",
                "date_text": "May 7",
                "date_description": "This contribution was made on May 7"
              }
            ]
          },
          {
            "summary": "31 contributions in private repositories May 5 – May 19",
            "details": []
          }
        ],
        "no_activity": false,
        "message": null,
        "cursor": 2
      },
    },
    {
      name: "Followers",
      method: "GET",
      description:
        "Get public followers for a GitHub user. Pass username, handle, or url.",
      fullDescription:
        "Retrieves public GitHub followers for a user. Each follower includes login, avatar, user URL, type, and GitHub IDs. Pass username, handle, or a full GitHub user url. Supports cursor pagination.",
      path: "/v1/github/user/followers",
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          description: "GitHub username/handle of the user you want the followers for",
          placeholder: "torvalds",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub user URL, e.g. https://github.com/torvalds.",
          placeholder: "https://github.com/torvalds",
        },
        {
          name: "cursor",
          type: "number",
          required: false,
          description: "Cursor from the previous response. Defaults to 1.",
          placeholder: 1,
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684592,
        "followers": [
          {
            "id": 206,
            "node_id": "MDQ6VXNlcjIwNg==",
            "login": "sprsquish",
            "avatar_url": "https://avatars.githubusercontent.com/u/206?v=4",
            "url": "https://github.com/sprsquish",
            "type": "User",
            "site_admin": false
          },
          {
            "id": 365,
            "node_id": "MDQ6VXNlcjM2NQ==",
            "login": "pius",
            "avatar_url": "https://avatars.githubusercontent.com/u/365?v=4",
            "url": "https://github.com/pius",
            "type": "User",
            "site_admin": false
          },
        ],
        "cursor": 2
      },
    },
    {
      name: "Following",
      method: "GET",
      description:
        "Get public accounts a GitHub user follows.",
      fullDescription:
        "Retrieves public accounts followed by a GitHub user. Each account includes login, avatar, profile URL, type, and GitHub IDs. Pass username, handle, or a full GitHub profile url. Supports cursor pagination.",
      path: "/v1/github/user/following",
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          description: "GitHub handle",
          placeholder: "kentcdodds",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub profile URL",
          placeholder: "https://github.com/kentcdodds",
        },
        {
          name: "cursor",
          type: "number",
          required: false,
          description: "Cursor from the previous response. Defaults to 1.",
          placeholder: 1,
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684530,
        "following": [
          {
            "id": 4303,
            "node_id": "MDQ6VXNlcjQzMDM=",
            "login": "jdalton",
            "avatar_url": "https://avatars.githubusercontent.com/u/4303?v=4",
            "url": "https://github.com/jdalton",
            "type": "User",
            "site_admin": false
          },
          {
            "id": 17031,
            "node_id": "MDQ6VXNlcjE3MDMx",
            "login": "jlongster",
            "avatar_url": "https://avatars.githubusercontent.com/u/17031?v=4",
            "url": "https://github.com/jlongster",
            "type": "User",
            "site_admin": false
          },
        ],
        "cursor": 2
      },
    },
    {
      name: "Contributions",
      method: "GET",
      description:
        "Get a user's GitHub contribution graph for a year.",
      fullDescription:
        "Retrieves the public GitHub contribution graph for a user and year, including total contributions and daily contribution counts/intensity. Pass github handle, or a full GitHub profile url. Defaults to the current year when year is not provided.",
      path: "/v1/github/user/contributions",
      params: [
        {
          name: "handle",
          type: "string",
          required: false,
          description: "GitHub handle",
          placeholder: "torvalds",
        },
        {
          name: "url",
          type: "string",
          required: false,
          description: "GitHub profile URL",
          placeholder: "https://github.com/torvalds",
        },
        {
          name: "year",
          type: "number",
          required: false,
          description: "Contribution graph year. Defaults to the current year.",
          placeholder: '2026',
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684481,
        "contributions": {
          "username": "torvalds",
          "year": 2026,
          "total_contributions": 1214,
          "days": [
            {
              "date": "2026-01-01",
              "contribution_count": 4,
              "color": null,
              "intensity": 1
            },
            {
              "date": "2026-01-02",
              "contribution_count": 16,
              "color": null,
              "intensity": 2
            },
            {
              "date": "2026-01-03",
              "contribution_count": 3,
              "color": null,
              "intensity": 1
            },
            {
              "date": "2026-01-04",
              "contribution_count": 7,
              "color": null,
              "intensity": 1
            },
            {
              "date": "2026-01-05",
              "contribution_count": 3,
              "color": null,
              "intensity": 1
            },
            {
              "date": "2026-01-06",
              "contribution_count": 2,
              "color": null,
              "intensity": 1
            },
            {
              "date": "2026-01-07",
              "contribution_count": 11,
              "color": null,
              "intensity": 2
            }
          ]
        }
      },
    },
    {
      name: "Repository",
      method: "GET",
      description:
        "Get public metadata for one GitHub repository.",
      fullDescription:
        "Retrieves public metadata for one GitHub repository, including owner, description, language, stars, forks, topics, license, visibility, default branch, open issues, and timestamps. Pass a full GitHub repository url.",
      path: "/v1/github/repository",
      params: [
        {
          name: "url",
          type: "string",
          required: true,
          description: "GitHub repository URL",
          placeholder: "https://github.com/torvalds/linux",
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684249,
        "repository": {
          "id": 2325298,
          "node_id": "MDEwOlJlcG9zaXRvcnkyMzI1Mjk4",
          "name": "linux",
          "full_name": "torvalds/linux",
          "owner": {
            "id": 1024025,
            "login": "torvalds",
            "avatar_url": "https://avatars.githubusercontent.com/u/1024025?v=4",
            "url": "https://github.com/torvalds",
            "type": "User"
          },
          "private": false,
          "url": "https://github.com/torvalds/linux",
          "description": "Linux kernel source tree",
          "fork": false,
          "homepage": "",
          "language": "C",
          "forks_count": 62423,
          "stars_count": 233979,
          "watchers_count": 233979,
          "size": 6298741,
          "default_branch": "master",
          "open_issues_count": 3,
          "topics": [],
          "license": {
            "key": "other",
            "name": "Other",
            "spdx_id": "NOASSERTION"
          },
          "archived": false,
          "disabled": false,
          "visibility": "public",
          "pushed_at": "2026-05-21T16:23:10Z",
          "created_at": "2011-09-04T22:48:12Z",
          "updated_at": "2026-05-21T19:31:40Z"
        }
      },
    },
    {
      name: "Trending Repositories",
      method: "GET",
      description:
        "Get GitHub trending repositories. Supports language, spoken_language_code, and daily/weekly/monthly range filters.",
      fullDescription:
        "Scrapes GitHub's public Trending repositories page. Returns ranked repositories with public URLs, descriptions, language, star/fork counts, stars for the selected range, and built-by users when GitHub shows them. Use language for paths like JavaScript or Python, since for daily/weekly/monthly, and spoken_language_code for GitHub's spoken language filter.",
      path: "/v1/github/trending/repositories",
      params: [
        {
          name: "language",
          type: "string",
          required: false,
          description: "Optional coding language, e.g. javascript, python, or go.",
          placeholder: "javascript",
        },
        {
          name: "since",
          type: "select",
          required: false,
          description: "Trending range: daily, weekly, or monthly. Defaults to daily.",
          placeholder: "daily",
          options: ["daily", "weekly", "monthly"],
        },
        {
          name: "spoken_language_code",
          type: "string",
          required: false,
          description: "Optional spoken language code filter, e.g. en.",
          placeholder: "en",
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997684128,
        "since": "daily",
        "language": null,
        "spoken_language_code": null,
        "repositories": [
          {
            "rank": 1,
            "owner": "anthropics",
            "repo": "claude-plugins-official",
            "full_name": "anthropics/claude-plugins-official",
            "url": "https://github.com/anthropics/claude-plugins-official",
            "description": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
            "language": "Python",
            "language_color": "#3572A5",
            "stars_count": 22064,
            "forks_count": 2627,
            "stars_today": 891,
            "stars_today_text": "891 stars today",
            "built_by": [
              {
                "username": "bryan-anthropic",
                "avatar_url": "https://avatars.githubusercontent.com/u/238056179?s=40&v=4"
              },
              {
                "username": "tobinsouth",
                "avatar_url": "https://avatars.githubusercontent.com/u/32489862?s=40&v=4"
              },
              {
                "username": "k6l3",
                "avatar_url": "https://avatars.githubusercontent.com/u/111803974?s=40&v=4"
              },
              {
                "username": "claude",
                "avatar_url": "https://avatars.githubusercontent.com/u/81847?s=40&v=4"
              },
              {
                "username": "noahzweben",
                "avatar_url": "https://avatars.githubusercontent.com/u/12701358?s=40&v=4"
              }
            ]
          },
          {
            "rank": 2,
            "owner": "colbymchenry",
            "repo": "codegraph",
            "full_name": "colbymchenry/codegraph",
            "url": "https://github.com/colbymchenry/codegraph",
            "description": "Pre-indexed code knowledge graph for Claude Code, Codex, Cursor, and OpenCode — fewer tokens, fewer tool calls, 100% local",
            "language": "TypeScript",
            "language_color": "#3178c6",
            "stars_count": 12987,
            "forks_count": 744,
            "stars_today": 4222,
            "stars_today_text": "4,222 stars today",
            "built_by": [
              {
                "username": "colbymchenry",
                "avatar_url": "https://avatars.githubusercontent.com/u/18431132?s=40&v=4"
              },
              {
                "username": "claude",
                "avatar_url": "https://avatars.githubusercontent.com/u/81847?s=40&v=4"
              },
              {
                "username": "omonien",
                "avatar_url": "https://avatars.githubusercontent.com/u/1296517?s=40&v=4"
              },
              {
                "username": "andreinknv",
                "avatar_url": "https://avatars.githubusercontent.com/u/261684394?s=40&v=4"
              },
              {
                "username": "MO2k4",
                "avatar_url": "https://avatars.githubusercontent.com/u/453360?s=40&v=4"
              }
            ]
          },
        ]
      },
    },
    {
      name: "Trending Developers",
      method: "GET",
      description:
        "Get GitHub trending developers. Supports language and daily/weekly/monthly range filters.",
      fullDescription:
        "Scrapes GitHub's public Trending developers page. Returns ranked developers with username, name, public profile URL, avatar, and the popular repository GitHub shows for that developer when available. Use language for paths like javascript or python and since for daily/weekly/monthly.",
      path: "/v1/github/trending/developers",
      params: [
        {
          name: "language",
          type: "string",
          required: false,
          description: "Optional trending coding language, e.g. javascript, python, or go.",
          placeholder: "javascript",
        },
        {
          name: "since",
          type: "select",
          required: false,
          description: "Trending range: daily, weekly, or monthly. Defaults to daily.",
          placeholder: "daily",
          options: ["daily", "weekly", "monthly"],
        },
      ],
      sampleResponse: {
        "success": true,
        "credits_remaining": 49997683964,
        "since": "daily",
        "language": null,
        "developers": [
          {
            "rank": 1,
            "username": "koala73",
            "name": "Elie Habib",
            "url": "https://github.com/koala73",
            "avatar_url": "https://avatars.githubusercontent.com/u/996596?s=96&v=4",
            "popular_repository": {
              "owner": "koala73",
              "repo": "worldmonitor",
              "full_name": "koala73/worldmonitor",
              "url": "https://github.com/koala73/worldmonitor",
              "name": "worldmonitor",
              "description": "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified s…"
            }
          },
          {
            "rank": 2,
            "username": "sonichi",
            "name": "Chi Wang",
            "url": "https://github.com/sonichi",
            "avatar_url": "https://avatars.githubusercontent.com/u/4250911?s=96&v=4",
            "popular_repository": {
              "owner": "sonichi",
              "repo": "sutando",
              "full_name": "sonichi/sutando",
              "url": "https://github.com/sonichi/sutando",
              "name": "sutando",
              "description": "My AI Stand. Realtime by day, rewriting itself by night. Summon my AI superpower."
            }
          },
        ]
      },
    },
  ],
};
