import React from 'react'

const Header = (props) => {
    const navMenu = [
      {
        pageName: "News",
        pageUrl: "/",
      },
      {
        pageName: "About",
        pageUrl: "/about",
      },
      {
        pageName: "Contact",
        pageUrl: "/contact",
      },
    ];
  return (
    <div className="w-full bg-white text-black fixed top-0">
      <div className="w-full h-[64px] flex flex-row justify-between items-center px-10">
        <div className="overflow-visible">
          <a href="/" className='flex flex-row items-center justify-start'>
            <img width="84" src={props.logo} alt="logo" />
            <h1 className='font-black text-2xl -ml-[24px]'>Live News</h1>
          </a>
        </div>
        <div>
          {/* <ul className='flex flex-row gap-2 font-black uppercase'>
            {navMenu.map((navLink) => (
              <li className="list-none inline-block">
                <a href={navLink.pageUrl}>{navLink.pageName}</a>
              </li>
            ))}
          </ul> */}
          <h5>Need an App like this ? Call me +1 978 888 7688</h5>
        </div>
      </div>
    </div>
  );
}

export default Header