import dateConst from '../constants/dateTimeConstants';

export default (lang, timezone, hemisphere) => {
  const date = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
  const rawWeekDay = date.getDay();
  const getWeekDay = dateConst.weekDays.short[lang][rawWeekDay];
  const getCurrentWeekDay = dateConst.weekDays.full[lang][rawWeekDay];
  const getFirstWeekDay = dateConst.weekDays.full[lang][dateConst.checkWeekDay(rawWeekDay, 1)];
  const getSecondWeekDay = dateConst.weekDays.full[lang][dateConst.checkWeekDay(rawWeekDay, 2)];
  const getThirdWeekDay = dateConst.weekDays.full[lang][dateConst.checkWeekDay(rawWeekDay, 3)];
  const getDay = date.getDate();
  const getHours = date.getHours();
  const getMinutes = date.getMinutes();
  const getMonth = dateConst.months[lang][date.getMonth()];
  const getSeason = dateConst.seasons[hemisphere][date.getMonth()];
  const getDayTime = dateConst.dayTimes[Math.ceil((getHours + (getMinutes / 100)) / 6)];

  return {
    weekDay: getWeekDay,
    day: getDay,
    month: getMonth,
    currentWeekDay: getCurrentWeekDay,
    firstWeekDay: getFirstWeekDay,
    secondWeekDay: getSecondWeekDay,
    thirdWeekDay: getThirdWeekDay,
    season: getSeason,
    dayTime: getDayTime,
  };
};
