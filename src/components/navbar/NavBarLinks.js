import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaYelp } from "react-icons/fa"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "Home",
      },
      {
        id: 1,
        path: "/",
        text: "Menu",
      },
      {
        id: 2,
        path: "/",
        text: "Order Takeout",
      },
      {
        id: 3,
        path: "/",
        text: "Contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
        <ul className="social">
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYelp />
            </a>
          </li>
        </ul>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  margin: 0rem auto;
  li {
    list-style-type: none;
  }
  svg {
    padding-top: 5px;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    color: var(--darkGray);
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background: var(--mainColor);
      color: var(--white);
    }
  }
  .social {
    padding-left: 1rem;
    ul {
      list-style-type: none;
    }
    li {
      display: inline;
      padding-left: 0.2rem;
    }
    a {
      font-size: 1.5rem;
      color: var(--mainColor);
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--darkGray);
      }
    }
  }
  height: ${props => (props.open ? "200px" : "0px")};
  overflow: hidden;
  transition: all 0.1s ease-in-out;
  @media (min-width: 768px) {
    /* border: 1px dotted blue; */
    width: 75vw;
    padding-right: 3rem;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav-link {
      font-size: 1.2rem;
      padding: 0rem 1rem;
      color: var(--mainColor);
    }
    .nav-link:hover {
      color: var(--white);
      background: none;
    }
    .social {
      ul {
        list-style-type: none;
      }
      li {
        display: inline;
      }
      svg {
        padding-top: 0rem;
      }
      a {
        font-size: 1.5rem;
        color: var(--mainColor);
        transition: all 0.2s ease-in-out;
        &:hover {
          color: var(--white);
        }
      }
    }
  }
`

export default NavBarLinks
