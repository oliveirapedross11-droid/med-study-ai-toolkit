import { buildMedicalEducationPrompt } from "../src/index.js"

const prompt = buildMedicalEducationPrompt({
  skill: "socratic-tutor",
  depth: "internship",
  topic: {
    title: "Acute coronary syndrome",
    area: "Cardiology",
    subtopics: ["Clinical presentation", "ECG", "Biomarkers", "Initial safety"],
  },
  learnerInput: "I would rule out infarction if the first troponin is normal.",
})

console.log(prompt)
