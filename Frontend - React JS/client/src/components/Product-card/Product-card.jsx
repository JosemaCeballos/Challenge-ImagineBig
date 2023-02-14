import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, img, name, price, stock }) => {
  return (
    <article className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={img} alt={name} />
      </div>

      <h2>{name}</h2>
      <span className="price">Precio: ${price}</span>
      <span className="stock">Stock: {stock}</span>
      <Link to={`${id}`} style={{ textDecoration: 'none' }}><span className="details">Leer más</span></Link>
      <div className="clearfix"></div>
    </article>
  );
};
