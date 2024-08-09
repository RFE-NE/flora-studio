import { useAddProductsMutation } from "../../../api/apiSlice.js";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const AddProduct = () => {
  const [form] = Form.useForm();
  const [addCategory, { isLoading }] = useAddProductsMutation();

  const handleAdd = async (values) => {
    try {
      const response = await addCategory(values).unwrap();
      console.log("Response:", response);
      form.resetFields();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-container">
      <Title level={2}>Add New Category</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAdd}
        className="add-form"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "Please enter the image URL" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {isLoading ? "Adding..." : "Add"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
