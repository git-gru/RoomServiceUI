import React, { useEffect, useState, useRef } from 'react'
import CopyIcon from '../assets/img/Copy.svg';
import { activateService, getAllServices } from '../api/service'

const Service = ({ id, serviceSite, serviceDescription, promoCode, isBonusActivated }) => {
  const [isActivated, setIsActivate] = useState(isBonusActivated)
  const [copySuccess, setCopySuccess] = useState('');

  const promoCopyRef = useRef(null);

  function copyToClipboard(e) {
    promoCopyRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copied!');
  };

  async function handleClick() {
    const service = {
      "Id": id,
      "SiteName": serviceSite,
      "Description": serviceDescription,
      "PromoCode": promoCode,
      isBonusActivated: true
    }

    const res = await activateService(id, service)
    console.log("put result:", res)
    if (res.status == 204)
      setIsActivate(true)
  }

  return (
    <div className="row d-flex flex-row bg-white m-0 mt-4 p-3">
      <div className="col-sm d-flex flex-column justify-centent-center">
        <h2>{serviceSite}</h2>
        <p className="text-secondary">{serviceDescription}</p>
      </div>
      <div className="col-sm d-flex flex-column justify-content-around">

        <p className="text-secondary">PromoCode</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={promoCode} ref={promoCopyRef} />
          <div className="input-group-append">
            <span className="input-group-text bg-transparent"
              id="basiaddon2"
              onClick={copyToClipboard}>
              <CopyIcon />
              {copySuccess}
            </span>
          </div>
        </div>

      </div>
      <div className="col-sm d-flex flex-row justify-content-center align-items-center" >
        <button type="button"
          className="btn btn-primary w-50 "
          onClick={handleClick}
          disabled={isActivated}>
          {isActivated ? "Activated" : "Activate Bonus"}
        </button>
      </div>
    </div>
  );
}

const Search = ({ onTypeFilter }) => {
  const [filterName, setFilterName] = useState("");

  function onChangeHandler(e) {
    const filter = e.target.value;
    onTypeFilter(filter);
    setFilterName(filter);
  }
  return (
    <div>
      <p className="mt-4">Filter</p>
      <div className="input-group mb-3 w-25">
        <input type="text"
          className="form-control"
          name="filter"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={filterName}
          onChange={onChangeHandler} />

        <div className="input-group-append">
          <button className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => {
              setFilterName("");
              onTypeFilter("");
            }}>
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

// const services = [{ site:"SiteConstructor.io", description:"Description", promocode:"PromoCode1" },
//                   { site:"AppVisioin.com", description:"Description", promocode:"PromoCode1" },
//                   { site:"LogoType.io", description:"Description", promocode:"PromoCode1" },];

const Main = () => {
  const [services, setServices] = React.useState([]);
  const [filterName, setFilterName] = React.useState("");
  useEffect(async () => {
    let res = await getAllServices()
    console.log(res)
    setServices(res);
  }, []
  )
  function onType(filterName) {
    setFilterName(filterName);
  }
  return (
    <main className="c-main" style={{ padding: "32px" }}>
      <h1>Services</h1>
      <Search onTypeFilter={onType} />
      {services.filter(service => filterName ? service.siteName.toUpperCase().includes(filterName.toUpperCase()) : true).map(service => {
        return <Service id={service.id}
          serviceSite={service.siteName}
          serviceDescription={service.description}
          promoCode={service.promoCode}
          isBonusActivated={service.isBonusActivated} />
      })}

    </main>
  );
};

export default Main;