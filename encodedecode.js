#encode and decode strings based off
#number/vowel replacement
#(extremely high-security system; please email me for usage rights)

let codebook={
  'a':'1',
  'e':'2',
  'i':'3',
  'o':'4',
  'u':'5'
}

function encode(string) {
  Object.keys(codebook).forEach((key)=>{
    string=string.replaceAll(key, codebook[key])
  })
  return string
}

function decode(string) {
  Object.keys(codebook).forEach((key)=>{
    string=string.replaceAll(codebook[key], key)
  })
  return string
}
