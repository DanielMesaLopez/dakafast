import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { ScrollView, View } from "react-native";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { FlipCard } from "../components/FlipCard";
import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/Footer";
import { lightTheme } from "../themes/theme";
import { HomeCarousels } from "../components/HomeCarousels";
import { Pagos } from "../components/pagos";

export const HomeScreen = () => {
  const [theme, setTheme] = useState(lightTheme);

  // 🟢 Scroll principal y referencias a secciones
  const scrollRef = useRef<ScrollView>(null);
  const inicioRef = useRef<View>(null);
  const serviciosRef = useRef<View>(null);
  const contactoRef = useRef<View>(null);

  // 📌 Función que maneja la navegación del Header
  const handleSelectSection = (section: string) => {
    let ref;

    switch (section) {
      case "Inicio":
        ref = inicioRef;
        break;
      case "Servicios":
        ref = serviciosRef;
        break;
      case "Contacto":
        ref = contactoRef;
        break;
      default:
        return;
    }

    // Calcula la posición de la sección y hace scroll animado
    ref.current?.measureLayout(
      scrollRef.current?.getInnerViewNode(),
      (x, y) => {
        scrollRef.current?.scrollTo({ y, animated: true });
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header onSelectSection={handleSelectSection} />

        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          directionalLockEnabled={true}
        >
          {/* 🟣 Sección Inicio */}
          <Section ref={inicioRef}>
            <Carousel />
          </Section>

          {/* 🟢 Sección Servicios */}
          <Section ref={serviciosRef}>
            <SectionRow>
              <ConductorImage
                source={require("../../src/assets/conductor.png")}
              />

              <RightContent>
                <SectionTitle>🚀 Servicios Dakafast</SectionTitle>

                <CardsContainer>
                  <FlipWrapper>
                    <FlipCard
                      title="Aleado para tu negocio"
                      description="Entregamos más que paquetes: entregamos confianza con precisión, velocidad y cuidado en cada movimiento."
                      image={require("../../src/assets/domic.png")}
                    />
                  </FlipWrapper>

                  <FlipWrapper>
                    <FlipCard
                      title="Domicilio Express"
                      description="Tu pedido no es solo una dirección. Es una historia, una urgencia, una necesidad y en Dakafast, la tratamos como tal."
                      image={require("../../src/assets/grupos.png")}
                    />
                  </FlipWrapper>

                  <FlipWrapper>
                    <FlipCard
                      title="Compras, Recogidas y Encomiendas"
                      description="Ofrecemos una logística integral para el transporte de tus alimentos, medicamentos y encargos personales, con rapidez y confianza."
                      image={require("../../src/assets/motsr.png")}
                    />
                  </FlipWrapper>
                </CardsContainer>
              </RightContent>
            </SectionRow>

            <HomeCarousels />
            <Pagos />
          </Section>

          {/* 🔵 Sección Contacto */}
          <Section ref={contactoRef}>
            <Footer />
          </Section>
        </ScrollView>

        <FloatingButtons />
      </Container>
    </ThemeProvider>
  );
};

/* 🎨 Estilos */
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Section = styled.View`
  padding-vertical: 30px;
`;

const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-horizontal: 40px;
`;

const ConductorImage = styled.Image`
  width: 45%;
  height: 450px;
  resize-mode: contain;
  margin-right: 15px;
`;

const RightContent = styled.View`
  flex: 1;
  align-items: center;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
`;

const CardsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-horizontal: 10px;
  margin-top: 20px;
`;

const FlipWrapper = styled.View`
  width: 30%;
  max-width: 300px;
  align-items: center;
  overflow: hidden;
`;
