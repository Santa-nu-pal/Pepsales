const Notification = require("../models/Notification");

// Send a Notification
exports.sendNotification = async (req, res) => {
  const { userId, type, content } = req.body;

  // checking here for Missing Fields
  if (!userId || !type || !content) {
    return res.status(400).json({ error: "userId, type, and content are required fields" });
  }

  // checking here for valid Data Types
  if (typeof userId !== "string" || typeof content !== "string") {
    return res.status(400).json({ error: "userId and content must be strings" });
  }

  // checking here for Allowed Notification Types
  const validTypes = ["email", "sms", "in-app"];
  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: `Invalid notification type. Allowed types: ${validTypes.join(", ")}` });
  }

  try {
    // if everything is ok then i am Saving the notification
    const notification = await Notification.create({ userId, type, content, status: "pending" });
    res.status(201).json({ message: "Notification created successfully", notification });
  } catch (error) {
    console.error("Error creating notification:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Get user notifications
exports.getUserNotifications = async (req, res) => {
  const { id } = req.params;

  try {
    const notifications = await Notification.find({ userId: id });

    if (notifications.length === 0) {
      return res.status(404).json({ error: "No notifications found for this user" });
    }

    res.status(200).json({ notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};