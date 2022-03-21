window.onload = function() {
    const cart = document.getElementById('cart');
    const emptyCartUp = document.getElementById('modalContainer1');
    const fullCart = document.getElementById('addToCart');
    const fullCartUp = document.getElementById('modalContainer2');
 
   const toggleModal = () => {
       document.querySelector('.modalContain1')
       .classList.toggle('.hidden');
   }

   document.querySelector('#thumbsize1')
   .addEventListener('click', toggleModal);

   
   
   
   
    cart.addEventListener('mouseover', () => {
        emptyCartUp.classList.add('show');
    });

    cart.addEventListener('mouseout', () => {
        emptyCartUp.classList.remove('show');
    });
    
}
  

