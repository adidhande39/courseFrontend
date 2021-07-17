import {Skill} from "./Skill";
import {Trainer} from "./Trainer";

export class Course{
  id!:number;
  name!:string;
  createdAt!:Date;
  updatedAt!:Date;
  feedback!:string;
  description!:string;
  location!:string;
  prerequisite!:string;
  skills!:string[];
  trainers!:string[];
}
