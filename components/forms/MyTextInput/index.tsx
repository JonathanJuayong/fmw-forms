import {Controller} from "react-hook-form";
import {TextInput} from "@mantine/core";
import {MyFormComponentProps} from "../../../utils/interfaces/MyFormComponentProps";

export default function MyTextInput({name, label, required = false, control}: MyFormComponentProps) {
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
