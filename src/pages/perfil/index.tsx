import { useContext } from "react";
import PerfilRech from "../../components/perfilRech";
import { WebContext } from "../../context/webcontext";

function Perfil() {
  const { user } = useContext(WebContext);
  return <div>{user?.isRecruiter ? <PerfilRech /> : <h3>Perfil Dev</h3>}</div>;
}

export default Perfil;
