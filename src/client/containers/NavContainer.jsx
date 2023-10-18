import React from 'react';
import CollectionCreator from '../components/CollectionCreator';
import CollectionDisplay from '../components/CollectionDisplay';

const MainContainer = () => {
  console.log('main container is running');
  const buttonHandler = input => {
    console.log(input);
  };
  return (
    <div className='navbox'>
      {/* <h1 className='orangesans'>Collections</h1> */}
      <CollectionCreator buttonHandler={buttonHandler} />
      <CollectionDisplay />
    </div>
  );
};

export default MainContainer;
