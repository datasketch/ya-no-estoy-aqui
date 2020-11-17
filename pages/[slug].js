import Head from 'next/head';
import victims from '../db.json';

export async function getStaticPaths() {
  return {
    paths: victims.map((record) => `/${record.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const victim = victims.find((record) => record.slug === params.slug);
  return {
    props: { victim },
  };
}

function ProfilePage({ victim }) {
  return victim ? (
    <>
      <Head>
        <title>{victim.name} · Cuestión Pública</title>
      </Head>
      <p>Página · {victim.name}</p>
    </>
  ) : null;
}

export default ProfilePage;
