$.ajax({
  url: 'http://numbersapi.com/1/30/date?json',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    const historyText = data.text;
    const historyElement = document.getElementById('history-text');
    historyElement.textContent = historyText;
    console.log(historyText);
  },
  error: function(xhr, status, error) {
    console.error('Error fetching history data:', error); 
  }
});
