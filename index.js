/**
 * Accepts an array of options and returns a map of their keys and values
 *
 * @param {String[]} options
 */
export function parse_options(options) {
  /** @type {Map<String, any>} */
  const parsed_options = new Map()

  for (const each_option of options.entries()) {
    const index = each_option[0]
    const next_index = index + 1

    const key = each_option[1]
    let key_is_flag = false

    let next_parameter
    let value
    if (options.length >= next_index) {
      next_parameter = options[next_index]
      if (next_parameter.startsWith("-")) {
        key_is_flag = true
      } else {
        value = next_parameter
      }
    }

    parsed_options.set(key, key_is_flag ? true : value)
  }

  return parsed_options
}
