import React from "react";
import styled from "styled-components";
import { FaGithub, FaCogs, FaCode, FaDatabase } from "react-icons/fa";

const Section = styled.section`
  padding: 3rem 2rem;
  background-color: #1b1b1b;
`;

const Heading = styled.h2`
  color: #FFB085;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: #FFB085;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background-color: #1f1f1f;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
  transition: 0.4s;
  position: relative;
  box-shadow: 0 0 10px rgba(255, 176, 133, 0.05);

  &:hover {
    transform: translateY(-5px);
    border-color: #FFB085;
    box-shadow: 0 0 15px rgba(255, 176, 133, 0.3);
  }
`;

const Title = styled.h3`
  color: #FFB085;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

const Link = styled.a`
  color: #FFB085;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

const IconBox = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  color: #FFB085;
`;

const projects = [
  {
    name: "MiniOS",
    desc: "A basic operating system written from scratch with bootloader, filesystem, and a shell in C & x86 ASM.",
    link: "https://github.com/gautamsingh04/MiniOS",
    icon: <FaCogs />,
  },
  {
    name: "Hybrid Compiler Interpreter",
    desc: "Custom language that includes a lexer, parser, AST, interpreter, and stack-based VM.",
    link: "https://github.com/gautamsingh04/HYBRID-CI-compiler-Interpreter-",
    icon: <FaCode />,
  },
  {
    name: "Banana Life Span Prediction",
    desc: "ML model to predict banana spoilage using image classification techniques.",
    link: "https://github.com/gautamsingh04/Banana-Life-Span-Prediction",
    icon: <FaDatabase />,
  },
  {
    name: "Titanic Survival Prediction",
    desc: "ML-based project to predict survival chances of Titanic passengers based on dataset analysis.",
    link: "https://github.com/gautamsingh04/Titanic-Survival-Prediction",
    icon: <FaDatabase />,
  },
  {
    name: "Hospital Management System",
    desc: "Database-backed web application to manage patients, doctors, and appointments.",
    link: "https://github.com/gautamsingh04/Hospital-Management-Sytsem",
    icon: <FaDatabase />,
  },
];

const Projects = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <ProjectsGrid>
        {projects.map((proj, i) => (
          <Card key={i}>
            <IconBox>{proj.icon}</IconBox>
            <Title>{proj.name}</Title>
            <Desc>{proj.desc}</Desc>
            <Link href={proj.link} target="_blank" rel="noreferrer">
              <FaGithub /> View on GitHub
            </Link>
          </Card>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;
