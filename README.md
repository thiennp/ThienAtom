# ThienAtom

Universal Atomic Utility Registry — one task per function, zero dependencies, language-first.

## Structure

- **Language-first:** Implementations live under `units/[language]/[category]/[atom-name]/` (e.g. `units/js/math/is-prime/`).
- **Language-specific:** Each language has its own atoms and metadata (atom.json, README.md). No shared meta; JS can expose different utils than Python or Rust.
- **Per atom:** Each folder contains `index.js` (or the language’s entry file), `test.js`, `atom.json`, and `README.md`.

## Philosophy

- **Atomic:** One function = one well-defined task (e.g. `is-prime`, `slugify`).
- **Zero dependencies:** No function imports another atom or any external package.
- **Docs:** JSDoc with Big O and a brief definition for each atom.

## Usage (minimum bundle size)

Import only the atom you need from its subpath so bundlers include just that file:

```js
// ESM
import isPrime from 'thienatom/math/is-prime';

// CommonJS
const isPrime = require('thienatom/math/is-prime');
```

Do not import the whole package; use subpaths like `thienatom/math/is-prime`, `thienatom/string/slugify`, etc. Each subpath resolves to a single file (one function); there is no barrel export, so bundlers only pull in that file.

**Import style:** Each atom is the **default** export of its subpath. Use default import, not named:

```js
import isPrime from 'thienatom/math/is-prime';   // one function, one file
import slugify from 'thienatom/string/slugify';  // another file
```

## One package for JS and TS

We use a **single npm package** (`thienatom`) for both JavaScript and TypeScript:

- **One install:** `npm i thienatom` for everyone; no separate `@types/thienatom` or a second package.
- **Same subpaths:** `thienatom/math/is-prime` gives JS runtime (from `units/js/`) and, when built, types from `dist/ts/` so TS users get type checking without changing imports.
- **No duplicate registry:** One package, one version, one place to add atoms. Splitting into `thienatom` (JS) and `thienatom-ts` (TS) would double maintenance and confuse versioning.
- **Publish size:** We ship `units/js`, `units/ts` source, and `dist/ts` (built .js + .d.ts). Optional: restrict `files` to `units/js` + `dist` to omit TS source from the tarball and rely on `dist/ts` for types.

## Languages

- **js** — JavaScript atoms under `units/js/`; npm exports resolve to these at runtime.
- **ts** — TypeScript atoms under `units/ts/`. Run `npm run build` to compile to `dist/ts/` (emits `.js` and `.d.ts`). Many subpaths supply types from `dist/ts/` so TypeScript projects get type checking; runtime still uses the JS implementation where both exist. TypeScript-only atoms (no JS equivalent) include **type/is-defined**, **type/assert-defined**, and **type/assert-never** (type guards and assertion helpers). TS is curated for type-safety needs (e.g. generic pick/omit, type predicates) and does not duplicate every JS util.
- **python**, **rust**, **cpp** — Add under `units/<lang>/` when needed.

## Deploy to npm

1. **Name:** Ensure the name `thienatom` is available: `npm search thienatom` or try publishing; if taken, use a scope (e.g. `@yourname/thienatom`).
2. **Build:** Run `npm run build` so `dist/ts` exists (or rely on `prepublishOnly` in package.json).
3. **Version:** Bump if needed: `npm version patch|minor|major`.
4. **Publish:** `npm publish` (or `npm publish --access public` for a scoped package like `@yourname/thienatom`).
5. **Verify:** In another project run `npm i thienatom` and `import isPrime from 'thienatom/math/is-prime'`; only that file should be resolved.
