export interface IUser {
    userId:number,
    username:string,
    email:string,
    active:boolean,
    rollId:number
}

export interface IUserRequest {
  username: string;
  email: string;
  active?: boolean;
  rollId?: number;
}

