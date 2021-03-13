import { strict as assert } from "assert"

import { parse, token_key } from "../index.js"

export const id = "Null Case"

const valid_token_name = "token1"

export const assertions = {
  "Should exit if passed no args": {
    function: async () => {
      const parsed = await parse(
        [],
        Object.freeze({
          0: [""],
        })
      )
      assert.deepStrictEqual(parsed, {})
    },
    // skip: true
  },
}
