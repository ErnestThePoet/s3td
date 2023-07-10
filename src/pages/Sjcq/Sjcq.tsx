import React, { useState, useRef } from "react";
import styles from "./Sjcq.module.scss";
import { Button, Layout, Menu, Space, Input } from "antd";
import type { MenuProps } from "antd";
import { ConfigProvider } from "antd";

const { Header, Content, Sider } = Layout;

const navItems: MenuProps["items"] = [
    "数据输入",
    "类别选择",
    "信息提取",
    "知识汇总"
].map((x, i) => ({
    key: i.toString(),
    label: x
}));

type NavItemKey = "0" | "1" | "2" | "3";

const DataInput: React.FC = () => {
    const inCsv = useRef<HTMLInputElement>(null);

    return (
        <>
            <Space direction="vertical">
                <Space>
                    <Input style={{width:"500px"}} value="1.txt" />

                    <Button type="primary">浏览</Button>
                    <Button type="primary">确认</Button>
                </Space>
            </Space>

            <input
                ref={inCsv}
                style={{ display: "none" }}
                type="file"
                accept=".txt|.pdf"
                multiple
            />
        </>
    );
};

const Sjcq: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<NavItemKey>("0");

    const getFragmentByKey = (key: NavItemKey) => {
        switch (key) {
            case "0":
                return <DataInput />;
            case "1":

            case "2":

            case "3":
                return <></>;
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#55adff"
                }
            }}>
            <Layout className={styles.layoutWrapper}>
                <Header className={styles.header}>
                    <div className={styles.divHeaderText}>
                        IE：多源数据信息抽取系统
                    </div>
                </Header>
                <Layout>
                    <Sider width={300}>
                        <Menu
                            className={styles.menuNav}
                            mode="inline"
                            selectedKeys={[selectedKey]}
                            onClick={e => setSelectedKey(e.key as NavItemKey)}
                            items={navItems}
                        />
                    </Sider>
                    <Layout>
                        <Content className={styles.contentContent}>
                            {getFragmentByKey(selectedKey)}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Sjcq;
