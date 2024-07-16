export function initialSort(products, setAllProducts) {
    const compareFunction = (a, b) => {
        return a.id - b.id;
    };
    setAllProducts(products.sort(compareFunction));
}

export function sortProducts(sortMethod, productsArr, setAllProducts) {
    /* sorting by price*/
    const sortByPrice = productDatas => {
        const compareFunction = (a, b) => {
            return a.price - b.price;
        };
        setAllProducts(productDatas.sort(compareFunction));
    };

    /* sorting by the bestselling products*/
    const sortByBestSelling = productDatas => {
        const compareFunction = (a, b) => {
            return b.rating.count - a.rating.count;
        };
        setAllProducts(productDatas.sort(compareFunction));
    };
    sortMethod === "cheapest"
        ? sortByPrice(productsArr)
        : sortByBestSelling(productsArr);
}
