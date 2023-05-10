export const haiku = {
  name: "Haiku",
  description:
    "A haiku is a traditional form of Japanese poetry consisting of three lines. It is known for its brevity and focus on capturing a single moment or observation from nature. Haiku poems often evoke a sense of tranquility, simplicity, and connection with the natural world.",
  options: [],
  example: {
    author: "Matsuo Basho",
    text: "An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.",
  },
  steps: [
    "Choose a subject: Select a specific moment, scene, or aspect of nature that you want to capture in your haiku. It could be a seasonal event, a natural phenomenon, or a simple observation from the natural world.",
    "Observe and immerse yourself: Take the time to observe your chosen subject closely. Pay attention to the sensory details, colors, sounds, and textures associated with it. Immerse yourself in the present moment and try to capture its essence.",
    "Determine the structure: Remember that a haiku consists of three lines with a syllable pattern of 5-7-5. Decide how you will divide your thoughts or observations into these three lines while adhering to the syllable count.",
    "Express the moment: Use precise and evocative language to convey your observation. Focus on conveying the sensory details and emotions associated with the moment. Be concise and avoid unnecessary words or explanations.",
    "Incorporate seasonal reference: Consider including a word or phrase that alludes to the season in which the moment or observation takes place. This adds depth and context to your haiku, connecting it to the natural cycles and traditions of haiku.",
    "Create a contrast: Introduce a contrast or a shift between the lines of your haiku to create a sense of surprise or deeper meaning. This can be a contrast in imagery, emotions, or ideas. The contrast adds depth and resonance to your haiku.",
    "Revise and refine: After writing your initial draft, review and revise your haiku. Pay attention to the syllable count, the clarity of your expression, and the overall impact of the poem. Consider if there are any words or phrases that can be refined or replaced to enhance the poem's power.",
    "Reflect and share: Read your haiku aloud and reflect on its meaning and effect. Consider the emotions and imagery it evokes. Share your haiku with others to gather feedback and perspectives.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a haiku about ${prompt}`;
  },
} as const;
