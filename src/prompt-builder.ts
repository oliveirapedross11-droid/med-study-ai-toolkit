import { depthInstruction, SAFETY_RULES, sourceBlock } from "./policies.js"
import { skills } from "./skills.js"
import type { PromptRequest, PromptResult } from "./types.js"

export function buildMedicalEducationPrompt(request: PromptRequest): PromptResult {
  const skill = skills[request.skill]
  const system = [
    `ROLE: ${skill.title}`,
    "",
    "NON-NEGOTIABLE SAFETY RULES",
    ...SAFETY_RULES.map((rule) => `- ${rule}`),
    "",
    `DEPTH: ${depthInstruction(request.depth)}`,
    "",
    "SKILL RULES",
    ...skill.rules.map((rule) => `- ${rule}`),
    "",
    "Return valid JSON matching the requested schema. Cite only source keys actually used.",
  ].join("\n")

  const user = [
    `TOPIC: ${request.topic.title}`,
    `AREA: ${request.topic.area ?? "not provided"}`,
    `SUBTOPICS: ${request.topic.subtopics?.join(", ") || "not provided"}`,
    "",
    "ACADEMIC SOURCES",
    sourceBlock(request.topic.sources),
    "",
    "KNOWN LIMITATIONS",
    request.topic.limitations?.map((item) => `- ${item}`).join("\n") || "- None supplied.",
    "",
    `TASK: ${skill.task}`,
    `LEARNER INPUT: ${request.learnerInput ?? "not provided"}`,
    `CASE CONTEXT: ${request.caseContext ?? "not provided"}`,
    "",
    `OUTPUT SCHEMA: ${JSON.stringify(skill.schema)}`,
  ].join("\n")

  return { system, user, expectedOutput: skill.schema }
}
