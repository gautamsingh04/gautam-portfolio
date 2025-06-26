import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.section`
  padding: 3rem 2rem;
  background-color: #1b1b1b;
  color: #FFB085;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background-color: #2a2a2a;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #FFB085;
  color: #1b1b1b;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: transparent;
    color: #FFB085;
    border: 2px solid #FFB085;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.8rem;
  margin-top: 2rem;

  a {
    color: #FFB085;
    transition: 0.3s;
  }

  a:hover {
    color: #ffffff;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Heading>Contact Me</Heading>
      <Form
        action="https://formspree.io/f/xwpbwrbz"
        method="POST"
      >
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" rows="6" placeholder="Your Message" required />

        {/* ✅ Correct redirect path for GitHub Pages */}
        <input type="hidden" name="_next" value="https://gautamsingh04.github.io/gautam-portfolio/thanks" />

        <Button type="submit">Send Message</Button>
      </Form>

      <Icons>
        <a href="mailto:jyalagautam2.0@gmail.com"><FaEnvelope /></a>
        <a
          href="https://www.linkedin.com/in/gautam-singh-jyala-8b33b0276/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gautamsingh04"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </Icons>
    </Section>
  );
};

export default Contact;
