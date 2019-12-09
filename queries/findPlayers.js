import insightMVPUrl from './config';

export default function findPlayers(searchQuery) {
  if (!searchQuery) {
    return {};
  }
  return {
    url: `${insightMVPUrl}/Players/find`,
    options: {
      headers: {
        q: { searchQuery }
      }
    },
  }
}