import React, { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

interface FlipCardProps {
  title: string;
  description: string;
  image: any; // Ruta require(...)
}

export const FlipCard: React.FC<FlipCardProps> = ({
  title,
  description,
  image,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Pressable
      // Para entornos con cursor (web) se activan estos eventos
      onHoverIn={() => setFlipped(true)}
      onHoverOut={() => setFlipped(false)}
      // Mantén el toque para móviles si quieres que también se voltee al tocar
      onPress={() => setFlipped((prev) => !prev)}
      style={{ alignSelf: "center" }} // ejemplo, puedes eliminarlo
    >
      <Card>
        {!flipped ? (
          <>
            <CardImage source={image} resizeMode="cover" />
            <CardTitle>{title}</CardTitle>
          </>
        ) : (
          <CardBack>
            <CardDescription>{description}</CardDescription>
          </CardBack>
        )}
      </Card>
    </Pressable>
  );
};

// 🎨 Estilos (los mismos que tenías)
const Card = styled.View`
  width: 300px;
  height: 350px;
  background-color: #2d74ff;
  border-radius: 100px;
  margin: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 8;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 65%;
  object-fit: cover;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  flex-shrink: 1;
`;

const CardBack = styled.View`
  flex: 1;
  width: 100%;
  padding: 12px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CardDescription = styled.Text`
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  line-height: 18px;
  padding-horizontal: 50px;
  max-height: 90%;
  overflow: hidden;
`;
