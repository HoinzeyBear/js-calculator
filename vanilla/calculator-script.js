var gridItems = document.getElementsByClassName("grid-item")
var resultView = document.getElementById("resultview")
var textView = document.getElementById("textview")
var inputString=''
var lastSelected=[]
var firstNumber=''
var secondNumber=''
var operation=''

for(var i =0; i< gridItems.length; i++) {
    var gridItem = gridItems[i]
    var num = gridItem.textContent

    var onClick = function(n, id) {
        return function(){
            inputString = document.getElementById(id).textContent
            if(isNaN(n)){
                nonNumberSelected(n, id)
            } else {
                numberSelected(n)
            }
        }
    }

    gridItem.addEventListener("click", onClick(num, gridItem.id))
}

var nonNumberSelected = function(input, id) {
    if(id === 'clear') {
        clearSelected()
        return
    }

    if(firstNumber.length === 0) {
        firstNumber = Number.parseInt(lastSelected.join(''))
    } else if(secondNumber.length === 0 && lastSelected.length > 0 ) {
        secondNumber = Number.parseInt(lastSelected.join(''))
    }   
    
    if(id === 'equals') {
        equalsSelected()
    } else {
        operation = calculator[id]
        appendTextviewContent(input)
    }
    lastSelected = []
}

var clearSelected = function() {
    textView.textContent = ''
    resultView.textContent = ''
    firstNumber=''
    secondNumber=''
    lastSelected=[]
}

var equalsSelected = function() {
    var value = operation(firstNumber, secondNumber)
    firstNumber = value
    secondNumber = ''
    updateTextviewContent(value)
    updateResultViewContent(value)
}

var numberSelected = function(input) {
    lastSelected.push(input)
    appendTextviewContent(input)
}

var updateTextviewContent = function(value) {
    textView.textContent = value
}

var appendTextviewContent = function(value) {
    textView.textContent = textView.textContent + value
}

var updateResultViewContent = function(value) {
    resultView.textContent = value
}

var calculator = (function(){
    return {
        add: function(a,b){
            return a + b
        },
    
        subtract: function(a,b){
            return a - b
        },
    
        multiply: function(a,b){
            return a* b
        },
    
        divide: function(a,b){
            return a / b
        }
    }
}())
