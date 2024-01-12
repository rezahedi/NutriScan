import { additivesList } from "@/constants/additives";
import { AdditiveProps } from "@/types";
import { getAdditivesDetails } from "@/utils";

async function AdditivesDetail({additives}: {additives: string[]}) {

  const additivesDetail: AdditiveProps[] = await getAdditivesDetails(additives);

  return (
    <div className="flex flex-col gap-4">
      {additivesDetail.map((additive, index) => (
        <div key={index} className='flex flex-col gap-1 text-sm'>
          {additive.risk !== -1 && <>
            <div className="flex gap-2 items-center">
              <span style={{
                backgroundColor: `${additive.color}`
              }} className='rounded-2xl w-4 h-4'></span>
              <h3>{additive.number}: {additive.name}</h3>
            </div>
            {additive.description && <p>{additive.description}</p>}
            {additive.use && <p>{additive.use}</p>}
          </>}
        </div>
      ))}
    </div>
  )
}

export default AdditivesDetail