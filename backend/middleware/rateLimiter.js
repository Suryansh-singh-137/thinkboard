import rateLimit from "../config/upstash.js";
const rateLimitrer = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("my-note");
    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }
    next();
  } catch (error) {
    console.log("server errro in rate limiter ", error);
    next(error);
  }
};
export default rateLimitrer;
