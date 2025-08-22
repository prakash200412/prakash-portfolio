const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from /static at /static path
app.use('/static', express.static(path.join(__dirname, 'static')));

// Also serve the templates directory for assets like bg-music.mp3
app.use('/templates', express.static(path.join(__dirname, 'templates')));

// Home route - send the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Download resume route
app.get('/download-resume', (req, res) => {
  const resumePath = path.join(__dirname, 'static', 'new resume.pdf');
  res.download(resumePath, 'Prakash_Raj_Resume.pdf', (err) => {
    if (err) {
      console.error('Error sending resume:', err);
      if (!res.headersSent) {
        res.status(500).send('Unable to download the resume at the moment.');
      }
    }
  });
});

// Fallback for 404s
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
