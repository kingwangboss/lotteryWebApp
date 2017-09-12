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
    for (str in arr) {
        console.log(arr[str]);
        arrValue.push(arr[str].split(":")[1])
    }
    console.log("arrValue");
    console.log(arrValue);

    let arrColor = ["#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f","#db9034","#a5c2d5","#cbab4f","#76a871","#9f7961","#a56f8f"];
    
    var arrD = new Array();
    for (var i = 0; i < arrName.length; i++) {
        var dict = {};
        dict["name"] = arrName[i];
        dict["value"] = arrValue[i];
        dict["color"] = arrColor[i];
        
        arrD.push(dict);
    }
    
    console.log(arrD);
    var strJson = eval(arrD);
    console.log("strJson")
    console.log(strJson);

    var jsString = window.JSON.stringify(strJson);
   
    console.log("jsString")
    console.log(jsString)
    
    return jsString;


}

module.exports = {
    JsonStrWithString: JsonStrWithString
  }