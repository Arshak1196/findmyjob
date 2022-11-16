import Post from "../models/Post.js"


//@route   GET /post/posts
//@access  Private
//@desc    Get Latest 10 Posts by users.
export const getPosts = async (req, res, next) => {
    try {
        let posts = await Post.find().populate("userId", "name")
            .sort({ createdAt: -1 }).limit(10)
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}

//@route   POST /post/post
//@access  Private
//@desc    Create new Post
export const createPost = async (req, res, next) => {
    try {
        const data = req.body;
        data.userId = req.user._id;
        const post = await new Post(data).save()
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}