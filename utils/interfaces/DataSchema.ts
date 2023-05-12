import {MyFormComponentProps} from "./MyFormComponentProps";

interface WithNameAndLabel {
  name: string
  label: string
}

export interface FormQuestion extends WithNameAndLabel {
  default: string | number | boolean
  subQuestions: FormQuestion[] | null
  Component: ({name, label, required, control}: MyFormComponentProps) => JSX.Element
}

export interface ChecklistItem extends WithNameAndLabel {
  formQuestions: FormQuestion[]
}

export interface Checklist extends WithNameAndLabel {
  checklistItems: ChecklistItem[]
}
