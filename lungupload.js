// JavaScript to handle file upload interactions
const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const submitBtn = document.getElementById('submitBtn');

// Trigger file input when clicking the upload box
uploadBox.addEventListener('click', () => {
  fileInput.click();
});

// Drag and drop functionality
uploadBox.addEventListener('dragover', (event) => {
  event.preventDefault();
  uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
});

uploadBox.addEventListener('dragleave', () => {
  uploadBox.style.backgroundColor = "transparent";
});

uploadBox.addEventListener('drop', (event) => {
  event.preventDefault();
  uploadBox.style.backgroundColor = "transparent";
  fileInput.files = event.dataTransfer.files; // Assign dropped files to the input
  alert(`${fileInput.files.length} file(s) uploaded!`);
});

// Submit button functionality
submitBtn.addEventListener('click', () => {
  if (fileInput.files.length > 0) {
    alert("Files submitted successfully!");
  } else {
    alert("No files selected.");
  }
});
