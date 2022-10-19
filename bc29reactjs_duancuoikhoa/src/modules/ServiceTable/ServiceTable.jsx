import React, { useState } from "react";
import { Space, Table, Button, Modal, Input, Rate, } from "antd";
import {
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useAsync } from "../../hooks/useAsync";
import { formatDate } from "../../utils/common";
import { fetchCommentAPI } from "../../services/Comment/Comment";
import { fetchRentAPI } from "../../services/RentWorks/rentWorks";
import AddRentModalForm from "../../pages/ModalForm/ServiceModal/AddRentModalForm";
import AddComentModalForm from "../../pages/ModalForm/ServiceModal/AddComentModalForm";
import EditComentModalForm from "../../pages/ModalForm/ServiceModal/EditComentModalForm";
import EditRentModalForm from "../../pages/ModalForm/ServiceModal/EditRentModalForm";


export default function ServiceTable() {
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
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const showCommentModal = () => {
    setIsCommentModalOpen(true);
  };
  const handleCommentOk = () => {
    setIsCommentModalOpen(false);
  };
  const handleCommentCancel = () => {
    setIsCommentModalOpen(false);
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

  const [EditCommentModalOpen, EditCommentIsModalOpen] = useState(false);
  const editCommentShowModal = () => {
    EditCommentIsModalOpen(true);
  };
  const editCommentHandleOk = () => {
    EditCommentIsModalOpen(false);
  };
  const editCommentHandleCancel = () => {
    EditCommentIsModalOpen(false);
  };
 
  const { state: data = [] } = useAsync({
    service: () => fetchRentAPI(),
  });

  const { state: data2 = [] } = useAsync({
    service: () => fetchCommentAPI(),
  });


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Work Code",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Tenant ID",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
      render: (number) => <a>{number}</a>
    },
    {
      title: "Day Rent",
      dataIndex: "ngayThue",
      key: "ngayThue",
      render: (text) => {
        return <span> {formatDate(text)} </span>;
      },
    },
    // {
    //   title: "Finish",
    //   dataIndex: "hoanThanh",
    //   key: "hoanThanh",
    //   render: (object) => {
    //     return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked>{object}</Switch>
    //   },
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
              title="Edit Rent Work"
              open={EditModalOpen}
              onOk={editHandleOk}
              onCancel={editHandleCancel}
            >
              <EditRentModalForm />
            </Modal>
          </>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick>
            {/* Edit  */}
          </Button>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Job ID",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Comment ID",
      dataIndex: "maNguoiBinhLuan",
      key: "maNguoiBinhLuan",
    },
    {
      title: "Comment Date",
      dataIndex: "ngayBinhLuan",
      key: "ngayBinhLuan",
      render: (text) => {
        return <span> {formatDate(text)} </span>;
      },
    },
    {
      title: "Content",
      dataIndex: "noiDung",
      key: "noiDung",
      render: (text) => {
        return <span>{text}</span>;
      },
    },
    {
      title: "Star",
      dataIndex: "saoBinhLuan",
      key: "saoBinhLuan",
      render: (ele) => <Rate disabled defaultValue={ele} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={editCommentShowModal}
            >
              {/* Edit  */}
            </Button>
            <Modal
              title="Edit Comment"
              open={EditCommentModalOpen}
              onOk={editCommentHandleOk}
              onCancel={editCommentHandleCancel}
            >
              <EditComentModalForm />
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
    <>
    <div breakpoint="sm">
    <div className="text-left mb-3">
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Add Rental Work
      </Button>
      <Modal
        title="Add Rental Work"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddRentModalForm />
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
  <div breakpoint="sm">
    <div className="text-left mb-3">
      <Button type="primary" icon={<PlusOutlined />} onClick={showCommentModal}>
        Add Commnet
      </Button>
      <Modal
        title="Add Comment"
        open={isCommentModalOpen}
        onOk={handleCommentOk}
        onCancel={handleCommentCancel}
      >
        <AddComentModalForm />
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
    <Table  rowKey="id" columns={columns2} dataSource={data2} />
  </div>
  </>
  );
}
