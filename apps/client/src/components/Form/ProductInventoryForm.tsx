import React, { useEffect, useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, FormInstance, Input, InputNumber, Row, Space, Typography } from 'antd';
import { SIZES } from '../../constant/constant';
import IProduct from '../../interface/Product';

const inventoryData = [
  {
    color: 'Red',
    amount: {
      S: 1,
      M: 2,
      L: 3,
      XL: 4,
      XXL: 5,
    },
  },
  {
    color: 'Blue',
    amount: {
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0,
    },
  },
];



interface ProductInventoryFormProps {
  isReadOnly?: boolean;
  form: FormInstance<any>;
  selectedItem: IProduct
}

const ProductInventoryForm: React.FC<ProductInventoryFormProps> = ({ isReadOnly = false, form, selectedItem }) => {
    const [initialValue, setInitialValue] = useState<any>({
        import_price: '',
        actual_price: '',
        inventory: colorSet.map((item, index) => ({
            item,
            amount: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
                XXL: 0,
            },
            key: index
        })),
    })
    useEffect(() => {
    const colorSet = Array.from(new Set(selectedItem.product_item.map(item => item.color)));
    form.resetFields();
    setInitialValue({
        import_price: '',
        actual_price: '',
        inventory: colorSet.map((item, index) => ({
        item,
        amount: {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 0,
        },
        key: index
        })),
      })
    //   console.log(initialValue)
      console.log(selectedItem);
  },[selectedItem])
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);

  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: '100%' }}
      initialValues={initialValue}
      disabled={isReadOnly}
    >
      <Space direction='vertical' style={{ width: '100%' }}>
        <Row>
          <Form.List name="inventory">
            {(fields, {add, remove}) => {
                console.log(fields)
                return (
              <Space direction='vertical' style={{ marginBottom: 5, width: '100%' }}>
                <Space wrap style={{ justifyContent: 'space-evenly', rowGap: 20, width: '100%' }}>
                  {fields.map((field) => (
                    <Space direction='vertical'>
                      <Space direction='horizontal' align='center'>
                        <Form.Item name={[field.name, `color`]} label="Màu sắc" style={{ marginBottom: 0 }}>
                          <Input />
                        </Form.Item>
                      </Space>
                      {
                        SIZES.map(size => <Row align={'middle'}>
                          <Col span={8} >
                            <Typography.Text>Kích cỡ: {size}</Typography.Text>
                          </Col>
                          <Col span={10} offset={2}>
                            <Form.Item
                              label='Số lượng'
                              name={[field.name, 'amount', size]}
                              style={{ marginBottom: 0 }}
                            >
                              <InputNumber />
                            </Form.Item>
                          </Col>
                        </Row>)
                      }
                    </Space>

                  ))}
                </Space>
              </Space>
            )}}
          </Form.List>
        </Row>
      </Space>
    </Form>
  );
};

export default ProductInventoryForm;