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
    <div className='accordion-item'>
      <div className='accordion-title' onClick={handleOpen}>
        <h3>{title}</h3>
        <img src={isOpen ? IconMinus : IconPlus} alt='icon'/>
      </div>
      <p className={isOpen ? '' : 'collapsed'}>{content}</p>
    </div>
  );
};
