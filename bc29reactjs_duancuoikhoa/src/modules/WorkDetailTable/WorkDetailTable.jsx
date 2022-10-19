import React, { useState } from "react";
import { Space, Table, Button, Modal, Input, } from "antd";
import {
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useAsync } from "../../hooks/useAsync";
import { fetchWorkTypeAPI } from "../../services/WorksType/workType";
import { fetchWorkDetailAPI } from "../../services/WorksDetail/workDetail";
import DetailsJobType from "../../pages/ModalForm/WorkDetailModal/DetailsJobType";
import TypeJob from "../../pages/ModalForm/WorkDetailModal/TypeJob";
import EditTypeJob from "../../pages/ModalForm/WorkDetailModal/EditTypeJob";

export default function WorkDetailTable() {
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

  const [isDetailJobTypeModalOpen, setIsDetailJobTypeModalOpen] =
    useState(false);
  const showDetailJobTypeModal = () => {
    setIsDetailJobTypeModalOpen(true);
  };
  const handleDetailJobTypeOk = () => {
    setIsDetailJobTypeModalOpen(false);
  };
  const handleDetailJobTypeCancel = () => {
    setIsDetailJobTypeModalOpen(false);
  };

  const [EditDetailJobTypeModalOpen, EditIsDetailJobTypeModalOpen] =
    useState(false);
  const editDetailJobTypeShowModal = () => {
    EditIsDetailJobTypeModalOpen(true);
  };
  const editDetailJobTypeHandleOk = () => {
    EditIsDetailJobTypeModalOpen(false);
  };
  const editDetailJobTypeHandleCancel = () => {
    EditIsDetailJobTypeModalOpen(false);
  };

  const { state: data = [] } = useAsync({
    service: () => fetchWorkTypeAPI(),
  });

  const { state: data2 = [] } = useAsync({
    service: () => fetchWorkDetailAPI(),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Job type Name",
      dataIndex: "tenLoaiCongViec",
      key: "tenLoaiCongViec",
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
              onClick={editDetailJobTypeShowModal}
            >
              {/* Edit  */}
            </Button>
            <Modal
              title="Edit Job Type"
              open={EditDetailJobTypeModalOpen}
              onOk={editDetailJobTypeHandleOk}
              onCancel={editDetailJobTypeHandleCancel}
            >
              <EditTypeJob />
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
      title: "Group Name",
      dataIndex: "tenNhom",
      key: "tenNhom",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      render: (hinhAnh) => {
        return (
          <img
            className="img-fluid"
            src={hinhAnh}
            style={{ height: 150, objectFit: "cover" }}
          />
        );
      },
    },
    {
      title: "Job Type Code",
      dataIndex: "maLoaiCongviec",
      key: "maLoaiCongviec",
    },
    // {
    //   title: "Detailed List of Types",
    //   dataIndex: "dsChiTietLoai",
    //   key: "dsChiTietLoai",
    //   render: (ele) => {
    //     return (
    //       <Popover content={ele.dsChiTietLoai} title="Title">
    //         <Button type="primary">Hover me</Button>
    //       </Popover>
    //     );
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
              title="Edit Details Job Type"
              open={EditModalOpen}
              onOk={editHandleOk}
              onCancel={editHandleCancel}
            >
              <EditTypeJob />
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
            Add Type Job
          </Button>
          <Modal
            title="Add Type Job"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <TypeJob />
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
      <div className="xl">
        <div className="text-left mb-3">
          <Button type="primary" icon={<PlusOutlined />} onClick={showDetailJobTypeModal}>
            Edit Job Type Details
          </Button>
          <Modal
            title="Edit Details Job Type"
            open={isDetailJobTypeModalOpen}
            onOk={ handleDetailJobTypeOk}
            onCancel={handleDetailJobTypeCancel}
          >
            <DetailsJobType />
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
        <Table rowKey="id" columns={columns2} dataSource={data2} />
      </div>
    </>
  );
}
