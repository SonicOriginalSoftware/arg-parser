import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../../../../../index.js"

export const id = "Global Toggles with Invalid Tokens and Token Option Toggles"

const invalid_token_name = "bogus"
const global_flag_name = "f"
const token_flag_name = "g"

export const assertions = {
  "Global toggle set with '-$flag' syntax with invalid token out of 1 possible token and flag toggle option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`-${global_flag_name}`, invalid_token_name, `-${token_flag_name}`],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '--$flag' syntax with invalid token out of 1 possible token and flag toggle option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`--${global_flag_name}`, invalid_token_name, `-${token_flag_name}`],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '-$flag' syntax with invalid token out of 1 possible token and flag toggle option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`-${global_flag_name}`, invalid_token_name, `--${token_flag_name}`],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '--$flag' syntax with invalid token out of 1 possible token and flag toggle option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`--${global_flag_name}`, invalid_token_name, `--${token_flag_name}`],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '-$flag' syntax with invalid token out of 2 possible tokens and flag toggle option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`-${global_flag_name}`, invalid_token_name, `-${token_flag_name}`],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '--$flag' syntax with invalid token out of 2 possible tokens and flag toggle option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`--${global_flag_name}`, invalid_token_name, `-${token_flag_name}`],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '-$flag' syntax with invalid token out of 2 possible tokens and flag toggle option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`-${global_flag_name}`, invalid_token_name, `--${token_flag_name}`],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global toggle set with '--$flag' syntax with invalid token out of 2 possible tokens and flag toggle option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [`--${global_flag_name}`, invalid_token_name, `--${token_flag_name}`],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: invalid_token_name,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
}
