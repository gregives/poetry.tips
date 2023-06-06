export const sonnet = {
  name: "Sonnet",
  description:
    "A sonnet is a poetic form that originated in Italy and became popular in English literature. It is a 14-line poem typically characterized by a specific rhyme scheme, meter, and structure. Sonnets are known for their compactness and often explore themes of love, beauty, mortality, and the complexities of human emotions.",
  options: [],
  example: {
    author: "William Shakespeare",
    text: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate.\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date.\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimmed;\nAnd every fair from fair sometime declines,\nBy chance, or nature's changing course, untrimmed;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st,\nNor shall death brag thou wand'rest in his shade,\nWhen in eternal lines to Time thou grow'st.\nSo long as men can breathe, or eyes can see,\nSo long lives this, and this gives life to thee.",
  },
  steps: [
    "Choose a theme or subject: Select a theme or subject that you want to explore in your sonnet. It could be love, nature, a personal experience, or any other topic that resonates with you. Having a clear focus will guide your writing.",
    "Determine the rhyme scheme: Decide whether you want to write an Italian (Petrarchan) sonnet or an English (Shakespearean) sonnet. Each has its own rhyme scheme. The Italian sonnet typically follows ABBAABBA for the octave and CDCDCD or CDECDE for the sestet. The English sonnet follows ABABCDCDEFEFGG.",
    "Choose your meter: Sonnets are often written in iambic pentameter, a metrical pattern consisting of five pairs of unstressed and stressed syllables per line. Consider using iambic pentameter to give your sonnet a rhythmic and musical quality. However, you can also experiment with other metrical patterns if desired.",
    "Begin with the first quatrain: Start your sonnet by writing the first quatrain, which consists of four lines. Introduce your theme or subject and establish the tone and mood of the poem. Follow the chosen rhyme scheme and meter for your sonnet.",
    "Develop the second and third quatrains: Move on to the second and third quatrains. These stanzas further explore or develop the theme you introduced in the first quatrain. Use descriptive language, metaphors, or other poetic devices to convey your thoughts and emotions.",
    "Transition with the volta: The volta, or turn, is a pivotal moment in a sonnet where there is a shift in tone, perspective, or argument. It often occurs between the third quatrain and the couplet. Use the volta to introduce a new idea, present a contrast, or provide a resolution to the theme.",
    "Conclude with the couplet: The final two lines of a sonnet form the couplet. Use them to provide a concise summary, a surprising twist, or a strong concluding statement. The couplet often offers a resolution or final reflection on the theme.",
    "Revise and refine: After writing the initial draft of your sonnet, review it for clarity, coherence, and adherence to the chosen rhyme scheme and meter. Consider the flow, imagery, and impact of each line. Make any necessary revisions to enhance the structure and strengthen the theme.",
    "Read aloud and seek feedback: Read your sonnet aloud to assess its rhythm, flow, and emotional impact. Listen to how the rhymes and meter work together to create a harmonious and powerful expression. Consider sharing your sonnet with others and gather feedback on its effectiveness. Revise further based on the feedback received.",
    "Finalize and polish: Make the final adjustments to your sonnet, ensuring that it maintains the chosen rhyme scheme, meter, and effectively conveys your chosen theme. Pay attention to grammar, punctuation, and formatting to present the sonnet in its best possible form.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a sonnet about ${prompt}`;
  },
} as const;
