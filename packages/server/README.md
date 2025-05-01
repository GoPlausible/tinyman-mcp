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
## Features

### Available Tools

The server provides the following MCP tools:

#### Pool Management
- `tinyman_get_pool`
  - Retrieves detailed information about a specific liquidity pool
  - Includes current reserves, fees, and protocol version
  - Parameters: asset1Id, asset2Id, version (optional, defaults to v2)

- `tinyman_get_pool_analytics`
  - Gets analytics and statistics for a pool
  - Includes volume, TVL, and price history
  - Parameters: poolAddress, timeframe (optional)

- `tinyman_get_pool_creation_quote`
  - Generates quote for creating a new liquidity pool
  - Calculates required minimum liquidity
  - Parameters: asset1Id, asset2Id, version (optional)

#### Trading Operations
- `tinyman_get_swap_quote`
  - Generates quotes for asset swaps
  - Supports fixed input and fixed output modes
  - Calculates price impact and slippage
  - Parameters:
    - amount
    - assetIn
    - assetOut
    - slippagePct (optional)
    - fixedMode (input/output)
    - version (optional)

#### Liquidity Management
- `tinyman_get_liquidity_quote`
  - Generates quotes for adding liquidity
  - Supports single and dual asset deposits
  - Calculates expected pool tokens
  - Parameters:
    - asset1Amount
    - asset2Amount
    - asset1Id
    - asset2Id
    - slippagePct (optional)

- `tinyman_get_remove_liquidity_quote`
  - Generates quotes for removing liquidity
  - Supports proportional and single-asset withdrawals
  - Calculates expected asset returns
  - Parameters:
    - poolTokenAmount
    - poolAddress
    - singleAssetMode (optional)
    - slippagePct (optional)

#### Asset Operations
- `tinyman_get_asset_optin_quote`
  - Generates quote for opting into an asset
  - Parameters: assetId

- `tinyman_get_validator_optin_quote`
  - Generates quote for opting into a validator
  - Parameters: validatorAppId

- `tinyman_get_validator_optout_quote`
  - Generates quote for opting out of a validator
  - Parameters: validatorAppId

All tools support both Tinyman v1.1 and v2 protocols, with v2 being the default version where applicable. Tools return standardized quote objects that can be used to construct and submit transactions.

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
