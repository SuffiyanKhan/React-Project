import { Button, Dropdown, message, Space } from 'antd';

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: 'Delete',
        key: '1',
        icon: <i className="fa-solid fa-trash"></i>,
    },
    {
        label: 'Edit',
        key: '2',
        icon: <i className="fa-regular fa-pen-to-square"></i>,
    }
];
const menuProps = {
    items,
    onClick: handleMenuClick,
};
const DashboardProductStatusButton = () => (
    <Space wrap>
        <Dropdown menu={menuProps}>
            <Button className='border-none'>
                <Space>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </Space>
            </Button>
        </Dropdown>
    </Space>
);
export default DashboardProductStatusButton;