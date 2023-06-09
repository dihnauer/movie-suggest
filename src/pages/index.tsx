import { useState } from 'react';
import Image from 'next/image';
import { PuffLoader } from 'react-spinners';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from '@/styles/home.module.scss';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function Home() {
  const [data, setData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  async function randomMovie() {
    setLoading(true);

    const pages = Array.from({ length: 500 });
    const randomPage = Math.floor(Math.random() * pages.length);

    const payload = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=${randomPage}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      payload
    );
    const data = await response.json();

    const randomInternalPage = Math.floor(Math.random() * data.results.length);
    const randomMovie = data.results[randomInternalPage];

    const movie = {
      id: randomMovie.id,
      title: randomMovie.title,
      overview: randomMovie.overview,
      poster_path: `https://image.tmdb.org/t/p/w154${randomMovie.poster_path}`,
    };

    setLoading(false);
    return setData(movie);
  }

  return (
    <>
      <Header />

      {data && (
        <main className={styles.main}>
          {loading ? (
            <PuffLoader color='#fff' />
          ) : (
            <>
              <Image
                src={data.poster_path}
                alt={data.title}
                title={data.title}
                width={154}
                height={243}
                priority
              />

              <div>
                <h3>{data.title}</h3>

                {data.overview ? (
                  <p>{data.overview}</p>
                ) : (
                  <p>Oops! Parece que não conseguimos encontrar a sinopse desse filme.</p>
                )}
              </div>
            </>
          )}
        </main>
      )}

      <Footer onClick={randomMovie} isLoading={loading} />
    </>
  );
}
