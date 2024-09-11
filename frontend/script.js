// Fetch and insert the menu component into the page
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
  })
  .catch(error => console.error('Error loading menu:', error));

// Example API call (replace with real data fetching logic)
fetch('/api/example')
  .then(response => response.json())
  .then(data => {
    console.log('Data from API:', data);
  })
  .catch(error => console.error('API call error:', error));
