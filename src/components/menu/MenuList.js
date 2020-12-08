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
      <div id="menu" className="menu-container">
        <div className="column column1">
          <MenuItem
            dish="Hayashi Beef Rice $12"
            description="Beef, Onions, and Mushroom in Demi Sauce"
          />
          <MenuItem
            dish="Maui Style Short Rib $16"
            description="Short Rib in our House Soy/Garlic Marinade and Grilled"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Gyu Don $10"
            description="LIMITED 10 ORDERS PER DAY. Chef Masa's Own Special Recipe. Slow Cook Thin Slices of Beef Braised in our Special Sauce and Served with Onsen Tamago"
          />
          <MenuItem
            dish="Loco Moco $12"
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
            dish="Tonkatsu $11"
            description="Boneless Rib Chop Battered in Panko. Served with DK Katsu Sauce"
          />
          <MenuItem
            dish="Grilled Pork Chop $11"
            description="Marinated Pork Chop. Grilled and Served with Pineapple Mustard Sauce"
          />
          <MenuItem
            dish="Kim Chee Pork $9.50"
            description="Por Sauteed with Homemade Kim Chee and Vegetables"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Kawagoe Gyoza $9.50"
            description="Our Famous Homemade Gyoza. Made Fresh Daily."
          />
          <MenuItem dish="Ginger Pork $9.50" description="" />
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
            dish="Chicken Katsu Curry $11"
            description="Chicken Katsu Served with Special Curry Sauce"
          />
          <MenuItem
            dish="Nori/Shiso Chicken $10.50"
            description="Marinated Chicken Thigh, Mochiko Flour, Nori and Shiso"
          />
          <MenuItem
            dish="Soy Ginger Chicken $9.50"
            description="Our Version of Teriyaki Chicken"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Kawagoe Karaage $9.50"
            description="Izakawa Kawagoe Famous Chicken Karaage"
          />
          <MenuItem
            dish="Garlic Chili Chicken $10"
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
            dish="Ahi Katsu $15.00"
            description="Ahi Loin Battered in Panko and Shallow Fried. Served with our Homemade pickled aioli"
          />
          <MenuItem
            dish="Salmon Furikake Katsu $12"
            description="Salmon Battered in Panko and 'AO' Nori and Shallow Fried. Served with our Homemade Pickled Aioli"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Miso Salmon $12"
            description="Pacific Salmon Marinated in Miso and Grilled"
          />
          <MenuItem
            dish="Seafood Croquette $12"
            description="Bay Scallop, Shrimp and Imitation Crab. Chef Masa's Honey Shallot Sauce"
          />
          <MenuItem dish="Yakisoba $9.50" description="" />
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
            dish="Cauliflower Kalbi $11"
            description="Homemade Soy/Garlic Marinated and Grilled"
          />
          <MenuItem
            dish="Miso Eggplant $11"
            description="Broiled Eggplant Glazed with Miso and Furikake/Parmesan Breadcrumbs"
          />
        </div>
        <div className="column column2">
          <MenuItem
            dish="Beyond Meat 'Hamburger Steak' $11"
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
    flex-wrap: wrap;
  }
  .column {
    /* border: 1px solid red; */
    flex-basis: 48%;
  }
  @media (max-width: 768px) {
    .column {
      /* border: 1px solid red; */
      flex-basis: 100%;
    }
  }
`

export default MenuList
