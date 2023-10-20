let stars = document.getElementById('stars')
// let stars = $('#stars')
let moon = document.getElementById('moon')
let mount3 = document.getElementById('mount3')
let mount4 = document.getElementById('mount4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let nov = document.querySelector('.nov')

window.onscroll = function(){
let value = scrollY;

  stars.style.left= value+'px';
  moon.style.top= value *3 +'px';
  mount3.style.top= value *2 +'px';
  mount4.style.top= value *1.5 +'px';
  river.style.top= value +'px';
  boat.style.top= value +'px';
  boat.style.left= value *3 +'px';
  nov.style.fontSize= value +'px';
  if(scrollY >= 80){
    nov.style.fontSize= 80 +'px';
    nov.style.position='fixed';
  } if(scrollY >= 741){
    nov.style.display='none';

  }else {
    nov.style.display='block';

  }
  if( scrollY >= 266){
    document.querySelector('.section').style.background='linear-gradient(#376281,#10001f)'
  }else{
    document.querySelector('.section').style.background='linear-gradient(#200016,#10001f)'

  }

}