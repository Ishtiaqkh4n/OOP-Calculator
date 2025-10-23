// document.addEventListener("DOMContentLoaded",()=>{


//     const Numbers=document.querySelectorAll(".Btn")
//     const Alloperator=document.querySelectorAll(".operator");
//     const Display=document.getElementById("Display_");
//     const Calculate=document.getElementById("button2");

//     let Before=[];
//     let After=[];


//    Alloperator.forEach(operator=>{
//         console.log(operator)
//         operator.addEventListener("click",()=>{
//         let GetOperator=operator.textContent;
//         // console.log(GetOperator)
        
//         Calculategv(GetOperator);
        

//         })

//     });



//     Numbers.forEach(num=>{
//         // console.log(num)
      
//         num.addEventListener("click",()=>{
            
//             Display.value +=num.textContent;
//             let getwhatclicked=Display.value;
//             Before.push(getwhatclicked)
            
            
            
//              })
//     });

//     function Calculategv(){


//     }







// function ClearDisplay(){
//     Display.value="";
// }   

// })




// document.addEventListener("DOMContentLoaded",()=>{

// ///////////Getting all elements through DOM
// const Display_input=document.getElementById("Display_");
// const Numbers=document.querySelectorAll(".Btn");
// const Resetbtn=document.getElementById("button1");
// const Plusbtn=document.getElementById("plus_id");
// const Minusbtn=document.getElementById("-id");
// const Divisionbtn=document.getElementById("divideid");
// const Mulbtn=document.getElementById("multiplyid");
// const Deletebtn=document.getElementById("del_id");





// ///For getting all html elements of digits we can Use forEach Because for each method also support action on all the DOM ELEMENTS GETED THROUGH SAME CLASS 
// // OR A COLLECTION LIST OF DOM ELEMENTS RETURNED BY qUERY SELECTOR ALL
// // wE CAN USE FOREACH DIRECTLY ON NODE LIST
// //We can also convert object and Dom elements geted through QSALL to array BY USING ARRAY.from

// Numbers.forEach(Btn=>{
//     Btn.addEventListener("click",(e)=>{
//         Display_input.value +=Btn.textContent.trim();
       
//     });

//      Resetdisplay();
    
    
// })


// function Resetdisplay(){
//     Resetbtn.addEventListener("click",()=>{
//         Display_input.value="";    
//     })
 
// };
// Deletebtn.addEventListener("click",()=>{
//     if(length.Display_input >3){
//         // Display_input.value--
//         console.log(length.Display_input)
         

//     }else{
//         return
//     }
// })

// function Preventnondigit(){
//     // if()
// }





    




































// })



document.addEventListener("DOMContentLoaded",()=>{


    ///////////Getting all elements through DOM
const Display_input=document.getElementById("Display_");
const Numbers=document.querySelectorAll(".Btn");
const Resetbtn=document.getElementById("button1");
const Plusbtn=document.getElementById("plus_id");
const Minusbtn=document.getElementById("-id");
const Divisionbtn=document.getElementById("divideid");
const Mulbtn=document.getElementById("multiplyid");
const Deletebtn=document.getElementById("del_id");
const Operator=document.querySelectorAll(".operator");


let count=[];

let Before=[];
let after=[];


    Numbers.forEach(Nmclicked=>{

        Nmclicked.addEventListener("click",(e)=>{
            // console.log("Clicked on ",e)
         let Get=Nmclicked.textContent.trim();
            console.log(Get)
        Display_input.value +=Get;
        // console.log(typeof(Nmclicked.textContent))
            
           
        }); 
      
        //Count Display value
        Nmclicked.addEventListener("click",()=>{
            let Valuedisplay=Display_input.value;
            let Getdisplayln=Valuedisplay.length;
            // count +=count +Getdisplayln;
            count.push(Getdisplayln)
            
            console.log(Getdisplayln)
            console.log(count)
            
        })

    });





Operator.forEach(Signclicked=>{
    // console.log(Signclicked)
    Signclicked.addEventListener("click",()=>{
        console.log(Signclicked.textContent)
    });

  
})


/////COUNT DISPLAY TOTAL DIGITS






// if(count.length >3){
//     console.log(count)
// }


    //TREE IS ENDING HERE
})


















// 

// // // const numbers=document.querySelectorAll(".Btn");
// // const operators=document.querySelectorAll(".operator");

// // const num1=4;
// // const num2=34


// // operators.forEach(Sign=>{

// //      let res;
     
// //     Sign.addEventListener("click",()=>{
// //           let Get =Sign.innerHTML;
// //           console.log(Get);
          
// //     switch(Get){
// //         case"+":
// //          res=num1+num2;
// //         break;
// //         case"-":
// //         res=num1-num2;
// //         break;
// //          case"/":
// //          res=num1/num2;
// //         break;
// //          case"*":
// //          res=num1*num2;
// //         break;
// //         default:
// //             console.log("TRY AGAIN DUMB")
        

// //     };
// //     console.log(res)

// //     })
    
// // })




// // click value then press operator then again value then hit enter and calculate user value 
// // listener on digits pressed store in variable then oper

// // then opertor clear screen and get second value 



// document.addEventListener("DOMContentLoaded",()=>{


//     const numbers=document.querySelectorAll(".Btn");
//     const operators=document.querySelectorAll(".operator");
//     const Display=document.getElementsByClassName(".display");

//         let num1=[];
//         let num2=[];

//         let Check="true"

       
    

    
//     numbers.forEach(Digit=>{
//     Digit.addEventListener("click",()=>{
//     let Value=Digit.textContent.trim();
//       console.log(Value);
//     //   console.log(typeof Value)
//     //   num1.push(Value);
//       if(Check){ num1.push(Value);}
      
//      })
     
//      });

    

  
   

  
  

//     operators.forEach(Sign=>{
//     Sign.addEventListener("click",()=>{
//         Check=false;
//     let Signget=Sign.textContent.trim();
//       console.log(Signget);
//        Add();
       
//     //    if(!Check) console.log("not possible")
//     });
   
       
//     });


//     function Add(){

//         numbers.forEach(Digit=>{
//         Digit.addEventListener("click",()=>{
//        let Value=Digit.textContent.trim();
//        console.log(Value);          
//        num2.push(Value);
//     //    console.log(Value)     
    
//     })

          
      
//         })
        
      
//     }




// //  if(Check=="true"){
// //         D1();
// //      }else{
        
// //         // return D1();
// //      }

//    if(num1.length>3){
//         console.log(num1);
//         console.log(num2)
//     }


//     //////War ends here 
// })



// // $(document).ready(addGreenClass);
// // $(button).click(function() {
// //     addRedClass();
// //     addGreenClass();
// // });