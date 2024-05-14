
var userinput=prompt("Please enter your age.....");
if(userinput>=18){
}else{
   for(let i=0;i>=-1;i++){
    alert("Sorry! you are not eligable to vote");
   }
}
let sym1=document.getElementById("sym1");
let sym2=document.getElementById("sym2");
let sym3=document.getElementById("sym3");
let sym4=document.getElementById("sym4");
let sym5=document.getElementById("sym5");
let sym6=document.getElementById("sym6");
let sym7=document.getElementById("sym7");
let sym8=document.getElementById("sym8");
let sym9=document.getElementById("sym9");
let sym10=document.getElementById("sym10");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seveen=document.getElementById("seveen");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let ten=document.getElementById("ten");
var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;
var c7=0;
var c8=0;
var c9=0;
var c10=0;

var score1=document.getElementById("score1");
function firstbutton(){
var originalcolor=sym1.style.background;
sym1.style.backgroundColor="red";
var s1=c1+=1;
score1.innerHTML=s1;
setTimeout(function(){
    sym1.style.backgroundColor=originalcolor;
    sym2.style.backgroundColor=originalcolor;
},1000);
}
one.addEventListener('click',firstbutton);

var score2=document.getElementById("score2");
function secondbutton(){
var originalcolor=sym1.style.background;
sym2.style.backgroundColor="red";
var s2=c2+=1;
score2.innerHTML=s2;
setTimeout(function(){
    sym2.style.backgroundColor=originalcolor;
},1000);
}
two.addEventListener('click',secondbutton);

var score3=document.getElementById("score3");
function thirdbutton(){
var originalcolor=sym1.style.background;
sym3.style.backgroundColor="red";
var s3=c3+=1;
score3.innerHTML=s3;
setTimeout(function(){
    sym3.style.backgroundColor=originalcolor;
},1000);
}
three.addEventListener('click',thirdbutton);

var score4=document.getElementById("score4");
function fourthbutton(){
var originalcolor=sym1.style.background;
sym4.style.backgroundColor="red";
var s4=c3+=1;
score4.innerHTML=s4;
setTimeout(function(){
    sym4.style.backgroundColor=originalcolor;
},1000);
}
four.addEventListener('click',fourthbutton);

var score5=document.getElementById("score5");
function fifthbutton(){
var originalcolor=sym1.style.background;
sym5.style.backgroundColor="red";
var s5=c5+=1;
score5.innerHTML=s5;
setTimeout(function(){
    sym5.style.backgroundColor=originalcolor;
},1000);
}
five.addEventListener('click',fifthbutton);

var score6=document.getElementById("score6");
function sixthbutton(){
var originalcolor=sym1.style.background;
sym6.style.backgroundColor="red";
var s6=c6+=1;
score6.innerHTML=s6;
setTimeout(function(){
    sym6.style.backgroundColor=originalcolor;
},1000);
}
six.addEventListener('click',sixthbutton);

var score7=document.getElementById("score7");
function seveenthbutton(){
var originalcolor=sym1.style.background;
sym7.style.backgroundColor="red";
var s7=c7+=1;
score7.innerHTML=s7;
setTimeout(function(){
    sym7.style.backgroundColor=originalcolor;
},1000);
}
seveen.addEventListener('click',seveenthbutton);

var score8=document.getElementById("score8");
function eighthbutton(){
var originalcolor=sym1.style.background;
sym8.style.backgroundColor="red";
var s8=c8+=1;
score8.innerHTML=s8;
setTimeout(function(){
    sym8.style.backgroundColor=originalcolor;
},1000);
}
eight.addEventListener('click',eighthbutton);

var score9=document.getElementById("score9");
function ninthbutton(){
var originalcolor=sym1.style.background;
sym9.style.backgroundColor="red";
var s9=c9+=1;
score9.innerHTML=s9;
setTimeout(function(){
    sym9.style.backgroundColor=originalcolor;
},1000);
}
nine.addEventListener('click',ninthbutton);

var score10=document.getElementById("score10");
function tenthbutton(){
var originalcolor=sym1.style.background;
sym10.style.backgroundColor="red";
var s10=c10+=1;
score10.innerHTML=s10;
setTimeout(function(){
    sym10.style.backgroundColor=originalcolor;
},1000);
}
ten.addEventListener('click',tenthbutton);


var result=document.getElementById("result");
var boxsecond=document.querySelector(".box-second");
result.addEventListener('click',function(){
    var output=prompt("Voting completed? (yes/no). Kindly after this there will be no chance to vote.....")
    if(output=="yes"){
        boxsecond.classList.add('animate');
    }
})

