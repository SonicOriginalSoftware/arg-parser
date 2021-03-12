import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../index.js"

export const id = "Globals with Invalid Token"

const invalid_token_name = "bogus"

export const assertions = {
  "Global flag toggle passed with the '-$flag' syntax will be set to an invalid token if invalid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`-${flag_name}`, invalid_token_name],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Global flag toggle passed with the '-$flag' syntax will be set to an invalid token if invalid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`-${flag_name}`, invalid_token_name],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Global flag toggle passed with the '--$flag' syntax will be set to an invalid token if invalid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`--${flag_name}`, invalid_token_name],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Global flag toggle passed with the '--$flag' syntax will be set to an invalid token if invalid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`--${flag_name}`, invalid_token_name],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '-$flag' syntax if invalid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`-${flag_name}`, value, invalid_token_name],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '-$flag' syntax if invalid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`-${flag_name}`, value, invalid_token_name],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '--$flag' syntax if invalid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}`, value, invalid_token_name],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '--$flag' syntax if invalid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}`, value, invalid_token_name],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '--$flag=' syntax if invalid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}=${value}`, invalid_token_name],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag value passed with the '--$flag=' syntax if invalid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}=${value}`, invalid_token_name],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 1 valid token possibility": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
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
  "Should be able to set global flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 2 valid token possibilities": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
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
  "Should be able to set global flag values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 1 valid token possibility ('-$flag' syntax toggle set to invalid token)": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const flag6_name = "flag6"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          `-${flag6_name}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
          [flag6_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 2 valid token possibilities ('-$flag' syntax toggle set to invalid token)": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const flag6_name = "flag6"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          `-${flag6_name}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
          [flag6_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 1 valid token possibility ('--$flag' syntax toggle set to invalid token)": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const flag6_name = "flag6"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          `--${flag6_name}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
          [flag6_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with an invalid token out of 2 valid token possibilities ('--$flag' syntax toggle set to invalid token)": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const flag6_name = "flag6"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          `--${flag6_name}`,
          invalid_token_name,
        ],
        Object.freeze({ 0: ["token1", "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
          [flag6_name]: invalid_token_name,
        },
      })
    },
    // skip: true,
  },
}
