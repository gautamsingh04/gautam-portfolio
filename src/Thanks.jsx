import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: #1b1b1b;
  color: #FFB085;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #eee;
`;

const Thanks = () => {
  return (
    <Wrapper>
      <Heading>Thank You!</Heading>
      <Message>Your message has been sent successfully. I'll get back to you soon.</Message>
    </Wrapper>
  );
};

export default Thanks;
