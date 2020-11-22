import React from 'react';
import { Button, Row, Col, message } from 'antd';

export default class Test extends React.Component {

    doStuff = () => {
        let a = 10;
        console.log(`This is an info msg.${a}`);
        message.info('This is an info msg!');
    }

    render = () => {
        return(
            <div>
                <h1 style={{ textAlign:'center' }}>HELLO, WORLD!</h1>
                <Row gutter={ 8 } justify='center' style={{ width:'100%' }}>
                    <Col>
                        <Button type='primary' onClick={ () => this.doStuff() }>PRIMARY</Button>
                    </Col>

                    <Col>
                        <Button onClick={ () => message.warning('This is warning msg.') }>DEFAULT</Button>
                    </Col>

                    <Col>
                        <Button type='dashed' onClick={ () => message.error('This is an error msg.') }>DASHED</Button>
                    </Col>
                </Row>
            </div>
        );
    }

}