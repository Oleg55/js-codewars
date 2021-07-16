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
            console.log(newTextMass[i] + '' + newTextMass[j]);
           
            if(newTextMass[i] === newTextMass[j]) {
                localCount += 1;
                console.log('Before if localCount = ' + localCount);
                if(localCount === 2){
                    if(newElemMass.indexOf(newTextMass[i]) !== -1){
                        console.log('estb---------------------');
                        localCount = 0;
                    }else{
                        console.log('indexOf ' + newElemMass.indexOf(newTextMass[i]));
                        newElemMass.push(newTextMass[i]);
                        console.log('just push elem ' + newTextMass[i]);
                        console.log('newMassLocal = ' + newElemMass);
                        localCount = 0;
                    }

                }

                    // console.log('indexOf ' + newElemMass.indexOf(newTextMass[i]));
                    // newElemMass.push(newTextMass[i]);
                    // console.log('just push elem ' + newTextMass[i]);
            }
            console.log('local = ' + localCount);
        }
    }

    console.log('global-out-count = ' + count);

    console.log('newMass = ' + newElemMass);

    console.log('Dublicate = ' + newElemMass.length)

    return newElemMass.length;
}
duplicateCount();
