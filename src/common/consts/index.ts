import { ELang } from "../enum";
import { IAuthReducer, ISettingsReducer } from "../interfaces";

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: null,
  refreshToken: null,
  user: null,
};
const INIT_SETTINGS_STATE: ISettingsReducer = {
  lang: ELang.fr,
};
export { INIT_AUTH_REDUCER_STATE, INIT_SETTINGS_STATE };
