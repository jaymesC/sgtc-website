import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import BlogCard from "../components/BlogCard"
import { blogPost } from "../../blogPost"


const StyledBlogContainer = styled.div`
margin-top: 2rem;
margin-left: 8rem;
margin-right: 10rem;
margin-bottom: 5rem;
@media (max-width: 768px) {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
    
  }
  
  @media screen and (max-width: 568px) {
    margin-right: 1rem;

  }
`

const StyledWriteUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 568px) {
    margin-bottom: 2rem;

  }
`

const StyledBlogSection = styled.section`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
    @media screen and (max-width: 568px) {
      margin-left: 0;
      margin-right: 2rem;
    }
  `

const StyledH1 = styled.h1`
  @media screen and (max-width: 568px) {
    font-size: 20px;
  }
`
const StyledP = styled.p`
  font-size: 18px;
  padding-top: 1rem;
  @media screen and (max-width: 568px) {
      font-size: 14px;

    }
`


const blog = () => (
  <Layout>
    <Seo title="Blog" />
    <StyledBlogContainer>
      <StyledWriteUp>
        <StyledH1> Our Blog</StyledH1>
        <StyledP>Recent posts to uplift your Spirit...</StyledP>
      </StyledWriteUp>
      <StyledBlogSection>
        {blogPost.map(post => (
          <BlogCard {...post} />
        ))}
      </StyledBlogSection>
    </StyledBlogContainer>
  </Layout>
)

export default blog
