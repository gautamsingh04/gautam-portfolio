import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #1b1b1b;
  color: #ffb085;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 4rem;
  border-top: 1px solid #333;
`;

const Icons = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #ffb085;
    font-size: 1.5rem;
    transition: 0.3s;
  }

  a:hover {
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const Text = styled.p`
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Icons>
        <a href="https://github.com/gautamsingh04" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gautam-singh-jyala-8b33b0276/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:jyalagautam2.0@gmail.com">
          <FaEnvelope />
        </a>
      </Icons>
      <Text>&copy; {new Date().getFullYear()} Gautam Singh Jyala. All rights reserved.</Text>
    </FooterWrapper>
  );
};

export default Footer;
