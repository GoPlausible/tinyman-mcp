# Tinyman MCP

A Model Context Protocol (MCP) implementation for [Tinyman](https://tinyman.org) on Algorand, built by [GoPlausible](https://github.com/GoPlausible).

## Overview

This project provides MCP tools and resources for interacting with Tinyman AMM protocol on Algorand blockchain. It consists of two main packages:

- `@tinyman-mcp/server`: MCP server implementation providing tools for Tinyman operations like swaps, liquidity provision, pool management and analytics
- `@tinyman-mcp/client`: Client implementation for wallet connections and transaction signing (Work in Progress)

## Features

The MCP server provides the following tools:

### Pool Management
- `tinyman_get_pool`: Retrieve detailed information about a specific pool
- `tinyman_get_pool_analytics`: Get analytics and statistics for a pool
- `tinyman_get_pool_creation_quote`: Generate quote for creating a new pool

### Trading Operations
- `tinyman_get_swap_quote`: Generate quotes for asset swaps with support for:
  - Fixed input amount swaps
  - Fixed output amount swaps
  - Slippage calculations

### Liquidity Management
- `tinyman_get_liquidity_quote`: Generate quotes for adding liquidity
  - Supports single and dual asset deposits
  - Calculates expected pool tokens
- `tinyman_get_remove_liquidity_quote`: Generate quotes for removing liquidity
  - Supports proportional and single-asset withdrawals
  - Calculates expected asset returns

### Asset Operations
- `tinyman_get_asset_optin_quote`: Generate quote for opting into an asset
- `tinyman_get_validator_optin_quote`: Generate quote for opting into a validator
- `tinyman_get_validator_optout_quote`: Generate quote for opting out of a validator

All tools support both Tinyman v1.1 and v2 protocols, with v2 being the default version where applicable.

## Installation

To install or update the Tinyman MCP implementation, clone the repository, install the dependencies and build the project":

First check node version to be 23.6.1 or later:
```bash
node -v
```

Upgrade to 23.6.1 or later if needed!

Then check the Claude or Cursor container folders to have mcp-servers folder (if not create one):
```bash
mkdir PATH_ON_YOUR_MACHINE/Claude/mcp-servers
# or for Cursor 
mkdir PATH_ON_YOUR_MACHINE/Cursor/mcp-servers
```
Then clone this repository under mcp-servers folder and install dependencies:

```bash
cd PATH_ON_YOUR_MACHINE/Claude/mcp-servers
# or for Cursor 
cd PATH_ON_YOUR_MACHINE/Cursor/mcp-servers
# Clone the repository
git clone https://github.com/GoPlausible/tinyman-mcp.git
cd tinyman-mcp
# Install dependencies
npm install
# Build the project
npm run build
# Edit the .env file to set your configurations
```
And you are done! Now you can open you MCP config and add the server as :

```json
{
  "mcpServers": {
    "tinyman-mcp": {
      "command": "node",
      "args": [
        "PATH_ON_YOUR_MACHINE/Claude/mcp-servers/tinyman-mcp/packages/server/dist/index.js"
     ],
      "env": {
        "ALGORAND_NETWORK": "mainnet",
        "ALGORAND_ALGOD_API": "https://mainnet-api.algonode.cloud/v2",
        "ALGORAND_ALGOD": "https://mainnet-api.algonode.cloud",
        "ALGORAND_ALGOD_PORT": "",
        "ALGORAND_TOKEN": "",
        "ALGORAND_AGENT_WALLET": "problem aim online jaguar upper oil flight stumble mystery aerobic toy avoid file tomato moment exclude witness guard lab opera crunch noodle dune abandon broccoli",
        "ITEMS_PER_PAGE": "10"

      }
    }
  }
}
```
Make sure yopu change the paths to match your local system's paths.

For example on MACOS and Claud, the path would be something like this:

```json
{
  "mcpServers": {
    "algorand-mcp": {
      "command": "node",
      "args": [
        " /Users/YOUR_USERNAME/Library/Application\ Support/Claude/mcp-servers/tinyman-mcp/packages/server/dist/index.js"
     ]
    }
  }
}
```

## Project Structure

```
packages/
  ├── client/         # Client implementation (WIP)
  └── server/         # MCP server implementation
```

## Development

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Clean build artifacts
npm run clean
```

## License

MIT
