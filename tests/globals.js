import { strict as assert } from "assert"

import { parse, global_flag_index } from "../index.js"

export const id = "Global Flags"

export const assertions = {
  "Should be able to toggle a flag with the '-$flag' syntax when no value is passed": {
    function: async () => {
      const flag_name = "f"
      const parsed = await parse([`-${flag_name}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], true)
    },
    // skip: true,
  },
  "Should be able to toggle a flag with the '--$flag' syntax when no value is passed": {
    function: async () => {
      const flag_name = "flag"
      const parsed = await parse([`--${flag_name}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], true)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '-$flag' syntax": {
    function: async () => {
      const flag_name = "f"
      const value = "value"
      const parsed = await parse([`-${flag_name}`, value])
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '--$flag' syntax": {
    function: async () => {
      const flag_name = "flag"
      const value = "value"
      const parsed = await parse([`--${flag_name}`, value])
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to set a flag value passed with '--$flag=' syntax": {
    function: async () => {
      const flag_name = "flag"
      const value = "value"
      const parsed = await parse([`--${flag_name}=${value}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag_name], value)
    },
    // skip: true,
  },
  "Should be able to toggle multiple flags with the '-$flag' syntax when no value is passed": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "f2"
      const parsed = await parse([`-${flag1_name}`, `-${flag2_name}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
    },
    // skip: true,
  },
  "Should be able to toggle multiple flags with the '--$flag' syntax when no value is passed": {
    function: async () => {
      const flag1_name = "flag1"
      const flag2_name = "flag2"
      const parsed = await parse([`--${flag1_name}`, `--${flag2_name}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
    },
    // skip: true,
  },
  "Should be able to toggle multiple flags with both '-$flag' and '--$flag' syntax when no value is passed for either": {
    function: async () => {
      const flag1_name = "f"
      const flag2_name = "flag"
      const parsed = await parse([`-${flag1_name}`, `--${flag2_name}`])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
    },
    // skip: true,
  },
  "Should be able to set multiple flag values using '-$flag' syntax": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "f2"
      const value1 = "value1"
      const value2 = "value2"
      const parsed = await parse([
        `-${flag1_name}`,
        `${value1}`,
        `-${flag2_name}`,
        `${value2}`,
      ])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], value1)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], value2)
    },
    // skip: true,
  },
  "Should be able to set multiple flag values using '--$flag' syntax": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "f2"
      const value1 = "value1"
      const value2 = "value2"
      const parsed = await parse([
        `--${flag1_name}`,
        `${value1}`,
        `--${flag2_name}`,
        `${value2}`,
      ])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], value1)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], value2)
    },
    // skip: true,
  },
  "Should be able to set multiple flag values using '--$flag=' syntax": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "f2"
      const value1 = "value1"
      const value2 = "value2"
      const parsed = await parse([
        `--${flag1_name}=${value1}`,
        `--${flag2_name}=${value2}`,
      ])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], value1)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], value2)
    },
    // skip: true,
  },
  "Should be able to set multiple flag values using a mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "flag3"
      const value1 = "value1"
      const value2 = "value2"
      const value3 = "value3"
      const parsed = await parse([
        `-${flag1_name}`,
        value1,
        `--${flag2_name}`,
        value2,
        `--${flag3_name}=${value3}`,
      ])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], value1)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], value2)
      assert.deepStrictEqual(parsed[global_flag_index][flag3_name], value3)
    },
    // skip: true,
  },
  "Should be able to set a mix of flag toggles and values using a mix of '-$flag', '--$flag', and '--$flag=' syntax": {
    function: async () => {
      const flag1_name = "f1"
      const flag2_name = "flag2"
      const flag3_name = "f3"
      const flag4_name = "flag4"
      const flag5_name = "flag5"
      const value3 = "value3"
      const value4 = "value4"
      const value5 = "value5"
      const parsed = await parse([
        `-${flag1_name}`,
        `--${flag2_name}`,
        `-${flag3_name}`,
        value3,
        `--${flag4_name}`,
        value4,
        `--${flag5_name}=${value5}`,
      ])
      assert.deepStrictEqual(parsed[global_flag_index][flag1_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag2_name], true)
      assert.deepStrictEqual(parsed[global_flag_index][flag3_name], value3)
      assert.deepStrictEqual(parsed[global_flag_index][flag4_name], value4)
      assert.deepStrictEqual(parsed[global_flag_index][flag5_name], value5)
    },
    // skip: true,
  },
}
