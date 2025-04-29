# Tinyman MCP

A Model Context Protocol (MCP) implementation for [Tinyman](https://tinyman.org) on Algorand, built by [GoPlausible](https://github.com/GoPlausible).

## Overview

This project provides MCP tools and resources for interacting with Tinyman AMM protocol on Algorand blockchain. It consists of two main packages:

- `@tinyman-mcp/server`: MCP server implementation providing tools for Tinyman operations like swaps, liquidity provision, pool management and analytics
- `@tinyman-mcp/client`: Client implementation for wallet connections and transaction signing (Work in Progress)

## Features

The MCP server provides tools for:

- Pool Management
  - Pool creation and initialization
  - Pool analytics and statistics
  - Pool information retrieval
  
- Trading Operations  
  - Asset swaps
  - Liquidity provision
  - Liquidity removal
  
- Asset Management
  - Asset opt-in
  - Validator opt-in

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
        "ALGORAND_AGENT_WALLET_ACTIVE": "problem aim online jaguar upper oil flight stumble mystery aerobic toy avoid file tomato moment exclude witness guard lab opera crunch noodle dune abandon broccoli",
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

# Run tests
npm test

# Clean build artifacts
npm run clean
```

## License

MIT
