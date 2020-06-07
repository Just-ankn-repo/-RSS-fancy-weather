import speechMessageTemplates from '../constants/speechMessageTemplates';

export default (data) => {
  const lang = data.lang === 'en' ? 'en' : 'ru';
  const message = speechMessageTemplates[lang](data);
  console.log({ speechMessage: message });
  return message;
};
