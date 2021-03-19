import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function CryotoTradeCoin({
  coinSrc,
  coinName,
  capital,
  today_cap,
  inc_dec,
  inc_dec_val,
  data,
}) {
  return (
    <section class="bal-section container-fluid mb-5">
      <div class="coin-box">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img class="img-xs" src={coinSrc} alt="coin image" />
            <div class="ml-10">
              <h3 class="coin-name">{coinName}</h3>
              <small class="text-muted">${capital}</small>
              {/* $76,312,373 */}
            </div>
          </div>

          <div>
            {inc_dec == "increase" ? (
              <small class="d-block mb-0 txt-green">
                <i class="txt-green mr-10 mb-5">
                  <FaArrowUp />
                </i>
                ${today_cap}
              </small>
            ) : (
              <small class="d-block mb-0 txt-red">
                <i class="txt-red mr-10 mb-5">
                  <FaArrowDown />
                </i>
                ${today_cap}
              </small>
            )}

            <small class="text-muted d-block">
              {inc_dec} {inc_dec_val}
            </small>
          </div>
        </div>
        <div class="watch-chart mt-15 text-center" style={{ height: "100px" }}>
          <span class="watch1">
            <Sparklines data={data} limit={20} svgHeight={100} svgWidth={600}>
              <SparklinesLine
                style={{
                  stroke: "none",
                  fill: coinName == "Bit Coin" ? "#FFC62E" : "#224E9D",
                  fillOpacity: "1",
                }}
              />
              {/* <SparklinesLine /> */}
            </Sparklines>
          </span>
        </div>
      </div>
    </section>
  );
}
