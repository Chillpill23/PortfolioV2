import { ReactNode } from "react";

export interface ProjectType {
  category: string;
  section: string;
  thumbnail: string;
  thumbnailDesktop?: string;
  images?: string[];
  name: string;
  desc1: string;
  desc2?: string;
  stack: string[];
  url?: string;
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
  stack:string[];
}
