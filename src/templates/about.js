import React from "react";
import Layout from "../components/base/Layout";
import styled from "styled-components";

const AboutPageWrapper = styled.div`
  background-color: white;
  height: 100%;
  width: auto;
  border-radius: 1px solid red;
`;

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageWrapper>
        <h1>This is the About Page!</h1>
      </AboutPageWrapper>
    </Layout>
  );
};

export default AboutPage;
