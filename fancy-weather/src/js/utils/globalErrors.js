import showError from '../viewUtils/showError';

export default (error) => {
  switch (error.toString()) {
    case 'TypeError: Failed to fetch':
      showError('Some problem with connection to api');
      break;
    default:
      showError('Something went wrong');
  }
};
