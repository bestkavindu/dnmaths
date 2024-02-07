

export default function Card() {
  return (
    <div className="relative bg-white ">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/271771588_133060519179417_4440845467609018861_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHVrMtWXlHFJqXLo_sQ_vu2CV4IGyDoHZgJXggbIOgdmEI8jPH59dEbcOKhw1ng8zyOdR6N6Pc7ISShBcOgwq00&_nc_ohc=voFWoH3YkPYAX8AgcP4&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfBLzCMPKba5AWv6nn-bLzMTqGhVkXVbfxnzvoA_KGrjGw&oe=65C59408"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deliver what your customers want every time
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
            sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
            deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">24/7</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">99.9%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Calories</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">100k+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}