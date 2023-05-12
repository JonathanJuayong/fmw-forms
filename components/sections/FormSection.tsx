import {Dispatch, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Button, Stack, Text} from "@mantine/core";
import {FormQuestion} from "../../utils/interfaces/DataSchema";
import {Tabbable} from "../../utils/interfaces/Tabbable";

interface FormSectionProps extends Tabbable {
  questions: FormQuestion[]
  sectionName: string
  formStateSetter: Dispatch<any>,
}

export default function FormSection({questions, sectionName, formStateSetter, tabbable = true}: FormSectionProps) {
  const defaultValues = questions.reduce(((acc, cur) => {
    return {
      ...acc,
      [cur.label]: cur.default
    }
  }), {});
  const {control, handleSubmit} = useForm({
    defaultValues: {...defaultValues},
    shouldUnregister: true
  })
  const onSubmitHandler = handleSubmit((data) => {
    formStateSetter((prev: any) => ({
      ...prev,
      [sectionName]: data
    }))
  })

  useEffect(() => {
    formStateSetter((prev: any) => ({
      ...prev,
      [sectionName]: {...defaultValues}
    }))
    return () => {
      formStateSetter((prev: any) => {
        const {[sectionName]: _, ...rest} = prev
        return rest
      })
    };
  }, []);

  const tabIndex = tabbable ? 0 : -1

  return (
    <form onSubmit={onSubmitHandler}>
      <Stack sx={{marginInline: "2em"}}>
        <Text>{sectionName}</Text>
        {questions.map(({name, label, Component}) => (
          <Component key={name} name={label} label={label} control={control} tabIndex={tabIndex}/>
        ))}
        <Button tabIndex={tabIndex} onClick={onSubmitHandler}>Next</Button>
      </Stack>
    </form>
  )
}
