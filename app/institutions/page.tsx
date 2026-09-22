
import { ListPage } from "@/components/list-page"
import { institutions } from "@/lib/carawin-content"
export default function Page(){return <ListPage eyebrow="Institutions" title="Build education ecosystems that are ready for what comes next." description="Carawin works across schools, colleges and universities to connect infrastructure, learning, administration, data and AI." items={institutions.map(x=>({name:x.name,slug:`/institutions/${x.slug}`,desc:x.desc}))}/>}

