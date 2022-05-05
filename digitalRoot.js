// // { Driver Code Starts
// //Initial Template for javascript
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });

//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
//     let t = parseInt(readLine());
//     let i = 0;
//     for(;i<t;i++)
//     {
//         let n = parseInt(readLine());
//         let obj = new Solution();
//         console.log(obj.digitalRoot(n));

//     }
// }// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @returns {number}
*/

// class Solution {
//     isLucky(n)
//     {
//         // code here
//       const arr = Array(n).fill().map((_, i) => i+1);

//       return this.reduce(arr,2,n);
//     }
//     reduce(arr,i,n){
//     if(n===1) return true;
//     if(n===2) return false;

//     const index = arr.findIndex(elem=>elem===n);
//     if(index === -1) return false;
//     if(index+1>=i) {
//         arr = arr.filter((elem,index)=> {
//                         if(index+1<i) return true;
//                         return (index+1)%i !== 0;
//                     });
//         return this.reduce(arr,i+=1,n);
//     }
//     return true;

//     }
// }


// class Solution 
// {
//     //Function to find list of all words possible by pressing given numbers.
//     constructor(){
//         this.numPad=['','','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
//     }

//     possibleWords(a, N)
//     {
//         //your code here
//         return this.generateArray('',N,0,[],a);
//     }

//     generateArray(iString, N, number,inputArray,a) {
//         if(iString.length === N) {
//             inputArray.push(iString.toLowerCase());
//             return;
//         }
//         for (let i = 0; i < this.numPad[a[number]].length; i++) {
//             // if (number < N-1) number++;
//             this.generateArray(iString + this.numPad[a[number]][i],N,number+1,inputArray,a);
//             // if (number > -1) number--;
//         }
//         console.log(inputArray);
//         return inputArray;

//     }

// }

// class Solution {
//   rremove(s = "") {
//     //code here
//     // base case 
//     if (!s || s.length === 1) {
//       return s;
//     }
//     let incomingString = JSON.parse(JSON.stringify(s));
//     let matchFound = false;
//     let cIndex = -1;
//     let nextLetter = "";
//     let currentLetter = "";
//     let initialIndex = -1;
//     let nonMatchingFound = false;
//     for (let index = 0; index < s.length - 1; index++) {
//       nextLetter = s[index + 1];
//       currentLetter = s[index];
//       if (nextLetter === currentLetter) {
//         cIndex = index;
//         // nIndex = index+1;
//         if (initialIndex === -1) {
//           initialIndex = cIndex;
//           // console.log('initial index', initialIndex);
//         }
//         matchFound = true;

//       } else {
//         // console.log('index', index);
//         if (initialIndex != -1) {
//           // console.log('string removal',s);
//           s = s.substring(0, initialIndex) + s.substring(index + 1);
//           index = index - (index - initialIndex) - 1;
//         }
//         // console.log('string ',s);

//         nonMatchingFound = true;
//         cIndex = -1;
//         initialIndex = -1;
//       }

//     }

//     if (!matchFound) {
//       return s;
//     } else if (!nonMatchingFound) {
//       return "";
//     } else {
//       // console.log('match found', s);
//       if(s.length === incomingString.length)
//       s = s.substring(0,initialIndex);
//       return this.rremove(s);
//     }
//   }
// }

// class Solution {
//   constructor() {}
//   rremove(s){
//     // console.log('incoming s',s);
//     if(s.length === 0 || s.length === 1){
//       return s;
//     }
//     let temp = "";
//     for(let index = 0; index<s.length;index++) {
//      if(s[index]!==s[index+1] && s[index-1]!==s[index]) {      
//       temp+=s[index];
//      } 
//     }
//     // console.log('temp', temp);
//     if(temp === s) {
//       return temp;
//     }else {
//       return this.rremove(temp);
//     }

//   }
// }

class Solution 
{
    //Function to return the lexicographically sorted power-set of the string.

    constructor() {
        this.array = [];
    }
    powerSet(inputString)
    {
        // code here
        this.array = [];
        this.generateSet(inputString, "", 0);
        return this.array;
        
    }
    
    generateSet(inputString, s, index) {
        if(inputString.length === index) {
            this.array.push(s);
            return;
        }
        this.generateSet(inputString, s, index+1);
        this.generateSet(inputString, s+inputString[index], index+1);
        
    }
}

const sol = new Solution();
console.log(sol.powerSet("abc"));
