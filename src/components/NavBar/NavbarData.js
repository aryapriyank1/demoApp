import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'DragDrop',
    path: '/dragdrop',
    icon: <RiIcons.RiDragDropLine />,
    cName: 'nav-text'
  },
  {
    title: 'Resize',
    path: '/resize',
    icon: <GiIcons.GiResize />,
    cName: 'nav-text'
  },
  {
    title: 'Playground',
    path: '/playground',
    icon: <GiIcons.GiResize />,
    cName: 'nav-text'
  },
  {
    title: 'Forms',
    path: '/forms',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
