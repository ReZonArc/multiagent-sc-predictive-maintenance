// Agent registry for multi-agent support
import { createAgentGraph as createTestAgentGraph } from "./test/graph.js";
import { createAgentGraph as createSupervisorAgentGraph } from "./supervisor/graph.js";
import { createAgentGraph as createFailureAgentGraph } from "./failure/graph.js";
import { createAgentGraph as createWorkorderAgentGraph } from "./workorder/graph.js";
import { createAgentGraph as createPlanningAgentGraph } from "./planning/graph.js";

export const AGENTS = [
  {
    id: "test",
    name: "Test Agent",
    createGraph: createTestAgentGraph,
    description: "A simple skincare supply chain management test agent.",
  },
  {
    id: "supervisor",
    name: "Supply Chain Supervisor",
    createGraph: createSupervisorAgentGraph,
    description:
      "Multi-agent workflow: Supervisor coordinates Supply Chain Issue Detection, Corrective Action, and Planning agents.",
  },
  {
    id: "failure",
    name: "Supply Chain Issue Detection",
    createGraph: createFailureAgentGraph,
    description:
      "Handles supply chain alerts, retrieves context, and generates incident reports for skincare operations.",
  },
  {
    id: "workorder",
    name: "Corrective Action Agent",
    createGraph: createWorkorderAgentGraph,
    description: "Receives incident reports and generates corrective action orders for supply chain issues.",
  },
  {
    id: "planning",
    name: "Supply Chain Planning",
    createGraph: createPlanningAgentGraph,
    description: "Schedules corrective actions based on inventory, staff availability, and supply chain priorities.",
  },
];

/**
 * Get agent config by id
 * @param {string} id
 * @returns {object|null}
 */
export function getAgentById(id) {
  return AGENTS.find((agent) => agent.id === id) || null;
}

/**
 * Get all agent options for UI
 * @returns {Array<{id: string, name: string, description: string}>}
 */
export function getAgentOptions() {
  return AGENTS.map(({ id, name, description }) => ({ id, name, description }));
}
