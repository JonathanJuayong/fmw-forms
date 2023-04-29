import {Dispatch, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Carousel} from "@mantine/carousel";
import {Button, Stack, Text} from "@mantine/core";
import {FormQuestion} from "../utils/interfaces/DataSchema";

interface FormSectionProps {
    questions: FormQuestion[]
    sectionName: string
    formStateSetter: Dispatch<any>
}

export default function FormSection({questions, sectionName, formStateSetter}: FormSectionProps) {
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


    return (
        <Carousel.Slide>
            <form onSubmit={onSubmitHandler}>
                <Stack sx={{marginInline: "2em"}}>
                    <Text>{sectionName}</Text>
                    {questions.map(({name, label, Component}) => (
                        <Component key={name} name={label} label={label} control={control}/>
                    ))}
                    <Button onClick={onSubmitHandler}>Next</Button>
                </Stack>
            </form>
        </Carousel.Slide>
    )
}
