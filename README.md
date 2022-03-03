## Description

A library of common code for use across the RbC ecosystem.

**NOTE:** this package is designed to support a specific project so may or may not be useful to the general public.

## Installation

```bash
$ npm install @curioushuman/rbc-common
```

## Publish (first time)

This package is already published, but if you were to use this as a basis for your own make sure your first publish marks it as public:

```bash
$ npm publish --access public
```

## Update & re-publish

Once you have completed and committed your work:

```bash
$ npm run pub
```

This will:

```bash
# Bump patch version, build, and publish
$ npm version patch && npm run build && npm publish
```
