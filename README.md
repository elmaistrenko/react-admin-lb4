#Intro
[Loopback 4](https://loopback.io/) provider for [react-admin](https://marmelab.com/react-admin/).

#Usage
``npm i react-admin-lb4``

```javascript
import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import lb4Provider from 'react-admin-lb4';

class MyComponent extends Component {
  render() {
    return (
        <Admin dataProvider={lb4Provider('http://localhost:3000')}>
          <Resource name="resource" list={ListGuesser} />
        </Admin>
    );
  }
```