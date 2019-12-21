import insightMVPUrl from "./config";

export default function playerRating (id) {
	if (!id) {
		return {
			url: `${insightMVPUrl}/Ratings/`
		};
	}
	return {
		url: `${insightMVPUrl}/Ratings/${id}`
	};
}
