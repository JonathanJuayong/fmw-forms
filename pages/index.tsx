import FormContainer from "../components/FormContainer";
import {questions} from "../utils/testData";

export default function Home() {
    return (
        <FormContainer checklists={questions}/>
    )
}
