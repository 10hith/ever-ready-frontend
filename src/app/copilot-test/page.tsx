'use client';

import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import React from 'react';

export default function CopilotTestPage() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Copilot Test Page</h1>
      <div className="mb-4">
        <p>This is a test page for the CopilotKit integration.</p>
      </div>
      <CopilotPopup
        instructions={"You are assisting the user in finding the user id"}
        labels={{
          title: "myG Assistant",
          initial: "Need any help?",
        }}
      />
    </div>
  );
}
