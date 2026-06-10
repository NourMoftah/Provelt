import {StreamChat} from "stream-chat"
import {ENV} from "./env.js"

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET


if(!apiKey || apiSecret) {
    console.error("No api Stream exist")
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret)
export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream User", error);
    throw error; 
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUsers([userId]);
    return userId;
  } catch (error) {
    console.error("Error deleting Stream User", error);
    throw error;
  }
};