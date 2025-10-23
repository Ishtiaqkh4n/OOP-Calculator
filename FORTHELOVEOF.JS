document.addEventListener("DOMContentLoaded",()=>{


    const numbers=document.querySelectorAll(".Btn");
    const operators=document.querySelectorAll(".operator");
    const Display=document.getElementById("Display_");
    const Calulate=document.getElementById("button2");
    const Delete=document.getElementById("del_id");
    const Reset=document.getElementById("button1");

    let Result;
    let Error;


  class Calculator{

      
      constructor(First,Second,Sign){
          this.First=First;
          this.Second=Second;
          this.Sign=Sign;
          
        }  
        
        FirstSession(){
            numbers.forEach(Num=>{
                Num.addEventListener("click",()=>{
                    
                    Display.value +=Num.textContent;
                    
                })
            });

            operators.forEach(Sign=>{
                Sign.addEventListener("click",()=>{
                    // if(this.First==="" || !this.First) return;
                    let Get_sign=Sign.textContent;
                    this.First=Display.value;
                    this.Sign=Get_sign;
                    
                    Display.value="";
                    console.log(Get_sign)

                    

                })
            })
            //first session boundry ends here
            };
        SecondSession(){
            Calulate.addEventListener("click",()=>{
                if(!this.Sign) return;
                if(this.First===""){ this.First=0}
                // let Check=this.Sign.length;
                // console.log(Check)
                // console.log(Display.value)
                this.Second=Display.value;
                Display.value="";

                this.First=parseFloat(this.First);
                this.Second=parseFloat(this.Second);
                
                
                // console.log({
                //     1:typeof this.First,
                //     2:typeof this.Sign,
                //     3:typeof this.Second,
                // })
                switch(this.Sign){
                    case"+":Result=this.First+this.Second;
                    break;
                    case"-":Result=this.First-this.Second;
                    break;
                    case"*":Result=this.First*this.Second;
                    break;
                    case"/":Result=this.First/this.Second;
                    break;
                    default:Error="FUCK YOUR CALCULTION DUMB"
                };

            Display.value=Result;
  
                
                
            })
        }    
        Delete(){
                // Display.value=Display.value.toString().slice(0,01)
                Delete.addEventListener("click",()=>{
                      Display.value=Display.value.toString().slice(0,-1);
                })
               
            };
        Reset(){
            Reset.addEventListener("click",()=>{
                Display.value="";
                this.First="";
                this.Second="";
                this.Sign="";
                console.log({
                    1:this.First,
                    2:this.Second,
                    3:this.Sign

                }
                )

            })
        }    
            
      //Class boundry ends here  
    }

    let GetClass=new Calculator();
    GetClass.FirstSession();
    GetClass.Delete();
    GetClass.SecondSession();
    GetClass.Reset();




///Dom event Ends here
});






    

















