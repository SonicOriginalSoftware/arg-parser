import { strict as assert } from "assert"

import { parse, token_key } from "../index.js"

export const id = "Tokens"

export const assertions = {
  "Should be able to pass an invalid token out of one token possibility and not show it in the resulting parse": {
    function: async () => {
      const token_list = Object.freeze({
        0: ["token1"],
      })

      const parsed = await parse(["bogus"], token_list)
      assert.deepStrictEqual(parsed, {})
    },
    // skip: true,
  },
  "Should be able to pass an invalid token out of two token possibilities and not show it in the resulting parse": {
    function: async () => {
      const token_list = Object.freeze({
        0: ["token1", "token2"],
      })

      const parsed = await parse(["bogus"], token_list)
      assert.deepStrictEqual(parsed, {})
    },
    // skip: true,
  },
  "Should be able to pass one valid token out of one token possibility and show it in the resulting parse": {
    function: async () => {
      const valid_token_name = "token1"

      const token_list = Object.freeze({
        0: [valid_token_name],
      })

      const parsed = await parse([valid_token_name], token_list)
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true
  },
  "Should be able to pass one valid token out of two token possibilities and show it in the resulting parse": {
    function: async () => {
      const valid_token_name = "token1"

      const token_list = Object.freeze({
        0: [valid_token_name, "token2"],
      })

      const parsed = await parse([valid_token_name], token_list)
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true,
  },
  "Should be able to pass another valid token out of two token possibilities and show it in the resulting parse": {
    function: async () => {
      const valid_token_name = "token2"

      const token_list = Object.freeze({
        0: [valid_token_name, "token1"],
      })

      const parsed = await parse([valid_token_name], token_list)
      assert.deepStrictEqual(parsed, { 1: { [token_key]: valid_token_name } })
    },
    // skip: true,
  },
}
