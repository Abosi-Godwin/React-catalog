import StarRating from "./stars.jsx";

export default function Main({ products, sortType }) {
    return (
        <>
            <div className="py-4 px-2">
                <h1 className="text-xl font-bold text-my-color-600 capitalize">
                    Sorted by the {sortType}
                </h1>
            </div>
            <div className="p-3 bg-my-color-100 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product, index) => {
                    return (
                        <Product
                            productDatas={product}
                            index={index}
                            key={product.id}
                        />
                    );
                })}
            </div>
        </>
    );
}

function Img({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="h-80 w-full p-2 rounded-md border-4 border-my-color-100"
        />
    );
}

function Infos({ category, title, price }) {
    return (
        <div className="">
            <p className="uppercase text-xs">category: {category}</p>
            <h3 className="truncate">{title}</h3>
            <h2 className="font-bold text-2xl text-my-color-600 py-3">
                ${price.toFixed(2)}
            </h2>
        </div>
    );
}

function Product({ productDatas, index }) {
    return (
        <div
            className="w-full height-auto shadow-lg p-3 rounded-md bg-my-color-50 animate-fadeIn"
            key={productDatas.id - index}
        >
            <div className="product-info pb-2">
                <Img src={productDatas.image} alt={productDatas.title} />
                <StarRating
                    rate={productDatas.rating.rate}
                    rateCount={productDatas.rating.count}
                />

                <Infos
                    category={productDatas.category}
                    title={productDatas.title}
                    price={productDatas.price}
                />
            </div>

            <div className="cart">
                <button className="addToCart uppercase text-lg rounded-md font-bold w-full text-white bg-my-color-800 py-4">
                    {" "}
                    add to cart{" "}
                </button>
            </div>
        </div>
    );
}
