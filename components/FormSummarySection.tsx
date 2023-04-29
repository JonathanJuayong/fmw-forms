import {Carousel} from "@mantine/carousel";
import {Stack, Text} from "@mantine/core";

interface FormSummarySectionProps {
    formState: any
}

export default function FormSummarySection({formState}: FormSummarySectionProps) {
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
            </Stack>
        </Carousel.Slide>
    )
}
