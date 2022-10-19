import {
  Button,
  Form,
  Input,
  notification,
  Radio,
  InputNumber,
  DatePicker,
} from "antd";
import { useFormik } from "formik";
import moment from "moment/moment";
import React, { useState } from "react";
import { fetchAddUserAPI } from "../../../services/User/user";

export default function EditComentModalForm() {
  const [form] = Form.useForm();
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
      maCongViec: 0,
      maNguoiBinhLuan: 0,
      ngayBinhLuan: "",
      noiDung: "",
      saoBinhLuan: 0,
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

  const handleChangeDate = (event) => {
    let birthday = moment(event).format("DD/MM/YYYY");
    formik.setFieldValue("birthday", birthday);
  };

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
      <Form.Item label="Job ID">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Comment ID">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Comment Date">
        <DatePicker
          validateTrigger={["onBlur"]}
          onChange={handleChangeDate}
          format="DD/MM/YYYY"
        />
      </Form.Item>
      <Form.Item label="Content">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Star">
        <InputNumber />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  );
}
