let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("boyunuzu metere cinsinden giriniz"));

let index =  kilo/(boy*boy);

if(index<18.5){
     alert("ideal kilonun altındasınız."+ index);
}
else if( 18.5<=index && index<=24.9){
     alert("ideal kilonuzdasınız." + index);
}
else if( 25<=index && index<=29.9){
    alert("ideal kilonuzun üstündesiniz."+ index);
}
else if( 30<=index && index<=39.9){
    alert("ideal kilonuzun çok üstündesiniz."+ index);
}
else if(index<=40){
    alert("morbid obez.");
}
else{
    alert("lütfen geçerli değerler girin."+ index);
}