import Image from 'next/image';
import shuffleImg from '@/assets/shuffle.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={shuffleImg} alt='' width={87} height={63} />
      <h1>Não sabe o que assistir?</h1>
    </header>
  );
}
