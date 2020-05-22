import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import queryString from 'query-string';
import $style from "./style.module.scss";

import { getGroupById } from '../../api/team';
import { LOCALES } from '../../constants/index';

export const TeamDetail = () => {
    const searchQuerys = queryString.parse(window.location.search);
    const [groupInfo, setGroupInfo] = useState({}) as any;

    useEffect(() => {
        getGroupById({lan: LOCALES.zh, id:searchQuerys.id}).then((res: any) => {
            setGroupInfo(res);
        });
    }, []);

    const loading = !Boolean(groupInfo.id);

    return (
        <Spin spinning={loading}>
            <div className={$style['detailWrapper']}>
                <div className={$style['groupName']}>{groupInfo.name}</div>
                <div className={$style['imgWrapper']}>
                    <img src={groupInfo.img} width='187' height='245' />
                </div>
                <div className={$style['detailContent']} dangerouslySetInnerHTML={{__html: groupInfo.descripe}}></div>
            </div>
        </Spin>
    )
}