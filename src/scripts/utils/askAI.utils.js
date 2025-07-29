import asyncWrapper from "./asyncWrapper.utils";

export const askAI = asyncWrapper((prompt) => {
  return puter.ai.chat(prompt);
});