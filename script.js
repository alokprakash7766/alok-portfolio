let word = document.querySelectorAll(".word");
word.forEach((word)=>{
      let letters = word.textContent.split("");
      word.textContent="";
      letters.forEach((letters)=>{
            let span = document.createElement("span");
            span.textContent = letters;
            span.className = "letter";
            word.append(span);
      })
});

let currentWordIndex = 0;
let maxWordIndex = word.length -1;
word[currentWordIndex].style.opacity = "1";

let changetext = ()=>{
      let currentWord = word[currentWordIndex];
      let nextWord = currentWordIndex == maxWordIndex ? word[0] : word[currentWordIndex +1];

      Array.from(currentWord.children).forEach((letters,i)=>{
            setTimeout(()=>{
                  letters.className = "letters out";
            }, i * 80);
      });
      nextWord.style.opacity="1";
      Array.from(nextWord.children).forEach((letters,i)=>{
            letters.className = "letters behind";
            setTimeout(()=>{
                  letters.className = "letter in";
            },340 + i * 80);
      })

      currentWordIndex = currentWordIndex === maxWordIndex ? 0: currentWordIndex +1;

}
changetext();
setInterval(changetext,3000)

// circle skill////////////////////////////////////////////////

const circle = document.querySelectorAll('.circle');
circle.forEach(elem=>{
      var dots = elem.getAttribute("data-dots");
      var marked = elem.getAttribute("data-percent");
      var percent = Math.floor(dots*marked/100);
      var point = "";
      var rotate = 360 / dots;


      for(let i = 0 ; i < dots ; i++){
            point += `<div class="point" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = point;

      const pointMarked = elem.querySelectorAll('.point');
      for( let i= 0; i<percent; i++){
            pointMarked[i].classList.add('Marked')
      }
})


// mix it up portfolio section
var mixer = mixitup('.portfolio-gallary');




// active menu    ////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
      let len = section.length;
      while(--len && window.scrollY + 97 <section[len].offsetTop){}
      menuLi.forEach(sec => sec.classList.remove("active"));
      menuLi[len].classList.add("active");
}


activeMenu();
window.addEventListener("scroll",activeMenu);


// ///////// sticky navbar    ////////////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
      header.classList.toggle("sticky",window.scrollY > 50)
})

// ///////// toggle icons navbar    ////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-logo");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
      menuIcon.classList.toggle("bx-x");
      navlist.classList.toggle("open")
}

window.onscroll = ()=>{
      menuIcon.classList.remove("bx-x");
      navlist.classList.remove("open")
}

// ///////// poral lax //////////////

const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            if(entry.isIntersecting){
                  entry.target.classList.add("show-items");
            }else{
                  entry.target.classList.remove("show-items");
            }
      });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


