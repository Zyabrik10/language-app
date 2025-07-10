export default class Dictionary {
  constructor(dictionary, favorite_expression = "favorite") {
    this.types = ["favorite"];
    this.types_expression = [favorite_expression];
    this.d = dictionary.map((word) => {
      if (!this.hasType(word.type)) {
        this.types.push(word.type);
        this.types_expression.push(word.type_expression);
      }

      return {
        ...word,
        favorite: false,
      };
    });
  }

  setFavoriteById(id, state) {
    const word = this.getById(id);

    if (!word) return;

    word.favorite = state;
  }

  setFavorites(state, ...ides) {
    ides.forEach((id) => {
      this.setFavoriteById(id, state);
    });
  }

  getFavorites(arr = this.d, fav = true) {
    return arr.filter(({ favorite }) => fav === favorite);
  }

  getById(wantedId, arr = this.d) {
    return arr.find(({ id: wordId }) => wordId === wantedId);
  }

  hasType(type) {
    return Boolean(this.types.find((t) => t === type));
  }

  getWordsByType(type, arr = this.d) {
    if (!this.hasType(type)) return [];
    return arr.filter(({ type: wordType }) => wordType === type);
  }

  getWordsByTypes(arr = this.d, ...types) {
    const res = [];

    types.forEach((type) => {
      const words = this.getWordsByType(type, arr);

      if (words.length === 0) return;

      res.push(...words);
    });

    return res;
  }

  getWordsByPart(part, arr = this.d) {
    if (!part) return [...arr];

    const res = [];

    arr.forEach((word) => {
      if (!word.expression.toLowerCase().includes(part.toLowerCase())) return;
      res.push(word);
    });

    return res;
  }

  getSorted(arr = this.d.map((e) => e), inc = true) {
    arr.sort((a, b) =>
      inc
        ? a.expression.localeCompare(b.expression)
        : b.expression.localeCompare(a.expression)
    );
    return arr;
  }

  add({ word, translate, type, description }) {
    if (!this.hasType(type)) this.types.push(type);
    this.d.push({
      id: String(this.d.length),
      word,
      translate,
      type,
      description,
    });
    return this;
  }

  removeById(removeWordId) {
    this.d = this.d.filter(({ id }) => removeWordId !== id);
    return this;
  }
}
