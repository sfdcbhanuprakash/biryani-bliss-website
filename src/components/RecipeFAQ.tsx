
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

interface RecipeFAQProps {
  recipeName: string;
}

const RecipeFAQ = ({ recipeName }: RecipeFAQProps) => {
  const faqs = [
    {
      question: `What type of rice is best for ${recipeName}?`,
      answer: (
        <>
          Long-grain Basmati rice is traditionally used for biryani. The rice should be aged, aromatic, and of high quality for the best results. Learn more in our <Link to="/blog/2" className="text-biryani-saffron hover:underline">Essential Biryani Spice Guide</Link>.
        </>
      )
    },
    {
      question: "Can I make biryani without a traditional handi?",
      answer: (
        <>
          Yes! While a traditional handi enhances flavor, you can use any heavy-bottomed pot with a tight-fitting lid. Some even use pressure cookers or dutch ovens with good results. Check out our <Link to="/blog/6" className="text-biryani-saffron hover:underline">Modern Biryani Innovations</Link> article for more alternatives.
        </>
      )
    },
    {
      question: "How do I prevent the rice from becoming mushy?",
      answer: (
        <>
          Par-boil the rice to about 70% doneness, drain well, and layer it with the meat. The rice will continue cooking in the steam during the 'dum' process, resulting in perfect, separate grains. Learn more about the technique in our <Link to="/blog/8" className="text-biryani-saffron hover:underline">Science Behind Layering in Biryani</Link> guide.
        </>
      )
    },
    {
      question: "Can I prepare biryani in advance?",
      answer: (
        <>
          Yes, you can prepare the components (marinated meat, par-boiled rice) ahead of time, but final assembly and 'dum' cooking should be done just before serving for best results. Get more tips in our <Link to="/blog/3" className="text-biryani-saffron hover:underline">Guide to Biryani for Special Occasions</Link>.
        </>
      )
    },
    {
      question: "What makes authentic biryani different from pulao?",
      answer: (
        <>
          Biryani is distinguished by its layering technique and the 'dum' cooking method. Pulao is a simpler dish where rice and meat are cooked together. Biryani also typically uses more spices and has a more complex preparation process. Read more about the differences in our <Link to="/blog/7" className="text-biryani-saffron hover:underline">Regional Biryani Guide</Link>.
        </>
      )
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
              "text": typeof faq.answer === 'string' ? faq.answer : 'Visit our website for the detailed answer.'
            }
          }))
        })}
      </script>
    </section>
  );
};

export default RecipeFAQ;
