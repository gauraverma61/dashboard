import React from "react";
import DashboardIcon from "@public/Assets/Icons/Dashboard.svg";
import AnalitycsIcon from "@public/Assets/Icons/Analitycs.svg";
import PaymentsIcon from "@public/Assets/Icons/Payment.svg";
import PercentageIcon from "@public/Assets/Icons/Percentage.svg";
import SecuritiesIcon from "@public/Assets/Icons/security.svg";
import HelpIcon from "@public/Assets/Icons/help.svg";
import SettingsIcon from "@public/Assets/Icons/setting.svg";
import BankIcon from "@public/Assets/Icons/bank.svg";
import LogoIcon from "@public/Assets/Icons/logo-icon.svg";
import Image from "next/image";

const SideTabData: {
  icon: any;
  title: string;
}[] = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
  },
  {
    icon: AnalitycsIcon,
    title: "Analitycs",
  },
  {
    icon: PaymentsIcon,
    title: "Payments",
  },
  {
    icon: PercentageIcon,
    title: "Deposit",
  },
  {
    icon: BankIcon,
    title: "Moneybox",
  },
  {
    icon: SecuritiesIcon,
    title: "Securities",
  },
];

const Sidebar = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <div className="py-7 px-8 flex gap-3 border-b border-[#303031]">
        <Image src={LogoIcon} alt="logo-icon" />
        <div className=" text-lg font-semibold text-white">InvestBank</div>
      </div>
      <div className="pt-7">
        {SideTabData?.map((tab, index) => {
          return (
            <div key={index} className=" flex items-center gap-4 px-12 py-5 cursor-pointer">
              <Image width={24} height={24} src={tab.icon} alt={tab.title} />
              <div className=" text-base font-medium">{tab.title}</div>
            </div>
          );
        })}
      </div>
      <div className="mx-6 flex border-b border-[#303031] my-4"></div>
      <div className=" flex items-center gap-4 px-12 py-5 cursor-pointer">
        <Image width={24} height={24} src={HelpIcon} alt={"help"} />
        <div className=" text-base font-medium">Help</div>
      </div>
      <div className=" flex items-center gap-4 px-12 py-5 cursor-pointer">
        <Image width={24} height={24} src={SettingsIcon} alt={"settings"} />
        <div className=" text-base font-medium">Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
