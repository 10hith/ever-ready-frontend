# Implementing CopilotKit in Next.js Application

## Overview
This guide outlines the steps to integrate CopilotKit, an AI-powered assistant framework, into a Next.js application. CopilotKit provides a seamless way to add AI-driven interactions and assistance to your web application.

## Prerequisites
- Next.js project
- Basic understanding of React and TypeScript
- CopilotKit package installed

## Step 1: Create API Route for CopilotKit
### File: `src/app/api/copilotkit/route.ts`

#### Purpose
- Set up a server-side endpoint to handle CopilotKit runtime requests
- Configure remote endpoints and service adapters

#### Key Configurations
- Use `CopilotRuntime` to manage AI runtime
- Set up a remote endpoint (can be local or external)
- Create a POST handler for the CopilotKit endpoint

```typescript
const runtime = new CopilotRuntime({
  remoteEndpoints: [
    { url: process.env.COPILOT_RUNTIME_REMOTE_ENDPOINT || "http://localhost:8000/copilotkit_remote"}
  ]
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};
```

## Step 2: Wrap Application with CopilotKit Provider
### File: `src/app/layout.tsx`

#### Purpose
- Provide CopilotKit context to the entire application
- Configure global CopilotKit settings
- Add CopilotPopup for consistent AI assistance

#### Key Configurations
- Set `runtimeUrl` to the API route created in Step 1
- Define a basic agent
- Add CopilotPopup with custom instructions and labels

```tsx
<CopilotKit 
  runtimeUrl="/api/copilotkit"
  agent="basic_agent"
>
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <CopilotPopup
      instructions={"You are assisting the user in finding the user id"}
      labels={{
        title: "myG Assistant",
        initial: "Need any help?",
      }}
    />
    <Footer />
  </div>
</CopilotKit>
```

## Step 3: Add Copilot Components to Pages
### File: `src/app/copilot-test/page.tsx`

#### Purpose
- Add page-specific CopilotPopup
- Provide context-specific instructions for the AI assistant

#### Example Implementation
```tsx
<CopilotPopup
  instructions={"You are assisting the user in finding the user id"}
  labels={{
    title: "myG Assistant",
    initial: "Need any help?",
  }}
/>
```

## Best Practices
1. Customize `instructions` to match the specific context of each page
2. Use descriptive and clear labels for the CopilotPopup
3. Ensure the runtime URL points to the correct API endpoint
4. Consider security and privacy when configuring remote endpoints

## Troubleshooting
- Verify API route is correctly set up
- Check network tab for any runtime connection issues
- Ensure environment variables are correctly configured

## Next Steps
- Implement more advanced AI interactions
- Add custom service adapters
- Integrate with backend services
