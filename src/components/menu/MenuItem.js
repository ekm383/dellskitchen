import React from "react"
import styled from "styled-components"

const MenuItem = ({ dish, description }) => {
  return (
    <StyledMenuItem>
      <h4>{dish}</h4>
      <p>{description}</p>
    </StyledMenuItem>
  )
}

const StyledMenuItem = styled.div`
  margin: 1rem 0rem;
  h4 {
    color: var(--mainColor);
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: "trebuchet";
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: var(--mainColor);
  }
`

export default MenuItem
