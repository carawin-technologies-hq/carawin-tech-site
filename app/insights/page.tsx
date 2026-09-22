
import { ListPage } from "@/components/list-page"
const items=[['AI & Education','/insights/ai-education','Thinking on how intelligence is changing learning.'],['Future of Schools','/insights/future-schools','Ideas for future-ready school ecosystems.'],['Digital Universities','/insights/digital-universities','Building connected higher education systems.'],['Government Technology','/insights/government-technology','Technology and transformation at system scale.'],['STEM & Innovation','/insights/stem-innovation','Making, experimentation and future skills.'],['Career Intelligence','/insights/career-intelligence','Connecting learning with future pathways.']]
export default function Page(){return <ListPage eyebrow="Insights" title="Thinking ahead of the classroom." description="Research, ideas and perspectives across AI, education, digital universities, government technology, STEM, teacher technology and career intelligence." items={items.map(([name,slug,desc])=>({name,slug,desc}))}/>}

