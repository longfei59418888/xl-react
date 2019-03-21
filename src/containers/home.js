import React from 'react';
import Tes from './test';

class Home extends React.Component {
  constructor() {
    super();
    const test = 1;
    console.log(test);
  }
  render() {
    return (
      <div>
        <Tes />
      </div>
    );
  }
}

export default Home;
