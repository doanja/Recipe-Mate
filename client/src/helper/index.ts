import { decode } from 'jsonwebtoken';

/**
 * function to check JWT expiration
 * @param {string} token the JWT
 * @return {boolean} true if token is valid, otherwise false
 */
export const checkTokenExp = (token: string) => {
  const decodedToken = decode(token, { complete: true }) as { [key: string]: any };

  return decodedToken.payload.exp > new Date().getTime() / 1000;
};
