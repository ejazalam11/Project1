// import React from 'react'
import * as React from "react";
import Details from "@/app/Details/page";
import { Button } from "@/components/ui/button";
import VillaPic from "../../Images/fern-logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Image } from "lucide-react";
import Image from "next/image";

export default function Fernvilla() {
  return (
    <div className="relative z-10">
      <div className="w-[350px] h-[370px] bg-green-900 bg-opacity-60 absolute left-[700px] -top-[430px] rounded-lg">
        <Image src={VillaPic} alt="pic" />
        <hr className="bg-slate-100 h-[2px] w-44 ml-[65px]" />
        <h1 className="uppercase text-white font-semibold text-center mt-3 text-lg">
          it's a place your <br /> Highness
        </h1>
        <div className="flex justify-evenly mt-10">
          <h3 className="text-white">
            {" "}
            4 <span>Bedroom |</span>
          </h3>
          <h3 className="text-white">
            {" "}
            3 <span>Levels |</span>
          </h3>
          <h3 className="text-white"> 4245 sq. ft.</h3>
        </div>
        <button
          onClick={Details}
          className="bg-green-400 p-3 w-[200px] flex justify-center items-center ml-20 mt-4 group relative"
        >
          <span className="group-hover:mr-2 transition-all">Explore More</span>
          <span className="hidden group-hover:inline-block transition-all duration-300 text-white">
            &rarr;
          </span>
        </button>
      </div>
    </div>
    // <Card className="w-[350px]">
    //   <CardHeader>
    //     <CardTitle>Create project</CardTitle>
    //     <CardDescription>Deploy your new project in one-click.</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <form>
    //       <div className="grid w-full items-center gap-4">
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="name">Name</Label>
    //           <Input id="name" placeholder="Name of your project" />
    //         </div>
    //         <div className="flex flex-col space-y-1.5">
    //           <Label htmlFor="framework">Framework</Label>
    //           <Select>
    //             <SelectTrigger id="framework">
    //               <SelectValue placeholder="Select" />
    //             </SelectTrigger>
    //             <SelectContent position="popper">
    //               <SelectItem value="next">Next.js</SelectItem>
    //               <SelectItem value="sveltekit">SvelteKit</SelectItem>
    //               <SelectItem value="astro">Astro</SelectItem>
    //               <SelectItem value="nuxt">Nuxt.js</SelectItem>
    //             </SelectContent>
    //           </Select>
    //         </div>
    //       </div>
    //     </form>
    //   </CardContent>
    //   <CardFooter className="flex justify-between">
    //     <Button variant="outline">Cancel</Button>
    //     <Button>Deploy</Button>
    //   </CardFooter>
    // </Card>
  );
}
