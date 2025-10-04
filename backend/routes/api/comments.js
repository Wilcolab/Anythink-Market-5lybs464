/**
 * @route GET /
 * @group Comments - Operations about comments
 * @returns {Array.<Comment>} 200 - An array of comment objects
 * @returns {Error} 500 - Failed to fetch comments
 * @description Get all comments.
 */

/**
 * @route DELETE /:id
 * @group Comments - Operations about comments
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {Object} 200 - Success message
 * @returns {Error} 500 - Failed to delete comment
 * @description Delete a comment by its ID.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey Github Copilot, please write the route to get all comments for a specific post
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
})

// add nother endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});