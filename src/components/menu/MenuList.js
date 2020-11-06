import React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"

const MenuList = () => {
  return (
    <StyledMenu>
      {/* Beef Section */}
      <div className="category">
        <h4>Beef</h4>
        <p>
          All entrees will be accompanied with Matsuri White Rice, House Potato
          Salad, and Daily Namasu
        </p>
      </div>
      <div className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Hayashi Beef Rice"
            description="Beef, Onions, and Mushroom in Demi Sauce"
          />
          <MenuItem
            dish="Maui Style Short Rib"
            description="Short Rib in our House Soy/Garlic Marinade and Grilled"
          />
          <MenuItem
            dish="Soy Ginger Beef"
            description="Our Version of Teriyaki Beef Sauteed with Vegetables"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Gyu Don"
            description="Chef Masa's Own Special Recipe. Slow Cook Thin Slices of Beef Braised in our Special Sauce and Served with Onsen Tamago"
          />
          <MenuItem
            dish="Loco Moco"
            description="Homemade Hamburger Steak, Two Eggs, and Kabayaki Gravy"
          />
        </div>
      </div>
      {/* Pork Section */}
      <div className="space"></div>
      <div className="category">
        <h4>Pork</h4>
        <p>
          All entrees will be accompanied with Matsuri White Rice, House Potato
          Salad, and Daily Namasu
        </p>
      </div>
      <div className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Tonkatsu"
            description="Boneless Rib Chop Battered in Panko. Served with DK Katsu Sauce"
          />
          <MenuItem
            dish="Grilled Pork Chop"
            description="Marinated Pork Chop. Grilled and Served with Pineapple Mustard Sauce"
          />
          <MenuItem
            dish="Kim Chee Pork"
            description="Por Sauteed with Homemade Kim Chee and Vegetables"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Kawagoe Gyoza"
            description="Our Famous Homemade Gyoza. Made Fresh Daily."
          />
          <MenuItem
            dish="Yakisoba"
            description="Mio Pasta Spaghetti Noodles Sauteed with Pork and Vegetables"
          />
        </div>
      </div>
      {/* Chicken Section */}
      <div className="space"></div>
      <div className="category">
        <h4>Chicken</h4>
        <p>
          All entrees will be accompanied with Matsuri White Rice, House Potato
          Salad, and Daily Namasu
        </p>
      </div>
      <div className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Chicken Katsu Curry"
            description="Chicken Katsu Served with Special Curry Sauce"
          />
          <MenuItem
            dish="Nori/Shiso Chicken"
            description="Marinated Chicken Thigh, Mochiko Flour, Nori and Shiso"
          />
          <MenuItem
            dish="Soy Ginger Chicken"
            description="Our Version of Teriyaki Chicken"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Kawagoe Karaage"
            description="Izakawa Kawagoe Famous Chicken Karaage"
          />
          <MenuItem
            dish="Garlic Chili Chicken"
            description="Our Karaage Chicken Dressed in a Chili/Garlic Dressing"
          />
        </div>
      </div>
      {/* Fish Section */}
      <div className="space"></div>
      <div className="category">
        <h4>Fish & Seafood</h4>
        <p>
          All entrees will be accompanied with Matsuri White Rice, House Potato
          Salad, and Daily Namasu
        </p>
      </div>
      <div className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Ahi Katsu"
            description="Ahi Loin Battered in Panko and Shallow Fried. Served with our Homemade pickled aioli"
          />
          <MenuItem
            dish="Salmon Furikake Katsu"
            description="Salmon Battered in Panko and 'AO' Nori and Shallow Fried. Served with our Homemade Pickled Aioli"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Miso Salmon"
            description="Pacific Salmon Marinated in Miso and Grilled"
          />
          <MenuItem
            dish="Seafood Croquette"
            description="Bay Scallop, Shrimp and Imitation Crab. Chef Masa's Honey Shallot Sauce"
          />
        </div>
      </div>
      {/* Vegetarian Section */}
      <div className="space"></div>
      <div className="category">
        <h4>Vegetarian</h4>
        <p>
          All entrees will be accompanied with Matsuri White Rice, House Potato
          Salad, and Daily Namasu
        </p>
      </div>
      <div className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Cauliflower Kalbi"
            description="Homemade Soy/Garlic Marinated and Grilled"
          />
          <MenuItem
            dish="Miso Eggplant"
            description="Broiled Eggplant Glazed with Miso and Furikake/Parmesan Breadcrumbs"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Beyond Meat 'Hamburger Steak'"
            description="Grilled Plant Based Patty Accompanied with 'Masa Kaitan Sauce'"
          />
        </div>
      </div>
    </StyledMenu>
  )
}

const StyledMenu = styled.div`
  width: 75%;
  padding: 3rem 0rem;
  margin: 0rem auto;
  .space {
    padding: 1.5rem 0rem;
  }
  .category {
    text-align: center;
    margin-bottom: 20px;
    color: var(--mainColor);
    h4 {
      font-weight: bold;
      font-size: 2rem;
      text-transform: uppercase;
      font-family: "trebuchet";
    }
  }
  .menu-container {
    /* border: 1px solid red; */
    width: 100%;
    margin: 0rem auto;
    display: flex;
    justify-content: space-between;
  }
  .column {
    /* border: 1px solid red; */
    flex-basis: 48%;
  }
`

export default MenuList
