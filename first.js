let height = prompt('What is your height?');
let weight = prompt('What is your weight?');
let bmi = weight/(height*height)
let nweightmax = 25*(height*height)
let nweightmin = 20*(height*height)
let outcome;


if (bmi<18) {
    outcome = `Siz, ceki azligindan eziyyet chekirsiniz. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else if (18<=bmi && bmi<20) {
    outcome = `Sizin chekiniz azdir. Lakin saglamliq uchun zereli deyil. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else if (20<=bmi && bmi<26) {
    outcome = `Sizin chekiniz normaldir. Tebrikler!!!`;
} else if (26<=bmi && bmi<28) {
    outcome = `Sizin artiq chekiniz var. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;   
} else if (28<=bmi && bmi<31) {
    outcome = `Siz, 1-ci dereceli artiq chekiden eziyet chekirziniz. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else if (31<=bmi && bmi<36) {
    outcome = `Siz, 2-ci dereceli artiq chekiden eziyet chekirziniz. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else if (36<=bmi && bmi<41) {
    outcome = `Siz, 3-ci dereceli artiq chekiden eziyet chekirziniz. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else if (bmi>=41) {
    outome = `Siz, 4-ci dereceli artiq chekiden eziyet chekirziniz. Sizin normal chekiniz ${nweightmin} kg - ${nweightmax} kg olmalidir`;
} else {
    outcome = `Sizin bashinizda problem var`;
}

document.getElementById('outcome').innerHTML = outcome;