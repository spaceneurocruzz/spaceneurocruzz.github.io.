function max(numbers){
    let max = numbers[0];
    for(let ix = 0; ix < numbers.length; ix++){
        max = (numbers[ix] > max) ? numbers[ix] : max;
    }
    return max;
}

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));