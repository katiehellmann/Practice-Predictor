/* eslint-disable  @typescript-eslint/no-explicit-any */

const getPredictedAge = async (name: string): Promise<any> => { // Consider a more specific return type
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch age data: ${res.status}`);
  }
  return res.json();
};

const getPredictedGender = async (name: string): Promise<any> => { // Consider a more specific return type
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch gender data: ${res.status}`);
  }
  return res.json();
};

const getPredictedCountry = async (name: string): Promise<any> => { // Consider a more specific return type
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch country data: ${res.status}`);
  }
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Prediction({ params }: Params) {
  try {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]) as [
      { age?: number },
      { gender?: string },
      { country: [{ country_id: string }] }
    ];

    return (
      <div>
        <div className="text-center m-8 p-12 rounded bg-blue-100/50">
          <h1 className="text-4xl pb-6 underline">Predicted Personal Info</h1>
          <h2 className="text-2xl pb-6">This information is based off of three different datasets.</h2>
          <p>Age: {age?.age}</p>
          <p>Gender: {gender?.gender}</p>
          <p>Country: {country?.country[0]?.country_id}</p>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching prediction data:", error);
    return (
      <div>
        <p>An error occurred while fetching prediction data.</p>
        {error?.message && <p>Error Message: {error.message}</p>}
      </div>
    );
  }
}
