export type Depth = "introductory" | "reference" | "advanced" | "internship" | "exam-review"

export type SkillId =
  | "socratic-tutor"
  | "illness-script"
  | "pico-builder"
  | "critical-appraisal"

export interface TopicContext {
  title: string
  area?: string
  subtopics?: string[]
  sources?: AcademicSource[]
  limitations?: string[]
}

export interface AcademicSource {
  key: string
  title: string
  organization?: string
  year?: number
  retrieved: boolean
}

export interface PromptRequest {
  skill: SkillId
  depth: Depth
  topic: TopicContext
  learnerInput?: string
  caseContext?: string
}

export interface PromptResult {
  system: string
  user: string
  expectedOutput: Record<string, unknown>
}
