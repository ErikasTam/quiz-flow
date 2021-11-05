import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => (
    <>
      <Title>Get back in shape.</Title>
      <Link to="/test-day">
        <Button>Start The Quiz</Button>
      </Link>
    </>
);

const Title = styled.h1`
  margin-top: 15rem;
  text-align: center;
`;

const Button = styled.div`
  width: 260px;
  height: 48px;
  margin: 0 auto;
  background-color: #AA00FF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
  border-radius: 8px;
  cursor: pointer;
`;

export default HomePage;
