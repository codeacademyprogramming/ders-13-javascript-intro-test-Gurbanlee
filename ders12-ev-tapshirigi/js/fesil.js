function FesilAdlari() {

    var fesilAdlari = prompt("Zehmet olmasa ayini oyrenmek istediyiniz fesili daxil edin!")

    if (fesilAdlari == 'Qish' || 'Qis' || 'qish' || 'qis') {
        document.write("Dekabr<br/>", "Yanvar<br/>", "Fevral");
    }

    else if (fesilAdlari == 'Yaz' || 'yaz') {
        document.write("Mart<br/>", "Aprel<br/>", "May");
    }

    else if (fesilAdlari == 'Yay' || 'yay') {
        document.write("Iyun<br/>", "Iyul<br/>", "Avqust");
    }

    else if (fesilAdlari == 'Payiz' || 'payiz') {
        document.write("Sentyabr<br/>", "Oktyabr<br/>", "Noyabr");
    } else {
        alert("Bele bir fesil yoxdur!");
    }
}