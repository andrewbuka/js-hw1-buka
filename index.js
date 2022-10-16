/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
  // write code here
  if (num % 2 === 0) {
    return true;
  }

  else {
    return false;
  }
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
  // write code here
  if (num1 > num2){
    return `${num1} is the largest number`;
  }

  else if (num1 < num2) {
    return `${num2} is the largest number`;
  }

  else {
    return `${num1} is equal to ${num1}`;
  }
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
  // write code here
  if (side1 === side2 && side1 === side3 && side2 === side3) {
    return 'Equilateral triangle';
  }

  else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'Isosceles triangle';
  }

  else {
    return 'Scalene triangle';
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {
  // write code here
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 'The Month has 30 days';
  }

  else if (month === 2) {
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
      return 'The Month has 29 days';
    }

  else {
    return 'The Month has 28 days';
  }

  }
  else if (month > 12) {
    return `Invalid Month of value ${month}`;
  }

  else {
    return 'The Month has 31 days'
  }
}

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
  // write code here
  if (operation === 'add') {
    return num1 + num2;
  }

  else if (operation === 'subtract') {
    return num1 - num2;
  }

  else if (operation === 'multiply') {
    return num1 * num2;
  }

  else if (operation === 'divide') {
    return num1 / num2;
  }

  else if (operation === 'modulus') {
    return num1 % num2;
  }
  
  else {
    return `${operation} is an invalid operation`;
  }
}

/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
  // write code here
  let a, b, c, d, e, f, g, h = null;
  for (let i = 2; i <= 9; i++){
    if (i === 2 ) {
      a = `==== ${i} ==== \n`;              
    }  

    if (i === 3) {
      b = `==== ${i} ==== \n`;
    } 
    if (i === 4) {
      c = `==== ${i} ==== \n`;
    } 
    if (i === 5) {
      d = `==== ${i} ==== \n`;
    } 

    if (i === 6) {
      e = `==== ${i} ==== \n`;
    } 

    if (i === 7) {
      f = `==== ${i} ==== \n`;
    } 

    if (i === 8) {
      g = `==== ${i} ==== \n`;
    } 

    if (i === 9) {
      h = `==== ${i} ==== \n`;
    } 
  
    for (let j =1; j <=10; j++){

      if (j <=10 && j >= 1 && i === 2) {
        a += `${i} * ${j} = ${i * j} \n`;
      } 
      
      if (j <= 10 && j >= 1 && i === 3) {
        b += `${i} * ${j} = ${i * j} \n`;
      } 
      
      if (j <= 10 && j >= 1 && i === 4) {
        c += `${i} * ${j} = ${i * j} \n`;
      } 

      if (j <= 10 && j >= 1 && i === 5) {
        d += `${i} * ${j} = ${i * j} \n`;
      } 

      if (j <= 10 && j >= 1 && i === 6) {
        e += `${i} * ${j} = ${i * j} \n`;
      } 

      if (j <= 10 && j >= 1 && i === 7) {
        f += `${i} * ${j} = ${i * j} \n`;
      } 
      if (j <= 10 && j >= 1 && i === 8) {
        g += `${i} * ${j} = ${i * j} \n`;
      } 

      if (j <= 10 && j >= 1 && i === 9) {
        h += `${i} * ${j} = ${i * j} \n`;
      }       
    }
  }
  
  return a + b + c + d + e + f + g + h;
};

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
