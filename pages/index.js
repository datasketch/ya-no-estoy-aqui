import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import victims from '../db.json';

export async function getStaticProps() {
  return {
    props: {
      victims,
    },
  };
}

function HomePage({ victims }) {
  const { basePath } = useRouter();
  const withPrefix = (str) => `${basePath}${str}`;
  return (
    <>
      <Head>
        <title>Ya no estoy aquí · Cuestión Pública</title>
      </Head>
      <section className="intro">
        <img
          className="w-40 mx-auto"
          src="/ya-no-estoy-aqui/media/title.png"
          alt="Ya no estoy aquí"
        />
        <img className="w-64 mx-auto -mt-6" src="/ya-no-estoy-aqui/media/cover.png" alt="" />
        <div className="text-center text-xl font-playfair text-wild-blue-yonder font-semibold">
          <p>
            "Soy la mujer que piensa.
            <br />
            Algún día mis ojos encenderan luciérnagas."
          </p>
          <p className="mt-4 italic">Gioconda Belli</p>
        </div>
      </section>
      <section className="px-4 py-6 shadow-inner">
        <div className="w-10/12 mx-auto">
          <p className="font-playfair">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In numquam
            sint officiis suscipit mollitia veniam alias consequatur explicabo
            maxime molestias consectetur ad, deserunt magnam, reprehenderit
            quasi necessitatibus! Doloribus, maiores nostrum.
          </p>
          <img className="mx-auto w-16 mt-4" src="/media/victims.png" alt="" />
          <ul className="space-y-2 mt-6 font-playfair text-silver-chalice">
            {victims.map((v) => (
              <li key={v.slug}>
                <Link href={v.slug}>
                  <a className="hover:text-sizzling-red focus:text-sizzling-red">
                    {v.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePage;
