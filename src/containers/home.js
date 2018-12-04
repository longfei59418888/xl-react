import React from 'react';

// const Tes = lazy(() => import('./test'));
import Tes from './test';
// const Tes = React.lazy(() => import('./test'));

// console.log(Tes);
// const Home = () => (
//   <div>
//     <Tes />
//   </div>
//   );
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
