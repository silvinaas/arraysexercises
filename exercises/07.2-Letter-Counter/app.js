let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
const stringNoSpaces = par.replace(/\s/g, "");

let separar = stringNoSpaces.toLowerCase().split('');

for (let i = 0; i < separar.length; i++) {
    const letter = separar[i];
    if (counts[letter] == 0) {
        return counts[letter] + 1;
    }
    else {
        counts[letter] = counts[letter]+ 1;
    }

}

console.log(counts);