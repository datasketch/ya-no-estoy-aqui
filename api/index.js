import slugify from 'slugify';

async function getData() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbywq9AJvYXrR4d2IVY9NFM3F2QBzGZN2_LPdAU8Y4hUfmiU8jJvm72XVO-YREDlilt7/exec')
    const { data } = await response.json()
    const victims = data.dataviz
      .filter((victim) => victim.visible === 1)
      .map((victim) => ({
        fullname: `${victim['Nombre']} ${victim['Apellidos']}`.trim(),
        slug: slugify(`${victim['Nombre']} ${victim['Apellidos']}`, {
          lower: true,
        }),
        ...victim,
      }));
    return { victims, error: null };
  } catch (error) {
    return { victims: null, error };
  }
}

export { getData };
