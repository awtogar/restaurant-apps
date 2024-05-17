import API_ENDPOINT from '../globals/api-endpoints'

class restaurantsData {
    static async getRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST);
        return response.json();
    }

    static async detailRestauran(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async postReview(data) {
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

export default restaurantsData;
