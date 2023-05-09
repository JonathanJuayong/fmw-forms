import FormContainer from "../components/FormContainer";
import {questions} from "../utils/testData";
import {Container} from "@mantine/core";

export default function Home() {
    return (
        <Container size="xs" pt="2em" pb="2em">
            <FormContainer checklists={questions}/>
        </Container>
    )
}
