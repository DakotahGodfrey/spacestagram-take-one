import React from 'react';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='container'>
        <div className='spinner-circle start'></div>
        <div className='spinner-circle middle'></div>
        <div className='spinner-circle end'></div>
      </div>
    </div>
  );
};

export default Loader;
