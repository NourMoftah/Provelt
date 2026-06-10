import express from "express";
import { ENV } from "./lib/env.js";
import cors from "cors";
import path from "path";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { connectDB } from "./lib/db.js";
import { functions, inngest } from "./lib/inngest.js";
import { protectRoute } from "./middleware/protectRouter.js";

const app = express();
app.use(clerkMiddleware());
const __dirname = path.resolve();
// middleware
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  }),
);
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  }),
);
app.use("api/chat", chatRouter)
console.log(ENV.PORT);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "you did it" });
});


if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
console.log(__dirname);
console.log(path.join(__dirname, "../frontend/dist"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server ", error);
  }
};

startServer();
