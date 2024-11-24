const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alternatives = {
    'pic1.jpg' : 'Human eye',
    'pic2.jpg' : 'Waves',
    'pic3.jpg' : 'Flowers',
    'pic4.jpg' : 'Egyptian Pharoah picture',
    'pic5.jpg' : 'Butterfly on leaf'
  }

/* Looping through images */

for (const picture of pictures) {

    const newImage = document.createElement('img');

    newImage.setAttribute('src', `Part_2images/${picture}`);
    newImage.setAttribute('alt', alternatives[picture]);

    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    let classButton = btn.getAttribute('class');

    if (classButton == 'dark') {

      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0 0 0 / 56%)';
    } 
    
    else {

      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0 0 0 / 0%)';
    }
    
  });
