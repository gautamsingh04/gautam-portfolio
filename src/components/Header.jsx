import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderWrapper = styled.header`
  background: #1B1B1B;
  color: #FFB085;
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  overflow: hidden;
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

const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: #2a2a2a;
  color: #FFB085;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const StatLabel = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

const Header = () => {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    axios.get("https://api.github.com/users/gautamsingh04")
      .then(res => setRepoCount(res.data.public_repos))
      .catch(console.error);
  }, []);

  return (
    <HeaderWrapper>
      <Avatar src={`${process.env.PUBLIC_URL}/Photoo.png`} alt="Gautam Singh Jyala" />
      <Name>Gautam Singh Jyala</Name>
      <Title>Software Engineer Developer | CSE '26 | Athlete | Exploring...</Title>
      <Tagline>Available for opportunities · Eager to learn · Great learner</Tagline>
      <Icons>
        <a href="https://github.com/gautamsingh04" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/gautam-singh-jyala-8b33b0276/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:jyalagautam2.0@gmail.com"><FaEnvelope /></a>
      </Icons>
      <ResumeButton
        href={`${process.env.PUBLIC_URL}/GautamResumee.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 View Resume
      </ResumeButton>

      <StatsWrapper>
        <StatCard>
          <StatNumber>{repoCount}</StatNumber>
          <StatLabel>Completed Projects</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>2.5+</StatNumber>
          <StatLabel>Years of Coding Experience</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>GenAI LLM</StatNumber>
          <StatLabel>Current Project</StatLabel>
        </StatCard>
      </StatsWrapper>
    </HeaderWrapper>
  );
};

export default Header;
