import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';
import * as TbIcons from 'react-icons/tb';

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
    icon: <TbIcons.TbDragDrop />,
    cName: 'nav-text'
  },
  {
    title: 'FlexLayout',
    path: '/flexlayout',
    icon: <CgIcons.CgDisplayFlex />,
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
