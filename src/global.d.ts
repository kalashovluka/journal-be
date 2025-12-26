import { User } from './generated/prisma/client';

declare module 'express' {
  interface AuthenticatedRequest extends Request {
    user: Omit<User, 'password'>;
  }
}
