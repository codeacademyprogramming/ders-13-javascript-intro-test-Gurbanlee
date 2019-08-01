var fesilAdlari = prompt("Zehmet olmasa ayini oyrenmek istediyiniz fesili daxil edin!")

// if (fesilAdlari !== 'Qish', 'Yaz', 'Yay', 'Payiz') {
//     document.write("Zehmet olmasa feslin adini duzgun daxil edin!");
// }

if (fesilAdlari == 'Qish') {
    document.write("Dekabr<br/>", "Yanvar<br/>", "Fevral");
}

else if (fesilAdlari == 'Yaz') {
    document.write("Mar<br/>", "Aprel<br/>", "May");
}

else if (fesilAdlari == 'Yay') {
    document.write("Iyun<br/>", "Iyul<br/>", "Avqust");
}

else if (fesilAdlari == 'Payiz') {
    document.write("Sentyabr<br/>", "Oktyabr<br/>", "Noyabr");
} else {
    alert("Bele bir fesil yoxdur!");
}
