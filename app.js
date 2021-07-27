const allBoxes = document.querySelectorAll('.box');
const main = document.querySelector('.main');
const album = document.querySelector('.album');
const images = document.querySelector('.images');
const dots = document.querySelector('.dots');
const right = document.querySelector('.next');
const left = document.querySelector('.prev');

let vw = window.innerWidth*1;


const generate = (idx)=>{
  if (idx === 0) {
    for (let i =1; i <= 9;) {
      images.innerHTML += `<div>
                   <img class="one" src="./items/${i++}.jpg" alt="">
                   </div>`;
      dots.innerHTML += ' <span class="dot"></span>';
    }
}
 else if (idx === 1) {
     for (let i = 1; i <= 9;) {
      images.innerHTML += `<div>
                   <img class="three" src="./items/${i++}.jpg" alt="">
                   <img class="three" src="./items/${i++}.jpg" alt="">
                   <img class="three" src="./items/${i++}.jpg" alt="">
                   </div>`;
      dots.innerHTML += ' <span class="dot"></span>';
    }
  }
  else {
    for (let i = 1; i <= 13;) {
      if (i >= 12)
        images.innerHTML += `<div>
                   <img class="four" src="./items/${i++}.jpg" alt=""></div>`;
        
      else images.innerHTML += `<div>
                   <img class="four" src="./items/${i++}.jpg" alt="">
                   <img class="four" src="./items/${i++}.jpg" alt="">
                   <img class="four" src="./items/${i++}.jpg" alt="">
                   <img class="four" src="./items/${i++}.jpg" alt="">
                   </div>`;
      
      dots.innerHTML += '<span class="dot"></span>';
      
    }
  }
}

let current = 0;
let slide = (num) => {
  Array.from(dots.children).forEach(dot=>dot.classList.remove('active'))
  if (num > 0) {
    if (current + 1 === images.children.length)
      current = -1;
    dots.children[++current].classList.add('active')
    images.children[current].scrollIntoView();
  } 
   else {
    if (current===0)
      current = images.children.length;
    dots.children[--current].classList.add('active')
    images.children[current].scrollIntoView();
  } 
}

right.addEventListener('click',()=> slide(+1))
left.addEventListener('click', () => slide(-1))

const go = (idx) => {
  current = idx;
  Array.from(dots.children).forEach(dot=>dot.classList.remove('active'))
  dots.children[idx].classList.add('active')
  images.children[idx].scrollIntoView();
}

allBoxes.forEach((box, idx) => {

  box.addEventListener('click', () => {
    main.style.display = 'none';
    generate(idx);

    Array.from(dots.children).forEach((dot, idx) => {
      dot.addEventListener('click', () => go(idx))
    });
    
    dots.children[0].classList.add('active')
    album.style.display = 'block';
  })
})