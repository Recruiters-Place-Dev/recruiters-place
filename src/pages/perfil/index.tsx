import { useContext } from "react";
import PerfilRech from "../../components/perfilRech";
import { WebContext } from "../../context/webcontext";
import { DevProfile } from "../DevDashboard/components/DevProfile";

function Perfil() {
  const { user } = useContext(WebContext);

  return user?.isRecruiter ? <PerfilRech /> : <DevProfile />;
}

export default Perfil;
