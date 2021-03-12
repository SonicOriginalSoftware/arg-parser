import { strict as assert } from "assert"

import { parse, token_key } from "../../index.js"

export const id = "Tokens"

const valid_token_name = "token1"

export const assertions = {
  "Should be able to pass an invalid token out of 1 token possibility and not show it in the resulting parse": {
    function: async () => {
      const parsed = await parse(
        ["bogus"],
        Object.freeze({
          0: ["token1"],
        })
      )
      assert.deepStrictEqual(parsed, {})
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of 2 token possibilities and not show it in the resulting parse": {
    function: async () => {
      const parsed = await parse(
        ["bogus"],
        Object.freeze({
          0: ["token1", "token2"],
        })
      )
      assert.deepStrictEqual(parsed, {})
    },
    // skip: true,
  },
  "Should be able to pass one valid token out of 1 token possibility": {
    function: async () => {
      const parsed = await parse(
        [valid_token_name],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true
  },
  "Should be able to pass one valid token out of 2 token possibilities": {
    function: async () => {
      const parsed = await parse(
        [valid_token_name],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true,
  },
  "Should be able to pass a valid token and an invalid token out of 1 token possibility and show only the valid token": {
    function: async () => {
      const invalid_token_name = "bogus"

      const parsed = await parse(
        [valid_token_name, invalid_token_name],
        Object.freeze({
          0: [valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true,
  },
  "Should be able to pass a valid token and an invalid token out of 2 token possibilities and show only the valid token": {
    function: async () => {
      const invalid_token_name = "bogus"

      const parsed = await parse(
        [valid_token_name, invalid_token_name],
        Object.freeze({
          0: [valid_token_name, "token2"],
        })
      )
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true,
  },
  "Should be able to pass another valid token out of 2 token possibilities": {
    function: async () => {
      const another_valid_token_name = "token2"

      const parsed = await parse(
        [another_valid_token_name],
        Object.freeze({
          0: [valid_token_name, another_valid_token_name],
        })
      )
      assert.deepStrictEqual(parsed, {
        1: { [token_key]: another_valid_token_name },
      })
    },
    // skip: true,
  },
}
