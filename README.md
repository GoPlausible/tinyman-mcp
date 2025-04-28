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

```bash
npm install tinyman-mcp
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
