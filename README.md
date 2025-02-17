# Yuan Metaverse Newsletter

Yuan Metaverse is a modern web3-focused newsletter platform that provides the latest insights and news about cryptocurrency, blockchain, NFTs, and the metaverse ecosystem.

## Features

- 🌐 **Web3 News Coverage**: Comprehensive coverage of cryptocurrency, NFTs, and metaverse developments
- 🎨 **Modern Dark Theme**: Sleek, crypto-inspired design with optimal readability
- 📱 **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- 🔍 **Smart Search**: Quick access to articles and topics
- 👥 **User Roles**: 
  - Readers: Access to all articles and content
  - Writers: Ability to create and edit articles
  - Admins: Full content management capabilities

## Tech Stack

### Frontend
- React.js
- Material-UI (MUI)
- React Router
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/yuan-metaverse.git
cd yuan-metaverse
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create a `.env` file in the backend directory
```env
MONGODB_URI=mongodb://localhost:27017/yuan-metaverse
JWT_SECRET=your-secret-key-here
PORT=5000
```

5. Start the backend server
```bash
cd backend
npm start
```

6. Start the frontend development server
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
yuan-metaverse/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   └── services/
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [Material-UI](https://mui.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
