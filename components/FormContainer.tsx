import {Control, useForm} from "react-hook-form";
import MyTextInput from "./forms/MyTextInput";
import MyCheckBox from "./forms/MyCheckBox";
import {Button, Stack} from "@mantine/core";
import {Carousel, Embla} from "@mantine/carousel";
import {Dispatch, useEffect, useState} from "react";

interface MyFormComponentProps {
    name: string
    label: string
    required?: boolean
    control: Control
}

type FormDataInterface = {
    id: number
    name: string,
    label: string,
    default: string | number | boolean
    subForms: Array<FormDataInterface> | null,
    Component: ({name, label, required, control}: MyFormComponentProps) => JSX.Element
}

const formData: Array<FormDataInterface> = [
    {
        id: 0,
        name: "test",
        label: "test",
        default: "",
        subForms: null,
        Component: MyTextInput
    },
    {
        id: 1,
        name: "test1",
        label: "test1",
        default: false,
        subForms: [
            {
                id: 4,
                name: "test4",
                label: "test4",
                default: "",
                subForms: null,
                Component: MyTextInput
            },
            {
                id: 5,
                name: "test5",
                label: "test5",
                default: "",
                subForms: null,
                Component: MyTextInput
            },
        ],
        Component: MyCheckBox
    },
    {
        id: 2,
        name: "test2",
        label: "test2",
        default: false,
        subForms: [
            {
                id: 6,
                name: "test6",
                label: "test6",
                default: "",
                subForms: null,
                Component: MyTextInput
            },
        ],
        Component: MyCheckBox
    },
    {
        id: 3,
        name: "test3",
        label: "test3",
        default: false,
        subForms: null,
        Component: MyCheckBox
    },
]

interface FormSectionProps {
    questions: Array<FormDataInterface>
    sectionName: string
    formStateSetter: Dispatch<any>
}

function FormSection({questions, sectionName, formStateSetter}: FormSectionProps) {
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

export default function FormContainer() {
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [formState, setFormState] = useState<any>({});

    useEffect(() => {
        embla?.scrollNext()
    }, [formState]);


    return (
        <Stack>
            <Carousel
                align="center"
                maw="100%"
                mih="100%"
                getEmblaApi={setEmbla}
                draggable={false}
                withControls={true}
                styles={{
                    control: {
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: "default"
                        }
                    }
                }}>
                <FormSection sectionName="firstPart" questions={formData.slice(0, 2)} formStateSetter={setFormState}/>
                {
                    formState?.firstPart?.test1 &&
                    <FormSection sectionName="secondPart" questions={formData.slice(2, 4)}
                                 formStateSetter={setFormState}/>
                }
            </Carousel>
            <pre>
                {/*{JSON.stringify(withSubForms, null, 2)}*/}
                {JSON.stringify(formState, null, 2)}
            </pre>
        </Stack>
    )
}
