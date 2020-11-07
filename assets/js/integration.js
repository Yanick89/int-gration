// ON VA D'ABORD RECUPERER TOUS LES ELEMENTS DE LA PAGE PRINCIPALE

(function () {

    const slide = document.querySelector('.principal').children;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const bouton = document.querySelector('span button');
    let index = 0;
    
     /**
      * On applique un evenement click sur le bouton prev, 
      * il décrémente le contenu de lié à l'évènement
      */
    prev.addEventListener('click', function() {
        if(index === 0){
            index = slide.length -1;
        } else{
            index--
        }
        for(let i = 0; i < slide.length; i++){
            // ON SUPPRIME D'ABORD LA CLASS
            slide[i].classList.remove('active');
        }
        slide[index].classList.add('active')   
    })
   

       //On applique un evenement click sur le bouton next, 
      //il incrémente le contenu de lié à l'évènement
     
    next.addEventListener('click', function (){  
        if(index === slide.length - 1){
            index = 0
        } else{
            index++
        }

        // On passe par un tour de boucle pour parcourir les enfants de slides à chaque il va supprimer la class='active' et va l'ajouter au suivant
         
        for(let i = 0; i < slide.length; i++){
            // ON SUPPRIME D'ABORD LA CLASS
            slide[i].classList.remove('active');
        } 
      // ON AJOUTE CETTE MEME CLASSE AU SUIVANT   
        slide[index].classList.add('active');
    })

    
    bouton.addEventListener('click', function() {   
        changes()
    }) 

    const changes = () =>{
        let essai = document.querySelector('.home.active');
        essai.classList.remove('active');
        
        slide[i].classList.add('active');
     } 

     bouton.addEventListener("click", function(){
        let index = 0;
        index = Math.floor(Math.random() *slide.length);
        slide[index];

     })
     
     




})(); 