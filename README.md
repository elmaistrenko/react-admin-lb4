# react-admin-lb4

A JSONAPI compatible data provider for [loopback4](https://loopback.io/)

## Installation

```bash
# via npm
npm install react-admin-lb4

# via yarn
yarn add react-admin-lb4
```

## Usage

Import this package, set the base url and pass it as the dataProvider to react-admin.

```javascript
import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import lb4Provider from 'react-admin-lb4';

const dataProvider = lb4Provider('http://localhost:3000');
const App = () => (
	<Admin dataProvider={dataProvider}>
  		<Resource name="projects" list={ListGuesser} />
  	</Admin>
);

export default App;
```

