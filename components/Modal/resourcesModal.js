import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Content = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 0px;
  & > div{
    margin-top: 15px;
  }
`
const ColseModal = styled.a`
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
const ListTitle = styled.h3`
  width: 100%;
  border-bottom: 2px solid #00B1FF;
  padding: 8px 0px;
  color: #0e0e0e;
  font-size: 16px;
  letter-spacing: 1px;
  box-sizing: border-box;
`
const ResList = styled.ul`
  list-style-type: none;
  font-size: 0px;
  padding: 0px;
  & > li{
    padding: 8px;
    width: calc(100% / 3);
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    & > a {
      font-size: 14px;
      color: #0e0e0e;
      letter-spacing: 1px;
      text-decoration: none;
    }
  }
  @media (max-width: 992px){
    & > li{
      width: 100%;
    }
  }
`

const ResourcesModal = (props) => {

  const [data, dataSet] = useState(null)

  async function fetchMyAPI() {
    let response = await axios.get('/api/resourcedata')
    dataSet(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchMyAPI()
  }, []);


  if(data == null){
    //loading
    return (
      <React.Fragment>
        <div id='sinyi_footer_self' className='backContent'>
        <div className='resources'>
          <ColseModal href='#'>
            <img src='/static/img/closeModal.png' />
          </ColseModal>
          <Content>
              Loading ...
          </Content>
        </div>
        </div>
      </React.Fragment>
    )
  }

  if(data.error){
    //loading
    return (
      <React.Fragment>
        <div id='sinyi_footer_self' className='backContent'>
        <div className='resources'>
          <ColseModal href='#'>
            <img src='/static/img/closeModal.png' />
          </ColseModal>
          <Content>
              <div>API Error</div>
              <div>{data.error.message}</div>
          </Content>
        </div>
        </div>
      </React.Fragment>
    )
  }

  


  if(data.brands){
    //loading
    return (
      <React.Fragment>
        <div id='sinyi_footer_self' className='backContent'>
        <div className='resources'>
          <ColseModal href='#'>
            <img src='/static/img/closeModal.png' />
          </ColseModal>
          <Content>
              {data.brands.map((item,idx)=>{
                let list = item.content.map((_item,_idx)=>{
                  return(<li key={`rs_li${idx}${_idx}`}>
                    <a href={_item.url} target="_blank">{_item.subtitle}</a>
                  </li>)

                })

                return (<div key={`list${idx}`}>
                  <ListTitle>{item.title}</ListTitle>
                  <ResList>{list}</ResList>
                </div>)
              })}
          </Content>
        </div>
        </div>
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <div id='sinyi_footer_self' className='backContent'>
      <div className='resources'>
        <ColseModal href='#'>
          <img src='/static/img/closeModal.png' />
        </ColseModal>
        <Content>
          <div>Error</div>
          <div>API 回傳資料格式錯誤</div>
        </Content>
      </div>
      </div>
    </React.Fragment>
  )
}

export default ResourcesModal
