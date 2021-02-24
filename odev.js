const calc = (num1, num2, operator) => {
    if (operator == "+"){
        result = num1 + num2;
        return result;
    }else if (operator == "-"){
        result = num1 - num2;
        return result;
    }else if (operator == "*"){
        result = num1 * num2;
        return result;
    }else if (operator == "/"){
        result = num1 / num2;
        return result;
    }
}
const output = {
    islemSonucu: calc(5,0,"/"),
    hata: []
};
if (output.islemSonucu == Infinity) {
    output.hata.push("sıfıra bölünme hatası");
}
if (output.islemSonucu == undefined) {
    output.hata.push("islem +,-,*,/ den biri olmalidir.");
}
if (Object.is(output.islemSonucu, NaN)) {
    output.hata.push("bir sayı olmalıdır");
}
console.log(output);






