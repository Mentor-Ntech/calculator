const screen = document.getElementById('screen');



function btnClick(value){
    screen.value += value
}

function clearScreen() {
    screen.value = ""
}
function delScreen(){
    screen.value = screen.value.slice(0, -1)
}

function findResult() {
    const result = eval(screen.value)
    screen.value = result
}