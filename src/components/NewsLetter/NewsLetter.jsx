import React from "react";
import { NewsLetterContainer, Title, Form, Input, Button } from "./NewsLetterStyles";
const NewsLetter = () => {
  return (
    <NewsLetterContainer>
          <Title>
            Subscribe to get information, latest news and other <br/> interesting offers
            about Madari
          </Title>
          <Form>
            <Input type="text" placeholder="email"/>
            <Button>Subscribe</Button>
          </Form>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
