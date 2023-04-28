import slugify from "@sindresorhus/slugify";

const classNames = [
  {
    background: "bg-gradient-to-br from-red-50 to-red-100",
    title: "text-red-800",
    focusWithin: "focus-within:ring-red-500",
    focusVisible: "focus-visible:ring-red-500",
  },
  {
    background: "bg-gradient-to-br from-orange-50 to-orange-100",
    title: "text-orange-800",
    focusWithin: "focus-within:ring-orange-500",
    focusVisible: "focus-visible:ring-orange-500",
  },
  {
    background: "bg-gradient-to-br from-amber-50 to-amber-100",
    title: "text-amber-800",
    focusWithin: "focus-within:ring-amber-500",
    focusVisible: "focus-visible:ring-amber-500",
  },
  {
    background: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    title: "text-yellow-800",
    focusWithin: "focus-within:ring-yellow-500",
    focusVisible: "focus-visible:ring-yellow-500",
  },
  {
    background: "bg-gradient-to-br from-lime-50 to-lime-100",
    title: "text-lime-800",
    focusWithin: "focus-within:ring-lime-500",
    focusVisible: "focus-visible:ring-lime-500",
  },
  {
    background: "bg-gradient-to-br from-green-50 to-green-100",
    title: "text-green-800",
    focusWithin: "focus-within:ring-green-500",
    focusVisible: "focus-visible:ring-green-500",
  },
  {
    background: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    title: "text-emerald-800",
    focusWithin: "focus-within:ring-emerald-500",
    focusVisible: "focus-visible:ring-emerald-500",
  },
  {
    background: "bg-gradient-to-br from-teal-50 to-teal-100",
    title: "text-teal-800",
    focusWithin: "focus-within:ring-teal-500",
    focusVisible: "focus-visible:ring-teal-500",
  },
  {
    background: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    title: "text-cyan-800",
    focusWithin: "focus-within:ring-cyan-500",
    focusVisible: "focus-visible:ring-cyan-500",
  },
  {
    background: "bg-gradient-to-br from-sky-50 to-sky-100",
    title: "text-sky-800",
    focusWithin: "focus-within:ring-sky-500",
    focusVisible: "focus-visible:ring-sky-500",
  },
  {
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    title: "text-blue-800",
    focusWithin: "focus-within:ring-blue-500",
    focusVisible: "focus-visible:ring-blue-500",
  },
  {
    background: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    title: "text-indigo-800",
    focusWithin: "focus-within:ring-indigo-500",
    focusVisible: "focus-visible:ring-indigo-500",
  },
  {
    background: "bg-gradient-to-br from-violet-50 to-violet-100",
    title: "text-violet-800",
    focusWithin: "focus-within:ring-violet-500",
    focusVisible: "focus-visible:ring-violet-500",
  },
  {
    background: "bg-gradient-to-br from-purple-50 to-purple-100",
    title: "text-purple-800",
    focusWithin: "focus-within:ring-purple-500",
    focusVisible: "focus-visible:ring-purple-500",
  },
  {
    background: "bg-gradient-to-br from-fuchsia-50 to-fuchsia-100",
    title: "text-fuchsia-800",
    focusWithin: "focus-within:ring-fuchsia-500",
    focusVisible: "focus-visible:ring-fuchsia-500",
  },
  {
    background: "bg-gradient-to-br from-pink-50 to-pink-100",
    title: "text-pink-800",
    focusWithin: "focus-within:ring-pink-500",
    focusVisible: "focus-visible:ring-pink-500",
  },
  {
    background: "bg-gradient-to-br from-rose-50 to-rose-100",
    title: "text-rose-800",
    focusWithin: "focus-within:ring-rose-500",
    focusVisible: "focus-visible:ring-rose-500",
  },
];

