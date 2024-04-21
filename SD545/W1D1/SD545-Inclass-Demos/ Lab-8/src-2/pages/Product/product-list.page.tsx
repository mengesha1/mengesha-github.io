import React, { useEffect, useState } from "react";
import List from "../../components/List/list.component";
import Detail from "../../components/List/detial.component";
import Product from "../../types/product.types";
import productService from "../../apis/services/product.service";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await productService.getAll();
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const deleteProductById = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="row mt-5">
      {products.length === 0 ? (
        <div className="col">No Product, Add one</div>
      ) : (
        <List products={products} />
      )}
      <Detail onDeleteProductById={deleteProductById} />
    </div>
  );
}
