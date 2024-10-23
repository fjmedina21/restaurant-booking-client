export interface JWTPayload {
  userId: string,
  email: number,
  role: string,
  exp: number;
}
