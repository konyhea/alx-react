// Function to return the current year
export function getFullYear() {
    return new Date().getFullYear();
  }
  
  // Function to return footer text based on the isIndex parameter
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  

// function to return the latest notifications
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}