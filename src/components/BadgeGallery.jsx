
import React, { useEffect, useState } from 'react';

export function BadgeGallery() {

    const imageList = [
        'base.svg',
        'bolt.svg',
        'cabify.svg',
        'MadridMetro-1.svg',
        'MadridMetro-2.svg',
        'MadridMetro-3.svg',
        'MadridMetro-4.svg',
        'MadridMetro-5.svg',
        'MadridMetro-6.svg',
        'MadridMetro-7.svg',
        'MadridMetro-8.svg',
        'MadridMetro-9.svg',
        'MadridMetro-10.svg',
        'MadridMetro-R.svg',
        'MadridMetro-BusInterurbano_523.svg',
        'MadridMetro-EMT_10.svg',
        'MadridMetro-Urbano_1.svg',
        'Madrid_Logo_Metro_Ligero_ML1.svg',
        'Madrid_Logo_Metro_Ligero_ML2.svg',
        'Madrid_Logo_Metro_Ligero_ML3.svg',
        'Madrid_Logo_Metro_Ligero_ML4.svg',
        'MadridCercanias-C2.svg',
        'MadridCercanias-C3.svg',
        'MadridCercanias-C4.svg',
        'MadridCercanias-C4a.svg',
        'MadridCercanias-C4b.svg',
        'MadridCercanias-C7.svg',
        'MadridCercanias-C8.svg',
        'MadridCercanias-C8a.svg',
        'MadridCercanias-C8b.svg',
        'MadridCercanias-C10.svg',
        'MadridCercanias-CIVIS.svg',
    ];

  return (
    <section class="badge-gallery">
      {imageList.map((imageName, index) => {
        const src = `/${imageName}`;
        return <img key={index} src={src} alt={`Badge ${index + 1}`} />;
      })}
    </section>
  );
}
