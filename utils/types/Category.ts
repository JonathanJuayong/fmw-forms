import {ChecklistItem} from "./ChecklistItem";

export type Category = {
    name: string,
    label: string,
    checklists: ChecklistItem[]
}
