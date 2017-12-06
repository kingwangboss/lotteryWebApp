function JsonStrWithString(str){
    var arr = str.split(',');
    console.log("arr");
    console.log(arr);
    var arrName = [];
    for (str in arr) {
        console.log(arr[str])
        arrName.push(arr[str].split(':')[0])
    }
    console.log("arrName");
    console.log(arrName);
    var arrValue = [];
    var temp = 0;
    for (str in arr) {
        console.log(arr[str]);
        temp += parseInt(arr[str].split(":")[1]);
        arrValue.push(arr[str].split(":")[1])
    }
    console.log("arrValue");
    console.log(arrValue);
    console.log(temp);

    var baifenArr = [];
    for (let index = 0; index < arrValue.length; index++) {
        const element = arrValue[index];
        
        baifenArr.push((parseInt(element)/temp* 100).toFixed(2).toString()+'%');
    }
    console.log(baifenArr);

    var arrName1 = [];
    for (let index = 0; index < arrName.length; index++) {
        const element = arrName[index];
        const element1 = baifenArr[index];
        arrName1.push(element + ' - ' + element1);
    }

    console.log(arrName1);
    
    var arrD = new Array();
    for (var i = 0; i < arrName.length; i++) {
        var dict = {};
        dict["value"] = arrValue[i];
        dict["name"] = arrName1[i];
        
        
        arrD.push(dict);
    }
    
    console.log(arrD);
    // var strJson = eval(arrD);
    // console.log("strJson")
    // console.log(strJson);

    // var jsString = window.JSON.stringify(strJson);
   
    // console.log("jsString")
    // console.log(jsString)
    
    return arrD;


}

module.exports = {
    JsonStrWithString: JsonStrWithString
  }