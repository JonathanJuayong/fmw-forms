import {Controller} from "react-hook-form";
import {Checkbox} from "@mantine/core";
import {MyFormComponentProps} from "../../../utils/interfaces/MyFormComponentProps";

export default function MyCheckBox({name, label, control, required = false, tabIndex}: MyFormComponentProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{required}}
      render={({field}) => (
        <Checkbox
          tabIndex={tabIndex}
          label={label}
          {...field}
        />
      )}
    />
  )
}
