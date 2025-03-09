import { useState } from "react";
import { useData } from "../hooks/useData";

export default function ShippingFormWithHook({ country }) {
  const cities = useData(`/api/cities?country=${country}`);
  const [city, setCity] = useState(null);
  const areas = useData(city ? `api/areas?city=${city}` : null);
}
