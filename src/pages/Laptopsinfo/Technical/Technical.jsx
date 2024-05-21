import React from "react";
import "./technical.css";

export const Technical = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="technical_section_header">
            <div className="technical_header_items">
              <div className="technical_item1">Technical Details</div>
              <div className="technical_item2">Similar Products</div>
              <div className="technical_item3">Comments</div>
            </div>
            <hr className="technical_hr" />
          </div>

          <div className="technical_tech">Technical Details</div>
          <div className="technical_main">
            <div className="technical_main_titles1">
              <div className="technical_title1">Display</div>
              <div className="technical_title1">Graphics</div>
              <div className="technical_title1">Processor</div>
              <div className="technical_title1">In the box</div>
              <div className="technical_title1">Height</div>
              <div className="technical_title1">Width</div>
            </div>
            <div className="technical_main_titles2">
              <div className="technical_title2">13.3-inch (diagonal) LED-backlit display with IPS technology</div>
              <div className="technical_title2">Apple 10-core GPU</div>
              <div className="technical_title2">Apple M2 chip</div>
              <div className="technical_title2">67W USB-C Power Adapter, USB-C Charge Cable (2 m)</div>
              <div className="technical_title2">0.61 inch (1.56 cm)</div>
              <div className="technical_title2">11.97 inches (30.41 cm)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
