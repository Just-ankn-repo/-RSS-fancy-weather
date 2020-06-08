/* global test expect jest beforeEach fetch describe */
import weather from '../../api/weather.api';
import globalErrors from '../../utils/globalErrors';
import config from '../../../config/env.config';

beforeEach(() => {
  fetch.resetMocks();
});

jest.mock('../../utils/globalErrors');

config.openweathermapUrl = 'http://test-api.test';
config.openweathermapToken = 'testToken123';
const error = 'Failed to fetch weather data';
const apiCorrectResponse = {
  current: {
    temp: 24,
    feels_like: 22,
    humidity: 81,
    wind_speed: 11,
    weather: [
      {
        description: 'testCurrentWeatherDescription',
        main: 'testCurrentWeather',
        icon: 'testCurrentWeatherIcon',
      },
    ],
  },
  daily: [
    {
      wind_speed: 8,
      humidity: 82,
      temp: {
        min: 25,
        max: 10,
      },
      weather: [
        {
          description: 'testFirstForecastWeatherDescription',
          icon: 'testFirstForecastWeatherIcon',
        },
      ],
    },
    {
      wind_speed: 9,
      humidity: 83,
      temp: {
        min: 20,
        max: 10,
      },
      weather: [
        {
          description: 'testSecondForecastWeatherDescription',
          icon: 'testSecondForecastWeatherIcon',
        },
      ],
    },
    {
      wind_speed: 10,
      humidity: 84,
      temp: {
        min: 15,
        max: 10,
      },
      weather: [
        {
          description: 'testThirdForecastWeatherDescription',
          icon: 'testThirdForecastWeatherIcon',
        },
      ],
    },
  ],
  timezone_offset: 14400,
  units: 'metric',
};
const correctResult = {
  timezoneOffset: 'UTC+4',
  currentWeather: {
    temp: 24,
    feelsLike: 22,
    humidity: '81%',
    windSpeed: '11m/s',
    description: 'testCurrentWeatherDescription',
    weather: 'testCurrentWeather',
    icon: 'testCurrentWeatherIcon',
  },
  forecastWeather: {
    firstDay: {
      temp: 18,
      humidity: '82%',
      windSpeed: '8m/s',
      description: 'testFirstForecastWeatherDescription',
      icon: 'testFirstForecastWeatherIcon',
    },
    secondDay: {
      temp: 15,
      humidity: '83%',
      windSpeed: '9m/s',
      description: 'testSecondForecastWeatherDescription',
      icon: 'testSecondForecastWeatherIcon',
    },
    thirdDay: {
      temp: 13,
      humidity: '84%',
      windSpeed: '10m/s',
      description: 'testThirdForecastWeatherDescription',
      icon: 'testThirdForecastWeatherIcon',
    },
  },
};

describe('Test weather.api function with weatherData converter function', () => {
  const lat = '54.5698';
  const lon = '23.0978';
  const lang = 'en';
  const units = 'metric';

  test('check if correct response fetched from weather.api', async () => {
    fetch.mockResponseOnce(JSON.stringify(apiCorrectResponse));

    const result = await weather(lat, lon, lang, units);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.openweathermapUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
      exclude=current,daily&lang=${lang}&units=${units}&appid=${config.openweathermapToken}`,
    );
    expect(result).toEqual(correctResult);
  });

  test('check if incorrect response fetched from weather.api', async () => {
    fetch.mockResponseOnce(JSON.stringify());

    const result = await weather(lat, lon, lang, units);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.openweathermapUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
      exclude=current,daily&lang=${lang}&units=${units}&appid=${config.openweathermapToken}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });

  test('check if fetch error for weather.api', async () => {
    fetch.mockReject(() => Promise.reject(new Error('api is down')));

    const result = await weather(lat, lon, lang, units);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${config.openweathermapUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&
      exclude=current,daily&lang=${lang}&units=${units}&appid=${config.openweathermapToken}`,
    );
    expect(result).toEqual(null);
    expect(globalErrors).toHaveBeenCalledWith(error);
  });
});
