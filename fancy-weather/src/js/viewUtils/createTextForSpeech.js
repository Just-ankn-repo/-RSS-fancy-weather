const messageTemplate = {
  en: (data) => `
      Today is ${data.currentWeekDay}...
      Current weather at ${data.city}...
      ${data.currentWeather.description}..
      Temperature is ${data.currentWeather.temp} degree ${data.units === 'metric' ? 'celsuis' : 'ferenhate'}..
      Feels like ${data.currentWeather.temp} degree..
      Humidity is ${data.currentWeather.humidity}..
      Wind speed is ${data.currentWeather.windSpeed}..
    
      Weather on ${data.firstWeekDay}...
      ${data.forecastWeather.firstDay.description}..
      Temperature will is ${data.forecastWeather.firstDay.temp} degree ${data.units === 'metric' ? 'celsuis' : 'ferenhate'}..

      Weather on ${data.secondWeekDay}...
      ${data.forecastWeather.secondDay.description}..
      Temperature will is ${data.forecastWeather.secondDay.temp} degree ${data.units === 'metric' ? 'celsuis' : 'ferenhate'}..

      Weather on ${data.thirdWeekDay}...
      ${data.forecastWeather.thirdDay.description}..
      Temperature will is ${data.forecastWeather.thirdDay.temp} degree ${data.units === 'metric' ? 'celsuis' : 'ferenhate'}..
    `,

  ru: (data) => `
      Сегодня ${data.currentWeekDay}...
      Текущая погода в ${data.city}...
      ${data.currentWeather.description}..
      Температура составляет ${data.currentWeather.temp} градусов ${data.units === 'metric' ? 'цельсия' : 'фаренгейта'}..
      По ощущениям ${data.currentWeather.temp} градусов..
      Влажность ${data.currentWeather.humidity}..
      Скорость ветра ${data.currentWeather.windSpeed}..

      Погода на ${data.firstWeekDay.replace(/а/g, 'у')}...
      ${data.forecastWeather.firstDay.description}..
      Ожидаемая температура ${data.forecastWeather.firstDay.temp} градусов ${data.units === 'metric' ? 'цельсия' : 'фаренгейта'}..

      Погода на ${data.secondWeekDay.replace(/а/g, 'у')}...
      ${data.forecastWeather.secondDay.description}..
      Ожидаемая температура ${data.forecastWeather.secondDay.temp} градусов ${data.units === 'metric' ? 'цельсия' : 'фаренгейта'}..

      Погода на ${data.thirdWeekDay.replace(/а/g, 'у')}...
      ${data.forecastWeather.thirdDay.description}..
      Ожидаемая температура ${data.forecastWeather.thirdDay.temp} градусов ${data.units === 'metric' ? 'цельсия' : 'фаренгейта'}..
    `,
};


export default (data) => {
  const lang = data.lang === 'en' ? 'en' : 'ru';
  const message = messageTemplate[lang](data);
  console.log(message);
  return message;
};
