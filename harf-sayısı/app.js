let harf = prompt("Bir harf giriniz");
let metin = "Bugün hava çok güzel olduğundan tatlı yemeye gidelim."

function harfSayi(harf){
   let toplam=0;
   for(let i=0;i<metin.length;i++){
        if(metin.charAt(i).toLocaleLowerCase()===harf.toLocaleLowerCase()){
            toplam+=1;
        }
   }
   return toplam;
}

let sayi = harfSayi(harf);
alert(sayi);