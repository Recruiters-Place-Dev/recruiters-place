import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { SlPencil } from "react-icons/sl";
import {
  Container,
  ContainerContent,
  ContainerMain,
  ContainerProfile,
} from "./style";

const PerfilRech = () => {
  const [boxEdit, setBoxEdit] = useState(false);

  return (
    <ContainerMain>
      <Container size="small">
        <ContainerProfile>
          <figure>
            <BiUserCircle size={85} color="#1DA1F2" />
            {/* <img src="" alt="" /> */}
          </figure>
          <div>
            <p>Salvador</p>
            <p>teste@mail.com</p>
          </div>
        </ContainerProfile>
        <ContainerContent>
          <h2>Matheus Moura</h2>
          <p>Tech Recruiter</p>
          <p>Likedin</p>
        </ContainerContent>
        <SlPencil
          onClick={() => setBoxEdit(!boxEdit)}
          size={24}
          color="#1DA1F2"
          cursor="pointer"
        />
      </Container>
      {boxEdit && (
        <Container size="big">
          <h1>Teste</h1>
        </Container>
      )}
    </ContainerMain>
  );
};

export default PerfilRech;
