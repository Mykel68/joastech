import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card w-64 sm:w-80 md:w-96 lg:w-80 xl:w-96 glass">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Learn now!</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
