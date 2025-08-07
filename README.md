
📖 Overview
Welcome to the Virtual-ai repository! This project is a master codebase for a virtual AI-powered tour guide. It is designed to provide a comprehensive, interactive, and personalized virtual touring experience using artificial intelligence. This repository contains both the frontend user interface and the backend services that power the AI functionality.

💡 Problem Statement
The traditional experience of planning a trip can be overwhelming and generic. Users often spend hours researching destinations, attractions, and logistics, only to end up with a rigid, one-size-fits-all itinerary. Our project aims to solve this by creating a platform that leverages AI to generate personalized, dynamic, and engaging tour plans based on user preferences, time, and budget, making trip planning effortless and enjoyable.

✨ Features
AI-Powered Tour Planning: Users can input their preferences to generate a custom itinerary.

Interactive Frontend: A modern and responsive web interface built with React.

Scalable Backend: A robust backend architecture for handling AI model queries and data management.

Modular Design: The project is split into Frontend and Backend directories for clean separation of concerns and easier development.

⚙️ How It Works
This application operates as a full-stack solution. The user interacts with the Frontend, which captures their travel preferences (e.g., interests, budget, duration). This information is sent to the Backend, which uses a large language model (LLM) to process the request and generate a unique, tailored itinerary. The backend then sends this structured tour plan back to the frontend, which displays it in an interactive and user-friendly format. This allows for a truly personalized and dynamic tour experience.

💻 Tech Stack
Frontend

React: A JavaScript library for building the user interface.

Tailwind CSS: A utility-first CSS framework for styling.

Backend

Python: The core programming language for the server.

Flask/FastAPI: A web framework for creating API endpoints.

Generative AI Model: An LLM is used to generate the tour itineraries.

🚀 Installation & Setup
To get a copy of this project up and running on your local machine, follow these steps.

Prerequisites
You will need the following software installed:

Node.js (version 18 or higher)

npm (comes with Node.js)

Python (version 3.8 or higher)

A package manager for Python, like pip

Git

1. Clone the Repository
First, clone this repository to your local machine using the following command:

git clone https://github.com/Niravjani/Virtual-ai.git

Navigate into the project directory:

cd Virtual-ai

2. Backend Setup
The backend is responsible for the AI logic and API endpoints.

# Navigate into the Backend directory
cd Backend

# Install Python dependencies
pip install -r requirements.txt

3. Frontend Setup
The frontend provides the user interface for the application.

# Navigate to the Frontend directory
cd Frontend

# Install Node.js dependencies
npm install

🛠️ Usage
Starting the Backend
After setting up the backend dependencies, you can start the server.

# Navigate to the Backend directory
cd Backend

# Start the server (replace with your specific command, e.g., 'python app.py')
npm run dev

Starting the Frontend
After setting up the frontend dependencies, you can start the application.

# Navigate to the Frontend directory
cd Frontend

# Start the development server
npm run dev

Your virtual AI tour application should now be running! You can access it by opening your web browser and navigating to the local address provided by the npm run dev command (usually http://localhost:5173).

📂 Project Structure
Virtual-ai/
├── Backend/                 # Contains the backend server and AI logic
│   ├── .git/
│   ├── src/
│   ├── ...
├── Frontend/                # Contains the React application
│   ├── src/
│   ├── public/
│   ├── ...
└── README.md                # This file

👥 Team Members
Nirav Jani
Rudra Trivedi
Maulik Dudhrejiya



📊 Presentation (Optional)
You can find our project's presentation slides here.

🤝 Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are the best way to get your changes merged.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.
