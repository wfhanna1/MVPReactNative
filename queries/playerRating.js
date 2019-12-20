import insightMVPUrl from "./config";

export default function playerRating (id) {
	if (!id) {
		return {

		};
	}
	return {
		url: `${insightMVPUrl}/Ratings/${id}`
	};
}
