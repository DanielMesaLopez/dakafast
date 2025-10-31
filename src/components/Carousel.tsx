import React, { useRef, useEffect, useState } from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window"); // 📱 ancho total de la pantalla
const bannerHeight = width * 0.25; // 🔹 altura proporcional al ancho (25%)

export const Carousel = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../assets/2.png"),
    require("../assets/public.png"),
    require("../assets/5.png"),
    require("../assets/4.png"),
    require("../assets/3.png"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
    }, 4000); // ⏱️ cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <CarouselContainer
      ref={scrollRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false} // 👈 evita scroll manual si solo quieres automático
    >
      {images.map((img, index) => (
        <Slide key={index}>
          <StyledImage source={img} />
        </Slide>
      ))}
    </CarouselContainer>
  );
};

// 💅 Estilos
const CarouselContainer = styled(ScrollView)`
  flex-direction: row;
  width: 100%;
  height: ${bannerHeight}px;
`;

const Slide = styled.View`
  width: ${width}px;
  height: ${bannerHeight}px;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image).attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 100%;
`;
