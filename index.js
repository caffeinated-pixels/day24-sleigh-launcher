const crew = document.getElementById('crew')
const btn = document.getElementById('btn')

btn.addEventListener('click', startAnimation)

function startAnimation() {
  crew.classList.add('animate1')
  const animated = document.querySelector('.animate1')
  animated.addEventListener('animationend', () => {
    console.log('Animation ended')
    crew.classList.add('animate2')
  })
}

// Task:
// - Write a function to launch the sleigh!
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
