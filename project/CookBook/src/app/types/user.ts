import { Dish } from "./dishes";

export interface User{
    email:string;
    name:string;
    username:string;
    password:string;
    dish:Dish;
}

export interface UserForAuth{
    firstName:string;
    email:string;
    phoneNumber:string;
    passWord:string;
}