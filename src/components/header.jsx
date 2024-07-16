function Header({ sortHandler }) {
    return (
        <>
            <header className="header bg-my-color-800 text-my-color-900 w-screen flex flex-col items-stretch justify-between p-5 gap-y-5 shadow-md text-xl md:flex-row">
                <div className="md:w-1/2 flex gap-x-2 w-full items-center justify-start">
                    <h4 className="uppercase text-white text-2xl">Sort by:</h4>
                    <select
                        name="sorting"
                        id="sorting"
                        className="outline-none p-3  rounded-md focus:outline-none"
                        onChange={sortHandler}
                    >
                        <option value="latest">Latest (Default)</option>
                        <option value="cheapest">Price</option>
                        <option value="best-selling">Best selling</option>
                    </select>
                </div>

                <div className="md:w-1/2 flex ">
                    <input
                        className="w-full p-2 rounded focus:outline-none searchBar text-my-color-600 placeholder:text-my-color-400"
                        type="search"
                        placeholder="Search...."
                        id="search"
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
