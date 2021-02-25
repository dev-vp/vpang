import React from 'react';
import {TechStack} from './index';

class Experience extends React.Component{
  render(){
    return (
      <div id="experience-container">
        <h1 className="tiffany">Experience</h1>
        <div id="experience-wrapper">
          <TechStack />
          <div id="work-experience">
            <div id="deutsche" className="company">
              <div className="employed-year">
                <h3 className="tiffany">2016 - 2020</h3>
              </div>
              <div className="company-details">
                <h3>Deutsche Bank</h3>
                <h4>Financial Crimes Operation - Risk Management</h4>
                <p className="gray-italics">Wall Street, NY</p>
                <p id="deutsche-details">Responsible for risk mitigation efforts and exam management across six core programs; Transaction Monitoring, Fraud, Suspicious Activity Reporting, Special Investigations, Management Information, and User Acceptance Testing.
                </p>
              </div>
            </div>
            <div id="boc" className="company">
              <div className="employed-year">
                <h3 className="tiffany">2014 - 2016</h3>
              </div>
              <div className="company-details">
                <h3>Bank of China</h3>
                <h4>Legal and Compliance</h4>
                <p className="gray-italics">New York, NY</p>
                <p id="boc-details">Responsible for reviewing surveillance alerts, escalation of suspicious activities, and conducting risk-based analysis on correspondent activities.Worked in various capacities/roles including AML Investigator, SAR Drafter, and Correspondent Risk Analyst.</p>
              </div>
            </div>
            <div id="chase" className="company">
              <div className="employed-year">
                <h3 className="tiffany">2012 - 2014</h3>
              </div>
              <div className="company-details">
                <h3>J.P. Morgan Chase</h3>
                <h4>Teller</h4>
                <p className="gray-italics">Springfield, NY</p>
                <p id="chase-details">Performed 1LoD AML duties including real-time customer screening/transaction monitoring (i.e. based on customer behavior, customer interaction, elderly abuse scenarios, fraudulent checks, identity theft, and suspicious transaction activity via account activity spot-check) and regulatory reporting (i.e. CTR, SAR escalation, etc.). In addition to the above, was also responsible for daily cash management, dual control, account referrals, business deposits, check cashing, and deposits/withdrawals.
                </p>
              </div>
            </div>
            <div id="td-bank" className="company">
              <div className="employed-year">
                <h3 className="tiffany">2010 - 2012</h3>
              </div>
              <div className="company-details">
                <h3>TD Bank, N.A.</h3>
                <h4>Teller</h4>
                <p className="gray-italics">Mineola, NY</p>
                <p id="td-bank-details">Performed 1LoD AML duties including customer screening (i.e. based on customer behavior, customer interaction, elderly abuse scenarios, fraudulent checks, identity theft, and suspicious transaction activity via account activity spot-check) and regulatory reporting (i.e. CTR, SAR escalation, etc.). In addition to the above, was also responsible for daily cash management, dual control, account referrals, drive-up, night deposits, check cashing, deposits/withdrawals, and bond redemption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Experience;
