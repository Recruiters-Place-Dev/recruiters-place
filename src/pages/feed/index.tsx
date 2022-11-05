import React, { useContext, useEffect, useState } from "react";
import FotoPerfil from "../../assets/carbon_user-avatar.svg"
import ChatImg from "../../assets/ant-design_file-search-outlined.svg"
import Vermais from "../../assets/bi_chat-dots-fill.svg"
import { iUser, iWebContext, WebContext } from "../../context/webcontext";
import { ContainerDeveloper, ContainerFeed, Contato, DeveloperName, DevelopersCargo, DivDevelopersInfo, DivDevelopersLinks, DivDevelopersName, DivDevelopersTech, Figure, Techs } from "./styles";


import techList from "../../mockList/devTechs.json";
import ModalFeed from "../../components/modalFeed";

function Feed() {
  const { allUsers, openModalFeed } = useContext<iWebContext>(WebContext);
  const [modalDeveloper, setModalDeveloper] = useState<iUser | null>(null)

  const developers = allUsers?.filter((elem: iUser) => elem.isRecruiter === false)
  useEffect(() => { }, []);

  return <ContainerFeed>
    {
      developers?.map((elem: iUser, index: number) => {

        // Object.entries(elem.tech)
        const olhatecnologia = Object.entries(elem.tech)
       const meupau = olhatecnologia.filter((elem)=> {
        return elem[1] === true
       })

       const minhasbolas = meupau.map((elem)=> {
        return techList.find(E=>elem[0] === E.tech) 
       })

        return (
          <ContainerDeveloper initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} transition={{ duration: 1.5 }} key={index}>
            <DivDevelopersInfo>
              <Figure>
                <img src={FotoPerfil} alt="Foto de Perfil" />
              </Figure>
              <p>{elem?.email}</p>
              <p>{elem?.city}</p>
              <p>{elem?.schooling}</p>
            </DivDevelopersInfo>
            <DivDevelopersName>

              <DeveloperName>{elem?.name}</DeveloperName>

              <DevelopersCargo>{elem?.cargo}</DevelopersCargo>

              <DivDevelopersLinks>
                <a href={elem?.linkedin} >Linkedin</a>
                <a href={elem?.github} >Github</a>
                <a href={elem?.portfolio} >Portifolio</a>
              </DivDevelopersLinks>

            </DivDevelopersName>

            <DivDevelopersTech>
              <Techs>
                {
                  
                  minhasbolas.map((element: any) => {
                    console.log(element.tech)
                    return <img src={element.dir} alt={element.tech}/>
                  })
                }

              </Techs>

              <Contato>
                <img src={Vermais} alt="chat" />
                <img src={ChatImg} alt="chat" id={elem.id + ""} onClick={() => {
                  openModalFeed()
                  setModalDeveloper(elem)
                }} />
              </Contato>

            </DivDevelopersTech>
            <ModalFeed developer={modalDeveloper}/>
          </ContainerDeveloper>
        )

      })
    }
    
  </ContainerFeed>
}

export default Feed;
