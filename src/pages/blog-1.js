import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const StyledContainer = styled.div`

`
const StyledHeader = styled.div`

`

const StyledH1 = styled.h1`


`


const firstBlog = () => {
  return (
    <Layout>
      <Seo title="THE BRIDE OF CHRIST IN THESE LAST DAYS" />
      <StyledContainer>
        <StyledHeader>
      <StyledH1>THE BRIDE OF CHRIST IN THESE LAST DAYS</StyledH1>

        </StyledHeader>

      </StyledContainer>
    </Layout>
  )
};

export default firstBlog;
