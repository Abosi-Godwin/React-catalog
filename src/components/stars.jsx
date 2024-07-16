 export default function StarRating({ rate, rateCount }) {
    let fullStars = Array.from({ length: Math.floor(rate) }, (_, i) => i);
    let halfStar = rate % 1 !== 0;
    let emptyStars = Array.from({ length: 5 - Math.ceil(rate) }, (_, i) => i);

    return (
        <div className="stars flex justify-between font-bold tracking-wide text-my-color-600 text-lg mb-2">
            <div className="flex items-center">
                {fullStars.map((star, index) => {
                    return <FullStars index={index} key={index} />;
                })}
                {halfStar && <HalfStar />}
                {emptyStars.map((star, index) => {
                    return <EmptyStars index={index} key={index} />;
                })}
            </div>
            <div className="flex items-center">
                <h1 className="">
                    {rate} Of {rateCount} Reviews
                </h1>
            </div>
        </div>
    );
}
function FullStars() {
    return <h1 className="text-2xl">&#9733;</h1>;
}
function HalfStar() {
    return (
        <span className="flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="half">
                        <stop offset="50%" stopColor="#3b757f" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#half)"
                    stroke="#3b757f"
                    strokeWidth="1"
                    d="M12 .587l3.668 7.572 8.332 1.151-6.064 5.898 1.512 8.276L12 18.896 4.552 23.484l1.512-8.276L0 9.31l8.332-1.151L12 .587z"
                />
            </svg>
        </span>
    );
}

function EmptyStars() {
    return <h1 className="text-2xl">&#9734;</h1>;
}
