import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function listModels() {
  const apiKey = process.env.GOOGLE_GENAI_API_KEY;
  if (!apiKey) {
    console.error("API Key not found in .env.local");
    return;
  }

  console.log("Using API Key:", apiKey.substring(0, 5) + "...");

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    // There isn't a direct listModels on the genAI client in some versions, 
    // but we can try to fetch a model directly or just use raw fetch to the API.
    
    console.log("Attempting to list models via raw fetch...");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    
    if (!response.ok) {
        console.error("Error fetching models:", await response.text());
        return;
    }

    const data = await response.json();
    console.log("Available Models:");
    data.models.forEach((m: any) => {
        if (m.supportedGenerationMethods.includes("generateContent")) {
            console.log(`- ${m.name}`);
        }
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

listModels();
