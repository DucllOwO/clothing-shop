import { Form } from 'antd'
import React, { useState } from 'react'
import DiscountTable, { DiscountType } from '../../components/Table/Discount/DiscountTable'

const originData: DiscountType[] = [];
for (let i = 0; i < 10; i++) {
  originData.push({
    id: i.toString(),
    name: `Discount ${i}`,
    discount: i + 10,
  });
}

const Discount = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);

  return (
    <Form form={form} component={false}>
      <DiscountTable form={form} data={data} setData={setData} />
    </Form>
  )
}

export default Discount