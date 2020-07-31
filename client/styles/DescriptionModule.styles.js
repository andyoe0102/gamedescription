import styled from 'styled-components';

export const DescCol = styled.div`
  #${props => props.theme.rootId} & {
    width: 324px;
    display: flex;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  #${props => props.theme.rootId} & {
    height: 151px;
    margin-bottom: 7px;
  }
`;

export const TextContainer = styled.div`
  #${props => props.theme.rootId} & {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }
`;

export const DescImg = styled.img`
  #${props => props.theme.rootId} & {
    width: 324px;
    height: auto;
    max-height: 151px;
  }
`;

export const Desc = styled.div`
  #${props => props.theme.rootId} & {
    max-height: 111px;
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
    padding-right: 16px;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
`;

export const DescStats = styled.div`
  #${props => props.theme.rootId} & {
    margin-top: 10px;
    font-size: 12px;
    color: #556772;
  }
`;

export const ReleaseDate = styled.div`
  #${props => props.theme.rootId} & {
    padding-top: 9px;
    padding-bottom: 13px;
    display: flex;
    line-height: 16px;
  }
`;
