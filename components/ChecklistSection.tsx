import {Dispatch} from "react";
import {useForm} from "react-hook-form";
import {Button, Stack, Text} from "@mantine/core";
import MyCheckBox from "./forms/MyCheckBox";
import {Category} from "../utils/types/Category";

interface ChecklistSectionProps {
    categories: Category[],
    formStateSetter: Dispatch<any>
}

export default function ChecklistSection({categories, formStateSetter}: ChecklistSectionProps) {
    const defaultValues = categories.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.name]: {
                ...cur.checklists.reduce((acc, cur) => {
                    return {
                        ...acc,
                        [cur.name]: false
                    }
                }, {})
            }
        }
    }, {})
    const {control, handleSubmit} = useForm({defaultValues})

    const submitHandler = handleSubmit(data => formStateSetter((prev: any) => ({
        ...prev,
        categories: data
    })))

    return (
        <Stack>
            <form onSubmit={submitHandler}>
                <Stack spacing="xl">
                    {categories.map(category => (
                        <Stack key={category.name}>
                            <Text>{category.label}</Text>
                            {category.checklists.map(checklist => (
                                <MyCheckBox
                                    key={checklist.name}
                                    name={`${category.name}.${checklist.name}`}
                                    label={checklist.label}
                                    control={control}
                                />
                            ))}
                        </Stack>
                    ))}
                    <Button onClick={submitHandler}>Next</Button>
                </Stack>
            </form>
        </Stack>
    )
}
