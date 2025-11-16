import { Client } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // from .env
  .setProject(process.env.APPWRITE_PROJECT_ID);

console.log("Connected to Appwrite:", client.config);