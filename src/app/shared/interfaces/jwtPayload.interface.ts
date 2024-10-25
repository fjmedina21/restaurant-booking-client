export interface JWTPayload {
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  exp: number;
}
