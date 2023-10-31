import React, { Children } from 'react'
import { Card } from 'antd'
import FirstHeader from './FirstHeader'
import LayoutFooter from './LayoutFooter'
import CombinedHeader from './CombinedHeader'
const BasicLayout = ({ children, titleProp }) => {
  return (
    <div className='wrapper'>
      <FirstHeader />
      {/* <LayoutHeader />
      <LayoutPageHeader /> */}
      <CombinedHeader />
      <div className='layout-content'>
        {titleProp === 'none' ? (
          <Card>{children}</Card>
        ) : (
          <Card title={titleProp}>{children}</Card>
        )}
      </div>
      {/* <UpperFooter /> */}
      <LayoutFooter />
    </div>
  )
}

export default BasicLayout
