const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
}
const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
}
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
}


interface Params {
  params: {name: string}
}
export default async function Prediction({params}: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  //resolve all promises
  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

  return (
    <div>
      <div className="text-center m-8 p-12  rounded bg-blue-100/50">
        <h1 className="text-4xl pb-6 underline">Predicted Personal Info</h1>
        <h2 className="text-2xl pb-6">This information is based off of three different datasets.</h2>
        <p>Age: {age?.age}</p>
        <p>Gender: {gender?.gender}</p>
        <p>Country: {country?.country[0].country_id}</p>
        </div>
      </div>
  );
}
