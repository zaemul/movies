import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default function Navbar () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item>
        <Link to='popular'>
          <Icon type='heart-o' /> 인기있는
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='upcoming'>
          <Icon type='like-o' /> 예정작
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='nowplaying'>
          <Icon type='rocket' /> 상영중
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='toprated'>
          <Icon type='star-o' /> 인기순위
        </Link>
      </Menu.Item>
    </Menu>
  )
}
