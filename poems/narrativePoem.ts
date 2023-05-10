export const narrativePoem = {
  name: "Narrative Poem",
  description:
    "A narrative poem is a type of poem that tells a story. Unlike other forms of poetry that primarily focus on emotions, descriptions, or ideas, narrative poems place emphasis on a coherent and sequential narrative. These poems often include characters, a plot, and various literary devices to convey the story effectively.",
  options: [],
  example: {
    author: "Edgar Allan Poe",
    text: 'Once upon a midnight dreary, while I pondered, weak and weary,\nOver many a quaint and curious volume of forgotten lore—\nWhile I nodded, nearly napping, suddenly there came a tapping,\nAs of some one gently rapping, rapping at my chamber door.\n"\'Tis some visiter," I muttered, "tapping at my chamber door—\nOnly this and nothing more."\n\nAh, distinctly I remember it was in the bleak December;\nAnd each separate dying ember wrought its ghost upon the floor.\nEagerly I wished the morrow;—vainly I had sought to borrow\nFrom my books surcease of sorrow—sorrow for the lost Lenore—\nFor the rare and radiant maiden whom the angels name Lenore—\nNameless here for evermore.\n\nAnd the silken, sad, uncertain rustling of each purple curtain\nThrilled me—filled me with fantastic terrors never felt before;\nSo that now, to still the beating of my heart, I stood repeating\n"\'Tis some visiter entreating entrance at my chamber door—\nSome late visiter entreating entrance at my chamber door;—\nThis it is and nothing more."',
  },
  steps: [
    "Choose a story: Select a story or incident that you want to tell through your poem. It could be a personal experience, a historical event, a mythological tale, or any other narrative that inspires you. Consider the characters, plot, and setting that will form the foundation of your poem.",
    "Outline the plot: Develop a clear outline of the plot or storyline. Determine the beginning, middle, and end of the narrative. Identify the main events or turning points that will drive the story forward. Create a sense of progression and build tension or anticipation throughout the poem.",
    "Create memorable characters: Introduce characters that will populate your narrative poem. Provide descriptions, actions, and dialogue that bring these characters to life. Develop their personalities, motivations, and relationships. Make them relatable and engaging for the reader.",
    "Set the scene: Establish the setting of your narrative. Describe the time, place, and atmosphere in which the events unfold. Use vivid language and sensory details to create a visual and immersive experience for the reader. The setting adds depth and context to your story.",
    "Employ poetic techniques: Narrative poems benefit from the use of various poetic techniques. Incorporate imagery, metaphor, simile, personification, and other literary devices to enhance the storytelling. These techniques add richness, evoke emotions, and create a poetic effect within the narrative.",
    "Consider the form: Decide on the form and structure of your poem. Narrative poems can be written in various poetic forms, such as blank verse, rhymed verse, or free verse. Choose a structure that complements the story and maintains a steady rhythm and flow throughout the poem.",
    "Develop the language and style: Craft your poem using language and style that suit the narrative. Use descriptive and evocative language to paint vivid images and evoke emotions. Experiment with word choice, rhythm, and sound patterns to enhance the poetic quality of the narrative.",
    "Revise and refine: After writing the initial draft, revise and refine your narrative poem. Review the plot, character development, language, and overall coherence of the poem. Pay attention to the pacing, rhythm, and clarity of the narrative. Make any necessary changes to strengthen the impact of the poem.",
    "Read aloud and seek feedback: Read your narrative poem aloud to assess its rhythm and flow. Consider sharing it with others and gather feedback on its effectiveness. Revise further based on the feedback received, ensuring that the narrative engages and resonates with the reader.",
    "Finalize and polish: Make the final adjustments to your narrative poem, ensuring that it captures the essence of the story you want to convey. Pay attention to grammar, punctuation, and formatting to present the poem in its best possible form.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a narrative poem about ${prompt}`;
  },
} as const;
