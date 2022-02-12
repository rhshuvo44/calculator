
let outPutScreen = document.getElementById('out-put-scrren');
document.getElementById('cl').addEventListener('click',function(){
    outPutScreen.value = '';
})
 document.getElementById('del').addEventListener('click',function(){
    outPutScreen.value = outPutScreen.value.slice(0,-1)
})
function display(num) {
    outPutScreen.value += num;
}
document.getElementById('equal').addEventListener('click',function(){
    try{
        outPutScreen.value = eval(outPutScreen.value);
    }catch{
        alert('Invalid')
    }
})