import { Injectable } from '@angular/core';

export enum ROLE_USER {
  BDE,STUDENT
}

export interface Interet {
  id: number,
  libelle: string
}

export interface User {
  id: number,
  name?: string,
  email: string,
  password: string,
  role: ROLE_USER,
  interet: Interet[]
}

export interface Event {
  id: number,
  titre: string,
  description: string,
  date: string,
  image?: string
}


@Injectable({
  providedIn: 'root'
})
export class AppService {

  centreInterets : Interet[] = [
    {
      id: 1,
      libelle: 'FOOTBALL'
    },
    {
      id: 2,
      libelle: 'DANSE'
    },
    {
      id: 3,
      libelle: 'RANDONE'
    },
    {
      id: 4,
      libelle: 'MMA'
    },
  ]

  constructor() { }

  saveUsers() {
    const users: User[] = [
      {
        id: 1,
        email: 'pierre@sorbon.fr',
        role: ROLE_USER.BDE,
        password: '1234',
        name: 'Pierre Henry',
        interet: [],
      },
      {
        id: 2,
        email: 'marie@paris.fr',
        role: ROLE_USER.STUDENT,
        password: '5678',
        name: 'Marie Dupont',
        interet: [],
      },
      {
        id: 3,
        email: 'john@doe.com',
        role: ROLE_USER.STUDENT,
        password: 'abcd',
        name: 'John Doe',
        interet: [],
      }
    ];

    const localUsers: User[] = this.getUsers()
    if(localUsers.length === 0){
      localStorage.setItem("users", JSON.stringify(users))
    }
  }

  getUsers(): User[] {
    const users = localStorage.getItem('users')
    if(users) {
      return JSON.parse(users)
    } else {
      return [] as User[]
    }
  }

  addInteretsToUser(interts: Interet[], userId: number) {
    let user: User = this.findUser(userId)!
    user.interet = interts
    this.putUser(user)
  }

  findUser(id: number) {
    const users = this.getUsers()
    return users.find(user => user.id === id)
  }

  findUserByEmail(email: string) {
    const users = this.getUsers()
    return users.find(user => user.email === email)
  }

  putUser(user: User) {
    let users = this.getUsers()
    let userIndex = users.findIndex(userItem => user.id === userItem.id)
    users[userIndex] = user
    localStorage.setItem('users', JSON.stringify(users))
  }

}
