/** @typedef {Object.<Number, String[]>} Args */
/** @typedef {Object.<Number, String[]>} TokenList */

export const global_flag_index = 0

/**
 * @param {string[]} args
 * @param {TokenList} token_list
 *
 * @returns {Promise<Args>}
 * */
export async function parse(args, token_list) {
  const number_of_tokens = Object.keys(token_list).length
  let parse = {}
  let current_section = 0
  for (let current_index = 0; current_index < args.length; current_index++) {
    const current_value = args[current_index]

    const next_index = current_index + 1
    const next_arg = args[next_index]

    const next_value_is_token =
      token_list[current_section]?.indexOf(next_arg) >= 0

    const current_value_is_flag = current_value[0] === "-"
    const next_value_is_flag = args.length > next_index && next_arg[0] === "-"

    if (parse[current_section] === undefined) parse[current_section] = {}

    if (current_value_is_flag) {
      let equals_index = current_value.indexOf("=")

      const value =
        next_value_is_flag ||
        next_value_is_token ||
        (next_arg === undefined && equals_index < 0)
          ? true
          : equals_index > 0
          ? current_value.slice(equals_index + 1)
          : next_arg

      parse[current_section] = {
        [(equals_index > 0
          ? current_value.slice(0, equals_index)
          : current_value
        ).replace(/^-{1,2}/, "")]: value,
      }
    } else if (next_value_is_token) {
      current_section += 1
    }

    // FIXME If next index is not a flag then its either a value or a token
    // If its not a token then we need to skip current_index beyond it
  }

  return parse
}
