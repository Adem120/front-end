export class Machine{
  idMachine!:number;
  nom?:string;
  prix?:number;
  dateachat?: Date;
  utulisation!:Utulisation;
}
export class Utulisation{
  nomUtilisation!:String;
  idutili!:number;
}