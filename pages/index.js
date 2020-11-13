import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
  return {
    props: {
      victims: [
        {
          name: 'Ana Elsy Panesso',
          slug: 'ana-elsy-panesso',
        },
        {
          name: 'Ana María Correa García',
          slug: 'ana-maria-correa-garcia',
        },
        {
          name: 'Ana Mercedes Rivas Ramos',
          slug: 'ana-mercedes-rivas-ramos',
        },
        {
          name: "Inés Acuña Rodríguez, 'La Flaca'",
          slug: 'ines-acuna-rodriguez',
        },
        {
          name: 'Isabella Hoyos Porras',
          slug: 'isabella-hoyos-porras',
        },
        {
          name: 'Michel Lara',
          slug: 'michel-lara',
        },
        {
          name: 'María Alejandra Meriño Escalante',
          slug: 'maria-alejandra-merino-escalante',
        },
        {
          name: 'Mini Johana Salazar Aguiño',
          slug: 'mini-johana-salazar-aguiño',
        },
        {
          name: 'Miriam Vargas Castaño',
          slug: 'miriam-vargas-castano',
        },
      ],
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
          src="/media/title.png"
          alt="Ya no estoy aquí"
        />
        <img className="w-64 mx-auto -mt-6" src="/media/cover.png" alt="" />
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
                <a
                  href="#"
                  className="hover:text-sizzling-red focus:text-sizzling-red"
                >
                  {v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePage;
