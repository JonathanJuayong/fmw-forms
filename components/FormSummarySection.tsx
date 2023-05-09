import {Button, Stack, Text} from "@mantine/core";
import {PDFDownloadLink} from "@react-pdf/renderer";
import MyDocument from "./pdf/MyDocument";

interface FormSummarySectionProps {
    formState: any
}

export default function FormSummarySection({formState}: FormSummarySectionProps) {
    return (
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
            <PDFDownloadLink document={<MyDocument formState={formState}/>}>
                {({loading}) => (
                    loading ? <Button loading>Loading document</Button> : <Button>Download</Button>
                )}
            </PDFDownloadLink>
        </Stack>
    )
}
