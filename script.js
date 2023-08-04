let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "come back ;(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');


design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});
const design_card_buttons = document.querySelectorAll('.design-card');
const skills_containers = document.querySelectorAll('.skills-container');

design_card_buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    skills_containers.forEach((container, containerIndex) => {
      if (index === containerIndex) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });

    design_card_buttons.forEach((btn, btnIndex) => {
      if (index === btnIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  });
});


const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
  deleteSpeed: 20,
  loop:true
})
.changeDelay(20)
.typeString('I\'m Mk Youcef,')
.pauseFor(300)
.typeString('<br><strong> Dev Full-Stack</strong> !')
.pause(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #2df2f9;"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #f776cc;"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910;"> JavaScript</span> !')
.start();


// JavaScript for animating the skill indicator

const skillCircles = document.querySelectorAll('.skill-circle');

function animateSkillIndicators() {
    skillCircles.forEach(circle => {
        const percent = parseInt(circle.getAttribute('data-percent'));
        circle.style.setProperty('--percent', percent + '%');
    });
}

// Add the animation when the page is loaded
window.addEventListener('load', () => {
    animateSkillIndicators();
});

// Add this to your script.js file
const introductionTextElements = document.querySelectorAll('.introduction-text');

// Intersection Observer options
const options = {
  root: null, // use the viewport as the root
  rootMargin: '0px',
  threshold: 0.2, // 20% of the element visible to trigger the animation
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
      entry.target.classList.remove('slide-out');
    } else {
      entry.target.classList.remove('slide-in');
      entry.target.classList.add('slide-out');
    }
  });
}, options);

// Observe each introduction-text element
introductionTextElements.forEach((element) => {
  observer.observe(element);
});

// Add this to your script.js file
const mySkillsButton = document.getElementById('my-skills-button');
const introductionSection = document.getElementById('introduction');

mySkillsButton.addEventListener('click', () => {
  // Scroll to the introduction section with smooth behavior
  introductionSection.scrollIntoView({ behavior: 'smooth' });
});


  var input = document.querySelector("#phone");
  window.intlTelInput(input, {});


  

  