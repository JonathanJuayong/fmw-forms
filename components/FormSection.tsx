import {FormQuestion} from "../utils/types/FormQuestion";
import {Dispatch, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Carousel} from "@mantine/carousel";
import {Button, Stack} from "@mantine/core";

interface FormSectionProps {
    questions: Array<FormQuestion>
    sectionName: string
    formStateSetter: Dispatch<any>
}

export default function FormSection({questions, sectionName, formStateSetter}: FormSectionProps) {
    const defaultValues = questions.reduce(((acc, cur) => {
        return {
            ...acc,
            [cur.name]: cur.default
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
            formStateSetter((prev: any) => ({
                ...prev,
                [sectionName]: {}
            }))
        };
    }, []);


    return (
        <Carousel.Slide>
            <form onSubmit={onSubmitHandler}>
                <Stack sx={{marginInline: "2em"}}>
                    {questions.map(({name, label, Component}) => (
                        <Component key={name} name={name} label={label} control={control}/>
                    ))}
                    <Button onClick={onSubmitHandler}>Next</Button>
                </Stack>
            </form>
        </Carousel.Slide>
    )
}