export const poems = (
  [
    {
      name: "Acrostic Poem",
      description:
        "A poem where the first letter of each line, when read vertically from top to bottom, spell out a word or phrase.",
      example:
        "Summer days are long and bright\nUnfolding in a golden light\nMaking memories that will stay\nMaking the most of every day\nEnjoying the sun and the breeze\nRelaxing in the shade of trees",
      steps: [
        "Choose a word or phrase to use for your poem",
        "Write the word or phrase vertically down the page, with each letter on a new line",
        "Brainstorm words or phrases that start with each letter of your chosen word or phrase",
        "Organize your ideas in a way that makes sense to you",
        "Write your poem using the words or phrases you've brainstormed",
        "Revise and edit your poem",
        "Finalize your poem by writing it out neatly or typing it up",
      ],
    },
    {
      name: "Ballad",
      description:
        "A narrative poem that tells a story, often about love or adventure. Ballads often have a simple and repetitive structure, and are often sung or recited aloud.",
      example:
        "Oh, my love is like a red, red rose,\nThat's newly sprung in June;\nOh, my love is like the melody\nThat's sweetly played in tune.",
      steps: [
        "Choose a story or event to write about",
        "Decide on a rhyme scheme (usually ABAB) and meter (usually iambic tetrameter or iambic pentameter)",
        "Write the narrative of your story, using the rhyme scheme and meter to create a musical quality",
        "Revise and edit your ballad for flow and coherence",
      ],
    },
    {
      name: "Blank Verse",
      description:
        "A poem that has a regular meter and rhyme scheme, but does not rhyme. Blank verse is often used in dramatic monologues or epic poetry.",
      example:
        "To be, or not to be: that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune,\nOr to take arms against a sea of troubles",
      steps: [
        "Choose a topic or theme for your poem",
        "Write in unrhymed iambic pentameter (10 syllables per line, with the stress on the second syllable of each foot)",
        "Use enjambment (continuing a sentence or phrase across multiple lines) to create a natural flow",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Cinquain",
      description:
        "A five-line poem that follows a specific syllable count for each line. The first line has two syllables, the second line has four syllables, the third line has six syllables, the fourth line has eight syllables, and the fifth line has two syllables.",
      example:
        "Rainfall\nSoft, gentle\nNourishing, renewing, cleansing\nLife-giving treasure from the sky\nWater",
      steps: [
        "Choose a subject to write about",
        "Write a five-line poem with a syllable pattern of 2-4-6-8-2",
        "The first line is a single word (the subject of your poem)",
        "The second line is two adjectives describing the subject",
        "The third line is three action words (-ing words) that relate to the subject",
        "The fourth line is a four-word phrase that relates to the subject",
        "The fifth line is a single word that summarizes the subject",
      ],
    },
    {
      name: "Concrete Poem",
      description:
        "A type of poem where the words are arranged in a specific shape or pattern that relates to the poem's subject matter.",
      example:
        "The Mouse\n\nA little mouse with clogs on\nStruts across the floor\nAnd makes a funny sound\nWhen he comes and goes\nPast the open door.\n\nOnce upon a time\nThere was a mouse\nWho lived in a house\nIn the corner of the room\nRight by the broom.\n\nHe ate some cheese\nAnd he started to sneeze.\n\nThis is a poem\nAbout a mouse.",
      steps: [
        "Choose a shape that relates to the topic or theme of your poem",
        "Write a poem that fits within the shape, using spacing and line breaks to create the desired effect",
        "Use typography, color, and other visual elements to enhance the visual impact of your poem",
      ],
    },
    {
      name: "Couplet",
      description:
        "A pair of lines of poetry that usually rhyme and have the same meter.",
      example:
        "The time has come to talk of many things:\nOf shoes—and ships—and sealing-wax—\nOf cabbages—and kings",
      steps: [
        "Choose a subject or theme for your poem",
        "Write a two-line poem that rhymes and has a consistent meter",
        "Use enjambment (continuing a sentence or phrase across multiple lines) to create a natural flow",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Diamante",
      description:
        "A seven-line poem that follows a diamond-shaped pattern. The first line has one word, the second line has two words, the third line has three words, the fourth line has four words, the fifth line has three words, the sixth line has two words, and the seventh line has one word.",
      example:
        "Rain\nWet, refreshing\nFalling, splashing, cleansing\nWater from the sky\nClearing, nourishing, soothing\nCalming, cooling\nRelief",
      steps: [
        "Choose a subject or topic that you want to teach or instruct your readers about",
        "Write your poem with a clear, instructional tone",
        "Use examples, analogies, and other literary devices to make your message clear and engaging",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Elegy",
      description:
        "A poem that mourns the loss of someone or something, often a person who has died.",
      example:
        "O Captain! my Captain! our fearful trip is done,\nThe ship has weather’d every rack, the prize we sought is won,\nThe port is near, the bells I hear, the people will exulting,\nWhile follow eyes the steady keel, the vessel grim and daring;",
      steps: [
        "Choose a person, place, or thing that you want to memorialize or pay tribute to",
        "Write in stanzas, using a consistent rhyme scheme and meter (often iambic pentameter)",
        "Use vivid imagery, figurative language, and sensory details to create a sense of loss or mourning",
        "Address the subject of your elegy directly, expressing your emotions and feelings",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Epigram",
      description:
        "A short and witty poem that often satirizes a person, behavior or idea. Epigrams often have a surprising or clever twist at the end.",
      example: "I am not young enough to know everything.\n- Oscar Wilde",
      steps: [
        "Choose a witty or clever saying, observation, or idea",
        "Write a short, pithy poem (often just two lines) that expresses the idea in a clever or ironic way",
        "Use wordplay, irony, and satire to make your point",
        "Revise and edit your poem for clarity and impact",
      ],
    },
    {
      name: "Free Verse",
      description:
        "A poem that does not follow any specific meter or rhyme scheme. Free verse allows poets to experiment with language and form in unique and creative ways.",
      example:
        "I am the darker brother.\nThey send me to eat in the kitchen\nWhen company comes,\nBut I laugh,\nAnd eat well,\nAnd grow strong.",
      steps: [
        "Choose a topic or theme for your poem",
        "Write without a predetermined rhyme or meter, allowing the words and ideas to flow naturally",
        "Use line breaks and spacing to create emphasis and rhythm",
        "Experiment with poetic techniques such as alliteration, assonance, and repetition",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Ghazal",
      description:
        "A form of Persian poetry that is often used to express themes of love and longing. Ghazals have a specific structure, with each couplet containing its own self-contained thought or image, and the final couplet including the poet's signature.",
      example:
        "I have not seen her in so long, it seems\nThat I am but a shadow of my dreams",
      steps: [
        "Choose a theme or subject for your poem",
        "Write a series of couplets that end with the same word or phrase (the radif)",
        "Use each couplet to explore a different aspect or idea related to the theme",
        "Use the same meter and rhyme scheme (usually AA BA CA, etc.) throughout the poem",
        "Include the poet's name (takhallus) in the final couplet",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Haiku",
      description:
        "A three-line poem that originated in Japan. The first and third lines of a haiku have five syllables, while the second line has seven syllables. Haikus often focus on nature or a specific moment in time.",
      example:
        "An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.",
      steps: [
        "Choose a subject or theme for your poem",
        "Write a three-line poem with a syllable pattern of 5-7-5",
        "Use sensory details and imagery to create a vivid image or moment",
        "Avoid using metaphors or similes",
        "Revise and edit your poem for clarity and impact",
      ],
    },
    {
      name: "Limerick",
      description:
        "A humorous poem that has a specific structure of five lines. The first, second, and fifth lines rhyme with each other, while the third and fourth lines rhyme with each other. Limericks often have a bawdy or nonsensical tone.",
      example:
        "There was an Old Man with a beard,\nWho said, 'It is just as I feared!—\nTwo Owls and a Hen,\nFour Larks and a Wren,\nHave all built their nests in my beard!'",
      steps: [
        "Choose a subject or theme for your poem",
        "Write a five-line poem with a rhyme scheme of AABBA",
        "The first, second, and fifth lines have eight or nine syllables and the same rhythm",
        "The third and fourth lines have five or six syllables and the same rhythm",
        "Use humor, puns, or wordplay to create a light-hearted and witty poem",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Narrative Poem",
      description:
        "A poem that tells a story, often with a plot, characters, and a setting. Narrative poems can be long or short, and may be written in any poetic form.",
      example:
        "So all day long the noise of battle rolled\nAmong the mountains by the winter sea;\nUntil King Hrothgar's men stood like a wall\nWith helmets bright and shields upraised, and knew\nThat nevermore should any creatures of evil\nDo harm to men in Heorot. The work was done,\nThe victory won.",
      steps: [
        "Choose a story or event to write about",
        "Write in stanzas, using a consistent rhyme scheme and meter",
        "Use imagery, dialogue, and description to create a vivid and engaging narrative",
        "Include a clear beginning, middle, and end",
        "Revise and edit your poem for flow and coherence",
      ],
    },
    {
      name: "Ode",
      description:
        "A poem that expresses admiration or praise for a person, place, or thing. Odes often have a formal and serious tone.",
      example:
        "Thou still unravish'd bride of quietness,\nThou foster-child of silence and slow time,\nSylvan historian, who canst thus express\nA flowery tale more sweetly than our rhyme:",
      steps: [
        "Choose a subject or topic that you want to praise or celebrate",
        "Write in stanzas, using a consistent meter and rhyme scheme (often ABAB or ABBA)",
        "Use vivid imagery, sensory details, and figurative language to express your admiration and appreciation",
        "Address the subject of your ode directly, expressing your emotions and feelings",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Pantoum",
      description:
        "A form of poetry that originated in Malaysia. A pantoum has a specific structure, with each line of the poem repeated multiple times throughout the poem. The final stanza repeats the first stanza, often with a new meaning.",
      example:
        "My heart aches, and a drowsy numbness pains\nMy sense, as though of hemlock I had drunk,\nOr emptied some dull opiate to the drains\nOne minute past, and Lethe-wards had sunk:\n\nMy heart aches, and a drowsy numbness pains\nMy sense, as though of hemlock I had drunk,\nI stand in sleep and feel the gentle rain,\nAs though it falls in some enchanted wood:\n\nMy sense, as though of hemlock I had drunk,\nOr emptied some dull opiate to the drains,\nAnd soon enough, the nightingale will sing\nWithin the shadow of the fragrant leaves.",
      steps: [
        "Choose a theme or subject for your poem",
        "Write a four-line stanza (quatrain) with a rhyme scheme of ABAB",
        "Use the second and fourth lines of the first stanza as the first and third lines of the second stanza",
        "Repeat this pattern for each subsequent stanza",
        "End with a final quatrain that uses the first and third lines of the first stanza as its second and fourth lines",
        "Use repetition and variation to create a sense of circularity and progression",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Sestina",
      description:
        "A poem with six stanzas of six lines each, followed by a final stanza of three lines. The same six end-words are repeated throughout the poem, with a specific pattern of repetition. Sestinas often require careful planning and structure.",
      example:
        "September rain falls on the house.\nIn the failing light, the old grandmother\nSits in the kitchen with the child\nBeside the Little Marvel Stove,\nReading the jokes from the almanac,\nLaughing and talking to hide her tears.",
      steps: [
        "Choose six words that will be repeated throughout the poem",
        "Write a six-stanza poem, with each stanza consisting of six lines",
        "Use the six words as end words for each line, following a pattern that varies with each stanza (the pattern is ABCDEF FAEBDC CFDABE ECBFAD DEACFB BDFECA)",
        "Use repetition and variation to create a sense of unity and complexity",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Sonnet",
      description:
        "A fourteen-line poem that has a specific rhyme scheme and structure. Sonnets can be written in a variety of meters and often focus on themes of love and beauty.",
      example:
        "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date:\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance, or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade\nNor lose possession of that fair thou owest;\nNor shall Death brag thou wander'st in his shade,\nWhen in eternal lines to time thou growest:\nSo long as men can breathe or eyes can see,\nSo long lives this, and this gives life to thee.",
      steps: [
        "Choose a theme or subject for your poem",
        "Write in iambic pentameter (a metrical pattern of ten syllables per line, with the stress on every other syllable)",
        "Use a rhyme scheme of ABAB CDCD EFEF GG",
        "Divide the poem into three quatrains (four-line stanzas) and a final couplet (two-line stanza)",
        "Use the quatrains to develop the theme or idea, and the couplet to summarize or conclude",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Tanka",
      description:
        "A five-line poem that originated in Japan. The first and third lines have five syllables, the second and fourth lines have seven syllables, and the final line has five syllables. Tankas often focus on themes of nature or love.",
      example:
        "Autumn wind blows strong\nGolden leaves dance in its wake\nNature's grand encore\nFading memories of warmth\nWinter's chill will soon be here",
      steps: [
        "Choose a nature or seasonal theme for your poem",
        "Write five lines with a syllable count of 5-7-5-7-7",
        "Use vivid imagery and sensory details to convey the theme",
        "Create a shift or turn in the final two lines that offers a new perspective or insight",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Terza Rima",
      description:
        "A poem with a specific rhyme scheme that uses tercets (three-line stanzas). The second line of each stanza rhymes with the first and third lines of the next stanza, creating a chain-like structure. Terza rimas often end with a single line that rhymes with the second line of the previous stanza.",
      example:
        "Oscar Wilde was a brilliant wit\nWith a talent for satire and wit\nHis plays and poems are classics that we still commit",
      steps: [
        "Choose a subject or theme for your poem",
        "Write in tercets (three-line stanzas) with a rhyme scheme of ABA BCB CDC DED, etc.",
        "Use each tercet to explore a different aspect or idea related to the theme",
        "Use repetition and progression to create a sense of unity and development",
        "Revise and edit your poem for clarity and coherence",
      ],
    },
    {
      name: "Villanelle",
      description:
        "A poem with a specific structure of five tercets (three-line stanzas) followed by a final quatrain (four-line stanza). The first and third lines of the first tercet are repeated throughout the poem, with specific rhyme scheme. Villanelles often explore themes of obsession or loss.",
      example:
        "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
      steps: [
        "Choose two refrains (short phrases or lines) that will be repeated throughout the poem",
        "Write a nineteen-line poem with a rhyme scheme of ABA ABA ABA ABA ABA ABAA",
        "Use the two refrains as the final lines of alternating stanzas",
        "Use repetition and variation to create a sense of circularity and progression",
        "Revise and edit your poem for clarity and coherence",
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

export type Poem = (typeof poems)[number];
