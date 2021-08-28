import { css } from "@emotion/css";
import Layout from "@site/src/component/Layout";
import type { ItemProps } from "@site/src/component/Schedule";
import Schedule, {
  Break,
  Head,
  Item,
  Other,
} from "@site/src/component/Schedule";
import type { ReactNode } from "react";
import { memo } from "react";

type Slug =
  | "thoroughly-tempered-coworking-model-eventstorming"
  | "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";

export type I18n = {
  other: {
    checkIn: ReactNode;
    LunchBreak: ReactNode;
  };
  session: Record<Slug, Omit<ItemProps, "time" | "difficulty">>;
};

type WorkshopsProps = I18n;

const cssHead = css`
  label: Head;
  width: 50%;
`;

export default memo(function Workshops({ other, session }: WorkshopsProps) {
  return (
    <Layout title="Day 1 Workshops">
      <Schedule
        head={
          <>
            <Head className={cssHead}>{"Event Storming"}</Head>
            <Head className={cssHead}>{"Domain Storytelling"}</Head>
          </>
        }
      >
        <>
          <tr>
            <td colSpan={2}>
              <Other title={other.checkIn} time="08:20 ~ 09:00" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session[
                  "thoroughly-tempered-coworking-model-eventstorming"
                ]}
                time="09:00 ~ 12:00"
              />
            </td>
            <td>
              <Item
                {...session[
                  "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology"
                ]}
                time="09:00 ~ 12:00"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Break title={other.LunchBreak} time="12:10 ~ 13:00" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session[
                  "thoroughly-tempered-coworking-model-eventstorming"
                ]}
                time="13:30 ~ 16:30"
              />
            </td>
            <td>
              <Item
                {...session[
                  "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology"
                ]}
                time="13:30 ~ 16:30"
              />
            </td>
          </tr>
        </>
      </Schedule>
    </Layout>
  );
});
