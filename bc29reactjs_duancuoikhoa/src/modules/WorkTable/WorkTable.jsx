import React, { useState } from "react";
import { Space, Table, Button, Modal, Input, Rate } from "antd";
import {
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useAsync } from "../../hooks/useAsync";
import AddWorkModalForm from "../../pages/ModalForm/WorkModal/AddWorkModalForm";
import EditWorkModalForm from "../../pages/ModalForm/WorkModal/EditWorkModalForm";
import { fetchWorkAPI } from "../../services/Works/works";
import { useNavigate } from "react-router-dom";

export default function WorkTable() {
  const navigate = useNavigate();
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
    service: () => fetchWorkAPI(),
  });

  const columns = [
    {
      title: "Work",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Assess",
      dataIndex: "danhGia",
      key: "danhGia",
      render: (text) => <a>{text}</a>
    },
    {
      title: "Price",
      dataIndex: "giaTien",
      key: "giaTien",
      render: (text)=> <a>$ {text}</a>
    },
    {
      title: "Creator",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      render: (text)=> <a>{text}</a>
    },
    {
      title: "Image",
      key: "hinhAnh",
      render: (ele) => {
        return (
          <img
            className="img-fluid"
            src={ele.hinhAnh}
            style={{ height: 150, objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "Description",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Job Code",
      dataIndex: "maChiTietLoaiCongViec",
      key: "maChiTietLoaiCongViec",
    },
    {
      title: "Short Description",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },
    {
      title: "Star",
      dataIndex: "saoCongViec",
      key: "saoCongViec",
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
              onClick={editShowModal}
            >
              {/* Edit  */}
            </Button>
            <Modal
              title="Edit Job information"
              open={EditModalOpen}
              onOk={editHandleOk}
              onCancel={editHandleCancel}
            >
              <EditWorkModalForm />
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
      <div className="xl">
        <div className="text-left mb-3">
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Add Work
          </Button>
          <Modal
            title="Add Work"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <AddWorkModalForm />
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
        <Table rowKey="id" columns={columns} dataSource={data} />
      </div>
    </>
  );
}
