import React from 'react'

import { Layout } from 'antd'
import Sidebar from '../Sidebar'
const { Content, Sider } = Layout

export default function Desktop() {
  return (
    <Layout>
      <Layout>
        <Sider width="20%" theme="light">
          <Sidebar />
        </Sider>
        <Layout>
          <Content style={{ height: '1000vh' }}>Hello</Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
