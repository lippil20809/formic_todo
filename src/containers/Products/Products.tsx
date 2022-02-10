import React, { useState, useReducer } from "react";

import Form from "components/Form";

import { Container, Dialog, Button } from "@mui/material";

import { Product } from "./Products.types";

const Products: React.FC = () => {
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [open, toggle] = useReducer((prev) => !prev, false);

  const handleDelete = (product: Product) => {
    setProducts((prevProduct) =>
      prevProduct.filter((prevProduct) => prevProduct !== product)
    );
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
  };

  return (
    <Container disableGutters maxWidth="lg">
      <Button variant="outlined" color="secondary" onClick={toggle}>
        open form
      </Button>
      <Dialog open={open} onClose={toggle} fullWidth>
        <Form initial={editProduct} />
      </Dialog>
    </Container>
  );
};

export default Products;
