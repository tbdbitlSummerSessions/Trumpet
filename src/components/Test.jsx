import { useContext } from "react";
import { FundContext } from "./NavBarSection";

export default function Test() {
  const fund = useContext(FundContext);
  console.log("test");
  return <h1>{fund.name}</h1>;
}
