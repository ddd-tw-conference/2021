import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import DiamondIcon from "@site/src/icon/DiamondIcon";
import GoldIcon from "@site/src/icon/GoldIcon";
import SliverIcon from "@site/src/icon/SliverIcon";
import type { ReactNode } from "react";
import { memo } from "react";
import Sponsor from "./Sponsor";

const Block = (() => {
  const cssOuter = css`
    label: Outer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;
  const cssTitle = css`
    label: cssTitle;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 1em;
  `;
  const cssInner = css`
    label: Inner;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `;
  return memo(function Block({
    title,
    titleIcon,
    children,
  }: {
    title?: ReactNode;
    titleIcon?: ReactNode;
    children?: ReactNode;
  }) {
    return (
      <div className={cssOuter}>
        <Typography variant="h5" component="h3" className={cssTitle}>
          {titleIcon}
          <span>{title}</span>
          {titleIcon}
        </Typography>
        <div className={cssInner}>{children}</div>
      </div>
    );
  });
})();

const cssSponsors = css`
  label: Block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-top: 8rem;
  margin-bottom: 4rem;
`;

const size = {
  silver: 1500,
  gold: 6000,
  special: 1500,
};

export default memo(function Sponsors() {
  return (
    <div className={cssSponsors}>
      <Typography variant="h4" component="h2">
        {"Sponsors"}
      </Typography>
      <Block
        title={
          <span
            className={css`
              label: Silver;
              color: var(--ifm-color-emphasis-1000);
              text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
                0 0 10px rgba(255, 255, 255, 0.5);
            `}
          >
            {"Silver Sponsors"}
          </span>
        }
        titleIcon={<SliverIcon />}
      >
        <Sponsor
          logo={require("./logos/ctbcbank.png")}
          link="https://www.ctbcbank.com/"
          height={143}
          width={500}
          area={size.silver}
        />
        <Sponsor
          logo={require("!file-loader!./logos/vmware.svg").default}
          link="https://www.vmware.com/"
          height={13.049}
          width={85.673}
          area={size.silver}
        />
        <Sponsor
          logo={require("!file-loader!./logos/104.svg").default}
          link="https://www.104.com.tw/"
          height={225.361}
          width={479.999}
          area={size.silver}
        />
      </Block>
      <Block
        title={
          <span
            className={css`
              label: Gold;
              color: var(--ifm-color-emphasis-1000);
              text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0,
                0 -10px 20px #ff8000, 0 -18px 40px #f00;
            `}
          >
            {"Gold Sponsors"}
          </span>
        }
        titleIcon={<GoldIcon />}
      >
        <Sponsor
          logo={require("!file-loader!./logos/fable.svg").default}
          link="https://www.fable.com.tw/"
          height={875.381}
          width={1526.752}
          area={size.gold}
        />
        <Sponsor
          logo={require("!file-loader!./logos/cathayholdings.svg").default}
          link="https://www.cathayholdings.com/"
          height={70.121}
          width={346.806}
          area={size.gold}
        />
        <Sponsor
          logo={require("!file-loader!./logos/softleader.svg").default}
          link="https://www.softleader.com.tw/"
          height={58.2}
          width={200}
          area={size.gold}
        />
        <Sponsor
          logo={require("!file-loader!./logos/aws.svg").default}
          link="https://aws.amazon.com/"
          height={30.024}
          width={49.988}
          area={size.gold}
        />
      </Block>
      <Block
        title={
          <span
            className={css`
              label: Special;
              color: var(--ifm-color-emphasis-1000);
              text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px,
                #fff 0px 0px 15px, #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px,
                #ff2d95 0px 0px 40px, #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
            `}
          >
            {"Special Sponsors"}
          </span>
        }
        titleIcon={<DiamondIcon />}
      >
        <Sponsor
          logo={require("!file-loader!./logos/mayo.svg").default}
          link="https://www.mayohr.com/"
          height={86.283}
          width={240.689}
          area={size.special}
        />
        <Sponsor
          logo={require("!file-loader!./logos/jetbrains.svg").default}
          link="https://www.jetbrains.com/"
          height={120.223}
          width={130.104}
          area={size.special}
        />
        <Sponsor
          logo={require("!file-loader!./logos/ithome.svg").default}
          link="https://www.ithome.com.tw/"
          height={40.8}
          width={192.735}
          area={size.special}
        />
      </Block>
    </div>
  );
});
