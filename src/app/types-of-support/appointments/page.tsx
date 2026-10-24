import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("appointments");

export const metadata = serviceMetadata(service);

export default function AppointmentsPage() {
  return <ServicePage service={service} />;
}
