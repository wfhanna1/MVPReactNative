import insightMVPUrl from './config';

export default function playerRating(id) {
  console.log('id', id);
  if (!id) {
    return {};
  }
  return {
    url: `${insightMVPUrl}/Ratings/${id}`
  };
}
