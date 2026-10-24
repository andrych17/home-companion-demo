import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("shopping");

export const metadata = serviceMetadata(service);

export default function ShoppingPage() {
  return <ServicePage service={service} />;
}
