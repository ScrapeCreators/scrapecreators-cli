# ScrapeCreators CLI

CLI for the [ScrapeCreators API](https://scrapecreators.com) — scrape 27+ social media platforms from the terminal or as an MCP server for AI agents.

110+ endpoints. One command.

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

1. Get your API key at [app.scrapecreators.com](https://app.scrapecreators.com)

2. Authenticate:

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

For the full list of 110+ endpoints across 27+ platforms, see the [API documentation](https://docs.scrapecreators.com/) or the [OpenAPI spec](https://docs.scrapecreators.com/openapi.json).

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
| `scrapecreators auth login` | Set your API key (interactive) |
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

The CLI is designed agent-first. All 110+ endpoints are also available as an [MCP server](https://api.scrapecreators.com/mcp) — no CLI installation required for agents.

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