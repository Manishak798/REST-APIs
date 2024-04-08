
# REST APIs

🚀 Welcome to Your Project Name! This backend REST API project is built using TypeScript, Node.js, Express, MongoDB, and Mongoose. It provides authentication, cookie setting, authorization, and more.

## Features

✨ **Express & TypeScript**: Utilizes Express.js framework with TypeScript for scalable and maintainable codebase.

🔒 **Authentication**: Implements authentication to secure endpoints and protect resources.

🍪 **Cookie Setting**: Utilizes cookies for session management and user authentication.

🔑 **Authorization**: Provides role-based access control (RBAC) to restrict access to certain resources.

📦 **Dependency Management**: Uses npm for managing project dependencies.

🛠️ **Linting & Formatting**: Integrates ESLint and Prettier for code linting and formatting.

🔍 **Logging**: Includes logging functionality to track application activities.

📝 **API Documentation**: Documented API endpoints for easy understanding and usage.

🧪 **Testing**: Incorporates testing frameworks like Jest for unit and integration testing.

🔄 **Continuous Integration/Continuous Deployment (CI/CD)**: Integrates CI/CD pipelines for automated testing and deployment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Install dependencies:

   ```bash
   cd your-project
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

   Update `.env` file with your environment-specific configurations.

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:8080`.


### Authentication

To authenticate, send a `POST` request to `/api/auth/login` with valid credentials. Upon successful authentication, a token will be provided for subsequent requests.

### Authorization

To access protected routes, include the provided token in the request headers:

```plaintext
Authorization: Bearer <token>
```

### Endpoints

#### User Endpoints

- `POST /api/auth/login`: Authenticate user.
- `POST /api/auth/logout`: Logout user.
- `POST /api/users`: Create a new user.

