import IconPlus from './assets/images/icon-plus.svg';
import IconMinus from './assets/images/icon-minus.svg';

export const AccordionItem = ({ title, content, id, currOpen, onCurrOpen, key }) => {
  let isOpen = id === currOpen;

  function handleOpen () {
    isOpen ? 
      onCurrOpen(null) : 
      onCurrOpen(id);
  }

  return (
    <div className='accordion-item' aria-expanded={isOpen}>
      <h3 className='accordion-title' onClick={handleOpen} id={`accordion-title-${id}`}>
        {title}
        <img src={isOpen ? IconMinus : IconPlus} alt='icon'/>
      </h3>
      <p className={isOpen ? '' : 'collapsed'} aria-labelledby={`accordion-title-${id}`}>{content}</p>
    </div>
  );
};
