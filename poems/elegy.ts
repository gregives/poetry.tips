export const elegy = {
  name: "Elegy",
  description:
    "An elegy is a form of poetry that is typically written to lament or mourn the loss of someone or something. It is a reflective and melancholic poem that expresses grief, sorrow, and a sense of loss. Elegies can be written for a deceased person, a lost love, a past era, or even a fading memory.",
  options: [],
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
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write an elegy about ${prompt}`;
  },
} as const;
