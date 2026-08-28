import { describe, expect, it } from "vitest"
import { buildMedicalEducationPrompt } from "../src/index.js"

describe("buildMedicalEducationPrompt", () => {
  it("builds a provider-agnostic Socratic tutoring prompt", () => {
    const result = buildMedicalEducationPrompt({
      skill: "socratic-tutor",
      depth: "internship",
      topic: { title: "Acute coronary syndrome", area: "Cardiology" },
      learnerInput: "Chest pain always means infarction.",
    })

    expect(result.system).toContain("progressive hints")
    expect(result.system).toContain("Do not invent citations")
    expect(result.user).toContain("Acute coronary syndrome")
    expect(result.expectedOutput).toHaveProperty("nextQuestion")
  })

  it("marks catalog-only sources as unavailable for quotation", () => {
    const result = buildMedicalEducationPrompt({
      skill: "critical-appraisal",
      depth: "reference",
      topic: {
        title: "Screening",
        sources: [{ key: "C1", title: "Example guideline", retrieved: false }],
      },
    })
    expect(result.user).toContain("catalog only — do not quote")
  })
})
