import {Control, Controller} from "react-hook-form";
import {Checkbox} from "@mantine/core";

interface MyCheckBoxProps {
    name: string,
    label: string,
    control: Control,
    required?: boolean
}

export default function MyCheckBox({name, label, control, required = false}: MyCheckBoxProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={{required}}
            render={({field}) => (
                <Checkbox
                    label={label}
                    {...field}
                />
            )}
        />
    )
}
