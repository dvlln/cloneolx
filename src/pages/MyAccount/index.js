import React, { useState, useEffect } from "react";
import { PageArea, Fake } from "./styled";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PageContainer } from "../../components/MainComponents";
import useApi from "../../helpers/OlxAPI";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [perfilInfo, setPerfilInfo] = useState({});

  // MODAL
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // FIM MODAL

  useEffect(() => {
    const getPerfilInfo = async (id) => {
      const json = await api.getAd(id, true);
      setPerfilInfo(json);
      setLoading(false);
    };
    getPerfilInfo(id);
  }, []);

  return (
    <PageContainer>
      <PageArea>
        <div className="Info">
          <div className="box">
            <div className="perfilImage">
              {loading && <Fake height={300} />}
              {perfilInfo.images && (
                <Slide>
                  {perfilInfo.images.map((img, k) => (
                    <div key={k} className="each-slide">
                      <img src={img} alt="" />
                    </div>
                  ))}
                </Slide>
              )}
            </div>
            <div className="perfilInfo">
              <div className="perfilName">
                {loading && <Fake height={20} />}
                {perfilInfo.name && <h2>{perfilInfo.name}</h2>}
              </div>
              <div className="perfilEmail">
                {loading && <Fake height={20} />}
                {perfilInfo.email && <small>E-mail: {perfilInfo.email}</small>}
              </div>
              <div className="perfilNasc">
                {loading && <Fake height={20} />}
                {perfilInfo.nascimento && (
                  <small>Data de Nascimento: {perfilInfo.nascimento}</small>
                )}
              </div>
              <div className="perfilTelefone">
                {loading && <Fake height={20} />}
                {perfilInfo.telefone && (
                  <small>Telefone: {perfilInfo.telefone}</small>
                )}
              </div>
              <div className="perfilEndereco">
                {loading && <Fake height={20} />}
                {perfilInfo.endereço && (
                  <small>Endereço: {perfilInfo.endereço}</small>
                )}
              </div>
              <div className="perfilAvaliacao">
                {loading && <Fake height={20} />}
                {perfilInfo.avaliacao && (
                  <small>Avaliação: {perfilInfo.avaliacao}</small>
                )}
              </div>
              <div className="editButton">
                <div>
                  <button onClick={openModal}>Editar</button>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"                    
                  >
                    <form style={{display: 'flex', flexDirection: 'column'}}>
                        <label style={{marginBottom: 5}}>Nome</label>
                        <input style={{marginBottom: 15}} />
                        <label style={{marginBottom: 5}}>E-mail</label>
                        <input style={{marginBottom: 15}} />
                        <label style={{marginBottom: 5}}>Data de Nascimento</label>
                        <input style={{marginBottom: 15}} />
                        <label style={{marginBottom: 5}}>Telefone</label>
                        <input style={{marginBottom: 15}} />
                        <label style={{marginBottom: 5}}>Endereço</label>
                        <input style={{marginBottom: 15}} />
                        <label style={{marginBottom: 5}}>Avaliacao</label>
                        <input style={{marginBottom: 15}} />

                        <button style={{marginBottom: 5}} type="submit">Enviar</button>
                    </form>
                    <button onClick={closeModal}>close</button>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
