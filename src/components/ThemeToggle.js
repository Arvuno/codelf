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
      icon: 'sun',
      description: 'Light theme'
    },
    {
      key: THEMES.DARK,
      text: 'Dark', 
      value: THEMES.DARK,
      icon: 'moon',
      description: 'Dark theme'
    },
    {
      key: THEMES.AUTO,
      text: 'Auto',
      value: THEMES.AUTO,
      icon: 'circle outline',
      description: 'Follow system preference'
    }
  ];

  const getCurrentIcon = () => {
    if (isAuto) return 'circle outline';
    return isDark ? 'moon' : 'sun';
  };

  const getCurrentLabel = () => {
    if (isAuto) return 'Auto';
    return isDark ? 'Dark' : 'Light';
  };

  return (
    <div className="theme-toggle-wrapper">
      <Dropdown
        trigger={
          <div 
            className="theme-toggle-btn animated fadeInDown" 
            title={`Current theme: ${getCurrentLabel()}. Click to change theme`}
            role="button"
            tabIndex={0}
            aria-label="Theme selector"
          >
            <Icon name={getCurrentIcon()} />
          </div>
        }
        options={themeOptions}
        value={theme}
        onChange={(e, { value }) => setTheme(value)}
        direction="left"
        pointing="top right"
        className="theme-dropdown"
        aria-label="Select theme"
      />
    </div>
  );
};

export default ThemeToggle;