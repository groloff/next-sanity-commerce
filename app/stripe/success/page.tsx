import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCheck } from "lucide-react";
import Link from "next/link";

const stripeSuccess = () => {
  return (
    <div className="h-screen">
        <div className="mt-32 md:max-w-[50vw] mx-auto flex flex-col content-center">
            <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
            <div className="text-center">
                <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p className="font-medium mb-10">Have a great day!</p>

          <Button asChild>
            <Link href="/" className="flex gap-2 items-center">
                <ArrowLeft />
            GO Back</Link>
          </Button>
            </div>
        </div>

    </div>
  )
}
export default stripeSuccess;