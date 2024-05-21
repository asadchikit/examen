import React from "react";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GoDeviceMobile } from "react-icons/go";
import { CgScreen } from "react-icons/cg";
import { BsTabletLandscape } from "react-icons/bs";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceWatchStats } from "react-icons/tb";
import { TbCamera } from "react-icons/tb";
import { GrGamepad } from "react-icons/gr";
import { IoGitNetworkOutline } from "react-icons/io5";
import { PiSunDimBold } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Productcard from "./Productcard/Productcard";
import Productfillter from "./Productfillter/Productfillter";
import "./products.css"

function Products() {


  return (
    <div>
      <div className="container">
      <div className="products">
  <div className="products-home">
    <h1 className='products-homeh1'>
      <Link to="/">Home</Link>
    </h1>
    <GrNext />
    <h2 className='products-productsh2'>Products</h2>
  </div>
  <div className="products-categories">
    <div className="products-categories-categories">
      <GoDeviceMobile className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Mobile</h1>
    </div>

    <div className="products-categories-categories">
      <CgScreen className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Laptop</h1>
    </div>

    <div className="products-categories-categories">
      <BsTabletLandscape className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Tablet</h1>
    </div>

    <div className="products-categories-categories">
      <LuHeadphones className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Audio</h1>
    </div>

    <div className="products-categories-categories">
      <TbDeviceWatchStats className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Wearable</h1>
    </div>

    <div className="products-categories-categories">
      <TbCamera className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Camera</h1>
    </div>

    <div className="products-categories-categories">
      <GrGamepad className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Gaming</h1>
    </div>

    <div className="products-categories-categories">
      <IoGitNetworkOutline className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Network</h1>
    </div>

    <div className="products-categories-categories">
      <PiSunDimBold className='godevicemobile' />
      <h1 className='mobile-godevicemobile'>Accessories</h1>
    </div>
  </div>
  <div className="products-chips-start">
    <div className="chips">
      <h2 className='silver'>Silver</h2>
      <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
    </div>

    <div className="chips">
      <h2 className='silver'>Silver</h2>
      <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
    </div>

    <div className="chips">
      <h2 className='silver'>Silver</h2>
      <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
    </div>

    <div className="chips">
      <h2 className='silver'>Silver</h2>
      <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
    </div>

    <div className="chips">
      <h2 className='silver'>Silver</h2>
      <IoIosCloseCircleOutline className='IoIosCloseCircleOutline' />
    </div>
  </div>
  <div className="products-filters">
    <Productfillter />
    <Productcard />
  </div>
</div>

      </div>
    </div>
  )
}

export default Products 