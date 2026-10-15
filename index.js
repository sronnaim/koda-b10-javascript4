const inputs = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [3, 1, 4, 1, 5, 9, 2, 6],
    [10, 20]
]

for(let inputRow = 0; inputRow < inputs.length; inputRow++) {
    const nums = inputs[inputRow]
    let max = nums[0]
    let min = nums[0]
    let sum = 0
    const length = nums.length    
    
    for(let row = 0; row < length; row++){
        // Max
        if (nums[row] > max)
            max = nums[row]

        if (nums[row] < min)
            min = nums[row]

        sum += nums[row]
    }

    console.log(max)
    console.log(min)
    console.log(sum / length)
}
