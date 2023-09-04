import { IAuthReducer, ILayout, IRootState } from "../../interfaces";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const PublicRoutes = ({ children }: ILayout) => {
  const auth: IAuthReducer = useSelector((state: IRootState) => state?.auth);
  return auth.accessToken && auth.accessToken !== null
    ? redirect("/dashboard")
    : //add sidebar and navbar of public routes here
      children;
};
export default PublicRoutes;
