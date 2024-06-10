# My Social Media Platform

Welcome to my social media platform! This project is developed using Next.js for the front-end, Node.js for the back-end, MongoDB with Prisma ORM for the database, and includes various social media functionalities. Below you will find detailed information about the features and technologies used in this project.

## Features

### User Authentication
- **Sign Up & Login:** Users can sign up and log in using their email and password.

### Tweet Functionality
- **Post Tweets:** Users can post text-based tweets to share their thoughts.
- **Delete Tweets:** Users have the ability to delete their own tweets.

### Suggested Users
- **Hobby-Based Suggestions:** Users are suggested based on their hobbies to connect with like-minded people.

### Comments
- **Post Comments:** Users can comment on tweets.
- **Delete Comments:** Users can delete their own comments on tweets.

### Notifications
- **Real-Time Notifications:** Users receive real-time notifications for actions such as likes on their posts or comments.

### Likes
- **Like Tweets:** Users can like tweets and see the number of likes each tweet has received.

## Technologies Used

### Front-End
- **Next.js:** A React framework for server-side rendering and generating static websites.
- **Tailwind CSS:** A utility-first CSS framework for styling.

### Back-End
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A minimal and flexible Node.js web application framework.

### Database
- **MongoDB:** A NoSQL database for storing user data, tweets, comments, and more.
- **Prisma ORM:** An open-source ORM for MongoDB, providing a type-safe database client.

### Other Tools and Libraries
- **JWT (JSON Web Tokens):** For secure user authentication.
- **Bcrypt:** For hashing user passwords.
- **Multer:** Middleware for handling `multipart/form-data`, used for handling file uploads (though image/video upload functionality is not yet implemented).
- **Socket.io:** For real-time notifications.

## Project Structure

```plaintext
├── backend
│   ├── prisma
│   │   ├── schema.prisma        # Prisma schema file
│   ├── public
│   │   ├── ...                  # Public assets
│   ├── src
│   │   ├── components           # React components
│   │   ├── pages                # Next.js pages
│   │   ├── styles               # Global styles and Tailwind CSS configuration
│   │   ├── utils                # Utility functions
│   │   ├── server               # Server-side code
│   │   │   ├── controllers      # Request handlers
│   │   │   ├── models           # Prisma models
│   │   │   ├── routes           # API routes
│   │   │   ├── middleware       # Middleware functions
│   │   ├── prisma               # Prisma client
│   │   ├── index.js             # Entry point for the server
│   │   ├── ...                  # Other configuration files
├── components                   # Front-end components
├── .env                         # Environment variables
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js:** Ensure you have Node.js installed on your machine.
- **MongoDB:** Set up a MongoDB database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Move backend content to root:**
   ```bash
   mv backend/* ./
   mv backend/.* ./
   rmdir backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ```

5. **Run Prisma migrations:**
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

### Usage

- **Visit the application:** Open your browser and go to `http://localhost:3000`
- **Sign up or log in:** Create an account or log in with your existing credentials.
- **Start tweeting:** Share your thoughts, like posts, comment, and connect with other users based on hobbies.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the developers and maintainers of the tools and libraries used in this project.

## Contact

For any inquiries or feedback, please contact [your-email@example.com](hamzashaukat714@gmail.com).
