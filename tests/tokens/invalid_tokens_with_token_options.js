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
}
