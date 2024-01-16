import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { faqs } from './App';
import IconStar from './assets/images/icon-star.svg'

export const Accordion = () => {
  const [currOpen, setCurrOpen] = useState(1);

  return (
    <div className='accordion'>
      <div className='accordion-container-header'>
        <img src={IconStar} alt="icon-star"/>
        <h1>FAQs</h1>
      </div>
      {faqs.map((el, index) => <AccordionItem title={el.title} content={el.content} id={el.id} currOpen={currOpen} onCurrOpen={setCurrOpen} key={el.id} />)}
    </div>
  );
};
