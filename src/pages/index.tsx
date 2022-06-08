import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/Button';
import styles from './home.module.scss';

import paintImg from '../../public/3_3.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tecno Thiner | Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.hero}>
          <h1>TECNO THINER</h1>
          <p>
            <span>Desde 2002</span> atendendo suas necessidades e oferecendo soluções ideiais para
            sua empresa
          </p>
        </div>
      </main>

      <section className={styles.section1Container}>
        <div className={styles.hero1Section1}>
          <h1>O que você procura?</h1>
          <div className={styles.buttonsHero1}>
            <Button description='Solventes' route='/products/solvents' />
            <Button description='Tintas' route='/products/paints' />
          </div>
        </div>

        <div className={styles.hero2Section1}>
          <h1>Não encontrou o que procurava?</h1>
          <Button description='Fale Conosco' route='/products/paints' />
        </div>

        <div className={styles.section2Container}>
          <h1>Sustentabilidade:</h1>
          <h3>Um futuro melhor para todos</h3>
        </div>
      </section>
    </>
  );
};

export default Home;
