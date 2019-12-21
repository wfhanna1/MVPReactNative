import insightMVPUrl from "./config";

export default function games (id) {
	if (!id) {
		return {
			url: `${insightMVPUrl}/Games`
		};
	}
	return {
		url: `${insightMVPUrl}/Games/${id}`
	};
}
