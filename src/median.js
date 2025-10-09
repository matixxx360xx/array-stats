function median(arr){
    const filterArr = arr.filter(x => x != undefined && !isNaN(x)  && x != null).map(Number).sort((a, b) => a - b);
    let len = filterArr.length;
    
    if(len == 0){
        return [];
    }
    if(len%2 == 0){
        return (filterArr[len/2-1]+filterArr[len/2])/2;
    }else{
        return filterArr[Math.floor(len/2)];
    }
}
 module.exports = median   
