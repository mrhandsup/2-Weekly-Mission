export function getTimeAgo(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timePassed = currentDate - createdDate;

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 31;
  const YEAR = MONTH * 12;

  if (YEAR * 2 <= timePassed) {
    return `${Math.floor(timePassed / YEAR)} years ago`;
  }
  if (YEAR <= timePassed) {
    return `1 year ago`;
  }
  if (MONTH * 2 <= timePassed) {
    return `${Math.floor(timePassed / MONTH)} months ago`;
  }
  if (MONTH <= timePassed) {
    return `1 month ago`;
  }
  if (DAY * 2 <= timePassed) {
    return `${Math.floor(timePassed / DAY)} days ago`;
  }
  if (DAY <= timePassed) {
    return `1 day ago`;
  }
  if (HOUR * 2 <= timePassed) {
    return `${Math.floor(timePassed / HOUR)} hours ago`;
  }
  if (HOUR <= timePassed) {
    return `1 hour ago`;
  }
  if (MINUTE * 2 <= timePassed) {
    return `${Math.floor(timePassed / MINUTE)} minutes ago`;
  }
  return `1 minute ago`;
}
