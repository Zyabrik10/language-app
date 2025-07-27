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
