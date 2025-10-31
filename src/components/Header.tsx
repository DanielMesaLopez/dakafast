import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface HeaderProps {
  onSelectSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectSection }) => {
  return (
    <Container>
      <LogoImage
        source={require("../../src/assets/LogodaKa.png")}
        resizeMode="contain"
      />

      <Menu>
        {["Inicio", "Servicios", "Contacto"].map((item) => (
          <TouchableOpacity key={item} onPress={() => onSelectSection(item)}>
            <MenuItem>{item}</MenuItem>
          </TouchableOpacity>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({ theme }) => theme.barra};
  height: 60px; /* Barra más fina */
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;

const LogoImage = styled.Image`
  width: 200px; /* tamaño más grande del logo */
  height: 360px;
`;

const Menu = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

const MenuItem = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;
