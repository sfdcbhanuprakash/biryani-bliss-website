
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface RecipeFAQProps {
  recipeName: string;
}

const RecipeFAQ = ({ recipeName }: RecipeFAQProps) => {
  const faqs = [
    {
      question: `What type of rice is best for ${recipeName}?`,
      answer: "Long-grain Basmati rice is traditionally used for biryani. The rice should be aged, aromatic, and of high quality for the best results."
    },
    {
      question: "Can I make biryani without a traditional handi?",
      answer: "Yes! While a traditional handi enhances flavor, you can use any heavy-bottomed pot with a tight-fitting lid. Some even use pressure cookers or dutch ovens with good results."
    },
    {
      question: "How do I prevent the rice from becoming mushy?",
      answer: "Par-boil the rice to about 70% doneness, drain well, and layer it with the meat. The rice will continue cooking in the steam during the 'dum' process, resulting in perfect, separate grains."
    },
    {
      question: "Can I prepare biryani in advance?",
      answer: "Yes, you can prepare the components (marinated meat, par-boiled rice) ahead of time, but final assembly and 'dum' cooking should be done just before serving for best results."
    },
    {
      question: "What makes authentic biryani different from pulao?",
      answer: "Biryani is distinguished by its layering technique and the 'dum' cooking method. Pulao is a simpler dish where rice and meat are cooked together. Biryani also typically uses more spices and has a more complex preparation process."
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-playfair font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default RecipeFAQ;
