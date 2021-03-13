import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../../../../../index.js"

export const id = "Global Values with Valid Tokens and Token Options"

const invalid_token_name = "bogus"

const global_flag_name = "g"
const global_flag_value = "value"

const flag1_name = "f1"
const flag2_name = "flag2"
const flag3_name = "f3"
const flag4_name = "flag4"
const flag5_name = "flag5"
const value3 = "value3"
const value4 = "value4"
const value5 = "value5"

export const assertions = {
  "Global value set with '-$flag' syntax with invalid token out of 1 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
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
          [global_flag_name]: global_flag_value,
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
  "Global value set with '--$flag' syntax with invalid token out of 1 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
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
          [global_flag_name]: global_flag_value,
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
  "Global value set with '--$flag=' syntax with invalid token out of 1 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
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
          [global_flag_name]: global_flag_value,
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
  "Global value set with '-$flag' syntax with invalid token out of 2 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
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
          [global_flag_name]: global_flag_value,
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
  "Global value set with '--$flag' syntax with invalid token out of 2 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
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
          [global_flag_name]: global_flag_value,
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
  "Global value set with '--$flag=' syntax with invalid token out of 2 possible token and flag options set with mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
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
          [global_flag_name]: global_flag_value,
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
