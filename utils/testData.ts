import {Checklist, ChecklistItem, FormQuestion} from "./interfaces/DataSchema";
import MyCheckBox from "../components/forms/MyCheckBox";

const formQuestions1: FormQuestion[] = [
    {
        name: "test1",
        label: "Test 1",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
    {
        name: "test2",
        label: "Test 2",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
    {
        name: "test3",
        label: "Test 3",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
]

const formQuestions2: FormQuestion[] = [
    {
        name: "test3",
        label: "Test 3",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
    {
        name: "test4",
        label: "Test 4",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
    {
        name: "test5",
        label: "Test 5",
        default: false,
        subQuestions: null,
        Component: MyCheckBox,
    },
]

const checklistItem1: ChecklistItem = {
    name: "paymentSummaryAndIncomeStatements",
    label: "Payment Summary and Income Statements",
    formQuestions: formQuestions1
}

const checklistItem2: ChecklistItem = {
    name: "lumpSumAndTerminationPaymentSummaries",
    label: "Lump Sum and Termination Payment Summaries",
    formQuestions: formQuestions2
}

export const checklist1: Checklist = {
    name: "income",
    label: "Income",
    checklistItems: [checklistItem1, checklistItem2]
}
