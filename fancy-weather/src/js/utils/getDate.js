const weekDays = {
  short: {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat'],
    ru: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
    be: ['Няд', 'Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб'],
  },
  full: {
    en: ['Sunday ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Сгббота'],
    be: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Сыбота'],
  },
};

const months = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
  be: ['Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня', 'Ліпеня', 'Жніўня', 'Верасня', 'Кастрычніка', 'Лістапада', 'Снежня'],
};

const seasons = {
  north: ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'],
  south: ['summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer'],
};

const checkWeekDay = (weekDay, offset) => (weekDay + offset > 6 ? weekDay - 7 : weekDay + offset);

export default (lang, timezone, hemisphere) => {
  const date = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
  const rawWeekDay = date.getDay();
  const getWeekDay = weekDays.short[lang][rawWeekDay];
  const getCurrentWeekDay = weekDays.full[lang][rawWeekDay];
  const getFirstWeekDay = weekDays.full[lang][checkWeekDay(rawWeekDay, 1)];
  const getSecondWeekDay = weekDays.full[lang][checkWeekDay(rawWeekDay, 2)];
  const getThirdWeekDay = weekDays.full[lang][checkWeekDay(rawWeekDay, 3)];
  const getDay = date.getDate();
  const getMonth = months[lang][date.getMonth()];
  const getSeason = seasons[hemisphere][date.getMonth()];
  return {
    weekDay: getWeekDay,
    day: getDay,
    month: getMonth,
    currentWeekDay: getCurrentWeekDay,
    firstWeekDay: getFirstWeekDay,
    secondWeekDay: getSecondWeekDay,
    thirdWeekDay: getThirdWeekDay,
    season: getSeason,
  };
};
