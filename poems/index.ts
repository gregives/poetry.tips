import slugify from "@sindresorhus/slugify";
import colors from "tailwindcss/colors";

const classNames = [
  {
    color: colors.red,
    background: "bg-gradient-to-br from-red-50 to-red-100",
    title: "text-red-800",
    focusWithin: "focus-within:outline-red-500",
    focusVisible: "focus-visible:outline-red-500",
  },
  {
    color: colors.orange,
    background: "bg-gradient-to-br from-orange-50 to-orange-100",
    title: "text-orange-800",
    focusWithin: "focus-within:outline-orange-500",
    focusVisible: "focus-visible:outline-orange-500",
  },
  {
    color: colors.amber,
    background: "bg-gradient-to-br from-amber-50 to-amber-100",
    title: "text-amber-800",
    focusWithin: "focus-within:outline-amber-500",
    focusVisible: "focus-visible:outline-amber-500",
  },
  {
    color: colors.yellow,
    background: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    title: "text-yellow-800",
    focusWithin: "focus-within:outline-yellow-500",
    focusVisible: "focus-visible:outline-yellow-500",
  },
  {
    color: colors.lime,
    background: "bg-gradient-to-br from-lime-50 to-lime-100",
    title: "text-lime-800",
    focusWithin: "focus-within:outline-lime-500",
    focusVisible: "focus-visible:outline-lime-500",
  },
  {
    color: colors.green,
    background: "bg-gradient-to-br from-green-50 to-green-100",
    title: "text-green-800",
    focusWithin: "focus-within:outline-green-500",
    focusVisible: "focus-visible:outline-green-500",
  },
  {
    color: colors.emerald,
    background: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    title: "text-emerald-800",
    focusWithin: "focus-within:outline-emerald-500",
    focusVisible: "focus-visible:outline-emerald-500",
  },
  {
    color: colors.teal,
    background: "bg-gradient-to-br from-teal-50 to-teal-100",
    title: "text-teal-800",
    focusWithin: "focus-within:outline-teal-500",
    focusVisible: "focus-visible:outline-teal-500",
  },
  {
    color: colors.cyan,
    background: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    title: "text-cyan-800",
    focusWithin: "focus-within:outline-cyan-500",
    focusVisible: "focus-visible:outline-cyan-500",
  },
  {
    color: colors.sky,
    background: "bg-gradient-to-br from-sky-50 to-sky-100",
    title: "text-sky-800",
    focusWithin: "focus-within:outline-sky-500",
    focusVisible: "focus-visible:outline-sky-500",
  },
  {
    color: colors.blue,
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    title: "text-blue-800",
    focusWithin: "focus-within:outline-blue-500",
    focusVisible: "focus-visible:outline-blue-500",
  },
  {
    color: colors.indigo,
    background: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    title: "text-indigo-800",
    focusWithin: "focus-within:outline-indigo-500",
    focusVisible: "focus-visible:outline-indigo-500",
  },
  {
    color: colors.violet,
    background: "bg-gradient-to-br from-violet-50 to-violet-100",
    title: "text-violet-800",
    focusWithin: "focus-within:outline-violet-500",
    focusVisible: "focus-visible:outline-violet-500",
  },
  {
    color: colors.purple,
    background: "bg-gradient-to-br from-purple-50 to-purple-100",
    title: "text-purple-800",
    focusWithin: "focus-within:outline-purple-500",
    focusVisible: "focus-visible:outline-purple-500",
  },
  {
    color: colors.fuchsia,
    background: "bg-gradient-to-br from-fuchsia-50 to-fuchsia-100",
    title: "text-fuchsia-800",
    focusWithin: "focus-within:outline-fuchsia-500",
    focusVisible: "focus-visible:outline-fuchsia-500",
  },
  {
    color: colors.pink,
    background: "bg-gradient-to-br from-pink-50 to-pink-100",
    title: "text-pink-800",
    focusWithin: "focus-within:outline-pink-500",
    focusVisible: "focus-visible:outline-pink-500",
  },
  {
    color: colors.rose,
    background: "bg-gradient-to-br from-rose-50 to-rose-100",
    title: "text-rose-800",
    focusWithin: "focus-within:outline-rose-500",
    focusVisible: "focus-visible:outline-rose-500",
  },
];

