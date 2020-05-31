import constants from './constants';
import clock from './clock';
import getDate from '../utils/getDate';

export default (data, lang) => {
  const currentDate = getDate(lang, 'short', data.timezone);
  constants.currentWeekDay.textContent = currentDate.weekDay;
  constants.currentDay.textContent = currentDate.day;
  constants.currentMonth.textContent = currentDate.month;
  constants.currentTime.textContent = '';
  constants.currentTimezone.textContent = `UTC${-currentDate.timezone < 0 ? '-' : '+'}${-currentDate.timezone / 60}`;
  constants.firstWeekDay.textContent = getDate(lang, 'full', data.timezone, 1).weekDay;
  constants.secondWeekDay.textContent = getDate(lang, 'full', data.timezone, 2).weekDay;
  constants.thirdWeekDay.textContent = getDate(lang, 'full', data.timezone, 3).weekDay;
};
