/* eslint-env mocha */
const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Ducky';
    const text = 'Ayyyyy lmao what is up';
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Ducky2';
    const latitude = 37;
    const longitude = -122;
    const url = 'http://google.com/maps?q=37,-122';
    const message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, url });
  });
});
