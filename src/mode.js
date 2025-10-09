function mode(arr){
    const filterArr = arr.filter(x => x != undefined && !isNaN(x) && x != null).map(Number);
    if(filterArr.length == 0){
        return [];
    }
    const map = {};

    for(let i = 0; i < filterArr.length; i++){
        let value = filterArr[i];
        if(map[value]){
            map[value] += 1;
        }else{
            map[value] = 1;
        }
    }

    let keys = Object.keys(map);
    let value = 0;
    let key = [];

    for(let i = 0; i < keys.length; i++){
        let currentKey = keys[i];
        let currentValue = map[currentKey];
        
        if(currentValue > value){
            value = currentValue;
            key = [currentKey];
        }else if (currentValue == value) {
            key.push(currentKey);
        }
    }

    if(value == 1){
         return [filterArr.join(', ')];
    }
    
     return {
        modes: key,
        count: value
    };
}
 module.exports = mode
