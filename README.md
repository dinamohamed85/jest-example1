# -- First example to steup & learn javascript unit testing with jest.

- 0- npm install -g npm	//download the latest version of node
- 1- npm init -y   //create package.json file and intialize defualt values into it
- 2- npm i --save-dev jest	//create node_moudules folder
- 3- Change package.json\ test: "jest"
- 4- npm test  // no thing happens
- 5- Create new file has same name like js files (.test) or (.spec) -->   <br />
    "sum.test.js"
- 6- into js file: add export scripts to be imported into another file -->   <br />
    module.exports= function_name 
- 7- into test file: add import script for js file as first line -->  <br />
    const function_name= require('./file_name')
- 8- into test file: add test method with tow parameters, parameter one is for description for what the test is doing, second parameter is a callback function to waht it called to run your test (the expected result happens)   <br />
	test('adds two numbers', () =>{})
- 9- Add the built in function to do the testing (expect somethig to be equal something else) (expect) -->  <br />
	expect(sum(1,2)).toBe(3)     <br />
	expect(sum(1,2)).not.toBe(3)     <br />
	expect(cloneArray(array)).toEqual(array)
- 10- npm test
- 11- What parts of code are tested, which functions and lines get tested:   <br />
	change package.json\ test: "jest --coverage" 
- 12- Move the test files to folder (__test__)
- 13- You sould get result like this :-
<table >
 <tr>
  <td><img src='screenshots/img5.png' width='100%' /></td>
 </tr>
 </table>

# Some notes about testing :-
    Academind Youtube channel
    https://www.youtube.com/watch?v=r9HdJ8P6GQI&t=1516s

<table >
 <tr>
  <td><img src='screenshots/img1.png' width='100%' /></td>
  <td><img src='screenshots/img2.png' width='100%' /></td>
 </tr>
 <tr> 
  <td><img src='screenshots/img3.png' width='100%' /></td>
  <td><img src='screenshots/img4.png' width='100%' /></td>
 </tr>
</table>
