export const lovePoem = {
  name: "Love Poem",
  description:
    "A love poem is a literary work that expresses deep feelings of romantic love or affection for someone. It typically uses poetic language and imagery to convey emotions and sensations that are associated with being in love, such as joy, longing, passion, and vulnerability. Love poems have been written in various forms throughout history, from sonnets to haikus to free verse. They can be addressed to a specific person, or they can express the general experience of love.",
  options: [],
  example: {
    author: "Unknown",
    text: "In your eyes, I see the sky,\nThe sun, the moon, the stars on high.\nIn your touch, I feel the fire,\nThat sets my soul ablaze with desire.\n\nYour smile, it melts my heart,\nAnd from your lips, I never want to part.\nYour voice, it sings a sweet refrain,\nThat echoes in my mind, again and again.\n\nYou are the beating of my heart,\nThe one true love that sets me apart.\nIn your arms, I find my home,\nAnd know that I'll never again be alone.\n\nSo here I am, just to say,\nI love you more with every passing day.\nForever and always, you're in my heart,\nAnd never shall we be apart.",
  },
  steps: [
    "Reflect on your feelings: Before you start writing, take some time to reflect on your feelings and experiences. Think about the person you love, and what makes them special to you. Consider the emotions and sensations that come to mind when you think about being with them.",
    "Choose a form: There are many different forms of poetry, from sonnets to free verse to haikus. Choose a form that you feel comfortable with, and that suits the mood and tone you want to convey in your poem.",
    "Brainstorm ideas: Write down any words or phrases that come to mind when you think about your loved one. Consider using metaphors or imagery to convey your feelings in a more evocative way.",
    "Create a draft: Using your notes and ideas, create a rough draft of your poem. Don't worry too much about structure or rhyme at this stage; the most important thing is to capture the essence of your emotions.",
    "Refine and edit: Once you have a draft, read it aloud and make any changes or revisions that you feel are necessary. Pay attention to the rhythm and flow of the words, and consider how they sound together.",
    "Share your poem: When you're happy with your poem, consider sharing it with your loved one. Whether you give it to them as a gift or simply read it aloud, sharing your poem can be a meaningful way to express your feelings and deepen your connection.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a love poem about ${prompt}`;
  },
} as const;
