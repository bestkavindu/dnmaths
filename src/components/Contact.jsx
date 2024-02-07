

const Contact = () => {
    const people = [
        {
          name: 'Hotline',
          role: 'Senior Designer',
          imageUrl:
            'https://static-00.iconduck.com/assets.00/phone-icon-1024x1024-bn4mirqi.png',
          twitterUrl: '#',
          linkedinUrl: '#',
        },
        {
            name: 'Technical Support',
            role: 'Senior ',
            imageUrl:
              'https://store-images.s-microsoft.com/image/apps.8453.13655054093851568.4a371b72-2ce8-4bdb-9d83-be49894d3fa0.7f3687b9-847d-4f86-bb5c-c73259e2b38e?h=464',
            twitterUrl: '#',
            linkedinUrl: '#',
          },
          {
            name: 'Technical Support',
            role: 'Senior ',
            imageUrl:
              'https://cdn-icons-png.flaticon.com/512/3670/3670070.png',
            twitterUrl: '#',
            linkedinUrl: '#',
          },
        // More people...
      ]
  return (
    <div className="bg-gray-200">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="items-center mx-auto  space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl text-center font-extrabold text-black tracking-tight sm:text-4xl">Contact</h2>
          </div>
          <ul role="list" className=" space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-white text-center rounded-3xl xl:px-10 xl:text-left hover:scale-110 transition duration-500 cursor-pointer">
                 <h1 className="text-center text-xl items-center text-black py-5">{person.name}</h1>
                <div className="text-center items-center space-y-6 xl:space-y-10">
               
                  <img className="mx-auto h-40 w-40 rounded-3xl xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                  <div className="items-center">

                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact