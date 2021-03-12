import { strict as assert } from "assert"

import { parse, global_flag_index, token_key } from "../index.js"

export const id = "Globals with Tokens"

export const assertions = {
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
          "bogus",
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
          "bogus",
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
  "Should be able to set global flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with a valid token out of 1 valid possibility": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"
      const valid_token_name = "token1"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          valid_token_name,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag1_name]: true,
          [flag2_name]: true,
          [flag3_name]: value3,
          [flag4_name]: value4,
          [flag5_name]: value5,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with one valid token out of two valid possibilities": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"
      const valid_token_name = "token1"

      const parsed = await parse(
        [
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
          valid_token_name,
        ],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag3_name], value3)
      assert.deepStrictEqual(parsed[global_flag_index][flag4_name], value4)
      assert.deepStrictEqual(parsed[global_flag_index][flag5_name], value5)
    },
    skip: true,
  },
  "Should be able to set flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with one token": {
    function: async () => {
      const token_list = Object.freeze({
        0: ["token1", "token2"],
      })

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
        ],
        token_list
      )
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag3_name], value3)
      assert.deepStrictEqual(parsed[global_flag_index][flag4_name], value4)
      assert.deepStrictEqual(parsed[global_flag_index][flag5_name], value5)
    },
    skip: true,
  },
}
