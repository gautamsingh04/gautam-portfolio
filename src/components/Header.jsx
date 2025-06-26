import React from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeaderWrapper = styled.header`
  background: #1B1B1B;
  color: #FFB085;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 1s ease-out;
  overflow: hidden;
`;

const FloatingIconLeft = styled.div`
  position: absolute;
  left: 2rem;
  top: 20%;
  font-size: 3rem;
  color: #FFB085;
  animation: ${float} 3s ease-in-out infinite;
`;

const FloatingIconRight = styled.div`
  position: absolute;
  right: 2rem;
  top: 60%;
  font-size: 3rem;
  color: #FFB085;
  animation: ${float} 3s ease-in-out infinite;
`;

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #FFFFFF;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
  color: #FFB085;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #E0E0E0;
`;

const Tagline = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #CCCCCC;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.8rem;
  margin: 1rem 0;

  a {
    color: #fff7e6;
    transition: 0.3s;
  }

  a:hover {
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const ResumeButton = styled.a`
  background-color: #fff7e6;
  color: #1B1B1B;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 1.5rem;
  transition: 0.3s;

  &:hover {
    background-color: transparent;
    color: #FFB085;
    border: 2px solid #FFB085;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Avatar src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Gautam Singh Jyala" />
      <Name>Gautam Singh Jyala</Name>
      <Title>BTech CSE 4th Year | Software Developer</Title>
      <Tagline>Available for opportunities · Eager to learn · Great learner</Tagline>
      <Icons>
        <a href="https://github.com/gautamsingh04" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gautam-singh-jyala-8b33b0276/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:jyalagautam2.0@gmail.com"><FaEnvelope /></a>
      </Icons>
      <ResumeButton href="/Gautam_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
  📄 View Resume
</ResumeButton>

    </HeaderWrapper>
  );
};

export default Header;
