import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components'; // Acessando tema externo
import {  WiDaySunny, WiMoonWaxingCrescent5  } from 'react-icons/wi';
import Switch from 'react-switch';

const Header: React.FC = () => {

    const { colors } = useContext(ThemeContext); // Acessando tema externo

  return (
    <Container>
        Hi

        <Switch 
            onChange={() => {}}
            checked={true}
            checkedIcon={<WiDaySunny size={18} />}
            uncheckedIcon={<WiMoonWaxingCrescent5 size={18} />}
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
