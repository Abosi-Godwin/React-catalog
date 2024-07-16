    // Function to generate star rating HTML
    function generateStarRating(rating) {
        let fullStars = Math.floor(rating);
        let halfStar = rating % 1 !== 0;
        let emptyStars = 5 - Math.ceil(rating);

        let starHTML = "";

        for (let i = 0; i < fullStars; i++) {
            starHTML += '<span class="full-star">&#9733;</span>'; // Full star
        }

        if (halfStar) {
            starHTML += '<span class="star">&#9734;</span>'; // Half star (you can use a different symbol if needed)
        }
        for (let i = 0; i < emptyStars; i++) {
            starHTML += '<span class="star">&#9734;</span>'; // Empty star
        }

        return starHTML;
    }
