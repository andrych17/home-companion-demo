import ServicePage, { serviceMetadata } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("community");

export const metadata = serviceMetadata(service);

export default function CommunityPage() {
  return <ServicePage service={service} />;
}
