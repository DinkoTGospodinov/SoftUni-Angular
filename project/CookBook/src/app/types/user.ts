import { Dish } from "./dishes";

export interface User{
    email:string;
    name:string;
    username:string;
    password:string;
    dish:Dish;
}