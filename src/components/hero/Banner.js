import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
padding-top: 4rem;
  .box {
    width: 80%;
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    color: var(--white);
    text-align: center;
  }
  .title {
    text-transform: uppercase;
    font-size: 9rem;
    font-weight: bold;
    line-height: 8rem;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  .subtitle {
    font-family: "trebuchet";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: lighter;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    padding-top: 5rem;
    .title {
      font-size: 4rem;
      line-height: 3.5rem;
    }
    .subtitle {
      font-size: 1.2rem;
    }
  }
`

export default Banner
