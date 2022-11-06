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

    .box--padding {
        padding: 10px;
    }

    .Info {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }

        .perfilImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }

        .perfilInfo {
            padding: 10px;
            flex: 1;

            .perfilName {
                margin-bottom: 10px;
                

                h2 {
                    margin: 0;
                    margin-top: 20px;
                }

                small {
                    color: #999;
                }
            }

            .perfilEmail {
                margin-bottom: 10px;

                small {
                    color: #999;
                }
            }

            .perfilNasc {
                margin-bottom: 10px;

                small {
                    color: #999;
                }
            }

            .perfilTelefone {
                margin-bottom: 10px;

                small {
                    color: #999;
                }
            }

            .perfilEndereco {
                margin-bottom: 10px;

                small {
                    color: #999;
                }
            }

            .perfilAvaliacao {
                margin-bottom: 10px;

                small {
                    color: #999;
                }
            }
            
        }
    }

    
}
`;
