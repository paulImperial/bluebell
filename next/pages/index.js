import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

export default function Index() {
  return (
    <Layout title={'Bluebell Therapy | Home'}>
	  <Hero />
	  <Contact />
    </Layout>
  );
}
