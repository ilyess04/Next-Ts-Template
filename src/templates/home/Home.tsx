import { ELang } from "@/common/enum";
import { useLocales } from "@/common/hooks";
import { setLang } from "@/common/redux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const HomeTemplate = (): JSX.Element => {
  const dispatch = useDispatch();
  const { lang, locales } = useLocales();
  return (
    <div>
      Next-Ts-Template-Home
      <Button
        onClick={() =>
          dispatch(setLang(lang === ELang.fr ? ELang.en : ELang.fr))
        }
      >
        {locales.changeLangue}
      </Button>
    </div>
  );
};
export default HomeTemplate;
