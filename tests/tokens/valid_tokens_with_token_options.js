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
}
