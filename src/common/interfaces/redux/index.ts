import { ELang } from "@/common/enum";
import { store } from "../../redux";
import { IUser } from "../models";

interface IAuthReducer {
  accessToken?: string | null;
  refreshToken?: string | null;
  user?: IUser | null;
}
interface ISettingsReducer {
  lang: ELang;
}
export type { IAuthReducer, ISettingsReducer };
export type IRootState = ReturnType<typeof store.getState>;
