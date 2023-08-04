import styled from "styled-components";

export const AppWrapper = styled.section`
  margin: 10px 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin:0;
    padding:0;
  }
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  ul {
    margin: 0;
    padding:0
  }
  li{
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`