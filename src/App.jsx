import { useState, useEffect } from "react";
import { initialSort, sortProducts } from "./components/scripts/sortHandler.js";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import "./App.css";

function App() {
    const [listType, setListType] = useState("latest");
    const [allProducts, setAllProducts] = useState([]);

    function sortHandler(el) {
        const sortingType = el.target.value;
        const productsToSort = [...allProducts];
        sortingType === "latest"
            ? initialSort(productsToSort, setAllProducts)
            : sortProducts(sortingType, productsToSort, setAllProducts);
        setListType(sortingType);
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setAllProducts(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Header sortHandler={sortHandler}></Header>
            <Main products={allProducts} sortType={listType}></Main>
        </>
    );
}

export default App;
