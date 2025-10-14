function variance(arr){
    const filterArr = arr.filter(x => x != undefined && !isNaN(x) && x != null).map(Number);
    if(filterArr.length == 0){
        return [];
    }
    let mean = filterArr.reduce((a,b) => a + b)/filterArr.length;
    let diff = filterArr.map(value => (value - mean)**2);
   
    return Math.round((diff.reduce((a,b) => a + b)/diff.length)*100)/100;
    

}

module.exports = variance;