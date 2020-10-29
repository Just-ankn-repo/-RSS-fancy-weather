/* global test expect */
import { advanceTo } from 'jest-date-mock';
import getDate from '../../controllerUtils/getDate';

const timezone = 'Europe/Samara';
const correctResult = {
  currentWeekDay: 'Среда',
  day: 27,
  dayTime: 'morning',
  firstWeekDay: 'Четверг',
  month: 'Июня',
  season: 'winter',
  secondWeekDay: 'Пятница',
  thirdWeekDay: 'Суббота',
  weekDay: 'Срд',
};

test('check getDate function combined with dateTimeConstants constants', () => {
  advanceTo(new Date(2018, 5, 27, 7, 15, 67));

  const date = getDate('ru', timezone, 'south');

  expect(date).toEqual(correctResult);
});
