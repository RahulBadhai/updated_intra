"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HorizontalNav } from './components/shared/HorizontalNav'
import { MobileNav } from './components/shared/MobileNav'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar';

const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
  signIn();
};
export default function Home() {
  return (
    <div className='shadow-md'>
      <div className='grid grid-cols-1 divide-y'>
        <div className='container'>
          <div className='flex justify-between py-3 items-center'>
            <div>
              <Image src='/logo.jpg' width={50} height={50} alt={'logo'} />
            </div>

            <Menubar className="relative border-none bg-transparent shadow-none max-sm:hidden">
              <MenubarMenu>
                <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent className="absolute right-[-4rem] mt-[-0.5rem] min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
                  <MenubarItem
                    className="flex cursor-pointer items-center gap-4 bg-light-900 px-2.5 py-2 focus:bg-light-800 dark:bg-dark-300 dark:focus:bg-dark-400"
                  >
                    <p
                      className='body-semibold  text-light-500 text-dark100_light900'>
                      Profile
                    </p>
                  </MenubarItem>
                  <MenubarItem
                    className="flex cursor-pointer items-center gap-4 bg-light-900 px-2.5 py-2 focus:bg-light-800 dark:bg-dark-300 dark:focus:bg-dark-400"
                  >
                    <p
                      className='body-semibold  text-light-500 text-dark100_light900'>
                      Log out
                    </p>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div className='max-sm:block sm:hidden'>
              <MobileNav />
            </div>




          </div>
        </div>
        <div>
          <HorizontalNav />
        </div>
      </div>
    </div>
  )
}