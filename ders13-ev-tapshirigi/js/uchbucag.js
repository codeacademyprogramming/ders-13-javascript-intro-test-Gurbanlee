var a = prompt("Zehmet olmasa uchbucagin sol terefinin (a) uzunlugunu daxil edin!");
var b = prompt("Zehmet olmasa uchbucagin sag terefinin (b) uzunlugunu daxil edin!");
var c = prompt("Zehmet olmasa uchbucagin ashagi terefinin (c) uzunlugunu daxil edin!");


if (a < b + c) {
    document.write("Esil uchbucag bele olar!");
} else if (b < a + c) {
    document.write("Esil uchbucag bele olar!");
} else if (c < a + b) {
    document.write("Esil uchbucag bele olar!");
} else if (b > a - c) {
    document.write("Esil uchbucag bele olar!");
} else if (c > a - b) {
    document.write("Esil uchbucag bele olar!");
} else if (a > b - c) {
    document.write("Esil uchbucag bele olar!");
} else {
    alert("Bele uchbucag olmur!");
}