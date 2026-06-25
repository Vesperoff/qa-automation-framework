export const validCredentials = {
  username: 'tomsmith',
  password: 'SuperSecretPassword!',
};

export const invalidCredentials = [
  {
    username: 'wrong',
    password: 'wrong',
    expectedMessage: 'Your username is invalid!',
  },
  {
    username: '',
    password: 'wrong',
    expectedMessage: 'Your username is invalid!',
  },
  {
    username: 'tomsmith',
    password: '',
    expectedMessage: 'Your password is invalid!',
  },
] as const;
