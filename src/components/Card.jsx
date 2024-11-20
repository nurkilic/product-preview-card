import imageParfumDesktop from "../assets/images/image-product-desktop.jpg";
import imageParfumMobile from "../assets/images/image-product-mobile.jpg";
import icon from "../assets/images/icon-cart.svg";

const Card = () => {
  return (
    <div className="max-w-[37.5rem] h-auto w-full rounded-lg flex max-sm:flex-col max-sm:rounded-lg m-6">
      <article className="w-1/2 max-sm:w-full rounded-l-lg">
        <img
          className="max-sm:hidden  rounded-l-lg object-cover h-full"
          src={imageParfumDesktop}
          alt=""
        />
        <img
          className="max-sm:block hidden rounded-t-lg "
          src={imageParfumMobile}
          alt=""
        />
      </article>
      <article className=" w-1/2 max-sm:w-full max-sm:rounded-b-lg max-sm:rounded-none bg-white rounded-r-lg p-6 ">
        <h2 className="">Perfume</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="mb-8 flex items-center">
          <span id="price-span">$149.99</span>
          <del>$169.99</del>
        </div>
        <div className="button flex items-center justify-center">
          <img src={icon} className="pr-3 h-4" alt="" />
          <span id="add-to-cart-span">Add to Cart</span>
        </div>
      </article>
    </div>
  );
};

export default Card;
