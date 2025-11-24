import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedFlavor } from "../types";

// Initialize the client
// The API key is obtained from process.env.API_KEY as per strict guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDreamFlavor = async (mood: string): Promise<GeneratedFlavor> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Create a unique, fun, and imaginary ice cream flavor based on this mood or theme: "${mood}". 
    The flavor should be creative and fit a playful fruit-bar brand vibe.
    Return JSON with name, description (max 20 words), list of 3-4 key ingredients, a hex color code representing the ice cream, and a short fun fact.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            ingredients: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            colorHex: { type: Type.STRING },
            funFact: { type: Type.STRING }
          },
          required: ["name", "description", "ingredients", "colorHex", "funFact"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedFlavor;
  } catch (error) {
    console.error("Error generating flavor:", error);
    throw error;
  }
};