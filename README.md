# Med Study AI Toolkit

A small, provider-agnostic TypeScript toolkit for building structured AI prompts for medical education. It extracts one reusable idea from a larger study platform: **topic-first educational workflows with explicit source and safety boundaries**.

## Why this repository exists

Generic prompts often mix the learner's question, source claims, clinical guidance and output formatting. This toolkit separates those concerns and makes them testable.

- Typed skill registry
- Socratic tutoring, illness scripts, PICO and critical appraisal
- Depth-aware instructions
- Explicit retrieved vs. catalog-only source handling
- JSON output contracts
- No API key, database or model dependency

## Quick start

```bash
npm install
npm test
npm run demo
```

```ts
import { buildMedicalEducationPrompt } from "med-study-ai-toolkit"

const prompt = buildMedicalEducationPrompt({
  skill: "socratic-tutor",
  depth: "internship",
  topic: { title: "Acute coronary syndrome", area: "Cardiology" },
  learnerInput: "A normal first troponin rules out infarction.",
})
```

The returned `system` and `user` strings can be sent to any model provider. The library deliberately does not perform network calls.

## Design principles

1. **Topic-first:** prompts are anchored to a canonical topic, not a local course name.
2. **Sources are capabilities:** a catalog reference is not treated as retrieved evidence.
3. **Structured outputs:** every skill publishes an inspectable JSON contract.
4. **Education, not care:** outputs must not replace professional evaluation.

## Disclaimer

This project is for software and educational experimentation. It does not provide diagnosis, treatment or individualized medical advice.

## License

MIT © Pedro Henrique Oliveira
