import { Button, Form, Input, notification, Radio, InputNumber } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { fetchAddImgWorkAPI } from "../../../services/Works/works";

export default function AddUserModalForm() {
  const [imgSrc, setImgSrc] = useState('')
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { TextArea } = Input;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 14,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 14,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const formik = useFormik({
    initialValues: {
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      nguoiTao: 0,
      hinhAnh: {},
      moTa: "",
      moTaNgan: "",
      maChiTietLoaiCongViec: 0,
      saoCongViec: 0,
    },
    onSubmit: async (values) => {
      let formData = new FormData();
      for(const key in values){
        if(key !== 'hinhAnh'){
          formData.append(key, values[key]);
        } else{
          formData.append("File", values.hinhAnh, values.hinhAnh.name)
        }
      }
      try {
        await fetchAddImgWorkAPI(formData);
          notification.success({
            message:
              "Add Work Successfully, please F5 again to update the information !!!",
          });
      } catch (error) {
        notification.error({
          message: "Add Work Unsuccess !!!",
        });
      }
    },
  });

  const handleChangeField = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    }
  };
  
  const handleChangeFile= (event)=>{
    let file = event.target.files[0];
    if(
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === " image/png"
      ){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          setImgSrc(event.target.result);
        }
      }
      formik.setFieldValue('hinhAnh', file)
  }

  return (
    <Form
      {...formItemLayout}
      // layout="horizontal"
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Work"
        name="tenCongViec"
        onChange={formik.handleChange}
        validateTrigger={["onBlur"]}
        rules={[
          {
            required: true,
            message: " Work cannot be left blank",
          },
          {
            pattern:
              "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            message: "Wrong work format",
          },
        ]}
      >
        <Input placeholder="Work" />
      </Form.Item>
      <Form.Item label="Assess">
        <InputNumber onChange={handleChangeField('danhGia')} min={0} max={100} />
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber onChange={handleChangeField('giaTien')} min={0} />
      </Form.Item>
      <Form.Item label="Creator">
        <InputNumber onChange={handleChangeField('nguoiTao')} min={0} max={1} />
      </Form.Item>
      <Form.Item label="Job Code">
        <InputNumber onChange={handleChangeField('maChiTietLoaiCongViec')} min={0} />
      </Form.Item>
      <Form.Item label="Image">
        <input
          type="file"
          name="hinhAnh"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg, image/jpg, image/gif"
        />
        <img 
        src={imgSrc}
        alt="..."
        />
      </Form.Item>
      <Form.Item 
        label="Description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Short Description">
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item label="Start">
        <InputNumber min={0} max={5} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Work
        </Button>
      </Form.Item>
    </Form>
  );
}

// onChange={handleChangField("danhGia")} min={1} max={10}
