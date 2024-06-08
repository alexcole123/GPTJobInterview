import { QnA } from "../../QuestionsArea/QnA/QnA";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			
            <h1>Job Interview Questions</h1>

            <hr />

            <QnA />

        </div>
    );
}
