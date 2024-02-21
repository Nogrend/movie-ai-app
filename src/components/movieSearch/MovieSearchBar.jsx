import {Form, Input, Button, Space} from 'antd';
import {useNavigate} from "@tanstack/react-router";


const MovieSearchBar = () => {
    const navigate = useNavigate();

    const handleQuery = (values) => {
        navigate({to: `/search?query=${values.search}`})
    };

    return (
        <Form onFinish={handleQuery}>
            <Space.Compact>
                <Form.Item name="search">
                    <Input placeholder="Looking for a film?"/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Space.Compact>
        </Form>
    );
};

export default MovieSearchBar;