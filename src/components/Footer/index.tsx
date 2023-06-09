import Image from 'next/image';
import { PuffLoader } from 'react-spinners';

import shuffleImg from '@/assets/shuffle.svg';

import styles from './styles.module.scss';

interface FooterProps {
  onClick: () => void;
  isLoading: boolean;
}

export function Footer({ onClick, isLoading = false }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <button type='button' onClick={onClick} disabled={isLoading}>
        {isLoading ? (
          <PuffLoader size={25} color='#56ccf2' />
        ) : (
          <Image src={shuffleImg} alt='' width={36} height={25} />
        )}
        Encontrar filme
      </button>

      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
      </p>
    </footer>
  );
}
