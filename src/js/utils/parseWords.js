export default function parseWords(words_array) {
  let parsed_words_array = [];

  for (const str of words_array) {
    const splitted_str = str.trim().split("|");
    const id = splitted_str[0].trim();
    const expression = splitted_str[1].trim();
    const translation = splitted_str[2].trim();
    const type = splitted_str[3].trim();
    const description = splitted_str[4].trim();

    parsed_words_array.push({
      id,
      expression,
      translation,
      type,
      description,
    });
  }
  return parsed_words_array;
}
