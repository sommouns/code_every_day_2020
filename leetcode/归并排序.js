function mergeSort(arr, start, end, temp) {
    if (start < end) {
        let mid = Math.floor(arr.length / 2);
        mergeSort(arr, 0, mid, temp);
        mergeSort(arr, mid + 1, end, temp);
        arr = mergeArray(arr, first, mid, last, temp);
    }
    return arr;
}

// 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
function mergeArray(arr, first, mid, last, temp) {
    let i = first;
    let m = mid;
    let j = mid + 1;
    let n = last;
    let k = 0;
    while (i <= m && j <= n) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= m) {
        temp[k++] = arr[i++];
    }
    while (j <= n) {
        temp[k++] = arr[j++];
    }
    for (let l = 0; l < k; l++) {
        arr[first + l] = temp[l];
    }
    return arr;
}
