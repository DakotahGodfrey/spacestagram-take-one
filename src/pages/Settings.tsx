import React, { useState } from 'react';

const Settings = () => {
  const [useHD, setUseHD] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <main className='settings'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Settings</h1>
        <div className='settings-control'>
          <label htmlFor='hd-images'>Load Images in High Definition</label>
          <input id='hd-images' type='checkbox' />
        </div>
        <div className='settings-control'>
          <label htmlFor='dark-mode'>Use Dark Mode</label>
          <input id='dark-mode' type='checkbox' />
        </div>
        <button type='submit'>Update Settings</button>
      </form>
    </main>
  );
};

export default Settings;
