/**
 * @desc [Componente do Header]
 */
import React, { useState } from "react";
import { Container, BoxAside } from "./styles";

import Button from "react-bootstrap/Button";

//components
import Search from "../Search";
import ProductCart from "../ProductCart";

export default function Header({
  cart,
  setCart,
  handleClickRemover,
  searchInput,
  setSearchInput,
  showProducts,
  productList,
}) {
  const [active, setActive] = useState(false);
  const cartQtd = cart.length;

  return (
    <>
      <Container>
        <p>Logo</p>
        <Search
          showProducts={showProducts}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          productList={productList}
        />
        <Button variant="primary" onClick={() => setActive(true)}>
          Carrinho ({cartQtd})
        </Button>
      </Container>
      <BoxAside active={active}>
        <Button
          variant="danger"
          style={{ height: 35 }}
          onClick={() => setActive(false)}
        >
          X
        </Button>

        <div>
          <p className="text-center">Carrinho</p>
          <ProductCart
            cart={cart}
            setCart={setCart}
            handleClickRemover={handleClickRemover}
          />
        </div>
        <p>
          Valor total: R${""}
          {cart.reduce((acc, item) => {
            let count = acc + Number(item.price);
            return Math.round(count * 100) / 100;
          }, 0)}
        </p>
      </BoxAside>
    </>
  );
}
