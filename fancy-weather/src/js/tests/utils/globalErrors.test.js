/* global test expect jest */
import globalErrors from '../../utils/globalErrors';
import showError from '../../viewUtils/showError';

jest.mock('../../viewUtils/showError');

const stringError = 'Test has been passed';
const errorObject = new Error('test');

test('check globalErrors function for string error', () => {
  showError.mockReturnValue((message) => message);
  globalErrors(stringError);
  expect(showError).toHaveBeenCalledWith('Test has been passed');
});

test('check globalErrors function for error object', () => {
  showError.mockReturnValue((message) => message);
  globalErrors(errorObject);
  expect(showError).toHaveBeenCalledWith('Something went wrong');
});
