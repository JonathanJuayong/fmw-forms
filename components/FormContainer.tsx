import MyTextInput from "./forms/MyTextInput";
import MyCheckBox from "./forms/MyCheckBox";
import {Button, Stack} from "@mantine/core";
import {Carousel, Embla} from "@mantine/carousel";
import {useEffect, useState} from "react";
import {Category} from "../utils/types/Category";
import ChecklistSection from "./ChecklistSection";
import {FormQuestion} from "../utils/types/FormQuestion";
import {FormQuestionGroup} from "../utils/types/FormQuestionGroup";
import {FormQuestionCategory} from "../utils/types/FormQuestionCategory";
import FormSection from "./FormSection";

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

const formQuestions1: Array<FormQuestion> = [
    {
        id: 0,
        name: "test",
        label: "test",
        default: "",
        subQuestions: null,
        Component: MyTextInput
    },
    {
        id: 1,
        name: "test1",
        label: "test1",
        default: false,
        subQuestions: [
            {
                id: 4,
                name: "test4",
                label: "test4",
                default: "",
                subQuestions: null,
                Component: MyTextInput
            },
            {
                id: 5,
                name: "test5",
                label: "test5",
                default: "",
                subQuestions: null,
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
        subQuestions: [
            {
                id: 6,
                name: "test6",
                label: "test6",
                default: "",
                subQuestions: null,
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
        subQuestions: null,
        Component: MyCheckBox
    },
]

const formQuestions2: FormQuestion[] = [
    {
        id: 23,
        name: "test23",
        label: "test23",
        default: false,
        subQuestions: null,
        Component: MyCheckBox
    },
    {
        id: 123,
        name: "test123",
        label: "test123",
        default: false,
        subQuestions: null,
        Component: MyCheckBox
    },
    {
        id: 234,
        name: "test234",
        label: "test234",
        default: false,
        subQuestions: null,
        Component: MyCheckBox
    },
]

const category1: FormQuestionGroup = {
    checklistName: "paymentSummaryAndIncomeStatements",
    questions: formQuestions1
}

const category2: FormQuestionGroup = {
    checklistName: "lumpSumAndTerminationPaymentSummaries",
    questions: formQuestions2
}

const formQuestionCategory: FormQuestionCategory = {
    categoryName: "income",
    formQuestionGroups: [category1, category2]
}

interface FormContainerProps {
    formQuestionCategory: FormQuestionCategory
}

export default function FormContainer() {
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [checklists, setChecklists] = useState<any>({});
    const [formState, setFormState] = useState<any>({});
    const {formQuestionGroups, categoryName} = formQuestionCategory

    const triggerNextSlide = () => embla?.scrollNext()

    useEffect(() => {
        if (embla?.selectedScrollSnap() === 0) return
        embla?.scrollNext()
    }, [embla, formState]);

    return (
        <Stack>
            <Carousel
                align="center"
                maw="100%"
                mih="100%"
                getEmblaApi={setEmbla}
                draggable={false}
                withControls={false}
            >
                <ChecklistSection
                    formStateSetter={setChecklists}
                    categories={categories}
                    onNextButtonClick={triggerNextSlide}
                />

                {formQuestionGroups.map(({questions, checklistName}) => (
                    checklists?.categories?.[categoryName]?.[checklistName] === true && (
                        <FormSection
                            key={checklistName}
                            questions={questions}
                            sectionName={checklistName}
                            formStateSetter={setFormState}
                        />
                    )
                ))}
            </Carousel>
            <Button ml="2.5em" mr="2.5em" onClick={() => embla?.scrollPrev()}>Prev</Button>
            {/*<pre>*/}
            {/*    {JSON.stringify({formState}, null, 2)}*/}
            {/*    <hr/>*/}
            {/*    {JSON.stringify({checklists}, null, 2)}*/}
            {/*</pre>*/}
        </Stack>
    )
}
