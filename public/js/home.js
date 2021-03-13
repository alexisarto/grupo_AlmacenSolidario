window.addEventListener('load', function(){

    let count = 0
    let i = 0
    let etapa1 = document.querySelector('div.etapa1')
    let etapa2 = document.querySelector('div.etapa2')
    let etapa3 = document.querySelector('div.etapa3')
    let etapa4 = document.querySelector('div.etapa4')

        setInterval(function(){
            if (window.innerWidth < 767){
                if (count == 0){
                    etapa1.style.display = 'none';
                    etapa2.style.display = 'flex';
                    etapa3.style.display = 'none';
                    etapa4.style.display = 'none';
                    count++
                }else if(count == 1){
                    etapa1.style.display = 'none';
                    etapa2.style.display = 'none';
                    etapa3.style.display = 'flex';
                    etapa4.style.display = 'none';
                    count++
                }else if(count == 2){
                    etapa1.style.display = 'none';
                    etapa2.style.display = 'none';
                    etapa3.style.display = 'none';
                    etapa4.style.display = 'flex';
                    count++
                }else if(count == 3){
                    etapa1.style.display = 'flex';
                    etapa2.style.display = 'none';
                    etapa3.style.display = 'none';
                    etapa4.style.display = 'none';
                    count++
                }else{
                    count = 0
                }
            }
        
    
    
        }, 3000);

        window.addEventListener('resize', function(e){
            e.preventDefault();
            if (window.innerWidth > 767) {
                etapa1.style.display = 'flex';
                etapa2.style.display = 'flex';
                etapa3.style.display = 'flex';
                etapa4.style.display = 'flex';
            }else{
                etapa1.style.display = 'flex';
                etapa2.style.display = 'none';
                etapa3.style.display = 'none';
                etapa4.style.display = 'none';
            }
        });

    


});
