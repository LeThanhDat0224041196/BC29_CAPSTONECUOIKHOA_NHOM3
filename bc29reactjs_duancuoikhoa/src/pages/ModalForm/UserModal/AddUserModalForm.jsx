import {
  Button,
  DatePicker,
  Form,
  Input,
  notification,
  Radio,
  Select,
} from "antd";
import { useFormik } from "formik";
import moment from "moment/moment";
import React, { useState } from "react";
import { fetchAddUserAPI } from "../../../services/User/user";

export default function AddUserModalForm() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+88</Option>
        <Option value="88">+88</Option>
      </Select>
    </Form.Item>
  );

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
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [""],
      certification: [""],
    },
    onSubmit: async (values) => {
      try {
        const result = await fetchAddUserAPI(values);
        console.log({ result });
        if (result.data.content) {
          notification.success({
            message: "Add User Successfully, please F5 again to update the information !!!",
          });
        }
      } catch (error) {
        notification.error({
          message: "Add User Unsuccess !!!",
        });
      }
    },
  });

  const handleChangeFelid = (value) => {
    console.log(value);
    formik.setFieldValue("role", value);
  };

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
      <Form.Item
        label="Name"
        name="name"
        tooltip="Accented names do not include numbers !!!"
        onChange={formik.handleChange}
        validateTrigger={["onBlur"]}
        rules={[
          {
            required: true,
            message: " Name cannot be left blank",
          },
          {
            pattern:
              "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            message: "Wrong name format",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        tooltip="Ex: name123@gmail.com"
        onChange={formik.handleChange}
        validateTrigger={["onBlur"]}
        rules={[
          { required: true, message: "Email cannot be left blank" },
          { type: "email", message: "Wrong email format" },
        ]}
      >
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        tooltip="Password must be at least eight characters, with at least one uppercase letter, one lowercase letter, and a number"
        validateTrigger={["onBlur"]}
        onChange={formik.handleChange}
        rules={[
          { required: true, message: "Password cannot be left blank" },
          {
            pattern: "^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$",
            message: "Password is not correct",
          },
        ]}
      >
        <Input placeholder="Phone number" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        onChange={formik.handleChange}
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          {
            required: true,
            pattern:
              "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$",
            message: "Phone number must include 10 numbers",
          },
        ]}
      >
        <Input
          placeholder="Phone number"
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item label="Birthday">
        <DatePicker validateTrigger={["onBlur"]} onChange={handleChangeDate} format="DD/MM/YYYY" />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        validateTrigger={["onBlur"]}
        rules={[
          {
            required: true,
            message: "Role is not empty",
          },
        ]}
      >
        <Select placeholder="Select user Role" onChange={handleChangeFelid}>
          <Option value="ADMIN">ADMIN</Option>
          <Option value="USER">USER</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select Gender !",
          },
        ]}
      >
        <Select placeholder="Select your Gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Skill"
        name="skill"
        onChange={formik.handleChange}
        placeholder="Select your Skill"
        validateTrigger={["onBlur"]}
        rules={[{ required: true, message: "Skill cannot be left blank" }]}
      >
        <Input placeholder="Skill" />
      </Form.Item>
      <Form.Item
        label="Certification"
        name="certification"
        onChange={formik.handleChange}
        validateTrigger={["onBlur"]}
        rules={[
          { required: true, message: "Certification cannot be left blank" },
        ]}
      >
        <Input placeholder="Certification" />
      </Form.Item>
      <Form.Item
        label="Booking Job"
        name="bookingJob"
        onChange={formik.handleChange}
      >
        <Input placeholder="Booking Job" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
}
