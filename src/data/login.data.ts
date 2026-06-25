export const validUser = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka',
};

export const invalidLoginUsers = [
  {
    email: 'invalid@test.com',
    password: 'wrongPassword',
    expectedError: 'user not found',
  },
  {
    email: validUser.email,
    password: undefined,
    expectedError: 'Missing password',
  },
  {
    email: undefined,
    password: validUser.password,
    expectedError: 'Missing email or username',
  },
];
