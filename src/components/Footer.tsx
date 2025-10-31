import React from "react";
import { Linking, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContent>
        {/* 🟣 Logo grande al lado izquierdo */}
        <LogoSection>
          <Logo
            source={require("../../src/assets/logotrasparente.png")}
            resizeMode="contain"
          />
        </LogoSection>

        {/* 🟢 Contacto */}
        <Section>
          <Title>Contacto</Title>
          <TextLine>
            Email:{" "}
            <Link
              onPress={() =>
                Linking.openURL("mailto:dakafastdomicilios@gmail.com")
              }
            >
              dakafastdomicilios@gmail.com
            </Link>
          </TextLine>
          <TextLine>Teléfono: +57 3224642942</TextLine>
        </Section>

        {/* 🔵 Redes sociales */}
        <Section>
          <Title>Redes sociales</Title>
          <SocialIcons>
            <IconButton
              onPress={() =>
                Linking.openURL("https://www.instagram.com/dakafastdomicilios/")
              }
            >
              <FontAwesome name="instagram" size={26} color="#fff" />
            </IconButton>

            <IconButton
              onPress={() => Linking.openURL("https://wa.me/573224642942")}
            >
              <FontAwesome name="whatsapp" size={26} color="#fff" />
            </IconButton>

            <IconButton
              onPress={() =>
                Linking.openURL("https://www.facebook.com/dakafastdomicilios")
              }
            >
              <FontAwesome name="facebook" size={26} color="#fff" />
            </IconButton>
          </SocialIcons>
        </Section>
      </FooterContent>

      {/* ⚫ Línea inferior */}
      <FooterBottom>
        <FooterText>
          © 2025 Dakafast, creado por Daniel Mesa. Todos los derechos
          reservados.
        </FooterText>
      </FooterBottom>
    </Container>
  );
};

/* 🎨 Estilos */
const Container = styled.View`
  background-color: #0c3c57;
  padding: 20px;
`;

const FooterContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoSection = styled.View`
  width: 30%;
  align-items: flex-start;
  justify-content: center;
`;

const Section = styled.View`
  width: 30%;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  width: 420px; /* 🔹 Aumentado el tamaño */
  height: 220px; /* 🔹 Mantiene buena proporción */
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  text-align: center;
`;

const TextLine = styled.Text`
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

const Link = styled.Text`
  color: #00bcd4;
  text-decoration: underline;
`;

const SocialIcons = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-top: 5px;
`;

const IconButton = styled(TouchableOpacity)`
  padding: 5px;
`;

const FooterBottom = styled.View`
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.3);
  padding-top: 10px;
  align-items: center;
`;

const FooterText = styled.Text`
  color: white;
  font-size: 12px;
  text-align: center;
`;
