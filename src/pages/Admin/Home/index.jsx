import {
  useDeleteCategoryMutation,
  useGetProductsQuery,
} from "../../../api/apiSlice.js";
import { Link } from "react-router-dom";
import { Table, Button, Image, Space, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const AdminHome = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      message.success("Category deleted successfully");
    } catch (error) {
      message.error("Failed to delete category");
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <Image width={100} src={record.image} alt={record.title} />
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
          <Link to={`/admin/edit/${record.id}`}>
            <Button type="primary" icon={<EditOutlined />} />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey={(record) => record.id}
      pagination={false}
    />
  );
};

export default AdminHome;
