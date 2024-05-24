import API_ENDPOINT from "../globals/api-endpoint";

class rendererData {
    static async getRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }


    static async PostReviewOfRestaurant(data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
        return response.json();
    }
}

export default rendererData;
