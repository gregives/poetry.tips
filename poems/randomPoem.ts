export const randomPoem = {
  name: "Random Poem",
  description: "",
  options: [],
  example: {
    author: "",
    text: "",
  },
  steps: [],
  generatePrompt({ prompt }: { prompt: string }) {
    return `Write a sestina about ${prompt}`;
  },
} as const;
