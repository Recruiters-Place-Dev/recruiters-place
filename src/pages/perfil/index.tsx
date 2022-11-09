import { useContext } from "react";
import PerfilRech from "../../components/perfilRech";
import { WebContext } from "../../context/webcontext";
import { DevDashboard } from "../DevDashboard";


function Perfil() {
  const { user } = useContext(WebContext);

  return user?.isRecruiter ? <PerfilRech /> : <DevDashboard />;
}

export default Perfil;
