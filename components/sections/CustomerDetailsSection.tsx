import {Dispatch, SetStateAction} from "react";
import {Button, Stack} from "@mantine/core";
import MyTextInput from "../forms/MyTextInput";
import {useForm} from "react-hook-form";
import MyDatePicker from "../forms/MyDatePicker";
import {Tabbable} from "../../utils/interfaces/Tabbable";

interface CustomerDetailsSectionProps extends Tabbable {
  customerDetailsStateSetter: Dispatch<SetStateAction<any>>
}

export default function CustomerDetailsSection({
                                                 customerDetailsStateSetter,
                                                 tabbable = true
                                               }: CustomerDetailsSectionProps) {
  const {control, handleSubmit} = useForm()

  const onClick = handleSubmit(data => {
    console.log(data)
    customerDetailsStateSetter(data)
  })

  const tabIndex = tabbable ? 0 : -1

  return (
    <Stack>
      <MyTextInput tabIndex={tabIndex} name="firstName" label="First Name" control={control} required/>
      <MyTextInput tabIndex={tabIndex} name="lastName" label="Last Name" control={control} required/>
      <MyTextInput tabIndex={tabIndex} name="email" label="Email" control={control} required/>
      <MyDatePicker tabIndex={tabIndex} name="birthdate" label="Birth Date" control={control} required/>
      <Button tabIndex={tabIndex} onClick={onClick}>Next</Button>
    </Stack>
  )
}
