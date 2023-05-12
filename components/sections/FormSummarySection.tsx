import {Button, Stack, Text} from "@mantine/core";
import {PDFDownloadLink} from "@react-pdf/renderer";
import MyDocument from "../pdf/MyDocument";
import {Tabbable} from "../../utils/interfaces/Tabbable";

interface FormSummarySectionProps extends Tabbable {
  formState: any
}

export default function FormSummarySection({formState, tabbable = true}: FormSummarySectionProps) {
  const tabIndex = tabbable ? 0 : -1
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
      {tabbable && <PDFDownloadLink document={<MyDocument formState={formState}/>}>
        {({loading}) => (
          loading ? <Button tabIndex={tabIndex} loading>Loading document</Button> :
            <Button tabIndex={tabIndex}>Download</Button>
        )}
      </PDFDownloadLink>}
    </Stack>
  )
}
