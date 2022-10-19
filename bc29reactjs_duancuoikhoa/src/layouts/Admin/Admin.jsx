import React, {Children, useState} from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FileDoneOutlined,
  FileOutlined,
  PartitionOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import '../adminSCSS/admin.scss'

const { Header, Sider, Content, Footer } = Layout;

export default function Admin() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout breakpoint="sm" style={{ minHeight: "100vh" }}>
      <Sider  trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'Quản Lý Nguời Dùng',
              icon: <UserOutlined />,
              onClick: ()=>{navigate('/admin/QuanLyNguoiDung')}
            },
            {
              key: '2',
              label: 'Quản Lý Công Việc',
              icon: <FileOutlined />,
              onClick: ()=>{navigate('/admin/QuanLyCongViec')}
            },
            {
              key: '3',
              label: 'Quản Lý Loại Công Việc',
              icon: <PartitionOutlined />,
              onClick: ()=>{navigate('/admin/QuanLyLoaiCongViec')},
            },
            {
              key: '4',
              label: 'Quản Lý Dịch Vụ',
              icon: <FileDoneOutlined />,
              onClick: ()=>{navigate('/admin/QuanLyDichVu')}
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

