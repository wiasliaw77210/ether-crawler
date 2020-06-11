import dayjs from 'dayjs';

export const dateParser = (date: string): string => (
  dayjs(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD, HH:mm:ss, Z')
);
