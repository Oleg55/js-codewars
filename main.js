//https://www.codewars.com/kata/546f922b54af40e1e90001da Replace With Alphabet Position

"use strict";

function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const newTextMass = text.split(' ').join('').toLowerCase().split('');
    const newNumbeAlphabet = [];

    newTextMass.forEach((item) => {
        let numElement = alphabet.indexOf(item);
        if(numElement !== -1)newNumbeAlphabet.push(numElement + 1)
    });

    text = newNumbeAlphabet.join(' ');

    return console.log(text);
}

alphabetPosition();


//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript Counting Duplicates

function duplicateCount(text = "Indivisibility"){
    
    const newTextMass = text.toLowerCase().split('');

    const newElemMass = [];

    let count = 0;
    
    for (let i = 0; i < newTextMass.length -1; i++) {
        let localCount = 0;
        for(let j = 0; j < newTextMass.length; j++){
            if(newTextMass[i] === newTextMass[j]) {
                localCount += 1;
                if(localCount === 2){
                    if(newElemMass.indexOf(newTextMass[i]) !== -1){
                        localCount = 0;
                    }else{
                        newElemMass.push(newTextMass[i]);
                        localCount = 0;
                    }

                }
            }
        }
    }

    return newElemMass.length;
}
duplicateCount();



//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript  Complementary DNA


function DNAStrand(dna = "AAAAA"){

    const newDna =  dna.toLowerCase().split('');
    console.log(newDna);

    const newDnaMass = newDna.map(function(item, index, arr){
        return item === 'a' ?  item = 't' : item === 't' ? item = 'a' : item === 'g' ? item = 'c' : item === 'c' ? item = 'g' : '';
    });

    console.log(newDnaMass.join('').toUpperCase());
}

DNAStrand()


//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript  Two to One

function longest(s1 = "xyaabbbccccdefww", s2 = "xxxxyyyyabklmopq" ) {
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const s1Array = s1.split('').concat(s2.split(''));

    const s1ArraySort = {};

    s1Array.forEach((item) => {
        const indexItem = alphabet.indexOf(item);
        s1ArraySort[indexItem] = item;
    });

    const afterSortArr = [];
    
    for (arr in s1ArraySort) {
        afterSortArr.push(s1ArraySort[arr]);
    }

    return afterSortArr.join('')
}

longest()


//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript Stop gninnipS My sdroW!

function spinWords(string = "This is another test"){
    const newStringArr = string.split(' ');
    const reversStringArr = newStringArr.map(function(item) {
       // console.log(item.split('').reverse());
        const itemArr = item.split('');
        if( itemArr.length >= 5){
            return itemArr.reverse().join('').trim();
        }else{
            return itemArr.join('').trim();
        }
        
    })
   // console.log(newStringArr);
    //console.log(reversStringArr.join(' '));
    return reversStringArr.join(' ');
}


spinWords()


//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){

    const newNamesArr1 = []
    const newNamesArr2 = []
    
    const arrNames =  names.map(function(item) {
        return item.name
    })
    if(arrNames.length >= 3) {
        let bedoreLastElement = arrNames.length - 2
        let lastElement = arrNames.length - 1
        newNamesArr1.push(arrNames.pop(lastElement))
        newNamesArr1.push(arrNames.pop(bedoreLastElement))
      //  console.log(newNamesArr1);
      //  console.log(arrNames);
        let newStr1 = arrNames.join(', ');
      //  console.log(newStr1.length);
        if(newStr1.length > 0) {
            newStr1 = newStr1 + ', ';  
        }
       const reversNamesArr1 = newNamesArr1.reverse()
        let newStr2 =  reversNamesArr1.join(' & ');
       // return newStr1 + newStr2
          console.log(newStr1 + newStr2);
    }else if(arrNames.length === 2){
        let newStr3 = arrNames.join(' & ');
        let newStr4 =  newNamesArr1.join(', ');
        console.log(newStr3 + newStr4);
      //return newStr3 + newStr4
    }else if(arrNames.length === 1) {
        let newStr5 = arrNames.join(' ');
        console.log(newStr5);
      //  return newStr5
    }else if(arrNames.length === 0) {
        console.log('');
       // return ''
    }

}
list([ {name: 'Bart'}, {name: 'Nastya'}, {name: 'Lisa'}, {name: 'Maggie'} ])

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript Unique In Order

var uniqueInOrder = function(iterable){

    const uniqueArrNums = []

    const uniqueArrStrings = []

    if(typeof iterable === 'string'){
        const uniqueOrderString = iterable.split('')
        uniqueOrderString.forEach((item, index) => {
            if(item !== uniqueOrderString[index + 1] ) {
                if(item !== 'undefined') {
                    uniqueArrStrings.push(item)
                }
            }
        })   
        return niqueArrStrings
    }else {
        iterable.forEach((item, index) => {
            if(item !== iterable[index + 1] ) {
                if(item !== 'undefined') {
                    uniqueArrNums.push(item)
                }
            }
           
        })
        return uniqueArrNums
    }
    //  console.log(uniqueArrStrings);
    //  console.log(uniqueArrNums);

}

  uniqueInOrder('AAAABBBCCDAABBB')
  uniqueInOrder('ABBCcAD')        
  uniqueInOrder([1,2,2,3,3])       