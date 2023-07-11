function filter(categoria){
    let produtos = document.getElementsByClassName('produto');
     
    for (const element of produtos){
        if(categoria ==='todos' || element.classList.contains(categoria)) { 
        element.style.display='block';
    
    } else {
        element.style.display = 'none';
    }
}
}