# ThienAtom

**Universal Atomic Utility Registry** — language-first, zero dependencies, one task per function.

[![npm version](https://badge.fury.io/js/thienatom.svg)](https://badge.fury.io/js/thienatom)

ThienAtom is a modern, lodash-alternative utility library designed with an "atomic" philosophy. It provides a comprehensive collection of helper functions where every function is strictly isolated, ensuring you only ever bundle exactly what you use.

## Why ThienAtom?

- **Minimum Bundle Size:** No barrel exports (`index.js`). You import the exact function file, guaranteeing 100% tree-shaking efficiency.
- **Zero Dependencies:** No function imports another function within the registry or relies on third-party packages.
- **TypeScript Support:** Fully typed out-of-the-box with type guards, assertions, and generic type preservation.
- **Mathematical Rigor:** Every function is documented with Big O Complexity and mathematical definitions.

## Installation

```bash
npm install thienatom
```

## Quick Start

ThienAtom is a single package that works seamlessly for both **JavaScript** and **TypeScript**. You use the exact same import paths for both; TypeScript types are automatically included!

Import only the atom you need using subpath imports:

```js
// JavaScript (ESM) or TypeScript
import isPrime from 'thienatom/math/is-prime';
import chunk from 'thienatom/array/chunk';

// JavaScript (CommonJS)
const isPrime = require('thienatom/math/is-prime');
const chunk = require('thienatom/array/chunk');
```

**Note:** Always use the default import. Each atom is the default export of its specific subpath.

## Available Functions

### 🧮 Math
- `thienatom/math/is-prime` - Check if a number is prime
- `thienatom/math/factorial` - Calculate factorial of a number
- `thienatom/math/gcd` - Find the greatest common divisor
- `thienatom/math/clamp` - Clamp a number between min and max
- `thienatom/math/round-decimal` - Round a number to a specific decimal place
- `thienatom/math/random-range` - Get a random number between min and max
- `thienatom/math/sum` - Calculate the sum of an array of numbers
- `thienatom/math/array-min` - Find the minimum value in an array
- `thienatom/math/array-max` - Find the maximum value in an array
- `thienatom/math/average` - Calculate the average of an array of numbers
- `thienatom/math/in-range` - Check if a number is within a given range
- `thienatom/math/is-even` - Check if a number is even
- `thienatom/math/is-odd` - Check if a number is odd

### 🔤 String
- `thienatom/string/slugify` - Convert a string to a URL-friendly slug
- `thienatom/string/capitalize` - Capitalize the first letter of a string
- `thienatom/string/truncate` - Truncate a string to a specific length
- `thienatom/string/trim-whitespace` - Remove extra whitespace from a string
- `thienatom/string/repeat` - Repeat a string a specified number of times

### 📚 Array
- `thienatom/array/chunk` - Split an array into chunks of a specific size
- `thienatom/array/compact` - Remove falsy values from an array
- `thienatom/array/unique` - Get unique elements from an array
- `thienatom/array/last` - Get the last element of an array
- `thienatom/array/first` - Get the first element of an array
- `thienatom/array/range` - Create an array of numbers within a range
- `thienatom/array/flatten-shallow` - Flatten an array one level deep
- `thienatom/array/difference` - Find the difference between two arrays

### 🔍 Type (Guards & Assertions)
- `thienatom/type/is-nil` - Check if a value is null or undefined
- `thienatom/type/is-defined` - Check if a value is defined (not null/undefined)
- `thienatom/type/assert-defined` - Assert that a value is defined (TypeScript)
- `thienatom/type/assert-never` - Assert exhaustive matching (TypeScript)
- `thienatom/type/is-string` - Check if a value is a string
- `thienatom/type/is-array` - Check if a value is an array
- `thienatom/type/is-plain-object` - Check if a value is a plain object

### 📦 Object
- `thienatom/object/pick` - Create an object with picked properties
- `thienatom/object/omit` - Create an object omitting specific properties

### ⚙️ Function
- `thienatom/function/noop` - No-operation function
- `thienatom/function/identity` - Return the first argument passed
- `thienatom/function/debounce` - Create a debounced version of a function

### ⏱️ Async
- `thienatom/async/sleep` - Pause execution for a given number of milliseconds
- `thienatom/async/timeout-wrap` - Wrap a promise with a timeout

### ✅ Validation
- `thienatom/validation/is-email` - Validate an email address format
- `thienatom/validation/is-url` - Validate a URL format

### 🧩 Misc
- `thienatom/misc/coalesce` - Return the first non-nil value

## Contributing

The repository uses a language-first structure (`units/[language]/[category]/[atom-name]`). Currently, JavaScript (`js`) and TypeScript (`ts`) are supported. Check the repository documentation for more details on creating new atoms.
