import React, { useState, useEffect, Fragment } from 'react'
import {
    BodyStyle,
    ImgCardStyle,
    CardStyle,
    DetailStyle,
    ParagraphStyled,
    ExpandStyle,
    PaginationStyled,
    ImgModalStyle,
    CrediteStyle,
    ModalStyle,
    DetailModal,
    FooterModalStyle
} from './style'
import { Row, Col, Skeleton, Empty } from 'antd'

import axios from 'axios'
export default function Body() {
    const [data, setData] = useState([])
    const [showData, setShowData] = useState([])
    const [selectData, setSelectData] = useState()
    const [page, setPage] = useState(1)
    const [statusModal, setStatusModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const maxToPage = 8
    useEffect(() => {
        (async () => {
            setLoading(true)
            await axios.get('http://localhost:5000/new').then((res) => {
                const data = [...res.data]
                const dataNow = data.slice(maxToPage * (page - 1), maxToPage * page)
                setShowData(dataNow)
                setData(data)
                setLoading(false)
            }).catch((err) => { setLoading(false) })
        })()
    }, [])

    const onChangePage = (page) => {
        const dataNow = data.slice(maxToPage * (page - 1), maxToPage * page)
        setShowData([...dataNow])
        setPage(page)
    }

    const openModal = (data) => {
        setSelectData(data)
        setStatusModal(true)
    }
    const closeModal = () => {
        setStatusModal(false)
    }
    return (
        <BodyStyle>
            {loading ?
                <Row justify='center'>
                    <Col xxl={20} xl={20} lg={20} md={18} sm={18} xs={18}>
                        <Row gutter={8} justify='start'>
                            <Col xxl={8} xl={8} lg={8} md={8} sm={8}><Skeleton.Image /><Skeleton paragraph={{ rows: 4 }} active /></Col>
                            <Col xxl={8} xl={8} lg={8} md={8} sm={8}><Skeleton.Image /><Skeleton paragraph={{ rows: 4 }} active /></Col>
                            <Col xxl={8} xl={8} lg={8} md={8} sm={8}><Skeleton.Image /><Skeleton paragraph={{ rows: 4 }} active /></Col>
                        </Row>
                    </Col>
                </Row> :
                <Fragment>
                    {data.length > 0 ?
                        <Fragment>
                            <Row justify='center' >
                                <Col xxl={20} xl={20} lg={20} md={18} sm={18} xs={18}>
                                    <Row justify='start' gutter={8}>
                                        {showData.map((item, index) => (
                                            <Col xxl={6} xl={6} lg={6} md={8} key={index}>
                                                <CardStyle
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={
                                                        <Row justify='center'>
                                                            <ImgCardStyle alt="example" src={item.node?.display_url} />
                                                        </Row>
                                                    }
                                                >
                                                    <DetailStyle>
                                                        <ParagraphStyled ellipsis={{
                                                            rows: 2,
                                                            expandable: false,
                                                        }} >
                                                            {item.node?.edge_media_to_caption.edges[0].node.text}
                                                        </ParagraphStyled>
                                                        <Row justify='end' onClick={() => { openModal(item) }}>
                                                            <CrediteStyle
                                                                ellipsis={{
                                                                    rows: 1,
                                                                    expandable: false,
                                                                }}>{item.node?.accessibility_caption}</CrediteStyle>
                                                            <ExpandStyle>เพิ่มเติม</ExpandStyle>
                                                        </Row>
                                                    </DetailStyle>
                                                </CardStyle>
                                            </Col>
                                        ))}
                                    </Row>

                                </Col>
                            </Row>
                            <Row justify='center'>
                                <Col>
                                    <PaginationStyled current={page} pageSize={maxToPage} total={data.length} onChange={(page) => { onChangePage(page) }} />
                                </Col>
                            </Row>
                        </Fragment> :
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    }
                </Fragment>

            }
            <ModalStyle
                centered
                visible={statusModal}
                onCancel={closeModal}
                footer={<FooterModalStyle>{selectData?.node?.accessibility_caption}</FooterModalStyle>}>
                <Row justify='center'>
                    <Col >
                        <ImgModalStyle src={selectData?.node?.display_url} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DetailModal>
                            <p style={{ textIndent: '20px' }}>
                                {selectData?.node?.edge_media_to_caption.edges[0].node.text}
                            </p>
                        </DetailModal>
                    </Col>
                </Row>
            </ModalStyle>
        </BodyStyle >
    )
}
