function mean(arr){
    const filterArr = arr.filter(x => x != undefined && !isNaN(x) && x != null).map(Number);
    if(filterArr.length == 0){
        return [];
    }
    return filterArr.reduce((a,b) => a+ b)/arr.length;
}
 module.exports = mean