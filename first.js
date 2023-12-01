let height = prompt('What is your height?');
let weight = prompt('What is your weight?');
let bmi = weight/(height*height)
let outcome;


if (bmi<18) {
    outcome = 'Siz, ceki azligindan eziyyet chekirsiniz';
} else if (18<=bmi<20) {
    outcome = 'Sizin chekiniz azdir. Lakin saglamliq uchun zereli deyil';
} else if (20<=bmi<26) {
    outcome = 'Sizin chekiniz normaldir. Tebrikler!!!';
} else if (26<=bmi<28) {
    outcome = 'Sizin artiq chekiniz var';   
} else if (28<=bmi<31) {
    outcome = 'Siz, 1-ci dereceli artiq chekiden eziyet chekirziniz';
} else if (31<=bmi<36) {
    outcome = 'Siz, 2-ci dereceli artiq chekiden eziyet chekirziniz';
} else if (36<=bmi<41) {
    outcome = 'Siz, 3-ci dereceli artiq chekiden eziyet chekirziniz';
} else if (bmi>=41) {
    outome = 'Siz, 4-ci dereceli artiq chekiden eziyet chekirziniz';
} else {
    outcome = 'Sizin bashinizda problem var';
}

document.getElementById('outcome').innerHTML = outcome;