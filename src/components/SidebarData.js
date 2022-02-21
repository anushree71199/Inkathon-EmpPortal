import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { CgProfile} from "react-icons/cg";
import { VscTypeHierarchySub } from 'react-icons/vsc'
// VscTypeHierarchySub



export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Attendance',
    path: '/attendance',
    icon: <AiIcons.AiOutlineFileDone />,
    cName: 'nav-text'
  },
  {
    title: 'Work Hierarchy',
    path: '/workHierarchy',
    icon: <VscTypeHierarchySub />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  }
];