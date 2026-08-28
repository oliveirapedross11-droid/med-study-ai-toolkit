import type { AcademicSource, Depth } from "./types.js"

export const SAFETY_RULES = [
  "Use the output for education, never as a substitute for professional evaluation.",
  "Do not invent citations, guidelines, DOI, PMID, page numbers, dosages or patient data.",
  "Do not claim to have read a source unless its retrieved flag is true.",
  "State uncertainty and missing context explicitly.",
  "Escalate red flags and urgent scenarios to qualified local care.",
] as const

export function depthInstruction(depth: Depth): string {
  const instructions: Record<Depth, string> = {
    introductory: "Explain progressively, define terminology and prioritize foundations.",
    reference: "Connect mechanisms, clinical application and robust academic structure.",
    advanced: "Include nuanced differentials, exceptions and deeper pathophysiology.",
    internship: "Prioritize supervised clinical reasoning, initial safety and communication.",
    "exam-review": "Prioritize retention, discriminators, common traps and active recall.",
  }
  return instructions[depth]
}

export function sourceBlock(sources: AcademicSource[] = []): string {
  if (!sources.length) return "No topic-specific sources were provided. Use general knowledge and say so."
  return sources
    .map((source) => {
      const status = source.retrieved ? "retrieved" : "catalog only — do not quote"
      return `[${source.key}] ${source.title}${source.organization ? ` — ${source.organization}` : ""}${source.year ? ` (${source.year})` : ""} | ${status}`
    })
    .join("\n")
}
