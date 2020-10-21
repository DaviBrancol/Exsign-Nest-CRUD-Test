import { Injectable } from '@nestjs/common';
import { Friend } from './friend.interface'

let friends: Friend[] = [
  { name: 'Davi', age: 22, gender: 'Man', wish: 'Disco' },
  { name: 'Misakiti', age: 22, gender: 'Man', wish: 'Cloth' },
  { name: 'Kayle', age: 29, gender: 'Mulher', wish: 'Keyboard' },
  { name: 'Stephanie', age: 28, gender: 'Mulher', wish: 'Microphone' },
]

@Injectable()
export class FriendsService {

  // Method for FriendsController getAll route
  getAll() {
    console.log('Method Found')
  }
  
  // Method for FriendsController getByName route
  getByName() {
    console.log('Method Found')
  }
  
  // Method for FriendsController addFriend route
  addFriend() {
    console.log('Method Found')
  }
  
  // Method for FriendsController updateFriend route
  updateFriend() {
    console.log('Method Found')
  }
  
  // Method for FriendsController deleteFriend route
  deleteFriend() {
    console.log('Method Found')
  }
}
