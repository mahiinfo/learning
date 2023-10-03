import {  Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const StatisticComponent: React.FC = () => (
  <Row gutter={16} style={{}}>
    <Col span={8}>
      <Statistic title="This Month Sales" value={'₹1,12,893.0'} />
    </Col>
    <Col span={8}>
      <Statistic title="Account Balance (INR)" value={'₹1,12,893.0'} precision={2} />
    </Col>
    <Col span={8}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
    </Col>
    
  </Row>
);

export default StatisticComponent;