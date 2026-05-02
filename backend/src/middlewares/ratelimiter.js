import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("key");
    if (!success) {
      res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error: ", error);
    next(error);
  }
};

export default ratelimiter;
