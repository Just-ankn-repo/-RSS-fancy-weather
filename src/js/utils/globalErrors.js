import showError from '../viewUtils/showError';

export default (error) => {
  switch (typeof error) {
    case 'string':
      showError(error);
      break;
    default:
      showError('Something went wrong');
  }
};
