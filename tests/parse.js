import { strict as assert } from "assert"

import { parse, global_flag_index } from "../index.js"

export const id = "Argument Parsing"

export const assertions = {
  "Should be able to toggle a flag with the '-$flag' syntax when no value is passed": {
    function: async () => {
      const flag_name = "f"
      const parsed = await parse([`-${flag_name}`], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], true)
    },
    // skip: true,
  },
  "Should be able to toggle a flag with the '--$flag' syntax when no value is passed": {
    function: async () => {
      const flag_name = "flag"
      const parsed = await parse([`--${flag_name}`], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], true)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"
      const parsed = await parse([`-${flag_name}`, value], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '--$flag' syntax": {
    function: async () => {
      const flag_name = "flag"
      const value = "value"
      const parsed = await parse([`--${flag_name}`, value], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '--$flag=' syntax": {
    function: async () => {
      const flag_name = "flag"
      const value = "value"
      const parsed = await parse([`--${flag_name}=${value}`], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to toggle multiple flags with the '-$flag' syntax when no value is passed": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "f2"
      const parsed = await parse([`-${flag1_name}`, `-${flag2_name}`], {})
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
    },
    // skip: true,
  },
  "Should be able to toggle multiple flags with the '--$flag' syntax when no value is passed": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Should be able to set multiple flags with values": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Should be able to set a mix of flag toggles and values": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Should be able to set a mix of flag toggles and values with one token": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Global flags with one token and flag toggles for that token": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Global flags with one token and flag values for that token": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Global flags with one token and mix of flag toggles and values for that token": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
  "Global flags with two tokens and mix of flag toggles and values for each token": {
    function: async () => {
      assert.fail("Not yet implemented!")
    },
    skip: true,
  },
}
