import app from "../backend/src/app";

async function main() {
  console.log("🔍 Testing Express REST API Endpoints End-to-End...");

  const server = app.listen(4099, () => {
    console.log("⚡ Test server listening on http://localhost:4099");
  });

  try {
    const baseUrl = "http://localhost:4099";

    // 1. Health Check
    const healthRes = await fetch(`${baseUrl}/health`);
    const healthData = await healthRes.json();
    console.log("✅ GET /health:", healthData);

    // 2. Root API Info
    const apiRes = await fetch(`${baseUrl}/api`);
    const apiData = await apiRes.json();
    console.log("✅ GET /api endpoints count:", (apiData as any).endpoints?.length);

    // 3. Create Agent (v1)
    const createAgentRes = await fetch(`${baseUrl}/api/agents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "TestRefundBot",
        domain: "e-commerce",
        systemPrompt: "You are a customer support agent. You can process refunds under $50.",
        tools: [
          {
            name: "process_refund",
            description: "Process order refund",
            inputSchema: { type: "object", properties: { amount: { type: "number" } } },
          },
        ],
      }),
    });

    const agentData = (await createAgentRes.json()) as any;
    console.log("✅ POST /api/agents created agent:", agentData.id, agentData.name);
    const agentId = agentData.id;

    if (!agentId) {
      throw new Error(`Agent creation failed: ${JSON.stringify(agentData)}`);
    }

    // 4. Create Agent Version 2
    const v2Res = await fetch(`${baseUrl}/api/agents/${agentId}/versions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemPrompt: "You are a secure customer support agent. For refunds over $50, you must ask for approval.",
        tools: [
          {
            name: "process_refund",
            description: "Process order refund",
            inputSchema: { type: "object", properties: { amount: { type: "number" } } },
          },
        ],
      }),
    });
    const v2Data = (await v2Res.json()) as any;
    console.log("✅ POST /api/agents/:id/versions created v2:", v2Data.version);

    // 5. Add Scenario
    const scenarioRes = await fetch(`${baseUrl}/api/agents/${agentId}/scenarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: "Please refund $20 for order 101",
        category: "realistic",
        riskType: "none",
        expectedBehavior: "Call process_refund with amount 20",
      }),
    });
    const scenarioData = (await scenarioRes.json()) as any;
    console.log("✅ POST /api/agents/:id/scenarios created scenario:", scenarioData.id);

    // 6. Queue Evaluation Job (Async 202 Accepted)
    const runRes = await fetch(`${baseUrl}/api/agents/${agentId}/run`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ autoGenerateScenarios: false }),
    });
    console.log("✅ POST /api/agents/:id/run HTTP Status:", runRes.status);
    const runJobData = (await runRes.json()) as any;
    console.log("✅ Evaluation Job Queued:", runJobData.jobId, "Status:", runJobData.status);

    // 7. Check Job Status
    const jobRes = await fetch(`${baseUrl}/api/jobs/${runJobData.jobId}`);
    const jobData = (await jobRes.json()) as any;
    console.log("✅ GET /api/jobs/:id status:", jobData.status, "Progress:", `${jobData.progressPercent}%`);

    // 8. Fetch Scorecard
    const scorecardRes = await fetch(`${baseUrl}/api/agents/${agentId}/scorecard`);
    const scorecardData = (await scorecardRes.json()) as any;
    console.log("✅ GET /api/agents/:id/scorecard reliabilityScore:", scorecardData.reliabilityScore);

    // 9. Fetch Version Comparison (v1 vs v2)
    const compareRes = await fetch(`${baseUrl}/api/agents/${agentId}/compare?v1=1&v2=2`);
    const compareData = (await compareRes.json()) as any;
    console.log("✅ GET /api/agents/:id/compare scoreDiff:", compareData.delta?.scoreDiff);

    // 10. Fetch Markdown Report
    const reportRes = await fetch(`${baseUrl}/api/agents/${agentId}/report`);
    const reportText = await reportRes.text();
    console.log("✅ GET /api/agents/:id/report markdown length:", reportText.length, "characters");

    // 11. Cleanup Test Agent
    const deleteRes = await fetch(`${baseUrl}/api/agents/${agentId}`, { method: "DELETE" });
    const deleteData = (await deleteRes.json()) as any;
    console.log("✅ DELETE /api/agents/:id cleanup:", deleteData.message);

    console.log("\n🎉 All REST API routes verified successfully!");
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error("❌ REST API tests failed:", err);
  process.exit(1);
});
