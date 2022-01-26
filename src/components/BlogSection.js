import React from 'react';
import styled from "styled-components"
import BlogCard from './BlogCard';
import {blogPost} from '../../blogPost'



const StyledSection = styled.div`
  margin-top: 5rem;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 568px) {
    margin-left: 0;
  }
`

const Underline = styled.div`
  height: 5px;
  width: 50px;
  background-color: #af3277;
  margin-right: 1rem;
  margin-top: 0.4rem;
  @media (max-width: 768px) {
    /* width: 400px; */
  }
`

const StyledH5 = styled.h5`
  color: #000;
  font-size: 15px;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
  }

  @media screen and (max-width: 568px) {
    margin-bottom: 1rem;
  }
`

const StyledHeading = styled.section`
  display: flex;
  @media (max-width: 768px) {
  }
  @media screen and (max-width: 568px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const StyledBlogSection = styled.section`
display: flex;
justify-content: space-between;
`


const BlogSection = () => {
    return (
      <StyledSection>
        <StyledHeading>
          <Underline />
          <StyledH5>FROM THE BLOG</StyledH5>
            </StyledHeading>
            <StyledBlogSection>
                {blogPost.map(post => (
                    
                <BlogCard {...post} />
                ))}
            </StyledBlogSection>
      </StyledSection>
    )
};

export default BlogSection;
