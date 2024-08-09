import { Menu } from "antd";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/admin">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/admin/products">Products</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/admin/add-category">Add Category</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AdminHeader;
