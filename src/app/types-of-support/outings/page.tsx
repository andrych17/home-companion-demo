import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("outings");

export const metadata = serviceMetadata(service);

export default function OutingsPage() {
  return <ServicePage service={service} />;
}
