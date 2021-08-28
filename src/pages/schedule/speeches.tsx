import Speeches, { I18n } from "@site/src/pageContent/schedule/speeches";
import { memo } from "react";

const i18n: I18n = {
  head: {
    foundation: "Foundation",
    heuristics: "Heuristics",
    footprints: "Footprints",
  },
  other: {
    checkIn: "Check In",
    opening: "Opening",
    break: "Break",
    LunchBreak: "Lunch Break",
  },
  session: {
    "getting-to-ddd-pragmatic-or-principled": {
      slug: "getting-to-ddd-pragmatic-or-principled",
      title: "Getting to DDD: Pragmatic or Principled?",
      guest: [{ name: "Julie Lerman" }],
    },
    "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle":
      {
        slug: "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle",
        title:
          "Event Modeling as a Way to Entirely Manage the Software Development Life-Cycle.",
        guest: [{ name: "Adam Dymitruk" }],
      },
    "complexity-thinking-in-domain-driven-design": {
      slug: "complexity-thinking-in-domain-driven-design",
      title: "Complexity Thinking in Domain Driven Design",
      guest: [{ name: "David Wang" }],
    },
    "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions":
      {
        slug: "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions",
        title:
          "Continuous Architecture : Embracing Multiple Viewpoints for Sustainable Solutions",
        guest: [{ name: "Kim Kao" }],
      },
    "the-toolbox-for-initiating-agile-transformation": {
      slug: "the-toolbox-for-initiating-agile-transformation",
      title: "The toolbox for initiating agile transformation",
      guest: [{ name: "David Ko" }],
    },
    "a-practical-guide-for-domain-driven-design-teams": {
      slug: "a-practical-guide-for-domain-driven-design-teams",
      title: "A practical guide for domain-driven design teams",
      guest: [{ name: "Zhangyi" }],
    },
    "start-from-scratch-essentials-of-game-development-agile-ddd": {
      slug: "start-from-scratch-essentials-of-game-development-agile-ddd",
      title:
        "Start from scratch - Essentials of Game Development : Agile x DDD",
      guest: [{ name: "Mia" }],
    },
    "tdd-ddd-bdd-well-explained": {
      slug: "tdd-ddd-bdd-well-explained",
      title: "TDD, DDD, & BDD Well Explained",
      guest: [{ name: "Fong" }],
    },
    "application-modernization-steps-and-implementation": {
      slug: "application-modernization-steps-and-implementation",
      title: "Application modernization steps and implementation",
      guest: [{ name: "Rex Wang" }],
    },
    "concept-model-what-why-and-how": {
      slug: "concept-model-what-why-and-how",
      title: "Concept Model: What, Why and How",
      guest: [{ name: "KK" }],
    },
    "that-year-the-pit-we-stepped-on-together": {
      slug: "that-year-the-pit-we-stepped-on-together",
      title: "That year, the pit we stepped on together",
      guest: [{ name: "Wade, Chien" }],
    },
    "autonomy-is-that-what-we-really-want": {
      slug: "autonomy-is-that-what-we-really-want",
      title: "Autonomy, is that what we really want?",
      guest: [{ name: "Evelyn Van Kelle" }, { name: "Kenny Baas-Schwegler" }],
    },
    "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing":
      {
        slug: "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing",
        title:
          "Insurance × DDD × Middle Platform × Microservices-Cathay Pacific Property Insurance BeSafe Platform Experience Sharing",
        guest: [{ name: "Andrew, Chang" }],
      },
    "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design":
      {
        slug: "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design",
        title:
          "It’s all about the domain, honey ! Experiences from 15 years of Domain-Driven Design",
        guest: [{ name: "Dr. Carola Lilienthal" }],
      },
    "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices": {
      slug: "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices",
      title:
        "Developing Domain Storytelling, or: How DDD influenced modeling practices",
      guest: [{ name: "Dr. Stefan Hofer" }],
    },
    "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory":
      {
        slug: "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory",
        title:
          "Rising from the ashes! “Agile Team Rising Model” helps you from defeat to victory",
        guest: [{ name: "Hermes" }],
      },
    "evolutionary-aws-lambda-with-hexagonal-architecture": {
      slug: "evolutionary-aws-lambda-with-hexagonal-architecture",
      title: "Evolutionary AWS Lambda with hexagonal architecture",
      guest: [{ name: "Luca Mezzalira" }],
    },
    "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model":
      {
        slug: "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model",
        title:
          "Towards DDD and microservices based on database formalization analysis demand development model",
        guest: [{ name: "Ben Lu" }],
      },
    "when-dci-conjunction-with-ddd": {
      slug: "when-dci-conjunction-with-ddd",
      title: "When DCI conjunction with DDD",
      guest: [{ name: "Teddy Chen" }],
    },
  },
};

export default memo(function Page() {
  return <Speeches {...i18n} />;
});
