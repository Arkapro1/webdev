// <----4.0----> type conversion
//   <----tip----> when taking in put that's always a string;
//     ex 1->
//         let age = prompt("enter your age➡ ");
//                 after tc
//                         console.log("now age is" ,typeof age);
//                         age+=1;
//                         console.log("your age is ",age);
//                         console.log(age);
//                 before type conversion
//                         age=Number(age);
//                         console.log("now age is" ,typeof age);
//                         age++;
//                         console.log("your age is ",age);
     
//     ex 2-> 
                            let x ;
                            let y ;
                            let z ;
                            x = Number ( " 3.14 " ) ;
                            y = String ( 3.14 ) ;
                            z = Boolean ( " pizza " ) ;
                            console.log ( x , typeof x ) ;
                            console.log ( y , typeof y ) ;
                            console.log ( z , typeof z ) ;
                 