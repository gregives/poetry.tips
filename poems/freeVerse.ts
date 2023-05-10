export const freeVerse = {
  name: "Free Verse",
  description:
    "A free verse poem is a type of poetry that does not adhere to a specific structure, rhyme scheme, or meter. It is characterized by its freedom from traditional poetic conventions and allows the poet to express their ideas, emotions, and observations in a more open and unrestricted manner.",
  options: [],
  example: {
    author: "Walt Whitman",
    text: "When I heard the learn’d astronomer,\nWhen the proofs, the figures, were ranged in columns before me,\nWhen I was shown the charts and diagrams, to add, divide, and measure them,\nWhen I sitting heard the astronomer where he lectured with much applause in the lecture-room,\nHow soon unaccountable I became tired and sick,\nTill rising and gliding out I wander’d off by myself,\nIn the mystical moist night-air, and from time to time,\nLook’d up in perfect silence at the stars.",
  },
  steps: [
    "Select a theme or idea: Choose a theme, concept, or experience that you want to explore in your poem. It could be a personal reflection, an observation about the world, a particular emotion, or any subject that inspires you.",
    "Brainstorm and freewrite: Begin by freewriting or brainstorming your ideas related to the chosen theme. Write down your thoughts, feelings, images, and any other associations that come to mind. Allow your thoughts to flow freely without worrying about structure or rhyme.",
    "Find your focus: Review your freewriting and identify the core message or essence that you want to convey in your poem. Look for the most powerful images, emotions, or ideas that stand out to you. Consider the impact you want to create on the reader.",
    "Experiment with language and imagery: Free verse poems often rely on vivid language, striking imagery, and sensory details. Explore different ways to describe and evoke your chosen subject. Use metaphors, similes, and other figurative language to enhance the impact of your words.",
    "Consider line breaks and pacing: In free verse poetry, line breaks play a crucial role in the overall flow and rhythm of the poem. Experiment with different line lengths and breaks to create pauses, emphasize certain words or phrases, and control the pacing of the poem. Read your lines aloud to assess their impact.",
    "Read and revise: Once you have written the initial draft of your free verse poem, read it aloud and revise it for clarity, coherence, and emotional resonance. Pay attention to the overall structure and flow of the poem. Remove any unnecessary words or phrases that distract from your message.",
    "Polish and refine: Make any necessary edits or refinements to improve the quality and impact of your poem. Consider the use of repetition, variations in sentence structure, or other literary devices that can enhance the overall effect. Strive for a strong ending that leaves a lasting impression on the reader.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a free verse poem about ${prompt}`;
  },
} as const;
