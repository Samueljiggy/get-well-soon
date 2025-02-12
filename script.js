document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const clickBtn = document.getElementById('click-btn');
  const gifContainer = document.getElementById('gif-container');

  clickBtn.addEventListener('click', () => {
    // Add spin animation class to card
    card.classList.add('spin');
    // Disable the button to prevent multiple clicks
    clickBtn.disabled = true;
  });

  // When the spin animation ends, show the virtual hugs gif
  card.addEventListener('animationend', () => {
    card.classList.remove('spin');
    gifContainer.classList.remove('hidden');
  });
});
