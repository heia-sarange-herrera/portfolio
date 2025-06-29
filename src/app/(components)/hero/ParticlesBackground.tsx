'use client';

import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

export default function ParticlesWrapper() {
  return (
    <ParticlesBg type="square" bg={true} color='#ffffff'/>
  );
}
