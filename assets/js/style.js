let subs = document.getElementById('subs');
let add = document.getElementById('input');
if(add == ''){
   subs.addEventListener('click',()=>{
    alert('Now you will get future updates from DevIncept.'); 
});
} else {
   subs.addEventListener('click',()=>{ 
    alert('Please enter email address');  
   });
}
