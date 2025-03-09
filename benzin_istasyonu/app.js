let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

let secilen = prompt("Yakıt tipinizi seçin");
let litre = Number(prompt("kaç litre yükleyecek sizin"));
let toplam;

if(secilen == "dizel"){
    toplam = dizel*litre;
    alert("Ödenecek tutar: "+toplam);
}
else if(secilen == "benzin"){
    toplam = benzin*litre;
    alert("Ödenecek tutar: "+toplam);
}
else if(secilen == "lpg"){
    toplam = lpg*litre;
    alert("Ödenecek tutar: "+toplam);
}
else{
    alert("Doğru yakıt tipini girdiğinizden emin olun.");
}
