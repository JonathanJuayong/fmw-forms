import {Dispatch, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Button, Stack, Text} from "@mantine/core";
import MyCheckBox from "./forms/MyCheckBox";
import {Category} from "../utils/types/Category";
import {Carousel} from "@mantine/carousel";

interface ChecklistSectionProps {
    categories: Category[],
    formStateSetter: Dispatch<any>,
    onNextButtonClick: () => void
}

export default function ChecklistSection({categories, onNextButtonClick, formStateSetter}: ChecklistSectionProps) {
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
    const {control, handleSubmit, watch} = useForm({defaultValues})

    // const submitHandler = handleSubmit(data => formStateSetter((prev: any) => ({
    //     ...prev,
    //     categories: data
    // })))

    useEffect(() => {
        const subscription = watch(value => formStateSetter((prev: any) => ({
            ...prev,
            categories: value
        })))
        return () => subscription.unsubscribe()
    }, [watch]);


    return (
        <Carousel.Slide>
            <Stack ml="2em" mr="2em" spacing="xl">
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
                <Button onClick={onNextButtonClick}>Next</Button>
            </Stack>
        </Carousel.Slide>
    )
}
