import dayjs from "dayjs";

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

const DEFAULT_DATE_FORMAT = `YY/M/DD HH:mm`;

const formatDate = (date, format = DEFAULT_DATE_FORMAT) => {
  return dayjs(date).format(format);
};

const getDateTimeFromDate = (date) => {
  return `${formatDate(date, `YYYY-MM-DD`)}T${formatDate(date, `HH:mm`)}`;
};

const getDatesDiff = (startDate, endDate) => {
  const startDateDay = dayjs(startDate);
  const endDateDay = dayjs(endDate);

  let minutesDiff = endDateDay.diff(startDateDay, `minute`);

  const days = Math.floor(minutesDiff / MINUTES_IN_DAY);
  minutesDiff %= MINUTES_IN_DAY;
  const hours = Math.floor(minutesDiff / MINUTES_IN_HOUR);

  minutesDiff %= MINUTES_IN_HOUR;

  return {
    days,
    hours,
    minutes: minutesDiff
  };
};

const getPointDurationInMs = (point) => {
  return point.endDate.valueOf() - point.startDate.valueOf();
};

const getDurationString = (startDate, endDate) => {
  const {days, hours, minutes} = getDatesDiff(startDate, endDate);

  let result = `${minutes}M`;

  if (hours || days) {
    result = `${hours}H ${result}`;
  }

  if (days) {
    result = `${days}D ${result}`;
  }

  return result;
};

export {
  formatDate,
  getDateTimeFromDate,
  getDurationString,
  getPointDurationInMs
};
