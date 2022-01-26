import React from 'react';
import styled from "styled-components"


const StyledFooter = styled.section`
padding-left: 10rem;
  padding-top: 3rem;
  padding-bottom: 17rem;
  background: #ce40c4;
  background: -moz-linear-gradient(top, #ce40c4 0%, #a42388 50%, #c52465 100%);
  background: -webkit-linear-gradient(
    top,
    #ce40c4 0%,
    #a42388 50%,
    #c52465 100%
  );
  background: linear-gradient(to bottom, #ce40c4 0%, #a42388 50%, #c52465 100%);
`

const Footer = () => {
    return (
        <StyledFooter>
            <h1>Footer component</h1>
      </StyledFooter>
  )
};

export default Footer;
