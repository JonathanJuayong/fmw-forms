import {Control, Controller} from "react-hook-form";
import {TextInput} from "@mantine/core";

interface MyTextInputProps {
    name: string,
    label: string,
    required?: boolean,
    control: Control
}

export default function MyTextInput({name, label, required = false, control}: MyTextInputProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={{required}}
            render={({field}) => (
                <TextInput
                    label={label}
                    withAsterisk={required}
                    {...field}
                />
            )}
        />
    )
}
