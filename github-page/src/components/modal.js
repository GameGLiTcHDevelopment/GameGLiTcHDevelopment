import React from "react";
import { codeData } from "../data/codeData";
import movementTable from "../MovementCorrection.png";

export function Modal({ activeIndex, index, onClick }) {
  const { originalCode, lastUpdated, type, newCode } = codeData[index];

  return (
    <div
      className={`modal-bg ${activeIndex === index ? "bg-active" : ""}`}
      onClick={onClick}
    >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>Updates</div>

        {codeData[index] ? (
          <div className='modal-cards'>
            <div className='modal-cards-header'>Last Updated {lastUpdated}</div>

            <ul>
              <li>
                Some slight changes needed to be made in the movement table
              </li>
            </ul>
            <img src={movementTable} alt='' />
            <ul>
              <li>
                For velocity and addforce methods the Time.deltaTime is already
                taken care of by Unities physics engine so there is no need to
                apply Time.deltaTime. Make sure to still include these methods
                inside the fixedUpdate event function.
              </li>
            </ul>
            <div className='code-block-container'>
              <table>
                <tbody>
                  {originalCode.map((data, dataIndex) => {
                    return (
                      <React.Fragment key={dataIndex}>
                        <tr>
                          <td>
                            <code className='code-block' />
                          </td>
                          <td>
                            <code
                              className='code-block'
                              data-code-marker='codeLine'
                            >
                              {data}
                            </code>
                          </td>
                          <td>//Original Code</td>
                        </tr>
                        <tr>
                          <td>
                            <code
                              className='code-block'
                              data-code-marker={type[dataIndex]}
                            ></code>
                          </td>
                          <td>
                            <code
                              className='code-block'
                              data-code-marker={
                                type[dataIndex] === "-" ? "subtract" : "add"
                              }
                            >
                              {newCode[dataIndex]}
                            </code>
                          </td>
                          <td>//New Code</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className='modal-empty-text'>Nothing to see here</div>
        )}
      </div>
    </div>
  );
}
