document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('image').click();
  });
  
  document.getElementById('image').addEventListener('change', function(event) {
    event.preventDefault();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('File selected:', file);
  
      const formData = new FormData();
      formData.append('image', file);  
  
     
    
    }
  });
  