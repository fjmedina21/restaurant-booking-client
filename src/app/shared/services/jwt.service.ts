import { Injectable } from '@angular/core';
import jwt_decode  from 'jwt-decode';
import { JWTPayload } from '../interfaces/jwtPayload.interface';

@Injectable({ providedIn: 'root' })
export class JWTService {
  constructor() { }

  DecodeToken(token: string):JWTPayload {
    return jwt_decode(token) ;
  }

}
