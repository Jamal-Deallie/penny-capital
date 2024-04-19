'use client';

import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { Icons } from '@/components';

const RenderedMap = ({
  latitude = 35.668641,
  longitude = 139.750567,
  zoom = 14,
}: {
  latitude?: number;
  longitude?: number;
  zoom?: number;
}) => {
  return (
    <div className='w-full aspect-video relative'>
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
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN}>
        <Marker latitude={latitude} longitude={longitude}>
          <Icons.logo className='fill-accent w-6 h-6' />
        </Marker>
      </Map>
      {/* <div>
        <Icons.logo />
      </div> */}
    </div>
  );
};

export default RenderedMap;
