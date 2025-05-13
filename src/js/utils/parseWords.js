export default function parseWords(words_array) {
  let parsed_words_array = [];

  for (const str of words_array) {
    const splitted_str = str.trim().split("|");
    const id = splitted_str[0];
    const expression = splitted_str[1];
    const translation = splitted_str[2];
    const type = splitted_str[3];
    const description = splitted_str[4];

    if (!id) {
      throw Error(`ID = ${id} is not defined on ${str}`);
    }

    if (!expression) {
      throw Error(`Expression = ${expression} is not defined on ${str}`);
    }

    if (!translation) {
      throw Error(`Translation = ${translation} is not defined on ${str}`);
    }

    if (!type) {
      throw Error(`Type = ${type} is not defined on ${str}`);
    }

    if (!description) {
      throw Error(`Description = ${description} is not defined on ${str}`);
    }

    parsed_words_array.push({
      id: id.trim(),
      expression: expression.trim(),
      translation: translation.trim(),
      type: type.trim(),
      description: description.trim(),
    });
  }

  return parsed_words_array;
}
