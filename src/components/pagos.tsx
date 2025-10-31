import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const Pagos = () => {
  return (
    <Container>
      <PaymentsImage source={require("../../src/assets/mediospagos.png")} />
    </Container>
  );
};

const Container = styled.View`
  width: ${screenWidth}px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const PaymentsImage = styled.Image`
  width: 100%;
  height: 340px;
`;
