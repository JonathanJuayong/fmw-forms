import {Dispatch, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Button, Stack, Text} from "@mantine/core";
import MyCheckBox from "./forms/MyCheckBox";
import {Carousel} from "@mantine/carousel";
import {Checklist} from "../utils/interfaces/DataSchema";

interface ChecklistSectionProps {
    checklists: Checklist[],
    checklistStateSetter: Dispatch<any>,
    onNextButtonClick: () => void
}

export default function ChecklistSection(
    {
        checklists,
        onNextButtonClick,
        checklistStateSetter
    }: ChecklistSectionProps
) {
    const defaultValues = checklists.reduce((acc, checklist) => {
        return {
            ...acc,
            [checklist.name]: {
                ...checklist.checklistItems.reduce((acc, checklistItem) => {
                    return {
                        ...acc,
                        [checklistItem.name]: false
                    }
                }, {})
            }
        }
    }, {})
    const {control, watch} = useForm({defaultValues})

    useEffect(() => {
        checklistStateSetter((prev: any) => ({
            ...prev,
            checklists: defaultValues
        }))
    }, []);

    useEffect(() => {
        const subscription = watch(value => checklistStateSetter((prev: any) => ({
            ...prev,
            checklists: value
        })))
        return () => subscription.unsubscribe()
    }, [watch]);


    return (
        <Stack ml="2em" mr="2em" spacing="xl">
            {checklists.map(checklist => (
                <Stack key={checklist.name}>
                    <Text>{checklist.label}</Text>
                    {checklist.checklistItems.map(checklistItem => (
                        <MyCheckBox
                            key={checklistItem.name}
                            name={`${checklist.name}.${checklistItem.name}`}
                            label={checklistItem.label}
                            control={control}
                        />
                    ))}
                </Stack>
            ))}
            <Button onClick={onNextButtonClick}>Next</Button>
        </Stack>
    )
}
