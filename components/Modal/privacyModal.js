import React from 'react'
import styled from 'styled-components'
import Backdrop from './backdrop'
import { Table } from 'react-bootstrap'

const ColseModal = styled.div`
  width: 20px;
  right: 20px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 10px;
  & > img{
    width: 100%;
  }
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 992px){
    width: 100%;
    margin-top: 50px;
  }
`
const Title = styled.div`
  width: 100%;
  text-align: center;
  & > h5{
    font-size: 27px;
    color: #B76E00;
  }
`


const ProvicyModal = (props) => {
  // console.log(props.show)
  return (
    <React.Fragment>
      <Backdrop show={props.show} close={props.close} />
      <div className='provicy'
        style={{
          display: props.show ? 'block' : 'none'
        }}
      >
        <ColseModal onClick={props.close}>
          <img src='/static/img/closeModal.png' />
        </ColseModal>
        <Title>
          <h5>隱私條款內容</h5>        
        </Title>
        <Container>
          1.認知與接受條款
          「信義全球資產」係依據本服務條款提供信義全球資產（http://www.sinyiglobal.com/）網站服務(以下簡稱「本網站」)。當您使用本網站時，即表示您已閱讀、瞭解並同意接受本服務條款之所有內容。此外，當您使用信義全球資產的特定服務時，可能會依據該特定服務之性質，而須遵守信義全球資產所另行公告之服務條款或相關規定。此另行公告之服務條款或相關規定亦均併入屬於本服務條款之一部分。信義全球資產有權於任何時間修改或變更本服務條款之內容，建議您隨時注意該等修改或變更。您於任何修改或變更後繼續使用本服務，視為您已閱讀、瞭解並同意接受該等修改或變更。如果您不同意本服務條款的內容，或者您所屬的國家或地域排除本服務條款內容之全部或一部時，您應立即停止使用本網站。若您為未滿二十歲，除應符合上述規定外，並應於您的家長（或監護人）閱讀、瞭解並同意本服務條款之所有內容及其後修改變更後，方得使用或繼續使用本網站。當您使用或繼續使用本網站時，即推定您的家長（或監護人）已閱讀、瞭解並同意接受本服務條款之所有內容及其後修改變更。

          2.與第三人網站的連結
        </Container>
      </div>
    </React.Fragment>

  )
}

export default ProvicyModal