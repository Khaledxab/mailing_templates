window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var verificationStatus = urlParams.get('status');
    var messageElement = document.getElementById('verification-message');
    
    switch (verificationStatus) {
      case 'success':
        messageElement.innerText = 'Verification successful!';
        messageElement.classList.add('verification-success');
        break;
      case 'failure':
        messageElement.innerText = 'Verification failed. Please try again.';
        messageElement.classList.add('verification-failure');
        break;
      default:
        messageElement.innerText = 'Invalid verification link.';
        messageElement.classList.add('verification-failure');
        break;
    }
  
    // Simulate loading by hiding the loading icon after 3 seconds
    setTimeout(function() {
      document.querySelector('.loading-icon').style.display = 'none';
    }, 3000);
  };
  