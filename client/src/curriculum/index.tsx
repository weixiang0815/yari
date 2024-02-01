import useSWR from "swr";
import { Route, Routes } from "react-router-dom";

import { ReactComponent as LandingSVG } from "../../public/assets/curriculum/cur-landing-top.svg";
import { HydrationData } from "../../../libs/types/hydration";
import { CurriculumModuleOverview } from "./overview";
import { CurriculumModule } from "./module";
import { CurriculumAbout } from "./about";
import { CurriculumLanding } from "./landing";

import "./index.scss";
import "./no-side.scss";

export function Curriculum(appProps: HydrationData) {
  return (
    <Routes>
      <Route path="/" element={<CurriculumLanding {...appProps} />} />
      <Route path="/about/" element={<CurriculumAbout {...appProps} />} />
      <Route
        path="/:module/"
        element={<CurriculumModuleOverview {...appProps} />}
      />
      <Route path="/:module/*" element={<CurriculumModule {...appProps} />} />
    </Routes>
  );
}
