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

export interface EventModel {
  id: number,
  titre: string,
  description: string,
  date: string,
  image?: string,
  interet: Interet
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


  getEvents(): EventModel[]{
    const events = localStorage.getItem('events');
    if(events) {
      return JSON.parse(events)
    } else {
      return [] as EventModel[]
    }
  }

  addEvent(event : EventModel){
    let events = JSON.parse(localStorage.getItem('events')!);
    events.push(event)
    localStorage.setItem('events', events)
  }


  getInterets(): Interet[]{
    const interets = localStorage.getItem('interets');
    if(interets) {
      return JSON.parse(interets)
    } else {
      return [] as Interet[]
    }
  }

  addInteret(event : EventModel){
    let interets = JSON.parse(localStorage.getItem('interets')!);
    interets.push(event)
    localStorage.setItem('event', interets)
  }

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
