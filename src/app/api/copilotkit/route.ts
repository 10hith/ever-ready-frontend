import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime';

import { NextRequest } from 'next/server';

const serviceAdapter = new OpenAIAdapter({"model": "gpt-4o-mini-2024-07-18"});
const runtime = new CopilotRuntime({
  remoteEndpoints: [
    { url: process.env.COPILOT_RUNTIME_REMOTE_ENDPOINT || "http://localhost:8000/copilotkit_remote"}
  ]
});

// const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};
