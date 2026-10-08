![Project screenshot](./screenshot.png)

# UUID Generator

Generate UUID version 4 values for test data, prototypes, and local development. Choose a batch size and display style, create up to 500 identifiers, then copy a single value or the full batch, or save the results as a text or JSON file.

**Live app:** [https://a2rp.github.io/uuid-generator/](https://a2rp.github.io/uuid-generator/)

## What is included

- A fixed header with direct links to the generator, UUID notes, and source repository.
- A UUID v4 generator with quick batch sizes and a limit of 500 values per run.
- Standard hyphenated and compact display formats, with optional uppercase letters and braces.
- A scrollable result list with per-value copy, copy-all, plain text download, and JSON download actions.
- A confirmation dialog before clearing a generated batch.
- A short guide to UUID v4 format and secure browser randomness.
- A footer with the project source, shared logo, portfolio, social, and support links.

## How generation works

The app uses `crypto.randomUUID()` when the browser provides it. Otherwise, it uses `crypto.getRandomValues()` and sets the required UUID version and variant bits. It does not use `Math.random()`.

Enter a whole number from 1 to 500 or choose a quick size, then select standard or compact format and optional casing or braces. Choose **Generate UUIDs** to replace the visible result batch. Formatting options can be changed after generation and apply to the current results. Use a row's **Copy** action for one identifier, **Copy all** for a newline-separated batch, or save a `.txt` or `.json` file. Clearing results asks for confirmation.

## Privacy and limits

Generation runs in the current browser tab. The app does not send values to a server or save them between visits. Results are held in page memory and disappear when the page is reloaded or closed. File downloads stay on the device. Clipboard access depends on browser support and permissions. Each batch is limited to 500 UUIDs.

## Run locally

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Run the tests, check the code with ESLint, and create a production build:

```sh
npm test
npm run lint
npm run build
```

Publish the production build to GitHub Pages with:

```sh
npm run deploy
```

## Future improvements

These are ideas for later versions and are not implemented yet:

- Add UUID v7 generation for time-ordered identifiers.
- Allow named batches and separate downloads for different groups.
- Add a filter for finding a value in a very large batch.

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [mailto:ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/ashishranjan](https://buymeacoffee.com/ashishranjan)
- Patreon: [https://www.patreon.com/ashishranjan](https://www.patreon.com/ashishranjan)
