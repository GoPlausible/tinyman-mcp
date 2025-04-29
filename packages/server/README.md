# @tinyman-mcp/server

MCP server implementation for [Tinyman](http://tinyman.org/) operations on Algorand. built by [GoPlausible](https://github.com/GoPlausible).

## Overview

This package implements a Model Context Protocol (MCP) server that provides tools and resources for interacting with the [Tinyman](http://tinyman.org/) AMM protocol. It enables AI models to perform operations like:

- Pool management and analytics
- Asset swaps
- Liquidity provision and removal
- Asset opt-ins

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
## Features

### API Tools

The server provides several categories of API tools:

#### Pool Management
- Pool creation and initialization
- Pool analytics and statistics
- Pool information retrieval

#### Trading Operations
- Asset swaps with quote calculation
- Liquidity provision with quote calculation
- Liquidity removal with quote calculation

#### Asset Management
- Asset opt-in transaction creation
- Validator opt-in transaction creation

### Resources

The server provides resources for:
- Wallet management
- Transaction signing
- Blockchain interaction

## Installation

```bash
npm install @tinyman-mcp/server
```

## Usage

The server can be run using:

```bash
node dist/index.js
```

It uses stdio for communication as per MCP protocol specifications.

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Environment variables:
- `ALGORAND_NODE`: Algorand node URL
- `ALGORAND_TOKEN`: Algorand node API token
- `ALGORAND_PORT`: Algorand node port
- `NETWORK`: Network to use (defaults to `mainnet`)

## Development

```bash
# Install dependencies
npm install

# Build
npm run build


# Clean build artifacts
npm run clean
```

## Docker

A Dockerfile is provided for containerized deployment:

```bash
# Build image
docker build -t tinyman-mcp-server .

# Run container
docker run -it --rm \
  --env-file .env \
  tinyman-mcp-server
```

## License

MIT
