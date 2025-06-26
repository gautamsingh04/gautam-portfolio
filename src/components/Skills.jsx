import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCode, FaDatabase, FaTools, FaRobot, FaGlobe, FaLaptopCode } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SkillsWrapper = styled.section`
  background: #1b1b1b;
  padding: 4rem 2rem;
  color: #1B1B1B;
`;

const Title = styled.h2`
  color: #ffb085;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1s ease forwards;
`;

const CategoryTitle = styled.h3`
  color: #ffb085;
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background: #fff7e6;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  color: #1B1B1B;
  border: 1px solid #e0cfc2;
  font-size: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #ffe8cc;
    box-shadow: 0 4px 12px rgba(255, 176, 133, 0.3);
    border-color: #ffb085;
  }
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Title>Technical Skills</Title>

      <SkillCategory>
        <CategoryTitle><FaCode /> Programming Languages</CategoryTitle>
        <SkillList>
          <SkillItem>C</SkillItem>
          <SkillItem>C++</SkillItem>
          <SkillItem>Java</SkillItem>
          <SkillItem>Python</SkillItem>
          <SkillItem>Assembly Language</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle><FaGlobe /> Full Stack Development</CategoryTitle>
        <SkillList>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>PHP</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle><FaRobot /> ML / AI / DL</CategoryTitle>
        <SkillList>
          <SkillItem>Machine Learning</SkillItem>
          <SkillItem>Deep Learning</SkillItem>
          <SkillItem>Artificial Intelligence</SkillItem>
          <SkillItem>Scikit-learn</SkillItem>
          <SkillItem>Matplotlib</SkillItem>
          <SkillItem>Pandas</SkillItem>
          <SkillItem>Numpy</SkillItem>
          <SkillItem>Jupyter Notebook</SkillItem>
          <SkillItem>Seaborn</SkillItem>
          <SkillItem>Kaggle</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle><FaDatabase /> Database</CategoryTitle>
        <SkillList>
          <SkillItem>MySQL</SkillItem>
          <SkillItem>DBMS</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle><FaLaptopCode /> Systems</CategoryTitle>
        <SkillList>
          <SkillItem>Operating Systems</SkillItem>
          <SkillItem>Computer Networks</SkillItem>
          <SkillItem>Compiler Design</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle><FaTools /> Tools</CategoryTitle>
        <SkillList>
          <SkillItem>Git</SkillItem>
          <SkillItem>GitHub</SkillItem>
          <SkillItem>Cisco Packet Tracer</SkillItem>
          <SkillItem>VS Code</SkillItem>
        </SkillList>
      </SkillCategory>
    </SkillsWrapper>
  );
};

export default Skills;
