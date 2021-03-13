import { strict as assert } from "assert"

import { parse, global_flag_index, token_key } from "../../../../../../index.js"

export const id = "Global Values with Valid Tokens and Token Values"

const token_index = 1
const valid_token_name = "bogus"
const global_flag_name = "f"
const global_flag_value = "global"
const token_flag_name = "g"
const value = "value"

export const assertions = {
  "Global value set with '-$flag' syntax with valid token out of 1 possible token and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 1 possible token and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 1 possible token and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '-$flag' syntax with valid token out of 1 possible token and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 1 possible token and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 1 possible token and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '-$flag' syntax with valid token out of 1 possible token and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 1 possible token and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 1 possible token and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '-$flag' syntax with valid token out of 2 possible tokens and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 2 possible tokens and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 2 possible tokens and flag value option set with '-$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `-${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '-$flag' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `--${token_flag_name}`,
          value,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '-$flag' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `-${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}`,
          global_flag_value,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
  "Global value set with '--$flag=' syntax with valid token out of 2 possible tokens and flag value option set with '--$flag=' syntax": {
    function: async () => {
      const parsed = await parse(
        [
          `--${global_flag_name}=${global_flag_value}`,
          valid_token_name,
          `--${token_flag_name}=${value}`,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [global_flag_name]: global_flag_value,
        },
        [token_index]: {
          [token_key]: valid_token_name,
          [token_flag_name]: value,
        },
      })
    },
    // skip: true,
  },
}
