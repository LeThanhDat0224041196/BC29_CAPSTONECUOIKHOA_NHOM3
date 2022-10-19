import React, { useState } from "react";
import { Space, Table, Button, Modal, Input } from "antd";
import AddUserModalForm from "../../pages/ModalForm/UserModal/AddUserModalForm";
import EditUserModalForm from "../../pages/ModalForm/UserModal/EditUserModalForm";
import {
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useAsync } from "../../hooks/useAsync";
import { fetchUserAPI } from "../../services/User/user";
import { formatDate } from "../../utils/common";
import { useNavigate } from "react-router-dom";

export default function UserTable() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [EditModalOpen, EditIsModalOpen] = useState(false);
  const editShowModal = () => {
    EditIsModalOpen(true);
  };
  const editHandleOk = () => {
    EditIsModalOpen(false);
  };
  const editHandleCancel = () => {
    EditIsModalOpen(false);
  };

  const { state: data = [] } = useAsync({
    service: () => fetchUserAPI(),
  });
  // console.log(data);
  // console.log({fetchUserAPI});

  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   key: "id",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Brithday",
      dataIndex: "brithday",
      key: "bỉthday",
      render: (text) => {
        return <span> {formatDate(text)} </span>;
      },
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Certification",
      dataIndex: "certification",
      key: "certification",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    // {
    //   title: "Booking Job",
    //   dataIndex: "bookingJob",
    //   key: "bookingJob",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={editShowModal}
            >
              {/* Edit  */}
            </Button>
            <Modal
              title="Chỉnh sửa thông tin người dùng"
              open={EditModalOpen}
              onOk={editHandleOk}
              onCancel={editHandleCancel}
            >
              <EditUserModalForm/>
            </Modal>
          </>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick>
            {/* Edit  */}
          </Button>
        </Space>
      ),
    },
  ];

  return (
      <div breakpoint="sm">
        <div className="text-left mb-3">
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Thêm Quản trị viên
          </Button>
          <Modal
            title="Thêm Quản trị viên"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddUserModalForm />
          </Modal>
        </div>
        <div className="mt-1 mb-1">
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Search
              placeholder="Search text"
              allowClear
              enterButton={
                <SearchOutlined
                  style={{ display: "flex", alignItems: "center" }}
                />
              }
              size="large"
              onSearch={onSearch}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            />
          </Space>
        </div>
        <Table  rowKey="id" columns={columns} dataSource={data} />
      </div>
  );
}
