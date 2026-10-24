import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("prescriptions");

export const metadata = serviceMetadata(service);

export default function PrescriptionsPage() {
  return <ServicePage service={service} />;
}
