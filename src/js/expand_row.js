import { handlerButtonModalOpen, handlerButtonModalClose } from "./modal";

const table = document.querySelector(".table");

table.onclick = function (event) {
  let target = event.target;
  while (target !== this) {
    if (target.tagName === "TD" && target.classList.contains("name")) {
      let tr = target.parentNode;
      if (tr.classList.contains("expand")) {
        clipRow(tr);
        return;
      }
      expandRow(tr);
      return;
    }
    target = target.parentNode;
  }
};

function expandRow(node) {
  const row = createRow();
  node.after(row);
  node.classList.add("expand");
}

function clipRow(node) {
  let row = node.nextElementSibling;
  row.remove();
  node.classList.remove("expand");
}

function createRow() {
  const nodeRow = document.createElement("tr");
  nodeRow.classList.add("activation");
  nodeRow.innerHTML = `<td colspan="6">
                    <div class="activation__head">
                      <p class="activation__text-one">
                        Доступно к активации: 2
                      </p>
                      <p class="activation__text-two">
                        Запросите код и активируйте программу
                      </p>
                      <button class="request-code button" type="button">
                        Запросить код
                      </button>
                    </div>
                    <div class="activation__info">
                      <div class="activation__info-text">
                        <p>
                          <span class="text-grey">Дата активации:</span>
                          2022-09-15 13:54:59
                        </p>
                        <div class="icon-info">
                          <p>
                            <span class="text-grey"
                              >Наименование компьютера:</span
                            >
                            HOME-PC
                          </p>
                          <div class="info-notice info-notice-icon">
                            <div class="info-notice__wrapper">
                              <svg
                                class="info-notice__bg"
                                width="386"
                                height="157"
                                viewBox="0 0 386 157"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_d_1_634)">
                                  <path
                                    d="M37.1802 28.5764L20 43.3002H37.1802V28.5764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M33.9554 20.2841C33.9554 17.9181 36.1934 16 38.9541 16H361.001C363.762 16 366 17.9181 366 20.2841V128.716C366 131.082 363.762 133 361.001 133H38.9541C36.1934 133 33.9554 131.082 33.9554 128.716V20.2841Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_1_634"
                                    x="0"
                                    y="0"
                                    width="386"
                                    height="157"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_1_634"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_1_634"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div class="info-notice__text">
                                <p>Роман</p>
                                <p>Pentium (R) Dual-Core CPU T440 @ 2.20 GHz</p>
                                <p>Майкрософт Windows 8.1 Профессиональная</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          <span class="text-grey">Комментарий:</span> Хочу
                          перенести программу
                        </p>
                      </div>
                      <div class="activation__info-button">
                        <button class="deactivate-button button" type="button">
                          Деактивировать
                        </button>
                      </div>
                    </div>
                    <div class="activation__info">
                      <div class="activation__info-text">
                        <p>
                          <span class="text-grey">Дата активации:</span>
                          2022-09-15 13:54:59
                        </p>
                        <div class="icon-info">
                          <p>
                            <span class="text-grey"
                              >Наименование компьютера:</span
                            >
                            HOME-PC
                          </p>
                          <div class="info-notice info-notice-icon">
                            <div class="info-notice__wrapper">
                              <svg
                                class="info-notice__bg"
                                width="386"
                                height="157"
                                viewBox="0 0 386 157"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_d_1_634)">
                                  <path
                                    d="M37.1802 28.5764L20 43.3002H37.1802V28.5764Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M33.9554 20.2841C33.9554 17.9181 36.1934 16 38.9541 16H361.001C363.762 16 366 17.9181 366 20.2841V128.716C366 131.082 363.762 133 361.001 133H38.9541C36.1934 133 33.9554 131.082 33.9554 128.716V20.2841Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_1_634"
                                    x="0"
                                    y="0"
                                    width="386"
                                    height="157"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 0 0.898039 0 0 0 1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_1_634"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_1_634"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                              <div class="info-notice__text">
                                <p>Роман</p>
                                <p>Pentium (R) Dual-Core CPU T440 @ 2.20 GHz</p>
                                <p>Майкрософт Windows 8.1 Профессиональная</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          <span class="text-grey">Комментарий:</span> Хочу
                          перенести программу
                        </p>
                      </div>
                      <div class="activation__info-button">
                        <button class="deactivate-button button" type="button">
                          Деактивировать
                        </button>
                      </div>
                    </div>
                  </td>`;
  console.log(nodeRow);
  let button = nodeRow.querySelector(".request-code");
  button.onclick = handlerButtonModalOpen;
  return nodeRow;
}
handlerButtonModalClose();
