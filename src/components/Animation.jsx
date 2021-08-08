import React from 'react';
import Lottie from 'react-lottie';

import * as animationLottie from '../animation.json';

const dashboarAnimation = {
  loop: true,
  autoplay: true,
  animationData: animationLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Animation() {
  return (
    <div className="home__animation">
      <Lottie
          options={ dashboarAnimation }
        />
    </div>
  )
}