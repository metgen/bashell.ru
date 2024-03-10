import { ReactNode } from 'react';
import Link from 'next/link';
import type { Authors } from 'contentlayer/generated';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';
// import { FaTelegram, FaGithub, FaInstagram } from 'react-icons/fa';
// import { SlSocialVkontakte } from 'react-icons/sl';
// import { IoMdMail } from 'react-icons/io';
// import { FaXTwitter } from 'react-icons/fa6';
// import { IconContext } from 'react-icons';

import siteMetadata from '@/data/siteMetadata';
import Image from '@/components/Image';
import { PageSEO } from '@/components/SEO';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, discription, company, email, twitter, instagram, github } = content;

  const { title, headerTitle } = siteMetadata;

  const description = 'My professional career, experiences, and skills.';

  return (
    <>
      <PageSEO title={`О блоге - ${headerTitle} - ${title}`} description={description} />

      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Обо мне
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Кратко о себе и цели моего блога
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image src={avatar} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="text-gray-500 dark:text-gray-400">{discription}</div>

            <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <Mail size={24} strokeWidth={1} />
              </Link>
              <Link href={github} target="_blank">
                <Github size={24} strokeWidth={1} />
              </Link>
              <Link href={instagram} target="_blank">
                <Instagram size={24} strokeWidth={1} />
              </Link>
              <Link href={twitter} target="_blank">
                <Twitter size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  );
}
