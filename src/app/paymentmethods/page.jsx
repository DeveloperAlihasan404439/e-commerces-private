import React from "react";

function PaymentMethodsPage() {
  return (
    <div className="w-[90%] mx-auto font-robot mt-5">
      <section className="p-5 text-black bg-gray-50 border rounded space-y-4">
        <h3 className="text-xl font-bold">
          Payment <span className="text-[#395bef]">Methods</span>
        </h3>
        <div className="space-y-2 pl-10">
          <p className="text-sm ">
            Cash on delivery Service - Available for all order from U.A.E{" "}
          </p>
          <p className="text-sm ">
            Credit card on delivery-Only for Cards Issued by U.A.E. Banks and in
            U.A.E only
          </p>
          <p className="text-sm ">
            Online Card Payment -Available for All orders
          </p>
          <p className="text-sm ">
            Deposit to our corporate bank account in Dubai U.A.E - Available for
            all orders.
          </p>
          <p className="text-sm ">
            Transfer through Western Union or through Exchange Companies
          </p>
          <p className="text-sm ">
            T/T to our Corporate bank account in Dubai U.A.E
          </p>
        </div>
      </section>
    </div>
  );
}

export default PaymentMethodsPage;
