import React from 'react'

import { Layout } from 'antd'
import Sidebar from '../Sidebar'

export default function Desktop() {
  return (
    <Layout>
      <Layout>
        <Sidebar />
        <Layout.Content style={{ height: '1000vh', marginLeft: 120 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ratione
          laudantium, blanditiis possimus fugit deleniti! Ad blanditiis tenetur
          eaque voluptates facere id qui porro at aspernatur ipsa sit non fugiat
          accusamus error, hic corrupti. Fuga amet ipsum, corrupti dolor
          laudantium illo sed veniam, rem unde corporis libero vitae in.
          Reprehenderit laudantium maxime magni cumque enim tempora numquam
          autem ullam obcaecati. Officiis, minus necessitatibus eaque hic sit
          tempora, ipsa mollitia tenetur vitae ab dolores rem praesentium ipsam
          suscipit placeat accusamus ratione sed excepturi explicabo dignissimos
          delectus impedit! A at, praesentium voluptate accusamus officiis ad
          pariatur facere sapiente! Incidunt veritatis qui deleniti.{' '}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
