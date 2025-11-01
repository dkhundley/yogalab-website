import { Link } from 'react-router-dom';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich, bold single or double shot' },
      { name: 'Americano', description: 'Espresso with hot water' },
      { name: 'Latte', description: 'Espresso with steamed milk' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk foam' },
      { name: 'Cold Brew', description: 'Smooth, refreshing cold coffee' },
    ]
  },
  {
    category: 'Teas',
    items: [
      { name: 'Chamomile', description: 'Calming herbal tea' },
      { name: 'Green Tea', description: 'Antioxidant-rich and energizing' },
      { name: 'Earl Grey', description: 'Classic black tea with bergamot' },
      { name: 'Peppermint', description: 'Refreshing and soothing' },
    ]
  },
  {
    category: 'Açai Bowls',
    items: [
      { name: 'Classic Açai', description: 'Açai blend with granola, banana, and berries' },
      { name: 'Tropical Bowl', description: 'Açai with mango, coconut, and pineapple' },
      { name: 'Protein Power', description: 'Açai with protein powder, almonds, and chia seeds' },
    ]
  }
];

export default function Coffee() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">RELATE</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            LAB COFFEE
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lab Coffee exists to allow our community to build relationships. Our full menu includes coffee, 
            teas, and açai bowls, creating the perfect space for connection and community wellness.
          </p>
        </div>

        {/* Coffee Shop Features */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Community Connection</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                A welcoming space designed to foster meaningful relationships and conversations within our community.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Quality Ingredients</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                We source the finest coffee beans, organic teas, and fresh ingredients to nourish your body and soul.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Relaxing Atmosphere</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Enjoy a calm, peaceful environment perfect for unwinding, working, or catching up with friends.
              </dd>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Menu</h3>
            <p className="mt-4 text-lg text-gray-600">Carefully crafted beverages and nourishing bowls</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {menuItems.map((section) => (
              <div key={section.category} className="bg-gray-50 rounded-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h4>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name}>
                      <dt className="font-semibold text-gray-900">{item.name}</dt>
                      <dd className="text-gray-600 text-sm">{item.description}</dd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Visit us at our Bloomington location for the full Lab Coffee experience.
          </p>
          <Link
            to="/contact"
            className="rounded-md bg-black px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
          >
            Visit Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
