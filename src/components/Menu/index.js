import { Menu as AntMenu } from 'antd';

export default function Menu() {
    function handleClick(e) {
        console.log(e);
    }
    return (
        <AntMenu
        style={{ width: 256 }}
            mode="inline"
            onClick={handleClick}
        >
            <AntMenu.Item key="1">Option 1</AntMenu.Item>
            <AntMenu.Item key="2">Option 1</AntMenu.Item>
            <AntMenu.Item key="3">Option 1</AntMenu.Item>
            <AntMenu.Item key="4">Option 1</AntMenu.Item>
            <AntMenu.Item key="5">Option 1</AntMenu.Item>
            <AntMenu.Item key="6">Option 1</AntMenu.Item>
            <AntMenu.Item key="7">Option 1</AntMenu.Item>
            <AntMenu.Item key="8">Option 1</AntMenu.Item>
            <AntMenu.Item key="9">Option 1</AntMenu.Item>
            <AntMenu.Item key="10">Option 1</AntMenu.Item>
            <AntMenu.Item key="11">Option 1</AntMenu.Item>
            <AntMenu.Item key="12">Option 1</AntMenu.Item>
            <AntMenu.Item key="13">Option 1</AntMenu.Item>
            <AntMenu.Item key="14">Option 1</AntMenu.Item>
      </AntMenu>
    )
}