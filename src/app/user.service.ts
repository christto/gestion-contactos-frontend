import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userId: string | null = null;
  userName: string | null = null;

  setUserId(id: string): void {
    this.userId = id;
  }

  getUserId(): string | null {
    return this.userId;
  }

  setName(name: string): void {
    this.userName = name;
  }

  getName(): string | null {
    return this.userName;
  }
}
