import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

function LeftBar() {
  return (
    <div className='h-screen sticky top-0 flex-col pt-2 pb-8'>
      {/* Logo Menu and Button */}
      <div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
        {/** logo */}
        <Link href="/" className='p-2 rounded-full hover:bg-[#181818]'>
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} className='bg:black' /> 
        </Link>
        {/** Menu List */}
        <div className='flex flex-col gap-4'>
          {menuList.map(item => (
            <Link className='p-2 rounded-full hover:[#181818] flex items-center gap-4' key={item.id} href={item.link}>
              <Image src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24} />
              <span className='hidden xxl:inline'>{item.name}</span>
            </Link>
          ))}
        </div>
        {/** Button */}
        <Link href="/" className='bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center xxl:hidden'>
          <Image src="icons/post.svg" alt="tweet" width={24} height={24} />
        </Link>
        <Link href="/" className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20 '>
         Post
        </Link>
      </div>
        {/* User Info*/}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 pt-10'>
          <div className='w-10 h-10 relative rounded-full overflow-hidden'>
            <Image src="/general/avatar.png" alt="profile" fill />
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Philippe</span>
            <span className='text-sm text-textGray'>Foka</span>
          </div>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold mt-2'>....</div>
      </div>
    </div>
  )
}

export default LeftBar