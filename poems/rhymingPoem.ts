export const rhymingPoem = {
  name: "Rhyming Poem",
  description:
    "A rhyming poem is a form of poetry where the words at the end of certain lines have similar sounds, typically sharing the same final syllables or vowel sounds. Rhyme adds a rhythmic quality to the poem, enhancing its musicality and creating a sense of harmony. Rhyming poems often follow specific patterns, such as AABB, ABAB, or ABCB, where each letter represents a different rhyme sound. The use of rhyme can evoke emotions, enhance the poem's structure, and create a memorable and enjoyable reading experience.",
  options: [],
  example: {
    author: "Edward Lear",
    text: 'The Owl and the Pussy-cat went to sea\nIn a beautiful pea-green boat,\nThey took some honey, and plenty of money,\nWrapped up in a five-pound note.\nThe Owl looked up to the stars above,\nAnd sang to a small guitar,\n"O lovely Pussy! O Pussy, my love,\nWhat a beautiful Pussy you are,\nYou are,\nYou are!\nWhat a beautiful Pussy you are!"\n\nPussy said to the Owl, "You elegant fowl!\nHow charmingly sweet you sing!\nO let us be married! too long we have tarried:\nBut what shall we do for a ring?"\nThey sailed away, for a year and a day,\nTo the land where the Bong-Tree grows\nAnd there in a wood a Piggy-wig stood\nWith a ring at the end of his nose,\nHis nose,\nHis nose,\nWith a ring at the end of his nose.\n\n"Dear Pig, are you willing to sell for one shilling\nYour ring?" Said the Piggy, "I will."\nSo they took it away, and were married next day\nBy the Turkey who lives on the hill.\nThey dined on mince, and slices of quince,\nWhich they ate with a runcible spoon;\nAnd hand in hand, on the edge of the sand,\nThey danced by the light of the moon,\nThe moon,\nThe moon,\nThey danced by the light of the moon.',
  },
  steps: [
    "Choose a topic: Decide what you want your poem to be about. It could be a personal experience, an observation, or anything that inspires you.",
    "Determine the rhyme scheme: Select a specific pattern for your rhymes. Common schemes include AABB, ABAB, or ABCB, but you can also create your own. This pattern will guide the structure of your poem.",
    "Brainstorm ideas: Jot down words, phrases, or concepts related to your chosen topic. Consider the emotions you want to convey and the imagery you want to use. Let your creativity flow without worrying about rhyme at this stage.",
    "Create a draft: Start writing your poem, focusing on expressing your thoughts and feelings. Begin with the first line and try to incorporate rhyming words at the end of each corresponding line, following your chosen rhyme scheme. You can use a rhyming dictionary or online resources for help in finding suitable rhymes.",
    "Refine and revise: Review your draft and make necessary revisions. Pay attention to the flow and rhythm of the poem, ensuring that the rhymes don't sound forced or disrupt the natural cadence. Consider rephrasing or rearranging lines if needed.",
    "Polish and edit: Once you're satisfied with the overall structure and content, polish your poem further. Check for grammar, punctuation, and spelling errors. Read the poem aloud to assess its musicality and make adjustments as necessary.",
    "Finalize your poem: Make any final tweaks, ensuring that your rhymes are consistent and the poem effectively communicates your intended message. Consider sharing your work with others for feedback and additional perspectives.",
  ],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a rhyming poem about ${prompt}`;
  },
} as const;
