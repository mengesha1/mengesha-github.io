function reverseArr(arr: number[]) {
    const arrCopy: number[] = [];
    for (let i: number = arr.length - 1; i >= 0; i--) {
        const valueindex = arr[i];
        arrCopy.push(valueindex);
    }
    return arrCopy;
}