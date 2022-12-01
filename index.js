function hamburgerButton(){
    var elm = document.querySelector("nav")
    var isShow = elm.hasAttribute("show");
    if(isShow){
        elm.removeAttribute("show");
    }else{
        elm.setAttribute("show","");
    }
}

function changeCategory(elm){
    document.querySelector('.category[selected]').removeAttribute("selected");
    var elms = document.querySelectorAll(`.category-content`);
    
    elms.forEach(element => {
        element.setAttribute("hidden","");
    });
    elm.setAttribute("selected","");
    document.querySelector(`#content-${elm.id}`).removeAttribute("hidden");
}

function changeOption(elm){
    console.log(elm);
    document.querySelector(".option[selected]").removeAttribute("selected");
    var elms = document.querySelectorAll(`.content-container`);
    var optelms = document.querySelectorAll(`.option`);
    optelms.forEach(element=>{
        element.removeAttribute("selected");
    })
    var id = elm.id;
    elms.forEach(element => {
        if(element.id == "option-"+id){
            element.removeAttribute("hidden");
        }else{
            element.setAttribute("hidden","");
        }
    });
    elm.setAttribute("selected","");
}