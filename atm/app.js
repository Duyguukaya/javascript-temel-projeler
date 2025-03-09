let yeni_satir = "\r\n";


let metin = "1- Bakiye görüntüle"+yeni_satir
+"2-Para çekme"+ yeni_satir
+"3-Para yatırma"+ yeni_satir
+"4-Çıkış"+ yeni_satir
+"Lütfen bir değer seçiniz.";

let secim = prompt(metin);
let bakiye = 1000;3

switch(secim)
{
    case "1":
        alert("Bakiyeniz:" +bakiye);
        break;
    case "2":
        let cekilecekPara = Number(prompt("Lütfen çekmek istediğiniz tutarı girin."));
        if(cekilecekPara<=bakiye){
            bakiye = bakiye-cekilecekPara;
            alert("Kalan para"+ bakiye);
        }
        else{
            alert("bakiyenizden fazla para çekemezsizin"+ bakiye);
        }
        break;
    case "3":
        let yatiralacakPara = Number(prompt("Lütfen yatırmak istediğiniz tutarı girin.")) ;
        bakiye = bakiye+ yatiralacakPara; 
        alert("bakiyeniz:"+ bakiye);    
        break;
    case"4":
        break;
    default:
    prompt("geçerli işlem giriniz");        
}
