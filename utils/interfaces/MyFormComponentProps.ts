import {Control} from "react-hook-form";

export interface MyFormComponentProps {
  name: string
  label: string
  required?: boolean
  control: Control
  tabIndex: number
}
