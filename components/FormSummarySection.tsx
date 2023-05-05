import {Carousel} from "@mantine/carousel";
import {Button, Stack, Text} from "@mantine/core";
import useMyFormContext from "./context/useMyFormContext";
import {useRouter} from "next/router";

interface FormSummarySectionProps {
    formState: any
}

export default function FormSummarySection({formState}: FormSummarySectionProps) {
    const [_, setFormContext] = useMyFormContext()
    const router = useRouter()

    const onClickHandler = () => {
        setFormContext(formState)
        router.push("/summary")
    }

    return (
        <Carousel.Slide>
            <Stack sx={{
                marginInline: "2em",
                height: "50svh",
                overflow: "scroll"
            }}>
                <h1>Form Summary:</h1>
                {Object.entries(formState).map(([key, value]) => (
                    <Stack key={key}>
                        <Text>{key}:</Text>
                        <ul style={{listStyle: "none"}}>
                            {(Object.entries(value as { k: string, v: any })).map(([k, v]) => (
                                <li key={k}>
                                    {k}: {v.toString()}
                                </li>
                            ))}
                        </ul>
                    </Stack>
                ))}
                <Button onClick={onClickHandler}>Create PDF</Button>
            </Stack>
        </Carousel.Slide>
    )
}
