import { faCoins, faTable } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleDetails from "../SingleDetails/SingleDetails";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  let [servicedetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("https://rafeulanamudoy.github.io/fakeservicedetail/fakeservice.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    if (servicedetails.length === 0) {
      return;
    }

    const findSingleDetails = servicedetails?.find(
      (details) => parseInt(serviceId) === parseInt(details?.id)
    );
    setSingleService(findSingleDetails);
    console.log(findSingleDetails);
  }, [servicedetails]);

  return (
    <div>
      <h1>Service details show Here {serviceId} </h1>
      <SingleDetails
        key={singleService?.id}
        singleService={singleService}
      ></SingleDetails>
    </div>
  );
};

export default ServiceDetails;
