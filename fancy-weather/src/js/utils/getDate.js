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

export default (lang, length, timezone, dayOffset) => {
  const date = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
  const getWeekDay = weekDays[length][lang][date.getDay() + (dayOffset || 0)];
  const getDay = date.getDate();
  const getMonth = months[lang][date.getMonth()];
  const getTimeZoneOffset = date.getTimezoneOffset();
  return {
    weekDay: getWeekDay,
    day: getDay,
    month: getMonth,
    timezone: getTimeZoneOffset,
  };
};
