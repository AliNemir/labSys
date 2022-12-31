// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React, { useState } from "react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import LabCards from "./components/LabsCardContainer";
import DeviceCards from "./components/DevicesCardContainer";
import Transactions from "./components/Transactions";

function Billing() {
  const [labVeiw, setLabView ] = useState(true)
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {labVeiw && (<LabCards title={"Labs"} />)}
      {!labVeiw && (<DeviceCards title={"Devices"} />)}
    </Flex>
  );
}

export default Billing;
