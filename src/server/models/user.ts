import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	telegramId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
		default: "",
	},
	phoneNumber: {
		type: String,
		default: "",
	},
	role: {
		type: String,
		enum: ["buyer", "seller"],
		default: "buyer",
	},
	joindedAt: {
		type: Date,
		default: Date.now,
	},
	lastSeen: {
		type: Date,
	},
	notificationPreferences: {
		orderUpdates: { type: Boolean, default: true },
		promotions: { type: Boolean, default: true },
	},
	theme: { type: String, enum: ["light", "dark"], default: "light" },
});

const User = mongoose.connection
	.useDb("Telegram_Market")
	.model("User", userSchema);

export default User;
