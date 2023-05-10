export const limerick = {
  name: "Limerick",
  description:
    "A limerick is a type of humorous poem characterized by its specific rhyme scheme and rhythm. It typically consists of five lines with a distinctive AABBA rhyme scheme and a specific rhythm pattern. Limericks are often light-hearted, witty, and playful in nature.",
  options: [],
  example: {
    author: "Edward Lear",
    text: 'There was an Old Man with a beard,\nWho said, "It is just as I feared!—\nTwo Owls and a Hen, four Larks and a Wren,\nHave all built their nests in my beard."',
  },
  steps: [
    'Understand the structure: A limerick consists of five lines. The first, second, and fifth lines rhyme with each other, typically with an "A" rhyme, while the third and fourth lines rhyme with each other, usually with a "B" rhyme. The rhyme scheme can be represented as AABBA.',
    "Choose a topic: Select a topic or idea that you want to explore in your limerick. Limericks often revolve around humorous situations, puns, or wordplay. Consider something funny, absurd, or unexpected that can be captured in the limited space of a limerick.",
    "Establish the rhythm: Limericks have a distinctive rhythm pattern. The first, second, and fifth lines typically have eight to nine syllables, while the third and fourth lines have five to six syllables. The rhythm is often described as da-DUM da-DUM da-DUM (trochaic) or da-da-DUM da-da-DUM (anapestic).",
    "Start with the opening line: Begin your limerick with a strong and attention-grabbing opening line. This line sets the tone for the rest of the poem and often introduces the main character or situation. Consider using vivid language, wordplay, or exaggeration to make it engaging.",
    "Develop the story or situation: Use the following lines to expand on the story or situation introduced in the first line. Build on the humor, wordplay, or unexpected twists related to your chosen topic. Create a progression or build-up that leads to the punchline or humorous conclusion.",
    "Incorporate the punchline: The final line of a limerick often serves as the punchline, delivering the humorous twist or resolution. It should provide a surprising or clever ending that brings the whole limerick together. Use wordplay, puns, or unexpected connections to create a memorable conclusion.",
    "Revise and refine: After writing the initial draft, revise your limerick for clarity, rhythm, and comedic effect. Ensure that the lines have the appropriate number of syllables and adhere to the rhyme scheme. Adjust the wording, punctuation, and line breaks as needed to enhance the humor and flow of the poem.",
    "Share and enjoy: Read your limerick aloud to test its rhythm and impact. Share it with others to gauge their reaction and refine it further if necessary. Remember that limericks are meant to be humorous and entertaining, so embrace the playful nature of the form and enjoy the process of crafting a witty and clever poem.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a limerick about ${prompt}`;
  },
} as const;
