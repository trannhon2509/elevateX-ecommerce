import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import AppHeader from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const { Content } = Layout

interface MainLayoutProps {
  children?: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <AppHeader />
      <Content>{children}</Content>
      <Footer/>
    </Layout>
  )
}

export default MainLayout