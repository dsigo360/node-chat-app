/* eslint-env mocha */
const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Ducky';
    const text = 'Ayyyyy lmao what is up';
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});
