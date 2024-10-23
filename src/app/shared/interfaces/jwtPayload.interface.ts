export interface JWTPayload {
  userId: string,
  email: string,
  role: string,
  exp: number;
}
