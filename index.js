/** @typedef {Map<string, string | boolean>} Arg */
/** @typedef {Map<number, Arg>} Args */
/** @typedef {Map<number, string[]>} TokenList */

export const global_flag_index = 0
export const token_key = "-"

/**
 * @param {string[]} args
 *
 * @returns {Promise<Args>}
 * */
export async function parse(args) {
  /** @type {Args} */
  let parsed = new Map()
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
      const next_arg_index = current_arg_index + 1
      const next_arg_value = args[next_arg_index]

      const equals_index = current_arg_value.indexOf("=")

      key = (equals_index > 0
        ? current_arg_value.slice(0, equals_index)
        : current_arg_value
      ).replace(/^-{1,2}/, "")

      const next_arg_is_flag =
        args.length > next_arg_index && next_arg_value[0] === "-"

      const current_arg_is_toggle =
        next_arg_is_flag || next_arg_value === undefined

      if (equals_index < 0 && current_arg_is_toggle) {
        value = true
      } else if (equals_index > 0) {
        value = current_arg_value.slice(equals_index + 1)
      }
    } else {
      current_section += 1
    }

    if (parsed.get(current_section) === undefined)
      parsed.set(current_section, new Map())
    parsed.get(current_section)?.set(key, value)
  }

  return parsed
}
