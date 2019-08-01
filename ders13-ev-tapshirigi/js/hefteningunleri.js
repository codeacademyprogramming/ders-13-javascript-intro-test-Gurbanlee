var hefteGunleri = prompt("Zehmet olmasa heftenin gunlerini daxil edin!")

if (hefteGunleri > 7) {
    document.write("Duzgun daxil et");
} else if (hefteGunleri == 1) {
    document.write("Bazar ertesi");
} else if (hefteGunleri == 2) {
    document.write("Chershenbe axshami");
} else if (hefteGunleri == 3) {
    document.write("Chershenbe");
} else if (hefteGunleri == 4) {
    document.write("Cume axshami");
} else if (hefteGunleri == 5) {
    document.write("Cume");
} else if (hefteGunleri == 6) {
    document.write("Shenbe");
} else if (hefteGunleri == 7) {
    document.write("Bazar");
} else {
    alert("Bele bir gun yoxdur!");
}