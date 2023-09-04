import frData from "@/common/locales/fr.json";
import enData from "@/common/locales/en.json";
import { useSelector } from "react-redux";
import { IRootState, ISettingsReducer } from "@/common/interfaces";
import { ELang } from "@/common/enum";
const useLocales = () => {
  let locales = frData;
  const storedSettings: ISettingsReducer = useSelector(
    (state: IRootState) => state?.settings
  );
  const lang = storedSettings?.lang;
  if (lang === ELang.en) {
    locales = enData;
  }
  return { lang, locales };
};
export default useLocales;
