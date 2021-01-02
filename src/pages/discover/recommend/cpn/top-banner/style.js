import styled from 'styled-components'

import downLoadImage from '@/assets/img/download.png'
import bannerImage from '@/assets/img/banner_sprite.png'


export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage});
  .banner{
    height:270px;
    display:flex;
    position:relative;
  }
`

export const BannerLeft = styled.div`
  width:730px;
  .banner-item{
    overflow:hidden;
    height:270px;
    .image{
      width:100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  // href:""
})`
  width:254px;
  height:270px;
  background: url(${downLoadImage});
`

export const BannerControl = styled.div`
  position:absolute;
  left:0;
  right:0;
  top:50%;
  transform:translateY(-50%);

  .btn{
    background:url(${bannerImage});
    position:absolute;
    background-color:transparent;
    width:37px;
    height:63px;
    cursor:pointer;
    
    &:hover{
      background-color:rgba(0,0,0,.1);
    }
  }

  .left{
    left:68px;
    background-position:0 -360px;
  }
  .right{
    right:68px;
    background-position:0 -508px;
  }
`