const { getFullYear, getFooterCopy, getLatestNotification } = require('../utils');

test('getFullYear returns the current year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns the correct footer text', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct notification string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
