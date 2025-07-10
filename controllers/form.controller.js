import userModel from "../models/user.model.js";

export const formController = async (req, res) => {
    try {
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Name, Email, and Message are required.",
                error: true,
                success: false,
            });
        }

        const newMessage = new userModel({ name, email, message });
        const savedMessage = await newMessage.save();

        return res.status(200).json({
            message: "Message sent successfully!",
            error: false,
            success: true,
            data: savedMessage,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server error",
            error: true,
            success: false,
        });
    }
};
