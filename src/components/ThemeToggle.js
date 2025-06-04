import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import { useTheme, THEMES } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme, isDark, isAuto } = useTheme();

  const themeOptions = [
    {
      key: THEMES.LIGHT,
      text: 'Light',
      value: THEMES.LIGHT,
      icon: 'sun'
    },
    {
      key: THEMES.DARK,
      text: 'Dark', 
      value: THEMES.DARK,
      icon: 'moon'
    },
    {
      key: THEMES.AUTO,
      text: 'Auto',
      value: THEMES.AUTO,
      icon: 'circle outline'
    }
  ];

  const getCurrentIcon = () => {
    if (isAuto) return 'circle outline';
    return isDark ? 'moon' : 'sun';
  };

  return (
    <Dropdown
      trigger={
        <div className="theme-toggle-btn animated fadeInDown" title="Change theme">
          <Icon name={getCurrentIcon()} />
        </div>
      }
      options={themeOptions}
      value={theme}
      onChange={(e, { value }) => setTheme(value)}
      direction="left"
      pointing="top right"
    />
  );
};

export default ThemeToggle;