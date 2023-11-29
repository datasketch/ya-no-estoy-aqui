import axios from 'axios'
import slugify from 'slugify';
import data from '../data/victims.json'

async function getData() {
  try {
    // const response = await axios.get('https://script.google.com/macros/s/AKfycbywq9AJvYXrR4d2IVY9NFM3F2QBzGZN2_LPdAU8Y4hUfmiU8jJvm72XVO-YREDlilt7/exec')
    const victims = data
      .filter((victim) => victim.visible === 1 && victim['Nombre'] && victim['Apellidos'])
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
