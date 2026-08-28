import type { SkillId } from "./types.js"

export interface SkillDefinition {
  title: string
  task: string
  rules: string[]
  schema: Record<string, unknown>
}

export const skills: Record<SkillId, SkillDefinition> = {
  "socratic-tutor": {
    title: "Socratic medical tutor",
    task: "Identify the learner's current reasoning and respond with one useful guiding question before giving a complete explanation.",
    rules: ["Use progressive hints.", "Name detected knowledge gaps.", "Do not reveal the final answer before a genuine learner attempt."],
    schema: { tutorMessage: "string", nextQuestion: "string", hints: ["string"], detectedGaps: ["string"], citations: ["source-key"] },
  },
  "illness-script": {
    title: "Illness script builder",
    task: "Build a compact illness script anchored to the topic or supplied case.",
    rules: ["Emphasize clinical discriminators.", "Keep management educational and avoid individualized prescriptions."],
    schema: { definition: "string", epidemiology: "string", pathophysiology: "string", presentation: "string", diagnosis: "string", management: "string", differentials: [{ condition: "string", discriminator: "string" }], redFlags: ["string"] },
  },
  "pico-builder": {
    title: "PICO research question builder",
    task: "Refine the learner's question into Population, Intervention, Comparison and Outcome components.",
    rules: ["Never invent a missing central component.", "Suggest coherent MeSH/DeCS-style search concepts without fabricating identifiers."],
    schema: { population: "string", intervention: "string", comparison: "string", outcome: "string", refinedQuestion: "string", searchTerms: ["string"] },
  },
  "critical-appraisal": {
    title: "Critical appraisal assistant",
    task: "Identify the study design from supplied text and assess plausible internal-validity risks and applicability.",
    rules: ["Do not invent sample sizes, confidence intervals or p-values.", "Separate reported facts from inference."],
    schema: { studyType: "string", validityNotes: [{ domain: "string", risk: "low | moderate | high", comment: "string" }], strengths: ["string"], limitations: ["string"], applicability: "string", conclusion: "string" },
  },
}
