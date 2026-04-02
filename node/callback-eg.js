function greet(name, formatter){
    return formatter(name);
}

function shout(str){
    return str.toUpperCase();
}

function whisper(str){
    return str.toLowerCase();
}

console.log(greet('Akshata', shout));
//console.log(greet('Akshata', shout()));    //cannot read properties of undefined (reading 'toUpperCase') TYPEERROR
console.log(greet('Akshata', whisper));