import React from 'react'

function Gallery() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="tabs tabs-boxed">
  <a className="px-12 tab">Tab 1</a> 
  <a className="tab tab-active">Tab 2</a> 
  <a className="tab">Tab 3</a>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/cardtest.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
  </div>
</div>
  )
}

export default Gallery