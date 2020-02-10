import React, { Component } from 'react'
import Bjimg from './component/bgimg'
import Img from './component/img'
import SharDow from './component/shardow'
import Form from './component/form'
import P from './component/p'
import Search from './component/search'
import Hot from './component/Hot'
import NewPosition from './component/newPosition'
import NewPositionList from './component/newPositionList'
import NewPositionRightImg from './component/newPositionRightImg'
import ScrollTopli from './component/scrollTopLi'
import './index.css'
import {data,rightImg,returnValue} from './data'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Bjimg>
                    <Img src={"https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"}/>
                    <SharDow/>
                    <Form>
                        <P style={{fontSize:"62px",color:"#FFF",lineHeight:"56px"}} text={'If not now, when?'}/>
                        <P style={{fontSize:"62px",color:"#FFF",lineHeight:"56px"}} text={'If not me, who?'}/>
                        <P style={{fontSize:"34px",color:"#FFF",marginBottom:"38px",lineHeight:"48px"}} text={'此时此刻，非我莫属!'}/>
                        <Search/>
                        <Hot data={data}/>
                    </Form>
                </Bjimg>
                <NewPosition style={{height:"364px",width:"100%",overflow:"hidden",background:'red'}}>
                    <NewPositionList>
                        <ScrollTopli data={returnValue}/>
                    </NewPositionList>
                    <NewPositionRightImg data={rightImg} />
                </NewPosition>
            </div>
        )
    }
}
