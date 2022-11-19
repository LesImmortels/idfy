import { useHistory, useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    href: '#',
    imageSrc: 'https://cdn.discordapp.com/attachments/1042909917452968060/1043304806267244594/unknown.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 2,
    href: '#',
    imageSrc: 'https://cdn.discordapp.com/attachments/1042909917452968060/1043305380236763256/unknown.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }, {
    id: 3,
    href: '#',
    imageSrc: 'https://cdn.discordapp.com/attachments/1042909917452968060/1043305495001313310/unknown.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Generate() {

  const { id } = useParams();

    return (
    <div className="text-white w-screen h-screen min-w-full">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-white">Massart Blocks:</h2>
        <h2 className="text-xs font-light tracking-tight text-gray-400 ">#{id}</h2>
        <p className='text-xs tracking-tighter font-light text-red-500'>Gas fees are paid per registration</p>
        <div className="mt-6">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-row">
                <div className="w-36 h-36 mb-4 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center h-full w-full"
                    />
                </div>
                <div className='pl-8'>
                  <div className='flex flex-col justify-end'>
                    <div>
                      Registration Period:
                      <div className='flex flex-row mt-2'>
                        <input type="number" id="quantity" placeholder='1'  name="quantity" min="1" max="100" className='border-b w-12 mr-2 font-light text-sm' />
                        <p className='font-light text-sm'>Year</p>
                      </div>
                      <div className='pt-4'>
                        <p className='text-xs text-gray-500'>Estimated Total:</p>
                        <p>4 MASSA + 1.1 MASSA gas fee</p>
                      </div>
                    </div>
                      <button class="bg-transparent font-light hover:bg-blue-500 text-blue-2–00 hover:text-white py-0.5 px-4 border border-blue-500 hover:border-transparent rounded">
                        Start Bid
                      </button>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
