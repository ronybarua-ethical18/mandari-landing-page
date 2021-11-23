import React from "react";
import { NewsLetterContainer, Title, Form, Input, Button, ContentWrapper } from "./NewsLetterStyles";
const NewsLetter = () => {
  return (
    <NewsLetterContainer>
          <ContentWrapper>
            <Title>
              Subscribe to get information, latest news and other <br/> interesting offers
              about Madari
            </Title>
            <Form>
              <Input type="text" placeholder="email"/>
              <Button>Subscribe</Button>
            </Form>
          </ContentWrapper>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
