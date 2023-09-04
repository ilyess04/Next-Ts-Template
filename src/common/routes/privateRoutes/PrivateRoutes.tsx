import { IAuthReducer, ILayout, IRootState } from "../../interfaces";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const PrivateRoutes = ({ children }: ILayout) => {
  const auth: IAuthReducer = useSelector((state: IRootState) => state?.auth);
  return auth.accessToken && auth.accessToken !== null
    ? children
    : //add sidebar and navbar of private routes here
      redirect("/");
};
export default PrivateRoutes;
