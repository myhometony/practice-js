let hello = "Hello World";
alert(hello);
alert("Hello" + "World!!");


let orange = 100;
let apple = 120;

if(orange < apple){
  alert("みかんの値段がリンゴより安い");
}else if(orange == apple){
  alert("みかんとリンゴが同じ値段");
}else{
  alert("みかんの値段がリンゴより高い");
}


let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert("２をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です");


let i;
let num2 = 0;

for(i=1;i<11;i++){
  num2 = num2 + i;
}

alert("１から１０まで足し算した結果は" + num + "です");