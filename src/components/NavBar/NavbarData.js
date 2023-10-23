import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
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
    title: 'GridLayout',
    path: '/gridlayout',
    icon: <BsIcons.BsGrid1X2 />,
    cName: 'nav-text'
  }
  // {
  //   title: 'SimpleFlex',
  //   path: '/simpleflex',
  //   icon: <FiIcons.FiLayout />,
  //   cName: 'nav-text'
  // }
];
