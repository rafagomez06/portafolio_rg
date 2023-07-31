
 window.addEventListener('load',()=>{
    /*Se obtiene lista de divs de la clase sections */
    const enlaces=document.querySelectorAll('.sections div');    
    enlaces.forEach( (elemento)=> {          
        elemento.addEventListener('click',(evento)=>{
        evento.preventDefault();                       
           enlaces.forEach((x)=>x.classList.remove('activo'));           
           evento.target.classList.add('activo');                                   
           pagina=document.getElementsByClassName("activo")[0].id;           
            /*Redirección a pagina*/
            switch(pagina){
                case 'portafolio':
                    console.log('accede a portafolio');
                    location.href ="./portafolio.html";
                break;
                case 'recursos':
                    console.log('accede a recursos');
                    location.href ="./recursos.html";
                break;
                case 'skills':
                    console.log('accede a skills');
                    location.href ="./skills.html";
                break;
                case 'cosas':
                    console.log('accede a cosas');
                    location.href ="./cosas.html";
                break;
                case 'sobre_mi':
                    console.log('accede a sobre mi');
                    location.href ="./sobre_mi.html";
                break;
                default:
                console.log('No ha seleccionado Opción');
            }            
        });       
    });
}); 

   
