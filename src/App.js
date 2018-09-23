import React, { Component, Fragment } from 'react';
import { ReactHeader } from './ReactHeader'
import { TestBox } from './TestBox'
import { MultiSelect } from './MultiSelect'

const options = {
  1: {
    value: 'Cookies',
    checked: false
  },
  2: {
    value: 'Pizza',
    checked: false
  },
  3: {
    value: 'IceCream',
    checked: false
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReactHeader />
        <TestBox>
          <MultiSelect options={options}/>
        </TestBox>
      </Fragment>
    );
  }
}

export default App;
