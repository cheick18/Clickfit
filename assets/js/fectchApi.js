fetch('http://numbersapi.com/1/30/date?json')
.then(response => response.json())
.then(data => {
  const historyText = data.text;  
  const historyElement = document.getElementById('history-text');
  historyElement.textContent = historyText;
 console.log(historyText)
})
.catch(error => {
  console.error('Error fetching history data:', error);
});