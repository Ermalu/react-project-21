import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const Details = () => {
  const { id } = useParams();
  const { OneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return <div>Details</div>;
};

export default Details;
