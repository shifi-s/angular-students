export class student
   {
    constructor( 
    public Id:number=0,
     public Name:string,
     public Phone:string,
     public Adress:string,
     public IsActive:boolean=false,
     public Average:number=0,
     public leftDate:Date=new Date(1,2,2004)
    ){

    }

   }
