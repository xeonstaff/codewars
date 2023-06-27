//assuming the pound sign (#) acts as a backspace,
//process a string with backspaces in it

function cleanString(s) {
    let cleaned = []
    s.split('').forEach((char)=>{
        char === '#' && cleaned.length ? cleaned.pop():cleaned.push(char)
    })
    return cleaned.join('')

}

//testcases
//1 should return 'ac'
// console.log(cleanString('abc#d##c'))

//2 should return ''
// console.log(cleanString('abc####d##c#'))
