import insightMVPUrl from './config';

export default function recordMatch(data) {
  console.log('TEST', JSON.stringify(data));
  if (!data) {
    return {};
  }
  return {
    url: `${insightMVPUrl}/Matches/multiplayer`,
    options: {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data || {
      })
    }
  };
}
