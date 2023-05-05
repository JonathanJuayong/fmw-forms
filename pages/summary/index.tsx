import useMyFormContext from "../../components/context/useMyFormContext";
import MyDocument from "../../components/pdf/MyDocument";
import {PDFViewer} from "@react-pdf/renderer";
import {Center} from "@mantine/core";

export default function Summary() {
    const [formState, _] = useMyFormContext()
    return (
        <>
            <h1>
                Summary
            </h1>
            <Center>
                {formState && <PDFViewer width="80%" height="500px">
                    <MyDocument formState={formState}/>
                </PDFViewer>}
            </Center>
        </>
    )
}
