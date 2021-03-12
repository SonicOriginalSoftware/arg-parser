import { strict as assert } from "assert"

import { parse, global_flag_index, token_key } from "../../index.js"

export const id = "Globals with Valid Token"

const valid_token_name = "token1"

export const assertions = {
  "Should be able to toggle global flags passed with the '-$flag' syntax when a valid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`-${flag_name}`, valid_token_name],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to toggle global flags passed with the '-$flag' syntax when a valid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`-${flag_name}`, valid_token_name],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to toggle global flags passed with the '--$flag' syntax when a valid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`--${flag_name}`, valid_token_name],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to toggle global flags passed with the '--$flag' syntax when a valid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"

      const parsed = await parse(
        [`--${flag_name}`, valid_token_name],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: true,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '-$flag' syntax when a valid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`-${flag_name}`, value, valid_token_name],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '-$flag' syntax when a valid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`-${flag_name}`, value, valid_token_name],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '--$flag' syntax when a valid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}`, value, valid_token_name],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '--$flag' syntax when a valid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}`, value, valid_token_name],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '--$flag=' syntax when a valid token is passed out of 2 valid token possibilities": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}=${value}`, valid_token_name],
        Object.freeze({ 0: [valid_token_name, "token2"] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
        },
      })
    },
    // skip: true,
  },
  "Should be able to set global flag values passed with the '--$flag=' syntax when a valid token is passed out of 1 valid token possibility": {
    function: async () => {
      const flag_name = "f"
      const value = "value"

      const parsed = await parse(
        [`--${flag_name}=${value}`, value, valid_token_name],
        Object.freeze({ 0: [valid_token_name] })
      )

      assert.deepStrictEqual(parsed, {
        [global_flag_index]: {
          [flag_name]: value,
        },
        [1]: {
          [token_key]: valid_token_name,
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
  "Should be able to set global flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax with a valid token out of 2 valid possibilities": {
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
          valid_token_name,
        ],
        Object.freeze({ 0: [valid_token_name, "token2"] })
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
}
