import React from 'react';

const CollectionCreator = props => {
  return (
    <div>
      <span className='orangesans'>Create New Collection:</span>
      <input id='collectionLabel' type='text' placeholder='Label'></input>
      <button
        onClick={() => {
          props.buttonHandler(document.querySelector('#collectionLabel').value);
        }}>
        Add Collection
      </button>
    </div>
  );
};

export default CollectionCreator;
