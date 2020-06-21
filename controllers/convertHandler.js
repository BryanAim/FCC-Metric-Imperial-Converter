/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let units = ['gal','l','lbs','kg','mi', 'km'];
    let validFraction = /^([1-9]\d*(\.\d+)?)[/](\d+(\.\d+)?)$/; //regex match fractions
    let validDecimal = /^\d+(\.\d+)?$/; //regex to match decimals

    let number = input.split(/([a-zA-Z]+$)/); // split letters from numbers
    number = number.filter(Boolean) // remove whitespace

    let result= number[0];
    // is a number is a valid decimal || number,
    // return number
    if (validDecimal.test(result)) {
      result = Number(number[0])
      //if a number is a fraction, split 2 numbers between division sign and return fraction
    } else if (validFraction.test(result)) {
      let separate = result.split('/');
      let fraction = Number(separate[0]) / Number(separate[1]);
      result = fraction

      //if first index of split array is one of the units,
      // return number with 1

    } else if (units.includes(result)) {
      result = 1;
    } else {
      result = 'invalid number'
    }
    
    return result;
  };

  
  this.getUnit = function(input) {
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];

    let unitLetter = input.split(/([a-zA-Z]+$)/); // split letters from numbers
    unitLetter = unitLetter.filter(Boolean); //remove whitespace
    let inputUnit = unitLetter[unitLetter.length - 1];

    // if no units match units in array,
    // return invalid unit
    let unit = inputUnit.toLowerCase();
    if (!units.includes(unit)) {
      return 'invalid unit';
    }
    return inputUnit;
  };

  
  this.getReturnUnit = function(initUnit) {

    var result;
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case 'gal':
        result = 'L'; 
        break;
        case 'l':
          result = 'gal';
          break;
        case 'lbs':
          result = 'kg';
          break;
        case 'kg':
          result = 'lbs';
          break;
        case 'mi':
          result = 'km';
          break;
        case 'km':
          result = 'mi';
          break
    
      default:
        result = 'invalid unit'
        break;
    } 
    return result;
  };


  this.spellOutUnit = function(unit) {
    var result;
    let units = unit.toLowerCase();
    let obj = {
      'gal': 'gallons',
      'l': 'litres',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }

    for(let props in obj) {
      if (props==units) {
        result = obj[props];
      }
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let num = initNum;

    switch (initUnit) {
      case 'gal':
        num = num * galToL;
        break;
      case 'l':
        num = num/ galToL;
        break;
      case 'lbs':
        num = num / lbsToKg;
        break;
      case 'kg':
        num = num * lbsToKg;
        break;
      case 'mi':
        num = num * miToKm;
        break;
      case 'km':
        num = num / miToKm;
        break;
      // default:
      //   break;
    }
    
    return num;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
