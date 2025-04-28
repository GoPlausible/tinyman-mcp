# @tinyman-mcp/server

MCP server implementation for [Tinyman](http://tinyman.org/) operations on Algorand. built by [GoPlausible](https://github.com/GoPlausible).

## Overview

This package implements a Model Context Protocol (MCP) server that provides tools and resources for interacting with the [Tinyman](http://tinyman.org/) AMM protocol. It enables AI models to perform operations like:

- Pool management and analytics
- Asset swaps
- Liquidity provision and removal
- Asset opt-ins

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

# Run tests
npm test

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
