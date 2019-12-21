import insightMVPUrl from "./config";


export default function findPlayers (id) {
	if (!id) {
		return {
			url: `${insightMVPUrl}/Players`
		};
	}
	return {
		url: `${insightMVPUrl}/Players/${id}`
	};
}
