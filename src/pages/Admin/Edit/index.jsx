import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProductsByIdQuery,
  useEditProductsMutation,
} from "../../../api/apiSlice.js";
import { Form, Input, Button, Typography, Spin } from "antd";

const { Title } = Typography;

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useGetProductsByIdQuery(id);
  const [editProduct, { isSuccess, isLoading: isEditing }] =
    useEditProductsMutation();

  const [form] = Form.useForm();

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        title: product.title,
        image: product.image,
        price: product.price,
      });
    }
  }, [product, form]);

  useEffect(() => {
    if (isSuccess) {
      navigate(`/admin`);
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async (values) => {
    await editProduct({ id, ...values });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="edit-container">
      <Title level={2}>Edit Product</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="edit-form"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "Please enter the image URL" }]}
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

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isEditing}>
            {isEditing ? "Saving..." : "Save Changes"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
