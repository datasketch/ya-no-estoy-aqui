import GSheetReader from '@ddazal/gsheetreader';
import slugify from 'slugify';

const id = '1EDoBOrZIh2U58oMGdhz6nMDZSfTqjrQlSbGtKXNoexE';

async function getData() {
  try {
    const reader = new GSheetReader();
    const results = await reader.getJSON(id);
    const victims = results.data
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
