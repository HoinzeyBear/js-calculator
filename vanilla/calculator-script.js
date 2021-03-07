var gridItems = document.getElementsByClassName("grid-item")
// var textView = document.getElementById("textview")
var lastSelected=[]
var firstNumber=''
var secondNumber=''
var operation=''

for(var i =0; i< gridItems.length; i++) {
    var gridItem = gridItems[i]
    var num = gridItem.textContent

    var onClick = function(n, id) {
        return function(){
            if(isNaN(n)){
                if(firstNumber.length === 0){
                    firstNumber = Number.parseInt(lastSelected.join(''))
                } else if(secondNumber.length === 0){
                    secondNumber = Number.parseInt(lastSelected.join(''))
                }
                if(id === 'equals') {
                    console.log(operation(firstNumber, secondNumber))
                    firstNumber = ''
                    secondNumber = ''
                } else {
                    operation = calculator[id]
                }
                lastSelected = []
            } else {
                lastSelected.push(n)
                // textView.textContent = lastSelected.join('')
            }
        }
    }

    gridItem.addEventListener("click", onClick(num, gridItem.id))
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
