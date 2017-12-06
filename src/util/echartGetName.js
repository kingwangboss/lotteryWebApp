function strWithName(str) {

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
    return arrName;


}

module.exports = {
    strWithName: strWithName
}