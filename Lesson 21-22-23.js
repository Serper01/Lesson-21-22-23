// 15 EASY TASKS

//1
let number = 1;
while(number <= 10){
    console.log(number)
    number ++;
}
  //2
let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

//3
let a = 1;
while (a <= 20) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}
//4
let factorial = 1
let number2 = Number(prompt("Введите число: "));
while (number2 > 1){
     factorial *= number2
     number2 -= 1
 }
 console.log(factorial)
 
//5
let num = prompt("Введите число:");
let sum1 = 0;
num = Number(num);
while (num > 0) {
    sum1 += num % 10;  
    num = Math.floor(num / 10);
}
alert("Сумма цифр:" + sum1);

//7
let maxNumber = prompt("Введите максимальное число:");
let number1 = 3;
while (number1 <= maxNumber) {
    console.log(number1);
    number1 += 3;
}

//8
let customString = "Пример строки";
let count = 0;
let index = 0;
while (index < customString.length) {
    count++;
    index++;
}
console.log("Количество символов в строке: " + count);

//9
let array = [1, 2, 3, 4, 5];
let y = 0;
while (y < array.length) {
    console.log(array[y]);
    y++;
}

//10
let sum2 = 0;
let y2 = 0;
while (y2 < array.length) {
    sum2 += array[y2];
    y2++;
}
console.log("Сумма всех элементов массива: " + sum2);

//11
let allPositive = true;
let i1 = 0;
while (i1 < array.length) {
    if (array[i1] <= 0) {
        allPositive = false;
        break;
    }
    i1++;
}
console.log(allPositive ? "Все элементы положительные." : "Есть отрицательные элементы.");

//12
let sum3 = 0;
let i3 = 0;
let count1 = array.length;
while (i3 < count1) {
    sum3 += array[i3];
    i3++;
}
let average = sum3 / count1;
console.log("Среднее арифметическое значение элементов массива:", average);

//13
let min = array[0];
let i4 = 1;
while (i4 < array.length) {
    if (array[i4] < min) {
        min = array[i4];
    }
    i4++;
}
console.log("Наименьший элемент массива:", min);

//14
let arr = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
let oddCount = 0;
let x = 0;
while (x < arr.length) {
    if (arr[x] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    x++;
}
console.log("Четных элементов:", evenCount);
console.log("Нечетных элементов:", oddCount);

//15
let arr1 = [1, -2, 3, -4, 5];
let z = 0;
while (z < arr1.length) {
    if (arr1[z] < 0) {
        arr1.splice(z, 1); 
    } else {
        z++;
    }
}
console.log("Массив без отрицательных чисел:", arr1);


// 10 MEDIUM TASKS

//1
let str = "Hello,World!";
let strToArray = str.split("");
strToArray.reverse();
console.log(strToArray);

//2
let numbers = [5, 3, 9, 1, 10, -2, 7];
let minNum= numbers[0];
let c = 1;
while (c < numbers.length) { 
    if (numbers[c] < minNum) { 
        minNum = numbers[c]; 
    }
    c++;
}
console.log("Наименьшее число: " + minNum); 

//3

//4
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];
let combinedArray = []; 
let k = 0;
let j = 0;
while (k < firstArray.length) {
    combinedArray.push(firstArray[k]); 
    k++;
}
while (j < secondArray.length) {
    combinedArray.push(secondArray[j]); 
    j++; 
}
console.log(combinedArray);

//5
let array1 = [1, 2, 2, 3, 4, 4, 5]; 
let uniqueArray = [];
let j1 = 0;
while (j1 < array1.length) { 
    if (!uniqueArray.includes(array1[j1])) { 
        uniqueArray.push(array1[j1]); 
    }
    j1++;
}
console.log("Массив без дубликатов: " + uniqueArray);

//6























