// Function to replace profile pictures
function replaceProfilePictures() {
  // URL of the image you want to use
  const newProfilePictureUrl = 'https://example.com/new-profile-picture.jpg';

  // Find all profile picture elements
  const profilePictureElements = document.querySelectorAll('.feed-shared-actor__image');

  // Replace the profile pictures
  profilePictureElements.forEach((element) => {
    element.src = newProfilePictureUrl;
  });
}

// Call the replaceProfilePictures function when the page loads
document.addEventListener('DOMContentLoaded', replaceProfilePictures);
	

