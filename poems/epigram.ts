export const epigram = {
  name: "Epigram",
  description:
    "An epigram is a brief, witty, and often satirical poem or statement that expresses an idea in a clever and concise way. It is usually written in a couplet or a short stanza and often contains a twist or a surprise ending that subverts the reader's expectations. Epigrams can be used to comment on a wide range of subjects, from politics and social issues to love and relationships.",
  options: [],
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
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write an epigram about ${prompt}`;
  },
} as const;
