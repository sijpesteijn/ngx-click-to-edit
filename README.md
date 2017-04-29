# ng2 delete confirm
[![Build Status](https://travis-ci.org/sijpesteijn/ng2-delete-confirm.svg?branch=master)](https://travis-ci.org/sijpesteijn/ng2-delete-confirm)
[![codecov](https://codecov.io/gh/sijpesteijn/ng2-delete-confirm/branch/master/graph/badge.svg)](https://codecov.io/gh/sijpesteijn/ng2-delete-confirm)
[![npm version](https://badge.fury.io/js/ng2-delete-confirm.svg)](http://badge.fury.io/js/ng2-delete-confirm)
[![devDependency Status](https://david-dm.org/sijpesteijn/ng2-delete-confirm/dev-status.svg)](https://david-dm.org/sijpesteijn/ng2-delete-confirm?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/sijpesteijn/ng2-delete-confirm.svg)](https://github.com/sijpesteijn/ng2-delete-confirm/issues)
[![GitHub stars](https://img.shields.io/github/stars/sijpesteijn/ng2-delete-confirm.svg)](https://github.com/sijpesteijn/ng2-delete-confirm/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sijpesteijn/ng2-delete-confirm/master/LICENSE)

## Demo
https://sijpesteijn.github.io/ng2-delete-confirm/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ng2-delete-confirm
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { Ng2DeleteConfirmModule } from 'ng2-delete-confirm';

@NgModule({
  imports: [
    Ng2DeleteConfirmModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<ng2-delete-confirm></ng2-delete-confirm>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/sijpesteijn/ng2-delete-confirm/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ng2-delete-confirm/bundles/ng2-delete-confirm.umd.js"></script>
<script>
    // everything is exported ng2DeleteConfirm namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://sijpesteijn.github.io/ng2-delete-confirm/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
