export function getTimeAgo(links) {
  const currentDate = new Date().getTime();
  const createdDate = new Date(links.createdAt).getTime();

  const differenceInSeconds = Math.floor((currentDate - createdDate) / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInSeconds / 3600);
  const differenceInDays = Math.floor(differenceInSeconds / 86400);
  const differenceInMonths = Math.floor(differenceInDays / 30);

  if (differenceInMinutes < 2) {
    return '1 minute ago';
  } else if (differenceInMinutes <= 59) {
    return `${differenceInMinutes} minutes ago`;
  } else if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  } else if (differenceInHours < 1) {
    return '1 day ago';
  } else if (differenceInDays <= 30) {
    return `${differenceInDays} days ago`;
  } else if (differenceInDays <= 365) {
    if (differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    } else {
      return `1 year ago`;
    }
  } else {
    const years = Math.floor(differenceInDays / 365);
    return `${years} years ago`;
  }
}
