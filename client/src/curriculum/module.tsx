import { HydrationData } from "../../../libs/types/hydration";
import { CurriculumDoc, ModuleData } from "../../../libs/types/curriculum";
import "./module.scss";
import { TopicIcon } from "./topic-icon";
import { PrevNext } from "./prev-next";
import { RenderCurriculumBody } from "./body";
import { CurriculumLayout } from "./layout";
import { topic2css, useCurriculumDoc } from "./utils";

export function CurriculumModule(props: HydrationData<any, CurriculumDoc>) {
  const doc = useCurriculumDoc(props as ModuleData);
  console.log(doc);
  return (
    <CurriculumLayout
      doc={doc}
      extraClasses={["curriculum-module", `topic-${topic2css(doc?.topic)}`]}
    >
      <header>
        {doc?.topic && <TopicIcon topic={doc?.topic} />}
        <h1>{doc?.title}</h1>
        {doc?.topic && <p>{doc?.topic}</p>}
      </header>
      <RenderCurriculumBody doc={doc} />
      <PrevNext doc={doc} />
    </CurriculumLayout>
  );
}