export const poems = (
  [
    {
      name: "Acrostic Poem",
      description:
        "An acrostic poem is a type of poem in which the first letter of each line, when read vertically from top to bottom, forms a word or phrase related to the theme of the poem. Essentially, the initial letters of the lines spell out a word or message. Acrostic poems can be used to convey a message or emphasize a specific theme or word within the poem. They add an additional layer of creativity and meaning to the overall composition.",
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
    },
    {
      name: "Ballad",
      description:
        "A ballad is a form of narrative poetry that tells a story. Traditional ballads were often passed down through generations orally, and they typically focus on themes of love, adventure, heroism, tragedy, or folklore. They have a strong sense of rhythm and repetition, making them easy to remember and recite.",
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
    },
    {
      name: "Blank Verse",
      description:
        'Blank verse is a type of poetry that consists of unrhymed lines with a consistent meter, typically iambic pentameter. It is called "blank" verse because it lacks a regular rhyme scheme. Instead, it relies on the rhythmic pattern created by the meter to give the poem a structured and musical quality.',
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
    },
    {
      name: "Cinquain",
      description:
        "A cinquain poem is a five-line poem that follows a specific syllable count and often utilizes a specific pattern of stress or emphasis. It was developed by American poet Adelaide Crapsey in the early 20th century. Cinquains can be written about various subjects and can evoke different emotions depending on the poet's intent.",
      example: {
        author: "Adelaide Crapsey",
        text: "Listen…\nWith faint dry sound,\nLike steps of passing ghosts,\nThe leaves, frost-crisp’d, break from the trees\nAnd fall.",
      },
      steps: [
        "Choose a subject: Select a specific subject or topic that you want to focus on in your cinquain poem. It could be a person, an object, an emotion, or anything that inspires you.",
        "Determine the syllable count: Decide on the syllable count for each line of your cinquain poem. Traditional cinquains often follow a syllable pattern of 2, 4, 6, 8, and 2, respectively, across the five lines. However, you can experiment with different syllable counts if desired.",
        "Line 1 – Title: Write a one-word title that represents your subject. This word will serve as the introduction or topic of your cinquain.",
        "Line 2 – Description: Use two adjectives to describe or characterize your subject. These adjectives should add more detail and help create a clear image or impression.",
        "Line 3 – Action: Choose three verbs that convey actions associated with your subject. These verbs should capture the essence or movement related to your chosen topic.",
        "Line 4 – Feeling or Further Description: Compose a short phrase or sentence that expresses a feeling, emotion, or provides additional description about your subject. This line should add depth or create a specific mood.",
        "Line 5 – Summary or Synonym: Conclude your cinquain poem with a single word that summarizes your subject or serves as a synonym for it. This word should encapsulate the essence of your chosen topic.",
        "Revise and refine: Read your cinquain poem aloud and revise it for clarity, flow, and impact. Pay attention to the syllable count, word choice, and the overall coherence of the poem. Make any necessary adjustments to enhance the rhythm and meaning.",
        "Polish and finalize: Make any final edits to your cinquain poem, focusing on the language, imagery, and overall effectiveness. Ensure that each line contributes to the theme or impression you want to convey.",
      ],
    },
    {
      name: "Couplet",
      description:
        "A couplet poem is a type of poetry consisting of two lines that usually rhyme and have the same meter. Each line in a couplet typically contains a complete thought or idea, creating a concise and self-contained unit within the poem. Couplet poems can be written in various meters and rhyme schemes, depending on the poet's preference and the desired effect.",
      example: {
        author: "Alexander Pope",
        text: "Why rove my thoughts beyond this last retreat?\nWhy feels my heart its long-forgotten heat?",
      },
      steps: [
        "Choose a subject or theme: Decide on the subject or theme you want to explore in your couplet poem. It could be an emotion, an observation, a reflection, or any other topic that inspires you.",
        "Determine the rhyme scheme: Decide on the rhyme scheme for your couplet poem. The most common option is an AA rhyme scheme, where the last words of each line rhyme. However, you can also experiment with other patterns like AB, CC, and so on.",
        "Establish the meter: Decide on the meter or rhythm of your couplet poem. You can choose to write in a specific meter, such as iambic pentameter (five pairs of syllables per line with the stress on the second syllable) or trochaic tetrameter (four pairs of syllables per line with the stress on the first syllable). Alternatively, you can create your own rhythmic pattern that suits your poem.",
        "Brainstorm ideas: Reflect on your chosen subject or theme and brainstorm ideas and images associated with it. Consider the emotions, experiences, or observations you want to convey within the limited space of the couplet.",
        "Write the first line: Start by crafting the first line of your couplet. This line should be a complete thought or idea that captures the essence of your subject. Experiment with different words, images, and rhythms to find the right expression.",
        "Craft the second line: Build upon the first line and create the second line of the couplet. This line should complement or contrast with the first line, adding depth, insight, or resolution to the poem. Make sure the second line rhymes with the first line according to your chosen rhyme scheme.",
        "Refine and revise: Read your couplet aloud and revise it for clarity, rhythm, and impact. Pay attention to the flow of the lines, the choice of words, and the overall coherence of the poem. Make any necessary adjustments to enhance the meaning and effectiveness of the couplet.",
        "Polish and finalize: Make any final edits or refinements to your couplet poem. Focus on word choice, imagery, and the overall impact you want to create. Ensure that the couplet is concise, coherent, and conveys your intended message or emotion effectively.",
      ],
    },
    {
      name: "Diamante",
      description:
        "A diamante poem, also known as a diamond poem, is a unique form of poetry that takes the shape of a diamond when written out. It consists of seven lines that follow a specific pattern of words and syllables, creating a contrast or shift in meaning between the lines. Diamante poems are often used to compare and contrast two different subjects or concepts.",
      example: {
        author: "Unknown",
        text: "Rain\nWet, refreshing\nFalling, splashing, cleansing\nWater from the heavens\nClearing, nourishing, soothing\nCalming, cooling\nRelief",
      },
      steps: [
        "Choose two contrasting subjects or concepts: Select two subjects or concepts that have an inherent contrast or relationship. They could be opposites, have different characteristics, or represent contrasting ideas. For example, day and night, love and hate, summer and winter.",
        "Determine the structure: Understand the structure of a diamante poem and its pattern of words and syllables. Remember that the poem consists of seven lines and follows a specific format: one-word subject, two adjectives, three -ing verbs, four nouns or words, three -ing verbs, two adjectives, and one-word opposite subject.",
        "Brainstorm related words: Brainstorm words related to each subject or concept. Think about adjectives, verbs ending in -ing, and nouns that can accurately describe or represent each subject. Consider the characteristics, actions, and associations related to the subjects.",
        "Organize the words: Arrange the words in the diamante poem format. Begin with the one-word subject and build from there, following the structure of adjectives, -ing verbs, nouns, and so on. Ensure that the words flow logically and create a clear contrast or shift in meaning between the lines.",
        "Refine and revise: Read your diamante poem aloud and revise it for clarity, rhythm, and impact. Check that the words accurately represent the subjects and create the desired contrast. Pay attention to the flow of the lines and the overall structure. Make any necessary adjustments to enhance the meaning and effectiveness of the poem.",
        "Polish and finalize: Make any final edits or refinements to your diamante poem. Focus on word choice, imagery, and the overall impact you want to create. Ensure that the poem maintains the diamond shape and effectively conveys the contrasting subjects or concepts.",
      ],
    },
    {
      name: "Elegy",
      description:
        "An elegy is a form of poetry that is typically written to lament or mourn the loss of someone or something. It is a reflective and melancholic poem that expresses grief, sorrow, and a sense of loss. Elegies can be written for a deceased person, a lost love, a past era, or even a fading memory.",
      example: {
        author: "Dylan Thomas",
        text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
      },
      steps: [
        "Reflect on the loss: Take time to reflect on the person, thing, or concept that you are mourning. Consider their impact on your life, the memories you shared, and the emotions that arise from the loss. Allow yourself to fully immerse in your thoughts and emotions.",
        "Determine the structure: Decide on the structure and form of your elegy. You can choose a traditional form such as a sonnet, quatrain, or elegiac couplets, or opt for a free verse style. The structure you choose should support the tone and message you want to convey.",
        "Capture the essence: Identify the essence of the subject you are mourning. Think about their qualities, characteristics, and the significance they held in your life or in the world. Consider their achievements, impact, and the memories associated with them.",
        "Express your emotions: Elegies are deeply emotional poems, so allow your emotions to flow onto the page. Explore the grief, sorrow, longing, and other complex emotions you are experiencing. Use vivid language and descriptive imagery to convey the depth of your feelings.",
        "Use symbolism and figurative language: Elegies often employ symbolism and figurative language to enhance the impact of the poem. Use metaphors, similes, and other literary devices to evoke emotions, create connections, and convey a sense of meaning in the face of loss.",
        "Pay tribute: Pay tribute to the subject of your elegy by highlighting their qualities, achievements, or the impact they had on your life. Celebrate their life, contributions, or the beauty they embodied. Remember the positive aspects of their existence and express gratitude for having known them.",
        "Revise and refine: After you have written the initial draft of your elegy, revise and refine it. Read it aloud to assess the flow, rhythm, and emotional resonance. Check for clarity, coherence, and overall effectiveness. Make any necessary adjustments to enhance the impact and clarity of your poem.",
        "Embrace the personal touch: Remember that an elegy is a personal expression of your grief and reflection. Don't be afraid to incorporate your own memories, experiences, and voice into the poem. Let your unique perspective shine through.",
      ],
    },
    {
      name: "Epigram",
      description:
        "An epigram is a brief, witty, and often satirical poem or statement that expresses an idea in a clever and concise way. It is usually written in a couplet or a short stanza and often contains a twist or a surprise ending that subverts the reader's expectations. Epigrams can be used to comment on a wide range of subjects, from politics and social issues to love and relationships.",
      example: {
        author: "Oscar Wilde",
        text: "I can resist everything except temptation.",
      },
      steps: [
        "Identify your subject: Choose a specific subject or topic that you want to comment on or express an idea about. It could be a social issue, a personal observation, a common saying, or any other theme that lends itself to a witty and concise statement.",
        "Brainstorm ideas: Reflect on your chosen subject and brainstorm different angles, perspectives, or humorous takes on it. Consider wordplay, irony, satire, or unexpected contrasts that can add a twist to your epigram. Jot down any interesting phrases, puns, or clever word combinations that come to mind.",
        "Simplify and condense: Epigrams are known for their brevity, so focus on simplifying and condensing your idea. Cut out unnecessary words, refine your language, and strive for concise expression. Look for the essence of your idea and aim to capture it in just a few impactful words.",
        "Employ wordplay and wit: Epigrams often rely on wordplay, double entendre, or clever turns of phrase to make their point. Experiment with language, puns, and rhetorical devices to add a layer of wit and humor to your epigram. Consider using unexpected comparisons, juxtapositions, or reversals to create surprise or irony.",
        "Craft the structure: Epigrams can be written in various forms, such as couplets, quatrains, or single lines. Determine the structure that best suits your idea and the impact you want to create. Keep in mind that brevity and rhythm are key elements of an effective epigram.",
        "Edit and refine: Once you have drafted your epigram, review it for clarity, impact, and wit. Read it aloud to assess the flow and rhythm. Make sure every word counts and contributes to the overall effect. Trim unnecessary words, tweak phrasing, and polish the language until you are satisfied with the final result.",
      ],
    },
    {
      name: "Free Verse",
      description:
        "A free verse poem is a type of poetry that does not adhere to a specific structure, rhyme scheme, or meter. It is characterized by its freedom from traditional poetic conventions and allows the poet to express their ideas, emotions, and observations in a more open and unrestricted manner.",
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
    },
    {
      name: "Haiku",
      description:
        "A haiku is a traditional form of Japanese poetry consisting of three lines. It is known for its brevity and focus on capturing a single moment or observation from nature. Haiku poems often evoke a sense of tranquility, simplicity, and connection with the natural world.",
      example: {
        author: "Matsuo Basho",
        text: "An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.",
      },
      steps: [
        "Choose a subject: Select a specific moment, scene, or aspect of nature that you want to capture in your haiku. It could be a seasonal event, a natural phenomenon, or a simple observation from the natural world.",
        "Observe and immerse yourself: Take the time to observe your chosen subject closely. Pay attention to the sensory details, colors, sounds, and textures associated with it. Immerse yourself in the present moment and try to capture its essence.",
        "Determine the structure: Remember that a haiku consists of three lines with a syllable pattern of 5-7-5. Decide how you will divide your thoughts or observations into these three lines while adhering to the syllable count.",
        "Express the moment: Use precise and evocative language to convey your observation. Focus on conveying the sensory details and emotions associated with the moment. Be concise and avoid unnecessary words or explanations.",
        "Incorporate seasonal reference: Consider including a word or phrase that alludes to the season in which the moment or observation takes place. This adds depth and context to your haiku, connecting it to the natural cycles and traditions of haiku.",
        "Create a contrast: Introduce a contrast or a shift between the lines of your haiku to create a sense of surprise or deeper meaning. This can be a contrast in imagery, emotions, or ideas. The contrast adds depth and resonance to your haiku.",
        "Revise and refine: After writing your initial draft, review and revise your haiku. Pay attention to the syllable count, the clarity of your expression, and the overall impact of the poem. Consider if there are any words or phrases that can be refined or replaced to enhance the poem's power.",
        "Reflect and share: Read your haiku aloud and reflect on its meaning and effect. Consider the emotions and imagery it evokes. Share your haiku with others to gather feedback and perspectives.",
      ],
    },
    {
      name: "Limerick",
      description:
        "A limerick is a type of humorous poem characterized by its specific rhyme scheme and rhythm. It typically consists of five lines with a distinctive AABBA rhyme scheme and a specific rhythm pattern. Limericks are often light-hearted, witty, and playful in nature.",
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
    },
    {
      name: "Love Poem",
      description:
        "A love poem is a literary work that expresses deep feelings of romantic love or affection for someone. It typically uses poetic language and imagery to convey emotions and sensations that are associated with being in love, such as joy, longing, passion, and vulnerability. Love poems have been written in various forms throughout history, from sonnets to haikus to free verse. They can be addressed to a specific person, or they can express the general experience of love.",
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
    },
    {
      name: "Narrative Poem",
      description:
        "A narrative poem is a type of poem that tells a story. Unlike other forms of poetry that primarily focus on emotions, descriptions, or ideas, narrative poems place emphasis on a coherent and sequential narrative. These poems often include characters, a plot, and various literary devices to convey the story effectively.",
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
    },
    {
      name: "Ode",
      description:
        "An ode is a type of lyrical poem that expresses deep admiration, praise, or celebration for a particular person, object, event, or idea. It is a formal and often elevated form of poetry that seeks to convey intense emotions and exalt its subject matter. Odes have a rich history dating back to ancient Greece and have been written in various cultures throughout the centuries.",
      example: {
        author: "Thomas Gray",
        text: "\"Ruin seize thee, ruthless King!\nConfusion on thy banners wait,\nTho' fann'd by Conquest's crimson wing\nThey mock the air with idle state.\nHelm, nor hauberk's twisted mail,\nNor even thy virtues, tyrant, shall avail\nTo save thy secret soul from nightly fears,\nFrom Cambria's curse, from Cambria's tears!\"\nSuch were the sounds, that o'er the crested pride\nOf the first Edward scatter'd wild dismay,\nAs down the steep of Snowdon's shaggy side\nHe wound with toilsome march his long array.\nStout Glo'ster stood aghast in speechless trance;\nTo arms! cried Mortimer, and couch'd his quiv'ring lance.\n\nOn a rock, whose haughty brow\nFrowns o'er old Conway's foaming flood,\nRob'd in the sable garb of woe,\nWith haggard eyes the poet stood;\n(Loose his beard, and hoary hair\nStream'd, like a meteor, to the troubled air)\nAnd with a master's hand, and prophet's fire,\nStruck the deep sorrows of his lyre;\n\"Hark, how each giant-oak, and desert cave,\nSighs to the torrent's awful voice beneath!\nO'er thee, O King! their hundred arms they wave,\nRevenge on thee in hoarser murmurs breathe;\nVocal no more, since Cambria's fatal day,\nTo high-born Hoel's harp, or soft Llewellyn's lay.\n\n\"Cold is Cadwallo's tongue,\nThat hush'd the stormy main;\nBrave Urien sleeps upon his craggy bed:\nMountains, ye mourn in vain\nModred, whose magic song\nMade huge Plinlimmon bow his cloud-topp'd head.\nOn dreary Arvon's shore they lie,\nSmear'd with gore, and ghastly pale:\nFar, far aloof th' affrighted ravens sail;\nThe famish'd eagle screams, and passes by.\nDear lost companions of my tuneful art,\nDear, as the light that visits these sad eyes,\nDear, as the ruddy drops that warm my heart,\nYe died amidst your dying country's cries—\nNo more I weep. They do not sleep.\nOn yonder cliffs, a griesly band,\nI see them sit, they linger yet,\nAvengers of their native land:\nWith me in dreadful harmony they join,\nAnd weave with bloody hands the tissue of thy line:—\n\n\"'Weave the warp, and weave the woof,\nThe winding sheet of Edward's race.\nGive ample room, and verge enough\nThe characters of hell to trace.\nMark the year, and mark the night,\nWhen Severn shall re-echo with affright\nThe shrieks of death, thro' Berkley's roofs that ring,\nShrieks of an agonising King!\nShe-Wolf of France, with unrelenting fangs,\nThat tear'st the bowels of thy mangled mate,\nFrom thee be born, who o'er thy country hangs\nThe scourge of Heav'n. What terrors round him wait!\nAmazement in his van, with Flight combin'd,\nAnd Sorrow's faded form, and Solitude behind.\n\n\"'Mighty victor, mighty lord,\nLow on his funeral couch he lies!\nNo pitying heart, no eye, afford\nA tear to grace his obsequies.\nIs the Sable Warrior fled?\nThy son is gone. He rests among the dead.\nThe swarm, that in thy noon-tide beam were born?\nGone to salute the rising Morn.\nFair laughs the Morn, and soft the Zephyr blows,\nWhile proudly riding o'er the azure realm\nIn gallant trim the gilded vessel goes;\nYouth on the prow, and Pleasure at the helm;\nRegardless of the sweeping Whirlwind's sway,\nThat, hush'd in grim repose, expects his evening prey.\n\n\"'Fill high the sparkling bowl,\nThe rich repast prepare;\nReft of a crown, he yet may share the feast.\nClose by the regal chair\nFell Thirst and Famine scowl\nA baleful smile upon their baffled guest.\nHeard ye the din of battle bray,\nLance to lance, and horse to horse?\nLong years of havoc urge their destin'd course\nAnd thro' the kindred squadrons mow their way.\nYe towers of Julius, London's lasting shame,\nWith many a foul and midnight murther fed,\nRevere his consort's faith, his father's fame,\nAnd spare the meek usurper's holy head.\nAbove, below, the rose of snow,\nTwined with her blushing foe, we spread:\nThe bristled Boar in infant-gore\nWallows beneath the thorny shade.\nNow, brothers, bending o'er th' accursed loom\nStamp we our vengeance deep, and ratify his doom.\n\n\"'Edward, lo! to sudden fate\n(Weave we the woof. The thread is spun)\nHalf of thy heart we consecrate.\n(The web is wove. The work is done.)'\nStay, oh stay! nor thus forlorn\nLeave me unbless'd, unpitied, here to mourn!\nIn yon bright track, that fires the western skies!\nThey melt, they vanish from my eyes.\nBut oh! what solemn scenes on Snowdon's height\nDescending slow their glitt'ring skirts unroll?\nVisions of glory, spare my aching sight,\nYe unborn Ages, crowd not on my soul!\nNo more our long-lost Arthur we bewail.\nAll-hail, ye genuine kings, Britannia's issue, hail!\n\n\"Girt with many a baron bold\nSublime their starry fronts they rear;\nAnd gorgeous dames, and statesmen old\nIn bearded majesty appear.\nIn the midst a form divine!\nHer eye proclaims her of the Briton-line;\nHer lion-port, her awe-commanding face,\nAttemper'd sweet to virgin-grace.\nWhat strings symphonious tremble in the air,\nWhat strings of vocal transport round her play!\nHear from the grave, great Taliessin, hear;\nThey breathe a soul to animate thy clay.\nBright Rapture calls, and soaring, as she sings,\nWaves in the eye of Heav'n her many-colour'd wings.\n\n\"The verse adorn again\nFierce War, and faithful Love,\nAnd Truth severe, by fairy Fiction drest.\nIn buskin'd measures move\nPale Grief, and pleasing Pain,\nWith Horror, tyrant of the throbbing breast.\nA voice, as of the cherub-choir,\nGales from blooming Eden bear;\nAnd distant warblings lessen on my ear,\nThat lost in long futurity expire.\nFond impious man, think'st thou, yon sanguine cloud,\nRais'd by thy breath, has quench'd the orb of day?\nTo-morrow he repairs the golden flood,\nAnd warms the nations with redoubled ray.\nEnough for me: with joy I see\nThe different doom our Fates assign.\nBe thine Despair, and scept'red Care,\nTo triumph, and to die, are mine.\"\nHe spoke, and headlong from the mountain's height\nDeep in the roaring tide he plung'd to endless night.",
      },
      steps: [
        "Choose a subject: Select a subject that deeply inspires you and evokes strong emotions. It could be a person, an object, an event, a place, or an abstract concept. The subject should be significant and deserving of admiration and praise.",
        "Explore the subject: Reflect on the qualities, characteristics, and significance of the subject. Consider what makes it special, unique, or worthy of celebration. Dive deep into its essence, history, or impact to develop a deeper understanding and connection.",
        "Brainstorm ideas: Generate a list of words, phrases, images, and associations related to the subject. Write down your thoughts, impressions, and emotions it evokes. This brainstorming process will help you gather material and inspiration for the ode.",
        "Structure your ode: Decide on the structure and form of your ode. Traditional odes often consist of stanzas with a consistent rhyme scheme and meter. You can also choose a more modern or flexible structure that suits your creative vision. Consider how many stanzas you want and whether you'll include a refrain or a recurring line.",
        "Start with an invocation: Begin your ode with a powerful and engaging opening, known as an invocation. This can be a direct address to the subject, expressing your reverence and setting the tone for the rest of the poem. Use vivid language and imagery to captivate the reader from the very beginning.",
        "Develop the body of the ode: In the subsequent stanzas, explore different aspects, qualities, or experiences related to the subject. Each stanza can delve into a specific attribute or theme, expanding on your admiration and exploring the significance of the subject. Use descriptive language, metaphors, and sensory details to evoke emotions and create vivid images.",
        "Use poetic devices: Incorporate poetic devices to enhance the impact of your ode. Utilize metaphors, similes, personification, alliteration, and other literary devices to create depth, musicality, and resonance. These devices can help convey the grandeur and emotional intensity of the ode.",
        "Express personal connection: Infuse your ode with your personal connection and emotions towards the subject. Share your own experiences, memories, or insights related to the subject. This adds a personal touch and authenticity to the ode, making it more relatable and engaging for the reader.",
        "Create a sense of culmination: Build the ode towards a powerful and climactic conclusion. Convey the ultimate expression of your admiration and the profound impact the subject has on you. Use powerful imagery, poetic language, and a sense of resolution to create a memorable and satisfying ending.",
        "Revise and refine: After writing the initial draft, revise your ode for clarity, coherence, and poetic effect. Pay attention to the flow, rhythm, and musicality of the language. Edit any inconsistencies, refine your metaphors, and fine-tune the overall structure and pacing of the ode.",
        "Read aloud and seek feedback: Read your ode aloud to assess its rhythm, flow, and emotional impact. Listen to how the words sound and the way they resonate. Consider sharing your ode with others and gather feedback on its effectiveness. Revise further based on the feedback received.",
        "Finalize and polish: Make the final adjustments to your ode, ensuring that it captures the essence of your admiration and the significance of the subject. Pay attention to grammar, punctuation, and formatting to present the ode in its best possible form.",
      ],
    },
    {
      name: "Pantoum",
      description:
        "A pantoum is a form of poetry that originated in Malaysia and is characterized by its specific structure and repetitive nature. It consists of a series of quatrains (four-line stanzas) in which the second and fourth lines of each stanza are repeated as the first and third lines of the next stanza. This pattern continues throughout the poem, creating a circular and interlocking effect.",
      example: {
        author: "John Keats",
        text: "My heart aches, and a drowsy numbness pains\nMy sense, as though of hemlock I had drunk,\nOr emptied some dull opiate to the drains\nOne minute past, and Lethe-wards had sunk:\n'Tis not through envy of thy happy lot,\nBut being too happy in thine happiness,—\nThat thou, light-winged Dryad of the trees\nIn some melodious plot\nOf beechen green, and shadows numberless,\nSingest of summer in full-throated ease.\n\nO, for a draught of vintage! that hath been\nCool'd a long age in the deep-delved earth,\nTasting of Flora and the country green,\nDance, and Provençal song, and sunburnt mirth!\nO for a beaker full of the warm South,\nFull of the true, the blushful Hippocrene,\nWith beaded bubbles winking at the brim,\nAnd purple-stained mouth;\nThat I might drink, and leave the world unseen,\nAnd with thee fade away into the forest dim:\n\nFade far away, dissolve, and quite forget\nWhat thou among the leaves hast never known,\nThe weariness, the fever, and the fret\nHere, where men sit and hear each other groan;\nWhere palsy shakes a few, sad, last gray hairs,\nWhere youth grows pale, and spectre-thin, and dies;\nWhere but to think is to be full of sorrow\nAnd leaden-eyed despairs,\nWhere Beauty cannot keep her lustrous eyes,\nOr new Love pine at them beyond to-morrow.\n\nAway! away! for I will fly to thee,\nNot charioted by Bacchus and his pards,\nBut on the viewless wings of Poesy,\nThough the dull brain perplexes and retards:\nAlready with thee! tender is the night,\nAnd haply the Queen-Moon is on her throne,\nCluster'd around by all her starry Fays;\nBut here there is no light,\nSave what from heaven is with the breezes blown\nThrough verdurous glooms and winding mossy ways.\n\nI cannot see what flowers are at my feet,\nNor what soft incense hangs upon the boughs,\nBut, in embalmed darkness, guess each sweet\nWherewith the seasonable month endows\nThe grass, the thicket, and the fruit-tree wild;\nWhite hawthorn, and the pastoral eglantine;\nFast fading violets cover'd up in leaves;\nAnd mid-May's eldest child,\nThe coming musk-rose, full of dewy wine,\nThe murmurous haunt of flies on summer eves.\n\nDarkling I listen; and, for many a time\nI have been half in love with easeful Death,\nCall'd him soft names in many a mused rhyme,\nTo take into the air my quiet breath;\nNow more than ever seems it rich to die,\nTo cease upon the midnight with no pain,\nWhile thou art pouring forth thy soul abroad\nIn such an ecstasy!\nStill wouldst thou sing, and I have ears in vain—\nTo thy high requiem become a sod.\n\nThou wast not born for death, immortal Bird!\nNo hungry generations tread thee down;\nThe voice I hear this passing night was heard\nIn ancient days by emperor and clown:\nPerhaps the self-same song that found a path\nThrough the sad heart of Ruth, when, sick for home,\nShe stood in tears amid the alien corn;\nThe same that oft-times hath\nCharm'd magic casements, opening on the foam\nOf perilous seas, in faery lands forlorn.\n\nForlorn! the very word is like a bell\nTo toll me back from thee to my sole self!\nAdieu! the fancy cannot cheat so well\nAs she is fam'd to do, deceiving elf.\nAdieu! adieu! thy plaintive anthem fades\nPast the near meadows, over the still stream,\nUp the hill-side; and now 'tis buried deep\nIn the next valley-glades:\nWas it a vision, or a waking dream?\nFled is that music:—Do I wake or sleep?",
      },
      steps: [
        "Choose a theme or subject: Select a theme or subject for your pantoum. It could be a personal experience, an emotion, a natural scene, or any other topic that inspires you. Having a clear focus will help guide your writing.",
        "Determine the rhyme scheme: Decide on the rhyme scheme for your pantoum. Typically, the second and fourth lines of each quatrain will be repeated as the first and third lines of the next quatrain. You can represent the rhyme scheme as ABAB, BCBC, CDCD, and so on.",
        "Write the first quatrain: Start by writing the first quatrain of your pantoum. Choose two rhyming lines and two non-rhyming lines. These non-rhyming lines will become the repeated lines in subsequent stanzas. Ensure that the quatrain conveys a coherent thought or image related to your chosen theme.",
        "Repeat and expand: Take the second and fourth lines from the first quatrain and use them as the first and third lines of the second quatrain. Write two new lines to complete the second quatrain, ensuring they rhyme with each other. This creates a sense of continuity and expansion as the poem progresses.",
        "Continue the pattern: Repeat the process for subsequent quatrains. Take the second and fourth lines of the previous quatrain and use them as the first and third lines of the next quatrain. Write two new lines that rhyme with each other to complete the quatrain. This creates the repetitive structure of the pantoum.",
        "Conclude the pantoum: End your pantoum with a final quatrain that repeats the second and fourth lines from the previous stanza. The final quatrain should provide a sense of closure or a resolution related to your chosen theme.",
        "Revise and refine: After writing the initial draft of your pantoum, review the poem for clarity, coherence, and poetic effect. Pay attention to the flow, rhythm, and rhyme scheme. Make any necessary adjustments to enhance the overall structure and impact of the pantoum.",
        "Read aloud and seek feedback: Read your pantoum aloud to assess its rhythm and flow. Listen to how the repeated lines create a sense of connection and progression. Consider sharing your pantoum with others and gather feedback on its effectiveness. Revise further based on the feedback received.",
        "Finalize and polish: Make the final adjustments to your pantoum, ensuring that it maintains the repetitive structure and effectively conveys your chosen theme. Pay attention to grammar, punctuation, and formatting to present the pantoum in its best possible form.",
      ],
    },
    {
      name: "Sestina",
      description:
        "A sestina is a highly structured form of poetry that consists of six stanzas of six lines each, followed by a final triplet (three-line stanza). What distinguishes a sestina from other forms of poetry is its intricate pattern of end-words.",
      example: {
        author: "Elizabeth Bishop",
        text: "September rain falls on the house.\nIn the failing light, the old grandmother\nsits in the kitchen with the child\nbeside the Little Marvel Stove,\nreading the jokes from the almanac,\nlaughing and talking to hide her tears.\n\nShe thinks that her equinoctial tears\nand the rain that beats on the roof of the house\nwere both foretold by the almanac,\nbut only known to a grandmother.\nThe iron kettle sings on the stove.\nShe cuts some bread and says to the child,\n\nIt's time for tea now; but the child\nis watching the teakettle's small hard tears\ndance like mad on the hot black stove,\nthe way the rain must dance on the house.\nTidying up, the old grandmother\nhangs up the clever almanac\n\non its string. Birdlike, the almanac\nhovers half open above the child,\nhovers above the old grandmother\nand her teacup full of dark brown tears.\nShe shivers and says she thinks the house\nfeels chilly, and puts more wood in the stove.\n\nIt was to be, says the Marvel Stove.\nI know what I know, says the almanac.\nWith crayons the child draws a rigid house\nand a winding pathway. Then the child\nputs in a man with buttons like tears\nand shows it proudly to the grandmother.\n\nBut secretly, while the grandmother\nbusies herself about the stove,\nthe little moons fall down like tears\nfrom between the pages of the almanac\ninto the flower bed the child\nhas carefully placed in the front of the house.\n\nTime to plant tears, says the almanac.\nThe grandmother sings to the marvelous stove\nand the child draws another inscrutable house.",
      },
      steps: [
        "Choose your end-words: Select six words that will serve as your end-words throughout the sestina. These words should be versatile and allow for multiple interpretations and usage. They will form the foundation of your poem.",
        "Create your end-word pattern: Assign numbers 1 to 6 to your end-words. Create a chart or table to help you keep track of the rotation pattern for each subsequent stanza. This pattern will guide you in placing the end-words in the correct order throughout the poem.",
        "Write the first stanza: Begin by writing the first stanza of six lines. Each line should end with one of your chosen end-words, according to the assigned numerical order. The order in the first stanza will be 123456.",
        "Rotate and repeat: Move on to the subsequent stanzas, following the end-word rotation pattern you created. Repeat the assigned end-words in the appropriate order, utilizing wordplay, figurative language, and varied syntax to maintain interest and convey your chosen theme.",
        "Craft the envoi: The final stanza, called the envoi, is a triplet (three-line stanza). It is essential to choose a new order for your end-words that brings the poem to a satisfying close. The envoi often summarizes or concludes the poem, providing a final thought or insight.",
        "Revise and refine: After writing the initial draft of your sestina, review the poem for clarity, coherence, and adherence to the end-word pattern. Pay attention to the flow, imagery, and overall impact of the poem. Make any necessary adjustments to enhance the structure and strengthen the theme.",
        "Edit for rhythm and meter: Consider the rhythm and meter of your sestina. While there is no strict requirement for meter, you can experiment with using a consistent meter or varying the meter to create a specific effect. Pay attention to the natural rhythm of the lines and make adjustments as needed.",
        "Read aloud and seek feedback: Read your sestina aloud to assess its musicality, flow, and emotional impact. Listen to how the end-words create a sense of unity and progression. Consider sharing your sestina with others and gather feedback on its effectiveness. Revise further based on the feedback received.",
        "Finalize and polish: Make the final adjustments to your sestina, ensuring that it maintains the intricate end-word pattern and effectively conveys your chosen theme. Pay attention to grammar, punctuation, and formatting to present the sestina in its best possible form.",
      ],
    },
    {
      name: "Sonnet",
      description:
        "A sonnet is a poetic form that originated in Italy and became popular in English literature. It is a 14-line poem typically characterized by a specific rhyme scheme, meter, and structure. Sonnets are known for their compactness and often explore themes of love, beauty, mortality, and the complexities of human emotions.",
      example: {
        author: "William Shakespeare",
        text: "Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate.\nRough winds do shake the darling buds of May,\nAnd summer’s lease hath all too short a date.\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimmed;\nAnd every fair from fair sometime declines,\nBy chance, or nature’s changing course, untrimmed;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow’st,\nNor shall death brag thou wand'rest in his shade,\nWhen in eternal lines to Time thou grow'st.\nSo long as men can breathe, or eyes can see,\nSo long lives this, and this gives life to thee.",
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
    },
    {
      name: "Terza Rima",
      description:
        "A poetic form that originated in Italy during the 13th century with a specific rhyme scheme that uses tercets (three-line stanzas). The second line of each stanza rhymes with the first and third lines of the next stanza, creating a chain-like structure. Terza rimas often end with a single line that rhymes with the second line of the previous stanza.",
      example: {
        author: "William Carlos Williams",
        text: "contend in a sea which the land partly encloses\nshielding them from the too—heavy blows\nof an ungoverned ocean which when it chooses\n\ntortures the biggest hulls, the best man knows\nto pit against its beatings, and sinks them pitilessly.\nMothlike in mists, scintillant in the minute\n\nbrilliance of cloudless days, with broad bellying sails\nthey glide to the wind tossing green water\nfrom their sharp prows while over them the crew crawls\n\nant-like, solicitously grooming them, releasing,\nmaking fast as they turn, lean far over and having\ncaught the wind again, side by side, head for the mark.\n\nIn a well guarded arena of open water surrounded by\nlesser and greater craft which, sycophant, lumbering\nand flittering follow them, they appear youthful, rare\n\nas the light of a happy eye, live with the grace\nof all that in the mind is feckless, free and\nnaturally to be desired. Now the sea which holds them\n\nis moody, lapping their glossy sides, as if feeling\nfor some slightest flaw but fails completely.\nToday no race. Then the wind comes again. The yachts\n\nmove, jockeying for a start, the signal is set and they\nare off. Now the waves strike at them but they are too\nwell made, they slip through, though they take in canvas.\n\nArms with hands grasping seek to clutch at the prows.\nBodies thrown recklessly in the way are cut aside.\nIt is a sea of faces about them in agony, in despair\n\nuntil the horror of the race dawns staggering the mind;\nthe whole sea become an entanglement of watery bodies\nlost to the world bearing what they cannot hold. Broken,\n\nbeaten, desolate, reaching from the dead to be taken up\nthey cry out, failing, failing! their cries rising\nin waves still as the skillful yachts pass over.",
      },
      steps: [
        "Understand the structure: Familiarize yourself with the terza rima form, which consists of tercets (three-line stanzas) with an interlocking rhyme scheme. Each tercet follows the pattern ABA, where the second line of each tercet rhymes with the first and third lines of the following tercet.",
        "Choose a theme or topic: Decide on the subject or theme you want to explore in your poem. It can be anything that inspires you or captures your interest, such as nature, love, personal experiences, or philosophical ideas.",
        "Start with the first tercet: Begin by writing a tercet that establishes the tone or introduces the central idea of your poem. The first line (A) can serve as a statement, an observation, or a question. The second line (B) should rhyme with the first line, and the third line (A) should rhyme with the first and third lines of the next tercet.",
        "Continue the interlocking rhyme scheme: Follow the ABA rhyme scheme throughout the poem. The second line of each tercet should rhyme with the first and third lines of the following tercet, creating a seamless and interconnected flow.",
        "Maintain coherence and progression: As you write subsequent tercets, ensure that there is a logical and cohesive progression of ideas or images. Each tercet should build upon the previous one, leading the reader through the poem with a sense of continuity.",
        "Conclude with a couplet or envoi (optional): Terza rima poems often end with a concluding couplet or envoi. This final two-line stanza can provide closure, summarize the main message, or offer a thought-provoking twist. The rhyme scheme of the couplet is typically AA.",
        "Revise and refine: Once you have completed the initial draft of your terza rima poem, review it for clarity, rhythm, and effectiveness. Consider revising lines, adjusting word choices, or reorganizing stanzas to enhance the overall impact of your poem.",
      ],
    },
    {
      name: "Villanelle",
      description:
        "A villanelle is a highly structured poetic form consisting of 19 lines. It originated from French poetry in the late 16th century and gained popularity in English poetry during the 19th and 20th centuries. The villanelle follows a strict pattern of repetition and rhyme.",
      example: {
        author: "Dylan Thomas",
        text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
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
    },
  ] as const
).map((poem, index) => ({
  ...poem,
  slug: slugify(poem.name),
  href: "/poem/" + slugify(poem.name),
  classNames: classNames[index % classNames.length],
  indefiniteArticle: ["a", "e", "i", "o", "u"].includes(
    poem.name[0].toLowerCase()
  )
    ? "an"
    : "a",
}));

export type TypeOfPoem = (typeof poems)[number];
