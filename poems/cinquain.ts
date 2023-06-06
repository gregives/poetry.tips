export const cinquain = {
  name: "Cinquain",
  description:
    "A cinquain poem is a five-line poem that follows a specific syllable count and often utilizes a specific pattern of stress or emphasis. It was developed by American poet Adelaide Crapsey in the early 20th century. Cinquains can be written about various subjects and can evoke different emotions depending on the poet's intent.",
  options: [],
  example: {
    author: "Adelaide Crapsey",
    text: "Listen…\nWith faint dry sound,\nLike steps of passing ghosts,\nThe leaves, frost-crisp'd, break from the trees\nAnd fall.",
  },
  steps: [
    "Choose a subject: Select a specific subject or topic that you want to focus on in your cinquain poem. It could be a person, an object, an emotion, or anything that inspires you.",
    "Determine the syllable count: Decide on the syllable count for each line of your cinquain poem. Traditional cinquains often follow a syllable pattern of 2, 4, 6, 8, and 2, respectively, across the five lines. However, you can experiment with different syllable counts if desired.",
    "Line 1 – Title: Write a one-word title that represents your subject. This word will serve as the introduction or topic of your cinquain.",
    "Line 2 – Description: Use two adjectives to describe or characterize your subject. These adjectives should add more detail and help create a clear image or impression.",
    "Line 3 – Action: Choose three verbs that convey actions associated with your subject. These verbs should capture the essence or movement related to your chosen topic.",
    "Line 4 – Feeling or Further Description: Compose a short phrase or sentence that expresses a feeling, emotion, or provides additional description about your subject. This line should add depth or create a specific mood.",
    "Line 5 – Summary or Synonym: Conclude your cinquain poem with a single word that summarizes your subject or serves as a synonym for it. This word should encapsulate the essence of your chosen topic.",
    "Revise and refine: Read your cinquain poem aloud and revise it for clarity, flow, and impact. Pay attention to the syllable count, word choice, and the overall coherence of the poem. Make any necessary adjustments to enhance the rhythm and meaning.",
    "Polish and finalize: Make any final edits to your cinquain poem, focusing on the language, imagery, and overall effectiveness. Ensure that each line contributes to the theme or impression you want to convey.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a cinquain about ${prompt}`;
  },
} as const;
