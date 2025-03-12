import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const ReactAccordion: React.FC<{
  FAQList: FAQProps[];
}> = ({ FAQList }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full AccordionRoot"
    >
      {FAQList.map(({ question, answer, value }: FAQProps) => (
        <AccordionItem
          key={value}
          value={value}
        >
          <AccordionTrigger className="text-left">
            {question}
          </AccordionTrigger>

          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}