import { Tool, ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { poolTools, handlePoolTools } from './pool.js';
import { liquidityTools, handleLiquidityTools } from './liquidity.js';
import { swapTools, handleSwapTools } from './swap.js';
import { analyticsTools, handleAnalyticsTools } from './analytics.js';
import { bootstrapTools, handleBootstrapTools } from './bootstrap.js';
import { removeLiquidityTools, handleRemoveLiquidityTools } from './remove_liquidity.js';
import { optInTools, handleOptInTools } from './opt_in.js';
import { ResponseProcessor } from '../../../utils/responseProcessor.js';
// Combine all Tinyman tools
export const tinymanTools: Tool[] = [
  ...poolTools,
  ...liquidityTools,
  ...swapTools,
  ...analyticsTools,
  ...bootstrapTools,
  ...removeLiquidityTools,
  ...optInTools
];

// Handle all Tinyman tools
export async function handleTinymanTools(name: string, args: any): Promise<any> {
  try {
    const combinedArgs = { name, ...args };
    // Pool analytics tools (must come before pool tools due to prefix matching)
    if (name.startsWith('tinyman_get_pool_analytics')) {
       const response = handleAnalyticsTools(combinedArgs);
      return ResponseProcessor.processResponse(response, args?.pageToken);
    }
    
    // Pool creation tools (must come before pool tools due to prefix matching)
    if (name.startsWith('tinyman_get_pool_creation')) {
      const response =  handleBootstrapTools(combinedArgs);
      // return ResponseProcessor.processResponse(response, args?.pageToken);
      return response
    }

    // Pool tools
    if (name.startsWith('tinyman_get_pool')) {
      const response =  handlePoolTools(combinedArgs);
      return ResponseProcessor.processResponse(response, args?.pageToken);
    }

    // Remove liquidity tools (must come before liquidity tools due to prefix matching)
    if (name.startsWith('tinyman_get_remove_liquidity')) {
      const response =  handleRemoveLiquidityTools(combinedArgs);
      return response
    }

    // Liquidity tools
    if (name.startsWith('tinyman_get_liquidity')) {
      const response =  handleLiquidityTools(combinedArgs);
      return ResponseProcessor.processResponse(response, args?.pageToken);
    }

    // Swap tools
    if (name.startsWith('tinyman_get_swap')) {
      const response =  handleSwapTools(combinedArgs);
      return response
    }

    // Opt-in tools
    if (name.startsWith('tinyman_get_asset_optin') ||
        name.startsWith('tinyman_get_validator_opt')) {
      const response =  handleOptInTools(combinedArgs);
      return ResponseProcessor.processResponse(response, args?.pageToken);
    }

    throw new McpError(
      ErrorCode.MethodNotFound,
      `Unknown tool: ${name}`
    );
  } catch (error) {
    if (error instanceof McpError) {
      throw error;
    }
    throw new McpError(
      ErrorCode.InternalError,
      `Failed to handle Tinyman tool: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
