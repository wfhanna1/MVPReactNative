import insightMVPUrl from "./config";

export default function updatePlayer (data) {
	if (data && data.id) {
		return {
			url: `${insightMVPUrl}/Players/${data.id}`,
			options: {
				method: "PUT",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data || {

				})
			}
		};
	}

	return new Error("Missing player ID.");
}
