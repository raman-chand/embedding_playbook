import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui";
import { Button } from "components/ui"
import { Input } from "components/ui"
import { Label } from "components/ui"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui"
import Image from 'next/image'

import { TableauEmbed } from 'components';

export const Dataoverview = () => {
  return (
    <TabsContent value="dataoverview" className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-12">
        <div className="col-span-7 dark:bg-stone-900">
          <div className="grid gap-3 grid-flow-row">
            <Card className="dark:bg-stone-900">
              <CardHeader>
                <CardTitle>Estimation and forecast</CardTitle>
                <CardDescription>
                The graph shows actual data fluctuations until mid-2024, followed by a forecasted sharp increase with a confidence interval indicating uncertainty in the estimates until the end of 2024.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TableauEmbed
                  src='https://dub01.online.tableau.com/t/kevinmazille/views/LightspeedEmbeddedv1/ForecastandEstimation'
                  width={700}
                  height={300}
                  hideTabs={true}
                  device='default'
                  toolbar='hidden'
                />
              </CardContent>
            </Card>
            <Card className="dark:bg-stone-900">
              <CardHeader>
                <CardTitle>Uneven profitability in North America</CardTitle>
                <CardDescription>
                  Price adjustments have performed well in Canada and most of the United States.<br />
                  <strong>Please hover on the map to see product details</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TableauEmbed
                  src='https://dub01.online.tableau.com/t/kevinmazille/views/LightspeedEmbeddedv1/MapNOAM'
                  width={700}
                  height={400}
                  hideTabs={true}
                  device='default'
                  toolbar='hidden'
                />
              </CardContent>
            </Card>
            <Card className="dark:bg-stone-900">
              <CardHeader>
                <CardTitle>Business Unit Performance</CardTitle>
                <CardDescription>
                  Vendo, Ikentoo and Chronogolf are outperforming there initial target !
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TableauEmbed
                  src='https://dub01.online.tableau.com/t/kevinmazille/views/LightspeedEmbeddedv1/ByBusinessUnit'
                  width={700}
                  height={300}
                  hideTabs={true}
                  device='default'
                  toolbar='hidden'
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col-span-5 dark:bg-stone-900">
          <div className="grid gap-3 grid-flow-row">
            <Card className="dark:bg-stone-900">
              <CardHeader>
                <CardTitle>🔔 Lightspeed News</CardTitle>
                <CardDescription>
                  Top 5 last news
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Notifications />
              </CardContent>
            </Card>
            <Card className="dark:bg-stone-900">
              <CardHeader>
                <CardTitle>📹 Replay Company Kick Off </CardTitle>
                <CardDescription>
                  Quick link to the Company Kick Off video
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PriceLists />
              </CardContent>
            </Card>
            <NewPriceList />
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

const Notifications = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback className="bg-emerald-500 text-white">⚠️</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-bold leading-none text-red-600"><a href="http://localhost:3000/product/golf#strategic-initiatives" target="_blank" rel="noopener noreferrer">➡️ Major changes in the target for the Golf group Product ⛳</a></p>
        </div>
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback className="bg-blue-500 text-white">🚀</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none"><a href="https://www.lightspeedhq.com/news/lightspeed-commerce-announces-table-side-roster-of-new-product-innovations/" target="_blank" rel="noopener noreferrer">Lightspeed Commerce Announces Table Side; Roster of New Product Innovations Designed to Increase Customer Efficiency and Cost Effectiveness</a></p>
        </div>
      </div>

      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback className="bg-red-500 text-white">⌛</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none"><a href="https://www.lightspeedhq.com/news/lightspeed-and-myrtle-beach-area-golf-course-owners-association-form-strategic-partnership/" target="_blank" rel="noopener noreferrer">Lightspeed and Myrtle Beach Area Golf Course Owners Association Form Strategic Partnership to Elevate Golf Experiences​</a></p>
        </div>
      </div>
      
    </div>
  )
}

const PriceLists = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
    <Image
      src="https://i.ibb.co/Z8Shs1j/JD-Post2.jpg"
      width={500}
      height={300}
      alt="Replay Company Kick Off"
    />
      </div>
    </div>
  )
}

const NewPriceList = () => {

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create a new Price List</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="segment">Segment</Label>
              <Select>
                <SelectTrigger id="segment">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="consumer">Consumer</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="office">Home Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between pb-11">
        <Button >Cancel</Button>
        <Button className='bg-[#FD4926]'>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
