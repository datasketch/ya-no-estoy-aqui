const defaultDescription =
  'Espacio en el que construimos In Memoriams  de las 237 mujeres víctimas de violencia feminicida, dentro del periodo en el que la cuarentena por COVID-19 fue más estricto en el país. Nos basamos en la metodología y casos presentados por el Observatorio de Feminicidios Colombia, al tiempo que buscamos a sus familiares y amigos para reconstruir los perfiles de ellas: las que ya no están.';

export default (title, description, image) => {
  const desc = description || defaultDescription;
  return [
    {
      name: 'description',
      content: desc,
    },
    {
      itemprop: 'name',
      content: title,
      hid: 'itemprop-name',
    },
    {
      itemprop: 'description',
      content: desc,
      hid: 'itemprop-description',
    },
    {
      itemprop: 'image',
      content: image,
      hid: 'itemprop-image',
    },
    {
      property: 'og:url',
      content: '',
      hid: 'og:url',
    },
    {
      property: 'og:title',
      content: title,
      hid: 'og:title',
    },
    {
      property: 'og:description',
      content: desc,
      hid: 'og:description',
    },
    {
      property: 'og:image',
      content: image,
      hid: 'og:image',
    },
    {
      name: 'twitter:title',
      content: title,
      hid: 'twitter:title',
    },
    {
      name: 'twitter:description',
      content: desc,
      hid: 'twitter:description',
    },
    {
      name: 'twitter:image',
      content: image,
      hid: 'twitter:image',
    },
  ];
};
