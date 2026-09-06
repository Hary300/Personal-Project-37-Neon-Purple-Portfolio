import waveBackground from '@/assets/images/background/waveBackground.png';
import heroParticles from '@/assets/images/background/heroParticles.svg';
import contactParticles from '@/assets/images/background/contactParticles.svg';
import gridPattern from '@/assets/images/background/gridPattern.png';
import modalGridPattern from '@/assets/images/background/modalGridPattern.png';
import ellipse from '@/assets/images/background/ellipse.png';

interface BackgroundData {
  waveBackground: string;
  heroParticles: string;
  contactParticles: string;
  gridPattern: string;
  modalGridPattern: string;
  ellipse: string;
}

export const backgroundData: BackgroundData = {
  waveBackground,
  heroParticles,
  contactParticles,
  gridPattern,
  modalGridPattern,
  ellipse,
};
