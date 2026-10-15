# Javascript 4

## Program untuk menghitung Max, Min, Average

### Flowchart

```mermaid
flowchart TD
    Start@{ shape: start }
    InputArrayOfNums@{ shape: lean-r, label: "inputs as an array of arrays of numbers" }
    InputRowInit@{ shape: rect, label: "inputRow = 0" }
    InputRowControl@{ shape: decision, label: "inputRow < inputs.length" }
    IncrInputRow@{ shape: rect, label: "inputRow++" }
    EmptyRowControl@{ shape: decision, label: "inputs[inputRow].length === 0" }
    WarnAndSkipEmptyRow@{ shape: lean-r, label: "#quot;This array has no number! Skipping...#quot;" }
    InitRowOfNums@{ shape: rect, label: "nums = [...inputs[inputRow]] "}
    InitMax@{ shape: rect, label: "max = nums[0]" }
    InitMin@{ shape: rect, label: "min = nums[0]" }
    InitSum@{ shape: rect, label: "sum = 0" }
    InitLength@{ shape: rect, label: "length = nums.length" }
    InitRow@{ shape: rect, label: "row = 0" }
    RowControl@{ shape: decision, label: "row < length" }
    MaxControl@{ shape: decision, label: "nums[row] > max" }
    ChangeMax@{ shape: rect, label: "max = nums[row]" }
    MinControl@{ shape: decision, label: "nums[row] < min" }
    ChangeMin@{ shape: rect, label: "min = nums[row]"}
    AddToSum@{ shape: rect, label: "sum += nums[row]" }
    IncrRow@{ shape: rect, label: "row++" }
    OutputMax@{ shape: lean-r, label: "#quot;Max: #quot;, max" }
    OutputMin@{ shape: lean-r, label: "#quot;Min: #quot;, min" }
    OutputAvg@{ shape: lean-r, label: "#quot;Avg: #quot;, sum / length" }
    End@{ shape: stop }

    Start --> InputArrayOfNums --> InputRowInit --> InputRowControl

    InputRowControl --true--> EmptyRowControl
    EmptyRowControl --false--> InitRowOfNums
    EmptyRowControl --true--> WarnAndSkipEmptyRow --> IncrInputRow

    InputRowControl --false--> End

    InitRowOfNums --> InitMax --> InitMin --> InitSum --> InitLength --> InitRow --> RowControl

    RowControl --true--> MaxControl

    MaxControl --true--> ChangeMax --> MinControl
    MaxControl --false--> MinControl

    MinControl --true--> ChangeMin --> AddToSum
    MinControl --false--> AddToSum

    AddToSum --> IncrRow --> RowControl

    RowControl --false--> OutputMax --> OutputMin --> OutputAvg

    OutputAvg --> IncrInputRow --> InputRowControl
```
