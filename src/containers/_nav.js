import React from 'react'
import CIcon from '@coreui/icons-react'


const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'All Request',
    to: '/all-request',
    icon: 'cil-calendar',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users/users',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Recharge Request',
    to: '/recharge-request',
    icon: 'cil-align-left',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vouchers',
    to: '/vouchers',
    icon: 'cil-notes',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['User']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Place Request',
    to: '/new-request',
    icon: 'cil-cursor',
  },

]

export default _nav
