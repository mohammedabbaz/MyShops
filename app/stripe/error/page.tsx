import { Button } from "@/components/ui/button";
import { OctagonAlert } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="Section h-[calc(100vh-200px)]">
      <div className="flex flex-col items-center justify-center py-36">
        <OctagonAlert className="text-red-600 size-20 mx-auto my-10" />
        <div className="  text-center space-y-2">
          <h3 className="md:text-2xl text-base font-semibold text-center">
            Payment Unsuccessful!
          </h3>
          <p className="md:text-sm text-base font-semibold text-center">
            We're sorry, but there was an issue processing your payment. Please
            double-check your payment information and try again
          </p>

          <Button asChild>
            <Link href={"/"}>Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
