import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components'; // Acessando tema externo
import {  WiDaySunny, WiMoonWaxingCrescent5  } from 'react-icons/wi';
import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
};

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext); // Acessando tema externo

  return (
    <Container>
        Hi

        <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={<WiMoonWaxingCrescent5 size={18} />}
            uncheckedIcon={<WiDaySunny size={18} />}
            height={20}
            width={40}
            handleDiameter={18}
            offColor={colors.themeOff}
            onColor={colors.themeOn}
        />

    </Container>
  );
};

export default Header;
