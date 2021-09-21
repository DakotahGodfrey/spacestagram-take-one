import React from 'react';
import SpaceLogo from '../images/space-logo.svg';
import LightLogo from '../images/logo-light.svg';
import { useAppSelector } from '../app';
import { selectSettings } from '../app/slices/settings';
const Logo = () => {
  const settingsSlice = useAppSelector(selectSettings);
  const { darkModeSetting } = settingsSlice;
  return <img src={darkModeSetting ? LightLogo : SpaceLogo} alt='' />;
};

export default Logo;
