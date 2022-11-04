//task1-Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
function task1(num1, num2) 
{
  return ((num1 == 100 || num2 == 100) || (num1 + num2 == 100));
}
console.log(task1(20, 70)); //false
console.log(task1(70, 30)); //true
console.log(task1(100, 40)); //true


//task2-Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
function task2(string)
{
  if(string===null || string===undefined || string.substring(0,4)==='New!')
  {
    return string;
  }
  return "New!" +string;
}
console.log(task2("Task")); //New!Task
console.log(task2("New!Task")); //New!Task

let string = 'Task'; 
let result = string.split(' ').map(x=> 'New!' + string).join(' ');
console.log(result); //New!Task


//task3-Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.
function task3(word)
{
  if (word.length >= 3)
  {
    last = word.substring(word.length-3);
    return last + word + last;
  }
  else {return word};
}
console.log(task3('Parvizyan')); //'yan'Parvizyan'yan'
console.log(task3("cb")); //cb


//task4-Given two values, write a JavaScript program to find out which one is nearest to 100
function task4(a,b)
{
  if(a>b){return a};
  if(a<b){return b};
  if(a=b){return false};
}
console.log('Nearest to 100 (69,31): ', task4(69,31)); //69
console.log('Nearest to 100 (-69,-31): ', task4(-69,-31)); //-31
console.log('Nearest to 100 (69,69): ', task4(69,69)); //false


//task5-Write a JavaScript program to find the number of even digits in a an array of integers
function task5()
{
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let evens = arr.filter(x=> x%2==0);
  console.log("Even numbers :" + evens );
}
task5(); //Even numbers :2,4,6,8,10