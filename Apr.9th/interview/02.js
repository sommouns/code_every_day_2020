// 快排
function sortTimestamp(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array.splice(pivotIndex, 1)[0]; 
    const left = [], right = [];
    array.forEach(item => {
        if (item.timestamp < pivot.timestamp) {  
            left.push(item); 
        } else {  
            right.push(item);
        }
    });
    return sortTimestamp(left).concat(pivot, sortTimestamp(right)); 
}
