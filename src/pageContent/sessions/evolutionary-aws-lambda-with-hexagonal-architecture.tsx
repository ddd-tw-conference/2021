import Session, {
  SessionCommonInfo,
  SessionI18n,
} from "@site/src/component/Session";
import { memo } from "react";

const sessionCommonInfo: SessionCommonInfo = {};

export default memo(function Page(i18n: SessionI18n) {
  return <Session {...i18n} {...sessionCommonInfo} />;
});
