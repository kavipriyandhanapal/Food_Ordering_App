import React, { useState, useEffect } from "react";
import useRestroMenu from "../utils/useRestroMenu";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const { resId } = useParams();
  

  const resMenu = useRestroMenu(resId);
  return (
    <div>
      {resMenu && resMenu.data ? (
        <>
          <h1>{resMenu.data.cards[0]?.card?.card?.text}</h1>
          {resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
            (res) => {
              console.log(res.card.info.name);

              return (
                <h6>
                  {res.card.info.name} - {res.card.info.price}
                </h6>
              );
            }
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RestroMenu;
