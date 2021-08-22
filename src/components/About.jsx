import React from 'react';
import Lottie from 'react-lottie';

import * as animationLottie from '../about.json';

const aboutAnimation = {
  loop: true,
  autoplay: true,
  animationData: animationLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function About() {
  return (
    <div className="about__animation">
      <Lottie
          options={ aboutAnimation }
        />
    </div>
  )
}