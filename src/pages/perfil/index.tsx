import { useContext } from "react";
import PerfilRech from "../../components/perfilRech";
import { WebContext } from "../../context/webcontext";

function Perfil() {
  const { user2 } = useContext(WebContext);
  return <div>{user2?.isRecruiter ? <PerfilRech /> : <h3>Perfil Dev</h3>}</div>;
}

export default Perfil;
