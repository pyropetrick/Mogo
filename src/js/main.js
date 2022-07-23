// const barLoader = document.querySelectorAll('.slider__bar-loader');
// const barWhite = document.querySelector('.slider__bar-empty');




// function draw(item) {
  
//   let pos = 0;
//   let timer = setInterval(loading, 20);
//   function loading() {
//     if (pos === 100) {
//       pos = 0;
//       clearInterval(timer);
//       item.style.width = pos + '%'
//     } else {
//       pos++
//       item.style.width = pos + '%';
//     }
//   }
// }

// for (i of barLoader) {
//   draw(i)
// }


const arrows = document.querySelectorAll('.list-dropdown__item-arrow');
const dropText = document.querySelectorAll('.list-dropdown__item-desc');



function dropDownService(item) {
    item.addEventListener('click', function() {
        let currentArrow = item;
        let dataArrow = currentArrow.getAttribute('data-text');
        let currentText = document.querySelector(dataArrow);
        let activeArrow = currentArrow.classList.contains('active');
        currentArrow.classList.add('active');
        currentText.classList.add('active');
        if (activeArrow) {
            currentArrow.classList.remove('active');
            currentText.classList.remove('active');
        }
        

    })
}

arrows.forEach(dropDownService);