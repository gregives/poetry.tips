export const terzaRima = {
  name: "Terza Rima",
  description:
    "A poetic form that originated in Italy during the 13th century with a specific rhyme scheme that uses tercets (three-line stanzas). The second line of each stanza rhymes with the first and third lines of the next stanza, creating a chain-like structure. Terza rimas often end with a single line that rhymes with the second line of the previous stanza.",
  options: [],
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
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a terza rima about ${prompt}`;
  },
} as const;
