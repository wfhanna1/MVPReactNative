import insightMVPUrl from './config';

export default function addPlayer(data) {
  return {
    url: `${insightMVPUrl}/Players`,
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data || {})
    },
  };
}
