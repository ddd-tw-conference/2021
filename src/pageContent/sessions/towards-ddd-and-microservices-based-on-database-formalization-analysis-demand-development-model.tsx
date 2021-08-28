import Session, {
  SessionCommonInfo,
  SessionI18n,
} from "@site/src/component/Session";
import { difficultyMedium } from "@site/src/constants";
import { memo } from "react";

const sessionCommonInfo: SessionCommonInfo = {};

export default memo(function Page(i18n: SessionI18n) {
  return (
    <Session {...i18n} {...sessionCommonInfo} difficulty={difficultyMedium} />
  );
});
