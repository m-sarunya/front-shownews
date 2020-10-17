import styled from 'styled-components'
import { Card, Typography, Pagination, Modal } from 'antd'

export const HeaderStyle = styled.div`
background-color:#fff;
z-index:999;
position:fixed;
width:100%;
top:0;  
left:0;
padding:15px;
 box-shadow: 0 2px 8px #f0f1f2;
`
export const BodyStyle = styled.div`
position:relative;
width:100%;
top:74px;  
left:0;
padding:20px;
`
export const CardStyle = styled(Card)`
align-items:center;
border: 1px solid #d7d7d7;
margin-top:20px;
`

export const ImgCardStyle = styled.img`
margin-top:10px;
width:200px;
height:200px;
box-shadow: 0 2px 8px #f0f1f2;
`

export const DetailStyle = styled.div`
font-size:13px;
`
export const CrediteStyle = styled(Typography.Paragraph)`
font-size:12px;
color:#b3b3b3;
`
export const ParagraphStyled = styled(Typography.Paragraph)`
width: 200px;
max-width: 200px;
overflow-y: "auto";
`
export const ExpandStyle = styled.div`
cursor: pointer;
/* color: #40a9ff; */
color: #01b400;
`
export const ModalStyle = styled(Modal)`
.ant-modal-body {
    padding: 36px 24px 12px 24px;
}
.ant-modal-close-x {
    width: 36px !important;
    line-height: 36px!important;
}
`
export const ImgModalStyle = styled.img`
height:250px;
width:250px;
min-width:200px;
min-height:225px;
box-shadow: 0 2px 8px #f0f1f2;
`
export const DetailModal = styled.div`
padding:10px;
`
export const FooterModalStyle = styled.div`
font-size:13px;
color:#b3b3b3;
text-align:left;
`

export const PaginationStyled = styled(Pagination)`
margin-top:30px;
.ant-pagination-item-active a{
    color: #01b400;
} 

.ant-pagination-item-active:focus, 
.ant-pagination-item-active:hover,
.ant-pagination-item-active,.ant-pagination-item:focus, 
.ant-pagination-item:hover,
.ant-pagination-item-active a ,
.ant-pagination-item:hover a
.ant-pagination-next:hover, 
.ant-pagination-prev:hover ,
.ant-pagination-next:hover button,
.ant-pagination-prev:hover button
{
    border-color: #01b400!important;
    color: #01b400!important;
}
/* .ant-pagination-item-active {   
    border-color: #01b400;
} */
`