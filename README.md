# `arg-parser`

Because `pirate` would be like shooting fish in a barrel, right?

# Purpose

There are bazillions of other argument parsers out there.

But much like the rest of the software coming from Sonic Original, they were deemed too complex.

Behold an argument parsing library with the world's easiest API.

# API

## Input

Using the input looks like this:

```js
import { parse } from "@sonicoriginalsoftware/arg-parser"

const token_list = {
  0: ["your", "first", "keyword", "possibilities"]
  1: ["your", "second", "keyword", "possibilities"]
  2: ["your", "third", "keyword", "possibilities"]
}

const parsed = parse(process.args.split(2), token_list)
```

## Output

What does `parsed` look like above? Its simple:

```js
import { global_flag_index, token_key } from "@sonicoriginalsoftware/arg-parser"

const output_api = {
  [global_flag_index]: {
    [a_stripped_global_flag_here]: a_value,
    [another_stripped_global_flag_here]: another_value,
    [stripped_global_flag_here]: value,
  },
  [1]: {
    [token_key]: "a value from your token_list[0] above",
    [a_stripped_token_flag]: "a flag that was passed after your first token",
    ...,
  },
  [2]: {
    [token_key]: "a value from your token_list[1] above",
    [a_stripped_token_flag]: "a flag that was passed after your second token",
    ...,
  },
  ...
}
```

# Full Example

Say I called my CLI tool that uses `arg-parser` like this:

```
npx @my_scope/my_tool \
    -A_FLAG --Another_Flag \
    -A_third_flag a_third_flag_value \
    --a_fourth_global=use_it_with_equals \
    doTheThing \
      --a_thing_option its_value \
    theSubThing \
      -sub_thing_toggle
```

In my CLI `main` function, I need to parse this command, so I:

```js
import { parse } from "@sonicoriginalsoftware/arg-parser"

const token_list = {
  0: ["doTheThing", "orTheOtherThing", "orAnotherThing"]
  1: ["withThisSubCommand", "orThisSubCommand", "theSubThing"]
}

const parsed = parse(process.args.split(2), token_list)
```

And now I need to route the behavior of the app according to the arguments used. So here's what `parsed` looks like:

```js
import { global_flag_index, token_key } from "@sonicoriginalsoftware/arg-parser"

const parsed = {
  [global_flag_index]: {
    A_FLAG: true,
    Another_Flag: true
    A_third_flag: "a_third_flag_value",
    a_fourth_global: "use_it_with_equals"
  }
  [1]: {
    [token_key]: "doTheThing",
    a_thing_option: "its_value",
  }
  [2]: {
    [token_key]: "theSubThing",
    sub_thing_toggle: true,
  },
}
```

And determining values for routing behavior becomes just like managing behavior for any other object!

# Limitations (for now)

- Can only pass single-word values to flags
  - In the future, multiple word values for flags will be supported using quotes

# Tests

This might one of the most extensively tested packages of all time, considering the `parse` function is only a couple lines of code.

There are around 100+ tests currently to validate the intended behavior of the `parse` function.

Thanks to the ease of use of [`@sonicoriginalsoftware/jester`](https://github.com/SonicOriginalSoftware/jester), testing became a breeze to implement.
