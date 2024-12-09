import { useContext } from "react";
import { FundContext } from "./NavBarSection";

export default function Test() {
  const fund = useContext(FundContext);

  return <h1>{fund.name}</h1>;
}
