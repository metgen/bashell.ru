import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          Меня зовут <b className="font-medium">Геннадий</b>.
        </li>
        <li>
          Я живу в <b className="font-medium">Санкт-Петербурге</b>.
        </li>
        <li>В свободное время нравится изучать различные IT технологии</li>
        <li>
          В настоящее время изучаю <b className="font-medium">Linux</b> <Twemoji emoji="penguin" />
        </li>
        <li>
          Люблю играть в видеоигры <Twemoji emoji="video-game" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
