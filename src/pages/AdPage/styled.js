import styled from 'styled-components';

export const Fake = styled.div`
    background-color: #ddd;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }

    .leftSide {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }

        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;
        }

        .adInfo {
            padding: 10px;
            flex: 1;

            .adName {
                margin-bottom: 10px;
            }

            .adDescription {
                
            }
        }
    }

    .rightSide {
        width: 250px;
    }
`  