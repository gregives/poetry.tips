export const ballad = {
  name: "Ballad",
  description:
    "A ballad is a form of narrative poetry that tells a story. Traditional ballads were often passed down through generations orally, and they typically focus on themes of love, adventure, heroism, tragedy, or folklore. They have a strong sense of rhythm and repetition, making them easy to remember and recite.",
  options: [],
  example: {
    author: "John Keats",
    text: "O what can ail thee, knight-at-arms,\nAlone and palely loitering?\nThe sedge has withered from the lake,\nAnd no birds sing.\n\nO what can ail thee, knight-at-arms,\nSo haggard and so woe-begone?\nThe squirrel’s granary is full,\nAnd the harvest’s done.\n\nI see a lily on thy brow,\nWith anguish moist and fever-dew,\nAnd on thy cheeks a fading rose\nFast withereth too.\n\nI met a lady in the meads,\nFull beautiful—a faery’s child,\nHer hair was long, her foot was light,\nAnd her eyes were wild.\n\nI made a garland for her head,\nAnd bracelets too, and fragrant zone;\nShe looked at me as she did love,\nAnd made sweet moan\n\nI set her on my pacing steed,\nAnd nothing else saw all day long,\nFor sidelong would she bend, and sing\nA faery’s song.\n\nShe found me roots of relish sweet,\nAnd honey wild, and manna-dew,\nAnd sure in language strange she said—\n‘I love thee true’.\n\nShe took me to her Elfin grot,\nAnd there she wept and sighed full sore,\nAnd there I shut her wild wild eyes\nWith kisses four.\n\nAnd there she lullèd me asleep,\nAnd there I dreamed—Ah! woe betide!—\nThe latest dream I ever dreamt\nOn the cold hill side.\n\nI saw pale kings and princes too,\nPale warriors, death-pale were they all;\nThey cried—‘La Belle Dame sans Merci\nThee hath in thrall!’\n\nI saw their starved lips in the gloam,\nWith horrid warning gapèd wide,\nAnd I awoke and found me here,\nOn the cold hill’s side.\n\nAnd this is why I sojourn here,\nAlone and palely loitering,\nThough the sedge is withered from the lake,\nAnd no birds sing.",
  },
  steps: [
    "Choose a story: Select a narrative or story that you want to convey in your ballad. It could be a tale of love, adventure, tragedy, or any other theme that captures your imagination.",
    "Plan the structure: Determine the structure of your ballad. Traditional ballads often consist of quatrains (four-line stanzas) with a specific rhyme scheme (such as ABCB or ABAB). Decide how many stanzas you want to include and how the story will progress across them.",
    'Establish the meter: Traditional ballads follow a distinct meter known as "ballad meter" or "common meter". This involves alternating lines of iambic tetrameter (four iambs per line) and iambic trimeter (three iambs per line). Establish this rhythmic pattern to maintain the ballad\'s traditional feel.',
    "Create a refrain (optional): Consider incorporating a refrain—a repeated line or phrase—that adds emphasis, emotion, or a memorable element to your ballad. The refrain can be used at the end of each stanza or at specific intervals within the poem.",
    "Develop the characters: Introduce the characters in your ballad and provide enough detail to make them relatable and engaging. While traditional ballads often feature archetypal characters, you can add depth and complexity to your characters to enhance the storytelling.",
    "Tell the story: Begin narrating the story through the stanzas of your ballad. Use descriptive language, vivid imagery, and engaging dialogue to bring the narrative to life. Remember to focus on the key events and emotions that drive the story forward.",
    "Incorporate repetition: Use repetition to enhance the ballad's rhythm, reinforce important themes, or create a sense of familiarity. Repeating certain lines, phrases, or motifs throughout the ballad can add musicality and reinforce the story's impact.",
    "Revise and refine: Once you have drafted your ballad, read it aloud and revise it for clarity, rhythm, and coherence. Pay attention to the flow of the lines, the consistency of the meter, and the overall impact of the story.",
    "Polish and finalize: Make any necessary edits or adjustments to your ballad, focusing on language, imagery, and emotion. Pay attention to word choice, vivid descriptions, and the overall impact you want to create with your ballad.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a ballad about ${prompt}`;
  },
} as const;
