export const acrostic = {
  name: "Acrostic Poem",
  description:
    "An acrostic poem is a type of poem in which the first letter of each line, when read vertically from top to bottom, forms a word or phrase related to the theme of the poem. Essentially, the initial letters of the lines spell out a word or message. Acrostic poems can be used to convey a message or emphasize a specific theme or word within the poem. They add an additional layer of creativity and meaning to the overall composition.",
  options: [
    {
      name: "acrosticWord",
      label: "Acrostic word",
      placeholder: "Knight",
      hint: 'The first letter of each line of the poem will spell this word. For example, if your acrostic word is "Summer", the first line of the poem will begin with "S", the second line will begin with "U" and so on.',
    },
  ],
  example: {
    author: "Unknown",
    text: "Summer days are long and bright\nUnfolding in a golden light\nMaking memories that will stay\nMaking the most of every day\nEnjoying the sun and the breeze\nRelaxing in the shade of trees",
  },
  steps: [
    "Choose a word or phrase: Select a word or phrase that you want to use as the foundation of your acrostic poem. It could be a name, a theme, or anything else that you find meaningful or interesting.",
    "Brainstorm related words: Think of words or phrases that are associated with the chosen word or phrase. These words will be used to create the lines of your poem, with each line starting with a letter that corresponds to the letters in your chosen word.",
    "Arrange the words: Take the words or phrases from your brainstorming session and arrange them in a way that makes sense and creates a coherent poem. Each line should start with the corresponding letter from your chosen word or phrase.",
    "Develop the poem: Once you have the structure of your acrostic poem, start developing the content of each line. Use descriptive language, imagery, and emotions to convey your message or theme. Each line can be a complete thought or a continuation of a sentence.",
    "Refine and revise: Read your poem aloud and make any necessary revisions to improve the flow, rhythm, and overall coherence. Pay attention to the words you've chosen for each line and ensure they fit well within the context of the poem.",
    "Polish and finalize: Once you are satisfied with the content and structure of your acrostic poem, make any final adjustments and polish it. Check for spelling and grammar errors, and ensure that the lines align with the chosen word or phrase when read vertically.",
  ],
  generatePrompt({
    prompt,
    acrosticWord,
  }: {
    prompt: string;
    acrosticWord: string;
  }) {
    return `Write an acrostic poem where the first letter of each line should spell the word${
      acrosticWord.split(/\s+/).length > 1 ? "s" : ""
    } ${acrosticWord.toUpperCase()}. The poem should be about ${prompt}`;
  },
} as const;
