export const couplet = {
  name: "Couplet",
  description:
    "A couplet poem is a type of poetry consisting of two lines that usually rhyme and have the same meter. Each line in a couplet typically contains a complete thought or idea, creating a concise and self-contained unit within the poem. Couplet poems can be written in various meters and rhyme schemes, depending on the poet's preference and the desired effect.",
  options: [],
  example: {
    author: "Alexander Pope",
    text: "Why rove my thoughts beyond this last retreat?\nWhy feels my heart its long-forgotten heat?",
  },
  steps: [
    "Choose a subject or theme: Decide on the subject or theme you want to explore in your couplet poem. It could be an emotion, an observation, a reflection, or any other topic that inspires you.",
    "Determine the rhyme scheme: Decide on the rhyme scheme for your couplet poem. The most common option is an AA rhyme scheme, where the last words of each line rhyme. However, you can also experiment with other patterns like AB, CC, and so on.",
    "Establish the meter: Decide on the meter or rhythm of your couplet poem. You can choose to write in a specific meter, such as iambic pentameter (five pairs of syllables per line with the stress on the second syllable) or trochaic tetrameter (four pairs of syllables per line with the stress on the first syllable). Alternatively, you can create your own rhythmic pattern that suits your poem.",
    "Brainstorm ideas: Reflect on your chosen subject or theme and brainstorm ideas and images associated with it. Consider the emotions, experiences, or observations you want to convey within the limited space of the couplet.",
    "Write the first line: Start by crafting the first line of your couplet. This line should be a complete thought or idea that captures the essence of your subject. Experiment with different words, images, and rhythms to find the right expression.",
    "Craft the second line: Build upon the first line and create the second line of the couplet. This line should complement or contrast with the first line, adding depth, insight, or resolution to the poem. Make sure the second line rhymes with the first line according to your chosen rhyme scheme.",
    "Refine and revise: Read your couplet aloud and revise it for clarity, rhythm, and impact. Pay attention to the flow of the lines, the choice of words, and the overall coherence of the poem. Make any necessary adjustments to enhance the meaning and effectiveness of the couplet.",
    "Polish and finalize: Make any final edits or refinements to your couplet poem. Focus on word choice, imagery, and the overall impact you want to create. Ensure that the couplet is concise, coherent, and conveys your intended message or emotion effectively.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a cinquain about ${prompt}`;
  },
} as const;
