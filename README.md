
# Blogging Web Application

Welcome to the Blogging Web Application! This project is a full-featured blogging platform built with modern technologies to ensure a seamless and performant experience. Below, you'll find an overview of the tech stack, installation instructions, and more.

## Tech Stack

### Backend
- **Cloudflare Workers**: For serverless deployment and handling requests.
- **Hono**: A web framework for building fast and small web applications.
- **Prisma**: An ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: The relational database used for storing blog data.
- **JWT**: JSON Web Tokens for secure authentication and authorization.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.

### Other
- **Self-deployed npm package**: A custom npm package deployed for additional functionality.

## Features

- **User Authentication**: Secure login and signup using JWT.
- **Blog Management**: Create, edit, and delete blog posts.
- **Responsive Design**: User-friendly interface designed with Tailwind CSS.
- **API Integration**: Seamless interaction between frontend and backend using Axios.

## Installation

### Prerequisites
- Node.js 
- npm 
- PostgreSQL
- prisma

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PrathamSingla1204/blogging-app
   cd /backend
   ```

2. **Install dependencies**:
   ```bash
   npm i
   ```

3. **Configure environment variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
   JWT_SECRET="your_jwt_secret"
   ```

4. **Deploy Cloudflare Workers**:
   Follow the instructions on [Cloudflare Workers](https://developers.cloudflare.com/workers/) to deploy your application.

5. **update wrangler.toml file**:
   ```bash
   name = "backend"
   compatibility_date = "2023-12-01"


   DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key="YOUR_API_KEY_PRISMA_ACCLERATE"
   JWT_SECRET="YOUR_SECRET"
   ```

6. **login in wrangler account in terminal ask help from gpt.**

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the `frontend` directory and add the following:
   ```env
   REACT_APP_API_URL="your_backend_api_url"
   ```

4. **Run the frontend**:
   ```bash
   npm start
   ```

### Database Setup

1. **Initialize Prisma**:
   ```bash
   npx prisma migrate dev --name init
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

## Usage

- **Register**: Create a new account.
- **Login**: Access your account.
- **Create Post**: Write and publish new blog posts.
- **Read Post**:Read Anyones Post on DashBoard.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please reach out to [pratham.singla.762@gmail.com].
