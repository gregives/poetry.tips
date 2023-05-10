export const blankVerse = {
  name: "Blank Verse",
  description:
    'Blank verse is a type of poetry that consists of unrhymed lines with a consistent meter, typically iambic pentameter. It is called "blank" verse because it lacks a regular rhyme scheme. Instead, it relies on the rhythmic pattern created by the meter to give the poem a structured and musical quality.',
  options: [],
  example: {
    author: "William Shakespeare",
    text: "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take Arms against a Sea of troubles,\nAnd by opposing end them: to die, to sleep\nNo more; and by a sleep, to say we end\nThe heart-ache, and the thousand natural shocks\nThat Flesh is heir to? 'Tis a consummation\nDevoutly to be wished. To die, to sleep,\nTo sleep, perchance to Dream; aye, there's the rub,\nFor in that sleep of death, what dreams may come,\nWhen we have shuffled off this mortal coil,\nMust give us pause. There's the respect\nThat makes Calamity of so long life:\nFor who would bear the Whips and Scorns of time,\nThe Oppressor's wrong, the proud man's Contumely,\nThe pangs of dispised Love, the Law’s delay,\nThe insolence of Office, and the spurns\nThat patient merit of th'unworthy takes,\nWhen he himself might his Quietus make\nWith a bare Bodkin? Who would Fardels bear,\nTo grunt and sweat under a weary life,\nBut that the dread of something after death,\nThe undiscovered country, from whose bourn\nNo traveller returns, puzzles the will,\nAnd makes us rather bear those ills we have,\nThan fly to others that we know not of?\nThus conscience does make cowards of us all,\nAnd thus the native hue of Resolution\nIs sicklied o'er, with the pale cast of Thought,\nAnd enterprises of great pitch and moment,\nWith this regard their Currents turn awry,\nAnd lose the name of Action. Soft you now,\nThe fair Ophelia? Nymph, in thy Orisons\nBe all my sins remember'd.",
  },
  steps: [
    "Choose a theme or subject: Decide on the theme or subject you want to explore in your poem. It could be an emotion, an observation, a personal experience, or any other topic that inspires you.",
    "Understand iambic pentameter: Familiarize yourself with the structure and rhythm of iambic pentameter. Each line should consist of five pairs of iambs (unstressed syllable followed by a stressed syllable), resulting in ten syllables per line.",
    "Determine the tone and mood: Consider the tone and mood you want to convey in your poem. Blank verse allows for a range of emotions, from introspective and contemplative to dramatic and intense. Clarify the overall atmosphere you wish to create.",
    "Begin writing: Start composing your poem, focusing on the natural flow of language. Let the lines follow the iambic pentameter rhythm, but don't be overly strict. Maintain a conversational tone, using enjambment (continuation of a sentence or phrase across line breaks) to add fluidity and variety.",
    "Use vivid imagery and language: Employ descriptive and evocative language to bring your subject to life. Utilize imagery, metaphors, and sensory details to create vivid mental pictures and engage the reader's senses.",
    "Experiment with line breaks: Consider where to break the lines within your poem. Look for natural pauses or points of emphasis that align with the meaning or rhythm of the text. Line breaks can affect the pacing and impact of your poem.",
    "Revise and refine: Read your poem aloud and revise it for clarity, flow, and overall impact. Pay attention to the consistency of the iambic pentameter and make adjustments where necessary. Consider the balance between enjambment and end-stopped lines.",
    "Polish and finalize: Make any final edits or refinements to enhance the quality and effectiveness of your blank verse poem. Focus on word choice, rhythm, imagery, and the overall impact you want to create.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a blank verse poem about ${prompt}`;
  },
} as const;
