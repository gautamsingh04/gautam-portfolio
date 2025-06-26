import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #1b1b1b;
`;

const Heading = styled.h2`
  color: #FFB085;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  color: #ddd;
  max-width: 850px;
  margin: 0 auto 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const Links = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  a {
    color: #FFB085;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: 0.3s;
  }

  a:hover {
    text-decoration: underline;
    color: #ffa768;
  }
`;

const About = () => {
  return (
    <Section>
      <Heading>About Me</Heading>
      <Paragraph>
        I'm <strong>Gautam Singh Jyala</strong>, a passionate and dedicated final-year BTech CSE student with a deep interest in software development and system-level programming. I enjoy working on challenging problems and creating meaningful, efficient solutions.
      </Paragraph>
      <Paragraph>
        My experience includes building a Mini Operating System, a Hybrid Compiler-Interpreter, and data-driven ML models for real-world problems like banana life span and passenger survival prediction. I thrive on writing clean, optimized code and understanding the internals of how things work.
      </Paragraph>
      <Paragraph>
        Proficient in <strong>C, C++, Java, Python, OOPs, DBMS, OS, CN, PHP, HTML, CSS, JS</strong>, and frameworks like <strong>React</strong>, I also work with tools like MySQL, Cisco Packet Tracer, and Git. I'm always open to new challenges and love learning by doing.
      </Paragraph>
      <Links>
        <a href="https://leetcode.com/u/gautam_singh_jyala-11/" target="_blank">🔗 LeetCode</a>
        <a href="https://www.geeksforgeeks.org/user/jyalagaxz2k/" target="_blank">🔗 GeeksForGeeks</a>
        <a href="mailto:jyalagautam2.0@gmail.com">📧 jyalagautam2.0@gmail.com</a>
      </Links>
    </Section>
  );
};

export default About;
