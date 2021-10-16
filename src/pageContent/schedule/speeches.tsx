import { css } from "@emotion/css";
import Layout from "@site/src/component/Layout";
import type { ItemProps } from "@site/src/component/Schedule";
import Schedule, {
  Break,
  Head,
  Item,
  Other,
} from "@site/src/component/Schedule";
import {
  difficultyAdvanced,
  difficultyEntry,
  difficultyMedium,
} from "@site/src/constants";
import type { ReactNode } from "react";
import { memo } from "react";

type Slug =
  | "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle"
  | "getting-to-ddd-pragmatic-or-principled"
  | "complexity-thinking-in-domain-driven-design"
  | "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions"
  | "the-toolbox-for-initiating-agile-transformation"
  | "a-practical-guide-for-domain-driven-design-teams"
  | "start-from-scratch-essentials-of-game-development-agile-ddd"
  | "tdd-ddd-bdd-well-explained"
  | "application-modernization-steps-and-implementation"
  | "concept-model-what-why-and-how"
  | "that-year-the-pit-we-stepped-on-together"
  | "autonomy-is-that-what-we-really-want"
  | "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing"
  | "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design"
  | "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices"
  | "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory"
  | "evolutionary-aws-lambda-with-hexagonal-architecture"
  | "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model"
  | "when-dci-conjunction-with-ddd";

export type I18n = {
  head: {
    foundation: ReactNode;
    heuristics: ReactNode;
    footprints: ReactNode;
  };
  other: {
    checkIn: ReactNode;
    opening: ReactNode;
    break: ReactNode;
    LunchBreak: ReactNode;
  };
  session: Record<Slug, Omit<ItemProps, "time" | "difficulty">>;
};

type SpeechesProps = I18n;

const cssHead = css`
  label: Head;
  width: 33.33333%;
`;

export default memo(function Speeches({
  head: { foundation, heuristics, footprints },
  other,
  session,
}: SpeechesProps) {
  return (
    <Layout title="Day 2 Speeches">
      <Schedule
        head={
          <>
            <Head className={cssHead}>{foundation}</Head>
            <Head className={cssHead}>{heuristics}</Head>
            <Head className={cssHead}>{footprints}</Head>
          </>
        }
      >
        <>
          <tr>
            <td colSpan={3}>
              <Other title={other.checkIn} time="08:10 ~ 08:45" />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Other title={other.opening} time="08:45 ~ 09:00" />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Item
                {...session["getting-to-ddd-pragmatic-or-principled"]}
                time="09:00 ~ 09:50"
                difficulty={difficultyEntry}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.break} time="09:50 ~ 10:10" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session[
                  "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle"
                ]}
                time="10:10 ~ 11:00"
                difficulty={difficultyEntry}
              />
            </td>
            <td>
              <Item
                {...session["complexity-thinking-in-domain-driven-design"]}
                time="10:10 ~ 11:00"
                difficulty={difficultyAdvanced}
              />
            </td>
            <td>
              <Item
                {...session[
                  "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions"
                ]}
                time="10:10 ~ 11:00"
                difficulty={difficultyMedium}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.break} time="11:00 ~ 11:20" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session["the-toolbox-for-initiating-agile-transformation"]}
                time="11:20 ~ 12:10"
                difficulty={difficultyEntry}
              />
            </td>
            <td>
              <Item
                {...session["a-practical-guide-for-domain-driven-design-teams"]}
                time="11:20 ~ 12:10"
                difficulty={difficultyMedium}
              />
            </td>
            <td>
              <Item
                {...session[
                  "start-from-scratch-essentials-of-game-development-agile-ddd"
                ]}
                time="11:20 ~ 12:10"
                difficulty={difficultyEntry}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.LunchBreak} time="12:10 ~ 13:00" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session["tdd-ddd-bdd-well-explained"]}
                time="13:00 ~ 13:50"
                difficulty={difficultyEntry}
              />
            </td>
            <td>
              <Item
                {...session[
                  "application-modernization-steps-and-implementation"
                ]}
                time="13:00 ~ 13:50"
                difficulty={difficultyMedium}
              />
            </td>
            <td>
              <Item
                {...session["concept-model-what-why-and-how"]}
                time="13:00 ~ 13:50"
                difficulty={difficultyMedium}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.break} time="13:50 ~ 14:10" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session["that-year-the-pit-we-stepped-on-together"]}
                time="14:10 ~ 15:00"
                difficulty={difficultyEntry}
              />
            </td>
            <td>
              <Item
                {...session[
                  "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model"
                ]}
                time="14:10 ~ 15:00"
                difficulty={difficultyMedium}
              />
            </td>
            <td>
              <Item
                {...session[
                  "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing"
                ]}
                time="14:10 ~ 15:00"
                difficulty={difficultyMedium}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.break} time="15:00 ~ 15:20" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session[
                  "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design"
                ]}
                time="15:20 ~ 16:10"
                difficulty={difficultyEntry}
              />
            </td>
            <td>
              <Item
                {...session[
                  "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices"
                ]}
                time="15:20 ~ 16:10"
                difficulty={difficultyMedium}
              />
            </td>
            <td>
              <Item
                {...session[
                  "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory"
                ]}
                time="15:20 ~ 16:10"
                difficulty={difficultyAdvanced}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <Break title={other.break} time="16:10 ~ 16:30" />
            </td>
          </tr>
          <tr>
            <td>
              <Item
                {...session[
                  "evolutionary-aws-lambda-with-hexagonal-architecture"
                ]}
                time="16:30 ~ 17:20"
                difficulty={difficultyMedium}
              />
            </td>
            <td>
              <Item
                {...session["autonomy-is-that-what-we-really-want"]}
                time="16:30 ~ 17:20"
                difficulty={difficultyAdvanced}
              />
            </td>
            <td>
              <Item
                {...session["when-dci-conjunction-with-ddd"]}
                time="16:30 ~ 17:20"
                difficulty={difficultyMedium}
              />
            </td>
          </tr>
        </>
      </Schedule>
    </Layout>
  );
});
