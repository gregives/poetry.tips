export const iambicPentameter = {
  name: "Iambic Pentameter",
  description:
    'An iambic pentameter is a rhythmic pattern commonly used in poetry and verse, characterized by ten syllables per line divided into five pairs of alternating stressed and unstressed syllables. The term "iambic" refers to the specific pattern of an unstressed syllable followed by a stressed one, while "pentameter" indicates the presence of five such pairs in a line. This structured meter lends a musical quality to the verse, allowing poets to create a harmonious and balanced flow in their work.',
  options: [],
  example: {
    author: "Alfred Tennyson",
    text: "It may be that the gulfs will wash us down:\nIt may be we shall touch the Happy Isles,\nAnd see the great Achilles, whom we knew.\nTho’ much is taken, much abides; and tho’\nWe are not now that strength which in old days\nMoved earth and heaven, that which we are, we are;\nOne equal temper of heroic hearts,\nMade weak by time and fate, but strong in will\nTo strive, to seek, to find, and not to yield.",
  },
  steps: [
    'Understand the meter: Familiarize yourself with the iambic pentameter pattern, which consists of five pairs of stressed and unstressed syllables per line. Recognize the rhythmic da-DUM pattern, with "da" representing the unstressed syllable and "DUM" the stressed syllable.',
    "Choose a subject: Decide on the theme or topic you want to explore in your poem. It could be anything from love to nature, personal experiences, or abstract concepts.",
    "Brainstorm ideas: Generate ideas and images related to your chosen subject. Consider different perspectives, emotions, or metaphors that can enrich your poem.",
    "Plan the structure: Determine the number of lines or stanzas you want to use and the rhyme scheme, if any. Iambic pentameter poems can have varying structures, such as sonnets, heroic couplets, or blank verse.",
    "Begin writing: Start composing your poem line by line, focusing on the iambic pentameter pattern. Pay attention to the stressed and unstressed syllables as you construct each line, using the da-DUM rhythm.",
    "Revise and refine: Read your poem aloud to ensure the lines flow smoothly and adhere to the iambic pentameter. Make adjustments where needed, altering words or phrases to maintain the desired meter while preserving the meaning and imagery.",
    "Enhance with literary devices: Incorporate poetic devices such as metaphors, similes, alliteration, or personification to add depth and creativity to your poem. These elements can complement the rhythmic structure of iambic pentameter.",
    "Edit and polish: Review your poem for clarity, coherence, and overall effectiveness. Pay attention to grammar, punctuation, and word choice. Trim unnecessary words or lines and refine the imagery to create a polished final piece.",
    "Seek feedback: Share your poem with trusted friends, fellow poets, or writing communities to gather feedback and suggestions. Their perspectives can help you refine your work further.",
    "Embrace creativity: While adhering to the iambic pentameter structure, remember to express your unique voice and creativity. Use the rhythm as a framework to craft your poem, allowing your thoughts and emotions to shine through within its disciplined structure.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a poem in iambic pentameter about ${prompt}`;
  },
} as const;
