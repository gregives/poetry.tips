export const diamante = {
  name: "Diamante",
  description:
    "A diamante poem, also known as a diamond poem, is a unique form of poetry that takes the shape of a diamond when written out. It consists of seven lines that follow a specific pattern of words and syllables, creating a contrast or shift in meaning between the lines. Diamante poems are often used to compare and contrast two different subjects or concepts.",
  options: [],
  example: {
    author: "Unknown",
    text: "Rain\nWet, refreshing\nFalling, splashing, cleansing\nWater from the heavens\nClearing, nourishing, soothing\nCalming, cooling\nRelief",
  },
  steps: [
    "Choose two contrasting subjects or concepts: Select two subjects or concepts that have an inherent contrast or relationship. They could be opposites, have different characteristics, or represent contrasting ideas. For example, day and night, love and hate, summer and winter.",
    "Determine the structure: Understand the structure of a diamante poem and its pattern of words and syllables. Remember that the poem consists of seven lines and follows a specific format: one-word subject, two adjectives, three -ing verbs, four nouns or words, three -ing verbs, two adjectives, and one-word opposite subject.",
    "Brainstorm related words: Brainstorm words related to each subject or concept. Think about adjectives, verbs ending in -ing, and nouns that can accurately describe or represent each subject. Consider the characteristics, actions, and associations related to the subjects.",
    "Organize the words: Arrange the words in the diamante poem format. Begin with the one-word subject and build from there, following the structure of adjectives, -ing verbs, nouns, and so on. Ensure that the words flow logically and create a clear contrast or shift in meaning between the lines.",
    "Refine and revise: Read your diamante poem aloud and revise it for clarity, rhythm, and impact. Check that the words accurately represent the subjects and create the desired contrast. Pay attention to the flow of the lines and the overall structure. Make any necessary adjustments to enhance the meaning and effectiveness of the poem.",
    "Polish and finalize: Make any final edits or refinements to your diamante poem. Focus on word choice, imagery, and the overall impact you want to create. Ensure that the poem maintains the diamond shape and effectively conveys the contrasting subjects or concepts.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a diamante about ${prompt}`;
  },
} as const;
