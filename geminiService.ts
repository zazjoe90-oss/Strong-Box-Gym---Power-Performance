
import { GoogleGenAI, Type } from "@google/genai";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY}); as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface WorkoutRecommendation {
  title: string;
  duration: string;
  exercises: { name: string; sets: string; reps: string; intensity: string }[];
  coachingTips: string[];
}

export const getWorkoutPlan = async (goal: string, level: string, time: string): Promise<WorkoutRecommendation> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a detailed gym workout plan for a ${level} level individual focusing on ${goal} with ${time} available. Output as a JSON object.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            duration: { type: Type.STRING },
            exercises: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  sets: { type: Type.STRING },
                  reps: { type: Type.STRING },
                  intensity: { type: Type.STRING }
                },
                required: ["name", "sets", "reps", "intensity"]
              }
            },
            coachingTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "duration", "exercises", "coachingTips"]
        }
      }
    });

    // The text property returns the string output directly as a getter
    const jsonStr = response.text || '{}';
    return JSON.parse(jsonStr.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
