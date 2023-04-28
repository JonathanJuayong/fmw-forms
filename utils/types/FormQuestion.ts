import {MyFormComponentProps} from "../interfaces/MyFormComponentProps";

export type FormQuestion = {
    id: number
    name: string,
    label: string,
    default: string | number | boolean
    subQuestions: Array<FormQuestion> | null,
    Component: ({name, label, required, control}: MyFormComponentProps) => JSX.Element
}
