import React, { ReactNode, memo } from 'react'
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
      <MemoizedAppHeader />
      <Content>{children}</Content>
      <MemoizedFooter />
    </Layout>
  )
}

const MemoizedAppHeader = memo(AppHeader);
const MemoizedFooter = memo(Footer);

export default MainLayout