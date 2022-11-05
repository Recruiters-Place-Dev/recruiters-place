import { useContext } from "react";
import PerfilRech from "../../components/perfilRech";
import { WebContext } from "../../context/webcontext";

function Perfil() {
  const { user } = useContext(WebContext);
  return <PerfilRech />;
}

export default Perfil;
