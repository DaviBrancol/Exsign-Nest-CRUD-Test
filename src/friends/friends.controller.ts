import { Controller, Delete, Get, HttpStatus, Put, Patch, Req, Res } from '@nestjs/common';
import { FriendsService } from './friends.service'

// MARK: /friends controller. Access by http://localhost:8002/friends or http://127.0.0.1:8002
@Controller('/friends')
export class FriendsController {
  // MARK: Import of the friends service. Access by using this.service inside the methods.
  constructor(private readonly service: FriendsService) {}

  /* 
    MARK:
    Objective: Retrieve all friends from the current list
    Expected Return: Array of Friends 
  */
  @Get()
  async getAll(@Req() req: any, @Res() res: any) {
    res.status(HttpStatus.OK).json({ success: true })
  }

  /* 
    MARK:
    Objective: Retrieve the info from a single friend by it's name
    Paramaters: Name of the friend
    Expected Return: Single friend 
  */
  @Get()
  async getByName(@Req() req: any, @Res() res: any) {
    res.status(HttpStatus.OK).json({ success: true })
  }

  /* 
    MARK:
    Objective: Add a friend into the list
    Paramaters: Data for the new friend
    Expected Return: Success message - status
  */
  @Put()
  async addFriend(@Req() req: any, @Res() res: any) {
    res.status(HttpStatus.OK).json({ success: true })
  }

  /* 
    MARK:
    Objective: Update one of the friends of the list
    Paramaters: Name of the friend and Data that will be updated
    Expected Return: Success message - status
  */
  @Patch()
  async updateFriend(@Req() req: any, @Res() res: any) {
    res.status(HttpStatus.OK).json({ success: true })
  }

  /* 
    MARK:
    Objective: Remove one of the friends of the list
    Paramaters: Name of the friend
    Expected Return: Success message - status
  */
  @Delete()
  async deleteByNickname(@Req() req: any, @Res() res: any) { 
    res.status(HttpStatus.OK).json({ success: true })
  }
}