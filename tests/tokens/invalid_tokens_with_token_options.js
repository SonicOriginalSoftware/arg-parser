import { strict as assert } from "assert"

import { parse, global_flag_index } from "../../index.js"

export const id = "Invalid Tokens with Token Options"

const invalid_token_name = "bogus"

export const assertions = {
  "Should be able to pass an invalid token out of 1 token possibility with a toggle option using the '-$flag' syntax and the invalid token not show it in the resulting parse (flag toggled as global)": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [invalid_token_name, `-${flag_name}`],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities with a toggle option using the '-$flag' syntax and the invalid token not show it in the resulting parse (flag toggled as global)": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [invalid_token_name, `-${flag_name}`],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 1 token possibility with a toggle option using the '--$flag' syntax and the invalid token not show it in the resulting parse (flag toggled as global)": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}`],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities with a toggle option using the '--$flag' syntax and the invalid token not show it in the resulting parse (flag toggled as global)": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}`],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 1 token possibility with a flag and value using the '-$flag' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `-${flag_name}`, value],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities with a flag and value using the '-$flag' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `-${flag_name}`, value],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 1 token possibility with a flag and value using the '--$flag' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}`, value],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities with a flag and value using the '--$flag' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}`, value],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 1 token possibility with a flag and value using the '--$flag=' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}=${value}`],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities with a flag and value using the '--$flag=' syntax and the invalid token not show it in the resulting parse": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [invalid_token_name, `--${flag_name}=${value}`],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 1 token possibility with a mix of flag toggles and values using the '-$flag', '--$flag', and '--$flag=' syntax and the invalid token not show it in the resulting parse": {
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
          invalid_token_name,
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
        ],
        Object.freeze({
          0: ["token1"],
        })
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
  "Should be able to pass an invalid token out of 2 token possibilities with a mix of flag toggles and values using the '-$flag', '--$flag', and '--$flag=' syntax and the invalid token not show it in the resulting parse": {
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
          invalid_token_name,
          `-${flag1_name}`,
          `--${flag2_name}`,
          `-${flag3_name}`,
          value3,
          `--${flag4_name}`,
          value4,
          `--${flag5_name}=${value5}`,
        ],
        Object.freeze({
          0: ["token1", "token2"],
        })
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
}
