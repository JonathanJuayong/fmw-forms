import {Control, useForm} from "react-hook-form";
import MyTextInput from "./forms/MyTextInput";
import MyCheckBox from "./forms/MyCheckBox";
import {Button, Stack, Text} from "@mantine/core";
import {Carousel, Embla} from "@mantine/carousel";
import {Dispatch, useEffect, useState} from "react";
import {Category} from "../utils/types/Category";
import ChecklistSection from "./ChecklistSection";
import {MyFormData} from "../utils/types/FormData";

const categories: Category[] = [
    {
        name: "income",
        label: "Income",
        checklists: [
            {
                id: 1,
                // @ts-ignore
                label: "Payment Summary and Income Statements",
                name: "paymentSummaryAndIncomeStatements"
            },
            {
                id: 2,
                // @ts-ignore
                label: "Lump Sum and Termination Payment Summaries",
                name: "lumpSumAndTerminationPaymentSummaries"
            },
            {
                id: 3,
                // @ts-ignore
                label: "Interest income from banks and building societies",
                name: "interestIncomeFromBanksAndBuildingSocieties"
            }
        ]
    },
    {
        name: "otherIncome",
        label: "Other Income",
        checklists: [
            {
                id: 4,
                // @ts-ignore
                label: "Rental Properties",
                name: "rentalProperties"
            },
            {
                id: 5,
                // @ts-ignore
                label: "Business",
                name: "business"
            },
            {
                id: 6,
                // @ts-ignore
                label: "Foreign Income",
                name: "foreignIncome"
            }
        ]
    }
]




const formData: Array<MyFormData> = [
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
                withControls={false}
                styles={{
                    control: {
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: "default"
                        }
                    }
                }}>
                <ChecklistSection formStateSetter={setFormState} categories={categories}/>
                {/*<FormSection sectionName="firstPart" questions={formData.slice(0, 2)} formStateSetter={setFormState}/>*/}
                {/*{*/}
                {/*    formState?.firstPart?.test1 &&*/}
                {/*    <FormSection sectionName="secondPart" questions={formData.slice(2, 4)}*/}
                {/*                 formStateSetter={setFormState}/>*/}
                {/*}*/}
            </Carousel>
            {/*<Button ml="2.5em" mr="2.5em" onClick={() => embla?.scrollPrev()}>Prev</Button>*/}
            <pre>
                {/*{JSON.stringify(withSubForms, null, 2)}*/}
                {JSON.stringify(formState, null, 2)}
            </pre>
        </Stack>
    )
}
