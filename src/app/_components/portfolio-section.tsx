import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';


export default function Portfolio() {
  return (
    <section
      id='portfolio'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          <span className="text-primary">Portfolio</span>
        </h2>
      </div>

      <div className='mx-auto grid justify-center gap-1 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4'>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              src='/avatarPerfil2.png'
              alt='Baltazar'
              width={200}
              height={200}
              quality='95'
              priority={true}
              className='aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              src='/avatarPerfil2.png'
              alt='Baltazar'
              width={200}
              height={200}
              quality='95'
              priority={true}
              className='aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              src='/avatarPerfil2.png'
              alt='Baltazar'
              width={200}
              height={200}
              quality='95'
              priority={true}
              className='aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              src='/avatarPerfil2.png'
              alt='Baltazar'
              width={200}
              height={200}
              quality='95'
              priority={true}
              className='aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover'
            />
          </CardBody>
        </Card>
      </div>
    </section>
  )
}