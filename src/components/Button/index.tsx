import Link from 'next/link';
import styles from './styles.module.scss';

type ButtonProps = {
  route: string;
  description: string;
};

export default function Button({ route, description }: ButtonProps) {
  return (
    <Link href={route}>
      <button className={styles.button}>
        {/* <TbPaintOff /> */}
        {description}
      </button>
    </Link>
  );
}
