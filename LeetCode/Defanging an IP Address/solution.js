/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
var something = '';
for(i = 0; i < address.length; i++){
        if(address[i] != '.'){
        something = something + address[i];
     }
         else if(address[i]==='.'){
         something = something  + "[.]"
     }
    
}

  return something  
};
