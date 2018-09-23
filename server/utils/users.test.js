/* eslint-env mocha */
const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();

    users.users = [
      {
        id: '1',
        name: 'Ducky',
        room: 'Rubber Duckies',
      },
      {
        id: '2',
        name: 'Someone',
        room: 'People',
      },
      {
        id: '3',
        name: 'Gumball',
        room: 'Rubber Duckies',
      },
    ];
  });

  it('should add a new user', () => {
    users = new Users();
    const user = {
      id: '123',
      name: 'Ducky',
      room: 'Ducklings',
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    const userId = '100';
    const user = users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '1';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '100';
    const user = users.getUser(userId);

    expect(user).toBeUndefined();
  });

  it('should return names for Rubber Duckies', () => {
    const userList = users.getUserList('Rubber Duckies');

    expect(userList).toEqual(['Ducky', 'Gumball']);
  });

  it('should return names for People', () => {
    const userList = users.getUserList('People');

    expect(userList).toEqual(['Someone']);
  });
});
