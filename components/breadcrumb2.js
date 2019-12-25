import React from 'react'
import styled from 'styled-components'

const MyBread = styled.div`
  width: 100%;
  color: #787878;
  margin: 20px 0;
  font-size: 16px;
  & > a {
    color: #787878;
  }
`

const Bread = (props) => {
  const {data} = props
  const lastLink = props.lastLink || false

  if(data != undefined){
    return(
      <MyBread>
        <a href='/'>首頁</a>
        {(() => {
          // "÷"
          return data.map((element,index )=> { 
            // console.log(element,index,lastLink)
            if(index == data.length - 1 && lastLink==false && element.link !=undefined){
              return (<React.Fragment key={`MyBread${index}`}> > {element.title}</React.Fragment>)
            }
            return (<React.Fragment  key={`MyBread${index}`}> > <a href={element.link} key={`BreadItem${index}`}>{element.title}</a></React.Fragment>)
          });
      })()}
      </MyBread>
    )
  }

  return(
    <MyBread>
      <a href='/'>首頁</a>
    </MyBread>
  )
}

export default Bread