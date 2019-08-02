function Uchbucag() {


    var a, b, c;
    a = prompt('Zehmet olmasa uchbucagin sol terefinin (a) uzunlugunu daxil edin!');
    b = prompt('Zehmet olmasa uchbucagin sag terefinin (b) uzunlugunu daxil edin!');
    c = prompt('Zehmet olmasa uchbucagin ashagi terefinin (c) uzunlugunu daxil edin!');


    if (a < b + c) {
        alert('Esil uchbucag bele olar!');
    } else if (b < a + c) {
        alert('Esil uchbucag bele olar!');
    } else if (c < a + b) {
        alert('Esil uchbucag bele olar!');
    } else {
        alert('Bele uchbucag olmur!');
    }
}