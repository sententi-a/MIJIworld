import styled from "styled-components";
import useKakaoMap from "@hooks/useKakaoMap";
import { useMap } from "@hooks/queries/map";

interface RestMapProps {
  restName: string;
  address: string;
  krName: string;
}

export default function RestMap({ restName, address, krName }: RestMapProps) {
  const { data } = useMap(restName);

  useKakaoMap({
    mapId: data?.map_id,
    name: krName,
    address: address,
  });

  return <MapContainer id="map"></MapContainer>;
}

const MapContainer = styled.div`
  width: 60%;
  height: 25vmax;
  margin: 10px auto;
`;
