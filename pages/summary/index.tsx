import useMyFormContext from "../../components/context/useMyFormContext";

export default function Summary() {
    const [formContext, _] = useMyFormContext()
    return (
        <>
            <h1>
                Summary
            </h1>
            <pre>
                {JSON.stringify(formContext, null, 2)}
            </pre>
        </>
    )
}
