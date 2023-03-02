import React from "react";
import { Badge } from "react-bootstrap";
import editor from "../assets/img/premium.svg";
import category from "../assets/img/category.svg";
import star from "../assets/img/rating.svg";
import { RxDot } from "react-icons/rx";
const GameCard = ({ title, platform, genre, score, editors_choice }) => {
  return (
    <>
      <div className="game-card">
        <div className="game-card--title">
          <h4>{title}</h4>
        </div>
        <div className="game-card--platform">
          <div className="category">
            <img className="game-box-img" src={category} alt="category" />
            {platform}
          </div>
          <div>
            <RxDot />
            {genre === "" ? "Not Available" : genre}
          </div>
        </div>
        <div className="game-card--info">
          <Badge className="score-badge">
            <img className="game-box-img" src={star} alt="star" />
            {score}
          </Badge>
          {editors_choice === "Y" && (
            <div className="editor-choice">
              <img
                className="game-box-img"
                src={editor}
                alt="editor's choice"
              />
              Editor's Choice
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameCard;
