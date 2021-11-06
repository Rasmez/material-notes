import type { NextPage } from 'next';
import * as React from 'react';
import Notes from '../components/Notes';
import Create from '../components/Create';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Notes />
      <Create />
    </React.Fragment>
  )
}

export default Home
