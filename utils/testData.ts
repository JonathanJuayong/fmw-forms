import {Checklist, ChecklistItem, FormQuestion} from "./interfaces/DataSchema";
import MyCheckBox from "../components/forms/MyCheckBox";
import MyTextInput from "../components/forms/MyTextInput";

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
  {
    name: "test3a",
    label: "Test 3a",
    default: "",
    subQuestions: null,
    Component: MyTextInput,
  },
]

const formQuestions2: FormQuestion[] = [
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
  {
    name: "test6",
    label: "Test 6",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
]

const formQuestions3: FormQuestion[] = [
  {
    name: "test7",
    label: "Test 7",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
  {
    name: "test8",
    label: "Test 8",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
  {
    name: "test9",
    label: "Test 9",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
]

const formQuestions4: FormQuestion[] = [
  {
    name: "test10",
    label: "Test 10",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
  {
    name: "test11",
    label: "Test 11",
    default: false,
    subQuestions: null,
    Component: MyCheckBox,
  },
  {
    name: "test12",
    label: "Test 12",
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

const checklistItem3: ChecklistItem = {
  name: "rentalProperties",
  label: "Rental Properties",
  formQuestions: formQuestions3
}

const checklistItem4: ChecklistItem = {
  name: "business",
  label: "Business",
  formQuestions: formQuestions4
}

const checklist1: Checklist = {
  name: "income",
  label: "Income",
  checklistItems: [checklistItem1, checklistItem2]
}

const checklist2: Checklist = {
  name: "otherIncome",
  label: "Other Income",
  checklistItems: [checklistItem3, checklistItem4]
}

export const questions = [checklist1, checklist2]
