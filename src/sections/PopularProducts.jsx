import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section id="product" className=" max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-center gap-5">
        <h2 className=" text-4xl font-palanquin font-bold">Our <span className=" text-coral-red">Popular</span> Products</h2>
        <p>
          Experience the top-notch quality and style with our sougth after selections. discover a world of comfort, design, and value.
        </p>
      </div>

    </section>
  )
}

export default PopularProducts