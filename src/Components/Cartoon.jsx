import React from 'react'

const Cartoon = () => {
  return (
      <>
      <section className="flex justify-center items-center w-full bg-black mx-auto text-white border-b-8 border-gray-500">
        <div className="relative">
          <img
            src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="Kids Profile"
            className="w-[555px] relative z-10"
          />
        </div>
        <div>
          <span className="block  text-[44px] font-bold">
            Create profiles <br /> for kids
          </span>
          <span className="block  text-[26px]">
            Send children on adventures
            <br /> with their favourite characters in
            <br /> a space made just for them—
            <br />
            free with your membership.
          </span>
        </div>
      </section>
      </>
  )
}

export default Cartoon
