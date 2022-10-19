import {
    Button,
    Form,
    Input,
    notification,
    Radio,
    InputNumber
  } from "antd";
  import { useFormik } from "formik";
  import React, { useState } from "react";
  import { fetchWorkTypeAPI } from "../../../services/WorksType/workType";
  export default function EditTypeJob() {
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
          tenLoaiCongViec: "",
      },
      onSubmit: async (values) => {
        try {
          const result = await fetchWorkTypeAPI(values);
          console.log({ result });
          if (result.data.content) {
            notification.success({
              message:
                "Add User Successfully, please F5 again to update the information !!!",
            });
          }
        } catch (error) {
          notification.error({
            message: "Add User Unsuccess !!!",
          });
        }
      },
    });
  
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
          label="Type Job"
          name="tenLoaiCongViec"
          tooltip="Type Job do not include numbers !!!"
          onChange={formik.handleChange}
          validateTrigger={["onBlur"]}
          rules={[
            {
              required: true,
              message: " Type Job cannot be left blank",
            },
            {
              pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
              message: "Wrong Type Job format",
            },
          ]}
        >
          <Input placeholder="Type Job" />
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
      <Form.Item label="Work Code">
        <InputNumber />
      </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    );
  }
  