document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
  
    // Theme switcher logic
    themeSwitch.addEventListener('change', () => {
      body.classList.toggle('light-mode', themeSwitch.checked);
    });
  
    // Fetch data and update the dashboard
    fetchDataAndUpdate();
  
    // Function to fetch data from JSON file
    async function fetchDataAndUpdate() {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        updateDashboard(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    // Function to update the dashboard with fetched data
    function updateDashboard(data) {
      const cardsWrapper = document.querySelector('.cards-wrapper');
      const miniCardWrapper = document.querySelector('.mini-card-wrapper');
      const totalFollowers = document.getElementById('total-followers');
  
      // Update total followers
      totalFollowers.textContent = data.totalFollowers;
  
      // Clear existing content
      cardsWrapper.innerHTML = '';
      miniCardWrapper.innerHTML = '';
  
      // Populate main cards
      data.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.type}`;
        cardElement.innerHTML = `
          <div class="card-header-wrapper">
            <img src="${card.icon}" alt="${card.platform} logo">
            <h2>${card.username}</h2>
          </div>
          <p class="followers">${card.followers}</p>
          <p class="follower-text">${card.followerText}</p>
          <div class="card-footer">
            <img src="${card.changeIcon}" alt="up/down arrow">
            <p class="card-follower-update">${card.change} Today</p>
          </div>
        `;
        cardsWrapper.appendChild(cardElement);
      });
  
      // Populate mini cards
      data.miniCards.forEach(miniCard => {
        const miniCardElement = document.createElement('div');
        miniCardElement.className = 'mini-card';
        miniCardElement.innerHTML = `
          <div class="views-wrapper">
            <h3>${miniCard.title}</h3>
            <img src="${miniCard.icon}" alt="${miniCard.platform} logo">
          </div>
          <div class="update-wrapper">
            <h3 class="mini-card-follower">${miniCard.number}</h3>
            <div class="mini-footer-wrapper">
              <img src="${miniCard.changeIcon}" alt="up/down arrow">
              <h4 class="percentage-update">${miniCard.percentage}%</h4>
            </div>
          </div>
        `;
        miniCardWrapper.appendChild(miniCardElement);
      });
    }
  });
  