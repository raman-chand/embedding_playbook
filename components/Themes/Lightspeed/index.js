import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui";

import { Optimization } from './Optimization';
import { Dataoverview } from './DataOverview';


export const Lightspeed = () => {
  return (
    <Tabs defaultValue="dataoverview" className="space-y-3">
      <TabsList>
        <TabsTrigger value="dataoverview">
         Data Overview
        </TabsTrigger>
        <TabsTrigger value="optimization">
          Optimization
        </TabsTrigger>
      </TabsList>
      <section className="min-h-[892px]">
        <Optimization />
        <Dataoverview />
      </section>
    </Tabs>
  )
}
