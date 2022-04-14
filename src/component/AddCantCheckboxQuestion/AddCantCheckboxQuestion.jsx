import React from 'react'

import { Checkbox, Divider, Button } from 'antd'

import { PlusOutlined } from '@ant-design/icons'

export default function AddCantCheckboxQuestion(props) {
    return (
        <>
            <div style={{ width: '300px', marginRight: '100px' }}>{props.index + 1}.自增选项可选题</div>
            <div style={{ marginLeft: '-300px', width: '500px' }}>
                <Divider type='vertical' style={{ color: 'black', opacity: '1' }}></Divider>
                <Checkbox.Group>
                    <Checkbox>
                        选项一
                    </Checkbox>
                    <Checkbox>
                        选项二
                    </Checkbox>
                    <Button shape='circle' icon={<PlusOutlined />} size='small' style={{ marginLeft: '-5px', marginRight: '10px' }}></Button>
                </Checkbox.Group>
            </div>
        </>
    )
}
