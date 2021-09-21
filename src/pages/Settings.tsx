import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app';
import { selectSettings, updateSettings } from '../app/slices/settings';

const Settings = () => {
  const settingsSlice = useAppSelector(selectSettings);
  const { useHDSetting, darkModeSetting } = settingsSlice;
  const dispatch = useAppDispatch();
  const [useHD, setUseHD] = useState<boolean>(useHDSetting);
  const [darkMode, setDarkMode] = useState<boolean>(darkModeSetting);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(useHD, darkMode);
    dispatch(
      updateSettings({ useHDSetting: useHD, darkModeSetting: darkMode })
    );
  };
  return (
    <main className='settings'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Settings</h1>
        <div className='settings-control'>
          <label htmlFor='hd-images'>Load Images in High Definition</label>
          <input
            id='hd-images'
            type='checkbox'
            onChange={() => setUseHD(!useHD)}
          />
        </div>
        <div className='settings-control'>
          <label htmlFor='dark-mode'>Use Dark Mode</label>
          <input
            id='dark-mode'
            type='checkbox'
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <button type='submit'>Update Settings</button>
      </form>
    </main>
  );
};

export default Settings;
