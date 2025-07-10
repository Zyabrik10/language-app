export default function parseWords(words_array, del = "|") {
  let parsed_words_array = [];

  for (const str of words_array) {
    const splitted_str = str
      .trim()
      .split(del)
      .map((e) => e.trim());
    const id = splitted_str[0];
    const expression = splitted_str[1];
    const translation = splitted_str[2];
    const type = splitted_str[3];
    const type_expression = splitted_str[4];
    const description = splitted_str[5];

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

    if (!type_expression) {
      throw Error(
        `Type expression = ${type_expression} is not defined on ${str}`
      );
    }

    if (!description) {
      throw Error(`Description = ${description} is not defined on ${str}`);
    }

    parsed_words_array.push({
      id,
      expression,
      translation,
      type,
      type_expression,
      description,
    });
  }

  return parsed_words_array;
}
