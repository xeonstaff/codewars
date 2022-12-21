//validates an IP address(string)

function isValidIP(str) {
  let isIP = true;
  let numArray = str.split(".");
  if (numArray.length != 4) {
    isIP = false;
  }
  numArray.map((num) => {
        if(!num){
        isIP=false
    }
    num.split("").map((char) => {
    if (isNaN(char) || char.match(/[\b\f\n\r\t\v\0" "]/)) {
        isIP = false;
      }
    });
    if (num.length > 1 && num[0] == 0) {
      isIP = false;
    }
    if (num < 0 || num > 255) {
      isIP = false;
    }
  });
  return isIP;
}
