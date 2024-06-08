import { QnaModel } from "../Models/QnaModel";

class PromptService {
	
    public getPrompt(qna: QnaModel): string {
        const prompt = `
        Write me ${qna.count} programming technology questions and answers,
        in the field of ${qna.technology},
        in a ${qna.level} level.
        Each question and answer should be in different <div> tag, containing <p> for the question and <p> for the answer.
        Example: 
        <div>
            <p>Q1: Question 1...</p>
            <p>A1: Answer 1...</p>
        </div>
        <div>
            <p>Q2: Question 2...</p>
            <p>A2: Answer 2...</p>
        </div>
        <div>
            <p>Q3: Question 3...</p>
            <p>A3: Answer 3...</p>
        </div>
        ...
        `;
        return prompt;
    }

}

export const promptService = new PromptService();
