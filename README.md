# Enterprise Authentication Platform

A full-stack web application demonstrating modern authentication patterns with React frontend, Hono backend API, Firebase Authentication, and PostgreSQL database integration.

## 🚀 Features

- **Multi-Authentication Support**: Google OAuth, Email/Password, Anonymous login
- **Secure Backend API**: Built with Hono framework and TypeScript
- **Database Integration**: PostgreSQL with Sequelize ORM
- **Modern Frontend**: React 18 with responsive design
- **Production Ready**: Environment configuration, error handling, and security middleware
- **Type Safety**: Full TypeScript implementation

## 🛠 Tech Stack

### Frontend
- React 18
- Firebase Authentication SDK
- Modern CSS styling

### Backend
- Hono (High-performance web framework)
- TypeScript
- Firebase Admin SDK
- PostgreSQL
- Sequelize ORM
- bcrypt for password hashing

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- Firebase project with Authentication enabled
- npm or yarn package manager

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone <repository-url>
cd Hono_with_Firebase_Auth
```

### 2. Backend Setup
```bash
cd server_side
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

### 3. Frontend Setup
```bash
cd client_side
npm install
cp .env.example .env
# Configure your Firebase credentials
npm start
```

## 🔧 Configuration

### Backend Environment Variables (.env)
```env
# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project_id.iam.gserviceaccount.com

# Server Configuration
PORT=3001
NODE_ENV=development

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# CORS
ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend Environment Variables (.env)
```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

# Backend API
REACT_APP_API_URL=http://localhost:3001
```

## 🏗 Project Structure

```
├── client_side/                 # React frontend
│   ├── src/
│   │   ├── App.js              # Main application component
│   │   ├── App.css             # Application styles
│   │   └── index.js            # Application entry point
│   ├── public/                 # Static assets
│   └── package.json
│
├── server_side/                # Hono backend
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   │   ├── db.config.ts    # Database configuration
│   │   │   ├── firebase.config.ts # Firebase Admin setup
│   │   │   └── env.config.ts   # Environment variables
│   │   ├── controller/         # Route controllers
│   │   ├── middleware/         # Authentication middleware
│   │   ├── model/              # Database models
│   │   ├── routes/             # API routes
│   │   └── index.ts            # Server entry point
│   └── package.json
```

## 🔐 Authentication Flow

1. **Frontend**: User initiates login (Google/Email/Anonymous)
2. **Firebase**: Handles authentication and returns JWT token
3. **Backend**: Validates Firebase token via Admin SDK
4. **Database**: Stores/retrieves user information
5. **Response**: Returns authenticated user data

## 📡 API Endpoints

```
GET  /                          # Health check
POST /api/auth/login           # User authentication
GET  /api/user/profile         # Get user profile
PUT  /api/user/profile         # Update user profile
```

## 🧪 Development Scripts

### Backend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

### Frontend
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

## 🔒 Security Features

- Firebase Authentication integration
- JWT token validation
- CORS configuration
- Environment variable protection
- Password hashing with bcrypt
- SQL injection prevention with Sequelize

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License 

## 🙋‍♂️ Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ By Afwan Latif using modern web technologies**
