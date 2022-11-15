import styled from 'styled-components';

export const FakeAd = styled.div`
  background-color: #CCC; 
  height:${props => props.height || 20}px;
  animation: fadeIn 5s linear infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .box--padding {
        padding: 10px;
    }

    .all{
        flex: 1;
        .perfilInfo {
            display: flex;
                .left{
                    margin: 10px;
                    img{
                        width: 30vw;
                        height: 50vh;
                        border-radius: 10%;
                    }
                }
                .right{
                    margin-left: 2vw;
                    h1{
                        font-family: 'Roboto', sans-serif;
                        text-align: center;
                    }

                    .grid{
                        display: grid;
                        grid-template-columns: max-content 1fr;
                        border: 1px solid black;
                        border-radius: 7px;
                        margin-bottom: 10px;
                        
                        .tituloInicial{
                            background-color: lightgrey;
                            padding: 0 7px 0 6px;
                            text-align: end;
                            border-radius: 5px 0 0 0;
                        }

                        .tituloFinal{
                            background-color: lightgrey;
                            padding: 0 7px 0 6px;
                            text-align: end;
                            border-radius: 0 0 0 5px;
                        }

                        .conteudo{
                            margin: 0 10px 0 10px;
                        }
                    }

                    .editButton{
                        button{
                            width: 100%;
                            padding: 5px;
                            border: none;
                            border-radius: 10px;
                            background-color: #04AA6D;
                            cursor: pointer;
                            font-size: 16px;
                            color: white;
                        }
                        button:hover {
                            background-color: #2E8B57;
                        }

                    }
                }
            }
        }
        .adUser{
            margin: 20px;
            display: flex;
            align-items: end;

            button{
                border: none;
            }

            .box{
                display: flex;
                flex-direction: column;
            }

            img{
                width: 20vw;
                height: 40vh;
            }
            p{
                margin: 0;
            }
        }
    }
}
`;
