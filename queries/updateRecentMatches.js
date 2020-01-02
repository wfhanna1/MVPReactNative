import insightMVPUrl from "./config";

export default function updateTopPlayers () {
	return fetch(`${insightMVPUrl}/Matches/recent`).then((response) => response.json());
}
