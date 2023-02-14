import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/context";
import "./ProductInfo.css";

export const ProductInfo = () => {
  const { id } = useParams();

  const context = useContext(ThemeContext);
  const { productById } = context.state;

  useEffect(() => {
    context.dispatch({ type: "GET_PROD_BY_ID", payload: id });
  }, [id]);

  return (
    <>
      {productById.length > 0 ? (
        <div className="center">
          <section id="content">
            <article className="article-item article-detail">
              <div className="image-wrap">
                <img src={productById[0].img} alt={productById[0].name} />
              </div>

              <h2 className="subheader">{productById[0].name}</h2>
              <span className="price">$ {productById[0].price}</span>
              <p>Información:</p>
              <p>{productById[0].desc}</p>

              <div className="clearfix"></div>
            </article>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
