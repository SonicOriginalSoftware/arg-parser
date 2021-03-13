/** @typedef {Object.<Number, any>} Args */
/** @typedef {Object.<Number, String[]>} TokenList */

export const global_flag_index = 0
export const token_key = "-"

/**
 * @param {string[]} args
 * @param {TokenList} [token_list]
 *
 * @returns {Promise<Args>}
 * */
export async function parse(args, token_list) {
  if (args === []) return {}
  let parse = {}
  let current_section = global_flag_index
  for (
    let current_arg_index = 0;
    current_arg_index < args.length;
    current_arg_index++
  ) {
    const current_arg_value = args[current_arg_index]

    let key = token_key
    /** @type {String | Boolean} */
    let value = current_arg_value

    if (current_arg_value[0] === "-") {
      const equals_index = current_arg_value.indexOf("=")

      const next_arg_index = current_arg_index + 1
      const next_arg_value = args[next_arg_index]

      key = (equals_index > 0
        ? current_arg_value.slice(0, equals_index)
        : current_arg_value
      ).replace(/^-{1,2}/, "")

      value =
        equals_index < 0 &&
        ((args.length > next_arg_index && next_arg_value[0] === "-") ||
          (token_list !== undefined &&
            token_list[current_section]?.indexOf(next_arg_value) >= 0) ||
          next_arg_value === undefined)
          ? true
          : equals_index > 0
          ? current_arg_value.slice(equals_index + 1)
          : next_arg_value
    } else if (
      token_list !== undefined &&
      token_list[current_section]?.indexOf(current_arg_value) >= 0
    ) {
      current_section += 1
    } else {
      continue
    }

    if (parse[current_section] === undefined) parse[current_section] = {}
    parse[current_section][key] = value
  }

  return parse
}
