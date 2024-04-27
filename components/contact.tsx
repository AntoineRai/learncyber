import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"

const Contact = () => {

   

    return (
        <div className="w-full px-16 mt-20 mb-24">
            <Card className="p-2">
                <h1 className="underline text-xl ml-2">Contact</h1>
                <div>
                    <div className="flex flex-row items-center justify-between">
                        <Input type="text" placeholder="Nom" className="mr-2 mt-6"/>
                        <Input type="text" placeholder="Prénom" className="ml-2 mt-6"/>
                    </div>
                    <Input type="email" placeholder="Email" className="my-4" />
                    <Textarea placeholder="Un message à nous faire passer ?" className="my-4" />
                    <div className="flex flex-row items-end justify-end">
                        <Button>Send message</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
  };
  
export default Contact;