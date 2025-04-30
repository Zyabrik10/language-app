import { aiTrainingGrammarPrompt } from "../../prompts";

const topics = [
  "Present simple and continuous",
  "Past simple and continuous",
  "Future simple and continuous",
  "Present perfect simple and continuous",
  "Past perfect simple and continuous",
  "Future perfect simple and continuous",
  "Irregular verbs",
  "Will, going to and present tenses for future",
  "Modal verbs can, may, must, have to",
  "Be able to",
  "Be allowed to",
  "Gerund and infinitive",
  "Imperative",
  "Passive voice",
  "Conditional tense",
  "Conditional sentences (if-clauses)",
  "Time clauses",
  "Relative clauses",
  "Direct and indirect object",
  "Indirect questions",
  "Question tags",
  "Reported speech",
  "Nouns",
];

export function TrainGrammar() {
  const trainGrammarTestSelect = document.querySelector(
    ".train-grammar-test-select"
  );

  topics.forEach((topic) => {
    // <option value="topic">topic</option>
    const option = document.createElement("option");
    option.value = topic;
    option.innerText = topic;

    trainGrammarTestSelect.appendChild(option);
  });

  const generativeButtons = document.querySelector(
    ".train-grammar-test-generate-button"
  );

  const trainGrammarTestBoxes = document.querySelector(
    ".train-grammar-test-box"
  );

  generativeButtons.addEventListener("click", () => {
    const topic = trainGrammarTestSelect.value;
    const prompt = aiTrainingGrammarPrompt(topic);

    generativeButtons.disabled = true;
    trainGrammarTestBoxes.innerHTML = "Loading...";

    askAI(prompt).then((response) => {
      generativeButtons.disabled = false;
      trainGrammarTestBoxes.innerHTML = response.message.content;
    });
  });
}

async function askAI(prompt) {
  return puter.ai.chat(prompt);
}
