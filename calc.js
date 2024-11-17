let result=document.querySelector(".result")
function validate(v){
    result.textContent=result.textContent==="0"?v:result.textContent+v
}
function vanish(){
    result.textContent=0
}
function calResult(){
    result.textContent=eval(result.textContent)
}
