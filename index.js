document.addEventListener("DOMContentLoaded",()=>{

    const numbers=document.querySelectorAll(".Btn");
    const operators=document.querySelectorAll(".operator");
    const Display=document.getElementById("Display_");
    const Calulate=document.getElementById("button2");
    const Delete=document.getElementById("del_id");
    


   //  let Magic=true;
   // let SAI="";
   
   let Arr=[];







    class  Calculator{
        constructor(Firstvalue,Secondvalue,Sign){
         this.Firstvalue=Firstvalue;
         this.Scondvalue=Secondvalue;
         this.Sign=Sign;
        };

        Displayvalue(){
         numbers.forEach(Num=>{
           

             Num.addEventListener("click",()=>{

                if(Arr.length===0){
                   this.Firstvalue =Num.textContent;
                   Display.value +=this.Firstvalue;
               console.log(this.Firstvalue)
                }else{return}

              
               
               
            });
         

            
   
             
        }) 
      
      };
        

        Delete(){
         Delete.addEventListener("click",()=>{
            Display.value=Display.value.toString().slice(0,-1);
            this.Firstvalue=Display.value;
         });
               };
          
         PassValue(){
         operators.forEach(Sign_clicked=>{
            Sign_clicked.addEventListener("click",(e)=>{
               console.log(e);
               let Sign_is=Sign_clicked.textContent;
               Arr.push(Sign_is)
               //  Magic=false;
               // console.log(Sign_is)
               this.Sign=Sign_is;
               // console.log(this.Sign)
               // console.log(this.Firstvalue)
               Display.value="";
            })
         })
         }; 

         

     
      Decide(){
        numbers.forEach(Num=>{
        
         Num.addEventListener("click",()=>{
         if(Arr.length>0){

                this.Scondvalue=Num.textContent;
         Display.value +=this.Scondvalue;
               // console.log(typeof this.Firstvalue);
               console.log(this.Scondvalue)
         }
     

            

                 
            });
        }) 
    
         }

       Calculteresult(){
         let Result;
        Calulate.addEventListener("click",()=>{
         let Result;
         this.Firstvalue=parseFloat(this.Firstvalue);
         this.Scondvalue=parseFloat(this.Scondvalue);
         let Get_sign=Arr[0];
         switch(this.Sign){
            case "+":
               // this.Firstvalue=+this.Firstvalue;
               // this.Scondvalue=+this.Scondvalue;
               Result=this.Firstvalue+this.Scondvalue;
               break;
                           case "-":
               Result=this.Firstvalue-this.Scondvalue;
               break;
                           case "*":
               Result=this.Firstvalue*this.Scondvalue;
               break;
                           case "/":
               Result=this.Firstvalue/this.Scondvalue;
               break;
               default :
               Display.textContent="INCORRECT INFORMATION"     
         };
         console.log(Result);
         Display.value=Result
        })
            
       }  
      
     
     



   
      

            





    };

   const Getclass=new Calculator();
   Getclass.Displayvalue()
   Getclass.Calculteresult()
   Getclass.Delete();
    Getclass.Decide();
   Getclass.PassValue();
   Calulate.addEventListener("click",()=>{

   })

      

























































})












              3
            //   ISHTIAQ ARCHITECTURE


            //   CLASS(){
            //     this.VALU=VAL
            //     this.+=+;
            //     this.VALU2=VALU2
            //     Function(){
            //         SIGN.PRESSED{
            //             CLEAR DISPLAY
            //             DELETE 1 LAST DIGIT IF PRESSED ON DELETE
            //             this.VALUE=vAL1;;
            //             this.OPEATORRRRR=OPEATORRRRR;

                       
            //         }
            //     }
            //      FUNCTION (){
            //         SOME VALUE IS IN INPUT 
            //         CLICK ON =
            //         GET VALU2
            //         STORE ImageTrack


            //      }

            //      FANCTIOON(){
            //         VALAU1
            //         VALU2
            //         OPATOOOOR
            //         SWICTH CASEEE(){

            //             A PERMOD FUCKKING UP ReadableStreamDefaultController
            //             STORE RESALUTTT IN NEW PROPERTIOY

            //         }
            //      };


            //      FUNCTON{
            //         RESAAAAULTTT{
            //             DISPLAY.VALUEEE=RESAULT       WITH TIMING FUNCITON FUCKED UP?

            //         }
            //      }
            //   }

