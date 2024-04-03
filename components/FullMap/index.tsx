"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export default function FullMap() {
  return (<>
    <div className="w-full">
      <YMaps>
        <div className="grayscale mb-3">
          <Map defaultState={{ center: [45.049240, 35.375063], zoom: 14 }}>
            <Placemark geometry={[45.049240, 35.375063]} />
          </Map>
        </div>
      </YMaps>
    </div>
  </>)
}