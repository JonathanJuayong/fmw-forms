import {Carousel} from "@mantine/carousel";
import {Stack} from "@mantine/core";

interface FormSummarySectionProps {
    formState: any
}

export default function FormSummarySection({formState}: FormSummarySectionProps) {
    return (
        <Carousel.Slide>
            <Stack ml="2em" mr="2em">
                <h1>This is the summary</h1>
            </Stack>
        </Carousel.Slide>
    )
}
