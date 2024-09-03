const elbutton=document.querySelector('.explore');
const elcalmdown=document.querySelector('.calmdown')
const elheader=document.querySelector('.header')
const eldelete=document.querySelector('.x')


elbutton.addEventListener('click', (e)=> {
elcalmdown.classList.add('yoq')
elheader.classList.add('header1')
})
eldelete.addEventListener('click', ()=> {
    elcalmdown.classList.remove('yoq')
    elheader.classList.remove('header1') 
})



function sortMyString(S) {
    let a='';
    let b='';
      for(let i=0; i<S.length; i++) {
        if(i%2==0) {
          a+=S[i];
        }
        else {
          b+=S[i];
        }
      }
      console.log( a+' '+b);
  }

  sortMyString('CodeWars')