# Noors SampleClock

Noors SampleClock is an example node module to learn and demonstrate how to make, publish (but not to NPM) and import a node module.

### This is a web component

In the basis this means that it can simply be loaded as a custom HTML element `<sample-clock></sample-clock>`, like so:

## How it's used

The point of packaging the clock as a web-component is to make "importable" into the [noor-admin](https://github.com/dhrp/NOOR-admin) **Svelte** app. While at the same time make possible to use and develop the component completely independently.

### Developing

In the basis this means that it can simply be loaded as a custom HTML element `<sample-clock></sample-clock>`, like so:

```html
  <head>
    <script src="dist/app.bundle.js" type="module"></script>
  </head>
  <body>
    <sample-clock id="clock"></sample-clock>
  </body>
```

Unfortunately, to use `import` (required by Lit) we do need to build the package, and that is why in this project webpack is included. All webpack really does is bundle the imports into one file.

In order to develop the clock you can run:
```sh
npm run dev
```

This should also enable Live Reload / Hot Module Reloading.

### Loading it into the Noor-Admin app

The Noor-admin app simply installs this module as "sample-clock" and renders it onto the page. All building is taken care of by the svelte app.

In order to install this package in a "development way" that is so that you can edit files in this repo, and the changes to appear in the app. Install it like so:

npm link ../package-dir

To install it for production, from git:
`npm install github:dhrp/noors-sampleclock#semver:^0.0.3`

Which should result in in a line in your package.json like:
`"sample-clock": "github:dhrp/noors-sampleclock#semver:^0.0.3",`