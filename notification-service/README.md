
# Notification Service

## Project Overview
This project is a backend service built using Express.js that handles notifications for users. It provides API endpoints to send notifications and retrieve notifications for a specific user. The service supports three types of notifications: Email, SMS, and In-app notifications.

## Features
- Send notifications to users (Email, SMS, In-app)
- Fetch all notifications for a specific user
- Proper error handling for missing fields, invalid data types, and nonexistent users
- Structured response format for easy integration

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Installation and Setup

1. **Clone the Repository:**
```
git clone <repository-link>
cd <repository-folder>
```

2. **Install Dependencies:**
```
npm install
```

3. **Setup Environment Variables:**
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=mongodb://localhost:27017/notifications
```
If implementing Email and SMS notifications, you can add the following placeholders:
```
EMAIL_USER=
EMAIL_PASS=
SMS_API_KEY=
```

4. **Start the Server:**
```
npm start
```

The server will run at `http://localhost:3000`.

---

## API Endpoints

### 1. Send a Notification
- **Endpoint:** `POST /notifications`
- **Request Body:**
```
{
  "userId": "12345",
  "type": "email",
  "content": "Your order has been shipped!"
}
```
- **Response:**
- `201 Created`: Notification successfully created
- `400 Bad Request`: Missing fields or invalid data types
- `500 Internal Server Error`: Server error

### 2. Get User Notifications
- **Endpoint:** `GET /users/:id/notifications`
- **Response:**
- `200 OK`: Returns an array of notifications
- `404 Not Found`: No notifications found for the user
- `500 Internal Server Error`: Server error

---

## Error Handling
- Missing fields return a `400 Bad Request` with a specific error message.
- Invalid notification type returns a `400 Bad Request` with allowed types listed.
- Non-existent user returns a `404 Not Found` with a clear error message.

---

## Future Improvements
- Implementing message queues (RabbitMQ, Kafka) for notification processing.
- Adding retry logic for failed notifications.
- Implementing rate limiting to prevent abuse.

---

## Additional Notes
- Ensure MongoDB is running before starting the server.
- Use Postman or any API testing tool to test the endpoints.
