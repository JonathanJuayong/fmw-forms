import {MyFormComponentProps} from "../interfaces/MyFormComponentProps";

export type MyFormData = {
    id: number
    name: string,
    label: string,
    default: string | number | boolean
    subForms: Array<MyFormData> | null,
    Component: ({name, label, required, control}: MyFormComponentProps) => JSX.Element
}
