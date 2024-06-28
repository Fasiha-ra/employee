import React from "react";
import { CardsWrap } from "./Cards.styles";
import Button from "../../Button";

import stars from "../../../assets/sessions/stars.png";

const Cards = ({ data,click }) => {
  return (
    <CardsWrap>
      <div className="cardHolder">
        {data.map((val, ind) => (
          <div className="card" key={ind}>
            <figure>
              <img src={val.img} alt="enroll" />
            </figure>
            <div className="textWrap">
              <h5>{val.title}</h5>
              <p>
                {val.para}
                <span>{val.btn}</span>
              </p>
            </div>

            <div className="starHolder">
              <span>{val.author}</span>
              <figure>
                <img src={stars} alt="stars" />
              </figure>
            </div>
            <Button width="189px" onClick={click}>Enroll Group Session</Button>
          </div>
        ))}
      </div>
    </CardsWrap>
  );
};

export default Cards;
