import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class ChatGptService {
	
    // prompt: ChatGPT-השאלה או הפקודה שאנו שולחים ל
    // completion: מחזיר לנו בחזרה ChatGPT-התשובה ש
    // token: גודל מידע ששווה בערך ל-4 תווים, משמש למציאת התשובה, קיימת הגבלה מבחינת כמות הטוקנים שניתן לשלוח
    // model: האלגוריתם המשמש לצ'אט

    public async chat(prompt: string): Promise<string> {

        const body = {
            model: "gpt-3.5-turbo",
            max_tokens: 4096,
            messages: [
                // { role: "system", content: "You are a helpful assistant." } // General ChatGPT Personality
                { role: "system", content: "You are a programming technology expert." }, // Specific ChatGPT Personality
                { role: "user", content: prompt }
            ]
        };

        const options = {
            headers: {
                Authorization: "Bearer " + appConfig.chatGptApiKey // Bearer לא לשכוח את הרווח אחרי המילה
            }
        };

        const response = await axios.post(appConfig.chatGptUrl, body, options);

        const completion = response.data.choices[0].message.content;

        return completion;
    }

}

export const chatGptService = new ChatGptService();
