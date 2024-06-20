import { useState } from "react";
import "./App.css";

function App() {
    const [listType, setListType] = useState("latest");

    function sortHandler(el) {
        setListType(el.target.value);
    }
    return (
        <>
            <Header sortHandler={sortHandler}></Header>
            <Main listType={listType}></Main>
        </>
    );
}
function Header({ sortHandler }) {
    return (
        <>
            <header class="header w-screen flex flex-col items-stretch justify-between p-5 gap-y-5 shadow-md text-xl md:flex-row">
                <div class="md:w-1/2 flex gap-x-2 w-full items-center justify-start">
                    <h4 class="uppercase text-white text-2xl">Sort by:</h4>
                    <select
                        name="sorting"
                        id="sorting"
                        class="outline-none p-3  rounded-md focus:outline-none"
                        onChange={sortHandler}
                    >
                        <option value="latest">Latest (Default)</option>
                        <option value="cheapest">Price</option>
                        <option value="best-selling">Best selling</option>
                    </select>
                </div>

                <div class="md:w-1/2 flex ">
                    <input
                        class="w-full p-2 rounded focus:outline-none searchBar"
                        type="search"
                        placeholder="Search...."
                        id="search"
                    />
                </div>
            </header>
        </>
    );
}

function Main({ listType }) {
    /* const allProducts = async ()=> {
    }*/
    return (
        <>
            <p className="text-2xl uppercase">{listType} products</p>
        </>
    );
}
export default App;
