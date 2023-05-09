import {useContext} from "react";
import {Context} from "./FormContext";

export default function useMyFormContext() {
    const {formContext, setFormContext} = useContext(Context);
    return [formContext, setFormContext]
}
