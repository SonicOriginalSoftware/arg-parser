import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../../../../../index.js"

export const id = "Global Options with Invalid Tokens and Token Toggles"

const invalid_token_name = "bogus"

const global_flag1_name = "g1"
const global_flag2_name = "glag2"
const global_flag3_name = "g3"
const global_flag4_name = "glag4"
const global_flag5_name = "glag5"
const global_value3 = "g_value3"
const global_value4 = "g_value4"
const global_value5 = "g_value5"

const token_flag_name = "f"

export const assertions = {
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag toggle set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag1_name}`,
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          invalid_token_name,
          `-${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: true,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag toggle set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag1_name}`,
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          invalid_token_name,
          `--${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: true,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible tokens and token flag toggle set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag1_name}`,
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          invalid_token_name,
          `-${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: true,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible tokens and token flag toggle set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag1_name}`,
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          invalid_token_name,
          `--${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: true,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag toggle set with '-$flag' syntax (toggle set to invalid)": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          `-${global_flag1_name}`,
          invalid_token_name,
          `-${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: invalid_token_name,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag toggle set with '--$flag' syntax (toggle set to invalid)": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          `-${global_flag1_name}`,
          invalid_token_name,
          `--${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: invalid_token_name,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible tokens and token flag toggle set with '-$flag' syntax (toggle set to invalid)": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          `-${global_flag1_name}`,
          invalid_token_name,
          `-${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: invalid_token_name,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible tokens and token flag toggle set with '--$flag' syntax (toggle set to invalid)": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag2_name}`,
          `-${global_flag3_name}`,
          global_value3,
          `--${global_flag4_name}`,
          global_value4,
          `--${global_flag5_name}=${global_value5}`,
          `-${global_flag1_name}`,
          invalid_token_name,
          `--${token_flag_name}`,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag1_name]: invalid_token_name,
          [global_flag2_name]: true,
          [global_flag3_name]: global_value3,
          [global_flag4_name]: global_value4,
          [global_flag5_name]: global_value5,
          [token_flag_name]: true,
        },
      })
    },
    // skip: true,
  },
}
