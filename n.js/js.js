let acordiio = document.querySelectorAll('.container-acordion')

acordiio.forEach(function(item){
    item.addEventListener('click',function(){
        // console.log(this);
        item.classList.toggle('active')
        
    })
})