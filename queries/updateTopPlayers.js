import insightMVPUrl from "./config";

export default function updateTopPlayers () {
	return fetch(`${insightMVPUrl}/Ratings/topPlayers`).then((response) => response.json());
}
