import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

import image1 from '../public/images/1.jpg';
import image2 from '../public/images/2.jpg';
import image3 from '../public/images/3.jpg';
import image4 from '../public/images/4.jpg';

export default function Home() {
  useEffect(() => {
    const pannerCode = () => {
      const panTag = document.getElementById('panner-inner');
      let currentX = 0;
      let currentY = 0;
      let aimX = 0;
      let aimY = 0;
      const updateAim = function (event) {
        // window width/height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const worldWidth = panTag.clientWidth;
        const worldHeight = panTag.clientHeight;

        // total pan size
        const panX = worldWidth - windowWidth;
        const panY = worldHeight - windowHeight;

        // percentage x/y
        const px = event.pageX / windowWidth;
        const py = event.pageY / windowHeight;

        // how much shift from the center
        aimX = panX * px;
        aimY = panY * py;
      };
      const animate = function () {
        currentX += (aimX - currentX) * 0.05;
        currentY += (aimY - currentY) * 0.05;
        panTag.style.left = -1 * currentX + 'px';
        panTag.style.top = -1 * currentY + 'px';
        requestAnimationFrame(animate);
      };
      animate();
      document.addEventListener('mousemove', function (event) {
        updateAim(event);
      });
      document.addEventListener('touchmove', function (event) {
        updateAim(event);
      });
    };

    const clickToEnter = () => {
      const clickArea = document.getElementById('click-me');
      clickArea.addEventListener('click', () => {
        clickArea.classList.add('clicked');
        clickArea.style.opacity = '0';
        setTimeout(() => {
          clickArea.style.display = 'none';
        }, 1000);
      });
    };

    pannerCode();
    clickToEnter();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Fischer — Digital Design Lead</title>
        <meta
          name='description'
          content='Harry Fischer — Digital Design Lead'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.bigh} id='click-me'>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </section>

      <main className={styles.panner} id='panner'>
        <button>Information</button>
        <div className={styles.inner} id='panner-inner'>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image1} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image2} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image3} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image4} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image1} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image2} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image3} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image4} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image1} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image2} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image3} />
          </div>
          <div className={styles.item}>
            <details>
              <summary>
                <h2>Project title</h2>
              </summary>
              Hello hello hello hello hello hello hello hello hello hello hello
            </details>
            <Image alt='/' src={image4} />
          </div>
        </div>
      </main>
    </div>
  );
}
