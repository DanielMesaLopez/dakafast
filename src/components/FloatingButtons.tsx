import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Linking } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // 👈 Importas los íconos

export const FloatingButtons = () => {
  return (
    <Container>
      {/* Botón WhatsApp */}
      <TouchableOpacity
        onPress={() => Linking.openURL("https://wa.me/573224642942")}
      >
        <CircleButton bgColor="#25D366">
          <FontAwesome name="whatsapp" size={30} color="white" />
        </CircleButton>
      </TouchableOpacity>

      {/* Botón Instagram */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.instagram.com/dakafastdomicilios/")
        }
      >
        <CircleButton bgColor="#C13584">
          <FontAwesome name="instagram" size={30} color="white" />
        </CircleButton>
      </TouchableOpacity>

      {/* Botón WhatsApp */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.facebook.com/dakafastdomicilios/")
        }
      >
        <CircleButton bgColor="#3b5998">
          <FontAwesome name="facebook" size={30} color="white" />
        </CircleButton>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  bottom: 30px;
  right: 20px;
  gap: 12px;
`;

const CircleButton = styled.View<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  elevation: 5; /* sombra Android */
  shadow-color: #000; /* sombra iOS */
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;
