import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/context";
import { Searchbar } from "../Searchbar/Searchbar";
import { ProductCard } from "../Product-card/Product-card";
import { Loading } from "../Loading/Loading";
import "./Products.css";

export const Products = () => {
  const context = useContext(ThemeContext);
  const { allProducts, lengthFiltered } = context.state;

  useEffect(() => {
    setTimeout(() => {
      context.dispatch({ type: "GET_PRODUCT" });
    }, 3000);
  }, []);

  return (
    <div className="center">
      <section id="content">
        <Searchbar />
        {allProducts.length > 0 ? (
          allProducts.map((e) => <ProductCard {...e} key={e.id} />)
        ) : allProducts === "" ? (
          <Loading/>
        ) : (
          <h1 className="notfound-msg">
            No sé encontro productos con ese nombre
          </h1>
        )}

        {lengthFiltered > 0 ? (
          <h2 class="subheader">{`${lengthFiltered}`} resultados</h2>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
