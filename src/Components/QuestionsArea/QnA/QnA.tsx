import { useForm } from "react-hook-form";
import { QnaModel } from "../../../Models/QnaModel";
import "./QnA.css";
import { chatGptService } from "../../../Services/ChatGptService";
import { useState } from "react";
import { promptService } from "../../../Services/PromptService";
import { FaSpinner } from "react-icons/fa";

export function QnA(): JSX.Element {

    const { register, handleSubmit } = useForm<QnaModel>();
    const [isLoading, setIsLoading] = useState(false);
    const [completion, setCompletion] = useState<string>("");

    async function send(qna: QnaModel) {
        setIsLoading(true); // Set loading to true when starting to send data
        try {
            const prompt = promptService.getPrompt(qna);
            const completion = await chatGptService.chat(prompt);
            setCompletion(completion);
        } catch (err: any) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="QnA">

            <form onSubmit={handleSubmit(send)}>

                <label>Select Programming Technology: </label>
                <select defaultValue="" {...register("technology")} required>
                    <option disabled></option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                    <option>Bootstrap</option>
                    <option>Python</option>
                    <option>React</option>
                    <option>Django</option>
                    <option>Flask</option>
                    <option>Docker</option>
                    <option>SQL</option>
                </select>

                <label>Select Level:</label>
                <select defaultValue="" {...register("level")} required>
                    <option disabled></option>
                    <option>Beginners</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                </select>

                <label>Enter How Many Questions:</label>
                <input type="number" {...register("count")} required min="1" max="20" />

                <button>Get Questions</button>

            </form>

            <div className="completion">
                {isLoading ? (
                    <div className="loading">
                        <FaSpinner className="spinner" />
                        <p>Loading questions...</p>
                    </div>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: completion }} />
                )}
            </div>
        </div>
    );
}
