import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FFB085;
  text-align: center;
  padding: 2rem;
`;

const Thanks = () => {
  return (
    <Wrapper>
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully. I’ll get back to you soon.</p>
    </Wrapper>
  );
};

export default Thanks;
