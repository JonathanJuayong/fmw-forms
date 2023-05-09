import {Button, Stack} from "@mantine/core";
import {Carousel, Embla} from "@mantine/carousel";
import {useEffect, useState} from "react";
import ChecklistSection from "./ChecklistSection";
import {Checklist} from "../utils/interfaces/DataSchema";
import FormSection from "./FormSection";
import FormSummarySection from "./FormSummarySection";

interface FormContainerProps {
    checklists: Checklist[]
}

export default function FormContainer({checklists}: FormContainerProps) {
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [checklistState, setChecklistState] = useState<any>({});
    const [formState, setFormState] = useState<any>({});

    const triggerNextSlide = () => embla?.scrollNext()

    const isSummaryShown = Object.keys(formState).length > 0

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
                withKeyboardEvents={false}
            >
                <Carousel.Slide>
                    <Stack>
                        <ChecklistSection
                            checklistStateSetter={setChecklistState}
                            checklists={checklists}
                            onNextButtonClick={triggerNextSlide}
                        />
                        <Button ml="2.5em" mr="2.5em" onClick={() => embla?.scrollPrev()}>Prev</Button>
                    </Stack>
                </Carousel.Slide>

                {checklists.map(checklists => (
                    checklists.checklistItems.map(checklistItem => (
                        checklistState?.checklists?.[checklists.name]?.[checklistItem.name] === true && (
                            <Carousel.Slide key={checklistItem.name}>
                                <Stack>
                                    <FormSection
                                        questions={checklistItem.formQuestions}
                                        sectionName={checklistItem.label}
                                        formStateSetter={setFormState}
                                    />
                                    <Button ml="2.5em" mr="2.5em" onClick={() => embla?.scrollPrev()}>Prev</Button>
                                </Stack>
                            </Carousel.Slide>
                        )
                    ))
                ))}
                {isSummaryShown && (
                    <Carousel.Slide>
                        <Stack>
                            <FormSummarySection formState={formState}/>
                            <Button ml="2.5em" mr="2.5em" onClick={() => embla?.scrollPrev()}>Prev</Button>
                        </Stack>
                    </Carousel.Slide>
                )}
            </Carousel>
        </Stack>
    )
}
