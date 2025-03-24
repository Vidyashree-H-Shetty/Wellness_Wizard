# Wellness Wizard

Wellness Wizard is a comprehensive health and wellness platform that provides AI-powered diet recommendations, workout plans, and an intelligent chatbot to support users in their fitness journey.

## Features
- **AI Diet Recommendation**: Personalized meal plans generated using Gemini AI.
- **Workout Recommendation**: AI-powered exercise plans based on user goals.
- **AI Chatbot**: Interactive chatbot for health and wellness queries.
- **User Authentication**: Secure login and registration system.
- **Progress Tracking**: Users can track their fitness journey over time.

## Tech Stack
### Frontend:
- HTML, CSS, JavaScript

### Backend:
- Node.js, Express.js

### Database:
- PostgreSQL

### AI Integration:
- Gemini AI (for diet and workout recommendations, chatbot functionality)

## Installation
### Prerequisites
- Node.js
- PostgreSQL

### Setup
1. **Clone the repository**:
   ```sh
   git clone https://github.com/Vidyashree-H-Shetty/Wellness_Wizard.git
   cd wellness-wizard
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database.
   - Configure the database connection in `.env` file.

   Example `.env` file:
   ```env
   NODE_ENV=development
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_DATABASE=your_db_name
   DATABASE_URL=your_database_url
   SESSION_SECRET=your_session_secret
   GOOGLE_API_KEY=your_google_api_key
   ```

4. **Run the backend server**:
   ```sh
   node server.js
   ```
## **Deployment(Live Demo)**:
   ```sh
   https://wellness-wizard.onrender.com
   ```  

## Usage
1. Register and log in to your account.
2. Input health and fitness goals.
3. Receive AI-generated diet and workout plans.
4. Use the chatbot for wellness guidance.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for improvements.

## Contact
For any inquiries, reach out at [vidyashreehshetty2917@gmail.com](mailto:vidyashreehshetty2917@gmail.com).

