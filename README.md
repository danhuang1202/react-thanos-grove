# react-thanos-grove

[![Build Status](https://travis-ci.org/danhuang1202/react-thanos-grove.svg?branch=master)](https://travis-ci.org/danhuang1202/react-thanos-grove) 
[![codecov](https://codecov.io/gh/danhuang1202/react-thanos-grove/branch/master/graph/badge.svg)](https://codecov.io/gh/danhuang1202/react-thanos-grove)
[![NPM version](https://img.shields.io/npm/v/react-thanos-grove.svg)](https://www.npmjs.com/package/react-thanos-grove)

![](https://www.google.com/logos/fnbx/thanos/thanos_idle.png)

Make the naping animation in [Google Thanos Easter Egg](https://www.google.com/search?q=thanos) as react component.

Please refer the example <a href="https://danhuang1202.github.io/react-thanos-grove/">here</a> for more information.

## Installation
```
npm i react-thanos-grove
```

## Components
- ThanosGrove

  Snap animation by thanos's grove

  | props | type | required | default | description |
  | --- | --- | --- | --- | --- |
  | className	| string |	false | - | Custom class name of the wrap component |
  | onDecimation	| function |	false | - | callback function which run with decimate |
  | onReverse | function | false | - | callback function which run with reverse |

## Way to Ride
- Common jS
```js
// import from package entry point
const uc = require('react-thanos-grove')
require('react-thanos-grove/css/style.css')

  <uc.ThanosGrove {...props} />
```
```js
// only import specific component
const ThanosGrove = require('react-thanos-grove/lib/components/ThanosGrove')
require('react-thanos-grove/css/components/ThanosGrove/style.css')

  <ThanosGrove {...props} />
```

- ESM
```js
// import from package entry point
import { ThanosGrove } from 'react-thanos-grove'
import 'react-thanos-grove/css/style.css'

  <ThanosGrove {...props} />
```
```js
// only import specific component
import ThanosGrove from 'react-thanos-grove/es/components/ThanosGrove'
import 'react-thanos-grove/css/components/ThanosGrove/style.css'

  <ThanosGrove {...props} />
```

## Development by storybook
```
npm install
npm start storybook
```
- configuration files list in `.storybook` directory
- story files list in `.stories` directory


## Test
```
npm run test
```
- `__tests__`
  - unit test running by `jest`
  - use `test:update` to update jest `snapshot`
