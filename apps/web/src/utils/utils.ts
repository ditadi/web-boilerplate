export const getRelativeTime = (timestamp: number) => {
  const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });
  const daysDifference = Math.round((timestamp - new Date().getTime()) / DAY_MILLISECONDS);

  return rtf.format(daysDifference, 'day');
};
