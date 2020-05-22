import React, { useState, useEffect } from 'react';
import { Form, Select } from 'antd';
import $style from "./style.module.scss";

import { SearchPanel } from '../SearchPanel';
import { getRiceQzWyPermission } from '../../../../api/rice';

const defaultPermissionQuery = {
    s_tp: 'rice',
    s_user: 'QfZWnY',
    s_img_data: 'img'
}

const { Option } = Select;


export const RiceQzWy = () => {
    const [year, setYear] = useState([]) as any;
    const [form] = Form.useForm();

    useEffect(() => {
        getRiceQzWyPermission(defaultPermissionQuery).then((res) => {
            setYear(res);
        })
    }, []);

    const searchImg = () => {

    }

    const formContent = (
        <Form form={form} layout='inline'>
            <Form.Item name="year" label='Year:' initialValue={'2014-Yunrui Lu'}>
                <Select placeholder='Pick year'>
                    {year.map((item: {[key:string]: string}) => <Option key={item.s_id} value={item.s_year}>{item.s_year}</Option>)}
                </Select>
            </Form.Item>
            <Form.Item name="id">
            </Form.Item>
        </Form>
    )

    return (
        <div className={$style['riceQzWyWrapper']}>
            <SearchPanel 
                formContent={formContent}
                searchImg={searchImg}
            />
        </div>
    )
}