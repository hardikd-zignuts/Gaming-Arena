import React, { useEffect } from "react";
import { GameCard } from "./index";
// import ApiData from "../assets/data/ApiData";
import { fetchGame } from "../redux/gameActions";
import { useDispatch, useSelector } from "react-redux";

const GameGallery = () => {
  const fetchedData = useSelector((state) => state.fetchedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGame());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center my-3">
      {fetchedData.map((item, index) => {
        if (index === 0) {
          return false;
        }
        return <GameCard key={`id${index}`} {...item} />;
      })}
    </div>
  );
};

export default GameGallery;
