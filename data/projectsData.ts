import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'main',
    title: 'GitBook',
    description: 'Моя личная база знаний',
    imgSrc: '/static/images/projects/gitbook_bashell.png',
    url: 'https://gitbook.bashell.ru',
    builtWith: ['GitBook', 'GitHub', 'Markdown'],
  },
  {
    type: 'self',
    title: 'Персональный вебсайт',
    imgSrc: '/static/images/projects/bashell-blog.png',
    repo: 'bashell.ru',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
];

export default projectsData;
