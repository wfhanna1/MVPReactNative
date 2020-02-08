import insightMVPUrl from "./config";

export default function updateBottomPlayers () {
	return fetch(`${insightMVPUrl}/Ratings/bottomPlayers`).then((response) => response.json());
}
