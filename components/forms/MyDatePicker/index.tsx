import {MyFormComponentProps} from "../../../utils/interfaces/MyFormComponentProps";
import {Controller} from "react-hook-form";
import {Input} from "@mantine/core";

export default function MyDatePicker({name, label, required = false, control, tabIndex}: MyFormComponentProps) {
  return (
    <Controller
      control={control}
      name={label}
      rules={{required}}
      render={({field}) => (
        <Input.Wrapper label={label} {...field}>
          <Input
            tabIndex={tabIndex}
            type="date"
          />
        </Input.Wrapper>
      )}
    />
  )
}
