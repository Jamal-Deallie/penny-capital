'use client';

import Map from 'react-map-gl';
import Image from 'next/image';
// import styles from '@/styles/components/Map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Icons} from '@/components';

export default function RenderedMap({
  latitude = 1,
  longitude = 1,
  zoom = 14,
}: {
  latitude: number;
  longitude: number;
  zoom: number;
}) {
  return (
    <div>
      <Map
        mapLib={import('mapbox-gl')}
        scrollZoom={false}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: zoom,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}
      />
      <div>
        <Icons.logo />
      </div>
    </div>
  );
}
