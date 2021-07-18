import React from "react";
import { codeData } from "../data/codeData";

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
            <div className='code-block-container'>
              <table>
                <tbody>
                  {originalCode.map((data, dataIndex) => {
                    return (
                      <React.Fragment key={dataIndex}>
                        <tr>
                          <td>
                            <code
                              className='code-block'
                              style={{
                                background:
                                  type[dataIndex] === "-"
                                    ? "#f8514966"
                                    : "black",
                              }}
                              data-code-marker=''
                            />
                          </td>
                          <td>
                            <code
                              className='code-block'
                              style={{ background: "var(--code-middle)" }}
                              data-code-marker='codeLine'
                            >
                              {data}
                            </code>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <code
                              className='code-block'
                              style={{
                                background:
                                  type[dataIndex] === "-"
                                    ? "#f8514966"
                                    : "black",
                              }}
                              data-code-marker='-'
                            ></code>
                          </td>
                          <td>
                            <code
                              className='code-block'
                              style={{
                                background:
                                  type[dataIndex] === "-"
                                    ? "#f8514966"
                                    : "black",
                              }}
                              data-code-marker='codeLine'
                            >
                              {newCode[dataIndex]}
                            </code>
                          </td>
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
