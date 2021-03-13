import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../../../../../index.js"

export const id = "Global Options with Valid Tokens and Token Options"

const invalid_token_name = "bogus"

const global_flag1_name = "g1"
const global_flag2_name = "glag2"
const global_flag3_name = "g3"
const global_flag4_name = "glag4"
const global_flag5_name = "glag5"
const global_value3 = "g_value3"
const global_value4 = "g_value4"
const global_value5 = "g_value5"

const flag1_name = "f1"
const flag2_name = "flag2"
const flag3_name = "f3"
const flag4_name = "flag4"
const flag5_name = "flag5"
const value3 = "value3"
const value4 = "value4"
const value5 = "value5"

export const assertions = {
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
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
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
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
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible token and token flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
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
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
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
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 1 possible token and token flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax (global toggle set to invalid)": {
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
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
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
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
        },
      })
    },
    // skip: true,
  },
  "Global value set with mix of '-$flag', '--$flag', and '--$flag=' syntax with invalid token out of 2 possible token and token flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax (global toggle set to invalid)": {
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
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
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
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
        },
      })
    },
    // skip: true,
  },
}
