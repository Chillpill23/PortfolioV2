import { ReactNode } from "react";

export interface ProjectType {
  category: string;
  section: string;
  type:string;
  year:string;
  featured:boolean;
  thumbnail: string;
  thumbnailHover?: string;
  images?: string[];
  name: string;
  desc1?: string;
  desc2?: string;
  frontend: string[];
  backend?: string[];
  database?: string[];
  url?: string;
  github?:string;
}

export interface LinksType {
  name:string;
  title:string;
  url:string;
}

export interface ExprienceType {
  name:string;
  stats:number;
  desc:string;
  icon?:ReactNode;
}

export interface AboutType {
  image:string;
  name: string;
  desc1:string;
  desc2?:string;
  frontend:string[];
  backend:string[];
  database:string[];
  tools:string[];
  design:string[];
}

export interface StackType {
  name:string;
  logo:string;
}
