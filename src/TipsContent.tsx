import React from "react";
import { RiLockPasswordFill, RiAccountPinCircleFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";

const TipsContent = () => {
  return (
    <>
      <div className="transition ease-in-out delay-150 over:-translate-y-1 hover:scale-105 duration-100 flex flex-col border-2 border-deepYellow rounded-xl shadow-md border-opacity-20 w-10/12 px-3 py-2 md:px-5 lg:h-full">
        <div className="relative">
          <RiLockPasswordFill className="text-4xl md:text-5xl text-[#f59e0b] m-2" />
        </div>
        <div className="relative m-2">
          <h1 className="font-bold md:text-xl">Use Strong, Unique Password</h1>
        </div>
        <div className="ml-4 relative">
          <ul className="list-disc py-2 md:text-lg">
            <li>
              Create strong, complex passwords for your online financial
              account. For example, consider using paraphrase that are easy to
              remember such as "PurpleBanana$Park3dMyCar" which is highly
              secure.
            </li>
            <li>
              Avoid using easily guessable password like birthday or sequential
              numbers such as "password!" or "123456,".
            </li>
            <li>
              Use different password for different financial account. Hence,
              when one password is compromised, the other accounts remain
              secure.
            </li>
            <li>
              It is good practice to periodically update your passwords,
              especially for critical accounts. This practice reduces the risk
              of someone gaining unauthorized access over time
            </li>
            <li>
              Do not share your passwords with others or leave them unprotected.
            </li>
          </ul>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 over:-translate-y-1 hover:scale-105 duration-100 flex flex-col border-2 border-deepYellow rounded-xl shadow-md border-opacity-20 w-10/12 px-3 py-2 md:px-5 lg:h-full">
        <div className="">
          <RiAccountPinCircleFill className="text-4xl md:text-5xl text-[#f59e0b] m-2" />
        </div>
        <div className="relative m-2">
          <h1 className="font-bold md:text-xl">
            Regularly Monitor Your Financial Accounts
          </h1>
        </div>
        <div className="ml-4 relative">
          <ul className="list-disc py-2 md:text-lg">
            <li>
              Frequently review your bank account and credit card statements for
              any unauthorised transactions.
            </li>
            <li>
              Set up account alerts to receive notifications of unusual
              activity. These alerts can notify you of unusual account activity,
              low balances, or large transactions. Being proactive in monitoring
              your accounts helps you detect and respond to any potential issues
              quickly.
            </li>
            <li>
              Report any suspicious transactions to your financial institution
              immediately! Early detection helps prevent potential losses.
            </li>
            <li>
              Reject demand from "bank representatives" calling you and asking
              you to transfer money.
            </li>
          </ul>
        </div>
      </div>
      <div className="transition ease-in-out delay-150 over:-translate-y-1 hover:scale-105 duration-100 flex flex-col border-2 border-deepYellow rounded-xl shadow-md border-opacity-20 w-10/12 px-3 py-2 md:px-5 lg:h-full">
        <div className="">
          <BsBank2 className="text-4xl md:text-5xl text-[#f59e0b] m-2" />
        </div>
        <div className="relative m-2">
          <h1 className="font-bold md:text-xl">
            Enable Multi-factor Authentication (MFA)
          </h1>
        </div>
        <div className="ml-4 relative">
          <ul className="list-disc py-2 md:text-lg">
            <li>
              You may request the staff at the front office to set up
              multi-factor authentication for your bank account.
            </li>
            <li>
              Adding security layer such as one-time authentication code sent to
              your mobile device or email account after entering password makes
              accoount more secure.
            </li>
            <li>
              Other type of MFA include physical identifier, and biometric such
              as voice, fingerprint or facial recognition. This makes it
              significantly harder for unauthorized individuals to access your
              accounts, even if they have your password.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TipsContent;
