# L.I.T. LABS Backend API

A comprehensive backend API for the L.I.T. LABS STEM education platform built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- **RESTful API** for Products, Programs, Books, and User management
- **JWT Authentication** with role-based access control
- **MongoDB Database** with Mongoose ODM
- **TypeScript** for type safety and better development experience
- **Security** with Helmet, CORS, and Rate Limiting
- **File Upload** support for images and documents
- **Comprehensive Error Handling** with custom middleware
- **Database Seeding** with sample data

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository and navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp env.example .env
   ```

4. **Configure environment variables in `.env`:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/lit-labs
   PORT=5000
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Seed Database
```bash
npm run seed
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/featured` - Get featured products
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get single program
- `GET /api/programs/featured` - Get featured programs
- `GET /api/programs/category/:category` - Get programs by category
- `POST /api/programs/:id/enroll` - Enroll in program
- `POST /api/programs` - Create program (Admin only)
- `PUT /api/programs/:id` - Update program (Admin only)
- `DELETE /api/programs/:id` - Delete program (Admin only)

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get single book
- `GET /api/books/featured` - Get featured books
- `GET /api/books/category/:category` - Get books by category
- `GET /api/books/author/:author` - Get books by author
- `POST /api/books` - Create book (Admin only)
- `PUT /api/books/:id` - Update book (Admin only)
- `DELETE /api/books/:id` - Delete book (Admin only)

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### User Roles
- **admin**: Full access to all endpoints
- **user**: Access to public endpoints and own data
- **instructor**: Access to programs and teaching materials

## 📊 Database Models

### Product
- Basic product information (name, description, price)
- Category and age group targeting
- Images and specifications
- Stock management
- Reviews and ratings

### Program
- Educational program details
- Curriculum and schedule
- Instructor information
- Enrollment management
- Prerequisites and outcomes

### Book
- Book metadata (title, author, ISBN)
- Content information (pages, format)
- Table of contents
- Reviews and ratings

### User
- User profile and preferences
- Role-based access control
- Authentication data

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Prevent abuse
- **JWT**: Secure authentication
- **Input Validation**: Data sanitization
- **Error Handling**: Secure error responses

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── uploads/        # File uploads
│   └── index.ts        # Main server file
├── dist/               # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Development

### Adding New Models
1. Create model in `src/models/`
2. Add controller in `src/controllers/`
3. Create routes in `src/routes/`
4. Update main server file

### Environment Variables
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `JWT_SECRET`: JWT signing secret
- `JWT_EXPIRE`: JWT expiration time
- `FRONTEND_URL`: Frontend URL for CORS
- `NODE_ENV`: Environment (development/production)

## 🧪 Testing

Health check endpoint:
```
GET /health
```

Response:
```json
{
  "success": true,
  "message": "L.I.T. LABS API is running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development"
}
```

## 📝 Sample Data

The database seeder includes:
- 3 sample products (Arduino, LEGO Mindstorms, Raspberry Pi)
- 2 sample programs (Robotics, AI/ML)
- 2 sample books (Python, LEGO Mindstorms)
- 1 admin user (admin@litlabs.com / admin123)

## 🚀 Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set production environment variables

3. Start the server:
   ```bash
   npm start
   ```

## 📞 Support

For support and questions, please contact the development team.

---

**L.I.T. LABS** - Empowering the next generation through STEM education! 🚀
