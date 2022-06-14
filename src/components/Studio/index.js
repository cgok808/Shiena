import React, { useState, useEffect } from "react";
import SubHeading from "../SubHeading";
import { StudioSection } from "./StudioElements";
import { AccordionContainer, AccordionContent } from "./StudioElements";

const Accordion = ({ items, multiple }) => {
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);

  let p = [...items].map(item => {
    return { name: item.name, active: false };
  });

  useEffect(() => {
    setActiveArr(p); // eslint-disable-next-line 
  }, []);

  const handleClick = name => {
    setActive(name === active ? null : name);
    if (multiple) {
      let ind = activeArr.findIndex(i => i.name === name);
      let upd = [...activeArr];
      upd[ind].active = !upd[ind].active;
      setActiveArr(upd);
    }
  };

  return (
    <AccordionContainer>
      {items.map(item => {
        let isActive = active === item.name;
        if (multiple)
          isActive = activeArr.some(i => i.name === item.name && i.active);
        return (
          <AccordionContent
            onClick={() => handleClick(item.name)}
            itemName={item.name}
            itemContent={item.content}
            isActive={isActive}
          />
        );
      })}
    </AccordionContainer>
  );
};

const Studio = () => {
  let items = [
    {
      name: "Header 1",
      content: <div>Lorem ipsum deez</div>,
    },
    {
      name: "Header 2",
      content: <div>Lorem ipsum deez</div>,
    },
    {
      name: "Header 3",
      content: <div>Lorem ipsum deez</div>,
    },
  ];

  return (
    <StudioSection id='studio'>
      <SubHeading title='studio' subtitle='THE SPECS' color='#513947' />
        <Accordion multiple items={items} />
    </StudioSection>
  );
};

export default Studio;
