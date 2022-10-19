import { Button, Form, Input, notification, Radio, InputNumber } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { fetchAddUserAPI } from "../../../services/User/user";

export default function DetailsJobType() {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
 
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
      hinhAnh: "",
      moTa: "",
      moTaNgan: "",
      maChiTietLoaiCongViec: 0,
      saoCongViec: 0,
    },
    onSubmit: async (values) => {
      try {
        const result = await fetchAddUserAPI(values);
        console.log({ result });
        if (result.data.content) {
          notification.success({
            message:
              "Add Work Successfully, please F5 again to update the information !!!",
          });
        }
      } catch (error) {
        notification.error({
          message: "Add Work Unsuccess !!!",
        });
      }
    },
  });

  // const handleChangeFelid = (value) => {
  //   console.log(value);
  //   formik.setFieldValue("role", value);
  // };

  return (
    <Form
      {...formItemLayout}
      // layout="horizontal"
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      form={form}
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
      <Form.Item label="Job Code">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Image">
        <input
          type="file"
          name="hinhAnh"
          //   onChange={handleChangFile}
          accept="image/png, image/jpeg, image/jpg, image/gif"
        />
        {/* <img
          src={imgSrc}
          style={
            imgSrc
              ? { width: 300, height: 400, paddingTop: 10 }
              : { paddingTop: 10 }
          }
          alt="..."
        /> */}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Work
        </Button>
      </Form.Item>
    </Form>
  );
}

