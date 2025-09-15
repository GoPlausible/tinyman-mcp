
import { tinymanTools, handleTinymanTools } from './tinyman/index.js';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';


// Combine all API tools
export const apiManager = [
  ...tinymanTools,
];

// Handle all API tools
export async function handleApiManager(name: string, args: any): Promise<any> {
  try {
    let response;

    // Tinyman tools
    if (name.startsWith('tinyman_')) {
      response = await handleTinymanTools(name, args);
    } else {
      throw new McpError(
        ErrorCode.MethodNotFound,
        `Unknown tool: ${name}`
      );
    }

    // Process and format the response
    return response

  } catch (error) {
    if (error instanceof McpError) {
      throw error;
    }
    throw new McpError(
      ErrorCode.InternalError,
      `Failed to handle resource tool: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
