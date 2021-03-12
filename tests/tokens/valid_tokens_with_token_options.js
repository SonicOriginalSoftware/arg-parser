import { strict as assert } from "assert"

import { parse, token_key } from "../../index.js"

export const id = "Valid Tokens with Token Options"

const valid_token_name = "token1"

export const assertions = {
  "Should be able to pass a valid token out of 1 token possibility with a toggle option using the '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [valid_token_name, `-${flag_name}`],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 2 token possibilities with a toggle option using the '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [valid_token_name, `-${flag_name}`],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 1 token possibility with a toggle option using the '--$flag' syntax": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}`],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 2 token possibilities with a toggle option using the '--$flag' syntax": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}`],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: true,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 1 token possibility with a flag value option using the '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `-${flag_name}`, value],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 2 token possibilities with a flag value option using the '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `-${flag_name}`, value],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 1 token possibility with a flag value option using the '--$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}`, value],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 2 token possibilities with a flag value option using the '--$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}`, value],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 1 token possibility with a flag value option using the '--$flag=' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}=${value}`],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 2 token possibilities with a flag value option using the '--$flag=' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [valid_token_name, `--${flag_name}=${value}`],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {
        [1]: {
          [token_key]: valid_token_name,
          [flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Should be able to pass a valid token out of 1 token possibility with a mix of flag toggles and values using the '-$flag', '--$flag', and '--$flag=' syntax": {
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
          valid_token_name,
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
        [1]: {
          [token_key]: valid_token_name,
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
  "Should be able to pass a valid token out of 2 token possibilities with a mix of flag toggles and values using the '-$flag', '--$flag', and '--$flag=' syntax": {
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
          valid_token_name,
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
        [1]: {
          [token_key]: valid_token_name,
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
