export default class Words {
  constructor(words = []) {
    this.words = words;
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  getWordById(id) {
    return this.words.find((word) => word.id === id);
  }

  getWordsByType(type) {
    if (!type) {
      return this.words;
    }

    return this.words.filter((word) => word.type === type);
  }

  getWordCount() {
    return this.words.length;
  }

  sortWords(words = this.words) {
    words.sort((a, b) => a.expression.localeCompare(b.expression));
  }

  getWordsByContains(substring, types) {
    let wordsWithSpecificTypes = [];

    if (Object.keys(types).length > 0) {
      for (const type in types) {
        if (types[type]) {
          wordsWithSpecificTypes = [
            ...wordsWithSpecificTypes,
            ...this.getWordsByType(type),
          ];
        }
      }
    } else {
      wordsWithSpecificTypes = this.words;
    }

    const result = wordsWithSpecificTypes.filter((word) =>
      word.expression.toLowerCase().includes(substring.toLowerCase())
    );

    this.sortWords(result);

    return result;
  }

  getWordsByTypes(types) {
    const words = [];

    for (let type in types){
      if (types[type]) {
        words.push(...this.getWordsByType(type));
      }
    }
      
    return words;
  }
}
