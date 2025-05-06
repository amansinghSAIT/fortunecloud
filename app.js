function goTo(page) {
    console.log("Navigating to:", page);
  
    // Get all cards
    const cards = document.querySelectorAll('.card');
  
    // Remove previous animation
    cards.forEach(card => {
      card.classList.remove('clicked');
    });
  
    // Add animation to the selected card based on data-page
    const clickedCard = Array.from(cards).find(card => card.getAttribute('data-page') === page);
    if (clickedCard) {
      clickedCard.classList.add('clicked');
    }
  
    // Navigate after animation
    setTimeout(() => {
      window.location.href = page;
    }, 200); // 200ms delay for animation
  }
  