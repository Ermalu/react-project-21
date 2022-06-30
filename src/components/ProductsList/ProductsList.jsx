import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Pagination, Slider, TextField } from "@mui/material";

import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([1, 10000]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  console.log(window.location.search);
  return (
    <Container>
      <Box style={{ display: "flex" }}>
        <TextField
          value={search}
          label="Search"
          onChange={e => setSearch(e.target.value)}
          variant="outlined"
        />
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
          step={100}
        />
      </Box>
      <Box>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
