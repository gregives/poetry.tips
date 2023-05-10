export const sestina = {
  name: "Sestina",
  description:
    "A sestina is a highly structured form of poetry that consists of six stanzas of six lines each, followed by a final triplet (three-line stanza). What distinguishes a sestina from other forms of poetry is its intricate pattern of end-words.",
  options: [],
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
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a sestina about ${prompt}`;
  },
} as const;
