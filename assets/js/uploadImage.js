document.getElementById('image').addEventListener('change', function(event) {
  
    if (event.target.files.length > 0) {
     
      document.getElementById('imageUploadForm').submit();
    }
  });