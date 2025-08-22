# Prakash Raj K - Portfolio

A modern, responsive portfolio website built with Node.js, Express, and vanilla JavaScript.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 🎵 Background music
- ✨ Smooth animations and transitions
- 📄 Resume download functionality
- 📧 Contact form
- 🌟 Interactive skills display
- 📚 Education and experience timeline

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with animations
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd prakash-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment on Render

This project is configured for easy deployment on Render. Follow these steps:

### Option 1: Deploy via Render Dashboard

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `prakash-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or your preferred plan)

### Option 2: Deploy via render.yaml (Recommended)

1. Push your code to GitHub with the `render.yaml` file
2. Go to [render.com](https://render.com) and sign up/login
3. Click "New +" and select "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and deploy your service

## Project Structure

```
prakash-portfolio/
├── server.js              # Express server
├── package.json           # Dependencies and scripts
├── render.yaml            # Render deployment config
├── static/                # Static assets
│   ├── style.css         # Main stylesheet
│   ├── black-panther-5120x2880-14439.jpg  # Profile image
│   └── new resume.pdf    # Resume file
└── templates/             # HTML templates
    ├── index.html        # Main portfolio page
    └── bg-music.mp3      # Background music
```

## Environment Variables

The application uses the following environment variables:
- `PORT`: Server port (defaults to 3000)
- `NODE_ENV`: Environment mode (production/development)

## Customization

To customize the portfolio:

1. **Personal Information**: Update the content in `templates/index.html`
2. **Styling**: Modify `static/style.css`
3. **Profile Image**: Replace `static/black-panther-5120x2880-14439.jpg`
4. **Resume**: Replace `static/new resume.pdf`
5. **Background Music**: Replace `templates/bg-music.mp3`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: prakashrajk7@gmail.com
- **LinkedIn**: [Prakash Raj K](https://linkedin.com/in/prakash-raj-k-4546a62a0)
- **GitHub**: [prakash200412](https://github.com/prakash200412)
