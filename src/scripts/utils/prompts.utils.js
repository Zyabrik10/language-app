export const wordsExamplesPrompt = (expression, type, lang) => `
You are a language teacher of ${lang}. You have to give examples of the word "${expression}" as ${type} in different natural contexts.
Give me 5 sentences using the word "${expression}" in different contexts. Tell them without greeting and formatting. An html list ul. Just straight like this:
<ul class="app-list decimal">
    <li>1. First example</li>
    <li>2. Second example</li>
    <li>3. Third example</li>
</ul>
`;

export const aiWritingReviewPrompt = (text, lang) => `
You are a language teacher of ${lang}. You have to review the essay and give me feedback in ${lang}.
The essay is: "${text}".Tell them without greeting and formatting. 
Just straight like this but write there everything in ${lang}: 
<p>Rate: from 0 to 10</p>
<p>Level of ${lang}: from A1 to C2</p>
<p>Review: your review about text</p>
<p>Mistakes: write about my mistakes if such exist</p>
<p>What to improve: what should i improve not to make such mistakes next time.</p>
`;

export function askExpressionTranslationPrompt(lang, expression) {
    return `
        Source language: ${lang};
        Target language: Ukrainian;
        Strict rules: only return the word translation itself, nothing more, nothing less. The word translation shouldn't be translated literally, if you need it, you can adapt translation into target language. If needed, provide me with several translations in this way: translation1 / translation 2 / ... . If the expression goes with comas, that is still one expression, not separate words to translate.
        What to do:
          Return the translation type of "${expression}" expression.
      `;
}

export function askExpressionTypePrompt(lang, expression, types) {
    return `
        Source language: ${lang};
        Target language: Ukrainian;
        Strict rules: only return the word type itself, nothing more, nothing less. If the type has more then one word, return it like this: word1_word2_...
        What to do:
          Return the grammar type of "${expression}" expression either from this array: [${types.join(', ')}] or if array doesn't have corresponding type return that type by yourself.
      `;
}

export function askExpressionTypeExpressionPrompt(lang, expression, types_expression) {
    return `
        Source language: ${lang};
        Target language: Ukrainian;
        Explanation: I have word's types in English, but also want to have types'es name of source language, so I call them type_expression;
        Strict rules: only return the word type itself, nothing more, nothing less.
        What to do:
          Return the type_expression of "${expression}" expression either from this array: [${types_expression.join(', ')}] or if array doesn't have corresponding type return that type by yourself.
      `;
}

export function askExpressionDescriptionPrompt(lang, expression) {
    return `
        Source language: ${lang};
        Target language: Ukrainian;
        Strict rules: only return the description itself, nothing more, nothing less. The description should explain where, when and to whom i should use the "${expression}" and explain the "${expression}" itself. The description itself have to be written in target language.
        What to do:
          Return the description of "${expression}" expression.
      `;
}