import React from 'react'

import { Divider, Input, Button } from 'antd'

import { PlusOutlined } from "@ant-design/icons"

export default function AddManyTextQuestion(props) {
    let inputOnChange = () => {

    }
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.多项文本自增题</div>
            <div style={{ marginLeft: '-300px', width: '500px', display: 'flex', alignItems: 'center' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Input maxLength={10} onChange={inputOnChange}></Input>
                <div>,</div>
                <Input maxLength={10} onChange={inputOnChange}></Input>
                <Button icon={<PlusOutlined />} shape='circle'></Button>
            </div>
        </>
    )
}
