function strWithData(str){
    
    var arr = str.split(',');
    
    var arrValue = [];
    for (str in arr) {
        console.log(arr[str]);
        
        arrValue.push(arr[str].split(":")[1])
    }
    console.log("arrValue");
    console.log(arrValue);

    
    return arrValue;


}

module.exports = {
    strWithData: strWithData
  }