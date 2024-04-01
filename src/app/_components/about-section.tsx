import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/ui/social-icons';


{/*Funcoes Para Redes Sociais*/}
function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}


export default function About(){
  return(
    <section id="about" className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
          <div className="lg:pl-20 flex justify-center">
            <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src='/avatarPerfil2.png'
              alt='Baltazar'
              width={800}
              height={800}
              quality='95'
              priority={true}
              className='aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 text-center md:text-start">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl"><span className='text-primary'>@Baltazar</span></h1>
            <p className="mt-6 text-base text-muted-foreground">Sou um entusiasta do <span className="text-primary">Desenvolvimento Web</span>, pronto para mergulhar de cabeça em novos desafios e oportunidades. Com um sólido entendimento dos conceitos de programação e uma paixão pela criação de experiências digitais envolventes, familiarizado com tecnologias como <span className="text-primary">HTML, CSS, JavaScript, NextJS, React, React Native, Tailwind</span>.
            </p>
            <div className='mt-6 flex justify-center md:justify-start gap-6'>
            
            <SocialLink
              href="https://github.com/RBaltazarS" target="_blank"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rodolpho-baltazar-47000b38/" target="_blank"
              icon={LinkedInIcon}
            />
            
          </div>
          </div>
        </div>
      </section>
  )
}