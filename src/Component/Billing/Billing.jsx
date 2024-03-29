import React from "react";
import billingimg from "../../assets/billing.png";
import appstoreImg from "../../assets/appstore.png";
import playstoreImg from "../../assets/playstore.png";

const Billing = () => {
  return (
    <>
      <div className="bill">
        <div className="container">
          <div className="pb-24 billing-wraper">
            <div>
              <picture>
                <img
                  src={billingimg}
                  alt={billingimg}
                  className="bill-main-img"
                />
              </picture>
            </div>
            <div className="pt-3 right">
              <h4 className="font-poppins font-semibold text-3xl text-white leading-10">
                Easily control your billing & invoicing.
              </h4>
              <p className="text-xs font-poppins font-normal text-white opacity-60 leading-5 pt-3">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="flex items-center pt-9 flex-col ">
                <div className="download">
                  <img src={appstoreImg} alt={appstoreImg} />
                  <img src={playstoreImg} alt={playstoreImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
