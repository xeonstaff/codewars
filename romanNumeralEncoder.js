//encodes normal numbers (int) to roman numerals

//I want to appologize to the coding community, to my mother and to 
//Danny DeVito for this monstrous solution. 
//On the plus side: it's extremely readable!

function solution(number) {
  let numeral = "";
  let stNum = number.toString();

  function thousands(num4) {
    let thou = "M";
    switch (num4) {
      case "2":
        thou = "MM";
        break;
      case "3":
        thou = "MMM";
        break;
    }
    numeral = thou;
  }

  function hundreds(num3) {
    let hun = "C";
    switch (num3) {
      case "0":
        hun = "";
        break;
      case "1":
        hun = "C";
        break;
      case "2":
        hun = "CC";
        break;
      case "3":
        hun = "CCC";
        break;
      case "4":
        hun = "CD";
        break;
      case "5":
        hun = "D";
        break;
      case "6":
        hun = "DC";
        break;
      case "7":
        hun = "DCC";
        break;
      case "8":
        hun = "DCCC";
        break;
      case "9":
        hun = "CM";
        break;
    }
    numeral += hun;
  }

  function tens(num2) {
    let ten = "X";
    switch (num2) {
      case "0":
        ten = "";
        break;
      case "1":
        ten = "X";
        break;
      case "2":
        ten = "XX";
        break;
      case "3":
        ten = "XXX";
        break;
      case "4":
        ten = "XL";
        break;
      case "5":
        ten = "L";
        break;
      case "6":
        ten = "LX";
        break;
      case "7":
        ten = "LXX";
        break;
      case "8":
        ten = "LXXX";
        break;
      case "9":
        ten = "XC";
        break;
    }
    numeral += ten;
  }

  function digits(num1) {
    let digit = "I";
    switch (num1) {
      case "0":
        digit = "";
        break;
      case "1":
        digit = "I";
        break;
      case "2":
        digit = "II";
        break;
      case "3":
        digit = "III";
        break;
      case "4":
        digit = "IV";
        break;
      case "5":
        digit = "V";
        break;
      case "6":
        digit = "VI";
        break;
      case "7":
        digit = "VII";
        break;
      case "8":
        digit = "VIII";
        break;
      case "9":
        digit = "IX";
        break;
    }
    numeral += digit;
  }
  if (stNum.length == 4) {
    thousands(stNum[0]);
    hundreds(stNum[1]);
    tens(stNum[2]);
    digits(stNum[3]);
  } else if (stNum.length == 3) {
    hundreds(stNum[0]);
    tens(stNum[1]);
    digits(stNum[2]);
  } else if (stNum.length == 2) {
    tens(stNum[0]);
    digits(stNum[1]);
  } else if (stNum.length == 1) {
    digits(stNum[0]);
  }
  return numeral;
}
