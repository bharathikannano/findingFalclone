const modalHandler=(myModal)=>{

    var modal=document.getElementById(myModal);
    if(modal.style && modal.style.display)
    {
        if(modal.style.display=="block"){
            modal.style.display=="none";
        }
        else
            modal.style.display=="block";
    }
    else
         modal.style.display=="block";

}

export default modalHandler;