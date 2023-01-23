// Homework 6
const arr = [1, -1, 2, -2, 3];
const findOddNumber = (arr = []) => {
    let count = 0;
    let number = arr.reduce((total, num) => {
        if (num >= 0)
            count++
        else
            count--
        return total + num;
    }, 0)
    return number / Math.abs(count);
};
console.log(findOddNumber(arr));