import {Button, Stack} from "@mantine/core";
import {Carousel, Embla} from "@mantine/carousel";
import {useEffect, useState} from "react";
import ChecklistSection from "./sections/ChecklistSection";
import {Checklist} from "../utils/interfaces/DataSchema";
import FormSection from "./sections/FormSection";
import FormSummarySection from "./sections/FormSummarySection";
import CustomerDetailsSection from "./sections/CustomerDetailsSection";

interface FormContainerProps {
  checklists: Checklist[]
}

const isObjectEmpty = (object: any) => Object.keys(object).length === 0

const FORM_SECTION_INDEX_OFFSET = 2
const STATIC_SLIDES = 3

export default function FormContainer({checklists}: FormContainerProps) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [checklistState, setChecklistState] = useState<any>({});
  const [formState, setFormState] = useState<any>({});
  const [customerDetailsState, setCustomerDetailsState] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesArray, setSlidesArray] = useState<HTMLElement[]>([]);

  const triggerNextSlide = () => embla?.scrollNext()

  const isSummaryShown = Object.keys(formState).length > 0

  const updateSlideState = () => {
    if (embla) {
      setCurrentSlide(embla.selectedScrollSnap())
      setSlidesArray(embla.slideNodes())
    }
  }

  useEffect(() => {
    if (!embla) return
    embla.on("select", updateSlideState)
    return () => {
      embla.off("select", updateSlideState)
    }
  }, [embla]);

  useEffect(() => {
    if (embla?.selectedScrollSnap() === 1 || embla?.selectedScrollSnap() === 0) return
    embla?.scrollNext()
  }, [embla, formState]);

  useEffect(() => {
    if (isObjectEmpty(customerDetailsState)) return
    embla?.scrollNext()
  }, [embla, customerDetailsState]);

  const totalSlides = STATIC_SLIDES + checklists.length

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
          <Stack w="95%" ml="auto" mr="auto">
            <CustomerDetailsSection
              customerDetailsStateSetter={setCustomerDetailsState}
              tabbable={currentSlide === 0}
            />
          </Stack>
        </Carousel.Slide>
        <Carousel.Slide>
          <Stack>
            <ChecklistSection
              checklistStateSetter={setChecklistState}
              checklists={checklists}
              onNextButtonClick={triggerNextSlide}
              tabbable={currentSlide === 1}
            />
            <Button
              tabIndex={currentSlide === 1 ? 0 : -1}
              ml="2.5em"
              mr="2.5em"
              onClick={() => embla?.scrollPrev()}
            >
              Prev
            </Button>
          </Stack>
        </Carousel.Slide>

        {checklists.map(checklists => (
          checklists.checklistItems.map((checklistItem, index) => (
            checklistState?.checklists?.[checklists.name]?.[checklistItem.name] === true && (
              <Carousel.Slide key={checklistItem.name}>
                <Stack>
                  <FormSection
                    questions={checklistItem.formQuestions}
                    sectionName={checklistItem.label}
                    formStateSetter={setFormState}
                    tabbable={currentSlide === index + FORM_SECTION_INDEX_OFFSET}
                  />
                  <Button
                    tabIndex={currentSlide === index + FORM_SECTION_INDEX_OFFSET ? 0 : -1}
                    ml="2.5em"
                    mr="2.5em"
                    onClick={() => embla?.scrollPrev()}
                  >
                    Prev
                  </Button>
                </Stack>
              </Carousel.Slide>
            )
          ))
        ))}
        {isSummaryShown && (
          <Carousel.Slide>
            <Stack>
              <FormSummarySection
                formState={formState}
                tabbable={currentSlide === slidesArray.length - 1}
              />
              <Button
                tabIndex={currentSlide === slidesArray.length - 1 ? 0 : -1}
                ml="2.5em"
                mr="2.5em"
                onClick={() => embla?.scrollPrev()}
              >
                Prev
              </Button>
            </Stack>
          </Carousel.Slide>
        )}
      </Carousel>
    </Stack>
  )
}
