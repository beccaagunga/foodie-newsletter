// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// Get modal element
const modal = document.getElementById('simpleModal');
// Get modal button
const modalBtn = document.getElementById('modalBtn');
//Close
const closeBtn = document.getElementsByClassName('closeBtn')[0];
// Listen for outside click
window.addEventListener('click', clickOutside);
// Function to close for outside click
function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
// Listen for a open click on btn
modalBtn.addEventListener('click', openModal);
// Function to open modal
function openModal(){
  modal.style.display = 'block'
// for (i = 0; i < modalBtn.length; ++i) {
//     modalBtn[i].style.display = "block";
// }

}

// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
