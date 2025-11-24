import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedFlavor } from "../types";

// Initialize the client
// The API key is obtained from process.env.API_KEY as per strict guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDreamFlavor = async (mood: string): Promise<GeneratedFlavor> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Create a unique, fun, and imaginary fruit popsicle/frollie flavor based on this mood or theme: "${mood}". 
    The flavor should be creative and fit a playful "Frollies" (fruit bar) brand vibe. It should be fruit-forward.
    Return JSON with name, description (max 20 words), list of 3-4 key ingredients (mostly fruits), a hex color code representing the treat, and a short fun fact.`;

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

    let text = response.text || "{}";
    
    // Clean up if the model returns markdown code blocks
    if (text.startsWith("```")) {
      text = text.replace(/^```(json)?\n/, "").replace(/```$/, "");
    }
    
    return JSON.parse(text) as GeneratedFlavor;
  } catch (error) {
    console.error("Error generating flavor:", error);
    throw error;
  }
};