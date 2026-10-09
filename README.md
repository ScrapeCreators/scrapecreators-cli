# ScrapeCreators CLI

CLI for the [ScrapeCreators API](https://scrapecreators.com) — use 180+ endpoints across 30+ platforms from the terminal or as an MCP server for AI agents.

180+ endpoints. One command.

[Documentation](https://docs.scrapecreators.com/) | [OpenAPI Spec](https://docs.scrapecreators.com/openapi.json) | [Get API Key](https://app.scrapecreators.com)

## Install

```bash
npm install -g @scrapecreators/cli
```

Or run without installing:

```bash
npx @scrapecreators/cli tiktok profile --handle charlidamelio --api-key YOUR_KEY
```

## Quick Start

1. Sign in or create an account with Google, Microsoft, GitHub, or an existing API key:

```bash
scrapecreators auth login
```

3. Make your first request:

```bash
scrapecreators tiktok profile --handle charlidamelio
```

4. Explore what's available:

```bash
scrapecreators list
```

## Authentication

Three ways to authenticate, in priority order:

| Priority | Method | Example |
|----------|--------|---------|
| 1 | `--api-key` flag | `scrapecreators tiktok profile --handle x --api-key YOUR_KEY` |
| 2 | Stored config | `scrapecreators auth login` (saves to `~/.config/scrapecreators/`) |
| 3 | Environment variable | `export SCRAPECREATORS_API_KEY=YOUR_KEY` |

> **Security note:** The `--api-key` flag is visible in shell history and process lists. For persistent use, prefer `scrapecreators auth login` or the environment variable. In CI/automated pipelines, always use the environment variable.

Get your API key at [app.scrapecreators.com](https://app.scrapecreators.com).

### Sign up with GitHub (device flow)

Run:

```bash
scrapecreators auth login --provider github
```

The CLI opens GitHub. Enter the code shown in your terminal, authorize with the
GitHub account you want to use, then return to your terminal. The CLI handles
polling, account creation, active-key retrieval, validation, and secure storage.
You never need to make API calls or copy access tokens.

New GitHub accounts receive 10,000 free API calls with no credit card. Existing
accounts retain their balance. You can then sign in on the website using the
same GitHub account. This is separate from the `gh` CLI; never read or forward
`gh auth token`.

### Guided signup and login

```bash
scrapecreators auth login
# Google / Microsoft / GitHub / Use an existing API key
scrapecreators auth signup                 # same guided flow
scrapecreators auth login --provider google
scrapecreators auth login --provider microsoft
scrapecreators auth login --provider api-key
```

Google and Microsoft open a ScrapeCreators approval page. Enter the short code
shown in your terminal and approve with the selected provider. If Microsoft asks
you to verify your email, follow the email link, then return to that approval
page and choose **I've verified my email**.

For a remote terminal, add `--no-browser` and open the printed link on your own
computer. Keep the command running while you authorize; cancel with Ctrl+C.
Without an interactive terminal, specify `--provider`. For an existing API key
in CI, set `SCRAPECREATORS_API_KEY` and use `--provider api-key`.

The CLI validates your key before saving it in an owner-only local config file.
It does not display device secrets, access tokens, or API keys. Agents must ask
before starting account signup or opening a browser. Node.js 20.3 or newer is
required.

## Usage

Every API endpoint is a subcommand under its platform:

```bash
scrapecreators <platform> <action> [--params]
```

Examples:

```bash
# profiles
scrapecreators instagram profile --handle jane
scrapecreators tiktok profile --handle charlidamelio
scrapecreators youtube channel --handle ThePatMcAfeeShow

# content feeds
scrapecreators tiktok profile-videos --handle charlidamelio --sort-by popular
scrapecreators instagram user-posts --handle jane
scrapecreators instagram user-reels --handle jane

# single post/video
scrapecreators instagram post --url "https://www.instagram.com/reel/DOq6eV6iIgD"
scrapecreators tiktok video --url "https://www.tiktok.com/@user/video/123"

# search
scrapecreators youtube search --query "tutorials"
scrapecreators instagram reels-search --query "dogs"
scrapecreators reddit search --query "best programming languages"
```

For the full list of 180+ endpoints across 30+ platforms, see the [API documentation](https://docs.scrapecreators.com/) or the [OpenAPI spec](https://docs.scrapecreators.com/openapi.json).

### Discover Endpoints

```bash
# list all platforms
scrapecreators list

# list endpoints for a specific platform
scrapecreators list tiktok

# see full help for any endpoint
scrapecreators tiktok profile --help
```

### Interactive Mode

Run with no arguments to get a guided walkthrough:

```bash
scrapecreators
```

Walks you through: pick platform -> pick action -> fill params -> execute.

## Commands Reference

| Command | Description |
|---------|-------------|
| `scrapecreators <platform> <action>` | Call any API endpoint |
| `scrapecreators list [platform]` | List available platforms or endpoints |
| `scrapecreators auth login` | Sign in or sign up with a provider, or use an existing API key |
| `scrapecreators auth status` | Show current auth status |
| `scrapecreators auth logout` | Remove stored API key |
| `scrapecreators balance` | Check credit balance |
| `scrapecreators config set <key> <value>` | Set a config value |
| `scrapecreators config get <key>` | Get a config value |
| `scrapecreators config list` | Show all config values |
| `scrapecreators agent add <target>` | Write MCP config into an agent (`cursor`, `claude`, `codex`) |

Run any command with `--help` for full usage details.

## Output & Options

The CLI auto-detects whether output goes to a terminal or a pipe:

| Context | Default | Override |
|---------|---------|----------|
| Any | Compact JSON | `--pretty`, `--format table\|csv\|markdown` |

```bash
# default: compact JSON
scrapecreators tiktok profile --handle charlidamelio

# pretty-printed JSON
scrapecreators tiktok profile --handle charlidamelio --pretty

# pipe to jq
scrapecreators tiktok profile --handle charlidamelio | jq '.stats'

# table format
scrapecreators tiktok profile --handle charlidamelio --format table

# csv (full dump — all fields)
scrapecreators tiktok profile --handle charlidamelio --format csv > output.csv

# csv clean (noisy fields removed — spreadsheet-friendly)
scrapecreators tiktok profile --handle charlidamelio --format csv --clean > output.csv

# clean json (strips booleans, empty values, settings)
scrapecreators tiktok profile --handle charlidamelio --clean

# save to file, print only the file path
scrapecreators tiktok profile-videos --handle charlidamelio --output ./data.json
```

All status messages (spinners, warnings) go to **stderr**. Data goes to **stdout**. Safe for piping.

| Flag | Description |
|------|-------------|
| `--api-key <key>` | Override API key for this request |
| `--format <fmt>` | Output format: `json`, `table`, `csv`, `markdown` |
| `--json` | Compact JSON (default) |
| `--pretty` | Pretty-print JSON with indentation |
| `--output <path>` | Save response to file, print only the path |
| `--clean` | Strip noisy fields (booleans, empty values, settings). Works with any format |
| `--no-color` | Disable ANSI colors |
| `--verbose` | Show request URL, timing, status code |

## AI Agent Integration

The CLI is designed agent-first. All 180+ endpoints are also available as an [MCP server](https://api.scrapecreators.com/mcp) — no CLI installation required for agents.

### MCP Server

Add to your agent's MCP config manually:

```json
{
  "mcpServers": {
    "scrapecreators": {
      "url": "https://api.scrapecreators.com/mcp",
      "headers": { "x-api-key": "your-key-here" }
    }
  }
}
```

Or auto-configure with the CLI:

```bash
scrapecreators agent add cursor    # writes .cursor/mcp.json
scrapecreators agent add claude    # writes ~/.claude/claude_desktop_config.json
scrapecreators agent add codex     # writes ~/.codex/mcp.json
```

Merges into existing config without overwriting other MCP servers. Prompts for API key if not already stored.

### Agent Skill

Install the [ScrapeCreators agent skill](https://github.com/scrapecreators/agent-skills) to teach agents how to pick the right endpoint, handle pagination, and manage credits:

```bash
npx skills add scrapecreators/agent-skills
```

Works with Cursor, Claude Code, Codex, GitHub Copilot, Gemini CLI, Windsurf, and 40+ other agents.

### Agent-Optimized Output

The default output is already compact JSON — no extra flags needed. To reduce further:

```bash
# --clean: strip booleans, empty values, settings (keeps urls and stats)
scrapecreators tiktok profile --handle x --clean

# --output: save to file, return only the path
# agent can then read specific parts of the file instead of consuming the full response
scrapecreators tiktok profile-videos --handle x --clean --output ./data.json
# stdout: ./data.json
```

Structured errors for agents:
```json
{"error":true,"code":"HTTP_401","message":"...","suggestion":"Run 'scrapecreators auth login'..."}
```

## Known Limitations

- **Handles**: pass without `@`. Use `charlidamelio` not `@charlidamelio`
- **Hashtags**: pass without `#`. Use `fyp` not `#fyp`
- **Transcripts**: video must be under 2 minutes

See the [API documentation](https://docs.scrapecreators.com/) for platform-specific limits and pagination details.