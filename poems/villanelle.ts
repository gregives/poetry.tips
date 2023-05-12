export const villanelle = {
  name: "Villanelle",
  description:
    "A villanelle is a highly structured poetic form consisting of 19 lines. It originated from French poetry in the late 16th century and gained popularity in English poetry during the 19th and 20th centuries. The villanelle follows a strict pattern of repetition and rhyme.",
  options: [],
  example: {
    author: "Edwin Arlington Robinson",
    text: "They are all gone away,\nThe House is shut and still,\nThere is nothing more to say.\n\nThrough broken walls and gray\nThe winds blow bleak and shrill:\nThey are all gone away.\n\nNor is there one to-day\nTo speak them good or ill:\nThere is nothing more to say.\n\nWhy is it then we stray\nAround the sunken sill?\nThey are all gone away,\n\nAnd our poor fancy-play\nFor them is wasted skill:\nThere is nothing more to say.\n\nThere is ruin and decay\nIn the House on the Hill:\nThey are all gone away,\nThere is nothing more to say.",
  },
  steps: [
    "Understand the structure: Familiarize yourself with the structure of a villanelle. It consists of five tercets (three-line stanzas) and a concluding quatrain (four-line stanza). Each tercet follows a strict rhyme scheme, and the first and third lines of the opening tercet are alternately repeated throughout the poem.",
    "Choose a theme or subject: Decide on the theme or subject you want to explore in your villanelle. It could be love, loss, nature, or any other topic that resonates with you.",
    "Determine the refrains: The refrains are the repeated lines in the villanelle. Choose two lines that will serve as the refrains and create the desired effect when repeated. Typically, the first and third lines of the opening tercet are used as the refrains.",
    "Develop the rhyme scheme: In a villanelle, the rhyme scheme for each tercet is ABA, where the first and third lines of each tercet rhyme with each other. Plan the rhyming words accordingly.",
    "Create a rough outline: Sketch a rough outline of your villanelle by noting down the refrains and the rhyming words for each tercet. This will help you visualize the structure and flow of the poem.",
    "Craft the first tercet: Begin your villanelle by introducing your theme or subject in the first tercet. Make sure the first and third lines rhyme.",
    "Establish the repetition: In the second tercet, repeat the first refrain (the first line of the opening tercet) as the last line. This establishes the pattern of repetition.",
    "Develop the subsequent tercets: Continue writing the remaining tercets, making sure to alternate between the two refrains as the last lines. The first refrain should be repeated in the third line of the tercet, and the second refrain should be repeated in the final line.",
    "Conclude with the quatrain: In the concluding quatrain, use both refrains. The first refrain should be the penultimate line, and the second refrain should be the final line of the poem. This brings the villanelle to a satisfying conclusion.",
    "Refine and revise: Once you have written the initial draft of your villanelle, revise it for clarity, rhythm, and imagery. Pay attention to the flow and ensure that the repetition is consistent throughout the poem. Make any necessary adjustments to improve the overall structure and impact.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a villanelle about ${prompt}`;
  },
} as const;
