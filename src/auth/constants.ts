//TODO move to env file
export const jwtConstants = {
  secret: 'b4s3pr0j3ct',
  expirationTime: '2h', //https://github.com/vercel/ms
  salt: 10,
};

export const jwtOptons = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: jwtConstants.expirationTime },
}
