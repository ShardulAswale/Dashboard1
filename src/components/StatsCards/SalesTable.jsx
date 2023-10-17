import React from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const products = [
  {
    id: 1,
    image: "product1.jpg",
    name: "Product 1",
    stock: 10,
    price: 50,
    sale: 20,
  },
  {
    id: 2,
    image: "product2.jpg",
    name: "Product 2",
    stock: 15,
    price: 40,
    sale: 10,
  },
  // Add more products as needed
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SalesTable = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Sale</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={product.image}
                    //   alt={product.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                    {product.name}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>${product.sale}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default SalesTable;
