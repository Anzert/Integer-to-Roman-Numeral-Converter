/**
  * Author: Adrián Fernández Lara
  * Purpose: This script was created for a certified exam on freecodecamp.org
  * Date: February 19, 2023
  * What does the script do? It takes an integer and converts it to a Roman numeral.
    It works by splitting the integer into four blocks of digits, corresponding to
    thousands, hundreds, tens, and units, and converting each block to its Roman
    numeral equivalent using a series of switch statements. The resulting Roman
    numerals are then concatenated to form the final output.
 */

function convertToRoman(num) {
  let roman = num.toString();
  let bloque1 = "";
  let bloque2 = "";
  let bloque3 = "";
  let bloque4 = "";
  let final = [];

  if (roman > 0){
    //First block of Roman numerals (From right to left)
    switch (roman[roman.length-1]) {
      case "1":
        bloque1 = "I"
        break;
  }
    switch (roman[roman.length-1]) {
      case "2":
        bloque1 = "II"
        break;
    }
    switch (roman[roman.length-1]) {
      case "3":
        bloque1 = "III"
        break;
    }
    switch (roman[roman.length-1]) {
      case "4":
        bloque1 = "IV"
        break;
    }
    switch (roman[roman.length-1]) {
      case "5":
        bloque1 = "V"
        break;
    }
    switch (roman[roman.length-1]) {
      case "6":
        bloque1 = "VI"
        break;
    }
    switch (roman[roman.length-1]) {
      case "7":
        bloque1 = "VII"
        break;
    }
    switch (roman[roman.length-1]) {
      case "8":
        bloque1 = "VIII"
        break;
    }
    switch (roman[roman.length-1]) {
      case "9":
        bloque1 = "IX"
        break;
    }
   
   //Second block of Roman numerals (From right to left)
    switch (roman[roman.length-2]) {
      case "1":
        bloque2 = "X"
        break;
    } 
    switch (roman[roman.length-2]) {
      case "2":
        bloque2 = "XX"
        break;
    }
    switch (roman[roman.length-2]) {
      case "3":
        bloque2 = "XXX"
        break;
    }
    switch (roman[roman.length-2]) {
      case "4":
        bloque2 = "XL"
        break;
    }
    switch (roman[roman.length-2]) {
      case "5":
        bloque2 = "L"
        break;
    }
    switch (roman[roman.length-2]) {
      case "6":
        bloque2 = "LX"
        break;
    }
    switch (roman[roman.length-2]) {
      case "7":
        bloque2 = "LXX"
        break;
    }
    switch (roman[roman.length-2]) {
      case "8":
        bloque2 = "LXXX"
        break;
    }
    switch (roman[roman.length-2]) {
      case "9":
        bloque2 = "XC"
        break;
    } 

    //Third block of Roman numerals (From right to left)
    switch (roman[roman.length-3]) {
      case "1":
        bloque3 = "C"
        break;
    }
    switch (roman[roman.length-3]) {
      case "2":
        bloque3 = "CC"
        break;
    } 
    switch (roman[roman.length-3]) {
      case "3":
        bloque3 = "CCC"
        break;
    } 
    switch (roman[roman.length-3]) {
      case "4":
        bloque3 = "CD"
        break;
    }
    switch (roman[roman.length-3]) {
      case "5":
        bloque3 = "D"
        break;
    }
    switch (roman[roman.length-3]) {
      case "6":
        bloque3 = "DC"
        break;
    }
    switch (roman[roman.length-3]) {
      case "7":
        bloque3 = "DCC"
        break;
    }
    switch (roman[roman.length-3]) {
      case "8":
        bloque3 = "DCCC"
        break;
    }
    switch (roman[roman.length-3]) {
      case "9":
        bloque3 = "CM"
        break;
    }
    
    //Fourth block of Roman numerals (From right to left)
    switch (roman[roman.length-4]) {
      case "1":
        bloque4 = "M"
        break;
    }
    switch (roman[roman.length-4]) {
      case "2":
        bloque4 = "MM"
        break;
    }
    switch (roman[roman.length-4]) {
      case "3":
        bloque4 = "MMM"
        break;
    }

final.push(bloque4,bloque3,bloque2,bloque1);

  } else {
    roman = [];
  } 

 return final.join("");
}

convertToRoman(50);