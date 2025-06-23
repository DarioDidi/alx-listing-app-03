import BookingSection from "@/components/property/BookingSection";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import CustomBackground from "@/components/common/CustomBackground";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>

  return (
    <CustomBackground>
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection reviews={[]} />
    </CustomBackground>
  )
}
